"use client";

import { motion } from "framer-motion";
import type { SiteContent } from "@/lib/types";
import { FrameLabel } from "@/components/ui/FrameLabel";
import { SectionTitle } from "@/components/ui/SectionTitle";

type AboutFrameProps = {
  content: SiteContent;
};

export function AboutFrame({ content }: AboutFrameProps) {
  const { about } = content;

  return (
    <section
      id="about"
      className="section-panel section-panel--content flex items-center px-6 md:px-16 lg:px-24"
    >
      <div className="max-w-3xl">
        <FrameLabel label={about.frameLabel} />
        <SectionTitle title={about.title} />

        <div className="space-y-5">
          {about.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-silver/90 text-base md:text-lg leading-relaxed border-l-2 border-indigo-accent/30 pl-5"
            >
              {p}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
