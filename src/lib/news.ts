import type { MarkdownInstance } from 'astro';
import { checkBody, fail, isDate, todayJst } from './content';
export const topics = [
  { id: 'models', name: 'AIモデル' },
  { id: 'products', name: 'サービス・製品' },
  { id: 'business', name: '企業・業界' },
  { id: 'policy', name: '規制・政策' },
  { id: 'research', name: '研究' },
];
export interface NewsSource { title: string; url: string; }
export interface NewsMeta { title: string; description: string; date: string; updated?: string; topic: string; sources: NewsSource[]; cover?: string; coverAlt?: string; draft?: boolean; }

function check(slug: string, meta: NewsMeta, raw: string) {
  const problems: string[] = [];
  if (!meta.title || !meta.description || !meta.date || !meta.topic) problems.push('title, description, date, topic は必須です');
  if (!topics.some(t => t.id === meta.topic)) problems.push(`topic は ${topics.map(t => t.id).join(' / ')} のいずれかにしてください`);
  if (!isDate(meta.date) || (meta.updated && !isDate(meta.updated))) problems.push('date / updated は引用符付きの "YYYY-MM-DD" にしてください');
  if (!Array.isArray(meta.sources) || !meta.sources.length) problems.push('sources（出典）を1つ以上指定してください');
  for (const s of meta.sources ?? []) if (!s?.title || !/^https:\/\//.test(s?.url ?? '')) problems.push(`sources の title と https:// から始まる url を確認してください: ${JSON.stringify(s)}`);
  if (/^##\s*(出典|参照|参考)/m.test(raw)) problems.push('出典は本文ではなく frontmatter の sources に書いてください（自動で表示されます）');
  const body = checkBody(raw, { ...meta, affiliate: false }).map(p => p.startsWith('アフィリエイトリンク') ? 'ニュースにはアフィリエイトリンクを入れません' : p);
  fail(`ニュース ${slug}`, [...problems, ...body]);
}

const files = import.meta.glob<MarkdownInstance<NewsMeta>>('../content/news/*.md', { eager: true });
export const news = Object.entries(files).map(([path, item]) => {
  const slug = path.split('/').pop()!.replace(/\.md$/, '');
  const meta = item.frontmatter;
  check(slug, meta, item.rawContent());
  return { ...item, slug, meta, topic: topics.find(t => t.id === meta.topic)! };
}).filter(n => !n.meta.draft && n.meta.date <= todayJst())
.sort((a, b) => b.meta.date.localeCompare(a.meta.date) || a.slug.localeCompare(b.slug));
