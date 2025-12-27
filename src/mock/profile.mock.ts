import { Profile } from "@src/models/profile.model";
import { SocialMedia } from "@src/models/social-media.model";

export const PROFILE_DATA_EN: Profile = {
  title: "Junior Software Developer",
  name: "Fernando Gutierrez",
  about: "I am a passionate developer with experience in web and backend development.",
  profileUrl: "https://media.licdn.com/dms/image/v2/D4E03AQExGXq63uHplA/profile-displayphoto-scale_400_400/B4EZs0wJudJgAg-/0/1766116597063?e=1768435200&v=beta&t=C2cIbCZLxfQ4VT-TYN8q6n3DXryzmtu2vaIJTPo4fxE",
  socialMedia: getSocialMedia()
};

export const PROFILE_DATA_ES: Profile = {
  title: "Programador Junior | Desarrollo de Software",
  name: "Fernando Gutierrez",
  about: "Soy un desarrollador apasionado con experiencia en desarrollo web y backend.",
  profileUrl: "https://media.licdn.com/dms/image/v2/D4E03AQExGXq63uHplA/profile-displayphoto-scale_400_400/B4EZs0wJudJgAg-/0/1766116597063?e=1768435200&v=beta&t=C2cIbCZLxfQ4VT-TYN8q6n3DXryzmtu2vaIJTPo4fxE",
  socialMedia: getSocialMedia(),
};

export function getSocialMedia(): Record<string, SocialMedia> {
  return {
    github:   { name: "Github", link: "https://github.com/ferho20u12", icon: "github-icon" },
    linkedin: { name: "Linkedin", link: "https://www.linkedin.com/in/fernando-gromo/", icon: "linkedin-icon" },
    whatsapp: { name: "Whats app", link: "https://wa.me/523317466638", icon: "phone-icon"},
    phone:    { name: "Phone", link: "tel:+523333333", icon: "phone-icon"},
    email:    { name: "Email", link: "mailto:fernandogromo517@gmail.com", icon: "email-icon"}
  };
}
