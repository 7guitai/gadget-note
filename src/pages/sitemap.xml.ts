import type { APIRoute } from 'astro';
import { articles, categories, PER_PAGE } from '../lib/content';
export const GET: APIRoute = ({ site }) => {
  const listPages = Array.from({ length: Math.max(0, Math.ceil(articles.length / PER_PAGE) - 1) }, (_, i) => `/articles/page/${i + 2}/`);
  const paths = ['/', '/articles/', ...listPages, '/about/', '/privacy/', ...categories.filter(c => articles.some(a => a.meta.category === c.id)).map(c => `/category/${c.id}/`), ...articles.map(a => `/articles/${a.slug}/`)];
  // 記事は更新日（なければ公開日）を lastmod に入れ、更新した記事を検索エンジンに早く見直してもらう
  const lastmod = new Map(articles.map(a => [`/articles/${a.slug}/`, a.meta.updated ?? a.meta.date]));
  const xml = site ? paths.map(path => {
    const mod = lastmod.get(path);
    return `<url><loc>${new URL(path, site).href.replaceAll('&', '&amp;')}</loc>${mod ? `<lastmod>${mod}</lastmod>` : ''}</url>`;
  }).join('') : '';
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${xml}</urlset>`, { headers: { 'Content-Type': 'application/xml' } });
};
