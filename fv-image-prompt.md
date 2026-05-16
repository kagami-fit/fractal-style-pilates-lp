# FV画像生成プロンプト

## 目的

FRACTAL STYLEのファーストビュー用に、既存バナーのトンマナを保ちながら、よりLPの冒頭で使いやすい横長キービジュアルを生成する。

## 推奨プロンプト

```text
Create a premium Japanese landing page first-view hero image for a private personal Pilates studio named "FRACTAL STYLE" in Harajuku.

Canvas: ultra-wide website hero, 16:9 horizontal composition, 1920x1080.

Visual direction:
- High-end, clean, calm, premium fitness and Pilates mood.
- Bright private Pilates studio interior with large windows, soft natural daylight, white and pale gray walls, subtle green trees outside the windows.
- A graceful Japanese woman in black Pilates wear on a reformer machine, elegant posture, calm confident expression, natural pose, not overly muscular, refined and healthy.
- Add subtle premium gym details in the background: reformer, cable machine, mirrors, warm indirect lighting, clean private room feeling.
- The composition should leave enough clean space on the right side for Japanese headline text and CTA badges.
- Use FRACTAL STYLE brand mood: smoky blue-gray, white, black, muted gold accents, minimal luxury.
- Photorealistic, commercial advertising quality, sharp but soft, natural skin tone, no exaggerated body shape.

Text inside the image:
- Put a dark smoky blue-gray rectangular logo area near the upper right.
- Include a simple white geometric abstract logo mark and the text "FRACTAL STYLE".
- Main Japanese headline in elegant Mincho-style typography:
  "私らしく整う"
  "上質なピラティス習慣"
- Sub headline:
  "完全個室のパーソナル空間で"
  "しなやかなカラダへ"
- Add small circular badges:
  "完全個室"
  "駅近30秒"
- Add a bottom campaign strip:
  "1日3枠限定"
  "初回体験 60分 4,000円"
  "当日入会で入会金44,000円無料"

Typography and layout:
- Japanese text must be clear, readable, not distorted, with correct characters.
- Keep generous margins and avoid overlapping text with the person.
- Avoid clutter. Use a polished luxury Japanese LP banner style.

Negative prompt:
- no low quality, no blurry face, no extra fingers, no distorted limbs, no cropped head, no messy gym, no cheap stock photo look, no neon colors, no purple gradient, no excessive text, no wrong Japanese characters, no duplicated logo, no watermark.
```

## テキストなし版を作る場合

画像生成AIで日本語が崩れる場合は、画像内テキストを入れずに背景だけ生成し、HTML/CSS側で文字を重ねる。

```text
Create a premium photorealistic first-view hero background for a private personal Pilates studio in Harajuku. Ultra-wide 16:9 website hero, bright private Pilates studio with large windows and soft natural daylight, elegant Japanese woman in black Pilates wear on a reformer machine, calm confident expression, refined luxury atmosphere, smoky blue-gray and muted gold mood, clean space on the right side for Japanese headline text and CTA badges, commercial advertising quality, no text, no logo, no watermark.
```
