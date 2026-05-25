import type { Locale, SiteContent } from "@/lib/types";
import { de } from "./de";
import { en } from "./en";

const content: Record<Locale, SiteContent> = { en, de };

export function getContent(locale: Locale): SiteContent {
  return content[locale];
}
