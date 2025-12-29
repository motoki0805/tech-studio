import { ReactNode } from "react";
import { CardBase } from "../atoms/CardBase";

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
    <CardBase
      className={`p-8 border-l-4 ${borderColor} bg-white transition-transform hover:-translate-y-1 ${className}`}
    >
      {title && (
        <h3 className="text-xl font-bold text-[#4a3f35] mb-4">{title}</h3>
      )}
      <div className="text-[#5c534a] space-y-4 text-sm leading-relaxed">
        {children}
      </div>
    </CardBase>
  );
};
