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

export const SkillsSection = () => {
  const skills = [
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
          color: "text-black dark:text-white",
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

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-12 text-center">
          Skills
        </h2>

        <div className="space-y-16">
          {skills.map((category, index) => (
            <div key={index} className="space-y-6">
              {/* カテゴリー見出し */}
              <h3 className="text-xl font-semibold text-gray-700 border-b border-gray-200 pb-2">
                {category.category}
              </h3>

              {/* アイコンリスト */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8">
                {category.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center gap-3 group"
                  >
                    <div
                      className={`text-5xl transition-transform duration-300 group-hover:scale-110 ${skill.color}`}
                    >
                      <skill.icon />
                    </div>
                    <span className="text-sm font-medium text-gray-600">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
