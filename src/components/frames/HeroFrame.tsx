"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import type { SiteContent } from "@/lib/types";
import { SITE } from "@/lib/constants";
import { FrameLabel } from "@/components/ui/FrameLabel";
import { ParallaxLayer } from "@/components/ui/ParallaxLayer";

type HeroFrameProps = {
  content: SiteContent;
};

export function HeroFrame({ content }: HeroFrameProps) {
  const { hero } = content;
  const { scrollY } = useScroll();
  const contentY = useTransform(scrollY, [0, 500], [0, 80]);
  const photoY = useTransform(scrollY, [0, 600], [0, 50]);
  const photoScale = useTransform(scrollY, [0, 400], [1, 0.92]);
  const bgY = useTransform(scrollY, [0, 800], [0, 120]);

  return (
    <div className="relative min-h-[inherit] overflow-hidden px-6 md:px-12 lg:px-20 pt-28 pb-16 md:pt-32 md:pb-20">
      <motion.div
        className="absolute inset-0 opacity-80"
        style={{
          y: bgY,
          background:
            "radial-gradient(ellipse 55% 60% at 75% 40%, rgba(45,212,191,0.22), transparent 60%), radial-gradient(ellipse 50% 50% at 20% 80%, rgba(56,189,248,0.12), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_minmax(280px,420px)] gap-10 lg:gap-6 xl:gap-12 items-center min-h-[calc(100dvh-8rem)]">
        {/* Copy — left */}
        <ParallaxLayer mouseDepth={16} scrollDepth={25} speed={0.5}>
          <motion.div style={{ y: contentY }}>
            <FrameLabel
              label={`${hero.frameLabel.replace("FRAME_", "")} · 2026`}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mono-label text-aqua-accent mb-5"
            >
              ◈ {hero.tagline} ◈
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-semibold leading-[1.05] tracking-tight"
            >
              <span className="bg-gradient-to-br from-white via-silver to-cyan-accent bg-clip-text text-transparent">
                {hero.headline}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.25 }}
              className="mt-6 text-base md:text-lg text-silver/90 max-w-xl leading-relaxed"
            >
              {hero.subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <span className="mono-label text-xs px-4 py-2 rounded-full border border-aqua-accent/40 text-aqua-accent glass-chip">
                {hero.availability}
              </span>
              <a
                href={SITE.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="LINKEDIN"
                className="mono-label text-xs px-5 py-2 rounded-full border border-cyan-accent/50 text-white hover:bg-aqua-accent/15 hover:border-aqua-accent transition-colors"
              >
                LinkedIn →
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="mt-10 flex items-center gap-3"
            >
              <motion.span
                animate={{ y: [0, 6, 0] }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-aqua-accent text-lg"
              >
                ↓
              </motion.span>
              <p className="mono-label text-muted">{hero.scrollHint}</p>
            </motion.div>
          </motion.div>
        </ParallaxLayer>

        {/* Photo — right, prominent */}
        <ParallaxLayer
          mouseDepth={24}
          scrollDepth={40}
          speed={1.1}
          className="order-first lg:order-last flex justify-center lg:justify-end"
        >
          <motion.div
            className="relative w-full max-w-[320px] sm:max-w-[360px] lg:max-w-none lg:w-full"
            style={{ y: photoY, scale: photoScale }}
            data-cursor="PROFILE"
          >
            {/* Glow pedestal */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] h-[40%] rounded-full blur-3xl opacity-60"
              style={{
                background:
                  "radial-gradient(ellipse, rgba(45,212,191,0.45) 0%, rgba(56,189,248,0.15) 50%, transparent 70%)",
              }}
              aria-hidden="true"
            />

            {/* Frame ring */}
            <div
              className="absolute inset-0 rounded-[2rem] border border-aqua-accent/25 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, rgba(45,212,191,0.08) 0%, transparent 40%)",
                boxShadow:
                  "0 0 60px rgba(45, 212, 191, 0.12), inset 0 1px 0 rgba(255,255,255,0.06)",
              }}
              aria-hidden="true"
            />

            <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] min-h-[340px] sm:min-h-[400px] lg:min-h-[480px] flex items-end justify-center overflow-visible">
              <Image
                src="/profile.png"
                alt={SITE.name}
                width={420}
                height={520}
                priority
                className="relative z-10 h-[108%] w-auto max-w-[115%] object-contain object-bottom profile-hero-image"
              />
            </div>

            {/* Name card — overlaps bottom of photo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[92%] z-20 glass-chip rounded-2xl px-5 py-4 text-center border border-aqua-accent/30"
              style={{
                boxShadow: "0 16px 48px rgba(0,0,0,0.35)",
              }}
            >
              <a
                href={SITE.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="LINKEDIN"
                className="text-xl sm:text-2xl font-semibold text-white tracking-tight hover:text-aqua-accent transition-colors"
              >
                {SITE.name}
              </a>
              <p className="mono-label text-muted mt-1.5 text-[0.65rem] leading-relaxed">
                {hero.role}
              </p>
              <p className="mono-label text-cyan-accent/80 mt-0.5 text-[0.6rem]">
                {hero.location}
              </p>
            </motion.div>
          </motion.div>
        </ParallaxLayer>
      </div>
    </div>
  );
}
