"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";

import { LANGUAGES } from "@src/configuration/languages.config";
import { getProfileData } from "@src/mock/index.mock";
import { QuickActionItem, QuickActionMenu } from "./QuickActionMenu";
import { THEMES } from "@src/configuration/themes.config";
import { PageParams } from "@src/types/page.types";

export default function FooterLinks({ pageParams }: { pageParams: PageParams }) {
  const [themeOpen, setThemeOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const languageActions: QuickActionItem[] = LANGUAGES.map((l) => ({
    key: l.code,
    label: l.label,
    icon: l.icon,
    onClick: () => changeLang(l.code),
  }));

  const themeActions: QuickActionItem[] = THEMES[pageParams.lang].map((l) => ({
    key: l.code,
    label: l.label,
    icon: l.icon,
    onClick: () => changeTheme(l.code),
  }));

  const profile = getProfileData(pageParams.lang);
  const socialMedia = profile.socialMedia.filter((sm) => sm.showInFooterLinks);

  const router = useRouter();
  const changeLang = (selected: string) => {
    document.cookie = `lang=${selected}; path=/`;
    router.refresh();
  };
  const changeTheme = (selected: "light" | "dark" | "system") => {
    document.cookie = `theme=${selected}; path=/`;
    if (selected === "system") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.setAttribute("data-theme", prefersDark ? "dark" : "light");
    } else {
      document.documentElement.setAttribute("data-theme", selected);
    }
  };


  if (!mounted) return null;
  return (
    <footer
      className="
        w-full h-[10vh]
        flex items-center justify-between
      "
      style={{
        background: "var(--color-bg)",
        color: "var(--color-text)",
      }}
    >
      {/* SOCIAL */}
      <section id="social-media">
        <div className="flex flex-row items-center gap-4 flex-wrap">
          {socialMedia.map(({ link, icon, name }) => (
            <a
              key={name}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors"
              style={{
                color: "var(--color-text)",
              }}
            >
              <Icon
                icon={icon}
                className="
                  text-[32px] sm:text-3xl md:text-4xl lg:text-5xl
                  leading-none
                "
                style={{
                  color: "var(--color-text)",
                }}
              />
            </a>
          ))}
        </div>
      </section>
      {mounted && (
        <section id="controls" className="flex gap-4">
          <QuickActionMenu
            icon="mdi:theme-light-dark"
            actions={themeActions}
            open={themeOpen}
            setOpen={setThemeOpen}
          />
          <QuickActionMenu
            icon="mdi:language"
            actions={languageActions}
            open={langOpen}
            setOpen={setLangOpen}
          />
        </section>
      )}
    </footer>
  );
}
