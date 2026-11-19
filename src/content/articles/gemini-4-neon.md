---
title: "Gemini 4 Neonとは？Proプランで使える新モデル｜Carbon・Hydrogenとの違い"
description: "Googleは2026年11月18日、Gemini 4シリーズの新しいモデル「Gemini 4 Neon」を発表し、提供を順次始めました。Geminiアプリでは Google AI Pro・Ultra の加入者が使えます。Carbon・Hydrogen・Argonとの違い、使える人、APIの料金、Geminiアプリでできること、注意点を、Googleの公式発表をもとに整理します。"
category: ai
date: "2026-11-19"
kind: "解説"
topics: [ai-tools]
coverLabel: "NEON."
cover: "/images/gemini-4-neon/cover.webp"
coverAlt: "「Gemini 4 Neonとは？」のタイトル画像。光る管のようなモデルの図と、表や書類、グラフを描いたイメージイラスト"
draft: false
affiliate: false
---

Googleは、Gemini 4シリーズの新しいモデル「**Gemini 4 Neon**（ジェミニ 4 ネオン）」を発表し、**提供を順次始めました**。英語の公式ブログと、日本語版のGoogle Japan Blogは、どちらも**2026年11月18日**付です。

Neonは、**深く考える力と、速さ・コストの効率**を両立させたモデルとして位置づけられています。一般のユーザーは、**有料プランの「Google AI Pro」または「Google AI Ultra」の加入者**が、Geminiアプリのモデル選択メニューから選んで使えると案内されています。この記事では、Googleの公式発表をもとに、ほかのGemini 4のモデルとの違いや、使える人を整理します。

## Gemini 4 Neonとは

Gemini 4シリーズには、これまでに「Argon」「Carbon」「Hydrogen」が登場しています。Googleは、Neonを次のように位置づけています。

- **Carbon**：最も難しく、長い期間にわたるプロジェクト向け
- **Hydrogen**：ふだんの作業をすばやくこなす
- **Neon**：複雑なコーディングや分析、企業の本格的な業務向けに、**思考の深さと効率を両立**

一般ユーザーが使える条件を、それぞれの発表をもとにまとめると次のとおりです。

| モデル | Googleの説明 | Geminiアプリで使える人 |
|---|---|---|
| Hydrogen | スピードと効率を重視 | すべてのユーザー |
| **Neon** | 深い推論と、速さ・コストの効率を両立 | **Google AI Pro・Ultra** |
| Argon | 難しい課題に対して、長く深い推論を行う | Google AI Pro・Ultra |
| Carbon | 最も強力なモデル | Google AI Ultra |

Googleは、Neonが**標準の思考レベル（high）で、Carbonよりも作業1件あたりのコストを32%抑えた**としています。いくつかの外部の評価（ベンチマーク）で上位に入ったとも発表していますが、これらは各評価の条件での結果で、ふだんの使い方での正確さをそのまま表す数字ではありません。

CarbonとHydrogenについては、<a href="/articles/gemini-4-carbon/">Gemini 4 Carbonとは？Argonとの違い・使える人・日本での使い方</a>と<a href="/articles/gemini-4-hydrogen/">Gemini 4 Hydrogenとは？無料で使える最新モデル｜Carbonとの違い</a>で紹介しています。

## 誰が、どこで使えるか

Google Japan Blogの案内をまとめると、次のとおりです。いずれも**順次提供**です。

| 使う人 | 使える場所 | 条件 |
|---|---|---|
| 一般ユーザー | Geminiアプリ（モデル選択メニュー） | Google AI Pro または Ultra の加入者 |
| 開発者 | Google AI Studio・Android StudioのGemini API | Gemini APIの有料ティア。Pro・Ultra加入者はAI Studio・Google Antigravityでも試せる |
| 企業 | Gemini for business、Google Antigravity | APIまたはモデルの選択メニューから |
| サイバーセキュリティ担当者 | サイバーセキュリティ向けのNeon | Fairwind Programの対象メンバーに、数日以内に提供開始 |

Google AI ProとGoogle AI Ultraは、日本でも契約できるプランです（Geminiアプリヘルプの、利用できる国や地域の一覧に日本が含まれています）。今回の発表では、**無料プランでNeonを使えるとは案内されていません**。

## Geminiアプリでできること

Googleは、GeminiアプリでのNeonについて、次のような作業が得意だと説明しています。

