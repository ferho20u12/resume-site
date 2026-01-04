"use client";

import React from "react";
import { Experience } from "@src/models/experience.model";

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
      <div
        className="
          flex-none w-80 md:w-96

          rounded-xl p-4 m-2 flex flex-col
          shadow-md
          bg-(--surface)
          border border-(--surface-border)
          text-(--text)
        "
      >
      <div className="w-24 h-16 md:w-28 md:h-20 rounded-lg bg-gray-100 dark:bg-gray-800 overflow-hidden flex items-center justify-center mx-auto">
        {experience.logoUrl ? (
          <img
            src={experience.logoUrl}
            alt={experience.companyName}
            className="w-full h-full object-contain"
          />
        ) : (
          <span className="text-(--text-soft) font-bold text-sm">
            {experience.companyName[0]}
          </span>
        )}
      </div>
      <div className="text-center mt-3">
        <h3 className="font-semibold text-lg">{experience.companyName}</h3>
        <p className="text-sm text-(--text-soft)">{experience.position}</p>
        {experience.startDate && (
          <p className="text-xs text-(--text-soft)">
            {experience.startDate.toLocaleDateString()} -{" "}
            {experience.endDate ? experience.endDate.toLocaleDateString() : "Present"}
          </p>
        )}
        {experience.companyLink && (
          <a
            href={experience.companyLink}
            target="_blank"
            rel="noreferrer"
            className="text-xs text-(--accent) hover:text-(--accent-hover) hover:underline"
          >
            Company site
          </a>
        )}
      </div>
      <div className="mx-2 flex-1 rounded-xl p-4 bg-(--surface) mt-3">
        <p className="text-sm text-(--text-soft) line-clamp-5">
          {experience.description}
        </p>
      </div>
    </div>
  );
}
