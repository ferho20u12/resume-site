import {SocialMedia} from "./social-media.model"

export interface Profile {
  title: string;
  name: string;
  about: string;
  bornDate:Date;
  profileImageLink: string;
  profileCoverLink: string;
  socialMedia: SocialMedia[];
}