- **文章づくり・資料のまとめ**：アップロードしたスプレッドシート、PDF、写真などを正確に読み取り、レポートや要約にまとめる。GmailやGoogleドキュメントなどのGoogleアプリから関連する情報も取り出す
- **調べもの・分析**：ウェブの複数の情報源から情報を取り込み、大きな買い物の前の価格比較など、変化の速い話題でも新しい情報に基づいて答える
- **手間のかかる作業**：Geminiの「タスク」機能がNeonで動くようになり、たとえば光熱費が急に増えた原因を請求明細から探す、返金の交渉のために複数の領収書や書類を突き合わせる、といった複数の段階がある作業を、大きなモデルより速く進められるとしています

Googleは、AIが事実に基づかない内容を作ってしまう割合が、社内のテストでこれまでで最も低くなったとも書いています。それでも、AIの答えがいつも正しいとは限りません。価格や数字などの大事な情報は、出典を確かめてから使いましょう。確かめ方は<a href="/articles/check-ai-answers/">生成AIの答えが正しいか確かめる方法｜出典・日付・数字の確認</a>で紹介しています。

## 開発者向け：APIの料金と思考レベル

- **料金**：100万入力トークンあたり**3ドル**（キャッシュされた入力は95%割引の0.15ドル）、100万出力トークンあたり**15ドル**（Google Japan Blogの表示、2026年11月19日確認）
- **コンテキストウィンドウ**：100万トークン
- **思考レベル**：4段階。標準は「high」で、最も高い「xhigh」では、より深い複数段階の推論を行う

これはAPIの従量課金の料金で、Geminiアプリの月額プランとは別のものです。Google Antigravityでは、NeonがHydrogenのサブエージェントを並行して動かし、まとめ役を担う使い方も紹介されています。

## 安全面の説明

Googleは、Neonには、サイバー攻撃やバイオセキュリティでの悪用に対して、Carbonと同じレベルのリアルタイムの保護を組み込んだと説明しています。一方で、正当な作業を誤って断るケースは大きく減らしたとしています。ウェブページやメールなどに仕込まれた指示でAIをだます「**間接的なプロンプトインジェクション**」への強さも、同じクラスのほかのモデルより高かったとしています。

AIにメールやファイルを読ませて作業させるときは、AIの出した結果をそのまま実行せず、確かめる習慣をつけましょう。

## 自分に関係あるか、の目安

<figure class="flow">
<figcaption>Gemini 4 Neonを使えるか確かめるとき</figcaption>
<ol class="flow-steps">
<li class="flow-step"><p class="flow-q">Google AI Pro または Ultra に加入している？</p><ul class="flow-branches">
<li><strong>している</strong> → Geminiアプリのモデル選択メニューを確認する（順次提供のため、まだ出ないこともある）。</li>
<li><strong>していない</strong> → 次へ。</li>
</ul></li>
<li class="flow-step"><p class="flow-q">ふだんの調べものや文章づくりが中心？</p><ul class="flow-branches">
<li><strong>そう</strong> → 無料で使えるHydrogenで十分なことが多い。</li>
<li><strong>資料の分析や開発で使いたい</strong> → Proプランや、Gemini APIの有料ティアを検討する。料金は公式ページで確認する。</li>
</ul></li>
</ol>
</figure>

Geminiに入力した内容の扱いが気になる人は、<a href="/articles/gemini-activity-settings/">Geminiの会話は保存される？「アクティビティの保存」と一時チャットの違い・削除の方法</a>もあわせて確認してください。

## 注意点・未確定の点

- **順次提供**：すぐにはモデル選択メニューに表示されない場合があります
- **無料プラン**：今回の発表では、無料プランでの提供は案内されていません
- **使用量の上限**：Pro・Ultraで使える回数などの上限は、今回の発表には書かれていません
- **日本語での性能**：発表では、日本語での性能について特に説明されていません

## 参照情報

以下はいずれも2026年11月19日確認。

- Google Japan Blog「[Gemini 4 Neon を発表](https://blog.google/intl/ja-jp/company-news/technology/introducing-gemini-4-neon/)」（2026年11月18日）
- Google（The Keyword）「[Introducing Gemini 4 Neon](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/)」（2026年11月18日）
- Google「[Google AI Pro と Ultra](https://gemini.google/subscriptions/?hl=ja)」
