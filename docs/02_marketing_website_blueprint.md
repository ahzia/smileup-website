# Marketing Website — Strategy, Structure, and Content Blueprint

Recommendations for the **public SmileUp website**: modern, clear, and optimized for **waitlist conversion** while explaining the problem, the product, and (lightly) trust/transparency. Aligned with `smileup_context.md` and the ImpactChain MVP plans.

---

## 1. Goals

| Priority | Goal |
|----------|------|
| P0 | A visitor understands **what SmileUp is** in under 30 seconds. |
| P0 | Clear **primary CTA**: join the waitlist (app release). |
| P1 | Secondary paths: **For organizations**, **How it works**, trust/credibility. |
| P2 | SEO-friendly pages for “climate app”, “volunteer gamification”, “Gen Z impact” (tune keywords per market). |
| P2 | Fast UX on mobile (calculator-first experiences should feel instant). |

Non-goals: full product functionality, wallet connect, or mission execution on the marketing domain.

---

## 2. Primary audiences & messages

### Future app users (Gen Z–leaning)

- **Headline angle:** Turn scrolling into **real impact**; small actions that add up; social and fun, not preachy.
- **Objection handling:** “Another app” → show **missions + rewards + real organizations**; “greenwashing” → **proof and transparency** (high level).

### NGOs and community leaders

- **Headline angle:** Reach youth **where they already are**; structured missions; better retention than static listings.
- **CTA:** “Partner with us” / “Get early access for organizations” (form or `mailto:`), not buried in footer only.

---

## 3. Recommended site map

```
/                 Home (hero, value prop, how it works, social proof, waitlist)
/how-it-works     Step-by-step: discover → act → earn → support causes
/for-organizations Brief benefits + FAQ + partner CTA
/impact-trust     Optional: transparency, Smiles, privacy/safety (minors, GDPR)
/about            Team, story, hackathon wins / milestones (keep factual)
/waitlist         Can be section on Home + dedicated page for sharing (/join)
/legal/privacy
/legal/terms
```

**Navigation:** Logo, How it works, For organizations, About, **Join waitlist** (button).

---

## 4. Page-by-page content guidance

### Home (`/`)

1. **Hero**  
   - **Headline (example):** “Make your screen time count.” / “Climate action that feels as easy as your favorite feed.”  
   - **Sub:** One line on missions + Smiles + real organizations.  
   - **Primary CTA:** Join waitlist. **Secondary:** For organizations.

2. **Problem strip (3 bullets)**  
   - Awareness ≠ action.  
   - Feeds steal attention from impact.  
   - NGOs need tools that match how youth actually engage.

3. **Solution — “What is SmileUp?”**  
   - Three columns or steps: **Watch & discover** → **Complete missions** → **Earn Smiles & support causes**.  
   - One line on optional **verifiable impact** if you want blockchain mentioned without jargon.

4. **Product preview**  
   - Phone mockups or looping short video (later). Until then: stylized UI cards echoing Impact Feed / Quests (from MVP).  
   - Avoid promising exact features that are not shipped; use “coming” where needed.

5. **Social proof**  
   - AngelHack Warsaw / Global Finals, HelloFuture, Hedera hackathon—**as credibility chips**, not the whole story.  
   - Quote placeholders for future NGO or user testimonials.

6. **Waitlist block**  
   - Email + optional: name, country, “I’m interested as: user / organization”, consent checkbox.  
   - Short privacy note under the form.

7. **Footer**  
   - Links: Privacy, Terms, Contact, socials.

### How it works (`/how-it-works`)

- **Section 1:** The loop (diagram: content → mission → proof → Smiles).  
- **Section 2:** Example mission types (icons): mobility, waste, volunteering, learning—no need to be exhaustive.  
- **Section 3:** Smiles in plain language: earn, donate, redeem (match what MVP actually supports).  
- **Section 4:** FAQ accordion (5–8 items): Is it free? Minors? Germany-first? Blockchain required? Data?

### For organizations (`/for-organizations`)

- **Benefits:** Youth reach, mission templates, engagement metrics, co-branded challenges (future-tense if not live).  
- **Process:** Contact → pilot → launch missions.  
- **CTA:** Dedicated form fields: org name, contact, country, mission types, approximate audience size.

### Impact & trust (`/impact-trust`) — optional but valuable

