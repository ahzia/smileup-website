"use client";

import { useEffect, useMemo, useState } from "react";

/**
 * Auto-advancing carousel for text slides with a large emoji “hero”.
 * Reusable for methodology, features, FAQs, etc.
 */
export default function ContentIconCarousel({
  items,
  intervalMs = 9000,
  ariaLabel = "Information slides",
  className = "",
  /** Unique prefix for aria ids when multiple carousels exist on the page */
  instanceId = "content-carousel",
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  const panelId = `${instanceId}-panel`;
  const progressPct = useMemo(
    () => (items.length ? ((index + 1) / items.length) * 100 : 0),
    [index, items.length],
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reduceMotion || paused || items.length < 2) return undefined;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [reduceMotion, paused, items.length, intervalMs]);

  const go = (delta) => {
    if (!items.length) return;
    setIndex((i) => (i + delta + items.length) % items.length);
  };

  if (!items.length) return null;

  const slide = items[index];

  return (
    <div
      className={`content-icon-carousel ${className}`.trim()}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      aria-live={reduceMotion ? "polite" : "off"}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false);
      }}
    >
      <div className="content-icon-carousel__progress" aria-hidden>
        <div
          className="content-icon-carousel__progress-bar"
          style={{ width: `${progressPct}%` }}
        />
      </div>

      <div className="content-icon-carousel__chips" role="tablist" aria-label="Jump to topic">
        {items.map((s, i) => (
          <button
            key={s.id}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-controls={panelId}
            id={`${instanceId}-tab-${s.id}`}
            className={`content-icon-carousel__chip ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          >
            <span className="content-icon-carousel__chip-emoji" aria-hidden>
              {s.emoji}
            </span>
            <span className="content-icon-carousel__chip-label">{s.chipLabel || s.title}</span>
          </button>
        ))}
      </div>

      <div className="content-icon-carousel__main">
        <div className="content-icon-carousel__visual" aria-hidden>
          <div
            key={slide.id}
            className="content-icon-carousel__emoji-bubble animate-method-slide"
          >
            {slide.emoji}
          </div>
        </div>

        <div
          className="content-icon-carousel__copy"
          role="tabpanel"
          id={panelId}
          aria-labelledby={`${instanceId}-tab-${slide.id}`}
        >
          <div key={slide.id} className="content-icon-carousel__panel-inner animate-method-slide">
            <h3 className="content-icon-carousel__title">{slide.title}</h3>
            {slide.tagline ? (
              <p className="content-icon-carousel__tagline muted small">{slide.tagline}</p>
            ) : null}
            <ul className="content-icon-carousel__bullets">
              {slide.bullets.map((raw, i) => (
                <li key={i} className="content-icon-carousel__bullet">
                  <BulletText text={raw} />
                </li>
              ))}
            </ul>
          </div>

          <div className="content-icon-carousel__controls">
            <button
              type="button"
              className="content-icon-carousel__arrow"
              onClick={() => go(-1)}
              aria-label="Previous slide"
            >
              ‹
            </button>
            <span className="content-icon-carousel__counter xsmall muted" aria-live="polite">
              {index + 1} / {items.length}
            </span>
            <button
              type="button"
              className="content-icon-carousel__arrow"
              onClick={() => go(1)}
              aria-label="Next slide"
            >
              ›
            </button>
          </div>

          <div className="content-icon-carousel__dots">
            {items.map((s, i) => (
              <button
                key={s.id}
                type="button"
                className={`content-icon-carousel__dot ${i === index ? "active" : ""}`}
                aria-label={`Show slide ${i + 1}: ${s.title}`}
                aria-current={i === index ? "true" : undefined}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>

          <p className="content-icon-carousel__hint xsmall muted">
            {reduceMotion
              ? "Use the topic chips or arrows to move between slides."
              : "Slides advance automatically. Hover here to pause."}
          </p>
        </div>
      </div>
    </div>
  );
}

/** Renders bullet string; `**text**` becomes <strong> */
function BulletText({ text }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}
