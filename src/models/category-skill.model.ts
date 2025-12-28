import { Skill } from "./skill.model"

export interface CategorySkill {
  id : number,  
  description: string 
  skills:Skill[] 
}
