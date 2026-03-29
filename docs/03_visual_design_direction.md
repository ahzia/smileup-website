# Marketing Website — Visual & UX Direction

Guidance for a **modern, beautiful** marketing site that feels like the same family as **SmileUp ImpactChain** (`smileup-impactchain/plans/UI.md`) without cloning the app UI pixel-for-pixel.

---

## 1. Brand personality

- **Optimistic and energetic** — impact as opportunity, not guilt.  
- **Social-native** — full-bleed imagery, motion, card-based layouts.  
- **Trustworthy** — clear typography, readable contrast, no clutter.

---

## 2. Color (align with MVP)

From ImpactChain UI spec:

| Token | Hex | Usage on marketing site |
|-------|-----|-------------------------|
| Primary green | `#3DBE29` | CTAs, key highlights, progress accents |
| Gold | `#FFD700` | Smiles / rewards accents, subtle gradients |
| Dark | `#1F1F1F` | Text, dark sections, footer |
| White / off-white | `#FFFFFF`, `#F8FAF8` | Backgrounds, breathing room |

**Suggestions:**

- Use **dark hero** (near-black with green glow) **or** **light hero** (off-white with green CTA)—pick one primary mode; secondary sections can alternate for rhythm.  
- **Gradients:** very subtle green → teal or green → gold at 5–15% opacity for backgrounds only.

---

## 3. Typography

- **Headings:** Strong geometric or rounded sans (e.g., **Plus Jakarta Sans**, **Outfit**, **DM Sans**) — matches “bold headlines, rounded body” from UI spec.  
- **Body:** Same family or paired **Inter** / **Source Sans 3** for long readability.  
- **Scale:** Clear jump between H1 and body; mobile-first sizes (H1 ~ clamp 2rem–3.5rem).

---

## 4. Layout patterns

- **Hero:** Full viewport height on mobile; headline + sub + single primary button + optional email field or “Scroll to join”.  
- **Bento grid** or **three-step** horizontal cards for “How it works”.  
- **Sticky CTA** on mobile: thin bar “Join waitlist” after first scroll.  
- **Generous spacing** (8px grid, section padding 4–6rem desktop).

---

## 5. Imagery & motion

- **Photography:** Real young people in urban/nature contexts, diverse, candid—not stock “handshake in office”.  
- **Product:** Device frames with simplified screenshots of Feed / Quests when available; blur or abstract placeholders until assets exist.  
- **Motion:**  
  - Subtle **fade-up** on scroll (respect `prefers-reduced-motion`).  
  - **Micro-interactions** on buttons (scale 0.98, shadow lift).  
  - Optional **looping gradient** or **particle** accent behind hero—keep performance in check.

---

## 6. Components to design once, reuse

- Primary / secondary / ghost buttons  
- Email capture card (waitlist) with validation states  
- Feature card (icon, title, 2 lines)  
- FAQ accordion  
- Partner / press logo row  
- Footer with legal links

---

## 7. Accessibility

- Contrast ratio **WCAG AA** minimum for text on green/gold (often need **white text on green** or **dark text on gold**, not gold on white for small text).  
- Focus rings visible on keyboard navigation.  
- Form errors announced clearly (aria-live).

---

## 8. Technical stack (suggestion)

Match your MVP ecosystem for easy handoff:

- **Next.js** (App Router) + **TypeScript** + **Tailwind CSS**  
- **Framer Motion** or CSS-only motion for marketing pages  
- Fonts via `next/font`  
- Static OG images per route

Hosting: Vercel (same as MVP) keeps DNS and previews simple.

---

## 9. What to avoid

- Heavy blockchain visuals (wallets, chains) in the hero unless your audience is crypto-native; prefer **human + planet + phone**.  
- Dense paragraphs—**scan-first** layout.  
- Competing CTAs (one primary: waitlist).

---

## 10. Deliverables for a designer (if you hire one)

- This doc + `marketing_website_blueprint.md` + `smileup_context.md`  
- Export 3–5 key screens: Home, How it works, Waitlist modal state, Mobile menu, Footer  
- Figma variables for green/gold/dark + typography scale
