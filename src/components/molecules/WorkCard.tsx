"use client";

import { useState } from "react";
import { type Work } from "@/types/work";
import { CardBase } from "../atoms/CardBase";
import { WorkModal } from "./WorkModal";
import { FaBriefcase } from "react-icons/fa";

type WorkCardProps = {
  work: Work;
};

export const WorkCard = ({ work }: WorkCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <CardBase
        onClick={() => setIsOpen(true)}
        className="bg-white border-gray-100 hover:bg-white p-6"
        aria-label={`View details for ${work.title}`}
      >
        <div className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full bg-[#b17a5c]" />

        <div className="pl-3 h-full flex flex-col">
          <div>
            <div className="flex items-center gap-2 text-gray-900 font-semibold text-lg mb-2">
              <FaBriefcase className="text-xl shrink-0" />
              <span className="group-hover:text-[#b17a5c] transition-colors">
                {work.title}
              </span>
            </div>

            <div className="flex flex-col gap-y-2 text-xs font-medium mb-4">
              <div className="flex items-center text-[#b17a5c]">
                <span className="opacity-70 mr-2">Period:</span> {work.period}
              </div>
              <div className="flex items-center">
                <span className="opacity-70 mr-2">Role:</span> {work.role}
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {work.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-[10px] font-medium bg-[#f5efeb] text-[#b17a5c] rounded-full border border-[#e0d6ce]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-auto flex gap-2">
            <span className="flex-1 py-2 px-3 text-xs font-medium bg-gray-100 text-gray-700 rounded-lg group-hover:bg-gray-200 transition text-center">
              Details
            </span>
          </div>
        </div>
      </CardBase>

      <WorkModal isOpen={isOpen} onClose={() => setIsOpen(false)} work={work} />
    </>
  );
};
