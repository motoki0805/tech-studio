"use client";

import { ModalBase } from "../atoms/ModalBase";
import { type Work } from "@/types/work";
import { FaBriefcase } from "react-icons/fa";

type WorkModalProps = {
  isOpen: boolean;
  onClose: () => void;
  work: Work;
};

export const WorkModal = ({ isOpen, onClose, work }: WorkModalProps) => {
  return (
    <ModalBase
      isOpen={isOpen}
      onClose={onClose}
      title={work.title}
      headerIcon={<FaBriefcase />}
    >
      <div className="space-y-6">
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold tracking-wider">
          <div className="flex items-center text-[#b17a5c]">
            <span className="mr-2 opacity-60">Period:</span>
            {work.period}
          </div>
          <div className="flex items-center text-[#4a3f35]">
            <span className="mr-2 opacity-60">Role:</span>
            {work.role}
          </div>
        </div>

        <div className="text-[#5c534a] space-y-4 leading-relaxed border-t border-[#f5efeb] pt-6">
          <p className="text-xs font-bold uppercase tracking-widest text-[#8c7e71]">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-2">
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

        <div className="text-[#5c534a] space-y-4 leading-relaxed border-t border-[#f5efeb] pt-6">
          <p className="text-xs font-bold uppercase tracking-widest text-[#8c7e71]">
            Description
          </p>
          <div className="space-y-3">{work.description}</div>
        </div>

        {work.highlights && work.highlights.length > 0 && (
          <div className="text-[#5c534a] space-y-4 leading-relaxed border-t border-[#f5efeb] pt-6">
            <p className="text-xs font-bold uppercase tracking-widest text-[#8c7e71]">
              Key Achievements
            </p>
            <ul className="list-none space-y-2">
              {work.highlights.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 text-[#b17a5c] mt-1">・</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </ModalBase>
  );
};
