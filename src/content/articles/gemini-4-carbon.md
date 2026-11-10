---
title: "Gemini 4 Carbonの提供開始｜Argonとの違い・使える人・日本での使い方"
description: "Googleは2026年11月11日（日本語版ブログ）、新しいAIモデル「Gemini 4 Carbon」の提供開始を発表しました。Gemini 4 Argonとの違い、Google AI Ultra・開発者・企業など使える人、APIの料金、日本での提供状況と注意点を、Googleの公式発表をもとに整理します。"
category: ai
date: "2026-11-11"
kind: "解説"
topics: [ai-tools]
coverLabel: "CARBON."
cover: "/images/gemini-4-carbon/cover.webp"
coverAlt: "「Gemini 4 Carbonの提供開始」のタイトル画像。重なった四角形のモデルの図と、複数のエージェントをつないだ線を描いたイメージイラスト"
draft: false
affiliate: false
---

Googleは、新しいAIモデル「**Gemini 4 Carbon**（ジェミニ 4 カーボン）」の**提供開始**を発表しました。日本語版のGoogle Japan Blogでは**2026年11月11日**に案内されています。Carbonは、Googleが「最も強力なモデル」と位置づけるモデルで、長い時間をかけて何段階も進める作業（コーディング、調査、データ分析、サイバーセキュリティなど）向けに作られています。

一般のユーザーが使えるのは、今のところ**有料プランの「Google AI Ultra」の加入者**です。Geminiアプリと、Google検索の「AIモード」で使えると案内されています。無料プランや「Google AI Pro」で使えるかどうかは、発表には書かれていません。この記事では、Googleの公式発表をもとに、Argonとの違いや使える人を整理します。

## Gemini 4 Carbonとは

Carbonは、10月に一般向けの提供が始まった「Gemini 4 Argon」に続くモデルです。Googleは2つのモデルを次のように使い分けるよう説明しています。

- **Argon**：大半のソフトウェア開発や、仕事での調べもの・資料作り（ナレッジワーク）には、引き続きArgonが最適
- **Carbon**：モデルの限界を試すような高度な作業向け。たとえば、何段階にもわたる複雑なコーディングや不具合の調査、自由度の高い科学研究など

Carbonは、Argonより**多くのトークンを使って**、より深く考え、何度も確かめながら作業を進めるように設計されているそうです。トークンは、AIが文章などを処理するときの単位です。そのぶん、ちょっとした質問にはArgonやほかのモデルのほうが向いている、という位置づけです。

Argonについては、<a href="/articles/gemini-4-argon/">GoogleがGemini 4 Argonを発表。長時間の開発・業務処理を支える新モデル</a>で発表当時の内容をまとめています。

## 発表から提供開始までの流れ

Carbonは、いきなり誰でも使えるようになったわけではありません。

1. **2026年10月28日（米国時間）**：Googleが英語の公式ブログでCarbonを**発表**。まずは「Fairwind Program」を通じて、一部のサイバーセキュリティ担当者だけに提供
2. **2026年11月10日（米国時間）〜11日**：開発者・企業・一般ユーザー向けに**提供開始**。日本語版のGoogle Japan Blogは11月11日付

発表の時点でGoogleは、安全対策の確認を続けてから、開発者や一般のユーザーに広げると説明していました。今回の提供開始は、その段階が進んだものです。

## 誰が、どこで使えるか

Google Japan Blogの案内をまとめると、次のとおりです。

| 使う人 | 使える場所 | 条件 |
|---|---|---|
| 一般ユーザー | Geminiアプリ、Google検索のAIモード | Google AI Ultraの加入者。順次展開 |
| 開発者 | Google AI Studio・Android StudioのGemini API、Google Antigravity | Gemini APIの有料ティア。Google AI Ultra加入者はAntigravityとAI Studioでも試せる |
| 企業 | Gemini for business、Google Antigravity、CodeMender | APIまたはモデルの選択メニューから |
| 科学者・研究者 | Google Antigravity | 選考のある無料アクセスのプログラム（6か月） |
| サイバーセキュリティ担当者 | Carbon for cyber | Fairwind Programへの申請 |

一般のユーザーで使えるのは、**Google AI Ultraの加入者**と案内されています。Googleのサブスクリプションのページでも、Carbonへの「最上位のアクセス」はUltraの特典として書かれています。Google AI Ultraは日本でも契約できるプランです（Geminiアプリヘルプの、Google AI ProとGoogle AI Ultraを利用できる国や地域の一覧に、日本が含まれています）。

### Google検索のAIモードで使うとき

Googleのサブスクリプションのページには、AIモードのCarbonは**一部の国で利用できる**と書かれ、国の一覧として検索ヘルプが案内されています。ただ、**2026年11月11日に確認した時点の検索ヘルプには、Carbonの項目がまだなく**、Argonの対象国（日本を含む）だけが載っていました。

AIモードでCarbonが日本で使えるかどうかは、ヘルプが更新されるまで断定できません。Ultraに加入している人は、AIモードのモデル選択のメニューに表示されるかどうかで確認してください。AIモードそのものの使い方は、<a href="/articles/google-ai-mode-restaurant-search/">Google検索のAIモードでレストランの空席を探せるように｜使い方と予約までの流れ</a>でも紹介しています。

## 開発者向け：APIの料金と「/swarm」

