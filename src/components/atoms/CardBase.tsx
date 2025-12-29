import { ReactNode } from "react";

type CardBaseProps = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  "aria-label"?: string;
};

export const CardBase = ({
  children,
  onClick,
  className = "",
  ...props
}: CardBaseProps) => {
  const baseClasses =
    "relative flex flex-col h-full backdrop-blur-sm rounded-2xl p-6 shadow-sm border transition-all duration-300 text-left w-full";

  const interactiveClasses = onClick
    ? "hover:shadow-lg hover:-translate-y-1 group"
    : "";

  const Component = onClick ? "button" : "div";

  return (
    <Component
      onClick={onClick}
      className={`${baseClasses} ${interactiveClasses} ${className}`}
      type={Component === "button" ? "button" : undefined}
      {...props}
    >
      {children}
    </Component>
  );
};
