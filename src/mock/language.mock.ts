import { Language } from "@src/models/language.model";

export const LANGUAGE_SECTION_TITLE: Record<string, string> = {
  es: "Idiomas y Nivel",
  en: "Languages & Proficiency",
};

export const LANGUAGE_DATA: Record<string, Language[]> = {
  en: [
    {
      id: 1,
      code: "es",
      name: "Spanish",
      level: {
        label : "Native",
        proficiency: "native",
        description: "Native speaker",
      },
    },
    {
      id: 2,
      code: "en",
      name: "English",
      level: {
        label : "Intermediate",
        proficiency: "intermediate",
        description: "Currently studying (PROULEX – B1 level)",
      },
    },
  ],

  es: [
    {
      id: 1,
      code: "es",
      name: "Español",
      level: {
        label: "Nativo",
        proficiency: "native",
        description: "Lengua materna",
      },
    },
    {
      id: 2,
      code: "en",
      name: "Inglés",
      level: {
        label: "Intermedio",
        proficiency: "intermediate",
        description: "Actualmente en estudio (PROULEX – nivel B1)",
      },
    },
  ],
};

export default LANGUAGE_DATA;