import { Header } from "../organisms/Header";
import { FirstViewSection } from "../organisms/Sections/FirstViewSection";
import { AboutSection } from "../organisms/Sections/AboutSection";
import { SkillsSection } from "../organisms/Sections/SkillsSection";
import { PortfolioSection } from "../organisms/Sections/PortfolioSection";
import { Footer } from "../organisms/Footer";
import { WorkSection } from "../organisms/Sections/WorkSection";

export const HomeTemplate = () => {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <FirstViewSection />
        <AboutSection />
        <SkillsSection />
        <WorkSection />
        <PortfolioSection />
      </main>
      <Footer />
    </>
  );
};
