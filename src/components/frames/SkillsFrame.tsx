"use client";

import { motion } from "framer-motion";
import type { SiteContent } from "@/lib/types";
import { FrameLabel } from "@/components/ui/FrameLabel";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CinematicCard } from "@/components/ui/CinematicCard";

type SkillsFrameProps = {
  content: SiteContent;
};

export function SkillsFrame({ content }: SkillsFrameProps) {
  const { skills, skillCategories } = content;

  return (
    <div className="flex flex-col px-6 md:px-16 lg:px-24">
      <FrameLabel label={skills.frameLabel} />
      <SectionTitle title={skills.title} subtitle={skills.subtitle} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl">
        {skillCategories.map((cat, i) => (
          <CinematicCard key={cat.name} delay={i * 0.06}>
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-white">{cat.name}</h3>
              <span className="mono-label text-cyan-accent text-[0.65rem] glow-text-cyan">
                {skills.proficiencyLabel} {cat.proficiency}%
              </span>
            </div>
            <div className="h-1.5 rounded-full bg-violet-accent/20 mb-4 overflow-hidden">
              <motion.div
                className="h-full proficiency-bar rounded-full"
                initial={{ width: 0, scaleX: 0 }}
                whileInView={{ width: `${cat.proficiency}%`, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="text-xs px-2 py-1 rounded border border-violet-accent/30 text-silver/80 hover:border-cyan-accent/50 hover:text-cyan-accent transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </CinematicCard>
        ))}
      </div>
    </div>
  );
}
