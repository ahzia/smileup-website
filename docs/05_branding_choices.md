# SmileUp Branding Choices (Color, UX, and Design Best Practices)

This document defines recommended branding direction for SmileUp, based on:
- Current MVP color usage in `smileup-impactchain/plans/UI.md`
- Website UX needs (clarity, trust, conversion)
- Long-term product direction (environment-first now, broader social impact later)

---

## 1. Quick answer: main branding colors

### MVP colors (current)

- Primary Green: `#3DBE29`
- Accent Gold: `#FFD700`
- Dark: `#1F1F1F`
- White: `#FFFFFF`

These are strong and usable. Green + gold gives:
- **Green** = action, growth, climate
- **Gold** = rewards, progress, Smiles economy

So yes: the MVP direction is solid.  
But for a long-term brand system, we should refine it into a complete palette with neutrals, state colors, and contrast-safe rules.

---

## 2. Recommended brand palette (v1.0)

Use this as the default across website + future app.

### Core brand tokens

- `brand.primary` = `#31B237` (refined green, slightly deeper than MVP for better contrast)
- `brand.primaryHover` = `#28972E`
- `brand.primarySoft` = `#E9F8EA`

- `brand.accent` = `#F2C94C` (refined gold, softer than pure yellow)
- `brand.accentHover` = `#D9B23E`
- `brand.accentSoft` = `#FFF6DB`

### Neutral system

- `neutral.900` = `#111827` (main text)
- `neutral.800` = `#1F2937`
- `neutral.700` = `#374151`
- `neutral.500` = `#6B7280`
- `neutral.300` = `#D1D5DB`
- `neutral.100` = `#F3F4F6`
- `neutral.50` = `#F9FAFB`
- `neutral.0` = `#FFFFFF`

### Semantic colors (for UX clarity)

- `success` = `#16A34A`
- `warning` = `#F59E0B`
- `error` = `#DC2626`
- `info` = `#2563EB`

---

## 3. Why this is better than just using MVP colors directly

- Keeps SmileUp’s recognizable identity (green + reward accent)
- Improves readability and accessibility in UI components
- Supports both:
  - light marketing pages
  - richer in-app screens (feed, missions, rewards, dashboards)
- Scales to non-climate/social features later (community gamification) without feeling locked to “only eco brand”

---

## 4. Color usage rules (UX best practices)

### 4.1 Primary CTA hierarchy

- Use `brand.primary` for primary actions (`Join waitlist`, `Start mission`, `Complete`)
- Use accent color (`brand.accent`) for reward moments, badges, and counters only
- Avoid making both green and gold compete for priority in the same section

### 4.2 Contrast and accessibility

- Follow WCAG AA minimum contrast:
  - normal text >= 4.5:1
  - large text >= 3:1
- Do **not** use gold text on white for body text
- Prefer:
  - white text on deep green buttons
  - dark text on light gold chips/badges

### 4.3 State consistency

- Mission success always uses `success`
- Warnings and errors should use semantic colors, not gold/green
- Never rely on color alone; pair with icon + label

### 4.4 Dark mode guidance

- Keep brand green vivid in dark mode, but desaturate backgrounds
- Use gold as small highlights, not large surfaces
- Avoid pure black; use `neutral.900` style dark backgrounds for better readability

---

## 5. Suggested brand directions (pick one)

## Option A — “Impact Fresh” (Recommended default)

- Primary: refined green
- Accent: soft gold
- Overall feeling: modern, optimistic, broad social-impact friendly
- Best for: website + app alignment

## Option B — “Eco Premium”

- Primary: deeper forest green
- Accent: warmer gold/amber
- Overall feeling: premium + trust
- Tradeoff: can feel less youthful if overused

## Option C — “Social Tech”

- Primary: green + teal blend
- Accent: minimal gold
- Overall feeling: product-first, tech-forward
- Tradeoff: weaker “Smiles rewards” emotional cue

Recommendation: start with **Option A**.

---

## 6. Component-level color mapping

- Navbar: `neutral.0` background, `neutral.900` text, green active indicator
- Hero CTA: green primary button, neutral ghost secondary
- Chips/tags:
  - Category chips = neutral tones
  - Reward chips = gold soft background + dark text
- Cards: white or neutral-50 backgrounds, thin neutral-200 borders
- Links: green text + underline on hover

---

## 7. Brand personality guardrails (visual)

- Keep visuals energetic and hopeful, not guilt-heavy
- Use clean whitespace and structured sections; avoid “activist poster” visual noise
- Motion should be subtle and purposeful (micro-interactions, not excessive animation)

---

## 8. Brand for evolving product scope

Current: social impact with environmental emphasis.  
Future: broader social impact + community gamification infrastructure.

To support both, language and visuals should prefer:
- “impact missions”
- “community progress”
- “meaningful actions”

instead of only climate-specific terms in global brand surfaces.

---

## 9. Implementation checklist (design + engineering)

- [ ] Add these tokens to Tailwind theme / design tokens file
- [ ] Create button variants with contrast-safe states
- [ ] Define chart palette with colorblind-safe ordering
- [ ] Verify all primary flows with accessibility contrast checks
- [ ] Snapshot test light and dark mode variants before launch

---

## 10. External brand touchpoints

- Domain: [smileup.world](https://smileup.world)
- Instagram: [instagram.com/smileupworld](https://www.instagram.com/smileupworld)

Use the same green/accent logic in profile imagery and social post templates for consistency.

