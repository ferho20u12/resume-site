import { SkillCategory } from "@src/models/skill.model";

export const SKILL_SECTION_TITLE: Record<string, string> = {
  en: "Skills & Expertise",
  es: "Conocimientos y Habilidades"
};

export const SKILL_CATEGORIES_DATA : Record<string, SkillCategory[]> ={
  es:[
    {
      id: 0,
      name: "Lenguajes de Programación",
      skills: [
        { id: 1, name: "C#", proficiency: "Intermedio", experienceYears: 2 },
        { id: 2, name: "Go (Golang)", proficiency: "Intermedio", experienceYears: 1.8 },
        { id: 3, name: "Java", proficiency: "Principiante", experienceYears: 0.1, details: "Conceptos básicos de Spring" },
        { id: 4, name: "PHP", proficiency: "Intermedio", experienceYears: 1, details: "Enfocado en Laravel" },
        { id: 5, name: "JavaScript", proficiency: "Principiante", experienceYears: 0.4, details: "Conceptos básicos de React" }
      ]
    },
    {
      id: 1,
      name: "Desarrollo Backend",
      skills: [
        { id: 1, name: ".NET Core", proficiency: "Intermedio", experienceYears: 2 },
        { id: 2, name: "Entity Framework", proficiency: "Intermedio", experienceYears: 2 },
        { id: 3, name: "Dapper", proficiency: "Intermedio", experienceYears: 2 },
        { id: 4, name: "LINQ", proficiency: "Intermedio", experienceYears: 2 },
        { id: 5, name: "Spring Boot", proficiency: "Principiante", experienceYears: 0.1 },
        { id: 6, name: "Laravel 8", proficiency: "Intermedio", experienceYears: 1 }
      ]
    },
    {
      id: 2,
      name: "Web y Frontend",
      skills: [
        { id: 1, name: "HTML5", proficiency: "Intermedio", experienceYears: 2 },
        { id: 2, name: "CSS3", proficiency: "Intermedio", experienceYears: 2 },
        { id: 3, name: "React", proficiency: "Principiante", experienceYears: 0.4, details: "Hooks y conceptos básicos" },
        { id: 4, name: "Blade Templates", proficiency: "Intermedio", experienceYears: 1 }
      ]
    },
    {
      id: 3,
      name: "Bases de Datos y Almacenamiento",
      skills: [
        { id: 1, name: "SQL Server", proficiency: "Intermedio", experienceYears: 2 },
        { id: 2, name: "MySQL", proficiency: "Intermedio", experienceYears: 1 },
        { id: 3, name: "PostgreSQL", proficiency: "Principiante", experienceYears: 0.4 }
      ]
    },
    {
      id: 4,
      name: "Herramientas y DevOps",
      skills: [
        { id: 1, name: "Docker", proficiency: "Intermedio", experienceYears: 1.5, details: "Containerización y despliegue" },
        { id: 2, name: "JWT Authentication", proficiency: "Intermedio", experienceYears: 1.5 },
        { id: 3, name: "Diseño de API REST", proficiency: "Intermedio", experienceYears: 2 }
      ]
    },
    {
      id: 5,
      name: "Arquitectura y Buenas Prácticas",
      skills: [
        { id: 1, name: "Programación Orientada a Objetos (OOP)", proficiency: "Intermedio" },
        { id: 2, name: "Principios SOLID", proficiency: "Intermedio" },
        { id: 3, name: "12-Factor App", proficiency: "Intermedio" }
      ]
    },
    {
      id: 6,
      name: "Metodologías y Trabajo en Equipo",
      skills: [
        { id: 1, name: "Desarrollo Ágil", proficiency: "Intermedio" },
        { id: 2, name: "Scrum", proficiency: "Intermedio" },
        { id: 3, name: "Planificación de Sprint", proficiency: "Intermedio" }
      ]
    }
  ],
  en:[
    {
      id: 0,
      name: "Programming Languages",
      skills: [
        { id: 1, name: "C#", proficiency: "Intermediate", experienceYears: 2 },
        { id: 2, name: "Go (Golang)", proficiency: "Intermediate", experienceYears: 1.8 },
        { id: 3, name: "Java", proficiency: "Beginner", experienceYears: 0.1, details: "Spring basics" },
        { id: 4, name: "PHP", proficiency: "Intermediate", experienceYears: 1, details: "Laravel focused" },
        { id: 5, name: "JavaScript", proficiency: "Beginner", experienceYears: 0.4, details: "React basics" }
      ]
    },
    {
      id: 1,
      name: "Backend Development",
      skills: [
        { id: 1, name: ".NET Core", proficiency: "Intermediate", experienceYears: 2 },
        { id: 2, name: "Entity Framework", proficiency: "Intermediate", experienceYears: 2 },
        { id: 3, name: "Dapper", proficiency: "Intermediate", experienceYears: 2 },
        { id: 4, name: "LINQ", proficiency: "Intermediate", experienceYears: 2 },
        { id: 5, name: "Spring Boot", proficiency: "Beginner", experienceYears: 0.1 },
        { id: 6, name: "Laravel 8", proficiency: "Intermediate", experienceYears: 1 }
      ]
    },
    {
      id: 2,
      name: "Web & Frontend",
      skills: [
        { id: 1, name: "HTML5", proficiency: "Intermediate", experienceYears: 2 },
        { id: 2, name: "CSS3", proficiency: "Intermediate", experienceYears: 2 },
        { id: 3, name: "React", proficiency: "Beginner", experienceYears: 0.4, details: "Hooks & basics" },
        { id: 4, name: "Blade Templates", proficiency: "Intermediate", experienceYears: 1 }
      ]
    },
    {
      id: 3,
      name: "Databases & Storage",
      skills: [
        { id: 1, name: "SQL Server", proficiency: "Intermediate", experienceYears: 2 },
        { id: 2, name: "MySQL", proficiency: "Intermediate", experienceYears: 1 },
        { id: 3, name: "PostgreSQL", proficiency: "Beginner", experienceYears: 0.4 }
      ]
    },
    {
      id: 4,
      name: "Tools & DevOps",
      skills: [
        { id: 1, name: "Docker", proficiency: "Intermediate", experienceYears: 1.5, details: "Containerization & deployment" },
        { id: 2, name: "JWT Authentication", proficiency: "Intermediate", experienceYears: 1.5 },
        { id: 3, name: "REST API Design", proficiency: "Intermediate", experienceYears: 2 }
      ]
    },
    {
      id: 5,
      name: "Architecture & Best Practices",
      skills: [
        { id: 1, name: "Object-Oriented Programming (OOP)", proficiency: "Intermediate" },
        { id: 2, name: "SOLID Principles", proficiency: "Intermediate" },
        { id: 3, name: "12-Factor App", proficiency: "Intermediate" }
      ]
    },
    {
      id: 6,
      name: "Methodologies & Teamwork",
      skills: [
        { id: 1, name: "Agile Development", proficiency: "Intermediate" },
        { id: 2, name: "Scrum", proficiency: "Intermediate" },
        { id: 3, name: "Sprint Planning", proficiency: "Intermediate" }
      ]
    }
  ],
};
export default SKILL_CATEGORIES_DATA;