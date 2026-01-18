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
    <div className="flex flex-col gap-2 text-center md:text-left">
      <h1 className="text-2xl md:text-4xl font-bold tracking-tight">
        {fullName}
      </h1>

      <p className="text-base md:text-lg text-muted-foreground">
        {professionalTitle}
      </p>

      <div className="flex flex-wrap justify-center md:justify-start gap-3 text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <Icon icon="mdi:cake-variant-outline" />
          <span>{ageFomatted}</span>
        </div>
        <div className="flex items-center gap-1">
          <Icon icon="mdi:map-marker-outline" />
          {locationMapUrl ? (
            <a href={locationMapUrl} target="_blank" className="hover:underline">
              {locationName}
            </a>
          ) : (
            locationName
          )}
        </div>
      </div>
    </div>

  );
}
