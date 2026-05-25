"use client";

import type { SiteContent } from "@/lib/types";
import { FrameLabel } from "@/components/ui/FrameLabel";
import { CinematicCard } from "@/components/ui/CinematicCard";

type CredentialsFrameProps = {
  content: SiteContent;
};

export function CredentialsFrame({ content }: CredentialsFrameProps) {
  const { credentials, education, certifications, languages } = content;

  return (
    <div className="flex items-center px-6 md:px-16 lg:px-24">
      <div className="w-full max-w-6xl">
        <FrameLabel label={credentials.frameLabel} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4">
          <CinematicCard delay={0}>
            <h3 className="mono-label text-cyan-accent mb-5 glow-text-cyan">
              ◈ {credentials.educationTitle}
            </h3>
            <ul className="space-y-5">
              {education.map((edu) => (
                <li key={edu.institution}>
                  <p className="font-semibold text-white">{edu.degree}</p>
                  <p className="text-silver/70 text-sm mt-1">{edu.institution}</p>
                  <p className="mono-label text-muted text-[0.65rem] mt-1">
                    {edu.period}
                  </p>
                </li>
              ))}
            </ul>
          </CinematicCard>

          <CinematicCard delay={0.1}>
            <h3 className="mono-label text-cyan-accent mb-5">
              ◈ {credentials.certificationsTitle}
            </h3>
            <ul className="space-y-4">
              {certifications.map((cert) => (
                <li key={cert.name}>
                  <p className="font-medium text-white text-sm">{cert.name}</p>
                  <p className="text-silver/60 text-xs mt-1">{cert.issuer}</p>
                </li>
              ))}
            </ul>
          </CinematicCard>

          <CinematicCard delay={0.2}>
            <h3 className="mono-label text-gold-accent mb-5 glow-text-gold">
              ◈ {credentials.languagesTitle}
            </h3>
            <ul className="space-y-4">
              {languages.map((lang) => (
                <li
                  key={lang.name}
                  className="flex justify-between items-center border-b border-violet-accent/15 pb-3 last:border-0"
                >
                  <span className="text-white font-medium">{lang.name}</span>
                  <span className="mono-label text-xs text-silver/70">
                    {lang.level}
                  </span>
                </li>
              ))}
            </ul>
          </CinematicCard>
        </div>
      </div>
    </div>
  );
}
