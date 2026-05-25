"use client";

import type { SiteContent } from "@/lib/types";
import { FrameLabel } from "@/components/ui/FrameLabel";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CinematicCard } from "@/components/ui/CinematicCard";

type ProjectsFrameProps = {
  content: SiteContent;
};

export function ProjectsFrame({ content }: ProjectsFrameProps) {
  const { projects } = content;

  return (
    <div className="flex flex-col px-6 md:px-16 lg:px-24">
      <FrameLabel label={projects.frameLabel} />
      <SectionTitle title={projects.title} subtitle={projects.subtitle} />

      <div className="space-y-6 max-w-5xl w-full">
        {projects.items.map((project, i) => (
          <CinematicCard key={`${project.company}-${project.title}`} delay={i * 0.08}>
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-white leading-snug">
                  {project.title}
                </h3>
                <p className="text-aqua-accent text-sm font-medium mt-1">
                  {project.company}
                </p>
              </div>
              {project.period && (
                <span className="mono-label text-magenta-accent/90 shrink-0">
                  {project.period}
                </span>
              )}
            </div>

            {project.tags && project.tags.length > 0 && (
              <ul className="flex flex-wrap gap-2 mb-4" aria-label="Technologies">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="mono-label text-[0.6rem] px-2.5 py-1 rounded-full border border-aqua-accent/30 text-cyan-accent glass-chip"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            )}

            <ul className="space-y-2">
              {project.bullets.map((bullet, j) => (
                <li
                  key={j}
                  className="text-silver/80 text-sm md:text-[0.9rem] leading-relaxed flex gap-2"
                >
                  <span className="text-gold-accent shrink-0 mt-1.5">▸</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </CinematicCard>
        ))}
      </div>
    </div>
  );
}
