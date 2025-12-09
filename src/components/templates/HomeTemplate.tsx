import Link from "next/link";
import { Header } from "../organisms/Header";
import { SkillsSection } from "../organisms/SkillsSection";
import { WorksSection } from "../organisms/WorkSection";

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
              <Link
                href="#contact"
                className="rounded-md bg-white px-6 py-3 text-blue-600 font-semibold shadow ring-1 ring-blue-600 hover:bg-blue-50 transition"
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-white"
        >
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8 border-b pb-4">
              About
            </h2>
            <p className="text-lg text-gray-600">自己紹介欄</p>
          </div>
        </section>

        <SkillsSection />

        <WorksSection />

        <section
          id="contact"
          className="min-h-[50vh] py-24 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white"
        >
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-8 border-b border-gray-700 pb-4">
              Contact
            </h2>
            <p className="text-lg text-gray-300">
              お仕事のご依頼やご相談はこちらから。
            </p>
          </div>
        </section>
      </main>
    </>
  );
};
