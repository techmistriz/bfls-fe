"use client";

import { useState } from "react";
import Link from "next/link";
import { navItems } from "@/src/data/menu";
import { GalleryIcon } from "@/src/components/icons/GalleryIcon";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="fixed left-0 right-0 top-0 z-50 max-w-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.12)]">
        <div className="mx-auto flex h-[88px] w-full max-w-[1140px] items-center justify-between px-4 sm:px-5 lg:px-0">
          <Link href="/" onClick={closeMenu} className="block shrink-0 lg:mr-8">
            <Image
              src="/images/main-logo.jpg"
              alt="main-logo"
              className="block h-auto w-[110px] object-contain sm:w-[150px] md:w-[165px] lg:w-[180px]"
            />
          </Link>

          <nav className="hidden flex-1 items-center justify-end lg:flex">
            <ul className="flex items-center">
              {navItems.map((item) => (
                <li key={item.label} className="flex shrink-0 items-center">
                  <span className="mx-[10px] text-[18px] text-[#222] xl:mx-[14px] xl:text-[20px]">
                    •
                  </span>
                  <Link
                    href={item.href}
                    className="whitespace-nowrap text-[14px] font-semibold text-[#333333] transition-colors hover:text-[#ef7614] xl:text-[15px]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link
            href="/gallery"
            className="group ml-4 hidden h-[64px] shrink-0 items-center justify-center gap-2 rounded-[6px] border border-transparent bg-[#f57c16] px-5 text-[14px] font-semibold text-white transition-all duration-300 hover:border-[#EF7F1B] hover:bg-transparent hover:text-[#EF7F1B] xl:ml-5 xl:px-7 xl:text-[15px] lg:flex"
          >
            <GalleryIcon className="shrink-0 text-white transition-colors duration-300 group-hover:text-[#EF7F1B]" />
            <span>SUMMIT GALLERY</span>
          </Link>

          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="relative z-[10001] flex h-[48px] w-[48px] shrink-0 cursor-pointer touch-manipulation flex-col items-center justify-center gap-[5px] rounded-[6px] border border-[#ef7f1b] bg-white p-0 lg:hidden"
          >
            <span
              className={`block h-[3px] w-[26px] rounded-full bg-[#ef7f1b] transition-all duration-300 ${isMenuOpen ? "translate-y-[8px] rotate-45" : ""}`}
            />
            <span
              className={`block h-[3px] w-[26px] rounded-full bg-[#ef7f1b] transition-all duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`block h-[3px] w-[26px] rounded-full bg-[#ef7f1b] transition-all duration-300 ${isMenuOpen ? "-translate-y-[8px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 z-[9990] bg-black/40 lg:hidden"
        />
      )}

      <div
        className={`fixed left-0 top-[88px] z-[10000] w-full max-w-full overflow-y-auto bg-white shadow-[0_8px_20px_rgba(0,0,0,0.15)] transition-all duration-300 lg:hidden ${
          isMenuOpen
            ? "visible max-h-[calc(100vh-88px)] translate-y-0 opacity-100"
            : "invisible max-h-0 -translate-y-2 opacity-0"
        }`}
      >
        <nav className="w-full px-4 pb-5 pt-1 sm:px-5">
          <ul className="w-full">
            {navItems.map((item) => (
              <li key={item.label} className="w-full border-b border-[#e8e8e8]">
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className="flex min-h-[58px] w-full items-center justify-between gap-4 text-[15px] font-medium text-[#222] sm:text-[16px]"
                >
                  <span className="min-w-0 truncate">{item.label}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0 text-[#ef7f1b]"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/gallery"
            onClick={closeMenu}
            className="mt-5 flex h-[58px] w-full items-center justify-center gap-2 rounded-[6px] bg-[#f57c16] px-4 text-[14px] font-semibold text-white transition-all duration-300 hover:bg-[#ef7f1b] sm:text-[15px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="16" rx="2" />
              <circle cx="8.5" cy="9" r="1.5" />
              <path d="M4 17L9 12L12.5 15.5L15 13L20 18" />
            </svg>
            <span>SUMMIT GALLERY</span>
          </Link>
        </nav>
      </div>
    </>
  );
}
