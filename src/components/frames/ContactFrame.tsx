"use client";

import { motion } from "framer-motion";
import type { Locale } from "@/lib/types";
import type { SiteContent } from "@/lib/types";
import { SITE } from "@/lib/constants";
import { FrameLabel } from "@/components/ui/FrameLabel";
import { SectionTitle } from "@/components/ui/SectionTitle";
import Link from "next/link";

type ContactFrameProps = {
  content: SiteContent;
  locale: Locale;
};

export function ContactFrame({ content, locale }: ContactFrameProps) {
  const { contact, footer } = content;

  return (
    <section
      id="contact"
      className="section-panel section-panel--content flex flex-col justify-center px-6 md:px-16 lg:px-24"
    >
      <FrameLabel label={contact.frameLabel} />
      <SectionTitle title={contact.title} subtitle={contact.subtitle} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl"
      >
        <a
          href={SITE.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-indigo-accent/20 border border-cyan-accent/50 rounded text-white font-semibold text-lg hover:bg-indigo-accent/35 hover:border-cyan-accent transition-all group"
        >
          <span className="group-hover:text-cyan-accent transition-colors">
            {contact.cta}
          </span>
          <span className="text-cyan-accent" aria-hidden="true">
            →
          </span>
        </a>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <p className="mono-label text-muted mb-1">{contact.phoneLabel}</p>
            <a
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              className="text-white hover:text-cyan-accent transition-colors"
            >
              {SITE.phone}
            </a>
          </div>
          <div>
            <p className="mono-label text-muted mb-1">{contact.githubLabel}</p>
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyan-accent transition-colors"
            >
              @{SITE.githubUsername}
            </a>
          </div>
        </div>

        <ul className="flex flex-wrap gap-3 mt-8">
          {contact.badges.map((badge) => (
            <li
              key={badge}
              className="mono-label text-[0.6rem] px-3 py-1.5 border border-indigo-accent/30 rounded text-silver/70"
            >
              ✓ {badge}
            </li>
          ))}
        </ul>
      </motion.div>

      <footer className="mt-16 pt-8 border-t border-indigo-accent/20 flex flex-wrap justify-between items-center gap-4 mono-label text-[0.6rem] text-muted">
        <span>© {new Date().getFullYear()} {SITE.name}. {footer.rights}</span>
        <div className="flex gap-4">
          <Link
            href={`/${locale}/impressum/`}
            className="hover:text-cyan-accent transition-colors"
          >
            {footer.impressum}
          </Link>
          <Link
            href={`/${locale}/datenschutz/`}
            className="hover:text-cyan-accent transition-colors"
          >
            {footer.privacy}
          </Link>
        </div>
      </footer>
    </section>
  );
}
