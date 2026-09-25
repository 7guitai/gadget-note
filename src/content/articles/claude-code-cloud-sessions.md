---
title: "Claude Codeのクラウドセッションとは？PCを閉じても進む開発の仕組みと始め方"
description: "Claude Codeをクラウド上で動かす仕組みを、GitHubとの連携、スマホでの確認方法、ローカル実行との違いまで解説します。"
category: gadget
date: "2026-09-25"
kind: "解説"
coverLabel: "CLOUD."
cover: "/images/claude-code-cloud-sessions/cover.webp"
coverAlt: "ノートPCからクラウド上の開発環境へ光がつながるイメージイラスト"
draft: false
affiliate: false
---

AnthropicのAI開発ツール「Claude Code」には、作業を自分のPCではなくクラウド上で進める「クラウドセッション」がある。2025年10月20日（現地時間）にPro・Maxプラン向けの研究プレビュー「Claude Code on the web」として始まり、現在はブラウザに加え、スマホ、デスクトップアプリ、ターミナルからも始められる。この記事では、2026年9月時点の公式ドキュメントをもとに、どこでコードが動き、どう成果を受け取るのか、始め方と注意点を整理する。

## どんな仕組みか

**クラウドセッションは、Claude Codeの作業環境を自分のPCではなくクラウド側に置く仕組み**だ。通常はAnthropicが管理する隔離された仮想マシンで動き、PCの電源を切っても作業を続けられる。

基本の流れは、①GitHubのリポジトリ（プロジェクトの保管場所）を選ぶ、②「READMEを更新して」「このエラーを直して」などと指示する、③Claudeがコードを複製して編集・テストする、④変更をGitHubの別ブランチに送る、というもの。利用者は変更差分を見て、必要なら追加指示を出し、プルリクエスト（変更を取り込むための提案）を作る。**ブランチに送られたことと、本番サイトへ公開されたことは別**だ。

## どんなことに使えるか

たとえば記事サイトのGitHubリポジトリがあるなら、「指定の記事を追加し、リンクを確認して、変更内容を説明して」と依頼できる。帰宅後にスマホから進捗を見て、差分を確認する使い方が可能だ。複数の独立した仕事も、それぞれ別のセッションとブランチで進められる。

## 始め方

始めるには対応プランのClaudeアカウントとGitHubの接続が必要。ブラウザなら `claude.ai/code` で接続し、リポジトリとブランチを選んで指示を送る。ClaudeアプリのCodeタブ、デスクトップアプリの「Cloud」、CLIの `claude --cloud` からも開始できる。対象はPro・Max・Teamプラン、およびプレミアムシートなど所定のシートを持つEnterpriseプランの利用者。

## 注意点

クラウド側には**手元のPCだけにある未共有ファイルや設定は自動で渡らない**。まずGitHubに必要なコードを用意する。リポジトリの複製やプルリクエストの作成にはGitHubが必要で、GitLabなどほかのサービスには結果を送り返せない。PC上のファイルを直接使い、スマホから操作したい場合は「Remote Control」という別の方式で、実行場所はPCのままだ。

権限モードによっては、ファイルの編集が確認なしで進む。依頼の範囲をはっきり伝え、終わったら差分を確認したい。計画を立てるモード（Plan）を選べば、編集前に方針を確認できる。クラウド用仮想マシンの追加料金はないが、利用量の上限は通常のClaude／Claude Codeと共有する。しばらく操作しない環境は停止される。開き直せば会話の履歴は戻るが、停止時に動いていた処理までは復元されない。

## 参照情報

以下はいずれも2026年9月25日確認。

- Anthropic「[Claude Code on the web](https://www.anthropic.com/news/claude-code-on-the-web)」（2025年10月20日）
- Anthropic Engineering「[Beyond permission prompts: making Claude Code more secure and autonomous](https://www.anthropic.com/engineering/claude-code-sandboxing)」（2025年10月20日）
- Claude Code Docs「[Use Claude Code in the cloud](https://code.claude.com/docs/en/claude-code-on-the-web)」
- Claude Code Docs「[Get started with Claude Code in the cloud](https://code.claude.com/docs/en/web-quickstart)」
- Claude Code Docs「[Continue local sessions from any device with Remote Control](https://code.claude.com/docs/en/remote-control)」
