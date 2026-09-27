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

## バナー未対応の記事（2026-09-27時点、既存の画像のまま）
合う背景がまだないため、以下は既存の表紙を使用中。テーマに合う背景（例：AIはノートPC、音楽はイヤホン、家具・デスクは椅子や机）を用意してから差し替える。
- claude-code-cloud-sessions（AI）
- earphones-first（イヤホン）
- desk-small-start、laptop-stand-height-portability、usb-hub-dock-port-power-guide（デスク周り）
- qi2-wireless-charging-guide（ワイヤレス充電。charging の背景は有線の充電器のため流用しない）
