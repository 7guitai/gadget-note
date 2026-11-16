---
title: "Gemini 4 Hydrogenとは？無料でも使えるGemini 4｜Carbon・Argonとの違いと使い方"
description: "Googleは2026年11月12日（日本語版ブログ）、Gemini 4シリーズの新しいモデル「Gemini 4 Hydrogen」を発表し、Geminiアプリと Google 検索で、すべてのユーザーへの提供を順次始めました。CarbonやArgonとの違い、無料で使えるか、4つの思考レベル、APIの料金、注意点を、Googleの公式発表をもとに整理します。"
category: ai
date: "2026-11-16"
kind: "解説"
topics: [ai-tools]
coverLabel: "HYDROGEN."
cover: "/images/gemini-4-hydrogen/cover.webp"
coverAlt: "「Gemini 4 Hydrogenとは？」のタイトル画像。軽やかな円のモデルの図と、スピードを表す線、検索窓と吹き出しを描いたイメージイラスト"
draft: false
affiliate: false
---

Googleは、Gemini 4シリーズの新しいモデル「**Gemini 4 Hydrogen**（ジェミニ 4 ハイドロジェン）」を発表しました。日本語版のGoogle Japan Blogでは**2026年11月12日**に案内されています。Hydrogenは、**スピードと効率**を重視したモデルで、Googleは「Hydrogenの登場により、**Gemini 4をすべての人に利用いただけるようになる**」としています。

一般のユーザーは、**有料プランに入っていなくても**、**Geminiアプリのモデル選択メニュー**と**Google検索**でHydrogenを使えると案内されています。ただし、**世界中で順次展開**されるため、すぐには表示されない場合があります。この記事では、Googleの公式発表をもとに、Hydrogenの位置づけと使い方を整理します。

## Gemini 4 Hydrogenとは

Gemini 4シリーズには、これまでに「Argon」と「Carbon」が登場しています。Googleは、3つのモデルを次のように説明しています。

| モデル | Googleの説明 | 一般ユーザーが使える条件 |
|---|---|---|
| **Hydrogen** | スピードと効率を重視。日常的なコーディングやエージェントの作業をすばやくこなす | **すべてのユーザー**（Geminiアプリ・Google検索） |
| Argon | 難しい課題に対して、長く深い推論を行う | Google AI Pro・Ultra（Geminiアプリ） |
| Carbon | 最も強力なモデル。最も難しい課題向け | Google AI Ultra（Geminiアプリ・AIモード） |

Googleによると、Hydrogenは、知能を総合的に評価する指標で、標準の設定ではArgonを少し上回るスコアだったとしています。同じクラスのほかのモデルより、多くの場合で速く作業を終えるとも説明しています。ただし、これらはGoogleが示した評価の条件での結果で、ふだんの使い方での正確さをそのまま表す数字ではありません。

CarbonとArgonについては、<a href="/articles/gemini-4-carbon/">Gemini 4 Carbonの提供開始｜Argonとの違い・使える人・日本での使い方</a>で紹介しています。

## 一般ユーザーにとって変わること

### Geminiアプリ

Googleは、Hydrogenによって、Geminiアプリが次のように使いやすくなるとしています。

- **指示に忠実に従う**：トーンや形式、細かいルールを守るので、メールの下書き、学習ガイド、文章の書き換えなどが、最初からそのまま使える完成度に近づく
- **長い会話でも文脈を見失いにくい**
- **表や図でまとめる**：製品の比較や、情報の多い資料のまとめを、わかりやすい表などに整理する
- **ファイルやGoogleアプリの情報を使う**：アップロードしたファイルや、Gmail・Googleドライブなどから関連する情報を取り出して作業を進める

使うときは、Geminiアプリの**モデル選択メニュー**からHydrogenを選びます。

### Google検索

Googleは、Hydrogenで**Google検索もアップグレード**したとしています。

- 思いついたままの言葉や、入力ミスのある質問、複数の条件が絡む質問でも、意図をくみ取る
- ひと目でわかりやすい、視覚的な回答を返す
- 質問を複数の小さなテーマに分けて調べる「クエリ ファンアウト」が進化し、より幅広い関連リンクを示す

