import { Profile, Location } from "@src/models/profile.model";
import { SocialLink} from "@src/models/social-link.model";

const PROFILE_BIRTH_DATE : Date = new Date("2000-08-25");
const PROFILE_AVATAR_URL : string = "/img/profile/avatar-logo.jpg";

const PROFILE_COVER_MEDIA_BY_THEME: Record<string, string> = {
    // light: "/video/profile-cover-light.webm",
    light: "https://cdn.pixabay.com/video/2025/09/26/306487_large.mp4",
    // dark: "/video/profile-cover-dark.webm",
    dark:"https://cdn.pixabay.com/video/2025/07/22/292830_large.mp4"
  };
const PROFILE_SOCIAL_LINKS: SocialLink[] = [
    {
      platform: "github", 
      url: "https://github.com/ferho20u12", 
      iconName: "mdi:github",
      visibility : {
        profile: false,
        footer: true
      }
    },
    {
      platform: "linkedin", 
      url: "https://www.linkedin.com/in/fernando-gromo/", 
      iconName: "mdi:linkedin",
      visibility : {
        profile: false,
        footer: true
      }
    },
    {
      platform: "whatsapp", 
      url: "https://wa.me/523317466638", 
      iconName: "mingcute:whatsapp-line",
      visibility : {
        profile: false,
        footer: true
      }
    },
    {
      platform: "phone", 
      url: "tel:+523317466638", 
      iconName: "fluent:person-call-20-regular",
      visibility : {
        profile: true,
        footer: false
      }
    },
    {
      platform: "email", 
      url: "mailto:fernandogromo517@gmail.com", 
      iconName: "ic:outline-email",
      visibility : {
        profile: true,
        footer: false
      }
    }
];
const PROFILE_LOCATION : Location = {
    name: "Área metropolitana de Guadalajara, México",
    mapUrl: "https://maps.app.goo.gl/hiCEsuk1ZVruq9bK8",
}
export const PROFILE_DATA: Record<string, Profile> = {
  es: {
    fullName: "Fernando Gutierrez Romo",
    professionalTitle: "Programador Junior | Desarrollo de Software",
    bio: "<p>Soy <strong>desarrollador de software</strong> con experiencia en desarrollo web y backend, enfocado en la construcción de soluciones <strong>limpias, modulares y escalables</strong>.</p><p>Durante los últimos años he trabajado principalmente en <strong>backend</strong>, utilizando tecnologías como <strong>C#</strong> y <strong>Golang</strong>, aplicando buenas prácticas y priorizando la <em>mantenibilidad del código</em>, aunque también disfruto el desarrollo frontend.</p><p>Cuento con experiencia en <strong>lenguajes tipados</strong> como <strong>Java</strong> y <strong>C#</strong>, y tengo un marcado interés en <strong>DevOps</strong>, especialmente en <strong>Docker</strong> y la <em>automatización de entornos</em>.</p><p>A nivel personal, disfruto <em>andar en bicicleta</em> y <em>jugar videojuegos</em>, y tengo el sueño de visitar países de <strong>climas fríos</strong> como <strong>Canadá</strong>, atraído por sus paisajes de <em>bosques</em>, su <em>gran fauna</em> y la posibilidad de presenciar <strong>auroras boreales</strong>.</p>",
    birthDate: PROFILE_BIRTH_DATE,
    location: PROFILE_LOCATION,
    avatarUrl: PROFILE_AVATAR_URL,
    coverMediaByTheme: PROFILE_COVER_MEDIA_BY_THEME,
    socialLinks: PROFILE_SOCIAL_LINKS,
  },

  en: {
    fullName: "Fernando Gutierrez",
    professionalTitle: "Junior Software Developer",
    bio: "<p>I am a <strong>software developer</strong> with experience in web and backend development, focused on building <strong>clean, modular, and scalable solutions</strong>.</p><p>Over the past few years, I have worked mainly on <strong>backend development</strong> using technologies such as <strong>C#</strong> and <strong>Golang</strong>, applying best practices and prioritizing <em>code maintainability</em>, while also enjoying frontend development.</p><p>I have experience with <strong>strongly typed languages</strong> such as <strong>Java</strong> and <strong>C#</strong>, and I have a strong interest in <strong>DevOps</strong>, especially in <strong>Docker</strong> and <em>environment automation</em>.</p><p>On a personal level, I enjoy <em>cycling</em> and <em>playing video games</em>, and I dream of visiting <strong>cold-climate countries</strong> such as <strong>Canada</strong>, drawn by its <em>forest landscapes</em>, <em>rich wildlife</em>, and the possibility of witnessing <strong>aurora borealis</strong>.</p>",
    birthDate: PROFILE_BIRTH_DATE,
    location: PROFILE_LOCATION,
    avatarUrl: PROFILE_AVATAR_URL,
    coverMediaByTheme: PROFILE_COVER_MEDIA_BY_THEME,
    socialLinks: PROFILE_SOCIAL_LINKS,
  },
};

export default PROFILE_DATA;