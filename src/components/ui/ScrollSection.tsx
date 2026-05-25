"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

type ScrollSectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
  variant?: "hero" | "content";
};

export function ScrollSection({
  id,
  children,
  className = "",
  variant = "content",
}: ScrollSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [14, 0, 0, -12]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [80, 0, -60]);
  const z = useTransform(scrollYProgress, [0, 0.5, 1], [-100, 0, -60]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.88, 1],
    [0.35, 1, 1, 0.4]
  );
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.94]);
  const blur = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [6, 0, 0, 4]
  );
  const filter = useTransform(blur, (v) => `blur(${v}px)`);

  const baseClass =
    variant === "hero"
      ? "section-panel section-panel--hero"
      : "section-panel section-panel--content";

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`scroll-3d-panel ${baseClass} ${className}`}
      style={{
        rotateX,
        y,
        z,
        opacity,
        scale,
        filter,
        transformPerspective: 1200,
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </motion.section>
  );
}
