"use client";

import { useEffect } from "react";

export const useBodyScrollLock = (isLocked: boolean) => {
  useEffect(() => {
    if (!isLocked) {
      return;
    }

    const originalOverflow = window.getComputedStyle(document.body).overflow;
    const originalPaddingRight =
      window.getComputedStyle(document.body).paddingRight;

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${
      parseFloat(originalPaddingRight || "0") + scrollbarWidth
    }px`;

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [isLocked]);
};
