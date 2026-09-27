import type { APIRoute } from 'astro';
import { articles, categories, PER_PAGE } from '../lib/content';
export const GET: APIRoute = ({ site }) => {
  const listPages = Array.from({ length: Math.max(0, Math.ceil(articles.length / PER_PAGE) - 1) }, (_, i) => `/articles/page/${i + 2}/`);
  const paths = ['/', '/articles/', ...listPages, '/about/', '/privacy/', ...categories.filter(c => articles.some(a => a.meta.category === c.id)).map(c => `/category/${c.id}/`), ...articles.map(a => `/articles/${a.slug}/`)];
  const xml = site ? paths.map(path => `<url><loc>${new URL(path, site).href.replaceAll('&', '&amp;')}</loc></url>`).join('') : '';
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${xml}</urlset>`, { headers: { 'Content-Type': 'application/xml' } });
};
