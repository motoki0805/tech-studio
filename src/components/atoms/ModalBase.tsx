"use client";

import { ReactNode } from "react";
import { FaTimes } from "react-icons/fa";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";

type ModalBaseProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  footer?: ReactNode;
  headerIcon?: ReactNode;
};

export const ModalBase = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  headerIcon,
}: ModalBaseProps) => {
  useBodyScrollLock(isOpen);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-white w-full max-w-4xl rounded-xl flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200 max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ヘッダー */}
        <div className="p-4 border-b flex justify-between items-center bg-gray-50 shrink-0">
          <h2 className="text-xl font-bold flex items-center gap-2">
            {headerIcon} {title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-200 rounded-full transition"
            aria-label="Close modal"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* コンテンツ */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-white">
          {children}
        </div>

        {/* フッター */}
        {footer && (
          <div className="p-4 border-t bg-gray-50 flex justify-end gap-3 shrink-0 flex-wrap">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};
