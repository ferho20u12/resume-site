"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Icon } from "@iconify/react";
import { getProfileData } from "@src/mock/index.mock";
import { LANGUAGES } from "@src/configuration/languages.config";

interface FooterLinksProps {
  lang: string;
}

export default function FooterLinks({ lang }: FooterLinksProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const profile = getProfileData(lang);
  const socialMedia = profile.socialMedia.filter((sm) => (sm.showInFooterLinks == true))
  const languages = LANGUAGES;

  const changeLang = (selected: string) => {
    document.cookie = `lang=${selected}; path=/`;
    router.refresh();
  };


  return (
  <footer className="w-full h-[10vh] flex items-center justify-between py-2">
    <div className="flex flex-row items-center gap-4 flex-wrap">
      {socialMedia.map(({ link, icon, name }) => (
        <a
          key={name}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-gray-700 transition-colors"
        >
          <Icon icon={icon} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl" />
        </a>
      ))}
    </div>
  <div className="relative flex flex-col items-end">
    <button
      onClick={() => setOpen(!open)}
      className="bg-white text-blue-500 p-3 rounded-full shadow hover:bg-gray-100 transition flex items-center justify-center"
    >
      <Icon icon="mdi:language" className="text-xl sm:text-2xl md:text-3xl" />
    </button>
    {open && (
      <div className="absolute right-0 bottom-full mb-2 w-40 bg-white border border-gray-200 rounded-2xl shadow-lg z-10 overflow-hidden">
        {languages.map(({ code, label, icon }) => (
          <button
            key={code}
            onClick={() => changeLang(code)}
            className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100 transition"
          >
            <Icon icon={icon} className="text-lg sm:text-xl md:text-2xl" />
            <span className="text-[10px] sm:text-xs md:text-sm font-medium">{label}</span>
          </button>
        ))}
      </div>
    )}
  </div>
</footer>

  );
}
