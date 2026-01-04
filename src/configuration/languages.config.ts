export type Language = {
  code:   string;
  label:  string;
  icon:   string;
};

export const DEFAULT_LANGUAGE: Language["code"] = "en";

export const AGE_TEMPLATES: Record<string, string> = {
  es: "$d años",
  en: "$d years old",
};


export const LANGUAGES: Language[] = [
  { code: "es", label: "Español", icon: "emojione-v1:flag-for-mexico" },
  { code: "en", label: "English", icon: "emojione-v1:flag-for-united-states" },
];
