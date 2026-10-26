---
title: "GitHubとは？AIでコードを扱う前に知っておきたい基本"
description: "GitHubとGitの違い、リポジトリ・ブランチ・プルリクエストなどの基本用語、公開と非公開の違い、AIツールと組み合わせるときの注意を、GitHubの公式ドキュメントをもとに整理します。"
category: ai
date: "2026-10-21"
kind: "解説"
topics: [ai-tools]
coverLabel: "GITHUB."
cover: "/images/what-is-github/cover.webp"
coverAlt: "「GitHubとは？」のタイトル画像。フォルダーと枝分かれする線、変更の提案を描いたイメージイラスト"
draft: false
affiliate: false
---

GitHub（ギットハブ）は、プログラムのコードやファイルを**変更の履歴ごとクラウドに保存し、ほかの人やAIと一緒に作業するためのサービス**です。土台になっているのは「Git（ギット）」という、ファイルの変更を記録するしくみです。AIでコードを書いたり直したりするツールの多くはGitHubとつながって動くため、**「リポジトリ」「ブランチ」「プルリクエスト」の3つの言葉**を知っておくと、AIが何をしているのかがぐっとわかりやすくなります。

この記事では、GitHubの公式ドキュメント（日本語版）をもとに、初めての人が押さえておきたい基本を整理します。

## GitとGitHubの違い

名前が似ていますが、GitとGitHubは別のものです。

| | Git | GitHub |
|---|---|---|
| 何か | ファイルの変更を記録する「バージョン管理システム」 | Gitのプロジェクトをクラウドで預かり、共同作業の道具を加えたサービス |
| どこで動く | 自分のパソコンなど | インターネット上（github.com） |
| 主な役割 | 変更の履歴を残す、前の状態に戻す、別々の変更をまとめる | 保存、共有、変更の相談（レビュー）、作業の管理、自動化 |

GitHubの公式ドキュメントでは、Gitはオープンソースのソフトウェアで、ファイルへの変更を追跡するバージョン管理システムだと説明しています。GitHubは、Gitのプロジェクト（リポジトリ）をクラウドでホストし、計画や共同作業のためのツールを加えたものだとしています。

バージョン管理を使うと、「どんな変更が」「誰によって」「いつ」「なぜ」行われたのかを、あとから確認できます。以前の状態に戻すこともできます。

## まず覚えたい言葉

GitHubの公式ドキュメント「リポジトリについて」などで説明されている用語のうち、よく出てくるものをまとめます。

| 言葉 | 意味（公式の説明をもとに要約） |
|---|---|
| リポジトリ | コードやファイルと、各ファイルの変更の履歴を保存する場所。GitHubの最も基本的な単位 |
| コミット | ある時点のファイルの状態を記録したもの。履歴はコミットの積み重ねとして残る |
| ブランチ | 本流（mainブランチなど）に影響を与えずに作業するための、枝分かれしたコードの版 |
| マージ | あるブランチの変更を、別のブランチに取り込むこと |
| プルリクエスト | あるブランチの変更を、別のブランチにマージしてほしいという依頼。マージする前に、変更点の確認や話し合いができる |
| クローン | GitHub上のリポジトリを、履歴も含めて丸ごと手元にコピーすること |
| フォーク | 元のリポジトリをもとに、自分用の新しいリポジトリを作ること |
| Issue（イシュー） | 不具合の報告や、やることの整理に使う書き込み |

ふだんの流れにすると、**ブランチを作る → 変更してコミットする → プルリクエストで確認する → 問題なければマージする**、という順番です。プルリクエストの画面では、変更されたファイルの差分や、自動テストの結果、コメントなどをまとめて確認できます。

## 公開（パブリック）と非公開（プライベート）

リポジトリは、作るときに公開か非公開かを選べます。

- **パブリック**：インターネット上の誰でも見られる
- **プライベート**：自分と、アクセスを共有した人だけが見られる（組織のリポジトリでは、組織の一部のメンバーも見られる）

公式ドキュメントでは、パブリックのリポジトリはコードが誰にでも見えるため、機密情報が見られるリスクが高まると注意しています。**パスワードやAPIキーなどの「秘密の情報」は、リポジトリに入れない**のが基本です。

