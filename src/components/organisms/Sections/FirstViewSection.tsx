"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import backgroundImage from "@/images/background-view.webp";

export const FirstViewSection = () => {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center pt-16 overflow-hidden"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src={backgroundImage}
            alt="Background"
            fill
            priority
            placeholder="blur"
            className="object-cover blur-[6px] brightness-[0.9]"
          />
        </div>
        <div className="absolute inset-0 bg-[#faf7f5]/45 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 px-4 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-[#4a3f35] sm:text-7xl mb-6 drop-shadow-sm animate-in slide-in-from-top fade-in duration-1000">
          {process.env.NEXT_PUBLIC_SITE_NAME_JA || "ななしまテック工房"}
        </h1>

        <p
          className={`text-lg text-[#5c534a] sm:text-xl max-w-2xl mx-auto font-mono font-medium min-h-[1.5em] bg-[#faf7f5]/40 inline-block px-4 py-1 rounded-full backdrop-blur-sm shadow-sm animate-in slide-in-from-top fade-in duration-1000`}
        >
          Web Application Development & Engineering Portfolio
        </p>

        <div
          className={`mt-12 flex justify-center gap-4 animate-in fade-in zoom-in duration-1000 pointer-events-auto`}
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
