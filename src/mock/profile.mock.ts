import { Profile } from "@src/models/profile.model";
import { SocialLink} from "@src/models/social-link.model";

const PROFILE_BIRTH_DATE : Date = new Date("2000-08-25");
const PROFILE_AVATAR_URL : string = "https://media.licdn.com/dms/image/v2/D4E03AQExGXq63uHplA/profile-displayphoto-scale_400_400/B4EZs0wJudJgAg-/0/1766116597063?e=1768435200&v=beta&t=C2cIbCZLxfQ4VT-TYN8q6n3DXryzmtu2vaIJTPo4fxE";
const PROFILE_LOCATION_MAP_URL : string = "https://maps.app.goo.gl/hiCEsuk1ZVruq9bK8";
const PROFILE_COVER_MEDIA_BY_THEME: Record<string, string> = {
    light: "https://cdn.pixabay.com/video/2022/03/18/111179-689949805_large.mp4",
    dark: "https://cdn.pixabay.com/video/2023/07/04/169951-842348732_large.mp4",
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
      url: "tel:+523333333", 
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

export const PROFILE_DATA: Record<string, Profile> = {
  es: {
    fullName: "Fernando Gutierrez",
    professionalTitle: "Programador Junior | Desarrollo de Software",
    bio: "Soy un desarrollador apasionado con experiencia en desarrollo web y backend.",
    birthDate: PROFILE_BIRTH_DATE,
    location: {
      name: "Área metropolitana de Guadalajara, México",
      mapUrl: PROFILE_LOCATION_MAP_URL,
    },
    avatarUrl: PROFILE_AVATAR_URL,
    coverMediaByTheme: PROFILE_COVER_MEDIA_BY_THEME,
    socialLinks: PROFILE_SOCIAL_LINKS,
  },

  en: {
    fullName: "Fernando Gutierrez Romo",
    professionalTitle: "Junior Software Developer",
    bio: "I am a passionate developer with experience in web and backend development.",
    birthDate: PROFILE_BIRTH_DATE,
    location: {
      name: "Metropolitan Area of Guadalajara, Mexico",
      mapUrl: PROFILE_LOCATION_MAP_URL,
    },
    avatarUrl: PROFILE_AVATAR_URL,
    coverMediaByTheme: PROFILE_COVER_MEDIA_BY_THEME,
    socialLinks: PROFILE_SOCIAL_LINKS,
  },
};

export default PROFILE_DATA;