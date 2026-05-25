import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getContent } from "@/lib/content";
import { LOCALES } from "@/lib/constants";
import type { Locale } from "@/lib/types";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!LOCALES.includes(locale as Locale)) return {};
  const content = getContent(locale as Locale);
  return {
    title: content.meta.title,
    description: content.meta.description,
    openGraph: {
      title: content.meta.title,
      description: content.meta.description,
      type: "website",
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!LOCALES.includes(locale as Locale)) {
    notFound();
  }

  return <div lang={locale}>{children}</div>;
}
