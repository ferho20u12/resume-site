import { Project } from "@src/models/project.model";

export const PROJECT_SECTION_TITLE: Record<string, string> = {
    es: "Proyectos destacados",
    en: "Featured Projects",
};

export const PROJECT_CTA_LABEL: Record<string, string> = {
  es: "Ver sitio",
  en: "View project",
};

export const PROJECT_ROLE_LABEL: Record<string, string> = {
  es: "Rol",
  en: "Role",
};

export const PROJECT_DATA: Record<string, Project[]> = {
  es: [
    {
      id: 1,
      title: "Carpintería Romo",
      role: "Desarrollador Frontend",
      stack: ["React", "JavaScript", "Tailwind CSS", "Render"],
      description:
        "Sitio web desarrollado para un negocio familiar de carpintería. La aplicación presenta el catálogo de productos, información del negocio y un medio de contacto directo con los dueños. Fui responsable del diseño, desarrollo y despliegue completo del proyecto.",
      imageUrl: "/img/projects/carpinteria-romo.jpg",
      siteUrl: "https://carpentry-site.onrender.com/",
    },
    {
      id: 2,
      title: "REST API de Resultados Médicos",
      role: "Desarrollador Backend",
      stack: ["Go (Golang)", "Docker", "REST API"],
      description:
        "API RESTful desarrollada durante mi experiencia laboral previa. Permite la consulta de resultados de pacientes, estudios médicos y sucursales. Me encargué del diseño e implementación de los endpoints y de la generación de archivos consumidos por un servicio externo para un chatbot.",
      imageUrl: "/img/projects/api-restful.jpg",
      siteUrl: "https://www.nucleodediagnostico.mx/",
    },
  ],

  en: [
    {
      id: 1,
      title: "Carpintería Romo",
      role: "Frontend Developer",
      stack: ["React", "JavaScript", "Tailwind CSS", "Render"],
      description:
        "Website developed for a family-owned carpentry business. The application displays the product catalog, business information, and provides direct contact with the owners. I was responsible for the full design, development, and deployment of the project.",
      imageUrl: "/img/projects/carpinteria-romo.jpg",
      siteUrl: "https://carpentry-site.onrender.com/",
    },
    {
      id: 2,
      title: "Medical Results REST API",
      role: "Backend Developer",
      stack: ["Go (Golang)", "Docker", "REST API"],
      description:
        "RESTful API developed during my previous role. The API provides access to patient results, medical studies, and branch information. I designed and implemented the endpoints and generated files later consumed by a third-party chatbot service.",
      imageUrl: "/img/projects/api-restful.jpg",
      siteUrl: "https://www.nucleodediagnostico.mx/",
    },
  ],
};

export default PROJECT_DATA;