Gemini APIで使う場合の料金は、Argonと同じ**導入特別価格**です（Google Japan Blogの表示、2026年11月11日確認）。

- **2026年11月30日まで**：100万入力トークンあたり2ドル、100万出力トークンあたり10ドル
- **導入期間の終了後**：100万入力トークンあたり4ドル、100万出力トークンあたり20ドル

これはAPIの従量課金の料金で、Geminiアプリの月額プランとは別のものです。

あわせて、Googleの開発ツール「Google Antigravity」では、「**/swarm**」という機能の**プレビュー**（試験提供）が始まりました。1つの指示から、全体をまとめる役のエージェントと、並行して作業するエージェント、テストで確かめる役のエージェントのチームを立ち上げ、進み具合をリアルタイムで見られる機能です。

## Googleが挙げている得意分野

Googleの発表では、Carbonの活用例として次のような分野が挙げられています。

- **仕事の資料・データ分析**：グラフや図面、表が多い文書を読み解き、根拠を示しながらまとめる。表計算やプレゼン資料、レポートを決まった形式で作る
- **コーディング**：複数のプログラムにまたがる移行や、原因の調査、設計の見直し。作ったアプリを自分で確かめながら仕上げる
- **サイバーセキュリティ**：脆弱性（ソフトウェアの弱点）の発見から修正まで。サイバー防御の担当者向けの「Carbon for cyber」も用意
- **科学研究**：実験データの整理や仮説の検証など

いくつかの外部の評価（ベンチマーク）で1位になったとも発表しています。ただし、これらは各評価の条件での結果で、ふだんの使い方での正確さをそのまま示す数字ではありません。

## 安全面についての説明

Carbonはサイバーセキュリティの能力が高いぶん、悪用への対策も強化したとGoogleは説明しています。たとえば、悪用を試みる攻撃のテストで、突破される割合がArgonより下がったこと、作業の途中でデータを捏造せず、欠けている実験データを勝手に埋める指示を断る割合が高くなったことなどを挙げています。

一方で、Googleは「**プロンプトインジェクション**（ウェブページなどに仕込まれた指示でAIをだます攻撃）への強さは、引き続き改善が必要な分野」とも書いています。AIにウェブサイトやファイルを読ませて作業させるときは、AIの出した結果をそのまま使わず、確かめる習慣をつけましょう。確かめ方は<a href="/articles/check-ai-answers/">生成AIの答えが正しいか確かめる方法｜出典・日付・数字の確認</a>で紹介しています。

## 自分に関係あるか、の目安

<figure class="flow">
<figcaption>Gemini 4 Carbonを使えるか確かめるとき</figcaption>
<ol class="flow-steps">
<li class="flow-step"><p class="flow-q">Google AI Ultraに加入している？</p><ul class="flow-branches">
<li><strong>している</strong> → Geminiアプリのモデルの選択メニューを確認する（順次展開のため、まだ出ないこともある）。</li>
<li><strong>していない</strong> → 次へ。</li>
</ul></li>
<li class="flow-step"><p class="flow-q">開発や業務で、APIやAntigravityを使う？</p><ul class="flow-branches">
<li><strong>使う</strong> → Gemini APIの有料ティアで試せる。料金は11月30日を境に変わる。</li>
<li><strong>使わない</strong> → 無料プランやGoogle AI Proでの提供は、今回の発表では案内されていない。今のモデルのまま使う。</li>
</ul></li>
</ol>
</figure>

ふだんの調べものや文章づくりが中心なら、急いで上位プランに切り替える必要はないでしょう。Googleも、大半の作業にはArgonが最適と説明しています。Geminiに入力した内容の扱いが気になる人は、<a href="/articles/gemini-activity-settings/">Geminiの会話は保存される？「アクティビティの保存」と一時チャットの違い・削除の方法</a>もあわせて確認してください。

## 注意点・未確定の点

- **AIモードで日本から使えるか**：11月11日時点の検索ヘルプにCarbonの対象国が載っておらず、確認できませんでした
- **日本語での性能**：発表では、日本語での性能について特に説明されていません
- **無料プラン・Google AI Pro**：今回の発表では、Carbonの提供は案内されていません
- **料金**：APIの導入特別価格は2026年11月30日までです。使う前に、最新の料金を公式ページで確認してください

## 参照情報

以下はいずれも2026年11月11日確認。

- Google Japan Blog「[Gemini 4 Carbon の提供を開始](https://blog.google/intl/ja-jp/company-news/technology/gemini-4-carbon/)」（2026年11月11日）
- Google（The Keyword）「[Gemini 4 Carbon: our next frontier model](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/)」（2026年10月28日）
- Google Antigravity Blog「[Gemini 4 Carbon and /swarm](http://antigravity.google/blog/gemini-4-carbon-in-google-antigravity/)」（2026年11月10日）
- Google「[Google AI Pro と Ultra](https://gemini.google/subscriptions/?hl=ja)」
- Google Gemini アプリ ヘルプ「[Google AI のサブスクリプション プランに応じた Gemini アプリの使用量上限とアップグレード](https://support.google.com/gemini/answer/16275805?hl=ja)」
- Google 検索ヘルプ「[Google 検索の AI モードで AI による回答を取得する](https://support.google.com/websearch/answer/16011537?hl=ja)」
