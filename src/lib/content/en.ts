import type { SiteContent } from "@/lib/types";

export const en: SiteContent = {
  meta: {
    title: "Usman Anwar — Infrastructure & Automation Engineer",
    description:
      "Infrastructure and automation engineer in Leipzig. AWS, Ansible, CI/CD, and secure pipelines. Open to internships, working student, and full-time roles.",
  },
  nav: {
    frames: "Frames",
    about: "About",
    experience: "Experience",
    skills: "Skills",
    projects: "Projects",
    credentials: "Credentials",
    contact: "Contact",
  },
  hero: {
    frameLabel: "FRAME_001",
    tagline: "Infrastructure & Automation Engineering",
    headline: "The systems behind reliable delivery.",
    subheadline:
      "AWS infrastructure as code, Ansible automation, and CI/CD pipelines — from design through production rollout.",
    scrollHint: "SCROLL TO EXPLORE",
    availability:
      "Open to internships & working student roles · Full-time flexible",
    role: "INFRASTRUCTURE & AUTOMATION ENGINEER",
    location: "LEIPZIG, GERMANY",
  },
  about: {
    frameLabel: "FRAME_002",
    title: "Structured execution, clear outcomes.",
    paragraphs: [
      "IT and infrastructure professional with experience delivering cross-functional initiatives from planning to rollout in international environments.",
      "Strong in structured execution, stakeholder communication, and progress transparency, with practical exposure to agile and hybrid ways of working.",
      "Currently pursuing a Master's in Web Engineering at TU Chemnitz while building production-grade automation and cloud infrastructure in enterprise settings.",
    ],
  },
  experience: {
    frameLabel: "FRAME_003",
    title: "Experience in production.",
    subtitle: "Cross-functional delivery from planning through operations.",
  },
  skills: {
    frameLabel: "FRAME_004",
    title: "Tools that ship work.",
    subtitle: "Automation, cloud, and collaboration — applied in real environments.",
    proficiencyLabel: "PROFICIENCY",
  },
  projects: {
    frameLabel: "FRAME_005",
    title: "Proof in the pipeline.",
    subtitle: "Case studies and repositories — updated as projects are published.",
    placeholder: "Projects coming soon",
    comingSoon:
      "Personal and open-source project details will be added here. Check back or connect on LinkedIn.",
  },
  credentials: {
    frameLabel: "FRAME_006",
    educationTitle: "Education",
    certificationsTitle: "Certifications",
    languagesTitle: "Languages",
  },
  metricsSection: {
    frameLabel: "FRAME_007",
    title: "Signals at a glance.",
    subtitle: "Highlights from professional and academic work.",
    disclaimer: "Metrics reflect cumulative professional experience and current focus areas.",
  },
  contact: {
    frameLabel: "FRAME_008",
    title: "Let's connect on infrastructure.",
    subtitle:
      "Open to internships, working student positions, and full-time opportunities — timing flexible.",
    cta: "Connect on LinkedIn",
    phoneLabel: "Phone",
    linkedInLabel: "LinkedIn",
    githubLabel: "GitHub",
    badges: [
      "EU-based · Leipzig",
      "Remote-friendly",
      "English C1 · German B1→C1",
    ],
  },
  footer: {
    impressum: "Impressum",
    privacy: "Datenschutz",
    rights: "All rights reserved.",
  },
  experiences: [
    {
      title: "Working Student DevOps Engineer",
      company: "PRISMA European Capacity Platform GmbH",
      location: "Leipzig, Germany",
      period: "Apr. 2025 – Sep. 2025",
      bullets: [
        "Designed Promtail Lambda and implemented scalable, automated infrastructure solutions using AWS and Python, improving CI/CD workflows and secure data processing pipelines on GitLab.",
        "Developed robust infrastructure as code with AWS CDK (Python), creating reusable stacks for Promtail Lambda, IAM roles, S3 buckets, and Lambda functions, using Swamp for CLI profile management and shell scripting.",
        "Built Lambda functions triggered by S3 events to ingest and process log files, with strong error handling, S3 object parsing, and CloudWatch logging while following naming conventions and IAM security policies.",
        "Enhanced CI/CD using AWS CodePipeline and GitHub Actions, integrating unit tests and infrastructure validations for smooth deployments across staging and production.",
        "Created unit and integration tests using PyTest and assertions to validate AWS resource generation, applying TDD practices for reliable CDK stacks and Python logic.",
      ],
    },
    {
      title: "Student Internship",
      company: "PRISMA European Capacity Platform GmbH",
      location: "Leipzig, Germany",
      period: "Oct. 2024 – Mar. 2025",
      bullets: [
        "Solely designed, developed, and deployed an end-to-end automation solution using Ansible to streamline device onboarding and policy management.",
        "Developed modular, reusable playbooks tailored to each operating system to ensure smooth, consistent, and scalable automation across diverse environments.",
        "Delivered a fully automated system that minimized manual intervention, improved policy compliance, and enhanced operational efficiency.",
        "Created comprehensive documentation detailing playbook usage, workflows, and maintenance to support knowledge transfer and future scalability.",
        "Managed all project phases independently, from requirement gathering and scripting to testing, deployment, and documentation.",
      ],
    },
    {
      title: "Working Student Office IT",
      company: "PRISMA European Capacity Platform GmbH",
      location: "Leipzig, Germany",
      period: "Nov. 2023 – Sep. 2024",
      bullets: [
        "Maintained reliable systems by configuring and ensuring the optimal performance of end-user computer systems, while supporting information security and network infrastructure.",
        "Collaborated with external providers on IT projects, including network switch planning and electronic communication initiatives.",
        "Provided first-level technical support for PRISMAtes and coordinated second-level support with external service providers when needed.",
        "Managed the full device lifecycle, from selection and procurement through secure use and decommissioning.",
        "Handled access and permissions management to ensure that the right tools and data were available to the right people.",
        "Supported technical onboarding and offboarding, troubleshooting application issues and handling diverse daily IT tasks.",
      ],
    },
    {
      title: "Software Developer and Security Analyst",
      company: "Order Directly",
      location: "United Kingdom (Hybrid)",
      period: "Sep. 2021 – Oct. 2022",
      bullets: [
        "Collaborated with senior developers to implement responsive, user-friendly interfaces using HTML, CSS, and ReactJS.",
        "Built foundational backend components using PHP7 and MySQL to support dynamic web applications.",
        "Troubleshot and resolved front-end issues, optimized website performance, and ensured cross-browser compatibility.",
        "Demonstrated proactive problem-solving, met project deadlines, and consistently delivered high-quality code.",
        "Actively participated in team meetings and brainstorming sessions, contributing ideas to improve project outcomes.",
        "Worked closely with team members to meet project deliverables in a collaborative and supportive environment.",
      ],
    },
    {
      title: "Cyber Security Analyst",
      company: "NCSAEL-MCS",
      location: "Pakistan",
      period: "Jan. 2019 – Sep. 2021",
      bullets: [
        "Led and coordinated penetration testing activities in-house and on customer projects, assessing vulnerabilities and delivering comprehensive reports with clear recommendations.",
        "Developed and deployed penetration testing tooling to automate critical testing procedures and optimize documentation generation.",
        "Conducted independent vulnerability assessments and supported implementation of effective mitigation measures.",
        "Demonstrated expertise with Nmap, Metasploit, and Kali Linux for identifying and analyzing security vulnerabilities.",
        "Applied Linux administration and scripting skills (Python and shell) to customize tools and streamline testing workflows.",
        "Worked effectively in team settings while maintaining a structured and reliable independent work approach.",
      ],
    },
  ],
  skillCategories: [
    {
      name: "Cloud & IaC",
      items: ["AWS Lambda", "S3", "IAM", "CloudWatch", "AWS CDK (Python)"],
      proficiency: 90,
    },
    {
      name: "Automation & Scripting",
      items: ["Ansible", "Python", "Shell", "YAML"],
      proficiency: 92,
    },
    {
      name: "CI/CD & Delivery",
      items: ["GitLab CI", "GitHub Actions", "AWS CodePipeline"],
      proficiency: 88,
    },
    {
      name: "Infrastructure & Endpoints",
      items: [
        "Windows",
        "Linux",
        "macOS",
        "Active Directory",
        "VPN",
        "Firewalls",
        "MDM (Miradore)",
      ],
      proficiency: 85,
    },
    {
      name: "Project Delivery",
      items: [
        "Agile",
        "Classic & hybrid execution",
        "Documentation",
        "Stakeholder communication",
      ],
      proficiency: 87,
    },
    {
      name: "Collaboration Tools",
      items: ["Microsoft 365", "Jira", "Confluence", "Slack", "Google Workspace"],
      proficiency: 90,
    },
  ],
  education: [
    {
      degree: "Master's in Web Engineering",
      institution: "TU Chemnitz",
      period: "Apr. 2025 – Mar. 2028",
    },
    {
      degree: "Bachelor's in Computer Science",
      institution: "UET Taxila",
      period: "Sep. 2016 – Apr. 2021",
    },
  ],
  certifications: [
    {
      name: "ISO/IEC 27001 Information Security Associate",
      issuer: "Skillfront",
    },
    {
      name: "Complete Cyber Security Course",
      issuer: "Udemy",
    },
  ],
  languages: [
    { name: "English", level: "C1" },
    { name: "German", level: "B1 in progress · targeting C1" },
  ],
  metricItems: [
    { value: "5+", label: "Years in IT & engineering" },
    { value: "3", label: "PRISMA roles · automation to DevOps" },
    { value: "AWS", label: "Production IaC & Lambda pipelines" },
    { value: "Ansible", label: "End-to-end device automation delivered" },
    { value: "C1", label: "English · professional fluency" },
    { value: "Open", label: "Internships · working student · full-time" },
  ],
};
