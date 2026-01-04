import { Icon } from "@iconify/react";

interface SocialLink {
  platform: string;
  iconName: string;
  url: string;
}

interface ProfileSocialsProps {
  socials: SocialLink[];
}

export default function ProfileSocials({ socials }: ProfileSocialsProps) {
  return (
    <div className="flex gap-4">
      {socials.map(({ platform, iconName, url }) => (
        <a
          key={platform}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-opacity hover:opacity-70"
        >
          <Icon icon={iconName} className="text-3xl md:text-4xl" />
        </a>
      ))}
    </div>
  );
}
