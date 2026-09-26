---
title: "iPhoneの写真を外付けSSDへ。購入前の確認ポイント"
description: "iPhoneの写真や動画を外付けSSDへ書き出す手順と、購入前に確認したいフォーマット・端子・給電の条件を紹介します。"
category: gadget
date: "2026-09-25"
kind: "選び方"
coverLabel: "STORE."
cover: "/images/iphone-photo-ssd/cover.webp"
coverAlt: "iPhoneと小型外付けSSDを並べた、実在製品ではないイメージイラスト"
draft: false
affiliate: false
---

iPhoneの写真や動画を、外付けSSDに書き出して保管することはできます。購入前は容量や転送速度だけで決めず、iPhoneで使えるフォーマットか、端子とケーブルが合うか、給電が足りるかを先に確認しましょう。写真や動画をパソコンへ移したい人にも役立つ基本をまとめます。

外付けSSDは、iPhone本体に内蔵された容量を増やすものではありません。接続している間にファイルへアクセスしたり、選んだ写真・動画を書き出したりするための保存先です。

## 購入前に確認したい4つのこと

### 1. 端子の形だけで転送速度を判断しない

iPhoneとSSDをつなぐには、端子が合うケーブルか、必要に応じてアダプタを使います。USB-C端子のiPhoneならUSB-Cのケーブルで、Lightning端子のiPhoneなら「Lightning - USB 3カメラアダプタ」などを使って接続します。端子が物理的に挿さることと、データをやり取りできることは別なので、iPhoneのモデル、SSD、ケーブルの対応仕様をそれぞれ確認してください。

USB Type-Cはコネクタの形を指す言葉で、データ転送の速さそのものではありません。USB規格の策定団体であるUSB-IFも、コネクタの名前と、速度を表す規格名（USB 3.2やUSB4など）を区別して使うよう案内しています。

iPhone側の速度もモデルによって違います。同じUSB-C端子でも、USB 2相当（最大480Mb/s）のモデルと、Proモデルなど一部のUSB 3（最大10Gb/s）対応モデルがあります。USB 3の速度を出すには、USB 3に対応したケーブルも必要です。お使いのモデルの対応は、Appleの技術仕様ページの「コネクタ」欄で確認できます。大きな動画を頻繁に移す場合は、SSDの最大速度だけでなく、iPhone側とケーブル側の対応速度も確認しましょう。たまに写真を退避する程度なら、まず接続の確実さと容量を優先して選ぶ方法もあります。

### 2. 対応フォーマットとパーティション数を確かめる

Appleの案内では、iPhoneにつなぐ外部ストレージはデータ用パーティションが1つで、APFS、暗号化APFS、macOS拡張（HFS+）、exFAT、FAT32、FATのいずれかでフォーマットされている必要があります。

iPhoneとWindowsパソコンの両方で使うなら、iPhoneが対応し、MacのディスクユーティリティでもWindows互換として案内されているexFATが候補になります。使うパソコンのOSやアプリ側の条件も確認してください。なお、FAT32は1つのファイルを4GBまでしか保存できないため、長い動画を保存するならexFATやAPFSが向いています。フォーマットの手順は「[外付けSSDをexFATにする方法](/articles/ssd-exfat-format-windows-mac/)」で紹介しています。

フォーマットを変更すると、ドライブ内のデータが消えることがあります。すでに写真などを保存しているSSDを初期化する前に、別の場所へコピーしておきましょう。購入直後でも、認識しないときにいきなり消去せず、まずフォーマットとパーティション数を確認します。

### 3. 給電条件を確認する

接続してもドライブが表示されない場合は、端子の相性だけでなく電力不足も考えられます。AppleはiPhoneで外付けハードドライブを使う際、外部電源が必要になる場合が多いと案内しています。SSDも必要な電力は製品によって異なるため、メーカーの仕様や付属品を確認してください。

Appleの案内では、ドライブ自体に電源がない場合、USB-C端子のiPhoneなら電源付きのUSBハブ、Lightning端子のiPhoneならLightning - USB 3カメラアダプタにUSB電源アダプタをつないで使う方法が紹介されています。ケーブルやハブを追加すると、対応する速度や接続条件が変わることもあります。

### 4. 何をどれくらい保存するか決める

容量は、写真だけを整理したいのか、長い動画も残すのかで必要量が変わります。写真や動画のサイズは撮影条件や形式によって違うため、「何枚なら何GB」と一律には決められません。まずiPhoneのストレージ画面で写真・ビデオが使っている容量を確認し、今後も保存する分を見込んで選ぶと無駄が出にくくなります。

