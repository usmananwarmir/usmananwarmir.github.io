"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { FLOATING_NODES } from "@/lib/constants";

export function CinematicBackground() {
  const { scrollYProgress } = useScroll();

  const fieldRotateX = useTransform(scrollYProgress, [0, 1], [2, -18]);
  const fieldRotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-6, 0, 14]);
  const fieldY = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);
  const fieldScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.08, 0.95]);

  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-bg-deep" />

      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(139,92,246,0.22), transparent 55%), radial-gradient(ellipse 50% 40% at 90% 80%, rgba(232,121,249,0.12), transparent), radial-gradient(ellipse 40% 30% at 10% 60%, rgba(34,211,238,0.1), transparent)",
        }}
      />

      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          rotateX: fieldRotateX,
          rotateY: fieldRotateY,
          y: fieldY,
          scale: fieldScale,
          transformPerspective: 900,
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className="relative w-full max-w-6xl h-[120vh]"
          style={{ transformStyle: "preserve-3d" }}
        >
          {FLOATING_NODES.map((node, i) => {
            const z = -node.depth * 420 - 80;
            return (
              <motion.div
                key={node.label}
                className="float-node absolute mono-label text-[0.65rem] md:text-xs px-3 py-1.5 rounded border border-violet-accent/25 text-silver/40 bg-bg-surface/40 backdrop-blur-sm"
                style={{
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                  transform: `translate3d(-50%, -50%, ${z}px)`,
                  animationDelay: `${i * 0.7}s`,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.25, 0.55, 0.25] }}
                transition={{
                  duration: 4 + i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="text-cyan-accent/70">◈</span> {node.label}
              </motion.div>
            );
          })}

          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-20"
            style={{
              transform: "translate(-50%, -50%) translateZ(-300px)",
              background:
                "radial-gradient(circle, rgba(251,191,36,0.35), transparent 70%)",
              filter: "blur(30px)",
            }}
          />
        </div>
      </motion.div>

      <div
        className="absolute bottom-0 left-0 right-0 h-48 opacity-40"
        style={{
          background:
            "linear-gradient(to top, var(--bg-deep), transparent)",
        }}
      />
    </div>
  );
}
