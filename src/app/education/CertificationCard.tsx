"use client";
import type { Education } from "@src/models/education.model";
import HoverCard from "@src/shared/components/ui/cards/HoverCard";
import { formatPeriod } from "@src/shared/utils/date";

interface CertificationCardProps { education: Education }

export default function CertificationCard({ education }: CertificationCardProps) {
  const { institution, title, period } = education;

  return (
    <HoverCard className="flex-none w-80 md:w-96">
      <article className="flex items-center gap-4 p-4 text-(--text)">
        <div className="w-16 h-16 md:w-18 md:h-18 rounded-xl bg-(--surface-muted) flex items-center justify-center overflow-hidden shrink-0 border border-(--surface-border)">
          {institution.logoUrl ? (
            <img src={institution.logoUrl} alt={institution.name} className="w-full h-full object-contain" />
          ) : (
            <span className="text-sm font-semibold text-(--text-soft)">{institution?.name[0] ?? ""}</span>
          )}
        </div>

        <div className="flex flex-col gap-1 min-w-0">
          <h3 className="font-semibold text-sm md:text-base truncate">{institution.name}</h3>
          <p className="text-sm text-(--text-soft) truncate">{title}</p>
          <span className="text-xs text-(--text-soft)">{formatPeriod(period.startDate, period.endDate)}</span>
        </div>
      </article>
    </HoverCard>
  );
}
