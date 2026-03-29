# Roadmap: accurate CO₂ data → organisations → AI-assisted reporting

## Phase A — Website / consumer (now)

- **UK:** DEFRA 2025 factors from `data.csv` (curated subset in JSON with row IDs).
- **EU:** electricity intensity **per country** from EEA (or Eurostat) import; transport still mostly **UK DEFRA** or **generic IPCC-style** until national EU passenger factors are wired.
- **UI:** always show **methodology** + **factor sources** + **year** + **geography** (UK vs DE vs EU average).

## Phase B — Data pipeline (next)

- Versioned raw datasets in repo or object storage: `defra-2025-full.csv`, `eea-electricity-intensity-20XX.csv`.
- Build `scripts/import-factors.mjs` (or similar) that:
  - normalises decimal separators
  - validates required columns
  - emits `conversion-factors.vN.json` + a checksum
- Add **unit tests** for a few golden scenarios (known inputs → expected kg CO₂e).

## Phase C — Organisation / company footprint (later)

Organisation footprints need **GHG Protocol** structure:

- **Scope 1:** direct fuels, company vehicles, refrigerants, etc. → mostly DEFRA (UK) or national factor tables (EU).
- **Scope 2:** purchased electricity, heat, steam → **location-based** and **market-based** (where applicable); EU needs **residual mix** rules per country.
- **Scope 3:** 15 categories; DEFRA workbook already contains many **business travel**, **WTT**, **fuel-related** rows — good for UK-centric orgs.

Deliverables:

- Admin UI or CSV upload for **activity data** (kWh, litres, km, spend).
- **Audit log**: which factor version was applied to each line item.

## Phase D — AI feature (assistive, not “magic accuracy”)

AI is best used for:

- **Mapping** messy user text (“we flew Berlin–Lisbon twice”) → structured activities.
- **Suggesting** factor IDs from a **closed library** you control (RAG over your JSON + official PDFs).
- **Explaining** differences (RF on/off, WTT included or not).

Guardrails:

- **Never** let the model invent numeric factors; it may only **select** from approved tables or **quote** retrieved documents.
- Human review for **published org reports**.

## Phase E — Integrations

- Optional APIs (license-dependent): Climatiq, CarbonKit, etc., as **overrides** for paying org customers.
- Blockchain / “proof” layers remain **separate** from factor accuracy (they attest to claims, not physics).
