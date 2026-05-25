"use client";

import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";
import { useMouseParallax } from "@/context/MouseParallaxContext";

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
  const { normalizedX, normalizedY } = useMouseParallax();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [10, 0, 0, -8]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -90]);
  const z = useTransform(scrollYProgress, [0, 0.5, 1], [-80, 0, -50]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [0.5, 1, 1, 0.55]
  );
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.96]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  useEffect(() => {
    mouseX.set(normalizedX * 22);
    mouseY.set(normalizedY * 16);
  }, [normalizedX, normalizedY, mouseX, mouseY]);

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
        x: smoothMouseX,
        transformPerspective: 1400,
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div style={{ y: smoothMouseY }}>{children}</motion.div>
    </motion.section>
  );
}
