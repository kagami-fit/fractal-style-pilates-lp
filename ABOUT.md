# FRACTAL STYLE ピラティスLP

## 一言で言うと

FRACTAL STYLEの高級感・余白・写真主体のトンマナを踏襲しながら、完全個室パーソナルピラティス向けに作ったランディングページです。
「姿勢から整える、しなやかなカラダへ」を軸に、初回体験60分4,000円・完全個室・原宿駅徒歩30秒・1日3枠限定の訴求へつなげます。

## 何ができるのか

- FRACTAL STYLEのピラティス習慣を紹介するLPとして使える
- ファーストビューから無料体験予約への導線を設置
- 姿勢改善・体幹・呼吸・動作改善の価値を説明
- 選ばれる理由、プログラム、空間紹介、体験の流れ、FAQまで掲載
- スマホ表示にも対応

## 構成

- `index.html`：LP本体
- `styles.css`：デザイン、レスポンシブ、アニメーション
- `styles-bg2.css`：背景差し替え後のキャッシュ回避用CSS
- `fv-variants.html`：FV改善方針と5パターンの比較ページ
- `fv-variants.css`：FV比較ページ専用のスタイル
- `script.js`：メニュー開閉、スクロール表示アニメーション
- `assets/images/`：FV画像、バナー画像、元LP由来の施設写真など
- `assets/images/problem-bg-generated.png`：悩み・FEATURE背景用に生成した専用背景画像
- `ABOUT.md`：このLPの説明ファイル

## 使い方

このフォルダで簡易サーバーを起動します。

```bash
cd /Users/hayatokagami/⭐FW/outputs/fractal-style-pilates-lp-20260508
python3 -m http.server 4173
```

ブラウザで以下を開きます。

```text
http://localhost:4173
```

## 状態

- `index.html`：稼働中
- `styles.css`：稼働中
- `script.js`：稼働中
- `assets/images/`：稼働中
