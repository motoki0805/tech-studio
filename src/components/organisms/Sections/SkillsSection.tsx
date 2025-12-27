import { SectionContainer } from "../../atoms/SectionContainer";
import { skills } from "@/data/skills";

export const SkillsSection = () => {

  return (
    <SectionContainer id="skills" title="Skills">
      <div className="space-y-16">
        {skills.map((category, index) => (
          <div key={index} className="space-y-8">
            <h3 className="text-xl font-bold text-[#4a3f35] border-b border-[#e5ded8] pb-3 text-left">
              {category.category}
            </h3>
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
                  <span className="text-sm font-bold text-[#5c534a]">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};
