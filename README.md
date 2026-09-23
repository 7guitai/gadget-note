# GADGET NOTE

ガジェット紹介サイトの初版。Astro + Markdown + GitHub + Cloudflare Pages。サイト名は仮称です。

## 入っているもの
- スマホ対応トップ、3カテゴリ、記事詳細、目次、関連記事、編集方針、404
- 一般的な選び方ガイド3本（未使用製品のレビューや未確認の価格はありません）
- 下書き非公開、日付順一覧、サイトマップ、canonical（SITE_URL設定時）
- GitHub上のビルド確認、Work向けAGENTS.md、記事テンプレート

## ローカル確認
Node.js 22.12以上が必要です。

```sh
npm ci
npm run dev
npm run build
```

## GitHubへ保存
1. 自分のGitHubで空のPrivateリポジトリ `gadget-note` を作成。README等を自動追加しない。
2. このフォルダの中身をリポジトリのルートへ保存する。package.jsonとsrcが直下にある構成。
3. WorkのGitHub接続で、そのリポジトリへのアクセスを許可する。
4. WorkにリポジトリURLを伝え、以後はそこで更新する。

ターミナルで新規アップロードする場合（既存リポジトリを上書きしない）：
```sh
git init -b main
git add .
git commit -m "Create gadget editorial site"
git remote add origin https://github.com/YOUR_ACCOUNT/gadget-note.git
git push -u origin main
```

## Cloudflare Pagesに接続
CloudflareのWorkers & PagesからPagesのGit連携プロジェクトを作成し、GitHubの対象リポジトリを選択。Workersのプロジェクトと混同しない。

| 設定 | 値 |
|---|---|
| Production branch | main |
| Framework preset | Astro |
| Build command | npm run build |
| Build output directory | dist |
| Root directory | 空欄（リポジトリ直下） |
| NODE_VERSION | 22 |

初回はCloudflareが発行する無料の pages.dev アドレスで公開できます。独自ドメインの購入は後からで大丈夫です。

初回デプロイ後、Cloudflare Pagesの本番環境変数 SITE_URL に本番URLを設定して再デプロイ。例示のドメインをそのまま登録しないでください。これでcanonicalとサイトマップが正しいURLになります。独自ドメイン接続時にも更新します。

プレビュー用ブランチはnoindexを出力します。本番サイトはmainブランチで運用してください。プレビューはURLを知る人が閲覧できる場合があるため、秘密情報は記事に入れないでください。

## 日々の記事更新
1. docs/article-template.md を src/content/articles/new-slug.md へコピー。
2. 内容・日付・カテゴリを編集。draft: true の間は公開されません。
3. 調査内容と表示を確認して draft: false に変更。
4. GitHubの作業ブランチに保存してPR作成。
5. Cloudflareのプレビューで確認し、mainに反映すると自動公開。

画像を入れる場合はpublic/imagesへ保存し、/images/filename.webpのように参照します。初版は画像の転載許諾を必要としない文字中心の表紙です。

未来日付はビルド時に除外されます。日付が来ても自動的に再ビルドはされません。定期投稿が必要になった時点で、スケジュールと実行権限を設定します。

## 公開前に決めること
- 正式サイト名とドメイン（空き状況・既存ブランドとの重複は未確認）
- GitHubリポジトリとCloudflareアカウントの接続
- アフィリエイトを使う場合の審査・ID・表示
- 問い合わせ先、解析、広告を追加する場合のプライバシー説明

## 公式資料
- https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/
- https://developers.cloudflare.com/pages/configuration/git-integration/
- https://docs.astro.build/en/guides/markdown-content/
