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
      location: "Leipzig, Deutschland · Hybrid",
      period: "Apr. 2025 – Sep. 2025 · Teilzeit",
      bullets: [
        "Serverlose Log-Ingestion-Pipeline (Promtail Lambda) auf AWS aufgebaut; sichere Datenverarbeitung automatisiert und Observability über alle Umgebungen verbessert.",
        "Modulare, wiederverwendbare AWS-CDK-Stacks (Python) für Lambda, IAM-Rollen und S3-Buckets entwickelt; IaC-Best Practices inkl. Versionierung und Testbarkeit.",
        "S3-getriggerte Lambda-Funktionen mit robuster Fehlerbehandlung, CloudWatch-Logging und strikter IAM-Policy-Compliance umgesetzt.",
        "CI/CD-Pipelines mit AWS CodePipeline und GitHub Actions gestärkt; automatisierte Infrastruktur-Validierung für Staging und Produktion.",
        "TDD mit PyTest für CDK-Stacks und Python-Logik; zuverlässige, regressionssichere Infrastruktur-Deployments.",
      ],
    },
    {
      title: "Studentische Praktikumsstelle",
      company: "PRISMA European Capacity Platform GmbH",
      location: "Leipzig, Deutschland · Vor Ort",
      period: "Okt. 2024 – Mär. 2025 · Vollzeit",
      bullets: [
        "End-to-End-Ansible-Lösung für Device-Onboarding und Policy-Management eigenständig entworfen, entwickelt und ausgerollt; alleiniger Owner über 100+ Geräte und 5 Server.",
        "Modulare, wiederverwendbare Ansible-Playbooks pro OS für konsistente, skalierbare Automatisierung in heterogenen Umgebungen.",
        "Manuelles Onboarding eliminiert; Onboarding-Zeit um ca. 70 % reduziert, Policy-Compliance und Effizienz deutlich verbessert.",
        "Umfassende Dokumentation zu Playbooks, Workflows und Wartung für Skalierung und reibungslosen Wissenstransfer.",
      ],
    },
    {
      title: "Werkstudent IT-Administration",
      company: "PRISMA European Capacity Platform GmbH",
      location: "Leipzig, Deutschland · Hybrid",
      period: "Nov. 2023 – Okt. 2024 · Teilzeit",
      bullets: [
        "Endanwender-Systeme, Netzwerkinfrastruktur und Informationssicherheit organisationweit betreut; Performance und Verfügbarkeit sichergestellt.",
        "Gesamter Device-Lifecycle inkl. Beschaffung, Konfiguration und Außerbetriebnahme; Zugriffs- und Berechtigungsmanagement für interne Teams.",
        "First- und Second-Level-Support koordiniert; mit externen Dienstleistern bei Switch-Planung und IT-Infrastrukturprojekten zusammengearbeitet.",
      ],
    },
    {
      title: "Software Developer and Security Analyst",
      company: "Order Directly",
      location: "England, Vereinigtes Königreich · Hybrid",
      period: "Sep. 2021 – Okt. 2022 · Vollzeit",
      bullets: [
        "Responsive Oberflächen mit ReactJS, HTML und CSS; mit Senior-Entwicklern benutzerfreundliche Webanwendungen geliefert.",
        "Backend-Komponenten inkl. MySQL-Anbindung für dynamische, datengetriebene Webanwendungen entwickelt.",
        "Frontend-Performance-Probleme behoben; Cross-Browser-Kompatibilität und optimierte Ladezeiten.",
        "Security-Analyse parallel zur Entwicklung; praktische Erfahrung in Full-Stack-Entwicklung und Secure Coding.",
      ],
    },
    {
      title: "Cyber Security Analyst",
      company: "NCSAEL-MCS",
      location: "Islamabad, Pakistan · Vor Ort",
      period: "Jan. 2019 – Sep. 2021 · Vollzeit",
      bullets: [
        "Automatisierte Malware-Analyse-Pipeline mit Python und Shell entwickelt und ausgerollt; Threat Detection beschleunigt, manueller Aufwand deutlich reduziert.",
        "Malware-Analyse und Schwachstellenbewertungen für ein Transport-Sicherheitsunternehmen; detaillierte Findings und umsetzbare Empfehlungen.",
        "Eigenes Pentest-Tooling entwickelt und gepflegt; kritische Tests und Report-Generierung automatisiert.",
        "Nmap, Metasploit und Kali Linux zur Identifikation und Bewertung von Schwachstellen in Linux-Umgebungen.",
        "Python- und Shell-Automatisierung für Threat Intelligence und Security-Testing; höhere Analyse-Effizienz.",
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
