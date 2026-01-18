"use client";

import { SkillCategory } from "@src/models/skill.model";

interface SkillCardProps {
  skillCategory: SkillCategory;
}

export default function SkillCard({ skillCategory }: SkillCardProps) {
  return (
    <div className="flex flex-col rounded-2xl p-4 w-75 bg-(--surface) border border-(--surface-border) backdrop-blur-md shadow-md">
      <h3 className="text-(--text) font-semibold text-lg mb-3">{skillCategory.name}</h3>
      <div className="flex flex-col gap-2">
        {skillCategory.skills.map((skill) => (
          <div key={skill.id} className="flex flex-col p-3 bg-(--surface-muted) rounded-xl border border-(--surface-border)">
            <div className="flex justify-between items-center gap-2">
              <span className="text-(--text) font-medium">{skill.name}</span>
              {skill.proficiency && <span className="text-sm text-(--text-soft)">{skill.proficiency}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
