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
    <div className="flex flex-col justify-center px-6 md:px-16 lg:px-24 pb-8">
      <FrameLabel label={contact.frameLabel} />
      <SectionTitle title={contact.title} subtitle={contact.subtitle} />

      <motion.div
        initial={{ opacity: 0, y: 40, rotateX: 15 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-2xl"
        style={{ transformPerspective: 800 }}
      >
        <motion.a
          href={SITE.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Connect with Usman Anwar on LinkedIn"
          data-cursor="CONNECT"
          whileHover={{ scale: 1.03, rotateX: -2 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-white font-semibold text-lg transition-all group relative overflow-hidden glow-border theme-cta-gradient"
          style={{ transformStyle: "preserve-3d" }}
        >
          <motion.span
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none theme-cta-shine"
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          />
          <span className="relative group-hover:text-cyan-accent transition-colors">
            {contact.cta}
          </span>
          <span className="relative text-cyan-accent" aria-hidden="true">
            →
          </span>
        </motion.a>

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
              className="text-white hover:text-magenta-accent transition-colors"
            >
              @{SITE.githubUsername}
            </a>
          </div>
        </div>

        <ul className="flex flex-wrap gap-3 mt-8">
          {contact.badges.map((badge) => (
            <li
              key={badge}
              className="mono-label text-[0.6rem] px-3 py-1.5 border border-violet-accent/30 rounded text-silver/70"
            >
              ✓ {badge}
            </li>
          ))}
        </ul>
      </motion.div>

      <footer className="mt-16 pt-8 border-t border-violet-accent/20 flex flex-wrap justify-between items-center gap-4 mono-label text-[0.6rem] text-muted">
        <span>
          © {new Date().getFullYear()} {SITE.name}. {footer.rights}
        </span>
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
    </div>
  );
}
