import { ReactNode } from "react";

export interface Work {
  id: string;
  title: string;
  period: string;
  tech: string[];
  description: ReactNode;
  role: string;
  highlights: string[];
}
