"use client";

import { useMemo, useState } from "react";
import calculatorFactors from "../lib/calculatorFactors";
import { computeFootprint, getCountryOptions } from "../lib/footprintCompute.js";

const steps = [
  { key: "country", label: "Where do you live?", subtitle: "Grid electricity intensity", type: "select" },
  { key: "carKmPerWeek", label: "Car each week", subtitle: "Medium petrol car (km)", type: "range", min: 0, max: 700, step: 10, suffix: "km" },
  { key: "busKmPerWeek", label: "Bus each week", subtitle: "Local bus passenger travel", type: "range", min: 0, max: 500, step: 10, suffix: "km" },
  { key: "railKmPerWeek", label: "Train / metro each week", subtitle: "Rail passenger travel", type: "range", min: 0, max: 500, step: 10, suffix: "km" },
  { key: "shortFlightsPerYear", label: "Short flights per year", subtitle: "Regional / Europe-style", type: "range", min: 0, max: 30, step: 1, suffix: "trips" },
  { key: "longFlightsPerYear", label: "Long flights per year", subtitle: "Intercontinental-style", type: "range", min: 0, max: 12, step: 1, suffix: "trips" },
  { key: "homeKwhPerMonth", label: "Home electricity", subtitle: "Typical monthly use (kWh)", type: "range", min: 100, max: 1500, step: 25, suffix: "kWh / month" },
  { key: "diet", label: "Diet style", subtitle: "Annual food-system estimate", type: "select" },
  { key: "consumption", label: "Shopping & stuff", subtitle: "Goods & services tier", type: "select" },
];

const initialValues = {
  country: "eu27",
  carKmPerWeek: 80,
  busKmPerWeek: 20,
  railKmPerWeek: 15,
  shortFlightsPerYear: 2,
  longFlightsPerYear: 0,
  homeKwhPerMonth: 350,
  diet: "average",
  consumption: "medium",
};

