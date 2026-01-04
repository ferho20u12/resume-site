import { Icon } from "@iconify/react";

interface ProfileInfoProps {
  fullName: string;
  professionalTitle: string;
  birthDate: Date;
  locationName: string;
  locationMapUrl?: string;
}

function calculateAge(birthDate: Date) {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}

export default function ProfileInfo({
  fullName,
  professionalTitle,
  birthDate,
  locationName,
  locationMapUrl,
}: ProfileInfoProps) {
  const age = calculateAge(birthDate);

  return (
    <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
      {/* Nombre */}
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
        {fullName}
      </h1>

      {/* Título */}
      <p className="text-base md:text-lg text-muted-foreground">
        {professionalTitle}
      </p>

      {/* Metadata */}
      <div className="flex flex-col md:flex-row md:items-center gap-2 text-sm text-muted-foreground">
        {/* Edad */}
        <div className="flex items-center justify-center md:justify-start gap-1">
          <Icon icon="mdi:cake-variant-outline" className="text-base" />
          <span>{age} años</span>
        </div>

        <span className="hidden md:inline">•</span>

        {/* Ubicación */}
        <div className="flex items-center justify-center md:justify-start gap-1">
          <Icon icon="mdi:map-marker-outline" className="text-base" />
          {locationMapUrl ? (
            <a
              href={locationMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline underline-offset-2"
            >
              {locationName}
            </a>
          ) : (
            <span>{locationName}</span>
          )}
        </div>
      </div>
    </div>
  );
}
