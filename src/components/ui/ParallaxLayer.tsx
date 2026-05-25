"use client";

import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";
import { useMouseParallax } from "@/context/MouseParallaxContext";

type ParallaxLayerProps = {
  children: ReactNode;
  className?: string;
  mouseDepth?: number;
  scrollDepth?: number;
  speed?: number;
};

export function ParallaxLayer({
  children,
  className = "",
  mouseDepth = 16,
  scrollDepth = 55,
  speed = 1,
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { normalizedX, normalizedY } = useMouseParallax();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scrollY = useTransform(
    scrollYProgress,
    [0, 1],
    [scrollDepth * speed, -scrollDepth * speed]
  );

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 90, damping: 22 });
  const smoothY = useSpring(mouseY, { stiffness: 90, damping: 22 });

  useEffect(() => {
    mouseX.set(normalizedX * mouseDepth);
    mouseY.set(normalizedY * mouseDepth);
  }, [normalizedX, normalizedY, mouseDepth, mouseX, mouseY]);

  return (
    <motion.div ref={ref} className={className} style={{ y: scrollY }}>
      <motion.div style={{ x: smoothX, y: smoothY }}>{children}</motion.div>
    </motion.div>
  );
}
