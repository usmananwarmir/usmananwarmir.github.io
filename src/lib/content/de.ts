import type { SiteContent } from "@/lib/types";

export const de: SiteContent = {
  meta: {
    title: "Usman Anwar - Infrastructure & Automation Engineer",
    description:
      "Infrastructure- und Automatisierungsingenieur in Leipzig. AWS, Ansible, CI/CD und sichere Pipelines. Offen für Praktika, Werkstudentenstellen und Festanstellungen.",
  },
  nav: {
    frames: "Frames",
    about: "Profil",
    experience: "Erfahrung",
    skills: "Skills",
    projects: "Projekte",
    credentials: "Qualifikation",
    contact: "Kontakt",
  },
  hero: {
    frameLabel: "FRAME_001",
    tagline: "Infrastructure & Automation Engineering",
    headline: "Die Systeme hinter zuverlässiger Auslieferung.",
    subheadline:
      "AWS-Infrastructure-as-Code, Ansible-Automatisierung und CI/CD-Pipelines von der Planung bis zum Produktions-Rollout.",
    scrollHint: "SCROLLEN ZUM ENTDECKEN",
    availability:
      "Offen für Praktika & Werkstudent · Festanstellung flexibel",
    role: "INFRASTRUCTURE & AUTOMATION ENGINEER",
    location: "FRANKFURT, DEUTSCHLAND",
  },
  about: {
    frameLabel: "FRAME_002",
    title: "Strukturierte Umsetzung, klare Ergebnisse.",
    paragraphs: [
      "IT- und Infrastruktur-Profi mit Erfahrung in der Umsetzung bereichsübergreifender Initiativen von der Planung bis zum Rollout in internationalen Umgebungen.",
      "Stark in strukturierter Ausführung, Stakeholder-Kommunikation und transparentem Fortschritt, mit praktischer Erfahrung in agilen und hybriden Arbeitsweisen.",
      "Aktuell Master Web Engineering an der TU Chemnitz, parallel Aufbau von produktionsnaher Automatisierung und Cloud-Infrastruktur im Unternehmensumfeld.",
    ],
  },
  experience: {
    frameLabel: "FRAME_003",
    title: "Erfahrung in der Praxis.",
    subtitle: "Bereichsübergreifende Lieferung von der Planung bis zum Betrieb.",
  },
  skills: {
    frameLabel: "FRAME_004",
    title: "Werkzeuge, die Arbeit liefern.",
    subtitle: "Automatisierung, Cloud und Zusammenarbeit in echten Umgebungen.",
    proficiencyLabel: "KOMPETENZ",
  },
  projects: {
    frameLabel: "FRAME_005",
    title: "Nachweis in der Pipeline.",
    subtitle:
      "Infrastruktur-, Automatisierungs- und Security-Projekte aus der Berufspraxis.",
    items: [
      {
        title: "Infrastruktur-Policy-Compliance-Automatisierung mit Ansible",
        company: "PRISMA European Capacity Platform GmbH",
        tags: ["Ansible", "Automatisierung", "Policy-Compliance", "Dokumentation"],
        bullets: [
          "End-to-End-Ansible-Lösung für automatisiertes Device-Onboarding und Policy-Management konzipiert und ausgerollt.",
          "Modulare, betriebssystemspezifische Playbooks für konsistente, skalierbare Automatisierung in heterogenen Umgebungen.",
          "Vollautomatisierte Abläufe mit weniger manuellem Aufwand, stärkerer Policy-Compliance und effizienterem Betrieb.",
          "Dokumentation zu Playbooks, Workflows und Wartung für Wissenstransfer und langfristige Skalierung.",
          "Gesamtes Projekt eigenverantwortlich umgesetzt: Anforderungen, Implementierung, Tests, Deployment und Dokumentation.",
        ],
      },
      {
        title: "Malware-Analyse- und Threat-Detection-Framework",
        company: "NCSAEL-MCS",
        tags: [
          "Malware-Analyse",
          "Reverse Engineering",
          "Python",
          "Nmap",
          "Sandboxing",
        ],
        bullets: [
          "Framework zur Identifikation, Klassifikation und Untersuchung verdächtiger Dateien und Verhaltens in kontrollierten Umgebungen entwickelt.",
          "Statische und dynamische Analyse mit Wireshark, Procmon und OllyDbg: Executables, Netzwerk, Persistenz, Registry und Systemaktivität.",
          "Nmap für Netzwerk- und Schwachstellenanalyse zu verdächtigen Ports, Diensten und kompromittierter Kommunikation.",
          "Reverse Engineering und Assembler-Analyse für Obfuskation, Process Injection, Privilege Escalation, API Hooking und Persistenz.",
          "Registry- und Autostart-Persistenz überwacht, um unautorisierte Konfiguration und versteckte Malware-Fußabdrücke zu erkennen.",
          "IOC-Erfassung und Reporting per Python automatisiert, manueller Analyseaufwand reduziert.",
          "Sandbox-Tests für Ransomware, Trojaner, Spyware und Würmer ohne Auswirkung auf Produktionssysteme.",
          "Technische Berichte zu Angriffsvektoren, Impact, Mitigation und Remediation; Projekt von Research bis Dokumentation eigenverantwortlich.",
        ],
      },
    ],
  },
  credentials: {
    frameLabel: "FRAME_006",
    educationTitle: "Ausbildung",
    certificationsTitle: "Zertifikate",
    languagesTitle: "Sprachen",
  },
  metricsSection: {
    frameLabel: "FRAME_007",
    title: "Kennzahlen auf einen Blick.",
    subtitle: "Highlights aus Beruf und Studium.",
    disclaimer: "Kennzahlen spiegeln kumulative Berufserfahrung und aktuelle Schwerpunkte wider.",
  },
  contact: {
    frameLabel: "FRAME_008",
    title: "Infrastruktur besprechen?",
    subtitle:
      "Offen für Praktika, Werkstudentenstellen und Festanstellungen. Zeitpunkt flexibel.",
    cta: "Auf LinkedIn verbinden",
    phoneLabel: "Telefon",
    linkedInLabel: "LinkedIn",
    githubLabel: "GitHub",
    badges: [
      "Standort Frankfurt, Deutschland",
      "Remote möglich",
      "Englisch C1 · Deutsch B1→C1",
    ],
  },
  footer: {
    impressum: "Impressum",
    privacy: "Datenschutz",
    rights: "Alle Rechte vorbehalten.",
  },
  experiences: [
    {
      title: "Werkstudent DevOps Engineer",
      company: "PRISMA European Capacity Platform GmbH",
      location: "Leipzig, Deutschland",
      period: "Apr. 2025 – Sep. 2025",
      bullets: [
        "Promtail Lambda konzipiert und skalierbare, automatisierte Infrastruktur mit AWS und Python umgesetzt; CI/CD-Workflows und sichere Datenpipelines auf GitLab verbessert.",
        "Infrastructure as Code mit AWS CDK (Python): wiederverwendbare Stacks für Promtail Lambda, IAM-Rollen, S3-Buckets und Lambda-Funktionen; Swamp für CLI-Profile und Shell-Skripte.",
        "Lambda-Funktionen bei S3-Events für Log-Ingestion und -Verarbeitung mit Fehlerbehandlung, S3-Parsing und CloudWatch-Logging unter Einhaltung von Naming und IAM-Richtlinien.",
        "CI/CD mit AWS CodePipeline und GitHub Actions erweitert; Unit-Tests und Infrastruktur-Validierung für Staging und Produktion.",
        "Unit- und Integrationstests mit PyTest für AWS-Ressourcen; TDD für zuverlässige CDK-Stacks und Python-Logik.",
      ],
    },
    {
      title: "Studentische Praktikumsstelle",
      company: "PRISMA European Capacity Platform GmbH",
      location: "Leipzig, Deutschland",
      period: "Okt. 2024 – Mär. 2025",
      bullets: [
        "End-to-End-Automatisierung mit Ansible für Device-Onboarding und Policy-Management eigenständig entworfen, entwickelt und ausgerollt.",
        "Modulare, wiederverwendbare Playbooks pro Betriebssystem für konsistente, skalierbare Automatisierung.",
        "Vollautomatisiertes System mit weniger manuellem Aufwand, besserer Policy-Compliance und höherer Effizienz.",
        "Umfassende Dokumentation zu Playbooks, Workflows und Wartung für Wissenstransfer und Skalierung.",
        "Alle Projektphasen eigenverantwortlich: Anforderungen, Skripte, Tests, Deployment und Dokumentation.",
      ],
    },
    {
      title: "Werkstudent IT-Administration",
      company: "PRISMA European Capacity Platform GmbH",
      location: "Leipzig, Deutschland",
      period: "Okt. 2023 – Sep. 2024",
      bullets: [
        "Zuverlässige Systeme durch Konfiguration und Optimierung von Endanwender-IT; Unterstützung von Informationssicherheit und Netzwerkinfrastruktur.",
        "Zusammenarbeit mit externen Dienstleistern bei IT-Projekten, u. a. Netzwerk-Switch-Planung und E-Kommunikation.",
        "First-Level-Support für PRISMAtes; Koordination von Second-Level-Support mit externen Anbietern.",
        "Gesamter Device-Lifecycle: Auswahl, Beschaffung, sicherer Betrieb und Außerbetriebnahme.",
        "Zugriffs- und Berechtigungsmanagement für passende Tools und Daten.",
        "Technisches On- und Offboarding, Anwendungssupport und vielfältige IT-Aufgaben.",
      ],
    },
    {
      title: "Software Developer and Security Analyst",
      company: "Order Directly",
      location: "Vereinigtes Königreich (Hybrid)",
      period: "Sep. 2021 – Okt. 2022",
      bullets: [
        "Responsive, benutzerfreundliche Oberflächen mit HTML, CSS und ReactJS im Team mit Senior-Entwicklern.",
        "Backend-Bausteine mit PHP7 und MySQL für dynamische Webanwendungen.",
        "Frontend-Fehlerbehebung, Performance-Optimierung und Cross-Browser-Kompatibilität.",
        "Proaktives Problemlösen, Termintreue und qualitativ hochwertiger Code.",
        "Aktive Teilnahme an Meetings und Brainstormings zur Verbesserung von Projektergebnissen.",
        "Enge Zusammenarbeit im Team zur Erreichung von Deliverables.",
      ],
    },
    {
      title: "Cyber Security Analyst",
      company: "NCSAEL-MCS",
      location: "Pakistan",
      period: "Jan. 2019 – Sep. 2021",
      bullets: [
        "Penetrationstests intern und bei Kunden geleitet; Schwachstellen bewertet und Berichte mit Empfehlungen erstellt.",
        "Pentest-Tooling entwickelt und ausgerollt zur Automatisierung und Dokumentation.",
        "Eigenständige Schwachstellenanalysen und Unterstützung bei wirksamen Maßnahmen.",
        "Nmap, Metasploit und Kali Linux für Analyse von Sicherheitslücken.",
        "Linux-Administration und Skripte (Python, Shell) zur Anpassung von Tools und Workflows.",
        "Strukturierte Teamarbeit und zuverlässige Eigenständigkeit.",
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
      name: "Automatisierung & Skripte",
      items: ["Ansible", "Python", "Shell", "YAML"],
      proficiency: 92,
    },
    {
      name: "CI/CD & Delivery",
      items: ["GitLab CI", "GitHub Actions", "AWS CodePipeline"],
      proficiency: 88,
    },
    {
      name: "Infrastruktur & Endpoints",
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
      name: "Projektdelivery",
      items: [
        "Agile",
        "Klassisch & hybrid",
        "Dokumentation",
        "Stakeholder-Kommunikation",
      ],
      proficiency: 87,
    },
    {
      name: "Kollaboration",
      items: ["Microsoft 365", "Jira", "Confluence", "Slack", "Google Workspace"],
      proficiency: 90,
    },
  ],
  education: [
    {
      degree: "Master Web Engineering",
      institution: "TU Chemnitz",
      period: "Apr. 2025 – Mär. 2028",
    },
    {
      degree: "Bachelor Informatik",
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
    { name: "Englisch", level: "C1" },
    { name: "Deutsch", level: "B1 in Arbeit · Ziel C1" },
  ],
  metricItems: [
    { value: "5+", label: "Jahre in IT & Engineering" },
    { value: "3", label: "PRISMA-Rollen · Automatisierung bis DevOps" },
    { value: "AWS", label: "Produktions-IaC & Lambda-Pipelines" },
    { value: "Ansible", label: "End-to-End-Geräteautomatisierung" },
    { value: "C1", label: "Englisch · berufliche Flüssigkeit" },
    { value: "Offen", label: "Praktikum · Werkstudent · Fest" },
  ],
};
