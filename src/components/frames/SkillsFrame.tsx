"use client";

import { motion } from "framer-motion";
import type { SiteContent } from "@/lib/types";
import { FrameLabel } from "@/components/ui/FrameLabel";
import { SectionTitle } from "@/components/ui/SectionTitle";

type SkillsFrameProps = {
  content: SiteContent;
};

export function SkillsFrame({ content }: SkillsFrameProps) {
  const { skills, skillCategories } = content;

  return (
    <section
      id="skills"
      className="section-panel section-panel--content flex flex-col px-6 md:px-16 lg:px-24"
    >
      <FrameLabel label={skills.frameLabel} />
      <SectionTitle title={skills.title} subtitle={skills.subtitle} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="glow-border rounded-lg p-5 bg-[#12101f]/70"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-white">{cat.name}</h3>
              <span className="mono-label text-cyan-accent text-[0.65rem]">
                {skills.proficiencyLabel} {cat.proficiency}%
              </span>
            </div>
            <div className="h-1 rounded-full bg-indigo-accent/20 mb-4 overflow-hidden">
              <motion.div
                className="h-full proficiency-bar rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${cat.proficiency}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="text-xs px-2 py-1 rounded border border-indigo-accent/25 text-silver/80"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
