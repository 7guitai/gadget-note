// SVGのサムネを書き出す：node scripts/export-thumbnail.mjs <slug> [<slug> ...]
// 元ファイル design/thumbnails/<slug>.svg（1200×630）→ design/thumbnails/<slug>.png と public/images/<slug>/cover.webp
// 文字は design/assets/fonts/NotoSansJP.ttf（font-family: Noto）で描画する。書き出し後に scripts/image-variants.mjs を実行する。
import sharp from 'sharp';
import { execSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';

let chromium;
try { ({ chromium } = await import('playwright')); }
catch { ({ chromium } = await import(path.join(execSync('npm root -g').toString().trim(), 'playwright/index.mjs'))); }

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const font = path.join(root, 'design/assets/fonts/NotoSansJP.ttf');
const work = mkdtempSync(path.join(tmpdir(), 'thumb-'));
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
for (const slug of process.argv.slice(2)) {
  const svg = readFileSync(path.join(root, 'design/thumbnails', `${slug}.svg`), 'utf8');
  const html = `<!doctype html><meta charset="utf-8"><style>@font-face{font-family:Noto;src:url('file://${font}')}html,body{margin:0;width:1200px;height:630px;overflow:hidden}svg{display:block}</style>${svg}`;
  const file = path.join(work, `${slug}.html`);
  writeFileSync(file, html);
  await page.goto('file://' + file);
  await page.evaluate(async () => { await document.fonts.load('700 40px Noto'); await document.fonts.ready; });
  const loaded = await page.evaluate(() => document.fonts.check('700 40px Noto'));
  if (!loaded) throw new Error('フォント（Noto Sans JP）を読み込めませんでした');
  const png = await page.locator('svg').first().screenshot();
  const meta = await sharp(png).metadata();
  if (meta.width !== 1200 || meta.height !== 630) throw new Error(`${slug}: サイズが ${meta.width}×${meta.height} です（1200×630 にしてください）`);
  writeFileSync(path.join(root, 'design/thumbnails', `${slug}.png`), png);
  mkdirSync(path.join(root, 'public/images', slug), { recursive: true });
  await sharp(png).webp({ quality: 86 }).toFile(path.join(root, 'public/images', slug, 'cover.webp'));
  console.log('ok', slug);
}
await browser.close();
rmSync(work, { recursive: true, force: true });
