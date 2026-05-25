import Link from "next/link";
import { notFound } from "next/navigation";
import { LOCALES, SITE } from "@/lib/constants";
import type { Locale } from "@/lib/types";

type Props = { params: Promise<{ locale: string }> };

const copy = {
  en: {
    title: "Impressum",
    sections: [
      {
        heading: "Information according to § 5 TMG",
        body: `${SITE.name}\n${SITE.location}\nGermany`,
      },
      {
        heading: "Contact",
        body: `Phone: ${SITE.phone}\nLinkedIn: ${SITE.linkedIn}`,
      },
      {
        heading: "Responsible for content",
        body: SITE.name,
      },
      {
        heading: "Disclaimer",
        body: "This is a template Impressum. Please replace with your legally reviewed text before going live.",
      },
    ],
    back: "Back to portfolio",
  },
  de: {
    title: "Impressum",
    sections: [
      {
        heading: "Angaben gemäß § 5 TMG",
        body: `${SITE.name}\n${SITE.location}\nDeutschland`,
      },
      {
        heading: "Kontakt",
        body: `Telefon: ${SITE.phone}\nLinkedIn: ${SITE.linkedIn}`,
      },
      {
        heading: "Verantwortlich für den Inhalt",
        body: SITE.name,
      },
      {
        heading: "Haftungsausschluss",
        body: "Dies ist eine Impressum-Vorlage. Bitte vor Veröffentlichung durch rechtliche Prüfung ersetzen.",
      },
    ],
    back: "Zurück zum Portfolio",
  },
};

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function ImpressumPage({ params }: Props) {
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
      <h1 className="text-3xl font-semibold text-white mb-10">{t.title}</h1>
      <div className="space-y-8">
        {t.sections.map((s) => (
          <section key={s.heading}>
            <h2 className="mono-label text-indigo-accent mb-3">{s.heading}</h2>
            <p className="whitespace-pre-line text-silver/80 leading-relaxed">
              {s.body}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
}
