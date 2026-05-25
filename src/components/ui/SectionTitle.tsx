"use client";

import { motion } from "framer-motion";

type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30, rotateY: -10 }}
      whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mb-8 md:mb-10"
      style={{ transformPerspective: 700 }}
    >
      <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-silver/80 text-base md:text-lg max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
