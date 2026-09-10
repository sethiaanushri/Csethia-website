---
name: C. Sethia — Logo Display Pattern
description: How brand logos are rendered across the three logo-displaying pages; common pitfalls and fixes applied.
---

## Rule
All brand logo `<img>` elements must use `style={{ mixBlendMode: "multiply" }}` and sit on a **pure white** parent background (`bg-white`). Any other background color (muted, gray) will tint the logo.

**Why:** Several logos (Resistoflex, SANT, HGuru) have white or near-white outer areas. On a white card background with multiply blend mode, white areas become transparent, making only the coloured logo content visible. Without multiply the logo is invisible on a white panel.

**How to apply:** Any new logo panel → `<div className="bg-white ..."><img style={{ mixBlendMode: "multiply" }} .../></div>`

## Stagger Animation Pitfall
Using `StaggerChildren` with `delayOrder={0.18}` across 6 items means the last item starts animating at 0.9 s. Screenshots captured before ~1.5 s will show the last 1–2 items at opacity 0 (blank space visible, no error in console). Fix: use individual `FadeIn` with `delay={i * 0.05}` instead of StaggerChildren for long lists.

## Logo Files (as of last update)
- `/brand-logos/sant.png` — 209×184 SANT Valves circular red logo
- `/brand-logos/honeywell.png` — 3840×2160 red wordmark on transparent bg
- `/brand-logos/hguru.jpg` — 342×420 triangle mark on white bg
- `/brand-logos/resistoflex.png` — 802×198 trimmed horizontal red logo
- `/brand-logos/sant-air.png` — 1102×268 "SANT AIR SYSTEM" blue wordmark
- `/brand-logos/tyco-new.png` — 1710×536 "tyco" wordmark (downloaded from tyco.com CDN)
- `/brand-logos/tyco.jpg` — 720×320 older file (kept as fallback)
