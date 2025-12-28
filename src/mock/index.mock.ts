import { EXPERIENCE_DATA_EN, EXPERIENCE_DATA_ES } from "./experience.mock";
import { PROFILE_DATA_EN, PROFILE_DATA_ES } from "./profile.mock";
import { CATEGORY_SKILL_DATA_EN, CATEGORY_SKILL_DATA_ES } from "./category-skill.mock";

export const getExperienceData = (lang: string) =>
  lang === "es" ? EXPERIENCE_DATA_ES : EXPERIENCE_DATA_EN;

export const getProfileData = (lang: string) =>
  lang === "es" ? PROFILE_DATA_EN : PROFILE_DATA_ES;

export const getCategorySkillData = (lang: string) =>
  lang === "es" ? CATEGORY_SKILL_DATA_EN : CATEGORY_SKILL_DATA_ES;
