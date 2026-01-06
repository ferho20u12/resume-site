"use client";

import type { Education } from "@src/models/education.model";

interface EducationCardProps {
  education: Education;
}

export default function EducationCard({ education }: EducationCardProps) {
  const { title, institution, period, description } = education;

  return (
    <div
      className="
        flex-none w-80 md:w-96
        rounded-xl p-4 m-2
        flex flex-col gap-3
        bg-(--surface)
        border border-(--surface-border)
        shadow-sm
        text-(--text)
      "
    >
      {/* Logo */}
      <div className="flex justify-center">
        <div className="
          w-24 h-16 md:w-28 md:h-20
          rounded-lg
          bg-white/70 dark:bg-black/30
          overflow-hidden
          flex items-center justify-center
        ">
          {institution.logoUrl ? (
            <img
              src={institution.logoUrl}
              alt={institution.name}
              className="w-full h-full object-contain"
            />
          ) : (
            <span className="text-(--text-soft) font-semibold text-sm">
              {institution.name[0]}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="text-center flex flex-col gap-1">
        <h3 className="font-semibold text-base md:text-lg">
          {title}
        </h3>

        <p className="text-sm text-(--text-soft)">
          {institution.name}
        </p>

        <span className="text-xs text-(--text-soft)">
          {formatPeriod(period.startDate, period.endDate)}
        </span>

        {institution.website && (
          <a
            href={institution.website}
            target="_blank"
            rel="noreferrer"
            className="
              text-xs
              text-(--accent)
              hover:text-(--accent-hover)
              hover:underline
            "
          >
            Institution website
          </a>
        )}
      </div>

      {/* Description */}
      {description && (
        <div className="
          rounded-lg
          bg-(--surface)
          p-3
          text-sm
          text-(--text-soft)
          line-clamp-4
        ">
          {description}
        </div>
      )}
    </div>
  );
}

function formatPeriod(start: Date, end?: Date) {
  const format = (d: Date) =>
    d.toLocaleDateString("en-US", { month: "2-digit", year: "numeric" });

  return end ? `${format(start)} – ${format(end)}` : format(start);
}