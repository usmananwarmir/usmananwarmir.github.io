"use client";

import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";
import { SECTION_IDS } from "@/lib/sections";
import type { Locale } from "@/lib/types";
import type { SiteContent } from "@/lib/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SiteNavProps = {
  locale: Locale;
  content: SiteContent;
  activeSection: number;
  onNavigate: (index: number) => void;
};

const NAV_KEYS: (keyof SiteContent["nav"])[] = [
  "about",
  "experience",
  "skills",
  "projects",
  "credentials",
  "contact",
];

export function SiteNav({
  locale,
  content,
  activeSection,
  onNavigate,
}: SiteNavProps) {
  const pathname = usePathname();
  const otherLocale = locale === "en" ? "de" : "en";
  const otherPath = pathname.replace(`/${locale}`, `/${otherLocale}`);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-6 py-4 md:px-10 glass-chip border-b border-aqua-accent/15"
      data-cursor="MENU"
    >
      <button
        type="button"
        onClick={() => onNavigate(0)}
        className="mono-label text-silver/80 hover:text-aqua-accent transition-colors"
        data-cursor="HOME"
      >
        {content.nav.frames}
      </button>

      <nav className="hidden lg:flex items-center gap-6" aria-label="Main">
        {NAV_KEYS.map((key, i) => {
          const sectionIndex = i + 1;
          const isActive = activeSection === sectionIndex;
          return (
            <button
              key={key}
              type="button"
              onClick={() => onNavigate(sectionIndex)}
              data-cursor={content.nav[key].toUpperCase()}
              className={`mono-label text-xs transition-all duration-300 ${
                isActive
                  ? "text-aqua-accent glow-text-cyan scale-105"
                  : "text-muted hover:text-cyan-accent"
              }`}
            >
              {content.nav[key]}
            </button>
          );
        })}
      </nav>

      <div className="flex items-center gap-3 sm:gap-4">
        <a
          href={SITE.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="LINKEDIN"
          className="mono-label text-xs text-silver/80 hover:text-aqua-accent transition-colors"
        >
          LinkedIn
        </a>
        <span className="mono-label text-cyan-accent/60 hidden md:inline">
          {String(activeSection + 1).padStart(2, "0")}/{SECTION_IDS.length}
        </span>
        <Link
          href={otherPath}
          data-cursor="LANG"
          className="mono-label text-xs border border-aqua-accent/35 px-3 py-1.5 rounded-full hover:border-cyan-accent hover:text-aqua-accent transition-colors glass-chip"
        >
          {locale === "en" ? "DE" : "EN"}
        </Link>
      </div>
    </motion.header>
  );
}
