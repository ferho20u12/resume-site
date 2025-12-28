import { CategorySkill } from "@src/models/category-skill.model";
import { Skill } from "@src/models/skill.model";

export const CATEGORY_SKILL_DATA_EN: CategorySkill[] = [
  {
    id: 0,
    description: "Programming Languages",
    skills: [
      { id: 1, name: "C#", level: "Intermediate", years: 2 },
      { id: 2, name: "Go (Golang)", level: "Intermediate", years: 1.8 },
      { id: 3, name: "Java", level: "Beginner", years: 0.1, notes: "Spring basics" },
      { id: 4, name: "PHP", level: "Intermediate", years: 1, notes: "Laravel focused" },
      { id: 5, name: "JavaScript", level: "Beginner", years: 0.4, notes: "React basics" }
    ]
  },
  {
    id: 1,
    description: "Backend Development",
    skills: [
      { id: 1, name: ".NET Core", level: "Intermediate", years: 2 },
      { id: 2, name: "Entity Framework", level: "Intermediate", years: 2 },
      { id: 3, name: "Dapper", level: "Intermediate", years: 2 },
      { id: 4, name: "LINQ", level: "Intermediate", years: 2 },
      { id: 5, name: "Spring Boot", level: "Beginner", years: 0.1 },
      { id: 6, name: "Laravel 8", level: "Intermediate", years: 1 }
    ]
  },
  {
    id: 2,
    description: "Web & Frontend",
    skills: [
      { id: 1, name: "HTML5", level: "Intermediate", years: 2 },
      { id: 2, name: "CSS3", level: "Intermediate", years: 2 },
      { id: 3, name: "React", level: "Beginner", years: 0.4, notes: "Hooks & basics" },
      { id: 4, name: "Blade Templates", level: "Intermediate", years: 1 }
    ]
  },
  {
    id: 3,
    description: "Databases & Storage",
    skills: [
      { id: 1, name: "SQL Server", level: "Intermediate", years: 2 },
      { id: 2, name: "MySQL", level: "Intermediate", years: 1 },
      { id: 3, name: "PostgreSQL", level: "Beginner", years: 0.4 }
    ]
  },
  {
    id: 4,
    description: "Tools & DevOps",
    skills: [
      { id: 1, name: "Docker", level: "Intermediate", years: 1.5, notes: "Containerization & deployment" },
      { id: 2, name: "JWT Authentication", level: "Intermediate", years: 1.5 },
      { id: 3, name: "REST API Design", level: "Intermediate", years: 2 }
    ]
  },
  {
    id: 5,
    description: "Architecture & Best Practices",
    skills: [
      { id: 1, name: "Object-Oriented Programming (OOP)", level: "Intermediate"},
      { id: 2, name: "SOLID Principles", level: "Intermediate"},
      { id: 3, name: "12-Factor App", level: "Intermediate"}
    ]
  },
  {
    id: 6,
    description: "Methodologies & Teamwork",
    skills: [
      { id: 1, name: "Agile Development", level: "Intermediate"},
      { id: 2, name: "Scrum", level: "Intermediate"},
      { id: 3, name: "Sprint Planning", level: "Intermediate"}
    ]
  }
];

export const CATEGORY_SKILL_DATA_ES: CategorySkill[] = [
  {
    id: 0,
    description: "Lenguajes de Programación",
    skills: [
      { id: 1, name: "C#", level: "Intermedio", years: 2 },
      { id: 2, name: "Go (Golang)", level: "Intermedio", years: 1.8 },
      { id: 3, name: "Java", level: "Basico", years: 0.1, notes: "Bases de Spring" },
      { id: 4, name: "PHP", level: "Intermedio", years: 1, notes: "Principalmente Laravel" },
      { id: 5, name: "JavaScript", level: "Basico", years: 0.4, notes: "React básico" }
    ]
  },
  {
    id: 1,
    description: "Desarrollo Backend",
    skills: [
      { id: 1, name: ".NET Core", level: "Intermedio", years: 2 },
      { id: 2, name: "Entity Framework", level: "Intermedio", years: 2 },
      { id: 3, name: "Dapper", level: "Intermedio", years: 2 },
      { id: 4, name: "LINQ", level: "Intermedio", years: 2 },
      { id: 5, name: "Spring Boot", level: "Basico", years: 0.1 },
      { id: 6, name: "Laravel 8", level: "Intermedio", years: 1 }
    ]
  },
  {
    id: 2,
    description: "Web y Frontend",
    skills: [
      { id: 1, name: "HTML5", level: "Intermedio", years: 2 },
      { id: 2, name: "CSS3", level: "Intermedio", years: 2 },
      { id: 3, name: "React", level: "Basico", years: 0.4, notes: "Hooks y fundamentos" },
      { id: 4, name: "Blade Templates", level: "Intermedio", years: 1 }
    ]
  },
  {
    id: 3,
    description: "Bases de Datos",
    skills: [
      { id: 1, name: "SQL Server", level: "Intermedio", years: 2 },
      { id: 2, name: "MySQL", level: "Intermedio", years: 1 },
      { id: 3, name: "PostgreSQL", level: "Basico", years: 0.4 }
    ]
  },
  {
    id: 4,
    description: "Herramientas y DevOps",
    skills: [
      { id: 1, name: "Docker", level: "Intermedio", years: 1.5, notes: "Dockerizar y desplegar" },
      { id: 2, name: "Autenticación JWT", level: "Intermedio", years: 1.5 },
      { id: 3, name: "Diseño de APIs REST", level: "Intermedio", years: 2 }
    ]
  },
  {
    id: 5,
    description: "Arquitectura y Buenas Prácticas",
    skills: [
      { id: 1, name: "POO", level: "Intermedio"},
      { id: 2, name: "Principios SOLID", level: "Intermedio"},
      { id: 3, name: "12-Factor App", level: "Intermedio" }
    ]
  },
  {
    id: 6,
    description: "Metodologías y Trabajo en Equipo",
    skills: [
      { id: 1, name: "Desarrollo Ágil", level: "Intermedio"},
      { id: 2, name: "Scrum", level: "Intermedio"},
      { id: 3, name: "Planificación de Sprints", level: "Intermedio"}
    ]
  }
];
