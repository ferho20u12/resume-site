interface ProfileInfoProps {
  fullName: string;
  professionalTitle: string;
  birthDate: Date;
  locationName: string;
  locationMapUrl?: string;
}

export default function ProfileInfo({
  fullName,
  professionalTitle,
  birthDate,
  locationName,
  locationMapUrl,
}: ProfileInfoProps) {
  const age = new Date().getFullYear() - birthDate.getFullYear();

  return (
    <div className="text-center md:text-left">
      <h1 className="text-2xl md:text-4xl font-semibold">
        {fullName}
      </h1>

      <p className="text-sm md:text-base opacity-70">
        {professionalTitle}
      </p>

      <div className="mt-2 text-sm opacity-70 space-y-1">
        <p>Edad: {age}</p>

        {locationMapUrl ? (
          <a
            href={locationMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            {locationName}
          </a>
        ) : (
          <p>{locationName}</p>
        )}
      </div>
    </div>
  );
}
