import type { MarkdownInstance } from 'astro';
export const categories = [
  { id: 'audio', name: 'イヤホン・音楽', short: 'AUDIO', color: '#e8eef9' },
  { id: 'charging', name: '充電・モバイル', short: 'CHARGING', color: '#e7f0ec' },
  { id: 'desk', name: 'デスク周り', short: 'DESK', color: '#f2eadd' },
];
export interface ArticleMeta { title: string; description: string; category: string; date: string; updated?: string; draft?: boolean; kind: string; coverLabel: string; affiliate?: boolean; }
const files = import.meta.glob<MarkdownInstance<ArticleMeta>>('../content/articles/*.md', { eager: true });
export const articles = Object.entries(files).map(([path, article]) => {
  const slug = path.split('/').pop()!.replace(/\.md$/, '');
  const meta = article.frontmatter;
  if (!meta.title || !meta.description || !categories.some(c => c.id === meta.category) || !meta.date || !meta.kind || !meta.coverLabel) throw new Error(`記事の必須情報を確認してください: ${slug}`);
  return { ...article, slug, meta, category: categories.find(c => c.id === meta.category)! };
}).filter(a => !a.meta.draft && a.meta.date <= new Date().toLocaleDateString('sv-SE', { timeZone: 'Asia/Tokyo' }))
.sort((a,b) => b.meta.date.localeCompare(a.meta.date) || a.slug.localeCompare(b.slug));
export const displayDate = (date: string) => date.replaceAll('-', '.');
