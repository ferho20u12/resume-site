import {SocialMedia} from "./social-media.model"

export interface Profile {
  title: string;
  name: string;
  about: string;
  profileUrl: string;  
  socialMedia: Record<string, SocialMedia>;
}
