"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { GalleryIcon } from "@/src/components/icons/GalleryIcon";
import { navItems } from "@/src/data/menu.data";
import { EVENT_CONFIG } from "@/src/config/event";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const actionButton = EVENT_CONFIG.registrationOpen
    ? {
        label: "REGISTER NOW",
        href: "/#register",
      }
    : {
        label: "SUMMIT GALLERY",
        href: "/gallery",
      };

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="fixed left-0 right-0 top-0 z-50 max-w-full bg-white shadow-[2px_2px_10px_#CCCCCC]">
        <div className="mx-auto flex h-[88px] w-full max-w-[1140px] items-center justify-between px-4 sm:px-5 lg:px-0">
          <Link href="/" onClick={closeMenu} className="block shrink-0 lg:mr-8">
            <Image
              src="/images/main-logo.jpg"
              alt="main-logo"
              width={180}
              height={60}
              className="block h-auto w-[110px] object-contain sm:w-[150px] md:w-[165px] lg:w-[180px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden flex-1 items-center justify-end lg:flex">
            <ul className="flex items-center">
              {navItems.map((item) => (
                <li key={item.label} className="flex shrink-0 items-center">
                  <span className="mx-[10px] text-[18px] text-[#222] xl:mx-[15px] xl:text-[20px]">
                    •
                  </span>

                  <Link
                    href={item.href}
                    className="whitespace-nowrap text-[14px] font-medium text-[#333333] transition-colors hover:text-[#ef7614] xl:text-[16px]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Action Button */}
          <Link
            href={actionButton.href}
            className="group ml-4 hidden h-[64px] shrink-0 items-center justify-center gap-2 rounded-[6px] border border-transparent bg-[#f57c16] px-5 text-[14px] font-medium text-white transition-all duration-300 hover:border-[#EF7F1B] hover:bg-transparent hover:text-[#EF7F1B] xl:ml-5 xl:px-6 xl:text-[14px] lg:flex"
          >
            {!EVENT_CONFIG.registrationOpen && (
              <GalleryIcon className="shrink-0 text-white transition-colors duration-300 group-hover:text-[#EF7F1B]" />
            )}

            <span>{actionButton.label}</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="relative z-[10001] flex h-[48px] w-[48px] shrink-0 cursor-pointer touch-manipulation flex-col items-center justify-center gap-[5px] rounded-[6px] border border-[#ef7f1b] bg-white p-0 lg:hidden"
          >
            <span className="block h-[3px] w-[26px] rounded-full bg-[#ef7f1b]" />

            <span className="block h-[3px] w-[26px] rounded-full bg-[#ef7f1b]" />

            <span className="block h-[3px] w-[26px] rounded-full bg-[#ef7f1b]" />
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      {isMenuOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 z-[9990] bg-black/40 lg:hidden"
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed left-0 top-0 z-[10000] h-screen w-[85%] max-w-[360px] bg-white shadow-[4px_0_20px_rgba(0,0,0,0.2)] transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex h-[88px] items-center justify-between border-b border-[#e8e8e8] px-4 sm:px-5">
          <Link href="/" onClick={closeMenu}>
            <Image
              src="/images/main-logo.jpg"
              alt="main-logo"
              width={180}
              height={60}
              className="h-auto w-[140px] object-contain"
            />
          </Link>

          <button
            type="button"
            aria-label="Close menu"
            onClick={closeMenu}
            className="flex h-[42px] w-[42px] items-center justify-center rounded-[6px] border border-[#ef7f1b] text-[#ef7f1b]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer Navigation */}
        <nav className="h-[calc(100vh-88px)] overflow-y-auto px-4 pb-6 pt-2 sm:px-5">
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

          {/* Mobile Action Button */}
          <Link
            href={actionButton.href}
            onClick={closeMenu}
            className="mt-5 flex h-[58px] w-full items-center justify-center gap-2 rounded-[6px] bg-[#f57c16] px-4 text-[14px] font-semibold text-white transition-all duration-300 hover:bg-[#ef7f1b] sm:text-[15px]"
          >
            {!EVENT_CONFIG.registrationOpen && (
              <GalleryIcon className="shrink-0 text-white" />
            )}

            <span>{actionButton.label}</span>
          </Link>
        </nav>
      </div>
    </>
  );
}
