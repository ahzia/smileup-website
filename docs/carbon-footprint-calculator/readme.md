Here’s a **clean, structured document** you can directly use for planning, development, or sharing with mentors 👇

---

# 🌍 Carbon Footprint Calculator Feature

### (SmileUp – Feature Design Document v1)

---

# 1. 🎯 Goal

Build a **simple, reliable carbon footprint calculator** that:

* Estimates a user’s **annual CO₂ emissions**
* Provides **insightful breakdowns**
* Serves as a **foundation for future gamification & missions**

---

# 2. 🧠 Core Concept

The calculator will use:

### ✅ Emission Factor Model (MVP)

A standard, widely-used approach:

> CO₂ = User Activity × Emission Factor

Example:

* Driving 10,000 km/year
* Emission factor: 0.12 kg CO₂/km
  → Result: 1,200 kg CO₂/year

---

# 3. 📊 Data Sources & Standards

Use **trusted, public datasets**:

### 🌍 Recommended Sources

#### 1. DEFRA (UK Government)

* One of the most widely used datasets globally
* Includes transport, energy, food
* [https://www.gov.uk/government/collections/government-conversion-factors-for-company-reporting](https://www.gov.uk/government/collections/government-conversion-factors-for-company-reporting)

---

#### 2. European Environment Agency (EEA)

* EU-focused data (better for your region)
* [https://www.eea.europa.eu/](https://www.eea.europa.eu/)

---

#### 3. IPCC (Intergovernmental Panel on Climate Change)

* Scientific baseline data
* [https://www.ipcc.ch/](https://www.ipcc.ch/)

---

#### 4. Open APIs (Optional)

* CarbonFootprint API
* Climatiq API (very developer-friendly)
* [https://www.climatiq.io/](https://www.climatiq.io/)

---

# 4. 🧩 Calculation Categories (MVP)

Keep it simple: 4 main categories

---

## 🚗 1. Transport

Inputs:

* Car usage (km/week or year)
* Public transport usage
* Flights per year

Example factors:

* Car: ~0.12–0.2 kg CO₂/km
* Flight: ~90–250 kg per short flight

---

## 🏠 2. Home Energy

Inputs:

* Electricity usage (kWh or estimate)
* Heating type (gas/electric)

Example:

* Electricity: ~0.3–0.5 kg CO₂/kWh (varies by country)

---

## 🍔 3. Food

Inputs:

* Diet type:

  * Meat-heavy
  * Average
  * Vegetarian
  * Vegan

Example yearly estimates:

* Meat-heavy: ~2.5 tons CO₂
* Vegan: ~1.5 tons CO₂

---

## 🛍️ 4. Consumption (Optional MVP / v2)

Inputs:

* Shopping habits
* Tech purchases
* Clothing frequency

👉 Can start with:

* Low / Medium / High consumption

---

# 5. 🧮 Example Calculation Flow

```
Total CO₂ =
Transport +
Energy +
Food +
Consumption
```

Output:

* Total: e.g. **6.2 tons CO₂/year**
* Breakdown:

  * Transport: 40%
  * Food: 30%
  * Energy: 20%
  * Consumption: 10%

---

# 6. 🎨 UX Recommendations (VERY IMPORTANT)

### ❌ Avoid:

* Long boring forms
* 20+ questions
* Technical jargon

---

### ✅ Recommended UX:

#### 1. One Question Per Screen

* Swipe / tap-based flow

#### 2. Max 8–10 Questions

#### 3. Visual Inputs

* Icons (car, food, house)
* Sliders instead of text fields

#### 4. Progress Indicator

* “Step 3 of 8”

---

# 7. 📈 Output Design

Instead of just numbers:

### Show:

* 🌍 “You emit **6.2 tons CO₂/year**”
* 📊 Visual breakdown (pie/bar)
* ⚖️ Real-world comparisons:

  * “= 3 flights”
  * “= 300 trees needed”

---

# 8. ⚠️ Accuracy & Transparency

### Important:

* Results are **estimates, not exact**

### Add disclaimer:

> “This is an approximate calculation based on regional averages.”

---

# 9. 🛠️ Implementation Plan

---

## Phase 1 (MVP – 1–2 weeks)

* Static emission factors (hardcoded or JSON)
* Basic question flow
* Simple calculation logic
* Result screen

Tech:

* Frontend: React / React Native
* Backend: Optional (can be client-side initially)

---

## Phase 2 (Improvement)

* Add country-specific factors
* Store user results
* Add comparison over time

---

## Phase 3 (Advanced)

* API integration (Climatiq)
* More detailed inputs
* Dynamic recommendations

---

# 10. 🔮 Future Integration (SmileUp Vision)

This is where your idea becomes powerful 👇

---

## 🔁 1. Connect to Missions

Example:

* High transport emissions → suggest:

  * “Bike 3 times this week”
* High food emissions → suggest:

  * “Plant-based challenge”

---

## 🎮 2. Gamification

* Convert CO₂ reduction → “Smiles”
* Weekly challenges:

  * “Reduce 5% footprint”

---

## 👥 3. Social Features

* Compare with friends
* Leaderboards
* Community challenges

---

## 🤖 4. AI Layer

Use LLMs for:

* Personalized suggestions
* Behavioral nudges:

  * “You can reduce 20% by doing X”

---

## 📊 5. Continuous Tracking

Instead of one-time:

* Monthly footprint
* Trend graphs
* Progress tracking

---

# 11. 💡 Key Recommendations

### For NOW (MVP):

* Keep it **simple, fast, engaging**
* Focus on **UX over accuracy**
* Use **standard emission factors**
* Limit to **< 10 questions**

---

### For LATER:

* Add personalization
* Connect to missions (core value)
* Build habit-forming loops
* Introduce AI recommendations

---

# 12. 🚀 Final Insight

👉 Don’t think of this as:

> “Carbon calculator”

👉 Think of it as:

> **Entry point to behavior change**

This aligns perfectly with your core problem from the Lean Canvas:

> “Gap between awareness and action”

---

# 13. Next.js website integration (early feature)

Treat the calculator as a lightweight standalone feature on the marketing site (no wallet connect, no auth required).

## 13.1 Route recommendation

- `GET` page route: `/impact/carbon-footprint-calculator`
- Keep the emission-factor tables and comparison copy static and cacheable.

## 13.2 Client vs server components (App Router)

- Server-render the shell page and static copy (fast SEO).
- Implement the step flow and calculation UI as a small `use client` component.
- Avoid reloading large datasets on every step; compute results from in-memory JSON/constants.

## 13.3 Result persistence + analytics

Early stage (no login):
- Store the latest result in `localStorage` (optional).
- Track analytics events (optional but recommended):
  - `calculator_start`
  - `calculator_step_completed` (step number)
  - `calculator_result_viewed`
  - `calculator_waitlist_cta_click`

## 13.4 Mapping to future missions (copy only in v1)

On the result page:
- Show a friendly “What this could mean for your missions” section.
- Use category mapping terms (transport/home/food/consumption).
- Include a clear “unlock missions in the app” CTA (waitlist), without promising on-chain tokens yet.

---

# 14. Data files: UK DEFRA CSV + curated JSON + EU sources

- **`smileup-calculator-factors.v1.json`** — **Canonical factors file for the live calculator** (imported by `lib/calculatorFactors.js`). It bundles electricity (EEA / DEFRA where cited), transport from DEFRA row IDs, and clearly labelled **assumed** lifestyle buckets. The UI shows per-line formulas, source pills, and total from this file.
- **`data.csv`** — Export of **UK Government GHG Conversion Factors for Company Reporting (2025)**. See [`07_uk_csv_explainer_and_eu_sources.md`](07_uk_csv_explainer_and_eu_sources.md) for structure, decimal commas, and how to pick the correct `kg CO2e` rows.
- **`../../data/emission-factors/conversion-factors.curated.v1.json`** — Older **traceable** subset (UK factors with DEFRA row IDs + source URLs). Prefer **`smileup-calculator-factors.v1.json`** for app logic; keep this file for reference or migration.
- **Roadmap (orgs + AI):** [`08_data_roadmap_ai_organizations.md`](08_data_roadmap_ai_organizations.md).

