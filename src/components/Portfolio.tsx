"use client";

import { useCallback, useEffect, useState } from "react";
import type { Locale } from "@/lib/types";
import { getContent } from "@/lib/content";
import { CinematicBackground } from "@/components/effects/CinematicBackground";
import { FilmGrain } from "@/components/effects/FilmGrain";
import { LensFlare } from "@/components/effects/LensFlare";
import { Scanlines } from "@/components/effects/Scanlines";
import { ScrollProgress } from "@/components/effects/ScrollProgress";
import { Vignette } from "@/components/effects/Vignette";
import { SiteNav } from "@/components/layout/SiteNav";
import { FrameProgress } from "@/components/layout/FrameProgress";
import { HeroFrame } from "@/components/frames/HeroFrame";
import { AboutFrame } from "@/components/frames/AboutFrame";
import { ExperienceFrame } from "@/components/frames/ExperienceFrame";
import { SkillsFrame } from "@/components/frames/SkillsFrame";
import { ProjectsFrame } from "@/components/frames/ProjectsFrame";
import { CredentialsFrame } from "@/components/frames/CredentialsFrame";
import { MetricsFrame } from "@/components/frames/MetricsFrame";
import { ContactFrame } from "@/components/frames/ContactFrame";
import { ScrollSection } from "@/components/ui/ScrollSection";
import { SECTION_COUNT, SECTION_IDS } from "@/lib/sections";

type PortfolioProps = {
  locale: Locale;
};

export function Portfolio({ locale }: PortfolioProps) {
  const content = getContent(locale);
  const [activeSection, setActiveSection] = useState(0);

  const scrollToSection = useCallback((index: number) => {
    const id = SECTION_IDS[index];
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      Boolean
    ) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          const index = SECTION_IDS.indexOf(
            visible[0].target.id as (typeof SECTION_IDS)[number]
          );
          if (index >= 0) setActiveSection(index);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.15, 0.35, 0.55],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" && activeSection < SECTION_COUNT - 1) {
        e.preventDefault();
        scrollToSection(activeSection + 1);
      }
      if (e.key === "ArrowUp" && activeSection > 0) {
        e.preventDefault();
        scrollToSection(activeSection - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeSection, scrollToSection]);

  return (
    <>
      <CinematicBackground />
      <LensFlare />
      <FilmGrain />
      <Scanlines />
      <Vignette />
      <ScrollProgress />
      <SiteNav
        locale={locale}
        content={content}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />
      <FrameProgress total={SECTION_COUNT} active={activeSection} />

      <main className="cinematic-main relative z-10" aria-label="Portfolio">
        <ScrollSection id="hero" variant="hero">
          <HeroFrame content={content} />
        </ScrollSection>
        <ScrollSection id="about">
          <AboutFrame content={content} />
        </ScrollSection>
        <ScrollSection id="experience">
          <ExperienceFrame content={content} />
        </ScrollSection>
        <ScrollSection id="skills">
          <SkillsFrame content={content} />
        </ScrollSection>
        <ScrollSection id="projects">
          <ProjectsFrame content={content} />
        </ScrollSection>
        <ScrollSection id="credentials">
          <CredentialsFrame content={content} />
        </ScrollSection>
        <ScrollSection id="metrics">
          <MetricsFrame content={content} />
        </ScrollSection>
        <ScrollSection id="contact">
          <ContactFrame content={content} locale={locale} />
        </ScrollSection>
      </main>
    </>
  );
}