## 写真アプリからSSDへ書き出す手順

Appleの案内に沿った基本の流れは次のとおりです。

1. 互換性のあるケーブルまたはアダプタで、SSDをiPhoneに接続する。
2. 写真アプリで「選択」をタップし、書き出したい写真や動画を選ぶ。
3. 共有ボタンをタップして「未編集のオリジナルを書き出す」を選ぶ。
4. 保存先の「場所」から外部ストレージを選び、「保存」をタップする。

この方法では、写真や動画を編集していても未編集のオリジナルが書き出されます。また、「非表示」アルバムがロックされていると、その中の写真やビデオは書き出されません。編集後の見た目を残したい場合は、書き出したファイルを開いて内容を確かめてから、必要な保存方法を選びましょう。

## 本体の空き容量を増やすなら、コピーを確認してから

外付けSSDへ書き出しただけでは、iPhone内の元データは自動で削除されません。まずSSD上の写真や動画を開き、必要なものが保存できたことを確認してから、iPhone内のデータを整理します。

iCloud写真を使っている場合、iPhoneで写真を削除すると、同じApple Accountで使っているほかのデバイスからも削除されます。SSDへコピーしたことを確認するだけでなく、iCloud上にも残したい写真なのかを確認してから削除してください。削除した写真は「最近削除した項目」に30日間残るので、間違えて消したときはそこから戻せます。

## 迷ったときは、速度より接続条件から

iPhoneの写真・動画を保存するためのSSDは、まず「使うiPhoneで接続できる」「対応フォーマットで使える」「必要な電力を確保できる」の3点を満たすものから選びます。Windowsパソコンとも共有するなら、exFATを候補に加えてください。

特に大きな動画を頻繁に移す場合は、iPhone・SSD・ケーブルが対応する転送速度を確認します。製品に書かれた最高速度だけで決めず、使う機器をひと組として確認すると、買ったあとに認識しない、思ったより遅いといった行き違いを減らせます。

<figure class="flow">
<figcaption>接続方法の分岐図</figcaption>
<ol class="flow-steps">
<li class="flow-step"><p class="flow-q">iPhoneの端子は？</p><ul class="flow-branches">
<li class="flow-end"><span class="flow-a">Lightning</span>「Lightning - USB 3カメラアダプタ」などで接続する。電源が足りない場合は、アダプタにUSB電源アダプタをつなぐ。</li>
<li><span class="flow-a">USB-C</span>次の質問へ ↓</li>
</ul></li>
<li class="flow-step"><p class="flow-q">大きな動画を頻繁に移す？</p><ul class="flow-branches">
<li class="flow-end"><span class="flow-a">はい</span>iPhoneがUSB 3に対応するモデルか（技術仕様の「コネクタ」欄）と、USB 3対応のケーブルを確認する。</li>
<li class="flow-end"><span class="flow-a">いいえ</span>速度より、接続の確実さと容量を優先して選ぶ。</li>
</ul></li>
<li class="flow-step"><p class="flow-q">どの場合も：Windowsパソコンとも共有する？</p><ul class="flow-branches">
<li class="flow-end"><span class="flow-a">はい</span>exFATでフォーマットされたSSDを候補にする。</li>
<li class="flow-end"><span class="flow-a">いいえ</span>APFSなど、iPhoneが対応するほかの形式も選べる。長い動画を保存するならFAT32は避ける（1ファイル4GBまで）。</li>
</ul></li>
</ol>
</figure>

## 参照情報

- Apple「[iPhoneに外部ストレージデバイスを接続する](https://support.apple.com/ja-jp/guide/iphone/iph95baac91f/ios)」（確認日：2026-09-25）
- Apple「[iPhoneで写真やビデオを読み込む/書き出す](https://support.apple.com/ja-jp/guide/iphone/iph480caa1f3/ios)」（確認日：2026-09-25）
- Apple「[Mac で外付けドライブにファイルを保存できない場合](https://support.apple.com/ja-jp/101830)」（確認日：2026-09-24）
- Apple「[iPhoneやiPadで写真を削除する](https://support.apple.com/ja-jp/104967)」（確認日：2026-09-24）
- Apple「[iPhoneのモデルを比較する](https://www.apple.com/jp/iphone/compare/)」（コネクタの転送速度。確認日：2026-09-25）
- USB-IF「[USB Type-C and USB 2.0 Type-C Cable and Connector Language Usage Guidelines](https://www.usb.org/sites/default/files/usb_type-c_language_product_and_packaging_guidelines_20230320.pdf)」（確認日：2026-09-24）
