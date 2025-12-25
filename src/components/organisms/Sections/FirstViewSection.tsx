"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export const FirstViewSection = () => {
  const [text, setText] = useState("");
  const fullText = "Web Application Development & Engineering Portfolio";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center bg-[#faf7f5] pt-16"
    >
      {/* 背景装飾 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#b17a5c]/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#4a3f35]/5 rounded-full blur-3xl animate-float animation-delay-2000" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-[#b17a5c]/10 rounded-full blur-3xl animate-float animation-delay-4000" />
      </div>

      <div className="relative z-10 px-4 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-[#4a3f35] sm:text-7xl mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          テック工房
        </h1>

        <p className="text-lg text-[#5c534a] sm:text-xl max-w-2xl mx-auto font-mono min-h-[1.5em]">
          {text}
          <span className="inline-block w-0.5 h-5 ml-1 bg-[#b17a5c] animate-pulse" />
        </p>

        <div className="mt-12 flex justify-center gap-4 animate-in fade-in zoom-in duration-1000 delay-500">
          <Link
            href="#portfolio"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#b17a5c] px-8 py-4 text-white font-bold shadow-lg transition-all duration-300 hover:bg-[#96634a] hover:scale-105"
          >
            <span className="relative">実績を見る</span>
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
              <div className="relative h-full w-8 bg-white/20" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
