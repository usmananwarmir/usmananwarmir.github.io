import type { SiteContent } from "@/lib/types";

export const en: SiteContent = {
  meta: {
    title: "Usman Anwar - Infrastructure & Automation Engineer",
    description:
      "Infrastructure and automation engineer in Germany. AWS, Ansible, CI/CD, and secure pipelines. Open to internships, working student, and full-time roles.",
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
      "AWS infrastructure as code, Ansible automation, and CI/CD pipelines from design through production rollout.",
    scrollHint: "SCROLL TO EXPLORE",
    availability:
      "Open to internships & working student roles · Full-time flexible",
    role: "INFRASTRUCTURE & AUTOMATION ENGINEER",
    location: "FRANKFURT, GERMANY",
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
    subtitle: "Automation, cloud, and collaboration applied in real environments.",
    proficiencyLabel: "PROFICIENCY",
  },
  projects: {
    frameLabel: "FRAME_005",
    title: "Proof in the pipeline.",
    subtitle:
      "Infrastructure, automation, and security work from professional roles.",
    items: [
      {
        title: "Infrastructure Policy Compliance Automation with Ansible",
        company: "PRISMA European Capacity Platform GmbH",
        tags: ["Ansible", "Automation", "Policy compliance", "Documentation"],
        bullets: [
          "Designed and deployed an end-to-end Ansible solution to automate device onboarding and infrastructure policy management.",
          "Built modular, OS-specific playbooks for consistent, scalable automation across heterogeneous environments.",
          "Delivered a hands-off workflow that cut manual effort, strengthened policy compliance, and improved day-to-day operations.",
          "Authored playbook, workflow, and maintenance documentation to support handover and long-term scale-up.",
          "Owned the full project lifecycle independently: requirements, implementation, testing, deployment, and documentation.",
        ],
      },
      {
        title: "Malware Analysis and Threat Detection Framework",
        company: "NCSAEL-MCS",
        tags: [
          "Malware analysis",
          "Reverse engineering",
          "Python",
          "Nmap",
          "Sandboxing",
        ],
        bullets: [
          "Built a malware analysis framework to identify, classify, and investigate suspicious files and behaviors in controlled environments.",
          "Performed static and dynamic analysis with Wireshark, Procmon, and OllyDbg, covering executables, network traffic, persistence, registry changes, and system activity.",
          "Used Nmap for network and vulnerability analysis to surface suspicious ports, services, and malicious communication patterns.",
          "Applied reverse engineering and assembly-level inspection to trace obfuscation, process injection, privilege escalation, API hooking, and persistence techniques.",
          "Monitored registry and startup persistence to detect unauthorized configuration and hidden malware footholds.",
          "Automated IOC collection and reporting with Python scripts to streamline triage and reduce manual analysis effort.",
          "Ran sandbox-based testing to safely observe ransomware, trojans, spyware, and worm behavior without impacting production systems.",
          "Delivered technical reports on attack vectors, impact, mitigation, and remediation; owned the project from research through documentation.",
        ],
      },
    ],
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
      "Open to internships, working student positions, and full-time opportunities. Timing flexible.",
    cta: "Connect on LinkedIn",
    phoneLabel: "Phone",
    linkedInLabel: "LinkedIn",
    githubLabel: "GitHub",
    badges: [
      "Based in Frankfurt, Germany",
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
      location: "Leipzig, Germany · Hybrid",
      period: "Apr. 2025 – Sep. 2025 · Part-time",
      bullets: [
        "Built a serverless log ingestion pipeline (Promtail Lambda) on AWS, automating secure data processing and improving observability across environments.",
        "Developed modular, reusable AWS CDK (Python) stacks covering Lambda functions, IAM roles, and S3 buckets, enforcing IaC best practices including version control and testability.",
        "Engineered S3-triggered Lambda functions with robust error handling, CloudWatch logging, and strict IAM security policy compliance.",
        "Strengthened CI/CD pipelines using AWS CodePipeline and GitHub Actions, integrating automated infrastructure validations for seamless staging and production deployments.",
        "Applied TDD practices using PyTest to validate CDK stacks and Python logic, ensuring reliable and regression-proof infrastructure deployments.",
      ],
    },
    {
      title: "Student Internship",
      company: "PRISMA European Capacity Platform GmbH",
      location: "Leipzig, Germany · On-site",
      period: "Oct. 2024 – Mar. 2025 · Full-time",
      bullets: [
        "Independently designed, developed, and deployed an end-to-end Ansible automation solution for device onboarding and policy management, sole owner of the entire project lifecycle across 100+ devices and 5 servers.",
        "Built modular, reusable Ansible playbooks per OS, enabling consistent and scalable automation across diverse device and server environments.",
        "Eliminated manual intervention in device onboarding, reducing onboarding time by ~70% and significantly improving policy compliance and operational efficiency.",
        "Produced comprehensive documentation covering playbook usage, workflows, and maintenance procedures to ensure long-term scalability and smooth knowledge transfer.",
      ],
    },
    {
      title: "Working Student IT Administration",
      company: "PRISMA European Capacity Platform GmbH",
      location: "Leipzig, Germany · Hybrid",
      period: "Nov. 2023 – Oct. 2024 · Part-time",
      bullets: [
        "Managed end-user systems, network infrastructure, and information security across the organization, ensuring optimal performance and uptime.",
        "Handled full device lifecycle including procurement, configuration, and decommissioning, alongside access and permissions management for internal teams.",
        "Coordinated first and second-level technical support, collaborating with external providers on network switch planning and IT infrastructure projects.",
      ],
    },
    {
      title: "Software Developer and Security Analyst",
      company: "Order Directly",
      location: "England, United Kingdom · Hybrid",
      period: "Sep. 2021 – Oct. 2022 · Full-time",
      bullets: [
        "Built responsive user interfaces using ReactJS, HTML, and CSS, collaborating with senior developers to deliver user-friendly web applications.",
        "Developed backend components including MySQL database connectivity to support dynamic, data-driven web applications.",
        "Troubleshot and resolved front-end performance issues, ensuring cross-browser compatibility and optimized page load times.",
        "Contributed to security analysis alongside development responsibilities, gaining hands-on exposure to full-stack development and secure coding practices.",
      ],
    },
    {
      title: "Cyber Security Analyst",
      company: "NCSAEL-MCS",
      location: "Islamabad, Pakistan · On-site",
      period: "Jan. 2019 – Sep. 2021 · Full-time",
      bullets: [
        "Designed and deployed an automated malware analysis pipeline using Python and Shell scripting, streamlining threat detection and significantly reducing manual analysis time.",
        "Conducted in-depth malware analysis and vulnerability assessments for a transportation security company, delivering detailed findings and actionable mitigation recommendations.",
        "Developed and maintained custom pen test tooling, automating critical security testing procedures and optimizing report generation workflows.",
        "Utilized Nmap, Metasploit, and Kali Linux to identify and assess security weaknesses across Linux-based systems, improving overall security posture.",
        "Applied Python and Shell scripting to automate threat intelligence gathering and security testing processes, increasing analysis efficiency.",
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
