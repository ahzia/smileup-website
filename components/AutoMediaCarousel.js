"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import PhoneFrame from "./PhoneFrame";

/**
 * Auto-advancing carousel: image (inside optional phone frame) + title + body.
 * Pauses on hover/focus; respects prefers-reduced-motion.
 */
export default function AutoMediaCarousel({
  items,
  intervalMs = 7000,
  ariaLabel = "Featured slides",
  usePhoneFrame = true,
  className = "",
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

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

  if (!items.length) return null;

  const slide = items[index];

  const imageEl = (
    <Image
      src={slide.imageSrc}
      alt={slide.imageAlt}
      fill
      className="auto-carousel__img"
      sizes="(max-width: 600px) 72vw, 280px"
      priority={index === 0}
      draggable={false}
    />
  );

  return (
    <div
      className={`auto-carousel ${className}`.trim()}
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
      <div className="auto-carousel__layout">
        <div className="auto-carousel__visual">
          {usePhoneFrame ? <PhoneFrame>{imageEl}</PhoneFrame> : (
            <div className="auto-carousel__media-flat">{imageEl}</div>
          )}
        </div>
        <div
          className="auto-carousel__copy"
          role="tabpanel"
          id="auto-carousel-panel"
          aria-labelledby={`carousel-tab-${slide.id}`}
        >
          <h3 className="auto-carousel__title">{slide.title}</h3>
          <p className="auto-carousel__body muted">{slide.body}</p>
          <div className="auto-carousel__dots" role="tablist" aria-label="Choose slide">
            {items.map((s, i) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-controls="auto-carousel-panel"
                id={`carousel-tab-${s.id}`}
                className={`auto-carousel__dot ${i === index ? "active" : ""}`}
                onClick={() => setIndex(i)}
              >
                <span className="hp">{s.title}</span>
              </button>
            ))}
          </div>
          <p className="auto-carousel__hint xsmall muted">
            {reduceMotion
              ? "Use the dots to switch slides."
              : "Slides advance on their own. Hover or focus here to pause."}
          </p>
        </div>
      </div>
    </div>
  );
}
