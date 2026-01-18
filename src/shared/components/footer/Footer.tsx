"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { IconLink } from "../ui/IconLink";
import { QuickActionMenu } from "../QuickActionMenu";
import { FooterProps } from "../types/footer.types";

export default function Footer({
  className,
  socialLinks,
  themeActions,
  langActions,
  navItems,
  themeOpen,
  setThemeOpen,
  langOpen,
  setLangOpen,
}: FooterProps) {
  return (
    <footer className={`relative ${className ?? ""}`}>
      <section className="flex items-center justify-between w-full px-2 py-1 md:px-[20%] md:py-2">
        <div className="flex items-center gap-2 md:gap-4">
          {socialLinks.map(({ url, iconName, platform }) => (
            <IconLink key={platform} icon={iconName} href={url} target="_blank" rel="noopener noreferrer" />
          ))}
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <QuickActionMenu icon="mdi:theme-light-dark" actions={themeActions} open={themeOpen} setOpen={setThemeOpen} />
          <QuickActionMenu icon="mdi:language" actions={langActions} open={langOpen} setOpen={setLangOpen} />
        </div>
      </section>
      <section className="glass fixed bottom-0 left-1/2 -translate-x-1/2 z-50 rounded-t-2xl md:rounded-3xl px-2 mb-2 md:px-6 md:py-3 md:mb-6 flex items-center justify-center overflow-x-auto scrollbar-hide">
        <div className="flex items-center gap-2 w-full max-w-125 md:max-w-max">
          {navItems.map(({ label, href, icon }) => (
            <Link key={href} href={href} className="flex flex-col items-center gap-1 px-3 py-2 rounded-xl min-w-15 sm:min-w-17.5 md:min-w-22.5 transition shrink-0 hover:bg-[color-mix(in_srgb,var(--surface-border)_20%,transparent)]">
              <Icon icon={icon} className="text-[29px] sm:text-xl md:text-2xl" />
              <span className="text-[10px] sm:text-xs md:text-sm font-medium">{label}</span>
            </Link>
          ))}
        </div>
      </section>
    </footer>
  );
}
