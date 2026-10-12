# デザイン資料（OCHA NOTE デザイン修正キット 2026-09-27 より）

- `DESIGN_SYSTEM.md`：配色・余白・文字・バナー規格（サイトのCSSは src/styles/global.css に実装済み）
- `templates/`：記事バナー（1200×630）のHTMLテンプレートと対応表 `banner-data.json`
- `templates/export-banner.mjs`：テンプレートからバナーを書き出し、`public/images/<slug>/cover.webp` を作る
- `assets/backgrounds/`：文字なしの生成背景（charging / storage / editorial）。生成に使ったプロンプトは `image-prompts.json`
- `assets/fonts/`：バナー書き出し用のNoto Sans JP（SIL OFL）。サイト本体では配信しない

## 新しい記事にバナーを作る手順
1. 記事の主題に合う背景があるか確認する。充電系は charging、保存系は storage。**主題が違う記事に別テーマの写真を流用しない**（例：スタンドの記事に充電器の写真）。合う背景がなければ image-prompts.json と同じ条件で新しい背景を用意する。
2. 既存の `templates/<slug>.html` をコピーし、`.eye`（上段）/ `h1`（11文字前後）/ `.sub`（副題）/ `.label` と背景を書き換える。
3. `node design/templates/export-banner.mjs <slug>` で書き出し、`node scripts/image-variants.mjs` で一覧用・シェア用の画像を作る。
4. 記事の frontmatter に cover と coverAlt（「〇〇」のタイトル画像。写真はAI生成のイメージで、実際の製品写真ではありません）を書く。

## 背景画像の追加（未対応記事用）
image-prompts.json に ai / audio / desk / wireless のプロンプトを用意済み。生成した画像は design/assets/backgrounds/<名前>.webp として保存する。
- ai → claude-code-cloud-sessions
- audio → earphones-first
- desk → desk-small-start、laptop-stand-height-portability、usb-hub-dock-port-power-guide、nipogi-e1-ryzen-3250u
- wireless → qi2-wireless-charging-guide

## バナー未対応の記事（2026-09-27時点、既存の画像のまま）
合う背景がまだないため、以下は既存の表紙を使用中。テーマに合う背景（例：AIはノートPC、音楽はイヤホン、家具・デスクは椅子や机）を用意してから差し替える。
- claude-code-cloud-sessions（AI）
- earphones-first（イヤホン）
- desk-small-start、laptop-stand-height-portability、usb-hub-dock-port-power-guide、nipogi-e1-ryzen-3250u（デスク周り）
- qi2-wireless-charging-guide（ワイヤレス充電。charging の背景は有線の充電器のため流用しない）

## イラストのサムネを自分で作る（SVG、画像生成なし）
写真の背景を使わず、SVGの図形とNoto Sans JPで表紙を作る方法。依頼文は docs/thumbnail-prompt.md。
1. 既存の `design/thumbnails/<slug>.svg`（1200×630）をコピーし、文字・イラストを書き換える。文字は `font-family: Noto`。
2. `node scripts/export-thumbnail.mjs <slug>` を実行。`design/thumbnails/<slug>.png` と `public/images/<slug>/cover.webp` ができる（フォントが読み込めない、サイズが違う場合はエラーで止まる）。
3. PNGを開いて、文字の欠け・重なり・余白を確認する。
4. `node scripts/image-variants.mjs` で一覧用・シェア用の画像を作り、記事の cover と coverAlt（「イメージイラスト」を含める）を書く。
例：meta-muse-wonder
