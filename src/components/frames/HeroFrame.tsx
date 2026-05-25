"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import type { SiteContent } from "@/lib/types";
import { SITE } from "@/lib/constants";
import { FrameLabel } from "@/components/ui/FrameLabel";

type HeroFrameProps = {
  content: SiteContent;
};

export function HeroFrame({ content }: HeroFrameProps) {
  const { hero } = content;
  const { scrollY } = useScroll();
  const headlineY = useTransform(scrollY, [0, 400], [0, 120]);
  const headlineOpacity = useTransform(scrollY, [0, 350], [1, 0]);
  const profileScale = useTransform(scrollY, [0, 500], [1, 0.85]);

  return (
    <div className="relative flex flex-col justify-end pb-24 px-6 md:px-16 lg:px-24 min-h-[inherit]">
      <motion.div
        className="absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 70% 30%, rgba(139,92,246,0.35), transparent 60%), radial-gradient(ellipse 50% 40% at 20% 80%, rgba(232,121,249,0.15), transparent), radial-gradient(ellipse 30% 20% at 50% 100%, rgba(251,191,36,0.08), transparent)",
        }}
        aria-hidden="true"
      />

      <motion.div
        className="relative z-10 max-w-5xl"
        style={{ y: headlineY, opacity: headlineOpacity }}
      >
        <FrameLabel label={`${hero.frameLabel.replace("FRAME_", "")} · 2026`} />

        <motion.p
          initial={{ opacity: 0, y: 20, rotateX: 20 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mono-label text-magenta-accent mb-6"
          style={{ transformPerspective: 600 }}
        >
          ◈ {hero.tagline} ◈
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40, rotateX: 25, z: -80 }}
          animate={{ opacity: 1, y: 0, rotateX: 0, z: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.05] tracking-tight max-w-4xl"
          style={{ transformPerspective: 800, transformStyle: "preserve-3d" }}
        >
          <span className="bg-gradient-to-r from-white via-silver to-cyan-accent/80 bg-clip-text text-transparent">
            {hero.headline}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="mt-6 text-lg md:text-xl text-silver/85 max-w-2xl leading-relaxed"
        >
          {hero.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-10 flex items-center gap-3"
        >
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-cyan-accent text-lg"
          >
            ↓
          </motion.span>
          <p className="mono-label text-muted">{hero.scrollHint}</p>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-24 right-6 md:right-16 lg:right-24 z-10 flex flex-col md:flex-row items-end md:items-center gap-6"
        style={{ scale: profileScale, transformPerspective: 600 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ rotateY: 8, scale: 1.05 }}
          className="relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden glow-border shrink-0"
          style={{ transformStyle: "preserve-3d" }}
        >
          <Image
            src="/profile-placeholder.svg"
            alt={SITE.name}
            fill
            className="object-cover bg-bg-surface"
            priority
          />
          <div
            className="absolute inset-0 rounded-full"
            style={{
              boxShadow: "inset 0 0 30px rgba(139,92,246,0.4)",
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-right md:text-left"
        >
          <span className="inline-block mono-label text-xs px-3 py-1 border border-magenta-accent/50 text-cyan-accent rounded mb-3 glow-text-cyan">
            {hero.availability}
          </span>
          <p className="text-2xl md:text-3xl font-semibold text-white">
            {SITE.name}
          </p>
          <p className="mono-label text-silver/60 mt-1 text-xs">
            {hero.role} · {hero.location}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
