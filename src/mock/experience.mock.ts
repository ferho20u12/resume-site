import { Experience } from "@src/models/experience.model";

export enum CompanyId {
  CFE = "cfe", // COMISION FEDERAL DE ELECTRICIDAD
  ND = "nd", // NUCLEO DE DIAGNOSTICO
  FMG = "fmg", // FARMACIAS GUADALAJAR
  SN = "sn", // SEPTIMO NUMEN
}

const COMPANIES_LOGOS: Record<CompanyId, string> = {
  [CompanyId.CFE]: "/img/companies/comision-federal-de-electricidad.jpg",
  [CompanyId.ND]:  "/img/companies/nucleo-de-diagnostico.jpg",
  [CompanyId.FMG]: "/img/companies/farmacias-guadalajara.jpg",
  [CompanyId.SN]:  "",
};

const COMPANIES_LINKS: Record<CompanyId, string> = {
  [CompanyId.CFE]: "https://www.cfe.gob.mx/",
  [CompanyId.ND]:  "https://www.nucleodediagnostico.mx/",
  [CompanyId.FMG]: "https://www.farmaciasguadalajara.com/",
  [CompanyId.SN]:  "http://septimonumen.com/",
};

const getLogo = (companyId: CompanyId) => COMPANIES_LOGOS[companyId] || null;
const getLink = (companyId: CompanyId) => COMPANIES_LINKS[companyId] || null;

export const EXPERIENCE_TITLE: Record<string, string> = {
    en : "Experience",
    es : "Experiencia",
}

