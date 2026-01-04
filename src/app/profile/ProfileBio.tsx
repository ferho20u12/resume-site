interface ProfileBioProps {
  bio: string;
}

export default function ProfileBio({ bio }: ProfileBioProps) {
  return (
    <div
      className="
        mt-6
        mx-6
        flex-1
        min-h-0
        overflow-y-auto
        rounded-xl
        p-4
        bg-(--surface)
      "
    >
      <p className="text-lg leading-relaxed">
        {bio}
      </p>
    </div>
  );
}
