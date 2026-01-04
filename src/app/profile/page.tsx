"use client";

import { useEffect, useState } from "react";
import Card from "@src/shared/components/Card";
import { DEFAULT_LANGUAGE } from "@src/configuration/languages.config";
import { PROFILE_DATA } from "@src/mock/profile.mock";
import { getPreferredLang, calculateAge,formatAge} from "@src/utils/language";

import ProfileHeader from "./ProfileHeader";
import ProfileInfo from "./ProfileInfo";
import ProfileBio from "./ProfileBio";

export default function ProfilePage() {
  const [lang, setLang] = useState(DEFAULT_LANGUAGE);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setLang(getPreferredLang());
  }, []);

  if (!mounted) return null;

  const profile = PROFILE_DATA[lang];
  const socialMedia = profile.socialLinks.filter(
    (sm) => sm.visibility.profile
  );

  const ageFomatted = formatAge(lang,calculateAge(profile.birthDate))

  return (
    <Card cardProps={{ nameSeccion: "profile", mode: "full" }}>      
        <ProfileHeader
          coverVideos={profile.coverMediaByTheme}
          avatarUrl={profile.avatarUrl}
          socials={socialMedia}
        />

        <div className=" mt-20 md:mt-0 px-6 md:px-15 flex flex-col items-center md:items-start gap-6">
          <ProfileInfo
            fullName={profile.fullName}
            professionalTitle={profile.professionalTitle}
            ageFomatted={ageFomatted}
            locationName={profile.location.name}
            locationMapUrl={profile.location.mapUrl}
          />
        </div>        
        <div className="p-2">
          <ProfileBio bio={profile.bio} />
        </div>
    </Card>
  );
}
