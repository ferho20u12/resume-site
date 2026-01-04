interface ProfileBioProps {
  bio: string;
}

export default function ProfileBio({ bio }: ProfileBioProps) {
  return (
    <div className="mx-6 flex-1 rounded-xl p-4 bg-(--surface) ">
      <p className="text-sm">
        {bio}
      </p>
    </div>
  );
}
