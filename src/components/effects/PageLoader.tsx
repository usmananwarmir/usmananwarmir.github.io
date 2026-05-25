"use client";

import { useEffect, useState, type CSSProperties } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useMotionValue,
  useTransform,
  useMotionValueEvent,
  animate,
} from "framer-motion";
import { SITE, FLOATING_NODES } from "@/lib/constants";
import type { Locale } from "@/lib/types";

const COPY = {
  en: { status: "Initializing systems", boot: "SYS.BOOT", ready: "Systems online" },
  de: { status: "Systeme werden gestartet", boot: "SYS.START", ready: "Systeme bereit" },
} as const;

const MIN_DISPLAY_MS = 2400;
const MAX_WAIT_MS = 4500;

type PageLoaderProps = {
  locale: Locale;
  onComplete: () => void;
};

export function PageLoader({ locale, onComplete }: PageLoaderProps) {
  const copy = COPY[locale];
  const reducedMotion = useReducedMotion();
  const [phase, setPhase] = useState<"loading" | "ready" | "exit">("loading");
  const [progressDone, setProgressDone] = useState(false);
  const [minTimeDone, setMinTimeDone] = useState(false);
  const [displayPct, setDisplayPct] = useState(0);
  const progress = useMotionValue(0);
  const progressWidth = useTransform(progress, (v) => `${v}%`);

  useMotionValueEvent(progress, "change", (v) => setDisplayPct(Math.round(v)));

  useEffect(() => {
    document.documentElement.classList.add("loader-active");
    return () => document.documentElement.classList.remove("loader-active");
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      onComplete();
      return;
    }

    const mountTime = performance.now();
    let pageReady = false;

    const controls = animate(progress, 100, {
      duration: 2.1,
      ease: [0.22, 0.61, 0.36, 1],
      onComplete: () => {
        setProgressDone(true);
        setPhase("ready");
      },
    });

    const markPageReady = () => {
      if (pageReady) return;
      pageReady = true;
      const elapsed = performance.now() - mountTime;
      const remaining = Math.max(0, MIN_DISPLAY_MS - elapsed);
      window.setTimeout(() => setMinTimeDone(true), remaining);
    };

    if (document.readyState === "complete") {
      markPageReady();
    } else {
      window.addEventListener("load", markPageReady, { once: true });
    }
    const cap = window.setTimeout(markPageReady, MAX_WAIT_MS);

    return () => {
      controls.stop();
      window.removeEventListener("load", markPageReady);
      window.clearTimeout(cap);
    };
  }, [progress, reducedMotion, onComplete]);

  useEffect(() => {
    if (!progressDone || !minTimeDone || phase === "exit") return;
    setPhase("exit");
  }, [progressDone, minTimeDone, phase]);

  useEffect(() => {
    if (phase !== "exit") return;
    const t = window.setTimeout(onComplete, 720);
    return () => window.clearTimeout(t);
  }, [phase, onComplete]);

  if (reducedMotion) return null;

  return (
    <motion.div
      className="page-loader"
      role="status"
      aria-live="polite"
      aria-label={copy.status}
      initial={{ opacity: 1 }}
      animate={
        phase === "exit"
          ? { opacity: 0, scale: 1.04, filter: "blur(14px)" }
          : { opacity: 1, scale: 1, filter: "blur(0px)" }
      }
      transition={{ duration: 0.72, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="page-loader__bg" aria-hidden="true" />
      <div className="page-loader__grid" aria-hidden="true" />
      <div className="page-loader__scan" aria-hidden="true" />

      <motion.div
        className="page-loader__flare"
        aria-hidden="true"
        animate={{ opacity: [0.35, 0.65, 0.35], scale: [1, 1.08, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="page-loader__orbit-field" aria-hidden="true">
        {FLOATING_NODES.slice(0, 4).map((node, i) => (
          <motion.span
            key={node.label}
            className="page-loader__orbit-tag mono-label"
            style={
              {
                "--orbit-delay": `${i * 0.6}s`,
                "--orbit-radius": `${118 + i * 22}px`,
              } as CSSProperties
            }
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0, 0.85, 0.85], scale: 1 }}
            transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
          >
            {node.label}
          </motion.span>
        ))}
      </div>

      <div className="page-loader__core">
        <div className="page-loader__rings" aria-hidden="true">
          <span className="page-loader__ring page-loader__ring--outer" />
          <span className="page-loader__ring page-loader__ring--mid" />
          <span className="page-loader__ring page-loader__ring--inner" />
          <span className="page-loader__ring-dots" />
        </div>

        <motion.div
          className="page-loader__monogram"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          UA
        </motion.div>
      </div>

      <div className="page-loader__header">
        <span className="mono-label text-[var(--aqua)]">{copy.boot}</span>
        <span className="mono-label text-[var(--cyan)]">{displayPct}%</span>
      </div>

      <div className="page-loader__footer">
        <motion.h2
          className="page-loader__name"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
        >
          {SITE.name.split(" ").map((word, wi) => (
            <span key={word} className="page-loader__name-word">
              {word.split("").map((char, ci) => (
                <motion.span
                  key={`${wi}-${ci}`}
                  className="page-loader__name-char"
                  initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    delay: 0.35 + (wi * 5 + ci) * 0.04,
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h2>

        <p className="mono-label text-[var(--muted)] mt-3">{SITE.role}</p>

        <div className="page-loader__progress-wrap">
          <div className="page-loader__progress-track">
            <motion.div
              className="page-loader__progress-fill"
              style={{ width: progressWidth }}
            />
            <motion.div
              className="page-loader__progress-glow"
              style={{ left: progressWidth }}
            />
          </div>
          <AnimatePresence mode="wait">
            {phase === "ready" || phase === "exit" ? (
              <motion.span
                key="ready"
                className="mono-label text-[var(--aqua)] page-loader__status"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
              >
                {copy.ready}
              </motion.span>
            ) : (
              <motion.span
                key="loading"
                className="mono-label text-[var(--muted)] page-loader__status"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {copy.status}
                <span className="page-loader__dots" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </span>
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

type PageLoaderGateProps = {
  locale: Locale;
  children: React.ReactNode;
};

export function PageLoaderGate({ locale, children }: PageLoaderGateProps) {
  const reducedMotion = useReducedMotion();
  const [loading, setLoading] = useState(!reducedMotion);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <PageLoader
            key="page-loader"
            locale={locale}
            onComplete={() => setLoading(false)}
          />
        )}
      </AnimatePresence>
      <motion.div
        initial={false}
        animate={{
          opacity: loading ? 0 : 1,
        }}
        transition={{ duration: 0.5, delay: loading ? 0 : 0.08 }}
        aria-hidden={loading}
      >
        {children}
      </motion.div>
    </>
  );
}
