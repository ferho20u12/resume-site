import {SocialMedia} from "./social-media.model"

export interface Profile {
  title: string;
  name: string;
  about: string;
  bornDate:Date;
  locationName:string;
  locationLink:string;
  profileImageLink: string;
  coverVideoLink: Record<string, string>;
  socialMedia: SocialMedia[];
}