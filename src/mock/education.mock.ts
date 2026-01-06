import { Education } from "@src/models/education.model";

/* ----------------------------------
 * Helpers
 * ---------------------------------- */

export const isCertification = (education: Education): boolean =>
  ["certification", "diploma"].includes(education.type);

/* ----------------------------------
 * Section titles
 * ---------------------------------- */

export const EDUCATION_SECTION_TITLE: Record<string, string> = {
  es: "Educación",
  en: "Education",
};

export const CERTIFICATION_SECTION_TITLE: Record<string, string> = {
  es: "Certificaciones",
  en: "Certifications",
};

/* ----------------------------------
 * Institutions
 * ---------------------------------- */

export enum InstitutionId {
  UDG = "udg",
  PROULEX = "proulex",
  HACKERRANK = "hackerrank",
}

interface InstitutionConfig {
  name: Record<string, string>;
  website?: string;
  logoUrl: string;
}

const INSTITUTIONS: Record<InstitutionId, InstitutionConfig> = {
  [InstitutionId.UDG]: {
    name: {
      es: "Universidad de Guadalajara – CUCEI",
      en: "University of Guadalajara – CUCEI",
    },
    website: "https://www.udg.mx/",
    logoUrl: "/img/educations/universidad-de-guadalajara.jpg",
  },

  [InstitutionId.PROULEX]: {
    name: {
      es: "PROULEX – Universidad de Guadalajara",
      en: "PROULEX – University of Guadalajara",
    },
    website: "https://www.cursosproulex.com/",
    logoUrl: "/img/educations/proulex.jpg",
  },

  [InstitutionId.HACKERRANK]: {
    name: {
      es: "HackerRank",
      en: "HackerRank",
    },
    logoUrl: "/img/educations/hackerrank.jpg",
  },
};

const getInstitution = (id: InstitutionId, lang: string) => ({
  name: INSTITUTIONS[id].name[lang],
  website: INSTITUTIONS[id].website,
  logoUrl: INSTITUTIONS[id].logoUrl,
});

/* ----------------------------------
 * Certification links
 * ---------------------------------- */

const CERTIFICATIONS = {
  GO: "https://www.hackerrank.com/certificates/bbee24fa48dd",
  SQL: "https://www.hackerrank.com/certificates/65e5daf51507",
};

/* ----------------------------------
 * Data
 * ---------------------------------- */

export const EDUCATION_DATA: Record<string, Education[]> = {
  es: [
    {
      id: 1,
      title: "Ingeniería en Computación",
      type: "degree",
      institution: getInstitution(InstitutionId.UDG, "es"),
      period: {
        startDate: new Date("2019-01-01"),
        endDate: new Date("2023-12-31"),
      },
      description:
        "Formación académica enfocada en desarrollo de software, estructuras de datos, bases de datos y arquitectura de sistemas.",
    },

    {
      id: 2,
      title: "Certificación en Go (Golang)",
      type: "certification",
      institution: {
        ...getInstitution(InstitutionId.HACKERRANK, "es"),
        website: CERTIFICATIONS.GO,
      },
      period: {
        startDate: new Date("2024-08-04"),
      },
      description:
        "Evaluación técnica de habilidades en programación con Go, incluyendo lógica, concurrencia y buenas prácticas.",
    },

    {
      id: 3,
      title: "Certificación en SQL",
      type: "certification",
      institution: {
        ...getInstitution(InstitutionId.HACKERRANK, "es"),
        website: CERTIFICATIONS.SQL,
      },
      period: {
        startDate: new Date("2024-08-30"),
      },
      description:
        "Certificación orientada a consultas SQL, modelado de datos y manejo de bases de datos relacionales.",
    },

    {
      id: 4,
      title: "Programa de Lenguas Extranjeras – Inglés",
      type: "course",
      institution: getInstitution(InstitutionId.PROULEX, "es"),
      period: {
        startDate: new Date("2025-10-15"),
      },
      description:
        "Estudios actuales de inglés con énfasis en comprensión lectora, expresión oral y comunicación escrita.",
    },
  ],

  en: [
    {
      id: 1,
      title: "Bachelor’s Degree in Computer Engineering",
      type: "degree",
      institution: getInstitution(InstitutionId.UDG, "en"),
      period: {
        startDate: new Date("2019-01-01"),
        endDate: new Date("2023-12-31"),
      },
      description:
        "Academic training focused on software development, data structures, databases, and system architecture.",
    },

    {
      id: 2,
      title: "Go (Golang) Certification",
      type: "certification",
      institution: {
        ...getInstitution(InstitutionId.HACKERRANK, "en"),
        website: CERTIFICATIONS.GO,
      },
      period: {
        startDate: new Date("2024-08-04"),
      },
      description:
        "Technical assessment of Go programming skills, including logic, concurrency, and best practices.",
    },

    {
      id: 3,
      title: "SQL Certification",
      type: "certification",
      institution: {
        ...getInstitution(InstitutionId.HACKERRANK, "en"),
        website: CERTIFICATIONS.SQL,
      },
      period: {
        startDate: new Date("2024-08-30"),
      },
      description:
        "Certification focused on SQL queries, data modeling, and relational database management.",
    },

    {
      id: 4,
      title: "Foreign Languages Program – English",
      type: "course",
      institution: getInstitution(InstitutionId.PROULEX, "en"),
      period: {
        startDate: new Date("2025-10-15"),
      },
      description:
        "Currently studying English with a focus on reading, writing, listening, and speaking skills.",
    },
  ],
};

export default EDUCATION_DATA;
