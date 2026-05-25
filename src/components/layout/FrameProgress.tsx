"use client";

import { motion } from "framer-motion";

type FrameProgressProps = {
  total: number;
  active: number;
};

export function FrameProgress({ total, active }: FrameProgressProps) {
  return (
    <div
      className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-2"
      aria-hidden="true"
    >
      {Array.from({ length: total }).map((_, i) => (
        <motion.div
          key={i}
          layout
          className={`rounded-full transition-colors duration-300 ${
            i === active
              ? "w-1.5 bg-gradient-to-b from-violet-accent via-magenta-accent to-cyan-accent"
              : "w-1 bg-violet-accent/30"
          }`}
          animate={{
            height: i === active ? 32 : 8,
            boxShadow:
              i === active
                ? "0 0 12px rgba(34,211,238,0.6)"
                : "0 0 0px transparent",
          }}
          transition={{ type: "spring", stiffness: 400, damping: 28 }}
        />
      ))}
    </div>
  );
}