Google検索のAIモードの使い方は、<a href="/articles/google-ai-mode-restaurant-search/">Google検索のAIモードでレストランの空席を探せるように｜使い方と予約までの流れ</a>でも紹介しています。

### Googleスプレッドシート

Googleスプレッドシートの**Gemini**では、**Google AI ProとGoogle AI Ultraのユーザーから順次**Hydrogenの提供を始めるとしています。

## 4つの思考レベル

Hydrogenには、どれくらい深く考えるかを選べる**4つの思考レベル**があります。

- 低
- 中
- 高（標準）
- xhigh（新しく追加された最も高い設定）

深く考えるほど、時間とコストがかかります。作業に必要な深さに合わせて選べるようにした、とGoogleは説明しています。

## 開発者向け：APIの料金など

- **使える場所**：Google AI StudioとAndroid StudioのGemini API。Google AI Studioのすべてのプランで使えるとしています。Google AI Pro・Ultraのユーザーは、開発ツール「Google Antigravity」でも試せます
- **料金**：100万トークンのコンテキストウィンドウ全体で一律、**100万入力トークンあたり1.50ドル、100万出力トークンあたり7.50ドル**（Google Japan Blogの表示、2026年11月16日確認）
- **Orchestrator**：Google Antigravityでは、CarbonとHydrogenなどのモデルを、作業の途中で自動で切り替える「Orchestrator」も導入されます

企業向けには、Gemini for businessや、対象のビジネス向けサブスクリプションのGoogleスプレッドシートのGeminiで使えると案内されています。

## 安全面の説明

Googleは、Hydrogenでは、AIが作業を進めるときに**頼まれていないことまでしてしまう**ことや、**作業の手抜き**、**権限の境界を回避しようとする**ことが、以前のモデルより減ったと説明しています。ウェブページなどに仕込まれた指示でAIをだます「間接的なプロンプトインジェクション」への強さも上がったとしています。

それでも、AIの答えがいつも正しいとは限りません。大事な内容は、出典や日付を確かめてから使いましょう。確かめ方は<a href="/articles/check-ai-answers/">生成AIの答えが正しいか確かめる方法｜出典・日付・数字の確認</a>で紹介しています。

## 使えるかどうかの目安

<figure class="flow">
<figcaption>Gemini 4 Hydrogenを使うとき</figcaption>
<ol class="flow-steps">
<li class="flow-step"><p class="flow-q">Geminiアプリのモデル選択メニューに、Hydrogenは出ている？</p><ul class="flow-branches">
<li><strong>出ている</strong> → 選んで使う。無料プランでも使えると案内されている。</li>
<li><strong>出ていない</strong> → 世界中で順次展開中のため、時間をおいて確認する。</li>
</ul></li>
<li class="flow-step"><p class="flow-q">もっと難しい作業（大きな開発、深い調査）をしたい？</p><ul class="flow-branches">
<li><strong>したい</strong> → 有料プランのArgonやCarbonも検討する。</li>
<li><strong>ふだんの文章・調べもの</strong> → Hydrogenで十分なことが多い。</li>
</ul></li>
</ol>
</figure>

Geminiに入力した内容の扱いが気になる人は、<a href="/articles/gemini-activity-settings/">Geminiの会話は保存される？「アクティビティの保存」と一時チャットの違い・削除の方法</a>もあわせて確認してください。

## 注意点・未確定の点

- **順次提供**：世界中で順次展開されるため、日本ですぐに表示されない場合があります
- **無料プランでの使用量**：無料プランで使える回数などの上限は、今回の発表には書かれていません
- **日本語での性能**：発表では、日本語での性能について特に説明されていません
- **発表日**：Google Japan Blogの日付は11月12日です。OCHA NOTEでは、Google Japan BlogのRSSに表示されたのを確認した11月16日に掲載しました

## 参照情報

以下はいずれも2026年11月16日確認。

- Google Japan Blog「[Gemini 4 Hydrogen を、本日よりすべての人に提供開始](https://blog.google/intl/ja-jp/company-news/technology/gemini-4/introducing-gemini-4-hydrogen/)」（2026年11月12日）
