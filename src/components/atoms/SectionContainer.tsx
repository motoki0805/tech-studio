import { ReactNode } from "react";

type SectionContainerProps = {
  id: string;
  title: string;
  children: ReactNode;
  maxWidth?: "5xl" | "7xl";
};

export const SectionContainer = ({
  id,
  title,
  children,
  maxWidth = "7xl",
}: SectionContainerProps) => {
  return (
    <section id={id} className="py-24 bg-[#faf7f5]">
      <div className={`mx-auto max-w-${maxWidth} px-4 sm:px-6 lg:px-8`}>
        {/* タイトルデザイン */}
        <div className="mb-8 text-center md:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-[#4a3f35] sm:text-4xl relative inline-block">
            {title}
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#b17a5c] rounded-full" />
          </h2>
        </div>
        {/* コンテンツ部分 */}
        {children}
      </div>
    </section>
  );
};
