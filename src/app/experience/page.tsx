"use client";

import { useEffect, useState } from "react";
import { EXPERIENCE_DATA, EXPERIENCE_SECTION_TITLE } from "@src/mock/experience.mock";
import { SKILL_CATEGORIES_DATA, SKILL_SECTION_TITLE } from "@src/mock/skill.mock";
import { DEFAULT_LANGUAGE } from "@src/configuration/languages.config";
import { getPreferredLang } from "@src/utils/language";

import Card from "@src/shared/components/Card";
import HorizontalScrollContainer from "@src/shared/components/HorizontalScrollContainer";
import ExperienceCard from "./ExperienceCard";
import SkillCard from "./SkillCard";

export default function ExperiencePage() {
  const [lang, setLang] = useState(DEFAULT_LANGUAGE);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setLang(getPreferredLang());
  }, []);

  if (!mounted) return null;

  const experiences = EXPERIENCE_DATA[lang];
  const experienceTitle = EXPERIENCE_SECTION_TITLE[lang];

  const skillCategories = SKILL_CATEGORIES_DATA[lang];
  const skillsTitle = SKILL_SECTION_TITLE[lang];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 md:hidden">
        <Card cardProps={{ nameSeccion: experienceTitle, mode: "full" }}>
          <HorizontalScrollContainer title={experienceTitle} className="py-2 px-4">
            {experiences.map((e) => (
              <ExperienceCard key={e.id} experience={e} />
            ))}
          </HorizontalScrollContainer>
        </Card>

        <Card cardProps={{ nameSeccion: skillsTitle, mode: "full" }}>
          <HorizontalScrollContainer title={skillsTitle} className="py-2 px-4">
            {skillCategories.map((e) => (
              <SkillCard key={e.id} skillCategory={e} />
            ))}
          </HorizontalScrollContainer>
        </Card>
      </div>
      <div className="hidden md:flex flex-col gap-4">
        <Card cardProps={{ nameSeccion: `${experienceTitle} & ${skillsTitle}`, mode: "full" }}>
          <div className="flex flex-col gap-6">
            <HorizontalScrollContainer title={experienceTitle} className="py-2 px-4">
              {experiences.map((e) => (
                <ExperienceCard key={e.id} experience={e} />
              ))}
            </HorizontalScrollContainer>
            <HorizontalScrollContainer title={skillsTitle} className="py-2 px-4">
              {skillCategories.map((e) => (
                <SkillCard key={e.id} skillCategory={e} />
              ))}
            </HorizontalScrollContainer>
          </div>
        </Card>
      </div>
    </div>
  );
}
