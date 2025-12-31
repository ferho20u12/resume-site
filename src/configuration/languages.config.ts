export type Language = {
  code:   string;
  label:  string;
  icon:   string;
};

export const DEFAULT_LANGUAGE: Language["code"] = "en";

export const LANGUAGES: Language[] = [
  { code: "es", label: "Español", icon: "emojione-v1:flag-for-mexico" },
  { code: "en", label: "English", icon: "emojione-v1:flag-for-united-states" },
];
