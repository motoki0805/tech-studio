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

        <div className="pl-3">
          <div className="flex items-center gap-2 text-gray-900 font-semibold text-lg mb-2">
            <FaBriefcase className="text-xl shrink-0" />
            <span className="group-hover:text-[#b17a5c] transition-colors">
              {work.title}
            </span>
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-medium mb-4">
            <span className="text-[#b17a5c]">
              <span className="opacity-70">Period:</span> {work.period}
            </span>
            <span>
              <span className="opacity-70">Role:</span> {work.role}
            </span>
          </div>

          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{work.tech}</p>

          <div className="mt-auto text-right">
            <span className="inline-block py-2 px-3 text-xs font-medium bg-gray-100 text-gray-700 rounded-lg group-hover:bg-gray-200 transition">
              Details
            </span>
          </div>
        </div>
      </CardBase>

      <WorkModal isOpen={isOpen} onClose={() => setIsOpen(false)} work={work} />
    </>
  );
};
