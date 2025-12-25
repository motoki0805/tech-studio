import { SectionContainer } from "../../atoms/SectionContainer";
import { InfoCard } from "../../molecules/InfoCard";
import { WORKS_DATA } from "../../../constants/works";

export const WorkSection = () => {
  return (
    <SectionContainer id="works" title="Works">
      <div className="grid grid-cols-1 gap-8">
        {WORKS_DATA.map((work) => (
          <InfoCard key={work.id} title={work.title} className="w-full">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-bold tracking-wider">
                <div className="flex items-center text-[#b17a5c]">
                  <span className="mr-2 opacity-50">Period:</span>
                  {work.period}
                </div>
                <div className="flex items-center text-[#8c7e71]">
                  <span className="mr-2 opacity-50">Role:</span>
                  {work.role}
                </div>
                <div className="flex items-center text-[#4a3f35]">
                  <span className="mr-2 opacity-50">Stack:</span>
                  {work.tech}
                </div>
              </div>

              <div className="text-[#5c534a] space-y-4 leading-relaxed border-t border-[#f5efeb] pt-4">
                <div className="space-y-3">{work.description}</div>

                {work.highlights && work.highlights.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-dashed border-[#f5efeb]">
                    <p className="text-[10px] font-extrabold tracking-[0.2em] text-[#8c7e71] mb-2">
                      Key Achievements
                    </p>
                    <ul className="list-none space-y-1">
                      {work.highlights.map((item) => (
                        <li key={item} className="text-sm flex items-start">
                          <span className="mr-2 text-[#b17a5c]">・</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </InfoCard>
        ))}
      </div>
    </SectionContainer>
  );
};
