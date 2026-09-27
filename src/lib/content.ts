import type { MarkdownInstance } from 'astro';
import { existsSync } from 'node:fs';
export const categories = [
  { id: 'gadget', name: 'ガジェット', short: 'GADGET', desc: '毎日の道具を選ぶ', color: '#E3E8DD' },
  { id: 'ai', name: 'AI', short: 'AI', desc: '新しい使い方を知る', color: '#DDE6E4' },
  { id: 'souvenir', name: 'お土産', short: 'SOUVENIR', desc: '贈る気持ちをかたちに', color: '#EFE4D8' },
  { id: 'furniture', name: '家具・インテリア', short: 'FURNITURE', desc: '心地よい部屋をつくる', color: '#ECE5D7' },
  { id: 'toolbox', name: '道具箱', short: 'TOOLBOX', desc: '困ったときの手がかり', color: '#E1E7DC' },
  { id: 'life', name: '暮らし・その他', short: 'LIFE', desc: '日常を少し整える', color: '#E8E4E6' },
];
// 関連記事をつなぐための話題。記事の topics に1〜3個指定する。増やすときはここに追加する。
export const topics = ['charging', 'cable', 'storage', 'backup', 'desk', 'audio', 'tablet', 'ai-tools'];
export interface ArticleMeta { title: string; description: string; category: string; date: string; updated?: string; draft?: boolean; kind: string; coverLabel: string; cover?: string; coverAlt?: string; affiliate?: boolean; topics?: string[]; }

// 既知のアフィリエイト・短縮リンクのドメイン。必要に応じて追加する。
const affiliateHosts = /(amzn\.to|amzn\.asia|link\.amazon\/|amazon\.co\.jp\/[^"')\s]*[?&]tag=|hb\.afl\.rakuten\.co\.jp|af\.moshimo\.com|px\.a8\.net|ck\.jp\.ap\.valuecommerce\.com|click\.linksynergy\.com|t\.afi-b\.com|ad\.presco\.jp)/;

// 本文の画像・仮置き・購入リンクのチェック
function checkBody(raw: string, opts: { draft?: boolean; affiliate?: boolean; cover?: string; coverAlt?: string }) {
  const problems: string[] = [];
  if (opts.cover && !existsSync(`public${opts.cover}`)) problems.push(`cover の画像が見つかりません: public${opts.cover}`);
  if (opts.cover && !opts.coverAlt) problems.push('cover を使うときは coverAlt（画像の説明）も必要です');
  for (const [, src] of raw.matchAll(/<img[^>]*\ssrc="(\/[^"]+)"/g)) if (!existsSync(`public${src}`)) problems.push(`本文の画像が見つかりません: public${src}`);
  for (const tag of raw.match(/<img[^>]*>/g) ?? []) if (!/\salt="/.test(tag) || !/\swidth="/.test(tag) || !/\sheight="/.test(tag)) problems.push(`画像には alt, width, height を付けてください: ${tag}`);
  if (!opts.draft) {
    for (const [mark] of raw.matchAll(/【(?:リンク|要確認|体験|画像)[:：][^】]*】/g)) problems.push(`仮置きが残っています: ${mark}`);
    for (const tag of raw.match(/<a\s[^>]*>/g) ?? []) {
      if (!affiliateHosts.test(tag)) continue;
      if (!opts.affiliate) problems.push('アフィリエイトリンクがあるので affiliate: true にしてください');
      if (!/rel="[^"]*sponsored/.test(tag)) problems.push(`アフィリエイトリンクに rel="sponsored noopener" を付けてください: ${tag}`);
    }
    for (const [, link] of raw.matchAll(/\]\((https?:\/\/[^)\s]+)\)/g)) if (affiliateHosts.test(link)) problems.push(`アフィリエイトリンクは <a href="..." rel="sponsored noopener"> の形で書いてください: ${link}`);
  }
  return problems;
}
const isDate = (d: unknown) => /^\d{4}-\d{2}-\d{2}$/.test(String(d));
export const todayJst = () => new Date().toLocaleDateString('sv-SE', { timeZone: 'Asia/Tokyo' });
function fail(label: string, problems: string[]) {
  if (problems.length) throw new Error(`${label} を確認してください:\n- ${[...new Set(problems)].join('\n- ')}`);
}

function check(slug: string, meta: ArticleMeta, raw: string) {
  const problems: string[] = [];
  if (!meta.title || !meta.description || !meta.date || !meta.kind || !meta.coverLabel) problems.push('title, description, date, kind, coverLabel は必須です');
  if (!categories.some(c => c.id === meta.category)) problems.push(`category は ${categories.map(c => c.id).join(' / ')} のいずれかにしてください`);
  for (const t of meta.topics ?? []) if (!topics.includes(t)) problems.push(`topics は ${topics.join(' / ')} から選んでください（未登録: ${t}）`);
  if (!isDate(meta.date)) problems.push('date は引用符付きの "YYYY-MM-DD" にしてください');
  fail(`記事 ${slug}`, [...problems, ...checkBody(raw, meta)]);
}

const files = import.meta.glob<MarkdownInstance<ArticleMeta>>('../content/articles/*.md', { eager: true });
export const articles = Object.entries(files).map(([path, article]) => {
  const slug = path.split('/').pop()!.replace(/\.md$/, '');
  const meta = article.frontmatter;
  check(slug, meta, article.rawContent());
  return { ...article, slug, meta, category: categories.find(c => c.id === meta.category)! };
}).filter(a => !a.meta.draft && a.meta.date <= todayJst())
.sort((a,b) => b.meta.date.localeCompare(a.meta.date) || a.slug.localeCompare(b.slug));
// 記事のあるカテゴリだけ（メニュー用）。空のカテゴリはメニューに出さない
export const activeCategories = categories.filter(c => articles.some(a => a.meta.category === c.id));
type Article = (typeof articles)[number];
// 共通の話題が多い順 → 同じカテゴリ → 新しい順で関連記事を選ぶ
export function relatedArticles(article: Article, limit = 3) {
  const mine = new Set(article.meta.topics ?? []);
  const score = (a: Article) => (a.meta.topics ?? []).filter(t => mine.has(t)).length * 10 + (a.meta.category === article.meta.category ? 1 : 0);
  return articles.filter(a => a.slug !== article.slug)
    .map(a => ({ a, s: score(a) }))
    .sort((x, y) => y.s - x.s || y.a.meta.date.localeCompare(x.a.meta.date))
    .slice(0, limit).map(x => x.a);
}
export const displayDate = (date: string) => date.replaceAll('-', '.');
export const PER_PAGE = 12;
// カバー画像の派生（scripts/image-variants.mjs で作る一覧用600px・シェア用JPEG）
export function coverVariants(cover?: string) {
  if (!cover) return undefined;
  const base = cover.replace(/\.webp$/, '');
  const small = existsSync(`public${base}-600.webp`) ? `${base}-600.webp` : undefined;
  const og = existsSync(`public${base}.jpg`) ? `${base}.jpg` : cover;
  return { src: cover, small, og };
}