GitHubには、パスワードやトークンなどの秘密の情報がリポジトリに送られるのを、送る前に止める「プッシュ保護」という機能があります。公式ドキュメントによると、アカウントごとのプッシュ保護は既定で有効になっていて、パブリックのリポジトリに秘密の情報を送ろうとすると止めるとしています。ただし、これに頼りきらず、自分でも入れないように気をつけることが大切です。

## 無料で使える？

GitHubには無料と有料のプランがあります。公式ドキュメントによると、個人向けの無料プラン「GitHub Free」では、パブリック・プライベートのどちらのリポジトリも数の制限なく作れます。ただし、プライベートのリポジトリでは、一部の機能が制限されます。

プランごとの料金や使える量は変わることがあるため、使う前にGitHubの料金ページで確認してください。

## AIツールとGitHubの関係

最近は、AIがコードを書いたり直したりするツールが、GitHubと連携して動くことが増えています。GitHubの公式ドキュメントでは、GitHub自身のAIアシスタント「GitHub Copilot」について、Issueとして始まった変更をエージェント（AI）が引き受け、プルリクエストとして返す、という流れを紹介しています。また、AIが作業した結果について、**レビューと承認の責任は利用者にある**としています。

Anthropicの「Claude Code」も、GitHubのリポジトリを読み込んで作業し、結果をブランチやプルリクエストとして返す使い方ができます。詳しくは<a href="/articles/what-is-claude-code/">Claude Codeとは？できること・必要なプラン・始め方</a>と<a href="/articles/claude-code-cloud-sessions/">Claude Codeのクラウドセッションとは？仕組み・できること・始め方</a>で紹介しています。

AIが出したプルリクエストも、人が出したものと同じように、**中身を確認してからマージする**のが大切です。プルリクエストのしくみを知っていれば、「AIが何をどう変えたのか」を差分で確かめられます。

## 始める前の確認

<figure class="flow">
<figcaption>GitHubを使い始めるとき</figcaption>
<ol class="flow-steps">
<li class="flow-step"><p class="flow-q">何に使う？</p><ul class="flow-branches">
<li><strong>自分のコードやファイルを保存したい</strong> → まずはプライベートのリポジトリを1つ作る。</li>
<li><strong>人に見せたい・公開したい</strong> → パブリックにする前に、秘密の情報が入っていないか確認。</li>
<li><strong>AIツールと連携したい</strong> → ツールに渡すリポジトリの範囲（権限）を確認する。</li>
</ul></li>
<li class="flow-step"><p class="flow-q">パスワードやAPIキーがファイルに入っていない？</p><ul class="flow-branches">
<li><strong>入っている</strong> → リポジトリに入れない。設定ファイルなどで別に管理する。</li>
<li><strong>入っていない</strong> → ブランチ → コミット → プルリクエストの流れで作業を始める。</li>
</ul></li>
</ol>
</figure>

## まとめ

- GitHubは、Gitで記録したコードの履歴をクラウドで預かり、共同作業をしやすくするサービス
- 覚えたいのは「リポジトリ」「ブランチ」「プルリクエスト」
- 秘密の情報はリポジトリに入れない。公開する前に必ず確認する
- AIが作った変更も、プルリクエストで中身を確かめてからマージする

AIツール全般を使うときの依頼の書き方は<a href="/articles/how-to-write-ai-prompts/">AIに頼むときの指示の書き方｜伝わる依頼文の基本</a>で紹介しています。

## 参照情報

以下はいずれも2026年10月21日確認。

- GitHub Docs「[GitHub とは](https://docs.github.com/ja/get-started/start-your-journey/about-github-and-git)」
- GitHub Docs「[Git について](https://docs.github.com/ja/get-started/using-git/about-git)」
- GitHub Docs「[リポジトリについて](https://docs.github.com/ja/repositories/creating-and-managing-repositories/about-repositories)」
- GitHub Docs「[Pull Request](https://docs.github.com/ja/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)」
- GitHub Docs「[GitHubのプラン](https://docs.github.com/ja/get-started/learning-about-github/githubs-plans)」
- GitHub Docs「[プッシュプロテクション](https://docs.github.com/ja/code-security/secret-scanning/introduction/about-push-protection)」
- GitHub Docs「[GitHub Copilotについて](https://docs.github.com/ja/copilot/get-started/what-is-github-copilot)」
