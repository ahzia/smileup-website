"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "smileup-theme";

function getStoredTheme() {
  if (typeof window === "undefined") return "light";
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    /* ignore */
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = getStoredTheme();
    document.documentElement.setAttribute("data-theme", t);
    const id = requestAnimationFrame(() => {
      setMounted(true);
      setTheme(t);
    });
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const onStorage = (e) => {
      if (
        e.key === STORAGE_KEY &&
        (e.newValue === "light" || e.newValue === "dark")
      ) {
        setTheme(e.newValue);
        document.documentElement.setAttribute("data-theme", e.newValue);
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
    document.documentElement.setAttribute("data-theme", next);
  };

  const label =
    !mounted || theme === "light"
      ? "Switch to dark mode"
      : "Switch to light mode";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={label}
      title={label}
    >
      <span className="theme-toggle__icon" aria-hidden>
        {!mounted || theme === "light" ? "🌙" : "☀️"}
      </span>
    </button>
  );
}
