export const SITE = {
  name: "Usman Anwar",
  role: "Infrastructure & Automation Engineer",
  location: "Leipzig, Germany",
  phone: "+49 178 9373363",
  linkedIn: "https://linkedin.com/in/usmananwarmir",
  github: "https://github.com/usmananwarmir",
  githubUsername: "usmananwarmir",
} as const;

export const COLORS = {
  bg: "#05040a",
  surface: "#0c0a14",
  violet: "#8b5cf6",
  magenta: "#e879f9",
  cyan: "#22d3ee",
  gold: "#fbbf24",
  silver: "#c4cad4",
  muted: "#6b7280",
} as const;

export const LOCALES = ["en", "de"] as const;

export const FLOATING_NODES = [
  { label: "AWS", depth: 0.2, x: 12, y: 18 },
  { label: "Ansible", depth: 0.45, x: 78, y: 12 },
  { label: "Python", depth: 0.35, x: 88, y: 55 },
  { label: "CI/CD", depth: 0.6, x: 22, y: 68 },
  { label: "Lambda", depth: 0.75, x: 55, y: 28 },
  { label: "IaC", depth: 0.5, x: 65, y: 78 },
  { label: "GitLab", depth: 0.85, x: 8, y: 42 },
  { label: "CDK", depth: 0.55, x: 42, y: 8 },
  { label: "S3", depth: 0.7, x: 92, y: 35 },
  { label: "IAM", depth: 0.4, x: 35, y: 88 },
] as const;
