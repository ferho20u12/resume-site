import { Profile } from "@src/models/profile.model";
import { SocialMedia } from "@src/models/social-media.model";

export const PROFILE_DATA_EN: Profile = {
  title: "Junior Software Developer",
  name: "Fernando Gutierrez Romo",
  about: "I am a passionate developer with experience in web and backend development.",
  bornDate:new Date("2000-08-25"),
  locationName : "Área metropolitana de Guadalajara, México ",
  locationLink : "https://maps.app.goo.gl/hiCEsuk1ZVruq9bK8",
  profileImageLink: "https://media.licdn.com/dms/image/v2/D4E03AQExGXq63uHplA/profile-displayphoto-scale_400_400/B4EZs0wJudJgAg-/0/1766116597063?e=1768435200&v=beta&t=C2cIbCZLxfQ4VT-TYN8q6n3DXryzmtu2vaIJTPo4fxE",
  coverImageLink: "https://media.licdn.com/dms/image/v2/D5616AQFtJSrs3LkyGQ/profile-displaybackgroundimage-shrink_350_1400/B56ZjtFih8G0AY-/0/1756324309925?e=1768435200&v=beta&t=Xnvl9zergHsg2KZ1b7wNDY9180_Nk414wRPH-F2g5c8",
  socialMedia: getSocialMedia()
};

export const PROFILE_DATA_ES: Profile = {
  title: "Programador Junior | Desarrollo de Software",
  name: "Fernando Gutierrez",
  about: "Soy un desarrollador apasionado con experiencia en desarrollo web y backend.",
  bornDate:new Date("2000-08-25"),
  locationName : "Área metropolitana de Guadalajara, México ",
  locationLink : "https://maps.app.goo.gl/hiCEsuk1ZVruq9bK8",
  profileImageLink: "https://media.licdn.com/dms/image/v2/D4E03AQExGXq63uHplA/profile-displayphoto-scale_400_400/B4EZs0wJudJgAg-/0/1766116597063?e=1768435200&v=beta&t=C2cIbCZLxfQ4VT-TYN8q6n3DXryzmtu2vaIJTPo4fxE",
  coverImageLink: "https://media.licdn.com/dms/image/v2/D5616AQFtJSrs3LkyGQ/profile-displaybackgroundimage-shrink_350_1400/B56ZjtFih8G0AY-/0/1756324309925?e=1768435200&v=beta&t=Xnvl9zergHsg2KZ1b7wNDY9180_Nk414wRPH-F2g5c8",
  socialMedia: getSocialMedia(),
};

export function getSocialMedia(): SocialMedia[] {
  return [
    {
      name: "github", link: "https://github.com/ferho20u12", icon: "mdi:github",
      showInProfile: false,
      showInFooterLinks: true
    },
    {
      name: "linkedin", link: "https://www.linkedin.com/in/fernando-gromo/", icon: "mdi:linkedin",
      showInProfile: false,
      showInFooterLinks: true
    },
    {
      name: "whatsapp", link: "https://wa.me/523317466638", icon: "mingcute:whatsapp-line",
      showInProfile: false,
      showInFooterLinks: true
    },
    {
      name: "phone", link: "tel:+523333333", icon: "fluent:person-call-20-regular",
      showInProfile: true,
      showInFooterLinks: false
    },
    {
      name: "email", link: "mailto:fernandogromo517@gmail.com", icon: "ic:outline-email",
      showInProfile: true,
      showInFooterLinks: false
    }
  ];
}
