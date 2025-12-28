import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiNodedotjs,
  SiLaravel,
  SiMysql,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiGithub,
  SiLinux,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaAws } from "react-icons/fa";
import { SkillCategory } from "@/types/skill";

export const SKILLS: SkillCategory[] = [
  {
    category: "Programming Languages",
    items: [
      { id: 1, name: "HTML5", icon: SiHtml5, color: "text-orange-600" },
      { id: 2, name: "CSS3", icon: SiCss3, color: "text-blue-600" },
      {
        id: 3,
        name: "JavaScript",
        icon: SiJavascript,
        color: "text-yellow-400",
      },
      { id: 4, name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
      { id: 5, name: "PHP", icon: SiPhp, color: "text-indigo-600" },
    ],
  },
  {
    category: "Frameworks and Libraries",
    items: [
      { id: 6, name: "React", icon: SiReact, color: "text-cyan-400" },
      {
        id: 7,
        name: "Next.js",
        icon: SiNextdotjs,
        color: "text-gray-800 dark:text-white",
      },
      { id: 8, name: "Vue.js", icon: SiVuedotjs, color: "text-green-500" },
      { id: 9, name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
      { id: 10, name: "Laravel", icon: SiLaravel, color: "text-red-600" },
    ],
  },
  {
    category: "DB and Dev Tools",
    items: [
      { id: 11, name: "MySQL", icon: SiMysql, color: "text-blue-700" },
      {
        id: 12,
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "text-blue-400",
      },
      { id: 13, name: "Docker", icon: SiDocker, color: "text-blue-500" },
      { id: 14, name: "Git", icon: SiGit, color: "text-orange-600" },
      {
        id: 15,
        name: "GitHub",
        icon: SiGithub,
        color: "text-gray-800 dark:text-white",
      },
      { id: 16, name: "Linux", icon: SiLinux, color: "text-yellow-500" },
      { id: 17, name: "VS Code", icon: VscVscode, color: "text-[#007ACC]" },
      { id: 18, name: "AWS", icon: FaAws, color: "text-[#FF9900]" },
    ],
  },
];
