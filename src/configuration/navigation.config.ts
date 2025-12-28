export type NavItem = {
  label: string;
  href: string;
  icon: string;
};

export const NAVIGATION: Record<string, NavItem[]> = {
  es: [
    { label: "Inicio", href: "/", icon: "hugeicons:user-ai" },
    { label: "Portafolio", href: "/portfolio", icon: "mdi:briefcase-outline" },
    { label: "Experiencia", href: "/experience", icon: "mdi:office-building-outline" },
    { label: "Educación", href: "/education", icon: "mdi:school-outline" },
    { label: "Currículum", href: "/resume", icon: "qlementine-icons:resume-16" },
  ],

  en: [
    { label: "Home", href: "/", icon: "hugeicons:user-ai" },
    { label: "Portfolio", href: "/portfolio", icon: "mdi:briefcase-outline" },
    { label: "Experience", href: "/experience", icon: "mdi:office-building-outline" },
    { label: "Education", href: "/education", icon: "mdi:school-outline" },
    { label: "Resume", href: "/resume", icon: "qlementine-icons:resume-16" },
  ],
};
