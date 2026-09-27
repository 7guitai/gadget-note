// 記事カバーから、一覧カード用（600×315 WebP）とSNSシェア用（1200×630 JPEG）を作る。
// 使い方：node scripts/image-variants.mjs   （新しい記事の cover.webp を置いたあとに実行）
import sharp from 'sharp';
import { readdirSync, existsSync } from 'node:fs';
const root = 'public/images';
for (const dir of readdirSync(root, { withFileTypes: true })) {
  if (!dir.isDirectory()) continue;
  const src = `${root}/${dir.name}/cover.webp`;
  if (!existsSync(src)) continue;
  await sharp(src).resize(600, 315, { fit: 'cover' }).webp({ quality: 80 }).toFile(`${root}/${dir.name}/cover-600.webp`);
  await sharp(src).resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 85, mozjpeg: true }).toFile(`${root}/${dir.name}/cover.jpg`);
  console.log('ok', dir.name);
}
