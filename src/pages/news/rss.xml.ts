import type { APIRoute } from 'astro';
import { news } from '../../lib/news';
const esc = (s: string) => s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('http://localhost/');
  const items = news.slice(0, 30).map(n => {
    const link = new URL(`/news/${n.slug}/`, base).href;
    return `<item><title>${esc(n.meta.title)}</title><link>${link}</link><guid>${link}</guid><pubDate>${new Date(`${n.meta.date}T09:00:00+09:00`).toUTCString()}</pubDate><description>${esc(n.meta.description)}</description></item>`;
  }).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>OCHA NOTE AIニュース</title><link>${new URL('/news/', base).href}</link><description>生成AIやAIを使ったサービスの動きを、公式発表をもとに短くまとめます。</description><language>ja</language>${items}</channel></rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
