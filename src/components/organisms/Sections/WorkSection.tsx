import { SectionContainer } from "../../atoms/SectionContainer";
import { WorkCard } from "../../molecules/WorkCard";
import { WORKS_DATA } from "../../../constants/works";

export const WorkSection = () => {
  return (
    <SectionContainer id="works" title="Works">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {WORKS_DATA.map((work) => (
          <WorkCard key={work.id} work={work} />
        ))}
      </div>
    </SectionContainer>
  );
};
