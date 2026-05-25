"use client";

import { motion } from "framer-motion";
import type { SiteContent } from "@/lib/types";
import { FrameLabel } from "@/components/ui/FrameLabel";
import { SectionTitle } from "@/components/ui/SectionTitle";

type ProjectsFrameProps = {
  content: SiteContent;
};

export function ProjectsFrame({ content }: ProjectsFrameProps) {
  const { projects } = content;

  return (
    <section
      id="projects"
      className="section-panel section-panel--content flex items-center justify-center px-6 md:px-16 lg:px-24"
    >
      <div className="max-w-3xl w-full text-center md:text-left">
        <FrameLabel label={projects.frameLabel} />
        <SectionTitle title={projects.title} subtitle={projects.subtitle} />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glow-border rounded-xl p-12 md:p-16 bg-[#12101f]/60 backdrop-blur-md border-dashed"
        >
          <p className="mono-label text-cyan-accent mb-4">
            ◈ {projects.placeholder}
          </p>
          <p className="text-silver/70 text-base md:text-lg leading-relaxed">
            {projects.comingSoon}
          </p>

          <div className="mt-10 grid grid-cols-3 gap-4 opacity-40">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="aspect-video rounded border border-indigo-accent/20 bg-indigo-accent/5"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
