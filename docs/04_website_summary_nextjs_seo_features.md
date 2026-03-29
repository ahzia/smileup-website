# SmileUp Website Summary (Next.js, Fast, SEO, Early Features)

This document consolidates the website requirements for `smileup.world`:
- Use **Next.js** (App Router) for a fast, SEO-friendly marketing site.
- Convert visitors into **waitlist signups** for the app release.
- Ship **early features before the main platform**; the first is the **Carbon Footprint Calculator**.
- Keep the design and feature architecture flexible so the app can expand from **environmental impact** to **broader social impact**, and later to **community gamification**.

---

## 1. What visitors should understand (in <30 seconds)

SmileUp helps young people turn real life action into real impact:
- Discover missions via a modern, social-style experience.
- Complete missions (not just “donate”).
- Earn **Smiles** and redeem/reinvest into causes.
- Optionally emphasize **transparent/verifiable impact** (without forcing users to understand crypto).

The marketing site should focus on clarity + trust + the waitlist CTA.

---

## 2. Recommended pages (MVP marketing)

1. `/` Home
2. `/how-it-works`
3. `/for-organizations`
4. `/impact-trust` (optional but recommended)
5. `/about`
6. `/waitlist` (or embed a waitlist section on Home, but keep a dedicated entry point)
7. `/join` (optional friendly alias)
8. `/impact/carbon-footprint-calculator` (early feature)
9. `/legal/privacy`, `/legal/terms`

Navigation:
- Primary button: `Join waitlist`
- Secondary link: `How it works`

---

## 3. Next.js technical direction (fast + SEO)

### 3.1 Core framework choices

- Next.js App Router (`app/`)
- TypeScript
- Tailwind CSS
- Server Components by default; isolate interactive UI in small `use client` components (especially calculators and form handling)

### 3.2 SEO essentials (do this first)

- Route-level `metadata` (title, description, OpenGraph, Twitter)
- Generate `sitemap.xml` and `robots.txt`
- Use clean, human-friendly URLs
- Add structured data where it fits (for example: `Organization`, and optionally `FAQ` on the FAQ sections)

### 3.3 Performance essentials (fast-by-default)

- Use `next/image` for all static images
- Use font loading via `next/font`
- Keep JS payload small:
  - avoid heavy chart libraries for early calculator visualizations
  - prefer lightweight client components
- Ensure caching strategy:
  - static content should be cacheable
  - API/data fetches should use Next.js caching defaults unless you intentionally need fresh data

### 3.4 Social share previews

- Provide OG images per main page (Home, How it works, Carbon calculator)

---

## 4. Early features (ship before the main platform)

### 4.1 Required early feature: Carbon Footprint Calculator

Purpose:
- Give visitors an interactive “first win”
- Start behavior change (awareness → action)
- Provide content to later connect with missions and Smiles (CO2 reduction can become a “mission outcome” predictor)

Design requirements (from `docs/carbon-footprint-calculator/readme.md`):
- Max 8–10 questions
- One question per screen, sliders + icons
- Clear disclaimer: results are estimates
- Visual breakdown + comparisons (simple, optimistic framing)

### 4.2 Additional “calculator-like” early features (environment first)

These can reuse the same UI patterns (step flow, sliders, comparisons) and later expand to social-impact:

1. `Impact Goal Builder` (weekly/monthly goal estimator)
   - Input: which actions you can do + time constraints
   - Output: a realistic goal plan and “coming soon” mapping to missions
2. `Your Mission Fit` quiz
   - Input: preferences (transport, food, home energy, volunteering)
   - Output: 3 recommended mission categories + a “join waitlist to unlock missions” CTA
3. `Smiles Potential Preview` (no wallet, no rewards yet)
   - Input: results from calculator or goal builder
   - Output: “If you do these missions, you could earn X Smiles (preview)” with disclaimer
4. `Transport Switch Planner` (low-friction estimator)
   - Input: current transport + what you can switch to
   - Output: estimated reduction + suggested weekly micro-actions

### 4.3 Expansion to social impact later (planned structure)

Keep the feature system modular:
- “Impact type” can be `Climate` first, then add `Community/Social` later
- Copy and UI should already use neutral words like “impact missions” even if emission-focused calculators appear in v1

---

## 5. How the early features connect to future product

The marketing-site calculator(s) should produce outputs that map cleanly to later in-app missions:
- CO2 estimate breakdown → mission categories (transport, home energy, food, consumption)
- User intent/preferences → mission recommendations/feeds
- Progress over time → future streaks, XP, and “community challenges”

The marketing feature should never require wallet connect or full auth.

---

## 6. Content + CTA strategy

Primary CTA: `Join waitlist`

Where to place it:
- Above the fold on Home
- After the calculator result (one short explanation + waitlist button)
- In How it works (final step)

Secondary credibility:
- Include hackathon and MVP mentions as short “chips” (not as long paragraphs)
- Link to Instagram (`https://www.instagram.com/smileupworld`) for community signal

---

## 7. Build order suggestion

1. Foundation: Next.js site + SEO baseline + legal pages
2. Waitlist form (`/waitlist`) with validation + thank-you state
3. Carbon calculator route with estimator UI
4. “Impact Goal Builder” and “Mission Fit quiz” (reuse UI patterns)
5. Later: integrate outputs into real app missions and Smiles

