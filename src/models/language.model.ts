export type LanguageProficiency =
  | "native"
  | "advanced"
  | "intermediate"
  | "basic";

export interface LanguageLevel {
  label : string
  proficiency: LanguageProficiency;
  description?: string;
}

export interface Language {
  id: number;

  code: string; 
  name: string; 

  level: LanguageLevel;
}
