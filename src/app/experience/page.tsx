"use client";

import { useEffect, useState } from "react";
import { EXPERIENCE_DATA, EXPERIENCE_SECTION_TITLE } from "@src/mock/experience.mock";
import { SKILL_CATEGORIES_DATA, SKILL_SECTION_TITLE } from "@src/mock/skill.mock";
import { DEFAULT_LANGUAGE } from "@src/configuration/languages.config";
import { getPreferredLang } from "@src/utils/language";

import ResponsiveSectionCard from "@src/shared/components/ResponsiveSectionCard";
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

  const sections = [
    {
      key: "experience",
      title: experienceTitle,
      content: experiences.map(e => (
        <ExperienceCard key={e.id} experience={e} />
      )),
    },
    {
      key: "skills",
      title: skillsTitle,
      content: skillCategories.map(e => (
        <SkillCard key={e.id} skillCategory={e} />
      )),
    },
  ];

  return (
    <ResponsiveSectionCard
      mobileSections={sections}
      desktopCard={{
        title: `${experienceTitle} & ${skillsTitle}`,
        sections,
      }}
    />
  );

}