export default function CalculatorPreview({ detailed = false }) {
  const data = calculatorFactors;
  const { preferredOrdered, rest } = useMemo(() => getCountryOptions(data), [data]);

  const [values, setValues] = useState(initialValues);
  const [stepIndex, setStepIndex] = useState(0);
  const [showBreakdown, setShowBreakdown] = useState(false);

  const current = steps[stepIndex];
  const isLastStep = stepIndex === steps.length - 1;

  const result = useMemo(() => computeFootprint(values, data), [values, data]);

  const updateValue = (value) => {
    const nextValue = current.type === "range" ? Number(value) : value;
    setValues((prev) => ({ ...prev, [current.key]: nextValue }));
    setShowBreakdown(false);
  };

  const goNext = () => {
    if (isLastStep) {
      setShowBreakdown(true);
      return;
    }
    setStepIndex((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const goPrev = () => {
    setStepIndex((prev) => Math.max(prev - 1, 0));
    setShowBreakdown(false);
  };

  const progressPct = ((stepIndex + 1) / steps.length) * 100;

  const sourceById = (id) => data.sources_registry[id];

  return (
    <div className="calc-v2">
      <div className="calc-v2-header">
        <p className="kicker">Live estimate</p>
        <h3 className="calc-v2-title">
          {detailed ? "Your footprint" : "Quick footprint"}
        </h3>
        <p className="muted calc-v2-lead">
          Factors load from <code className="calc-code">smileup-calculator-factors.v1.json</code> — official where cited, labelled otherwise.
        </p>
      </div>

      <div className="calc-v2-progress-wrap" aria-hidden>
        <div className="calc-v2-progress-bar" style={{ width: `${progressPct}%` }} />
      </div>
      <div className="calc-v2-dots" role="tablist" aria-label="Calculator steps">
        {steps.map((s, i) => (
          <button
            key={s.key}
            type="button"
            className={`calc-v2-dot ${i === stepIndex ? "active" : ""} ${i < stepIndex ? "done" : ""}`}
            aria-label={`Step ${i + 1}: ${s.label}`}
            onClick={() => {
              setStepIndex(i);
              setShowBreakdown(false);
            }}
          />
        ))}
      </div>

      <div className="calc-v2-card">
        <p className="calc-v2-step-label">
          Step {stepIndex + 1} of {steps.length}
        </p>
        <h4 className="calc-v2-question">{current.label}</h4>
        <p className="muted calc-v2-sub">{current.subtitle}</p>

        {current.type === "range" ? (
          <div className="calc-v2-range-block">
            <div className="calc-v2-big-value">
              {values[current.key]}
              <span className="calc-v2-big-suffix">{current.suffix}</span>
            </div>
            <input
              className="calc-v2-slider"
              type="range"
              min={current.min}
              max={current.max}
              step={current.step}
              value={values[current.key]}
              onChange={(e) => updateValue(e.target.value)}
            />
          </div>
        ) : null}

        {current.key === "country" ? (
          <select
            className="calc-v2-select"
            value={values.country}
            onChange={(e) => updateValue(e.target.value)}
          >
            <optgroup label="Common">
              {preferredOrdered.map((o) => (
                <option key={o.key} value={o.key}>
                  {o.label}
                </option>
              ))}
            </optgroup>
            {rest.length > 0 ? (
              <optgroup label="All countries (EEA 2023 grid)">
                {rest.map((o) => (
                  <option key={o.key} value={o.key}>
                    {o.label}
                  </option>
                ))}
              </optgroup>
            ) : null}
          </select>
        ) : null}

        {current.key === "diet" ? (
          <div className="calc-v2-chips">
            {[
              { v: "vegan", emoji: "🌿", t: "Vegan" },
              { v: "vegetarian", emoji: "🥗", t: "Vegetarian" },
              { v: "average", emoji: "⚖️", t: "Mixed" },
              { v: "meat_heavy", emoji: "🍖", t: "Meat-heavy" },
            ].map((opt) => (
              <button
                key={opt.v}
                type="button"
                className={`calc-v2-chip ${values.diet === opt.v ? "selected" : ""}`}
                onClick={() => {
                  setValues((prev) => ({ ...prev, diet: opt.v }));
                  setShowBreakdown(false);
                }}
              >
                <span className="calc-v2-chip-emoji">{opt.emoji}</span>
                {opt.t}
              </button>
            ))}
          </div>
        ) : null}

        {current.key === "consumption" ? (
          <div className="calc-v2-chips calc-v2-chips-3">
            {[
              { v: "low", t: "Low" },
              { v: "medium", t: "Medium" },
              { v: "high", t: "High" },
            ].map((opt) => (
              <button
                key={opt.v}
                type="button"
                className={`calc-v2-chip ${values.consumption === opt.v ? "selected" : ""}`}
                onClick={() => {
                  setValues((prev) => ({ ...prev, consumption: opt.v }));
                  setShowBreakdown(false);
                }}
              >
                {opt.t}
              </button>
            ))}
          </div>
        ) : null}

        <div className="calc-v2-actions">
          <button type="button" className="btn btn-ghost" onClick={goPrev} disabled={stepIndex === 0}>
            Back
          </button>
          <button type="button" className="btn btn-primary" onClick={goNext}>
            {isLastStep ? "Calculate & show sources" : "Continue"}
          </button>
        </div>
      </div>

      <div className={`calc-v2-summary ${showBreakdown ? "calc-v2-summary--open" : ""}`}>
        <div className="calc-v2-total-row">
          <div>
            <p className="muted small">Estimated annual total</p>
            <p className="calc-v2-total">{result.totalTons.toFixed(2)}</p>
            <p className="calc-v2-total-unit">tonnes CO₂e</p>
          </div>
          <div className="calc-v2-mini-bars">
            {[
              { label: "Transport", slug: "transport", kg: result.transportSubtotalKg },
              { label: "Home", slug: "home", kg: result.homeKg },
              { label: "Food", slug: "food", kg: result.foodKg },
              { label: "Stuff", slug: "stuff", kg: result.consumptionKg },
            ].map((row) => (
              <div key={row.label} className="calc-v2-mini-row">
                <span>{row.label}</span>
                <div className="calc-v2-mini-track">
                  <div
                    className={`calc-v2-mini-fill calc-v2-mini-fill--${row.slug}`}
                    style={{
                      width: `${Math.min(100, (row.kg / result.totalKg) * 100)}%`,
                    }}
                  />
                </div>
                <span className="calc-v2-mini-val">{(row.kg / 1000).toFixed(2)} t</span>
              </div>
            ))}
          </div>
        </div>

        {showBreakdown ? (
          <div className="calc-v2-sources animate-in">
            <h5 className="calc-v2-sources-title">How we calculated this</h5>
            <p className="muted xsmall">{data.disclaimer}</p>
            <ul className="calc-v2-line-list">
              {result.lines.map((line) => {
                const src = sourceById(line.source_id);
                return (
                  <li key={line.id} className="calc-v2-line-item">
                    <div className="calc-v2-line-head">
                      <strong>{line.title}</strong>
                      <span className="calc-v2-line-kg">{(line.kg / 1000).toFixed(3)} t</span>
                    </div>
                    <p className="calc-v2-formula">{line.formula}</p>
                    {line.extra ? <p className="calc-v2-extra">{line.extra}</p> : null}
                    <div className="calc-v2-source-pill">
                      <span className={`calc-v2-src-type calc-v2-src-type--${src?.type || "assumed"}`}>
                        {src?.type === "official" ? "Official" : "Assumed / proxy"}
                      </span>
                      <span>{src?.name || line.source_id}</span>
                      {src?.url ? (
                        <a href={src.url} target="_blank" rel="noreferrer" className="calc-v2-src-link">
                          ↗
                        </a>
                      ) : null}
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="calc-v2-registry">
              <h6>Sources used in this run</h6>
              <ul>
                {result.sourceIds.map((id) => {
                  const s = sourceById(id);
                  return (
                    <li key={id}>
                      <strong>{s?.name || id}</strong>
                      {s?.type === "assumed" && s?.detail ? (
                        <span className="muted xsmall"> — {s.detail}</span>
                      ) : null}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        ) : (
          <p className="muted small calc-v2-hint">
            Complete the steps and tap <strong>Calculate & show sources</strong> for formulas and citations.
          </p>
        )}
      </div>
    </div>
  );
}
