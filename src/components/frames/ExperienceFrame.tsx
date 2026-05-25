"use client";

import type { SiteContent } from "@/lib/types";
import { FrameLabel } from "@/components/ui/FrameLabel";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CinematicCard } from "@/components/ui/CinematicCard";

type ExperienceFrameProps = {
  content: SiteContent;
};

export function ExperienceFrame({ content }: ExperienceFrameProps) {
  const { experience, experiences } = content;

  return (
    <div className="flex flex-col px-6 md:px-16 lg:px-24">
      <FrameLabel label={experience.frameLabel} />
      <SectionTitle title={experience.title} subtitle={experience.subtitle} />

      <div className="space-y-6 max-w-5xl">
        {experiences.map((job, i) => (
          <CinematicCard key={`${job.company}-${job.period}`} delay={i * 0.08}>
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  {job.title}
                </h3>
                <p className="text-aqua-accent text-sm font-medium mt-0.5">
                  {job.company}
                </p>
                <p className="mono-label text-muted mt-1 text-[0.65rem]">
                  {job.location}
                </p>
              </div>
              <span className="mono-label text-magenta-accent/90 shrink-0">
                {job.period}
              </span>
            </div>
            <ul className="space-y-2 mt-4">
              {job.bullets.map((bullet, j) => (
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
