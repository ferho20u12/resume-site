'use client';

import { useEffect, useState } from "react";
import { getProfileData } from "@src/mock/index.mock";
import { getPreferredLang } from '@src/utils/language';
import { getPreferredTheme } from '@src/utils/theme';
import Card from "@src/shared/components/Card"

export default function ProfilePage() {
  const [lang, setLang] = useState(getPreferredLang());
  const [theme, setTheme] = useState(getPreferredTheme());
  
  useEffect(() => {
    setLang(getPreferredLang()); 
    setTheme(getPreferredTheme());
  }, []);
  
  const profile = getProfileData(lang);

  return (
      <Card nameSeccion="profile" mode="full"></Card>

      /* <div className="relative w-full h-5 md:h-96 overflow-hidden rounded-b-3xl">
        <img 
          src={profile.coverImageLink} 
          alt="Portada" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 -mt-16 md:-mt-24 flex flex-col md:flex-row items-center md:items-start justify-between">
        <div className="flex flex-col gap-3 max-w-lg">
          <h1 className="text-3xl md:text-5xl font-bold" style={{color: "var(--color-text)"}}>
            {profile.name}
          </h1>
          <h2 className="text-lg md:text-xl" style={{color: "var(--color-text)"}}>
            {profile.title}
          </h2>
          <a href={profile.locationLink} className="text-gray-300 text-sm md:text-base">
            {profile.locationName}
          </a>

          <div className="border-b border-gray-400 my-4 w-24"></div>

          <p className="text-gray-200" style={{color: "var(--color-text)"}}>
            {profile.about}
          </p>

          <div className="flex gap-3 mt-4 text-white">
            {profile.socialMedia.filter((sm) => sm.showInProfile).map((c) => (
              <a key={c.name} href={c.link} target="_blank" rel="noopener noreferrer">
                <Icon icon={c.icon} className="text-xl cursor-pointer" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 md:mt-0 md:ml-12 shrink-0">
          <img
            src={profile.profileImageLink}
            alt="Foto"
            className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-white object-cover -mt-16 md:-mt-24"
          />
        </div>
      </div> */
    
  );
}
