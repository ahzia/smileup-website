# What is `data.csv`? (UK) + Where to get EU-equivalent data

## 1. What your `data.csv` file is

The file `docs/carbon-footprint-calculator/data.csv` is an export of the **UK Government GHG Conversion Factors for Company Reporting** (DEFRA / DESNZ), **2025 edition**.

Evidence in the file:

- Title row: `UK Government GHG Conversion Factors for Company Reporting`
- Column header: `GHG Conversion Factor 2025`
- Structure matches the official workbook: **Scope 1 / 2 / 3** categories, fuels, transport, electricity, WTT (well-to-tank), biofuels, etc.

Each data row typically includes:

| Column | Meaning |
|--------|---------|
| `ID` | Stable row identifier in the official dataset |
| `Scope` | GHG Protocol scope (e.g. Scope 1, 2, 3) |
| `Level 1` … `Level 4` | Hierarchy (category → subcategory → activity) |
| `Column Text` | Which gas aggregate this row represents (`kg CO2e` total, or split CO₂ / CH₄ / N₂O) |
| `UOM` | Unit of measure (e.g. `kWh`, `km`, `passenger.km`, `litres`) |
| `GHG Conversion Factor 2025` | Numeric factor (**comma as decimal separator**, European style) |

**Important:** For most reporting and for a simple consumer calculator, use the row where `Column Text` is exactly **`kg CO2e`** (total CO₂-equivalent per unit), not the CO₂-only row.

### Official UK source (download / updates)

- **Collection page:** [Government conversion factors for company reporting](https://www.gov.uk/government/collections/government-conversion-factors-for-company-reporting)

Re-download when you want the latest factors; version the file in git (e.g. `defra-2025-full-export.csv`) so you can diff year-on-year.

---

## 2. Is there one “EU CSV” like the UK file?

**There is no single EU file that mirrors DEFRA’s full UK workbook** for all scopes and all activities in one table. Practice in the EU is usually:

- **Grid electricity:** country-level **emission intensity of electricity generation** (EEA, Eurostat, national TSO data).
- **Fuels / heat / corporate activities:** national emission factor compilations, **IPCC** defaults, or sector tools (e.g. transport models).
- **Organisation reporting:** companies often use **national guidelines** + **GHG Protocol** + supplier-specific data.

So the right approach for SmileUp is:

1. **UK:** use DEFRA factors (your `data.csv` or fresh download) for UK-specific users / UK orgs.
2. **EU:** combine **EEA (or Eurostat) electricity intensity by country** with **activity factors** from IPCC / national tables / future API (Climatiq, etc.) where licensed.

---

## 3. Recommended EU / official sources to search and download

Use these as your “source of truth” links (you can drop exported CSVs next to `data.csv` when you import them).

### Electricity — country intensity (EU / EEA)

- **EEA indicator:** [Greenhouse gas emission intensity of electricity generation, country level](https://www.eea.europa.eu/en/analysis/indicators/greenhouse-gas-emission-intensity-of-1/greenhouse-gas-emission-intensity-of-electricity-generation-country-level)  
  Download the **data behind the indicator** (usually CSV/Excel) and map **g CO₂eq/kWh** or **kg/kWh** to your JSON schema.

### EU open data — local energy emission factors (JRC)

- **EU Data Portal — GHG emission factors for local energy use** (Covenant of Mayors / JRC):  
  [dataset on data.europa.eu](https://data.europa.eu/data/datasets/72fac2b2-aa63-4dc1-ade3-4e56b37e4b7c?locale=en)  

Useful when you need **electricity and other energy carriers** with documented methodology (activity vs life-cycle approaches vary — read the documentation).

### Eurostat (official EU statistics)

- Search Eurostat for **greenhouse gas emission intensity of electricity generation** and related **energy / environment** tables; export CSV for pipeline import.

### Complementary (not a replacement for national/EU official tables)

- **IEA** publishes **Emissions Factors** data products (often paid / licensed — check terms before shipping to production).

---

## 4. How SmileUp should use this technically

1. **Keep the raw UK CSV** as the archival source; do not hand-edit thousands of rows.
2. **Maintain a small curated JSON** (see `data/emission-factors/conversion-factors.curated.v1.json`) for the **website calculator** and app MVP, with each factor pointing to:
   - `source_id` + `source_row_id` (DEFRA `ID`) where applicable
   - `methodology_note` (e.g. “UK grid average Scope 2”, “includes RF for flights”)
3. **Add an import script later** that parses DEFRA CSV (comma decimals) and regenerates curated JSON to reduce human error.

---

## 5. Accuracy expectations (be honest in the product)

- **Consumer calculator:** high transparency > false precision. Show **ranges** or **confidence** where you use averages (diet, consumption, flight routing).
- **Company reporting:** must support **audit trail**: factor ID, publication year, URL, and whether WTT / T&D / RF is included.

See `08_data_roadmap_ai_organizations.md` for the roadmap toward org-grade and AI-assisted workflows.

---

## Eurostat downloads (SmileUp `draft_data/`)

If you imported Eurostat `.tsv.gz` files into `draft_data/`, see:

- [`draft_data/README.md`](draft_data/README.md) — what each file is, **use now vs later**, and whether **primary energy / drivers** datasets are needed.
- [`draft_data/dataset-inventory.v1.json`](draft_data/dataset-inventory.v1.json) — machine-readable inventory for tooling.
