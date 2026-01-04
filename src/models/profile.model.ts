import {SocialLink} from "./social-link.model"

export interface Profile {
  fullName: string;
  professionalTitle: string;
  bio: string;
  birthDate: Date;
  location: {
    name: string;
    mapUrl?: string;
  };
  avatarUrl: string;
  coverMediaByTheme: Record<string, string>;
  socialLinks: SocialLink[];
}
