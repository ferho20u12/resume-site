"use client";

import { Icon } from "@iconify/react";
import CoverMedia from "./CoverMedia";

interface SocialLink {
  platform: string;
  iconName: string;
  url: string;
}

interface ProfileHeaderProps {
  coverVideos: Record<string, string>;
  avatarUrl: string;
  socials: SocialLink[];
}

export default function ProfileHeader({
  coverVideos,
  avatarUrl,
  socials,
}: ProfileHeaderProps) {
  return (
    <div className="relative">
      {/* COVER */}
      <div className="h-[25vh] md:h-[28vh]">
        <CoverMedia coverVideos={coverVideos} />
      </div>

      {/* AVATAR + SOCIALS */}
      <div
        className="
          absolute
          left-1/2 md:left-auto md:right-10
          -bottom-14 md:-bottom-18
          -translate-x-1/2 md:translate-x-0
          z-10
          flex
          flex-col md:flex-row
          items-center
        "
      >
        {/* AVATAR (FIRST IN MOBILE) */}
        <div
          className="
            w-28 h-28 md:w-40 md:h-40
            rounded-full
            overflow-hidden
            border-4
            border-(--cover-border-color)
            bg-black
          "
        >
          <img
            src={avatarUrl}
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        </div>

        {/* SOCIALS */}
        <div
          className="
            mt-3 md:mt-0
            md:mr-10      
            md:-order-1
            flex
            flex-row
            items-center
            gap-3
          "
        >
          {socials.map(({ platform, iconName, url }) => (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={platform}
              className="
                text-muted-foreground
                hover:text-foreground
                transition
              "
            >
              <Icon icon={iconName} className="text-4xl md:text-5xl " />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
