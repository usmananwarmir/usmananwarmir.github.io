"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { FLOATING_NODES } from "@/lib/constants";
import { useMouseParallax } from "@/context/MouseParallaxContext";

export function AquaBackground() {
  const { scrollYProgress } = useScroll();
  const { normalizedX, normalizedY } = useMouseParallax();

  const parallaxSlow = useTransform(scrollYProgress, [0, 1], ["0%", "-28%"]);
  const parallaxFast = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const rotateField = useTransform(scrollYProgress, [0, 1], [0, -6]);

  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(165deg, #143252 0%, #0c1929 45%, #0e2438 100%)",
        }}
      />

      <motion.div
        className="absolute -top-[20%] -left-[10%] w-[70vmax] h-[70vmax] rounded-full"
        animate={{
          x: normalizedX * 70,
          y: normalizedY * 50,
        }}
        transition={{ type: "spring", stiffness: 35, damping: 22 }}
        style={{
          background:
            "radial-gradient(circle, rgba(45,212,191,0.4) 0%, rgba(56,189,248,0.18) 45%, transparent 70%)",
          filter: "blur(70px)",
          opacity: 0.65,
        }}
      />

      <motion.div
        className="absolute top-[25%] -right-[15%] w-[55vmax] h-[55vmax] rounded-full"
        animate={{
          x: -normalizedX * 50,
        }}
        style={{
          y: parallaxSlow,
          background:
            "radial-gradient(circle, rgba(56,189,248,0.35) 0%, transparent 65%)",
          filter: "blur(55px)",
          opacity: 0.55,
        }}
      />

      <motion.div
        className="absolute bottom-[-5%] left-[15%] w-[48vmax] h-[48vmax] rounded-full"
        style={{
          y: parallaxFast,
          background:
            "radial-gradient(circle, rgba(20,184,166,0.3) 0%, transparent 70%)",
          filter: "blur(60px)",
          opacity: 0.5,
        }}
      />

      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{ y: parallaxSlow, rotateZ: rotateField }}
      >
        <div className="relative w-full max-w-6xl h-[130vh]">
          {FLOATING_NODES.map((node, i) => {
            const mouseOffsetX = normalizedX * (24 + i * 4);
            const mouseOffsetY = normalizedY * (18 + i * 3);
            return (
              <motion.div
                key={node.label}
                className="float-node absolute mono-label text-[0.65rem] md:text-xs px-3 py-2 rounded-full border border-aqua-accent/25 text-muted glass-chip"
                style={{
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                  translate: `calc(-50% + ${mouseOffsetX}px) calc(-50% + ${mouseOffsetY}px)`,
                  animationDelay: `${i * 0.5}s`,
                }}
                animate={{ opacity: [0.4, 0.75, 0.4] }}
                transition={{
                  duration: 5 + i * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="text-aqua-accent">◈</span> {node.label}
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(56,189,248,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56,189,248,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />
    </div>
  );
}
