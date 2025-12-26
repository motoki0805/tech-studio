"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NAV_ITEMS } from "@/data/navigation";

export const Header = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // メニューの開閉を切り替える関数
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // リンククリック時にメニューを閉じる関数
  const handleLinkClick = () => setIsMenuOpen(false);

  // スクロール検知の実装
  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => item.href.substring(1));

    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* ロゴエリア */}
        <Link
          href="/"
          className="flex items-center gap-3 group"
          onClick={handleLinkClick}
        >
          <div className="relative w-8 h-8 transition-transform duration-300 group-hover:scale-110 flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Tech Studio Logo"
              fill
              sizes="32px"
              className="object-contain"
              priority
            />
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 leading-none pt-1">
            {process.env.NEXT_PUBLIC_SITE_NAME_EN || "Tech Studio"}
          </span>
        </Link>

        {/* デスクトップ用ナビゲーション */}
        <nav className="hidden md:flex gap-8">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors relative group/link ${
                  isActive
                    ? "text-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover/link:w-full ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* ハンバーガーメニューボタン (モバイルのみ表示: md:hidden) */}
        <button
          className="md:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* モバイルメニュー展開部分 (isMenuOpenがtrueの時のみ表示) */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-100 shadow-lg animate-in slide-in-from-top-5 duration-200">
          <nav className="flex flex-col p-4">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={handleLinkClick}
                  className={`py-4 px-4 text-lg font-medium border-b border-gray-50 last:border-none transition-colors ${
                    isActive
                      ? "text-gray-900 bg-gray-50 rounded-lg"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};
