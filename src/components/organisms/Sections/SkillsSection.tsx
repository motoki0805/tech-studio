import { SectionContainer } from "../../atoms/SectionContainer";
import { SKILLS } from "@/data/skills";
import { SkillLevel } from "@/types/skill";

// 色の濃淡による誤認を避けるため、単色の塗りつぶし数（ドット）で習熟度を表現
const LEVEL_RANK: Record<SkillLevel, number> = { A: 3, B: 2, C: 1 };

const LevelDots = ({ level }: { level: SkillLevel }) => (
  <div className="flex items-center gap-0.5" aria-label={`習熟度 ${level}`}>
    {[1, 2, 3].map((dot) => (
      <span
        key={dot}
        className={`w-1.5 h-1.5 rounded-full ${
          dot <= LEVEL_RANK[level] ? "bg-[#b17a5c]" : "bg-[#e5ded8]"
        }`}
      />
    ))}
  </div>
);

const LEVEL_DESCRIPTIONS: { level: SkillLevel; label: string }[] = [
  { level: "A", label: "設計・実装・改善を主導でき、チームの指導役も担える" },
  { level: "B", label: "要件を理解し、自走して開発・実装ができる" },
  { level: "C", label: "キャッチアップしながら対応できる" },
];

export const SkillsSection = () => {
  return (
    <SectionContainer id="skills" title="Skills">
      {/* レベル凡例 */}
      <div className="flex flex-col gap-2 mb-10">
        {LEVEL_DESCRIPTIONS.map(({ level, label }) => (
          <div key={level} className="flex items-center gap-2">
            <LevelDots level={level} />
            <span className="text-[0.6rem] font-bold text-[#8c8279]">{level}</span>
            <span className="text-xs text-[#8c8279]">{label}</span>
          </div>
        ))}
      </div>
      <div className="space-y-12">
        {SKILLS.map((category) => (
          <div key={category.category} className="space-y-6">
            <h3 className="text-sm font-bold tracking-widest uppercase text-[#8c8279] border-b border-[#e5ded8] pb-3">
              {category.category}
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-6">
              {category.items.map((skill) => (
                <div
                  key={skill.id}
                  className="flex flex-col items-center gap-2 group"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-white border border-[#e5ded8] shadow-sm rounded-xl text-[1.75rem] transition-transform duration-300 group-hover:-translate-y-1">
                    <skill.icon className={skill.color} />
                  </div>
                  <span className="text-[0.7rem] font-bold text-[#4a3f35] text-center leading-tight">
                    {skill.name}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <LevelDots level={skill.level} />
                    <span className="text-[0.6rem] text-[#8c8279]">{skill.years}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};
