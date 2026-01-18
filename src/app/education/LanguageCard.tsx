"use client";

import { Language } from "@src/models/language.model";

interface LanguageCardProps {
  language: Language;
}

const PROFICIENCY_LEVEL: Record<string, number> = { native: 100, advanced: 85, intermediate: 65, basic: 40 };

export default function LanguageCard({ language }: LanguageCardProps) {
  const progress = PROFICIENCY_LEVEL[language.level.proficiency] ?? 0;
  return (
    <div className="flex-none w-64 md:w-72 rounded-xl p-4 m-2 bg-(--surface) border border-(--surface-border) shadow-md transition-transform hover:-translate-y-1">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-(--accent) text-white font-bold text-lg">{language.code.toUpperCase()}</div>
        <div className="flex-1">
          <h3 className="font-semibold text-base">{language.name}</h3>
          <span className="inline-block mt-1 px-2 py-0.5 text-xs rounded-full bg-(--accent)/10 text-(--accent) font-medium">{language.level.label}</span>
        </div>
      </div>
      <div className="mt-4">
        <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
          <div className="h-full rounded-full bg-(--accent)" style={{ width: `${progress}%` }} />
        </div>
      </div>
      {language.level.description && <p className="mt-3 text-sm text-(--text-soft)">{language.level.description}</p>}
    </div>
  );
}
