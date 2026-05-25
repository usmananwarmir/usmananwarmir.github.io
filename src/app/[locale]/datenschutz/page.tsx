import Link from "next/link";
import { notFound } from "next/navigation";
import { LOCALES } from "@/lib/constants";
import type { Locale } from "@/lib/types";

type Props = { params: Promise<{ locale: string }> };

const copy = {
  en: {
    title: "Privacy Policy (Datenschutz)",
    intro:
      "This privacy policy template describes how this static portfolio site handles data. Replace with your legally reviewed policy before production use.",
    sections: [
      {
        heading: "Hosting",
        body: "The site is hosted on GitHub Pages. GitHub may process connection data (IP address, timestamp, user agent) in server logs. See GitHub's privacy documentation.",
      },
      {
        heading: "Analytics",
        body: "No analytics are configured at this time. If you add a tool later, update this section and obtain consent where required.",
      },
      {
        heading: "External links",
        body: "Links to LinkedIn and GitHub lead to third-party services with their own privacy policies.",
      },
      {
        heading: "Your rights",
        body: "Under the GDPR you may have rights to access, rectification, erasure, and objection. Contact the site owner via LinkedIn for requests.",
      },
    ],
    back: "Back to portfolio",
  },
  de: {
    title: "Datenschutzerklärung",
    intro:
      "Diese Datenschutz-Vorlage beschreibt die Datenverarbeitung dieser statischen Portfolio-Website. Vor Go-Live durch rechtliche Prüfung ersetzen.",
    sections: [
      {
        heading: "Hosting",
        body: "Die Website wird über GitHub Pages gehostet. GitHub kann Verbindungsdaten (IP-Adresse, Zeitstempel, User-Agent) in Server-Logs verarbeiten.",
      },
      {
        heading: "Analytics",
        body: "Derzeit ist kein Analytics-Tool eingebunden. Bei späterer Nutzung diesen Abschnitt aktualisieren und ggf. Einwilligung einholen.",
      },
      {
        heading: "Externe Links",
        body: "Links zu LinkedIn und GitHub führen zu Drittanbietern mit eigenen Datenschutzrichtlinien.",
      },
      {
        heading: "Ihre Rechte",
        body: "Nach DSGVO können Auskunfts-, Berichtigungs-, Löschungs- und Widerspruchsrechte bestehen. Anfragen über LinkedIn.",
      },
    ],
    back: "Zurück zum Portfolio",
  },
};

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function DatenschutzPage({ params }: Props) {
  const { locale } = await params;
  if (!LOCALES.includes(locale as Locale)) notFound();
  const t = copy[locale as Locale];

  return (
    <div className="min-h-screen bg-bg-deep text-silver px-6 py-16 md:px-16 max-w-3xl mx-auto">
      <Link
        href={`/${locale}/`}
        className="mono-label text-cyan-accent hover:underline mb-10 inline-block"
      >
        ← {t.back}
      </Link>
      <h1 className="text-3xl font-semibold text-white mb-6">{t.title}</h1>
      <p className="text-silver/80 mb-10 leading-relaxed">{t.intro}</p>
      <div className="space-y-8">
        {t.sections.map((s) => (
          <section key={s.heading}>
            <h2 className="mono-label text-indigo-accent mb-3">{s.heading}</h2>
            <p className="text-silver/80 leading-relaxed">{s.body}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
