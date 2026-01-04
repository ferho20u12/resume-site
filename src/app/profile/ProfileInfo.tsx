import { Icon } from "@iconify/react";
interface ProfileInfoProps {
  fullName: string;
  professionalTitle: string;
  ageFomatted : string,
  locationName: string;
  locationMapUrl?: string;
}



export default function ProfileInfo({
  fullName,
  professionalTitle,
  ageFomatted,
  locationName,
  locationMapUrl,
}: ProfileInfoProps) {
  return (
    <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
      <h1 className="text-2xl md:text-4xl font-bold tracking-tight">
        {fullName}
      </h1>
      <p className="text-base md:text-xl text-muted-foreground">
        {professionalTitle}
      </p>
      <div className="flex flex-col md:flex-row md:items-center gap-2 text-sm text-muted-foreground md:text-md">
        <div className="flex items-center justify-center md:justify-start gap-1">
          <Icon icon="mdi:cake-variant-outline" className="text-base" />
          <span>{ageFomatted}</span>
        </div>
        <span className="hidden md:inline">•</span>
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
