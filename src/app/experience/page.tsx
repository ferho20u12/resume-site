"use client";

import { useEffect, useState } from "react";
import {EXPERIENCE_DATA, EXPERIENCE_TITLE}  from "@src/mock/experience.mock";
import { DEFAULT_LANGUAGE } from "@src/configuration/languages.config";
import { getPreferredLang } from "@src/utils/language";

import Card from "@src/shared/components/Card";
import HorizontalScrollContainer from "@src/shared/components/HorizontalScrollContainer";
import ExperienceCard from "./ExperienceCard";

export default function ExperiencePage() {
  const [lang, setLang] = useState(DEFAULT_LANGUAGE);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setLang(getPreferredLang());
  }, []);

  if (!mounted) return null;

  const experiences = EXPERIENCE_DATA[lang];
  const experienceTitle = EXPERIENCE_TITLE[lang];

  return (
    <Card cardProps={{ nameSeccion: "experience", mode: "full" }}>
      
      <HorizontalScrollContainer
        title={experienceTitle}
        className="py-2 px-4" 
      >
        {experiences.map((e) => (
          <ExperienceCard key={e.id} experience={e} />
        ))}
      </HorizontalScrollContainer>

    </Card>
  );
}
