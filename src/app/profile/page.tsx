"use client";

import { useEffect, useState } from "react";
import CoverMedia from "./CoverMedia";
import Card from "@src/shared/components/Card";
import { DEFAULT_LANGUAGE } from "@src/configuration/languages.config";
import { getProfileData } from "@src/mock/index.mock";


export default function ProfilePage() {
  const [lang] = useState(DEFAULT_LANGUAGE);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const profile = getProfileData(lang);

  return (
    <Card cardProps={{ nameSeccion: "profile", mode: "full" }}>
      <div className="relative">
        <div className="h-[18vh] md:h-[28vh]">
          <CoverMedia coverVideos={profile.coverVideoLink} />
        </div>
        <div className=" absolute left-1/2 md:left-auto md:right-10 -bottom-14 md:-bottom-16 -translate-x-1/2 md:translate-x-0 z-10">
          <div className=" w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border border-(--cover-border-color) ">
            <img src={profile.profileImageLink} alt="Avatar" className="w-full h-full object-cover"/>
          </div>
        </div>
      </div>

      {/* INFO */}
      <div className=" mt-20 md:mt-8 px-6 text-center md:text-left max-w-xl ">
        <h1 className="text-xl md:text-2xl font-semibold"> {profile.name} </h1>
        <p className="text-sm opacity-70">{profile.title}</p>
      </div>
    </Card>
  );
}

