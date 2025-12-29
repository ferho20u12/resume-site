'use client';

import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

import { LANGUAGES } from "@src/configuration/languages.config";
import { getProfileData } from "@src/mock/index.mock";
import { QuickActionItem, QuickActionMenu } from "./QuickActionMenu";
import { THEMES } from "@src/configuration/themes.config";

import { setPreferredLang, getPreferredLang } from '@src/utils/language';
import { setPreferredTheme } from '@src/utils/theme';

export default function FooterLinks() {
  const [themeOpen, setThemeOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const [lang, setLang] = useState('en'); // estado dinámico para idioma

  useEffect(() => {
    setMounted(true);
    setLang(getPreferredLang()); // inicializa desde localStorage/cookie al montar
  }, []);

  const changeLang = (selected: string) => {
    setPreferredLang(selected); // guarda en localStorage/cookie
    setLang(selected); // dispara re-render para actualizar UI
  };

  const changeTheme = (selected: "light" | "dark" | "system") => {
    setPreferredTheme(selected);
  };

  const languageActions: QuickActionItem[] = LANGUAGES.map((l) => ({
    key: l.code,
    label: l.label,
    icon: l.icon,
    onClick: () => changeLang(l.code),
  }));

  const themeActions: QuickActionItem[] = THEMES[lang].map((l) => ({
    key: l.code,
    label: l.label,
    icon: l.icon,
    onClick: () => changeTheme(l.code),
  }));

  const profile = getProfileData(lang);
  const socialMedia = profile.socialMedia.filter((sm) => sm.showInFooterLinks);

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
