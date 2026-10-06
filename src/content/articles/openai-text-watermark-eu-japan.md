---
title: "OpenAIがAI文章の透かし導入方針を発表。日本で何が変わるか"
description: "OpenAIは2026年10月5日、AIが生成した文章に見えない透かしを加える方針を発表。EUのChatGPT・Codexと、世界のAPI利用者で異なる対象範囲や、検出の限界を整理します。"
category: ai
date: "2026-10-06"
kind: "解説"
topics: [ai-tools]
coverLabel: "PROVENANCE."
cover: "/images/openai-text-watermark-eu-japan/cover.webp"
coverAlt: "半透明の紙と淡い光の点でAI文章の見えない透かしを表したイメージイラスト"
draft: false
affiliate: false
---

OpenAIは2026年10月5日（現地時間）、AIが生成した文章に見えない透かしを加える方針を発表した。EUではChatGPTとCodexの対象となる文章出力に今後数週間で導入し、APIでは世界の利用者が対応モデルについて任意で有効にできる。対象地域や使い方によって、扱いが異なる点がポイントだ。

## 何が発表されたか

文章用の透かし技術は「textGrain」。AIが文章を書く際の単語の選び方に、検出用の統計的なパターンを組み込む。読者には見えず、隠し文字や見えない空白を文章に追加する仕組みではない。

OpenAIは、EUのAI法への対応としてこの方針を示した。透かしを調べる検出ツールへのアクセス申請も受け付けるが、当初は承認された研究者や専門機関に限定し、一般公開はしない。

## 使う人にとって何が変わるか

EUのChatGPT・Codexでは、無料・有料を含む全プランの対象利用者へ段階的に導入する予定。発表時点で、すべての対象者への導入が完了したという説明ではない。

日本については、今回のChatGPT・Codexへの導入範囲はEUのみで、世界共通の初期設定にはしない。一方、API（ほかのサービスからAIの機能を呼び出す仕組み）は世界の利用者が対象となるため、日本の開発者も対応モデルで透かしを有効にできる。APIでは初期設定はオフだ。

有効にする手順や対応モデルは、OpenAIの公式ドキュメントで確認したい。また、透かしを有効にしても検出ツールを使える権限が自動で付くわけではない。

## 注意点・未確定の点

透かしは、文章の正しさや、誰が書いたかを証明するものではない。OpenAIは、透かしから分かるのは「OpenAIのシステムが文章の一部を生成・処理したこと」までで、誰が使ったか、人がどの程度関わったか、誰の文章か、内容が正確かは分からないと説明している。

OpenAIは、短い文章や後から編集された文章では検出が当てにならないことを認めている。数式やコードのように言い回しの自由が少ない文章も、透かしの信号が入りにくい。言い換えや翻訳で言葉が変わると、検出しにくくなる。透かしが見つからないことを、人が書いた証拠として扱うことはできない。

日本語での検出精度や、日本向けChatGPT・Codexへの今後の導入予定は、今回確認した公式ページでは具体的に示されていない。今後の発表で扱いが変わる可能性があるため、利用する際は公式の案内を確認したい。

## 参照情報

以下はいずれも2026年10月6日確認。

- OpenAI「[Our approach to EU text provenance rules](https://openai.com/index/eu-text-provenance/)」（2026年10月5日）
- OpenAI Developer Community「[OpenAI's approach to EU text provenance rules](https://community.openai.com/t/openais-approach-to-eu-text-provenance-rules/1403521)」（2026年10月5日）
- OpenAI Help Center「[Provenance signals in OpenAI-generated content](https://help.openai.com/en/articles/8912793-provenance-signals-in-openai-generated-content)」
