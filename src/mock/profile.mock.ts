import { Profile, Location } from "@src/models/profile.model";
import { SocialLink} from "@src/models/social-link.model";

const PROFILE_BIRTH_DATE : Date = new Date("2000-08-25");
const PROFILE_AVATAR_URL : string = "/img/profile/avatar-logo.jpg";

const PROFILE_COVER_MEDIA_BY_THEME: Record<string, string> = {
    light: "/video/profile-cover-light.webm",
    dark: "/video/profile-cover-dark.webm",
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
    bio: "Soy un desarrollador junior con experiencia en desarrollo web y backend, apasionado por la programación modular y las buenas prácticas. Durante los últimos dos años me he enfocado principalmente en backend, trabajando con C# y Golang, pero disfruto tanto el frontend como el backend. Tengo experiencia con lenguajes tipados como Java y C#, y un gran interés en DevOps, especialmente con Docker y automatización de entornos. En mi tiempo libre disfruto pasear en bicicleta, jugar videojuegos y sueño con conocer países con climas fríos, como Canadá, para disfrutar de paisajes nevados.",
    birthDate: PROFILE_BIRTH_DATE,
    location: PROFILE_LOCATION,
    avatarUrl: PROFILE_AVATAR_URL,
    coverMediaByTheme: PROFILE_COVER_MEDIA_BY_THEME,
    socialLinks: PROFILE_SOCIAL_LINKS,
  },

  en: {
    fullName: "Fernando Gutierrez",
    professionalTitle: "Junior Software Developer",
    bio: "I am a junior software developer with experience in web and backend development, passionate about modular programming and best practices. Over the past two years, I have primarily focused on backend development using C# and Golang, while also enjoying working on frontend projects. I have experience with statically typed languages like Java and C#, and a strong interest in DevOps, particularly Docker and environment automation. In my free time, I enjoy cycling, playing video games, and dream of visiting cold countries like Canada to experience snowy landscapes.",
    birthDate: PROFILE_BIRTH_DATE,
    location: PROFILE_LOCATION,
    avatarUrl: PROFILE_AVATAR_URL,
    coverMediaByTheme: PROFILE_COVER_MEDIA_BY_THEME,
    socialLinks: PROFILE_SOCIAL_LINKS,
  },
};

export default PROFILE_DATA;