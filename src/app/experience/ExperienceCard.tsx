"use client";

import { Experience } from "@src/models/experience.model";
import ExpandableText from "@src/shared/components/text/ExpandableText";
import HoverCard from "@src/shared/components/ui/cards/HoverCard";

interface ExperienceCardProps { experience: Experience ,  companyLinkTitle : string}

export default function ExperienceCard({ experience, companyLinkTitle }: ExperienceCardProps) {
  return (
    <HoverCard className="flex-none w-80 md:w-96">
      <article className="flex flex-col gap-3 p-4 text-(--text)">
        <div className="w-24 h-16 md:w-28 md:h-20 rounded-lg border border-(--surface-border) bg-(--surface-muted) overflow-hidden flex items-center justify-center mx-auto">
          {experience.logoUrl ? (
            <img src={experience.logoUrl} alt={experience.companyName} className="w-full h-full object-contain" />
          ) : (
            <span className="font-bold text-lg">{experience.companyName[0]}</span>
          )}
        </div>

        <div className="text-center">
          <h3 className="font-semibold text-lg">{experience.companyName}</h3>
          <p className="text-sm text-(--text-soft)">{experience.position}</p>

          {experience.startDate && (
            <p className="text-xs text-(--text-soft)">
              {experience.startDate.toLocaleDateString()} – {experience.endDate ? experience.endDate.toLocaleDateString() : "Present"}
            </p>
          )}

          {experience.companyLink && (
            <a href={experience.companyLink} target="_blank" rel="noreferrer" className="text-xs text-(--accent) hover:text-(--accent-hover) hover:underline">
              {companyLinkTitle}
            </a>
          )}
        </div>

        <ExpandableText lines={5}>{experience.description}</ExpandableText>
      </article>
    </HoverCard>
  );
}
