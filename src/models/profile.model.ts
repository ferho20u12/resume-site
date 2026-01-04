import {SocialLink} from "./social-link.model"

export interface Profile {
  fullName: string;
  professionalTitle: string;
  bio: string;
  birthDate: Date;
  location: Location;
  avatarUrl: string;
  coverMediaByTheme: Record<string, string>;
  socialLinks: SocialLink[];
}

export interface Location {
  name: string;
  mapUrl?: string;
}