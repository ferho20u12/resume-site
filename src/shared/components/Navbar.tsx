'use client';
import { useState, useEffect } from 'react';
import Link from "next/link";
import { NAVIGATION } from "@src/configuration/navigation.config";
import { Icon } from "@iconify/react";
import { getPreferredLang } from '@src/utils/language';

export default function Navbar() {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    setLang(getPreferredLang()); 
  }, []);

  const items = NAVIGATION[lang];


  return (
    <nav
      className="
        glass
        fixed bottom-0 left-0 z-50
        h-[10vh] sm:h-17.5 md:h-20
        w-full md:w-auto
        md:left-1/2 md:transform md:-translate-x-1/2
        rounded-t-2xl md:rounded-3xl
        px-3 py-2 md:px-6 md:py-3
        md:mb-6
        flex items-center justify-center overflow-x-auto scrollbar-hide
      "
    >
      <div className="flex items-center justify-center gap-2 w-full max-w-125 md:max-w-max">
        {items.map(({ label, href, icon }) => (
          <Link
            key={href}
            href={href}
            className="
              flex flex-col items-center justify-center gap-1
              px-3 py-2 rounded-xl
              min-w-15 sm:min-w-17.5 md:min-w-22.5
              transition shrink-0
              hover:bg-[color-mix(in_srgb,var(--surface-border)_20%,transparent)]
            "
            style={{ color: "var(--text)" }}
          >
            <Icon
              icon={icon}
              className="text-[29px] sm:text-xl md:text-2xl leading-none inline-block"
              style={{ color: "var(--text)" }}
            />
            <span
              className="text-[10px] sm:text-xs md:text-sm font-medium leading-none"
            >
              {label}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
