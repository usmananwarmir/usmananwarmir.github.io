"use client";

import { useEffect, useId, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { THEME_OPTIONS } from "@/lib/themes";
import type { Locale } from "@/lib/types";
import type { ThemeId } from "@/lib/themes";

type ThemeSelectorProps = {
  locale: Locale;
};

export function ThemeSelector({ locale }: ThemeSelectorProps) {
  const { themeId, setThemeId } = useTheme();
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const rootRef = useRef<HTMLDivElement>(null);

  const active = THEME_OPTIONS.find((t) => t.id === themeId) ?? THEME_OPTIONS[0];
  const pickerLabel = locale === "de" ? "Farbthema" : "Color theme";

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const selectTheme = (id: ThemeId) => {
    setThemeId(id);
    setOpen(false);
  };

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls={panelId}
        aria-label={pickerLabel}
        data-cursor="THEME"
        className="theme-selector-trigger mono-label text-xs flex items-center gap-2 border border-aqua-accent/35 px-2.5 py-1.5 rounded-full hover:border-cyan-accent transition-colors glass-chip"
      >
        <span
          className="theme-selector-swatch"
          style={{ background: active.preview }}
          aria-hidden="true"
        />
        <span className="hidden sm:inline text-silver/80">
          {active.label[locale]}
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id={panelId}
            role="listbox"
            aria-label={pickerLabel}
            initial={{ opacity: 0, y: -6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="theme-selector-panel absolute right-0 top-full mt-2 z-50 min-w-[10.5rem] rounded-xl border border-aqua-accent/25 glass-chip p-2 shadow-lg"
          >
            {THEME_OPTIONS.map((theme) => {
              const selected = theme.id === themeId;
              return (
                <button
                  key={theme.id}
                  type="button"
                  role="option"
                  aria-selected={selected}
                  onClick={() => selectTheme(theme.id)}
                  data-cursor={theme.label.en.toUpperCase()}
                  className={`theme-selector-option w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    selected
                      ? "bg-aqua-accent/15 text-aqua-accent"
                      : "text-silver/85 hover:bg-bg-elevated/80 hover:text-cyan-accent"
                  }`}
                >
                  <span
                    className="theme-selector-swatch shrink-0"
                    style={{ background: theme.preview }}
                    aria-hidden="true"
                  />
                  <span className="mono-label text-[0.65rem]">
                    {theme.label[locale]}
                  </span>
                  {selected && (
                    <span className="ml-auto text-aqua-accent text-xs" aria-hidden="true">
                      ✓
                    </span>
                  )}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
