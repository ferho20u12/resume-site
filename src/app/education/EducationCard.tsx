"use client";

import type { Education } from "@src/models/education.model";
import ExpandableText from "@src/shared/components/text/ExpandableText";
import HoverCard from "@src/shared/components/ui/cards/HoverCard";
import { formatPeriod } from "@src/shared/utils/date";

interface EducationCardProps { education: Education }

export default function EducationCard({ education }: EducationCardProps) {
  const { title, institution, period, description } = education;

  return (
    <HoverCard className="flex-none w-80 md:w-96">
      <article className="flex flex-col gap-3 p-4 text-(--text)">
        <div className="flex justify-center">
          <div className="w-24 h-16 md:w-28 md:h-20 rounded-xl bg-(--surface-muted) overflow-hidden flex items-center justify-center border border-(--surface-border)">
            {institution.logoUrl ? (
              <img src={institution.logoUrl} alt={institution.name} className="w-full h-full object-contain" />
            ) : (
              <span className="text-(--text-soft) font-semibold text-sm">{institution.name[0]}</span>
            )}
          </div>
        </div>

        <div className="text-center flex flex-col gap-1">
          <h3 className="font-semibold text-base md:text-lg">{title}</h3>
          <p className="text-sm text-(--text-soft)">{institution.name}</p>
          <span className="text-xs text-(--text-soft)">{formatPeriod(period.startDate, period.endDate)}</span>

          {institution.website && (
            <a href={institution.website} target="_blank" rel="noreferrer" className="text-xs text-(--accent) hover:text-(--accent-hover) hover:underline">
              Institution website
            </a>
          )}
        </div>

        <ExpandableText lines={5}>{description ?? ""}</ExpandableText>
      </article>
    </HoverCard>
  );
}