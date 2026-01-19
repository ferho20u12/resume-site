"use client";

import { SkillCategory } from "@src/models/skill.model";
import HoverCard from "@src/shared/components/ui/cards/HoverCard";

interface SkillCardProps { skillCategory: SkillCategory }

export default function SkillCard({ skillCategory }: SkillCardProps) {
  return (
    <HoverCard className="w-75">
      <article className="flex flex-col gap-3 p-4 text-(--text)">
        <h3 className="font-semibold text-lg">{skillCategory.name}</h3>

        <div className="flex flex-col gap-2">
          {skillCategory.skills.map((skill) => (
            <div key={skill.id} className="flex flex-col p-3 bg-(--surface-muted) rounded-xl border border-(--surface-border)">
              <div className="flex justify-between items-center gap-2">
                <span className="font-medium">{skill.name}</span>
                {skill.proficiency && <span className="text-sm text-(--text-soft)">{skill.proficiency}</span>}
              </div>
            </div>
          ))}
        </div>
      </article>
    </HoverCard>
  );
}
