// types/footer.types.ts
import { QuickActionItem } from "./quick.action.item.types";

export type SocialLink = {
  url: string;
  iconName: string;
  platform: string;
};

export type NavItem = {
  label: string;
  href: string;
  icon: string;
};

export type FooterProps = {
  className?: string;
  socialLinks: SocialLink[];
  themeActions: QuickActionItem[];
  langActions: QuickActionItem[];

  // bottom
  navItems: NavItem[];

  // state control
  themeOpen: boolean;
  setThemeOpen: (v: boolean) => void;
  langOpen: boolean;
  setLangOpen: (v: boolean) => void;
};
