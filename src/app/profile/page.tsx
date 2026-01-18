"use client";

import { DEFAULT_LANGUAGE } from "@src/configuration/languages.config";
import { PROFILE_DATA } from "@src/mock/profile.mock";
import Card from "@src/shared/components/ui/Card";
import { calculateAge, formatAge, getPreferredLang } from "@src/utils/language";
import { useEffect, useState } from "react";

import { IconLink } from "@src/shared/components/ui/IconLink";
import ExpandableText from "@src/shared/components/text/ExpandableText";
import ProfileHeader from "./ProfileHeader";
import ProfileInfo from "./ProfileInfo";
import ProfileSummary from "./ProfileSummary";

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
    <Card cardProps={{ nameSeccion: "profile"}}>
      <ProfileHeader coverVideos={profile.coverMediaByTheme} />

      <section className="relative z-10 -translate-y-[18%] md:-translate-y-[25%] px-[4%] md:px-[5%] flex flex-col gap-10">
        <ProfileSummary
          avatarUrl={profile.avatarUrl}
          info={
            <ProfileInfo
              fullName={profile.fullName}
              professionalTitle={profile.professionalTitle}
              ageFomatted={ageFomatted}
              locationName={profile.location.name}
              locationMapUrl={profile.location.mapUrl}
            />
          }
          socials={ socialMedia && socialMedia.map(({ url, iconName, platform }) => ( <IconLink key={platform} icon={iconName} href={url} target="_blank" rel="noopener noreferrer" />
            ))
          }
        />
        <div className="-translate-y-[15%] md:-translate-y-[25%]">
          <ExpandableText lines={10}>{profile.bio}</ExpandableText>
        </div>
      </section>
    </Card>
  );
}
