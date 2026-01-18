"use client";

import { useEffect, useState } from "react";
import Footer from "./Footer";

import PROFILE_DATA from "@src/mock/profile.mock";
import { LANGUAGES, DEFAULT_LANGUAGE } from "@src/configuration/languages.config";
import { THEMES } from "@src/configuration/themes.config";
import { NAVIGATION } from "@src/configuration/navigation.config";

import { getPreferredLang, setPreferredLang } from "@src/utils/language";
import { setPreferredTheme } from "@src/utils/theme";

export default function FooterContainer() {
  const [lang, setLang] = useState(DEFAULT_LANGUAGE);
  const [themeOpen, setThemeOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLang(getPreferredLang());
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const changeLang = (code: string) => {
    setPreferredLang(code);
    setLang(code);
  };

  const langActions = LANGUAGES.map((l) => ({
    key: l.code,
    label: l.label,
    icon: l.icon,
    onClick: () => changeLang(l.code),
  }));

  const themeActions = THEMES[lang].map((t) => ({
    key: t.code,
    label: t.label,
    icon: t.icon,
    onClick: () => setPreferredTheme(t.code),
  }));

  return (
    <Footer
      socialLinks={PROFILE_DATA[lang].socialLinks.filter(
        (s) => s.visibility.footer
      )}
      navItems={NAVIGATION[lang]}
      langActions={langActions}
      themeActions={themeActions}
      langOpen={langOpen}
      setLangOpen={setLangOpen}
      themeOpen={themeOpen}
      setThemeOpen={setThemeOpen}
    />
  );
}
