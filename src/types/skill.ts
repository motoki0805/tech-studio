import { IconType } from "react-icons";

export type SkillLevel = "A" | "B" | "C" | "D";

export interface Skill {
  id: number;
  name: string;
  icon: IconType;
  color: string;
  level: SkillLevel;
  years: string;
}

export interface SkillCategory {
  category: string;
  items: Skill[];
}
