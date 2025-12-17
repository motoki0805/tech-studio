import Link from "next/link";
import { Header } from "../organisms/Header";
import { SkillsSection } from "../organisms/Sections/SkillsSection";
import { PortfolioSection } from "../organisms/Sections/PortfolioSection";

export const HomeTemplate = () => {
  return (
    <>
      <Header />
      <main>
        <section
          id="top"
          className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-16"
        >
          <div className="px-4 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl mb-4">
              テック工房
            </h1>
            <p className="text-lg text-gray-600 sm:text-xl max-w-2xl mx-auto">
              Web Application Development & Engineering Portfolio
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link
                href="#works"
                className="rounded-md bg-blue-600 px-6 py-3 text-white font-semibold shadow hover:bg-blue-700 transition"
              >
                実績を見る
              </Link>
            </div>
          </div>
        </section>

        <SkillsSection />

        <PortfolioSection />
      </main>
    </>
  );
};
