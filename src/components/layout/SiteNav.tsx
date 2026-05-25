"use client";

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
    <header className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-6 py-4 md:px-10 bg-gradient-to-b from-[#0D0B1E]/95 to-transparent">
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
              className={`mono-label text-xs transition-colors ${
                isActive
                  ? "text-cyan-accent glow-text-cyan"
                  : "text-silver/50 hover:text-silver"
              }`}
            >
              {content.nav[key]}
            </button>
          );
        })}
      </nav>

      <div className="flex items-center gap-4">
        <span className="mono-label text-indigo-accent/60 hidden sm:inline">
          {String(activeSection + 1).padStart(2, "0")}/{SECTION_IDS.length}
        </span>
        <Link
          href={otherPath}
          className="mono-label text-xs border border-indigo-accent/40 px-3 py-1.5 rounded hover:border-cyan-accent/60 hover:text-cyan-accent transition-colors"
        >
          {locale === "en" ? "DE" : "EN"}
        </Link>
      </div>
    </header>
  );
}
