import {SocialMedia} from "./social-media.model"

export interface Profile {
  title: string;
  name: string;
  about: string;
  bornDate:Date;
  locationName:string;
  locationLink:string;
  profileImageLink: string;
  coverImageLink: string;
  socialMedia: SocialMedia[];
}
