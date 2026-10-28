import type { APIRoute } from 'astro';
import { articles } from '../lib/content';

// 新着記事のRSS。SNSへの自動投稿サービスやフィードリーダーが読む
const esc = (s: string) => s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');

export const GET: APIRoute = ({ site }) => {
  const abs = (path: string) => site ? new URL(path, site).href : path;
  const items = articles.slice(0, 30).map(a => `<item><title>${esc(a.meta.title)}</title><link>${esc(abs(`/articles/${a.slug}/`))}</link><guid isPermaLink="true">${esc(abs(`/articles/${a.slug}/`))}</guid><description>${esc(a.meta.description)}</description><category>${esc(a.category.name)}</category><pubDate>${new Date(`${a.meta.date}T00:00:00+09:00`).toUTCString()}</pubDate></item>`).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>OCHA NOTE</title><link>${esc(abs('/'))}</link><description>ガジェット、AI、お土産、家具、道具。毎日の暮らしで使うものを、使う場面から選ぶためのガイド。</description><language>ja</language>${items}</channel></rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
