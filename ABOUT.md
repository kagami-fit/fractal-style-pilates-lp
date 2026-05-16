# FRACTAL STYLE ピラティスLP

## 一言で言うと

FRACTAL STYLEの高級感・余白・写真主体のトンマナを踏襲しながら、完全個室パーソナルピラティス向けに作ったランディングページです。
「姿勢から整える、しなやかなカラダへ」を軸に、初回体験60分4,000円・完全個室・原宿駅徒歩30秒・1日3枠限定の訴求へつなげます。

## 何ができるのか

- FRACTAL STYLEのピラティス習慣を紹介するLPとして使える
- ファーストビューから無料体験予約への導線を設置
- 姿勢改善・体幹・呼吸・動作改善の価値を説明
- 課題提起、解決策、選ばれる理由、トレーナー紹介、体験の流れ、キャンペーン、アクセス、FAQ、最終CTAまで掲載
- CV重視の短縮構成で、重複しやすい説明セクションを整理
- FV画像生成用のプロンプトを保管
- トレーナー写真と店内写真を指定フォルダ由来の素材へ差し替え
- スマホ表示にも対応

## 構成

- `index.html`：LP本体
- `styles.css`：デザイン、レスポンシブ、アニメーション
- `styles-bg2.css`：背景差し替え後のキャッシュ回避用CSS
- `fv-variants.html`：FV改善方針と5パターンの比較ページ
- `fv-variants.css`：FV比較ページ専用のスタイル
- `fv-image-prompt.md`：新しいファーストビュー画像を生成するためのプロンプト
- `script.js`：メニュー開閉、スクロール表示アニメーション
- `assets/images/`：FV画像、バナー画像、元LP由来の施設写真など
- `assets/images/fractal-style-logo-horizontal-reference.png`：FV画像生成で参照する横長ロゴ画像
- `assets/images/trainer_masahiro_takase.jpg`：髙瀬雅弘さんの紹介写真
- `assets/images/trainer_rie_ishihara.jpg`：石原りえさんの紹介写真
- `assets/images/interior_*.jpg`：店内写真一式
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

- `index.html`：稼働中。CV重視の短縮構成、トレーナー紹介追加、写真差し替え済み
- `styles-bg2.css`：稼働中。短縮構成、キャンペーン統合、トレーナー紹介に対応
- `styles.css`：過去版スタイルとして保持
- `script.js`：稼働中
- `assets/images/`：稼働中。店内写真・トレーナー写真を追加済み
- `fv-image-prompt.md`：作成済み
- `assets/images/fractal-style-logo-horizontal-reference.png`：作成済み
