import Link from "next/link";
import Image from "next/image";
const ChevronDown = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);
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
            sizes="100vw"
            className="object-cover"
            unoptimized
          />
        </div>
        <div className="absolute inset-0 bg-[#faf7f5]/45" />
      </div>

      <div className="relative z-10 px-4 text-center">
        <h1 className="text-[8vw] font-extrabold tracking-tight text-[#4a3f35] sm:text-7xl mb-6 drop-shadow-sm animate-in slide-in-from-top fade-in duration-1000">
          {process.env.NEXT_PUBLIC_SITE_NAME_JA || "ななしまテック工房"}
        </h1>

        <p
          className={`text-lg text-[#5c534a] sm:text-xl max-w-2xl mx-auto font-mono font-medium min-h-[1.5em] bg-[#faf7f5]/80 inline-block px-4 py-1 rounded-full shadow-sm animate-in slide-in-from-top fade-in duration-1000`}
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
