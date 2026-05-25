export type Locale = "en" | "de";

export type SkillCategory = {
  name: string;
  items: string[];
  proficiency: number;
};

export type Experience = {
  title: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
};

export type Education = {
  degree: string;
  institution: string;
  period: string;
};

export type Certification = {
  name: string;
  issuer: string;
};

export type Metric = {
  value: string;
  label: string;
};

export type SiteContent = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    frames: string;
    about: string;
    experience: string;
    skills: string;
    projects: string;
    credentials: string;
    contact: string;
  };
  hero: {
    frameLabel: string;
    tagline: string;
    headline: string;
    subheadline: string;
    scrollHint: string;
    availability: string;
    role: string;
    location: string;
  };
  about: {
    frameLabel: string;
    title: string;
    paragraphs: string[];
  };
  experience: {
    frameLabel: string;
    title: string;
    subtitle: string;
  };
  skills: {
    frameLabel: string;
    title: string;
    subtitle: string;
    proficiencyLabel: string;
  };
  projects: {
    frameLabel: string;
    title: string;
    subtitle: string;
    placeholder: string;
    comingSoon: string;
  };
  credentials: {
    frameLabel: string;
    educationTitle: string;
    certificationsTitle: string;
    languagesTitle: string;
  };
  metricsSection: {
    frameLabel: string;
    title: string;
    subtitle: string;
    disclaimer: string;
  };
  contact: {
    frameLabel: string;
    title: string;
    subtitle: string;
    cta: string;
    phoneLabel: string;
    linkedInLabel: string;
    githubLabel: string;
    badges: string[];
  };
  footer: {
    impressum: string;
    privacy: string;
    rights: string;
  };
  experiences: Experience[];
  skillCategories: SkillCategory[];
  education: Education[];
  certifications: Certification[];
  languages: { name: string; level: string }[];
  metricItems: Metric[];
};
