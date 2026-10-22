# Amazonリンクの置き場所（ユーザーが SiteStripe で取得したリンク）

ここに貼られたリンクだけを記事に使う。Claude はリンクを作らない・推測しない。
「ストック」に行を足すだけでよい（商品名・リンク・使いたい記事は空欄でも可）。

## 使い方（ユーザー）
1. Amazonの商品ページで SiteStripe の「テキスト」→ 短縮URL（link.amazon / amzn.to / amzn.asia）をコピー。
2. 下の「ストック」に1行追加する。チャットに貼るだけでもよい（Claude がここに転記する）。

## 記事に入れるときのルール（Claude）
- 商品の仕様はメーカー公式で確認し、記事の内容（対応規格・条件）に合う商品にだけ置く。合わなければ置かない。
- 書き方は `<a class="buy-link" href="..." rel="sponsored noopener">Amazonで〇〇を見る</a>`。記事の frontmatter を `affiliate: true` にする。
- 価格・セール・「おすすめ1位」などは書かない。リンクの近くに「選んだ条件」（公式仕様）を1〜2文で書く。
- 置いたら「ストック」の「使った記事」に slug を書く。リンクが切れていたら「状態」を「切れ」にして記事から外す。

## ストック
| 商品名（型番） | リンク | 使いたい記事（任意） | 使った記事 | 状態 |
|---|---|---|---|---|
| KIOXIA EXCERIA PLUS G2 1TB | https://link.amazon/B0hsjI5Vb | − | portable-ssd-use-case-3 | 使用中 |
| Samsung T7 Shield 1TB | https://link.amazon/B0afXJGmC | − | portable-ssd-use-case-3 | 使用中 |
| BUFFALO SSD-PST1.0U3BA/N 1TB | https://link.amazon/B0fVikVP6 | − | portable-ssd-use-case-3 | 使用中 |
| Anker PowerPort III 3-Port 65W Pod | https://link.amazon/B0cGbRUff | − | laptop-phone-charger-power-split | 使用中 |
| Anker Charger (100W, 3 Ports) | https://link.amazon/B05L5ZlbC | − | laptop-phone-charger-power-split | 使用中 |
| Anker Charger (140W, 4 Ports) | https://amzn.asia/d/0cv3OK8V | − | laptop-phone-charger-power-split | 使用中 |
| NiPoGi ミニPC（Ryzen 3 3250U） | https://link.amazon/B04fM8tge | − | nipogi-e1-ryzen-3250u | 使用中 |

## リンクがあると入れやすい記事（候補）
商品を選ぶときの条件。この条件に合う商品のリンクがあれば、その記事に追加できる。

| 記事 | 合う商品の条件 |
|---|---|
| microsd-card-buying-guide | microSD Expressカード（Switch 2用）／ microSDXC・U3・V30・A2 表記のカード |
| usb-flash-drive-vs-portable-ssd | USBメモリ（USB 3.2 Gen 1以上）／ 外付けSSD（既存3商品も使える） |
| external-ssd-hdd-differences | 外付けHDD（据え置き・ポータブル） |
| gan-charger-explained | GaN採用をメーカーが明記している USB-C 充電器（既存のAnker 3商品の仕様も確認して使える） |
| mobile-power-bank-buying-guide | PSEマーク・容量（mAh/Wh）・出力をメーカーが公開しているモバイルバッテリー |
| usb-c-cable-identification | 対応W数・転送速度・映像出力をメーカーが明記しているUSB-Cケーブル |
| usb-hub-dock-port-power-guide | PD給電W数・映像出力の条件が公開されているUSB-Cハブ |
| qi2-wireless-charging-guide | Qi2認証をメーカーが明記しているワイヤレス充電器 |
| monitor-arm-buying-guide | 対応重量・VESA・天板厚をメーカーが公開しているモニターアーム |
| desk-light-buying-guide | JISの照度区分（AA形/A形）や色温度をメーカーが公開しているデスクライト |
| laptop-stand-height-portability | 高さ・角度・耐荷重をメーカーが公開しているPCスタンド |
| electric-screwdriver-vs-drill-driver | 電動ドライバー／ドリルドライバー（トルク・電圧が公開されているもの） |
| bluetooth-earphone-latency | 対応コーデック・ゲームモードをメーカーが明記しているイヤホン |
