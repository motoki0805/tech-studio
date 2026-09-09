import { ReactNode } from "react";
import { CardBase } from "../atoms/CardBase";

type InfoCardProps = {
  title: string;
  children: ReactNode;
  accentColor?: string;
  className?: string;
};

export const InfoCard = ({
  title,
  children,
  accentColor = "bg-[#b17a5c]",
  className = "",
}: InfoCardProps) => {
  return (
    <CardBase
      accentColor={accentColor}
      className={`p-8 bg-white border-gray-100 transition-transform hover:-translate-y-1 ${className}`}
    >
      <div className="pl-3">
        {title && (
          <h3 className="text-xl font-bold text-[#4a3f35] mb-4">{title}</h3>
        )}
        <div className="text-[#5c534a] space-y-4 text-sm leading-relaxed">
          {children}
        </div>
      </div>
    </CardBase>
  );
};