- **Transparency:** High-level explanation of why you use ledger/consensus (trust, audit trail)—**no wallet setup on this page**.  
- **Safety:** GDPR, minors, moderation—link to Privacy.  
- **Impact metrics:** Only publish what you can defend; otherwise use “We’re measuring …” framing.

### About (`/about`)

- Founder story (from Lean Canvas “why”).  
- Timeline: prototype → ImpactChain MVP → public launch.  
- Team photos when ready.

---

## 5. Messaging hierarchy (SEO + clarity)

**Title tag pattern:** `SmileUp — Turn climate concern into real-world action`  
**Meta description:** One sentence with missions, Smiles, Gen Z, NGOs.

**H1:** Single clear promise per page. **H2s:** Problem, solution, how it works, waitlist.

Avoid overusing “blockchain” in H1; use **“transparent impact”** or **“verifiable actions”** and explain chain one level deeper for those who care.

---

## 6. Waitlist — product requirements (marketing site)

### Fields (minimum viable)

- Email (required)  
- Marketing consent (checkbox, GDPR-friendly)  
- Optional: first name, country, role (user vs org)

### Backend options (pick one when implementing)

- **Form →** Resend / SendGrid / Mailchimp / Buttondown / Loops / Supabase table + notification  
- **Spam:** honeypot + rate limit on API route  
- **Double opt-in** if required by your email tool or jurisdiction

### Post-submit UX

- Thank-you state on same page + optional “Share with a friend” (pre-filled text).  
- Email confirmation: what to expect (launch timeline, privacy).

### Analytics

- Event: `waitlist_submit` with source (home vs /join).  
- Funnel: scroll to form, focus email, submit success.

---

## 7. Content tone

- **Warm, direct, hopeful**—not corporate ESG-speak.  
- **Short sentences.** Gen Z–friendly without sounding forced.  
- **Inclusive:** underserved youth and global pilots where true.

---

## 8. Launch checklist (content)

- [ ] All claims match current MVP or are labeled “coming soon”  
- [ ] Privacy policy covers waitlist data and minors if you collect age  
- [ ] Contact/partner inbox monitored  
- [ ] OG image + title per main page  
- [ ] Lighthouse ≥ 90 performance target (optimize images, fonts)

---

## 9. Relation to the app

- Deep link or prominent button to **live demo** (`smileup-impactchain` deployment) only when you want public testers; otherwise keep **waitlist** primary.  
- Same **brand name**, **Smiles**, and **green/gold** accent story as `plans/UI.md` for consistency.

---

## 10. Next.js, SEO, and performance requirements (implementation guidance)

### Next.js requirements

- Use **Next.js (App Router)** with TypeScript and Tailwind
- Keep server-rendered content as the default (server components) and isolate interactivity in small client components
- Use `next/image` for all media and `next/font` for consistent typography performance

### SEO requirements

- Provide route-level metadata: `title`, `description`, OpenGraph/Twitter
- Implement `sitemap.xml` and `robots.txt`
- Ensure pages have a single clear `H1` and scan-friendly sections with `H2`s
- Use canonical URLs and OG images for `Home`, `How it works`, and the calculator route

### Performance requirements

- Target “fast first load” for SEO:
  - minimize client JS on marketing pages
  - keep charts/light visuals lightweight (avoid heavy libraries early)
- Optimize images (size + format) and prefer static assets for marketing imagery
- Ensure calculator steps render quickly (one question per step, minimal re-render)

---

## 11. Early features (pre-app) and how they fit the roadmap

### 11.1 Carbon Footprint Calculator (v1)

Ship as a dedicated route: `/impact/carbon-footprint-calculator`

It should:
- Follow the calculator UX requirements in `docs/carbon-footprint-calculator/readme.md`
- Show clear “estimate” disclaimers
- Be designed as an “entry point to behavior change” that can later map to in-app missions and Smiles

Place the waitlist CTA:
- On the result page of the calculator
- In the Home hero and How it works final step

### 11.2 Additional early “impact estimator” features (environment first)

Use the same step-flow UI pattern:
- Impact Goal Builder (weekly/monthly realistic goals)
- Your Mission Fit quiz (recommend mission categories)
- Smiles Potential Preview (non-wallet preview mapping, “coming soon”)

These features should be written in neutral “impact mission” language so you can later extend from Climate → broader Social Impact without rewriting everything.
