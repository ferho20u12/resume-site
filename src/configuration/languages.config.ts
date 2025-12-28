export type Language = {
  code: "es" | "en";
  label: string;
  icon: string;
};

export const LANGUAGES: Language[] = [
  { code: "es", label: "Español", icon: "emojione-v1:flag-for-mexico" },
  { code: "en", label: "English", icon: "emojione-v1:flag-for-united-states" },
];
