import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiDotnet,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiLaravel,
  SiBootstrap,
  SiMysql,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiGithub,
  SiLinux,
  SiAmazonwebservices,
} from "react-icons/si";
import { VscDatabase, VscAzure } from "react-icons/vsc";
import { SkillCategory } from "@/types/skill";

export const SKILLS: SkillCategory[] = [
  {
    category: "Programming Languages",
    items: [
      { id: 1, name: "TypeScript", icon: SiTypescript, color: "text-blue-500", level: "A", years: "3.5年" },
      { id: 2, name: "JavaScript", icon: SiJavascript, color: "text-yellow-400", level: "A", years: "1年" },
      { id: 3, name: "HTML5", icon: SiHtml5, color: "text-orange-600", level: "A", years: "3年" },
      { id: 4, name: "CSS3", icon: SiCss3, color: "text-blue-600", level: "A", years: "3年" },
      { id: 5, name: "PHP", icon: SiPhp, color: "text-indigo-600", level: "A", years: "3年" },
      { id: 6, name: "C#", icon: SiDotnet, color: "text-purple-600", level: "B", years: "0.5年" },
      { id: 7, name: "Python", icon: SiPython, color: "text-yellow-600", level: "B", years: "0.5年" },
    ],
  },
  {
    category: "Frameworks and Libraries",
    items: [
      { id: 8, name: "React", icon: SiReact, color: "text-cyan-400", level: "A", years: "3.5年" },
      { id: 9, name: "Laravel", icon: SiLaravel, color: "text-red-600", level: "A", years: "3年" },
      { id: 10, name: "Bootstrap", icon: SiBootstrap, color: "text-purple-500", level: "A", years: "3年" },
      { id: 11, name: "Next.js", icon: SiNextdotjs, color: "text-gray-800", level: "B", years: "1年" },
      { id: 12, name: "Vue.js", icon: SiVuedotjs, color: "text-green-500", level: "B", years: "0.5年" },
    ],
  },
  {
    category: "DB and Dev Tools",
    items: [
      { id: 13, name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400", level: "A", years: "3年" },
      { id: 14, name: "MySQL", icon: SiMysql, color: "text-blue-700", level: "A", years: "2年" },
      { id: 15, name: "Docker", icon: SiDocker, color: "text-blue-500", level: "A", years: "3年" },
      { id: 16, name: "Git", icon: SiGit, color: "text-orange-600", level: "A", years: "3年" },
      { id: 17, name: "GitHub", icon: SiGithub, color: "text-gray-800", level: "A", years: "3年" },
      { id: 18, name: "Linux", icon: SiLinux, color: "text-yellow-500", level: "C", years: "2.5年" },
      { id: 19, name: "SQLServer", icon: VscDatabase, color: "text-red-700", level: "D", years: "0.5年" },
      { id: 20, name: "AWS", icon: SiAmazonwebservices, color: "text-[#FF9900]", level: "B", years: "3年" },
      { id: 21, name: "Azure", icon: VscAzure, color: "text-blue-500", level: "D", years: "1年" },
    ],
  },
];
