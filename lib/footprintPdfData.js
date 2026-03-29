import { calculatorUserDisclaimer } from "../content/calculatorUserCopy";

const DIET_LABELS = {
  vegan: "Vegan",
  vegetarian: "Vegetarian",
  average: "Mixed",
  meat_heavy: "Meat-heavy",
};

const CONSUMPTION_LABELS = {
  low: "Low",
  medium: "Medium",
  high: "High",
};

const CATEGORY_ROWS = [
  { key: "transport", label: "Transport", color: "#1b6e5c" },
  { key: "home", label: "Home", color: "#2a9d8f" },
  { key: "food", label: "Food", color: "#52b788" },
  { key: "stuff", label: "Stuff", color: "#95d5b2" },
];

/**
 * Props for {@link FootprintReportDocument} from calculator state.
 */
export function buildFootprintPdfProps({ values, result, data, detailed }) {
  const elec = data.electricity_kg_co2e_per_kwh[values.country];
  const countryLabel = elec?.label || values.country;
  const totalKg = Math.max(result.totalKg, 1e-9);

  const kgByKey = {
    transport: result.transportSubtotalKg,
    home: result.homeKg,
    food: result.foodKg,
    stuff: result.consumptionKg,
  };

  const categories = CATEGORY_ROWS.map((row) => {
    const kg = kgByKey[row.key];
    return {
      label: row.label,
      color: row.color,
      kg,
      tons: kg / 1000,
      pct: Math.min(100, (kg / totalKg) * 100),
    };
  });

  const lines = result.lines.map((line) => {
    const src = data.sources_registry[line.source_id];
    return {
      id: line.id,
      title: line.title,
      tons: line.kg / 1000,
      formula: line.formula,
      extra: detailed && line.extra ? line.extra : null,
      sourceType: src?.type || "assumed",
      sourceName: src?.name || line.source_id,
      sourceUrl: src?.url || null,
    };
  });

  const references = result.sourceIds.map((id) => {
    const s = data.sources_registry[id];
    return {
      id,
      name: s?.name || id,
      detail: detailed && s?.type === "assumed" && s?.detail ? s.detail : null,
    };
  });

  const inputs = [
    ["Where you live", countryLabel],
    ["Driving (per week)", `${values.carKmPerWeek} km`],
    ["Local bus (per week)", `${values.busKmPerWeek} km`],
    ["Train / metro (per week)", `${values.railKmPerWeek} km`],
    ["Shorter flights (per year)", String(values.shortFlightsPerYear)],
    ["Long flights (per year)", String(values.longFlightsPerYear)],
    ["Home electricity (per month)", `${values.homeKwhPerMonth} kWh`],
    ["How you usually eat", DIET_LABELS[values.diet] || values.diet],
    ["Shopping & services", CONSUMPTION_LABELS[values.consumption] || values.consumption],
  ];

  return {
    generatedLabel: new Date().toLocaleDateString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
    totalTons: result.totalTons,
    totalKg: result.totalKg,
    categories,
    disclaimer: calculatorUserDisclaimer,
    lines,
    references,
    inputs,
  };
}
