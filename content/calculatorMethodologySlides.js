/**
 * Slides for the calculator “How we calculate” carousel (emoji + short bullets).
 */

export const calculatorMethodologySlides = [
  {
    id: "travel-ground",
    emoji: "🚌",
    chipLabel: "Ground travel",
    title: "Travel on the ground",
    tagline: "Same rules for everyone—easy to compare.",
    bullets: [
      "We turn your weekly car, bus, and train distances into yearly kilometres.",
      "Then multiply by fixed factors: about **0.175 kg CO₂e** per km (medium petrol car), **0.125 kg** per passenger-km (local bus), **0.035 kg** per passenger-km (national rail).",
      "**Your country choice does not change these** in this version—only home electricity uses your location.",
    ],
  },
  {
    id: "flights",
    emoji: "✈️",
    chipLabel: "Flights",
    title: "Flights",
    tagline: "Typical trip lengths built in, including high-altitude effects.",
    bullets: [
      "Each **short** trip you count ≈ **2,000 passenger-kilometres**; each **long** trip ≈ **12,000**.",
      "We multiply by about **0.126** (short) and **0.117** (long) kg CO₂e per passenger-km.",
      "Those rates include an extra allowance for **radiative forcing** from flying at altitude.",
    ],
  },
  {
    id: "electricity",
    emoji: "⚡",
    chipLabel: "Electricity",
    title: "Home electricity",
    tagline: "Where your country choice matters most.",
    bullets: [
      "**Monthly kWh × 12 × grid factor** for the place you select.",
      "**EU**: EEA data. **UK**: national factors. **Global / India** and similar: rough averages where we don’t publish a full country series yet.",
      "Cleaner grids → lower home emissions with the same usage.",
    ],
  },
  {
    id: "food",
    emoji: "🥗",
    chipLabel: "Food",
    title: "Food",
    tagline: "A simple yearly band—not a meal-by-meal diary.",
    bullets: [
      "You pick a diet style; we map it to a **fixed yearly total**.",
      "Roughly **1.5–3.0 tonnes CO₂e per year** from vegan through meat-heavy—broad lifestyle bands.",
      "Good for direction; not a substitute for a detailed food audit.",
    ],
  },
  {
    id: "shopping",
    emoji: "🛍️",
    chipLabel: "Shopping",
    title: "Shopping & services",
    tagline: "Beyond food and energy—one simple spending level.",
    bullets: [
      "Low, medium, or high maps to **fixed yearly totals** (about **0.4–1.7 tonnes CO₂e per year**).",
      "A **proxy** for goods and services until a future version can use spending or basket data.",
      "We label this clearly in your breakdown as a rough guide.",
    ],
  },
];
