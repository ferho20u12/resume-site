export interface Skill {
  id: number;
  name: string;
  proficiency: string;
}

export interface SkillCategory {
  id: number;
  name: string;
  skills: Skill[];
}
