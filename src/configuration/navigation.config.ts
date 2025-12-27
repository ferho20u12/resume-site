// navigation.config.ts
export type NavItem = {
  label: string
  href: string
  icon: string
}

export type Language = {
  code: "es" | "en";
  label: string;
  icon?: string;
  url?: string;
};

export const LANGUAGE: Language[] = [
  {
    code: "es",
    label: "Español",
    icon: "flag:es-4x3",
  },
  {
    code: "en",
    label: "English",
    icon: "flag:gb-4x3",
  }
];


export const NAVIGATION: NavItem[] = [
  {
    label: "Inicio",
    href: "/",
    icon: "hugeicons:user-ai",
  },
  {
    label: "Portafolio",
    href: "/portafolio",
    icon: "mdi:briefcase-outline",
  },
  {
    label: "Experience",
    href: "/experience",
    icon: "mdi:office-building-outline",
  },
  {
    label: "Education",
    href: "/education",
    icon: "mdi:school-outline",
  },
  {
    label: "Resume",
    href: "/resume",
    icon: "qlementine-icons:resume-16",
  },
]
