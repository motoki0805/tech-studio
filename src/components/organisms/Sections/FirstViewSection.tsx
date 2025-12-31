"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export const FirstViewSection = () => {
  const [text, setText] = useState("");
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const fullText = "Web Application Development & Engineering Portfolio";

  useEffect(() => {
    let subtitleInterval: NodeJS.Timeout;
    // タイトルを表示するタイマー
    const showTitleTimer = setTimeout(() => {
      setShowTitle(true);
    }, 100);
    // サブタイトルを表示するタイマー
    const startSubtitleTimer = setTimeout(() => {
      setShowSubtitle(true);
      let i = 0;
      subtitleInterval = setInterval(() => {
        setText(fullText.substring(0, i));
        i++;
        if (i > fullText.length) {
          clearInterval(subtitleInterval);
          setShowButton(true);
        }
      }, 50);
    }, 1500);

    return () => {
      clearTimeout(showTitleTimer);
      clearTimeout(startSubtitleTimer);
      if (subtitleInterval) {
        clearInterval(subtitleInterval);
      } 
    };
  }, [fullText]);

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center pt-16 overflow-hidden"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="relative w-full h-full animate-slow-zoom">
          <Image
            src="/background-view.png"
            alt="Background"
            fill
            priority
            className="object-cover blur-[6px] brightness-[0.9]"
          />
        </div>
        <div className="absolute inset-0 bg-[#faf7f5]/45 backdrop-blur-[1px]" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-1 hidden md:block">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#b17a5c]/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#4a3f35]/5 rounded-full blur-3xl animate-float animation-delay-2000" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-[#b17a5c]/10 rounded-full blur-3xl animate-float animation-delay-4000" />
      </div>

      <div className="relative z-10 px-4 text-center">
        <h1
          className={`text-5xl font-extrabold tracking-tight text-[#4a3f35] sm:text-7xl mb-6 drop-shadow-sm ${
            showTitle
              ? "animate-in fade-in slide-in-from-top-8 duration-1000 delay-300"
              : "opacity-0"
          }`}
        >
          {process.env.NEXT_PUBLIC_SITE_NAME_JA || "ななしまテック工房"}
        </h1>

        <p
          className={`text-lg text-[#5c534a] sm:text-xl max-w-2xl mx-auto font-mono font-medium min-h-[1.5em] bg-[#faf7f5]/40 inline-block px-4 py-1 rounded-full backdrop-blur-sm shadow-sm transition-opacity duration-300 ${
            showSubtitle ? "opacity-100" : "opacity-0"
          }`}
        >
          {text}
          <span className="inline-block w-0.5 h-5 ml-1 bg-[#b17a5c] animate-pulse" />
        </p>

        <div
          className={`mt-12 flex justify-center gap-4 animate-in fade-in zoom-in duration-1000 ${
            showButton
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <Link
            href="#about"
            className="rounded-full p-3 bg-[#b17a5c]/50 text-[#4a3f35] hover:bg-[#b17a5c]/70 transition-colors"
            aria-label="Scroll to About section"
          >
            <ChevronDown className="h-8 w-8 animate-bounce-subtle" />
          </Link>
        </div>
      </div>
    </section>
  );
};
