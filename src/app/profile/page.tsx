"use client";

import { useEffect, useState } from "react";
import { DEFAULT_LANGUAGE } from "@src/configuration/languages.config";
import { getProfileData } from "@src/mock/index.mock";
import { getPreferredTheme } from "@src/utils/theme";
import Card from "@src/shared/components/Card";

type Theme = "light" | "dark" | "system";

const DEFAULT_THEME: Theme = "system";

export default function ProfilePage() {
  const [lang] = useState(DEFAULT_LANGUAGE);
  const [theme, setTheme] = useState<Theme>(DEFAULT_THEME);

  useEffect(() => {
    setTheme(getPreferredTheme() as Theme);
  }, []);

  const profile = getProfileData(lang);
  const coverVideoLink = profile.coverVideoLink[theme];

  return (
    <Card cardProps={{ nameSeccion: "profile", mode: "full" }}>
      <div className="h-[15vh] md:h-[20vh]">
        <div className="relative w-full h-full overflow-hidden rounded-t-2xl">
          <video
            src={coverVideoLink}
            autoPlay
            muted
            loop
            playsInline
            className="block w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </Card>
  );
}
