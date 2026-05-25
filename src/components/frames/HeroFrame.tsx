"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { SiteContent } from "@/lib/types";
import { SITE } from "@/lib/constants";
import { FrameLabel } from "@/components/ui/FrameLabel";

type HeroFrameProps = {
  content: SiteContent;
};

export function HeroFrame({ content }: HeroFrameProps) {
  const { hero } = content;

  return (
    <section
      id="hero"
      className="section-panel section-panel--hero flex flex-col justify-end pb-24 px-6 md:px-16 lg:px-24"
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 70% 30%, rgba(75,12,252,0.25), transparent 60%), radial-gradient(ellipse 50% 40% at 20% 80%, rgba(0,240,255,0.08), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl">
        <FrameLabel label={`${hero.frameLabel.replace("FRAME_", "")} · 2026`} />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mono-label text-indigo-accent mb-6"
        >
          ◈ {hero.tagline} ◈
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.1] tracking-tight max-w-4xl"
        >
          {hero.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-silver/85 max-w-2xl leading-relaxed"
        >
          {hero.subheadline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mono-label mt-10 text-muted animate-pulse"
        >
          {hero.scrollHint}
        </motion.p>
      </div>

      <div className="absolute bottom-24 right-6 md:right-16 lg:right-24 z-10 flex flex-col md:flex-row items-end md:items-center gap-6">
        <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden glow-border shrink-0">
          <Image
            src="/profile-placeholder.svg"
            alt={SITE.name}
            fill
            className="object-cover bg-[#1a1730]"
            priority
          />
        </div>

        <div className="text-right md:text-left">
          <span className="inline-block mono-label text-xs px-3 py-1 border border-cyan-accent/40 text-cyan-accent rounded mb-3">
            {hero.availability}
          </span>
          <p className="text-2xl md:text-3xl font-semibold text-white">
            {SITE.name}
          </p>
          <p className="mono-label text-silver/60 mt-1 text-xs">
            {hero.role} · {hero.location}
          </p>
        </div>
      </div>
    </section>
  );
}
