/**
 * Annual footprint estimate from smileup-calculator-factors JSON.
 * All masses in kg CO2e unless noted.
 */

export function computeFootprint(values, data) {
  const reg = data.sources_registry;
  const elec = data.electricity_kg_co2e_per_kwh[values.country];
  if (!elec) {
    throw new Error(`Unknown country key: ${values.country}`);
  }

  const electricityFactor = elec.value;
  const t = data.transport;
  const life = data.lifestyle_annual_kg_co2e;

  const weeksPerYear = 52;
  const carKmYear = values.carKmPerWeek * weeksPerYear;
  const busKmYear = values.busKmPerWeek * weeksPerYear;
  const railKmYear = values.railKmPerWeek * weeksPerYear;

  const transportCar = carKmYear * t.car_medium_petrol_kg_co2e_per_vehicle_km.value;
  const transportBus = busKmYear * t.bus_local_kg_co2e_per_passenger_km.value;
  const transportRail = railKmYear * t.rail_national_kg_co2e_per_passenger_km.value;

  const shortPkm = values.shortFlightsPerYear * t.assumed_passenger_km_per_short_flight.value;
  const longPkm = values.longFlightsPerYear * t.assumed_passenger_km_per_long_flight.value;
  const flightsShort = shortPkm * t.flight_short_haul_kg_co2e_per_passenger_km_with_rf.value;
  const flightsLong = longPkm * t.flight_long_haul_kg_co2e_per_passenger_km_with_rf.value;

  const home = values.homeKwhPerMonth * 12 * electricityFactor;
  const food = life.diet[values.diet].value;
  const consumption = life.consumption[values.consumption].value;

  const transportTotal = transportCar + transportBus + transportRail + flightsShort + flightsLong;
  const totalKg = transportTotal + home + food + consumption;

  const lines = [
    {
      id: "car",
      title: "Car (medium petrol, per km)",
      kg: transportCar,
      formula: `${carKmYear.toFixed(0)} km/yr × ${t.car_medium_petrol_kg_co2e_per_vehicle_km.value} kg/km`,
      factor_key: "car_medium_petrol_kg_co2e_per_vehicle_km",
      source_id: t.car_medium_petrol_kg_co2e_per_vehicle_km.source_id,
      extra: `DEFRA row ${t.car_medium_petrol_kg_co2e_per_vehicle_km.defra_row_id}`,
    },
    {
      id: "bus",
      title: "Bus (local, per passenger-km)",
      kg: transportBus,
      formula: `${busKmYear.toFixed(0)} pkm/yr × ${t.bus_local_kg_co2e_per_passenger_km.value} kg/pkm`,
      factor_key: "bus_local_kg_co2e_per_passenger_km",
      source_id: t.bus_local_kg_co2e_per_passenger_km.source_id,
      extra: `DEFRA row ${t.bus_local_kg_co2e_per_passenger_km.defra_row_id}`,
    },
    {
      id: "rail",
      title: "Rail (national, per passenger-km)",
      kg: transportRail,
      formula: `${railKmYear.toFixed(0)} pkm/yr × ${t.rail_national_kg_co2e_per_passenger_km.value} kg/pkm`,
      factor_key: "rail_national_kg_co2e_per_passenger_km",
      source_id: t.rail_national_kg_co2e_per_passenger_km.source_id,
      extra: `DEFRA row ${t.rail_national_kg_co2e_per_passenger_km.defra_row_id}`,
    },
    {
      id: "flight_short",
      title: "Short-haul flights (count × assumed pkm × factor)",
      kg: flightsShort,
      formula: `${values.shortFlightsPerYear} × ${t.assumed_passenger_km_per_short_flight.value} pkm × ${t.flight_short_haul_kg_co2e_per_passenger_km_with_rf.value} kg/pkm`,
      factor_key: "flight_short_haul",
      source_id: t.flight_short_haul_kg_co2e_per_passenger_km_with_rf.source_id,
      extra: `DEFRA ${t.flight_short_haul_kg_co2e_per_passenger_km_with_rf.defra_row_id}; ${reg.assumed_flight_distance.name}`,
    },
    {
      id: "flight_long",
      title: "Long-haul flights (count × assumed pkm × factor)",
      kg: flightsLong,
      formula: `${values.longFlightsPerYear} × ${t.assumed_passenger_km_per_long_flight.value} pkm × ${t.flight_long_haul_kg_co2e_per_passenger_km_with_rf.value} kg/pkm`,
      factor_key: "flight_long_haul",
      source_id: t.flight_long_haul_kg_co2e_per_passenger_km_with_rf.source_id,
      extra: `DEFRA ${t.flight_long_haul_kg_co2e_per_passenger_km_with_rf.defra_row_id}; ${reg.assumed_flight_distance.name}`,
    },
    {
      id: "home",
      title: `Home electricity (${elec.label})`,
      kg: home,
      formula: `${values.homeKwhPerMonth} kWh/mo × 12 × ${electricityFactor} kg/kWh`,
      factor_key: "electricity_grid",
      source_id: elec.source_id,
      extra: [
        elec.raw_csv_g_per_kwh != null &&
          `EEA 2023: ${elec.raw_csv_g_per_kwh} g CO2e/kWh → ${electricityFactor} kg/kWh`,
        elec.defra_row_id && `DEFRA row ${elec.defra_row_id}`,
        reg[elec.source_id]?.detail,
      ]
        .filter(Boolean)
        .join(" · "),
    },
    {
      id: "food",
      title: "Food (annual tier)",
      kg: food,
      formula: `Diet “${values.diet}” → ${food} kg CO2e/yr (fixed bucket)`,
      factor_key: `diet_${values.diet}`,
      source_id: life.diet[values.diet].source_id,
      extra: reg.assumed_diet_annual.detail,
    },
    {
      id: "consumption",
      title: "Goods & services (annual tier)",
      kg: consumption,
      formula: `Consumption “${values.consumption}” → ${consumption} kg CO2e/yr (fixed bucket)`,
      factor_key: `consumption_${values.consumption}`,
      source_id: life.consumption[values.consumption].source_id,
      extra: reg.assumed_consumption_annual.detail,
    },
  ];

  const sourceIds = [...new Set(lines.map((l) => l.source_id))];

  return {
    totalKg,
    totalTons: totalKg / 1000,
    lines,
    electricityMeta: elec,
    sourceIds,
    transportSubtotalKg: transportTotal,
    homeKg: home,
    foodKg: food,
    consumptionKg: consumption,
  };
}

export function getCountryOptions(data) {
  const entries = Object.entries(data.electricity_kg_co2e_per_kwh).map(([key, v]) => ({
    key,
    label: v.label || key,
    source_id: v.source_id,
  }));

  const preferred = new Set(data.ui_country_options.map((o) => o.key));
  const preferredOrdered = data.ui_country_options
    .map((o) => {
      const e = data.electricity_kg_co2e_per_kwh[o.key];
      if (!e) return null;
      return { key: o.key, label: e.label || o.label };
    })
    .filter(Boolean);
  const rest = entries
    .filter((e) => !preferred.has(e.key))
    .sort((a, b) => a.label.localeCompare(b.label));

  return { preferredOrdered, rest };
}
