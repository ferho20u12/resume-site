"use client";

import CoverMedia from "./CoverMedia";

interface ProfileHeaderProps {
  coverVideos: Record<string, string>;
  avatarUrl: string;
}

export default function ProfileHeader({
  coverVideos,
  avatarUrl,
}: ProfileHeaderProps) {
  return (
    <div className="relative">
      {/* COVER */}
      <div className="h-[25vh] md:h-[28vh]">
        <CoverMedia coverVideos={coverVideos} />
      </div>

      {/* AVATAR */}
      <div
        className="
          absolute
          left-1/2 md:left-auto md:right-10
          -bottom-14 md:-bottom-18
          -translate-x-1/2 md:translate-x-0
          z-10
        "
      >
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
      </div>
    </div>
  );
}
