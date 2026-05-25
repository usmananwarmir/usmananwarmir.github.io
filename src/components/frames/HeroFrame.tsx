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
  const headlineY = useTransform(scrollY, [0, 500], [0, 160]);
  const headlineOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const profileY = useTransform(scrollY, [0, 600], [0, 100]);
  const bgY = useTransform(scrollY, [0, 800], [0, 200]);

  return (
    <div className="relative flex flex-col justify-end pb-24 px-6 md:px-16 lg:px-24 min-h-[inherit] overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-70"
        style={{
          y: bgY,
          background:
            "radial-gradient(ellipse 90% 70% at 65% 25%, rgba(45,212,191,0.2), transparent 55%), radial-gradient(ellipse 60% 50% at 15% 75%, rgba(56,189,248,0.15), transparent)",
        }}
        aria-hidden="true"
      />

      <ParallaxLayer mouseDepth={20} scrollDepth={30} speed={0.6}>
        <motion.div
          className="relative z-10 max-w-5xl"
          style={{ y: headlineY, opacity: headlineOpacity }}
        >
          <FrameLabel label={`${hero.frameLabel.replace("FRAME_", "")} · 2026`} />

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mono-label text-aqua-accent mb-6"
          >
            ◈ {hero.tagline} ◈
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl lg:text-8xl font-semibold leading-[1.02] tracking-tight max-w-5xl"
          >
            <span className="bg-gradient-to-br from-white via-silver to-cyan-accent bg-clip-text text-transparent">
              {hero.headline}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-8 text-lg md:text-xl text-silver/90 max-w-2xl leading-relaxed"
          >
            {hero.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
            className="mt-12 flex items-center gap-3"
          >
            <motion.span
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              className="text-aqua-accent text-xl"
            >
              ↓
            </motion.span>
            <p className="mono-label text-muted">{hero.scrollHint}</p>
          </motion.div>
        </motion.div>
      </ParallaxLayer>

      <ParallaxLayer
        mouseDepth={28}
        scrollDepth={45}
        speed={1.2}
        className="absolute bottom-24 right-6 md:right-16 lg:right-24 z-10"
      >
        <motion.div
          className="flex flex-col md:flex-row items-end md:items-center gap-6"
          style={{ y: profileY }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.45 }}
            whileHover={{ scale: 1.06, rotateY: 6 }}
            className="relative w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden glow-border shrink-0"
            data-cursor="PROFILE"
          >
            <Image
              src="/profile-placeholder.svg"
              alt={SITE.name}
              fill
              className="object-cover bg-bg-elevated"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.55 }}
            className="text-right md:text-left"
          >
            <span className="inline-block mono-label text-xs px-3 py-1.5 rounded-full border border-aqua-accent/40 text-aqua-accent mb-3 glass-chip">
              {hero.availability}
            </span>
            <p className="text-2xl md:text-4xl font-semibold text-white tracking-tight">
              {SITE.name}
            </p>
            <p className="mono-label text-muted mt-2 text-xs">
              {hero.role} · {hero.location}
            </p>
          </motion.div>
        </motion.div>
      </ParallaxLayer>
    </div>
  );
}
