"use client";

import React from "react";
import { SkillCategory } from "@src/models/skill.model";

interface SkillCardProps {
  skillCategory: SkillCategory;
}

export default function SkillCard({ skillCategory }: SkillCardProps) {
  return (
    <div className="flex flex-col rounded-2xl p-4 w-75 bg-(--surface) border border-(--surface-border) backdrop-blur-md shadow-md">
      {/* Nombre de la categoría */}
      <h3 className="text-(--text) font-semibold text-lg mb-3">{skillCategory.name}</h3>

      {/* Lista de skills */}
      <div className="flex flex-col gap-2">
        {skillCategory.skills.map((skill) => (
          <div key={skill.id} className="flex flex-col p-2 bg-(--surface) rounded-lg border border-(--surface-border)">
            <div className="flex justify-between items-center">
              <span className="text-(--text) font-medium">{skill.name}</span>
              {skill.proficiency && (
                <span className="text-sm text-(--text-soft)">{skill.proficiency}</span>
              )}
            </div>
            {skill.experienceYears && (
              <span className="text-xs text-(--text-soft) mt-1">
                {skill.experienceYears} {skill.experienceYears > 1 ? "años" : "año"} de experiencia
              </span>
            )}
            {skill.details && (
              <span className="text-xs text-(--text-soft) mt-1 italic">{skill.details}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
