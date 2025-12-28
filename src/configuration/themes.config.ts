export type ThemeCode =
  | "system"
  | "light"
  | "dark";

export type Theme = {
  code: ThemeCode;
  label: string;
  icon: string;
  default?: boolean;
};

export const THEMES: Record<string, Theme[]> = {
  es: [
    { label: "Del sistema",   code: "system",          icon: "mdi:desktop-classic", default: true},
    { label: "Claro",         code: "light",           icon: "mdi:white-balance-sunny" },
    { label: "Oscuro",        code: "dark",            icon: "mdi:weather-night" },
  ],

  en: [
    { label: "System",        code: "system",          icon: "mdi:desktop-classic", default: true},
    { label: "Light",         code: "light",           icon: "mdi:white-balance-sunny" },
    { label: "Dark",          code: "dark",            icon: "mdi:weather-night" },
  ],
};
