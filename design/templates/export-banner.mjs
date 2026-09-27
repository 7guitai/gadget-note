// 記事バナーを書き出す：node design/templates/export-banner.mjs <slug> [<slug> ...]
// 事前に design/templates/<slug>.html を用意（既存のHTMLをコピーして .eye / h1 / .sub / .label と背景を書き換える）。
// Playwright（Chromium）が必要。書き出し後に public/images/<slug>/cover.webp へ変換し、scripts/image-variants.mjs を実行する。
import { chromium } from 'playwright';
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';
import path from 'node:path';
const dir = path.dirname(new URL(import.meta.url).pathname);
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
for (const slug of process.argv.slice(2)) {
  await page.goto('file://' + path.join(dir, slug + '.html'));
  await page.evaluate(() => document.fonts.ready);
  const png = await page.screenshot();
  mkdirSync(`public/images/${slug}`, { recursive: true });
  await sharp(png).webp({ quality: 84 }).toFile(`public/images/${slug}/cover.webp`);
  console.log('ok', slug);
}
await browser.close();
