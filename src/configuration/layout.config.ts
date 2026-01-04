import { DEFAULT_LANGUAGE, LANGUAGES } from "./languages.config";

export type Layout = {
  domain: string;
  defaultTranslation: boolean;
  siteName: string;
  siteDescription: string;
  faviconUrl: string;
  logoUrl: string;
  supportedLanguages: string[];
  defaultLanguage: string;
  defaultOgImage: string;
  twitterHandle?: string;
  analyticsId?: string;
  maxContentWidth?: string;
  theme?: "light" | "dark" | "system";
};

export const LAYOUT: Layout = {
  domain: "fernandogromo.com",
  defaultTranslation: false,
  siteName: "Portfolio | Fernando Gutierrez",
  siteDescription: "Professional portfolio of Fernando Gutierrez, Fullstack developer",
  faviconUrl: "/favicon.ico",
  logoUrl: "/logo.png",
  supportedLanguages: LANGUAGES.map(lang => lang.code),
  defaultLanguage: DEFAULT_LANGUAGE,
  defaultOgImage: "/preview.png",
  theme: "system",
};
