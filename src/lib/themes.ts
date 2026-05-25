export const THEME_STORAGE_KEY = "portfolio-theme";

export const THEME_IDS = ["aqua", "violet", "ember", "forest", "rose"] as const;

export type ThemeId = (typeof THEME_IDS)[number];

export const DEFAULT_THEME: ThemeId = "aqua";

export function isThemeId(value: string): value is ThemeId {
  return (THEME_IDS as readonly string[]).includes(value);
}

export type ThemeOption = {
  id: ThemeId;
  label: { en: string; de: string };
  /** Swatch color for the picker */
  preview: string;
};

export const THEME_OPTIONS: ThemeOption[] = [
  {
    id: "aqua",
    label: { en: "Aqua", de: "Aqua" },
    preview: "#2dd4bf",
  },
  {
    id: "violet",
    label: { en: "Violet", de: "Violett" },
    preview: "#a78bfa",
  },
  {
    id: "ember",
    label: { en: "Ember", de: "Glut" },
    preview: "#fb923c",
  },
  {
    id: "forest",
    label: { en: "Forest", de: "Wald" },
    preview: "#4ade80",
  },
  {
    id: "rose",
    label: { en: "Rose", de: "Rose" },
    preview: "#f472b6",
  },
];

/** Inline script — runs before paint to avoid theme flash */
export const THEME_INIT_SCRIPT = `(function(){try{var k="portfolio-theme",t=localStorage.getItem(k),v=["aqua","violet","ember","forest","rose"];if(t&&v.indexOf(t)!==-1)document.documentElement.dataset.theme=t}catch(e){}})();`;
