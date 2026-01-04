"use client";

import { useEffect, useState } from "react";
import Card from "@src/shared/components/Card";
import { DEFAULT_LANGUAGE } from "@src/configuration/languages.config";
import { PROFILE_DATA } from "@src/mock/profile.mock";
import { getPreferredLang } from "@src/utils/language";

import ProfileHeader from "./ProfileHeader";
import ProfileInfo from "./ProfileInfo";
import ProfileSocials from "./ProfileSocials";
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

  return (
    <Card cardProps={{ nameSeccion: "profile", mode: "full" }}>
      {/* HEADER */}
      <ProfileHeader
        coverVideos={profile.coverMediaByTheme}
        avatarUrl={profile.avatarUrl}
      />

      {/* INFO + SOCIALS */}
      <div
        className="
          mt-20 md:mt-4
          px-6
          flex
          flex-col md:flex-row
          items-center md:items-start
          gap-6
        "
      >
        {/* SOCIALS */}
        <div
          className="
            order-1 md:order-0
            flex justify-center
            md:self-start md:mt-6
          "
        >
          <ProfileSocials socials={socialMedia} />
        </div>

        {/* INFO */}
        <div className="order-2 md:order-0">
          <ProfileInfo
            fullName={profile.fullName}
            professionalTitle={profile.professionalTitle}
            birthDate={profile.birthDate}
            locationName={profile.location.name}
            locationMapUrl={profile.location.mapUrl}
          />
        </div>
      </div>


      {/* BIO */}
      <ProfileBio bio={profile.bio} />
    </Card>
  );
}
