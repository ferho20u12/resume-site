export interface SocialLink {
  platform: string;
  url: string;
  iconName: string;
  visibility: {
    profile: boolean;
    footer: boolean;
  };
}
