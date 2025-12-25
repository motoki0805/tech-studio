import { ReactNode } from "react";

type InfoCardProps = {
  title: string;
  children: ReactNode;
  borderColor?: string;
  className?: string;
};

export const InfoCard = ({
  title,
  children,
  borderColor = "border-[#b17a5c]",
  className = "",
}: InfoCardProps) => {
  return (
    <div
      className={`bg-white p-8 rounded-2xl border-l-4 ${borderColor} shadow-sm transition-transform hover:-translate-y-1 text-left h-full ${className}`}
    >
      <h3 className="text-xl font-bold text-[#4a3f35] mb-4">{title}</h3>
      <div className="text-[#5c534a] space-y-4 text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
};
