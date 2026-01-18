"use client";

import { useEffect, useMemo, useState } from "react";
import {
  EDUCATION_DATA,
  EDUCATION_SECTION_TITLE,
  CERTIFICATION_SECTION_TITLE,
  isCertification,
} from "@src/mock/education.mock";
import {LANGUAGE_DATA, LANGUAGE_SECTION_TITLE} from "@src/mock/language.mock"

import { DEFAULT_LANGUAGE } from "@src/configuration/languages.config";
import { getPreferredLang } from "@src/utils/language";

import ResponsiveSectionCard from "@src/shared/components/ResponsiveSectionCard";
import LanguageCard from "./LanguageCard";
import CertificationCard from "./CertificationCard";
import EducationCard from "./EducationCard";

export default function EducationPage() {
  const [lang, setLang] = useState(DEFAULT_LANGUAGE);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setLang(getPreferredLang());
  }, []);

  
  const educationData = useMemo(() => EDUCATION_DATA[lang], [lang]);
  const languageData = useMemo(()=> LANGUAGE_DATA[lang],[lang]);
  const { academicEducation, certifications } = useMemo(() => {
    return {
      academicEducation: educationData.filter(e => !isCertification(e)),
      certifications: educationData.filter(isCertification),
    };
  }, [educationData]);

  if (!mounted) return null;

  const educationTitle = EDUCATION_SECTION_TITLE[lang];
  const languageTitle = LANGUAGE_SECTION_TITLE[lang];
  const certificationTitle = CERTIFICATION_SECTION_TITLE[lang];

  const sections = [
    {
      key: "education",
      title: educationTitle,
      content: academicEducation.map(item => (
        <EducationCard key={item.id} education={item} />
      )),
    },
    {
      key : "language",
      title: languageTitle,
      content: languageData.map(item => (
        <LanguageCard key={item.id} language={item}/>
      )),
    },
    {
      key: "certifications",
      title: certificationTitle,
      content: certifications.map(item => (
        <CertificationCard key={item.id} education={item} />
      )),
    },
  ];

  return (
    <ResponsiveSectionCard
      mobileSections={sections}
      desktopCard={{
        title: `${educationTitle} & ${languageTitle} & ${certificationTitle}`,
        sections,
      }}
    />
  );
}
