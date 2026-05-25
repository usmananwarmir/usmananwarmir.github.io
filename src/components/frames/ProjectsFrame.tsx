"use client";

import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";
import type { SiteContent } from "@/lib/types";
import { FrameLabel } from "@/components/ui/FrameLabel";
import { SectionTitle } from "@/components/ui/SectionTitle";

type ProjectsFrameProps = {
  content: SiteContent;
};

export function ProjectsFrame({ content }: ProjectsFrameProps) {
  const { projects } = content;

  return (
    <div className="flex items-center justify-center px-6 md:px-16 lg:px-24">
      <div className="max-w-3xl w-full text-center md:text-left">
        <FrameLabel label={projects.frameLabel} />
        <SectionTitle title={projects.title} subtitle={projects.subtitle} />

        <motion.div
          initial={{ opacity: 0, rotateX: 20, z: -60 }}
          whileInView={{ opacity: 1, rotateX: 0, z: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="glow-border rounded-xl p-12 md:p-16 border-dashed"
          style={{ transformPerspective: 800, transformStyle: "preserve-3d" }}
        >
          <p className="mono-label text-aqua-accent mb-4 glow-text-cyan">
            ◈ {projects.placeholder}
          </p>
          <p className="text-silver/70 text-base md:text-lg leading-relaxed">
            {projects.comingSoon}
          </p>

          <a
            href={SITE.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="LINKEDIN"
            className="inline-flex items-center gap-2 mt-6 mono-label text-aqua-accent hover:text-cyan-accent transition-colors"
          >
            Connect on LinkedIn →
          </a>

          <div className="mt-10 grid grid-cols-3 gap-4">
            {[1, 2, 3].map((n, i) => (
              <motion.div
                key={n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 0.5, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ opacity: 0.8, scale: 1.05, rotateY: 6 }}
                className="aspect-video rounded-lg border border-aqua-accent/25 bg-gradient-to-br from-teal-accent/15 to-cyan-accent/10"
                style={{ transformPerspective: 400 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
