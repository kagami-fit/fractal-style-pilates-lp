# FV画像生成プロンプト

## 目的

FRACTAL STYLEのファーストビュー用に、既存バナーのトンマナを保ちながら、よりLPの冒頭で使いやすい横長キービジュアルを生成する。

## 推奨プロンプト

```text
Create one complete premium Japanese landing page first-view hero image for "FRACTAL STYLE", a private personal Pilates studio in Harajuku.

Use case: ads-marketing.
Asset type: complete 16:9 horizontal first-view hero image for a Japanese landing page.
Input image: use the attached horizontal FRACTAL STYLE logo as the exact logo reference. The logo must match the provided image: smoky blue-gray rectangle, white geometric mark, vertical divider line, and white text "FRACTAL STYLE". Do not redesign the logo, do not invent a new logo, do not change the spelling.

Canvas:
- 16:9 horizontal website first-view banner.
- Premium LP first-view image that can be used as the top hero visual.

Visual direction:
- High-end, clean, calm, premium fitness and Pilates mood.
- Bright private Pilates studio interior with large windows, soft natural daylight, white and pale gray walls, subtle green trees outside the windows.
- A graceful Japanese woman in black Pilates wear on a reformer machine, elegant posture, calm confident expression, natural pose, not overly muscular, refined and healthy.
- Add subtle premium gym details in the background: reformer, cable machine, mirrors, warm indirect lighting, clean private room feeling.
- The composition should leave enough clean space on the right side for Japanese headline text, badges, and campaign text.
- Use FRACTAL STYLE brand mood: smoky blue-gray, white, black, muted gold accents, minimal luxury.
- Photorealistic, commercial advertising quality, sharp but soft, natural skin tone, no exaggerated body shape.

Logo:
- Place the provided FRACTAL STYLE horizontal logo near the upper right.
- Use the attached logo exactly as the reference: smoky blue-gray background, white symbol, vertical white line, and "FRACTAL STYLE" text.
- Keep the logo clean, rectangular, and readable.

Header-like top area:
- Include a clean white header band at the top.
- Header left: FRACTAL STYLE logo.
- Header right navigation text:
  "課題"
  "選ばれる理由"
  "プログラム"
  "アクセス"
- Header CTA button:
  "初回体験予約"

Hero text inside the image:
- Main Japanese headline in elegant Mincho-style typography:
  "私らしく整う"
  "上質なピラティス習慣"
- Sub headline:
  "完全個室のパーソナル空間で"
  "しなやかなカラダへ"
- Add small circular badges:
  "完全個室"
  "原宿駅徒歩30秒"
- Add a bottom campaign strip:
  "1日3枠限定"
  "初回体験 60分 4,000円"
  "当日入会で入会金44,000円が無料"

Typography and layout:
- Japanese text must be clear, readable, not distorted, with correct characters.
- Keep generous margins and avoid overlapping text with the person.
- Avoid clutter. Use a polished luxury Japanese LP banner style.
- The exact phrase "原宿駅徒歩30秒" must appear clearly in the image. Do not shorten it to "駅近30秒".
- The exact phrase "当日入会で入会金44,000円が無料" must appear clearly in the image.

Negative prompt:
- no low quality, no blurry face, no extra fingers, no distorted limbs, no cropped head, no messy gym, no cheap stock photo look, no neon colors, no purple gradient, no excessive text, no wrong Japanese characters, no misspelled Japanese, no "駅近30秒", no logo redesign, no duplicated logo, no watermark.
```

## テキストなし版を作る場合

画像生成AIで日本語が崩れる場合は、画像内テキストを入れずに背景だけ生成し、HTML/CSS側で文字を重ねる。

```text
Create a premium photorealistic first-view hero background for a private personal Pilates studio in Harajuku. Ultra-wide 16:9 website hero, bright private Pilates studio with large windows and soft natural daylight, elegant Japanese woman in black Pilates wear on a reformer machine, calm confident expression, refined luxury atmosphere, smoky blue-gray and muted gold mood, clean space on the right side for Japanese headline text and CTA badges, commercial advertising quality, no text, no logo, no watermark.
```
