import { Experience } from "@src/models/experience.model";

export enum CompanyId { CFE="cfe",ND="nd",FMG="fmg",SN="sn" }


type TimeKey="start"|"end";

interface CompanyTime{start:Date;end?:Date;}
interface CompanyMeta{name:string,logo:string;link:string;time:CompanyTime;}

export const COMPANY_LINK_TITLE:Record<string,string>={es:"Sitio web de la compañía",en:"Company website"};
export const EXPERIENCE_SECTION_TITLE:Record<string,string>={en:"Experience",es:"Experiencia"};
export const EXPERIENCE_SECTION_CURRENT_TITLE:Record<string,string>={en:"Present",es:"Actualmente"};

const COMPANIES:Record<CompanyId,CompanyMeta>={
  [CompanyId.CFE]:{name:"Comisión Federal de Electricidad", logo:"/img/companies/comision-federal-de-electricidad.jpg",link:"https://www.cfe.gob.mx/",time:{start:new Date("2023-03-01"),end:new Date("2023-09-01")}},
  [CompanyId.ND]:{name:"Núcleo de Diagnóstico",logo:"/img/companies/nucleo-de-diagnostico.jpg",link:"https://www.nucleodediagnostico.mx/",time:{start:new Date("2023-10-15"),end:new Date("2025-08-01")}},
  [CompanyId.SN]:{name:"Septimo Numen",logo:"",link:"http://septimonumen.com/",time:{start:new Date("2025-11-10"),end:new Date("2025-12-11")}},
  [CompanyId.FMG]:{name:"Farmacias Guadalajara",logo:"/img/companies/farmacias-guadalajara.jpg",link:"https://www.farmaciasguadalajara.com/",time:{start:new Date("2025-12-15")}}
};

const getName=(id:CompanyId)=>COMPANIES[id].name;
const getLogo=(id:CompanyId)=>COMPANIES[id].logo||null;
const getLink=(id:CompanyId)=>COMPANIES[id].link||null;
const getTime=(id:CompanyId,key:TimeKey):Date|null=>COMPANIES[id].time[key]??null;

