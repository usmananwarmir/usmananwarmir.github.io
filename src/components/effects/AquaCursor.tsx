"use client";

import { motion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { useMouseParallax } from "@/context/MouseParallaxContext";

export function AquaCursor() {
  const { mouseX, mouseY } = useMouseParallax();
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [hoverText, setHoverText] = useState<string | null>(null);
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);

  const ringX = useSpring(mouseX, { stiffness: 120, damping: 18, mass: 0.4 });
  const ringY = useSpring(mouseY, { stiffness: 120, damping: 18, mass: 0.4 });
  const dotX = useSpring(mouseX, { stiffness: 280, damping: 22, mass: 0.2 });
  const dotY = useSpring(mouseY, { stiffness: 280, damping: 22, mass: 0.2 });
  const labelX = useSpring(mouseX, { stiffness: 90, damping: 22 });
  const labelY = useSpring(mouseY, { stiffness: 90, damping: 22 });

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!finePointer) return;

    setVisible(true);
    document.documentElement.classList.add("custom-cursor-active");

    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);
    const onClick = (e: MouseEvent) => {
      const id = Date.now();
      setTrail((t) => [...t.slice(-5), { x: e.clientX, y: e.clientY, id }]);
      setTimeout(() => setTrail((t) => t.filter((p) => p.id !== id)), 650);
    };
    const onOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(
        "a, button, [data-cursor]"
      );
      if (target instanceof HTMLElement) {
        setHoverText(
          target.getAttribute("data-cursor") ||
            (target.tagName === "A" ? "OPEN" : "VIEW")
        );
      } else {
        setHoverText(null);
      }
    };

    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("click", onClick);
    document.addEventListener("mouseover", onOver);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("click", onClick);
      document.removeEventListener("mouseover", onOver);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      {trail.map((p) => (
        <motion.span
          key={p.id}
          className="cursor-ripple"
          initial={{ scale: 0.4, opacity: 0.8 }}
          animate={{ scale: 2.5, opacity: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          style={{ left: p.x, top: p.y }}
          aria-hidden="true"
        />
      ))}

      <motion.div
        className="cursor-ring"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          scale: clicking ? 0.7 : 1,
        }}
        aria-hidden="true"
      />

      <motion.div
        className="cursor-dot"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          scale: clicking ? 1.8 : 1,
        }}
        aria-hidden="true"
      />

      {hoverText && (
        <motion.span
          className="cursor-label mono-label"
          style={{
            x: labelX,
            y: labelY,
            translateX: 28,
            translateY: -28,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          aria-hidden="true"
        >
          {hoverText}
        </motion.span>
      )}
    </>
  );
}
