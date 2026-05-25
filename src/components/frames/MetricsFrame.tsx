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
    <section
      id="metrics"
      className="section-panel section-panel--content flex flex-col justify-center px-6 md:px-16 lg:px-24"
    >
      <FrameLabel label={metricsSection.frameLabel} />
      <SectionTitle
        title={metricsSection.title}
        subtitle={metricsSection.subtitle}
      />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl">
        {metricItems.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glow-border rounded-lg p-6 md:p-8 text-center bg-[#12101f]/50"
          >
            <p className="text-3xl md:text-5xl font-semibold text-white glow-text-cyan">
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
    </section>
  );
}
