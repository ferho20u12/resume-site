"use client";

import React from "react";
import type { Education } from "@src/models/education.model";

interface CertificationCardProps {
  education: Education;
}

export default function CertificationCard({ education }: CertificationCardProps) {
  const { institution, title, period } = education;

  return (
    <div className="flex-none w-80 md:w-96 flex items-center gap-4 rounded-xl p-4 m-2 bg-(--surface) border border-(--surface-border) shadow-sm text-(--text)">
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
    </div>
  );
}

function formatPeriod(start: Date, end?: Date) {
  const format = (d: Date) => d.toLocaleDateString("en-US", { month: "2-digit", year: "numeric" });
  return end ? `${format(start)} – ${format(end)}` : format(start);
}
