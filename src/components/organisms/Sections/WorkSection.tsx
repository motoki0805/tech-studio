import { SectionContainer } from "../../atoms/SectionContainer";
import { InfoCard } from "../../molecules/InfoCard";
import { WORKS_DATA } from "../../../constants/works";

export const WorksSection = () => {
  return (
    <SectionContainer id="works" title="Works">
      <div className="grid grid-cols-1 gap-8">
        {WORKS_DATA.map((work, index) => (
          <InfoCard key={index} title={work.title} className="w-full">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-bold uppercase tracking-wider">
                <div className="flex items-center text-[#b17a5c]">
                  <span className="mr-2 opacity-50">Period:</span>
                  {work.period}
                </div>
                <div className="flex items-center text-[#4a3f35]">
                  <span className="mr-2 opacity-50">Stack:</span>
                  {work.tech}
                </div>
              </div>
              <div className="text-[#5c534a] space-y-3 leading-relaxed border-t border-[#f5efeb] pt-4">
                {work.description}
              </div>
            </div>
          </InfoCard>
        ))}
      </div>
    </SectionContainer>
  );
};
