import { notFound } from "next/navigation";
import { Portfolio } from "@/components/Portfolio";
import { LOCALES } from "@/lib/constants";
import type { Locale } from "@/lib/types";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function LocalePage({ params }: Props) {
  const { locale } = await params;
  if (!LOCALES.includes(locale as Locale)) {
    notFound();
  }

  return <Portfolio locale={locale as Locale} />;
}
