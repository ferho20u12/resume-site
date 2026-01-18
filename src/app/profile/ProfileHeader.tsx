"use client";

interface ProfileHeaderProps {
  coverVideos: Record<string, string>;
}

export default function ProfileHeader({ coverVideos }: ProfileHeaderProps) {
  return (
    <div className="relative">
      <div className="h-[25vh] md:h-[30vh]">
        <div className="relative w-full h-full overflow-hidden rounded-t-2xl mask-b-from-15% mask-b-to-80%">
          {Object.entries(coverVideos).map(([themeKey, src]) => (
            <video
              key={themeKey}
              src={src}
              autoPlay
              muted
              loop
              playsInline
              className={`absolute  w-full h-full object-cover ${themeKey}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
