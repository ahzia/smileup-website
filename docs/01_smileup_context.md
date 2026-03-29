# SmileUp — Context for the Marketing Website

This document distills what SmileUp is across your BeVisioners materials, the original `smileup` prototype, and the current `smileup-impactchain` MVP (`plans/`, `concept.md`, requirements). Use it as the single “source of meaning” when writing copy or designing the public site.

---

## One-sentence pitch

**SmileUp turns the time young people already spend on short-form, social-style content into real-world environmental and social impact**—through missions, rewards, and a transparent **Smiles** token economy—while giving NGOs and communities better tools to mobilize and retain volunteers.

---

## The problem (audience language)

- **Awareness without action:** Many Gen Z users care about climate and social causes but do not consistently act; anxiety is high, sustained participation is low.
- **Attention is elsewhere:** Hours go to addictive feeds and games that rarely connect to meaningful impact.
- **Organizations are underserved:** NGOs and youth-led initiatives struggle to reach, onboard, and keep young volunteers using tools that match modern engagement expectations.

The gap is not only “lack of information” but **knowledge → behavior**, at scale.

---

## The solution (what SmileUp does)

1. **Discovery:** Short-form video and story-style content about causes and missions (familiar, scrollable, mobile-first).
2. **Action:** Real-world **missions** (daily, weekly, featured) created by partner organizations or the platform—complete with proof where needed.
3. **Motivation:** **Smiles**—earned for participation, donated to projects, redeemable for rewards—plus XP, badges, leaderboards, and community dynamics.
4. **Trust (ImpactChain MVP):** Blockchain layer (e.g., Hedera HTS/HCS) for auditable token movement and proof logging where you choose to emphasize it on the marketing site.

---

## Who it is for

| Segment | Role on the platform |
|--------|----------------------|
| **Gen Z (roughly 14–30)** | End users: discover, complete missions, earn and use Smiles, compete and share progress. |
| **NGOs, clubs, youth initiatives** | Supply side: publish missions, reach youth, show impact. |
| **Sponsors / partners (later)** | CSR, sponsored missions, rewards (mentioned lightly until live). |

The **marketing site** should speak primarily to **future app users** (waitlist) and **secondarily** to **organizations** (“Partner with us” or contact)—without building the full product on the website.

---

## How SmileUp differs (vs. generic volunteering or donation apps)

- **Integrated loop:** Content + missions + rewards + (optional) on-chain transparency—not only a static listing of opportunities.
- **Behavior-first impact:** Not only monetary donation; emphasis on **actions** (transport, waste, volunteering, learning, etc.).
- **Engagement model:** Designed to feel closer to **social/video** products than to a traditional NGO directory.

Competitive references you have used include LetsAct, Brightest, Komorabi, HelpUp, ShareTheMeal—position SmileUp as **more gamified, more continuous, and more “feed-native”** where relevant.

---

## Product evolution (for “Our story” or footer credibility)

1. **`smileup` (initial):** React SPA, Firebase, TikTok-style scrolling, Smiles, leaderboard, profile—hackathon-oriented donation/engagement flow.
2. **`smileup-impactchain` (current MVP):** Next.js, missions/quests, feed, profile, leaderboard, wallet integration, Smiles on Hedera, proof logging—documented in `plans/concept.md`, `genral_draft_requirement.md`, `UI.md`.

The **public website** should reflect the **current narrative** (missions + Smiles + transparency) while keeping the story expandable:
- Marketing v1 is **environment-first** (e.g., calculator + climate missions).
- The product language should already be ready to include **broader social impact** later.
- The long-term direction can include **community gamification** (any group can run activity challenges), without changing the primary “impact mission” framing.

---

## Impact framing (optional metrics / goals)

From BeVisioners application text: examples include CO₂-oriented mission mapping, active users across pilot markets, partner organizations, and public launch. Use **rounded, honest** numbers or qualitative goals on the site until you have verified live metrics.

---

## What the marketing site is *not*

- Not the app: no full auth, wallet, or mission completion flows.
- Not a replacement for NGO dashboards: tease **partner interest** via form or email, not full onboarding.

---

## Related paths in this monorepo

- Narrative & grants: `docs/bevisioners/SmileUp.md`, `docs/bevisioners/01_bVLeanCanvas.txt`
- MVP scope & UX: `../smileup-impactchain/plans/concept.md`, `genral_draft_requirement.md`, `UI.md`, `33_pitch_deck_content.md`
- Legacy prototype: `../smileup/README.md`
