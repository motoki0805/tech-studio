import { IconType } from "react-icons";

export interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

export interface SkillCategory {
  category: string;
  items: Skill[];
}