export const EXPERIENCE_DATA:Record<string,Experience[]>={
  en:[
    {
      id:1,
      companyName:getName(CompanyId.FMG),
      companyLink:getLink(CompanyId.FMG),
      logoUrl:getLogo(CompanyId.FMG),
      position:"Junior Programmer (PEI)",
      startDate:getTime(CompanyId.FMG,"start")!,
      endDate:getTime(CompanyId.FMG,"end"),
      location:"Guadalajara, Jalisco, Mexico",
      description:`
        <p>
          Worked as a <strong>Junior Programmer</strong> in the development and maintenance of
          <strong>enterprise applications using Java</strong>.
        </p>
        <ul>
          <li>Developed <strong>features and functionalities in Java</strong></li>
          <li>Collaborated in <strong>project tasks and team-based development</strong></li>
          <li><strong>Full-time onsite</strong> experience in a corporate environment</li>
        </ul>
      `
    },
    {
      id:2,
      companyName:getName(CompanyId.SN),
      companyLink:getLink(CompanyId.SN),
      logoUrl:getLogo(CompanyId.SN),
      position:"Junior Developer",
      startDate:getTime(CompanyId.SN,"start")!,
      endDate:getTime(CompanyId.SN,"end"),
      location:"Guadalajara, Jalisco, Mexico",
      description:`
        <p>
          Collaborated as a <strong>Junior Developer</strong> in the development and maintenance of
          <strong>enterprise applications using .NET technologies</strong>.
        </p>
        <ul>
          <li>Developed functionalities in <strong>C# and .NET</strong></li>
          <li>Worked with <strong>Razor Pages</strong> and <strong>MVC pattern</strong></li>
          <li>Assisted in consuming and understanding <strong>REST APIs</strong></li>
          <li>Used <strong>Visual Studio</strong> as the main development environment</li>
          <li>Supported <strong>basic SQL queries and business logic</strong></li>
        </ul>
      `
    },
    {
      id:3,
      companyName:getName(CompanyId.ND),
      companyLink:getLink(CompanyId.ND),
      logoUrl:getLogo(CompanyId.ND),
      position:"Junior Analyst Developer",
      startDate:getTime(CompanyId.ND,"start")!,
      endDate:getTime(CompanyId.ND,"end"),
      location:"Guadalajara, Jalisco, Mexico",
      description:`
        <p>
          Participated in the development, maintenance, and support of
          <strong>enterprise systems</strong>, collaborating across
          <strong>backend, databases, containers, and technical documentation</strong>.
        </p>
        <ul>
          <li>Developed and maintained <strong>backend endpoints</strong> and <strong>authentication systems</strong> using <strong>Golang</strong></li>
          <li>Implemented <strong>automated email routines</strong> based on business workflows</li>
          <li>Documented <strong>REST APIs</strong> using <strong>Swagger</strong> and <strong>Postman</strong></li>
          <li>Deployed and managed <strong>Docker containers</strong> in <strong>production environments</strong></li>
          <li>Designed and maintained <strong>database structures</strong> ensuring <strong>integrity and performance</strong></li>
          <li>Developed <strong>desktop applications in .NET Core</strong></li>
          <li>Collaborated with <strong>stakeholders</strong> to define <strong>system architecture</strong></li>
          <li><strong>Led mobile (React Native) and web projects</strong> temporarily</li>
          <li>Maintained <strong>legacy systems</strong>, fixing bugs and improving functionality</li>
          <li>Prepared <strong>technical documentation and reports</strong></li>
        </ul>
      `
    },
    {
      id:4,
      companyName:getName(CompanyId.CFE),
      companyLink:getLink(CompanyId.CFE),
      logoUrl:getLogo(CompanyId.CFE),
      position:"Computer Engineering Intern",
      startDate:getTime(CompanyId.CFE,"start")!,
      endDate:getTime(CompanyId.CFE,"end"),
      location:"Guadalajara, Jalisco, Mexico",
      description:`
        <p>
          Participated in the <strong>Repository Update and Modification program</strong>,
          collaborating in <strong>software development and maintenance tasks</strong>.
        </p>
        <ul>
          <li>Updated and <strong>refactored code repositories</strong></li>
          <li>Maintained <strong>version control</strong> and managed changes</li>
          <li>Improved <strong>project structure and organization</strong></li>
          <li>Applied <strong>software development best practices</strong></li>
          <li>Coordinated work with <strong>technical teams</strong> in an institutional environment</li>
        </ul>
      `
    }
  ],
  es:[
    {
      id:1,
      companyName:getName(CompanyId.FMG),
      companyLink:getLink(CompanyId.FMG),
      logoUrl:getLogo(CompanyId.FMG),
      position:"Programador Junior (PEI)",
      startDate:getTime(CompanyId.FMG,"start")!,
      endDate:getTime(CompanyId.FMG,"end"),
      location:"Guadalajara, Jalisco, México",
      description:`
        <p>
          Colaboré como <strong>Programador Junior</strong> en el desarrollo y mantenimiento de
          <strong>aplicaciones empresariales en Java</strong>.
        </p>
        <ul>
          <li>Desarrollo de <strong>funcionalidades en Java</strong></li>
          <li>Colaboración en <strong>tareas de proyecto y trabajo en equipo</strong></li>
          <li>Experiencia <strong>presencial de tiempo completo</strong></li>
        </ul>
      `
    },
    {
      id:2,
      companyName:getName(CompanyId.SN),
      companyLink:getLink(CompanyId.SN),
      logoUrl:getLogo(CompanyId.SN),
      position:"Desarrollador Jr",
      startDate:getTime(CompanyId.SN,"start")!,
      endDate:getTime(CompanyId.SN,"end"),
      location:"Guadalajara, Jalisco, México",
      description:`
        <p>
          Colaboré como <strong>Desarrollador Jr.</strong> en el desarrollo y mantenimiento de
          <strong>aplicaciones empresariales con tecnologías .NET</strong>.
        </p>
        <ul>
          <li>Desarrollo de funcionalidades en <strong>C# y .NET</strong></li>
          <li>Uso de <strong>Razor Pages</strong> y patrón <strong>MVC</strong></li>
          <li>Consumo y comprensión de <strong>APIs REST</strong></li>
          <li>Uso de <strong>Visual Studio</strong> como entorno de desarrollo</li>
          <li>Soporte en <strong>consultas SQL básicas y lógica de negocio</strong></li>
        </ul>
      `
    },
    {
      id:3,
      companyName:getName(CompanyId.ND),
      companyLink:getLink(CompanyId.ND),
      logoUrl:getLogo(CompanyId.ND),
      position:"Desarrollador Analista Junior",
      startDate:getTime(CompanyId.ND,"start")!,
      endDate:getTime(CompanyId.ND,"end"),
      location:"Guadalajara, Jalisco, México",
      description:`
        <p>
          Participé en el desarrollo, mantenimiento y soporte de
          <strong>sistemas empresariales</strong>, colaborando en
          <strong>backend, bases de datos, contenedores y documentación técnica</strong>.
        </p>
        <ul>
          <li>Desarrollo y mantenimiento de <strong>endpoints backend</strong> y <strong>sistemas de autenticación</strong> con <strong>Golang</strong></li>
          <li>Implementación de <strong>automatización de correos</strong> basada en flujos de negocio</li>
          <li>Documentación de <strong>APIs REST</strong> con <strong>Swagger</strong> y <strong>Postman</strong></li>
          <li>Despliegue y administración de <strong>Docker en producción</strong></li>
          <li>Diseño y mantenimiento de <strong>estructuras de bases de datos</strong></li>
          <li>Desarrollo de <strong>aplicaciones de escritorio en .NET Core</strong></li>
          <li>Liderazgo <strong>temporal</strong> en proyectos móviles y web</li>
          <li>Mantenimiento de <strong>sistemas legacy</strong></li>
          <li>Elaboración de <strong>documentación técnica</strong></li>
        </ul>
      `
    },
    {
      id:4,
      companyName:getName(CompanyId.CFE),
      companyLink:getLink(CompanyId.CFE),
      logoUrl:getLogo(CompanyId.CFE),
      position:"Practicante de Ingeniería en Computación",
      startDate:getTime(CompanyId.CFE,"start")!,
      endDate:getTime(CompanyId.CFE,"end"),
      location:"Guadalajara, Jalisco, México",
      description:`
        <p>
          Participé en el programa de <strong>actualización y modificación de repositorios</strong>,
          colaborando en <strong>tareas de desarrollo y mantenimiento de software</strong>.
        </p>
        <ul>
          <li><strong>Refactorización de código</strong></li>
          <li><strong>Control de versiones</strong> y gestión de cambios</li>
          <li>Mejora de la <strong>organización de proyectos</strong></li>
          <li>Aplicación de <strong>buenas prácticas de desarrollo</strong></li>
          <li>Trabajo coordinado con <strong>equipos técnicos</strong></li>
        </ul>
      `
    }
  ]

};

export default EXPERIENCE_DATA;
