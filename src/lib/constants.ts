export const SITE = {
  name: "Usman Anwar",
  role: "Infrastructure & Automation Engineer",
  location: "Germany",
  phone: "+49 178 9373363",
  linkedIn: "https://www.linkedin.com/in/usmananwarmir",
  github: "https://github.com/usmananwarmir",
  githubUsername: "usmananwarmir",
} as const;

export const COLORS = {
  bg: "#0c1929",
  surface: "#132a42",
  elevated: "#1a3655",
  aqua: "#2dd4bf",
  cyan: "#38bdf8",
  teal: "#14b8a6",
  text: "#e8f4fc",
  muted: "#7da3c0",
} as const;

export const LOCALES = ["en", "de"] as const;

export const FLOATING_NODES = [
  { label: "AWS", depth: 0.15, x: 10, y: 15 },
  { label: "Ansible", depth: 0.35, x: 82, y: 10 },
  { label: "Python", depth: 0.25, x: 90, y: 52 },
  { label: "CI/CD", depth: 0.5, x: 18, y: 72 },
  { label: "Lambda", depth: 0.65, x: 58, y: 22 },
  { label: "IaC", depth: 0.4, x: 68, y: 82 },
  { label: "GitLab", depth: 0.75, x: 5, y: 45 },
  { label: "CDK", depth: 0.45, x: 45, y: 5 },
  { label: "S3", depth: 0.6, x: 94, y: 38 },
  { label: "IAM", depth: 0.3, x: 32, y: 92 },
] as const;
