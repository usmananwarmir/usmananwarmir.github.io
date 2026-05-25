"use client";

import { motion } from "framer-motion";
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
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-6 py-4 md:px-10 backdrop-blur-md border-b border-violet-accent/10"
      style={{
        background:
          "linear-gradient(to bottom, rgba(5,4,10,0.92), rgba(5,4,10,0.6))",
      }}
    >
      <button
        type="button"
        onClick={() => onNavigate(0)}
        className="mono-label text-silver/70 hover:text-cyan-accent transition-colors"
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
              className={`mono-label text-xs transition-all duration-300 ${
                isActive
                  ? "text-cyan-accent glow-text-cyan scale-105"
                  : "text-silver/50 hover:text-magenta-accent"
              }`}
            >
              {content.nav[key]}
            </button>
          );
        })}
      </nav>

      <div className="flex items-center gap-4">
        <span className="mono-label text-violet-accent/70 hidden sm:inline">
          {String(activeSection + 1).padStart(2, "0")}/{SECTION_IDS.length}
        </span>
        <Link
          href={otherPath}
          className="mono-label text-xs border border-violet-accent/40 px-3 py-1.5 rounded hover:border-magenta-accent/60 hover:text-cyan-accent transition-colors"
        >
          {locale === "en" ? "DE" : "EN"}
        </Link>
      </div>
    </motion.header>
  );
}