export const EXPERIENCE_DATA: Record<string, Experience[]> = {
  en: [
    {
      id: 1,
      companyName: "Farmacias Guadalajara",
      companyLink: getLink(CompanyId.FMG),
      logoUrl: getLogo(CompanyId.FMG),
      position: "Junior Programmer (PEI)",
      startDate: new Date("2025-12-01"),
      endDate: null, 
      location: "Guadalajara, Jalisco, Mexico",
      description: `Worked as a Junior Programmer in the development and maintenance of enterprise applications using Java.

- Developed features and functionalities in Java
- Collaborated in project tasks
- Full-time onsite`
    },
    {
      id: 2,
      companyName: "Septimo Numen",
      companyLink: getLink(CompanyId.SN),
      logoUrl: getLogo(CompanyId.SN),
      position: "Junior Developer",
      startDate: new Date("2025-11-01"),
      endDate: new Date("2025-12-31"),
      location: "Guadalajara, Jalisco, Mexico",
      description: `Collaborated as a Junior Developer in the development and maintenance of enterprise applications using .NET technologies.

- Developed functionalities in C# and .NET
- Worked with Razor Pages and MVC pattern
- Assisted in consuming and understanding REST APIs
- Used Visual Studio as the development environment
- Supported basic SQL queries and logic`
    },
    {
      id: 3,
      companyName: "Núcleo de Diagnóstico",
      companyLink: getLink(CompanyId.ND),
      logoUrl: getLogo(CompanyId.ND),
      position: "Junior Analyst Developer",
      startDate: new Date("2023-10-01"),
      endDate: new Date("2025-07-31"),
      location: "Guadalajara, Jalisco, Mexico",
      description: `Participated in the development, maintenance, and support of enterprise systems, collaborating in backend, databases, containers, and technical documentation.

- Developed and maintained backend endpoints and authentication systems using Golang
- Implemented automated email routines based on business workflows
- Documented REST APIs using Swagger and Postman
- Deployed and managed Docker containers in production environments
- Designed and maintained database structures ensuring integrity and performance
- Developed desktop applications in .NET Core (frontend and backend)
- Collaborated with stakeholders to define system architecture and technical requirements
- Temporarily led mobile (React Native) and web application projects
- Maintained legacy systems, fixing bugs and improving functionalities
- Prepared technical reports and documentation`
    },
    {
      id: 4,
      companyName: "Federal Electricity Commission",
      companyLink: getLink(CompanyId.CFE),
      logoUrl: getLogo(CompanyId.CFE),
      position: "Computer Engineering Intern",
      startDate: new Date("2023-03-01"),
      endDate: new Date("2023-09-30"),
      location: "Guadalajara, Jalisco, Mexico",
      description: `Participated in the Repository Update and Modification program, collaborating in software development and maintenance tasks.

- Updated and refactored code repositories
- Maintained version control and managed changes
- Assisted in project structure and organization improvements
- Applied best practices in development and technical documentation
- Coordinated work with technical teams in an institutional environment`
    }
  ],
  es: [
    {
      id: 1,
      companyName: "Farmacias Guadalajara",
      companyLink: getLink(CompanyId.FMG),
      logoUrl: getLogo(CompanyId.FMG),
      position: "Programador Junior (PEI)",
      startDate: new Date("2025-12-01"),
      endDate: null,
      location: "Guadalajara, Jalisco, México",
      description: `Colaboré como Programador Junior en el desarrollo y mantenimiento de aplicaciones empresariales utilizando Java.

- Desarrollo de funcionalidades en Java
- Colaboración en tareas de proyecto
- Jornada completa presencial`
    },
    {
      id: 2,
      companyName: "Septimo Numen",
      companyLink: getLink(CompanyId.SN),
      logoUrl: getLogo(CompanyId.SN),
      position: "Desarrollador Jr",
      startDate: new Date("2025-11-01"),
      endDate: new Date("2025-12-31"),
      location: "Guadalajara, Jalisco, México",
      description: `Colaboré como Desarrollador Jr. en el desarrollo y mantenimiento de aplicaciones empresariales utilizando tecnologías .NET.

- Desarrollo de funcionalidades en C# y .NET
- Uso de Razor Pages y patrón MVC
- Apoyo en consumo y comprensión de APIs REST
- Uso de Visual Studio como entorno de desarrollo
- Soporte en consultas y lógica básica con SQL`
    },
    {
      id: 3,
      companyName: "Núcleo de Diagnóstico",
      companyLink: getLink(CompanyId.ND),
      logoUrl: getLogo(CompanyId.ND),
      position: "Desarrollador Analista Junior",
      startDate: new Date("2023-10-01"),
      endDate: new Date("2025-07-31"),
      location: "Guadalajara, Jalisco, México",
      description: `Participé en el desarrollo, mantenimiento y soporte de sistemas empresariales, colaborando en backend, bases de datos, contenedores y documentación técnica.

- Desarrollo y mantenimiento de endpoints backend y sistemas de autenticación utilizando Golang
- Implementación de rutinas automatizadas de envío de correos basadas en flujos de negocio
- Documentación de APIs REST utilizando Swagger y Postman
- Despliegue y administración de contenedores Docker en entornos productivos
- Diseño y mantenimiento de estructuras de base de datos, asegurando integridad y rendimiento
- Desarrollo de aplicación de escritorio en .NET Core, abarcando frontend y backend
- Colaboración con stakeholders para definir arquitectura de sistemas y requerimientos técnicos
- Liderazgo temporal en proyectos de aplicaciones móviles (React Native) y aplicaciones web
- Soporte y mantenimiento a sistemas legacy, corrigiendo errores y mejorando funcionalidades
- Elaboración de reportes técnicos y documentación`
    },
    {
      id: 4,
      companyName: "Comisión Federal de Electricidad",
      companyLink: getLink(CompanyId.CFE),
      logoUrl: getLogo(CompanyId.CFE),
      position: "Practicante de Ingeniería en Computación",
      startDate: new Date("2023-03-01"),
      endDate: new Date("2023-09-30"),
      location: "Guadalajara, Jalisco, México",
      description: `Participé en el programa de Actualización y Modificación de Repositorios, colaborando en tareas de desarrollo y mantenimiento de software.

- Actualización y refactorización de repositorios de código
- Mantenimiento de versiones y control de cambios
- Apoyo en mejoras de estructura y organización de proyectos
- Uso de buenas prácticas de desarrollo y documentación técnica
- Trabajo coordinado con equipos técnicos en un entorno institucional`
    }
  ]
};

export default EXPERIENCE_DATA;
