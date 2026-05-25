"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { useMotionValue, type MotionValue } from "framer-motion";

type MouseParallaxContextValue = {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  normalizedX: number;
  normalizedY: number;
};

const MouseParallaxContext = createContext<MouseParallaxContextValue | null>(
  null
);

export function MouseParallaxProvider({ children }: { children: ReactNode }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [normalizedX, setNormalizedX] = useState(0);
  const [normalizedY, setNormalizedY] = useState(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setNormalizedX(nx);
      setNormalizedY(ny);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  return (
    <MouseParallaxContext.Provider
      value={{ mouseX, mouseY, normalizedX, normalizedY }}
    >
      {children}
    </MouseParallaxContext.Provider>
  );
}

export function useMouseParallax() {
  const ctx = useContext(MouseParallaxContext);
  if (!ctx) {
    throw new Error("useMouseParallax must be used within MouseParallaxProvider");
  }
  return ctx;
}
