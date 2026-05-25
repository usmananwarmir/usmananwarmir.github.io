"use client";

import { motion } from "framer-motion";
import type { SiteContent } from "@/lib/types";
import { FrameLabel } from "@/components/ui/FrameLabel";

type CredentialsFrameProps = {
  content: SiteContent;
};

export function CredentialsFrame({ content }: CredentialsFrameProps) {
  const { credentials, education, certifications, languages } = content;

  return (
    <section
      id="credentials"
      className="section-panel section-panel--content flex items-center px-6 md:px-16 lg:px-24"
    >
      <div className="w-full max-w-6xl">
        <FrameLabel label={credentials.frameLabel} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glow-border rounded-lg p-6 bg-[#12101f]/70"
          >
            <h3 className="mono-label text-cyan-accent mb-5">
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glow-border rounded-lg p-6 bg-[#12101f]/70"
          >
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glow-border rounded-lg p-6 bg-[#12101f]/70"
          >
            <h3 className="mono-label text-cyan-accent mb-5">
              ◈ {credentials.languagesTitle}
            </h3>
            <ul className="space-y-4">
              {languages.map((lang) => (
                <li
                  key={lang.name}
                  className="flex justify-between items-center border-b border-indigo-accent/15 pb-3 last:border-0"
                >
                  <span className="text-white font-medium">{lang.name}</span>
                  <span className="mono-label text-xs text-silver/70">
                    {lang.level}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
