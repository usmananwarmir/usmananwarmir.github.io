"use client";

import { motion } from "framer-motion";
import type { SiteContent } from "@/lib/types";
import { FrameLabel } from "@/components/ui/FrameLabel";
import { SectionTitle } from "@/components/ui/SectionTitle";

type MetricsFrameProps = {
  content: SiteContent;
};

export function MetricsFrame({ content }: MetricsFrameProps) {
  const { metricsSection, metricItems } = content;

  return (
    <div className="flex flex-col justify-center px-6 md:px-16 lg:px-24">
      <FrameLabel label={metricsSection.frameLabel} />
      <SectionTitle
        title={metricsSection.title}
        subtitle={metricsSection.subtitle}
      />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl">
        {metricItems.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, scale: 0.8, rotateX: 25, z: -40 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0, z: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{
              delay: i * 0.08,
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              scale: 1.05,
              rotateY: 4,
            }}
            className="glow-border rounded-xl p-6 md:p-8 text-center bg-bg-surface/40 theme-metric-card"
            style={{ transformPerspective: 600, transformStyle: "preserve-3d" }}
          >
            <p className="text-3xl md:text-5xl font-semibold bg-gradient-to-b from-white to-cyan-accent bg-clip-text text-transparent">
              {m.value}
            </p>
            <p className="mono-label text-silver/60 mt-3 text-[0.65rem] leading-snug">
              {m.label}
            </p>
          </motion.div>
        ))}
      </div>

      <p className="mono-label text-muted mt-10 text-[0.6rem] max-w-xl">
        {metricsSection.disclaimer}
      </p>
    </div>
  );
}
