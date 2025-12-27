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
      { name: "HTML5", icon: SiHtml5, color: "text-orange-600" },
      { name: "CSS3", icon: SiCss3, color: "text-blue-600" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
      { name: "PHP", icon: SiPhp, color: "text-indigo-600" },
    ],
  },
  {
    category: "Frameworks and Libraries",
    items: [
      { name: "React", icon: SiReact, color: "text-cyan-400" },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "text-gray-800 dark:text-white",
      },
      { name: "Vue.js", icon: SiVuedotjs, color: "text-green-500" },
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
      { name: "Laravel", icon: SiLaravel, color: "text-red-600" },
    ],
  },
  {
    category: "DB and Dev Tools",
    items: [
      { name: "MySQL", icon: SiMysql, color: "text-blue-700" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
      { name: "Docker", icon: SiDocker, color: "text-blue-500" },
      { name: "Git", icon: SiGit, color: "text-orange-600" },
      {
        name: "GitHub",
        icon: SiGithub,
        color: "text-gray-800 dark:text-white",
      },
      { name: "Linux", icon: SiLinux, color: "text-yellow-500" },
      { name: "VS Code", icon: VscVscode, color: "text-[#007ACC]" },
      { name: "AWS", icon: FaAws, color: "text-[#FF9900]" },
    ],
  },
];
