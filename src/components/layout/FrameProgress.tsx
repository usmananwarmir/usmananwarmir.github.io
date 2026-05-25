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
          className="rounded-full"
          animate={{
            width: 6,
            height: i === active ? 36 : 8,
            background:
              i === active
                ? "linear-gradient(180deg, #14b8a6, #2dd4bf, #38bdf8)"
                : "rgba(125, 163, 192, 0.35)",
            boxShadow:
              i === active
                ? "0 0 14px rgba(45, 212, 191, 0.7)"
                : "0 0 0px transparent",
          }}
          transition={{ type: "spring", stiffness: 400, damping: 28 }}
        />
      ))}
    </div>
  );
}
