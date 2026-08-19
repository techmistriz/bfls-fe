"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "Agenda", href: "#agenda" },
  { label: "Speakers", href: "#speakers" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Audience Profile", href: "#audience-profile" },
  { label: "Past Editions", href: "#past-editions" },
  { label: "Contact Us", href: "#contact" },
];

function GalleryIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3"
        y="4"
        width="18"
        height="16"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="8.5" cy="9" r="1.5" fill="currentColor" />
      <path
        d="M4 17L9 12L12.5 15.5L15 13L20 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.12)]">

        {/* ================= HEADER ================= */}
        <div
          className="
            mx-auto flex h-[88px] max-w-[1140px]
            items-center justify-between
            px-5 lg:px-0
          "
        >

          {/* ================= LOGO ================= */}
          <Link
            href="/"
            className="
              shrink-0
              lg:mr-8
            "
          >
            <img
              src="/images/main-logo.jpg"
              alt="main-logo"
              className="
                h-auto w-[150px] object-contain
                sm:w-[165px]
                lg:w-[180px]
              "
            />
          </Link>


          {/* ================= DESKTOP NAVIGATION ================= */}
          <nav className="hidden flex-1 items-center justify-end lg:flex">
            <ul className="flex items-center gap-0">
              {navItems.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center"
                >
                  <span className="mx-[14px] text-[20px] text-[#222]">
                    •
                  </span>

                  <Link
                    href={item.href}
                    className="
                      whitespace-nowrap
                      text-[15px]
                      font-semibold
                      text-[#333333]
                      transition-colors
                      hover:text-[#ef7614]
                    "
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>


          {/* ================= DESKTOP GALLERY BUTTON ================= */}
          <Link
            href="/gallery"
            className="
    group
    ml-5
    hidden
    h-[64px]
    shrink-0
    items-center
    justify-center
    gap-2
    rounded-[6px]
    border
    border-transparent
    bg-[#f57c16]
    px-7
    text-[15px]
    font-semibold
    text-white
    transition-all
    duration-300
    hover:border-[#EF7F1B]
    hover:bg-transparent
    hover:text-[#EF7F1B]
    lg:flex
  "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17.778"
              height="16"
              viewBox="0 0 17.778 16"
              className="shrink-0 text-white transition-colors duration-300 group-hover:text-[#EF7F1B]"
            >
              <path
                d="M3.778,16.333V19H6.444V16.333h8.889V19H18V13.667H3.778ZM17.111,9.222h2.667v2.667H17.111ZM2,9.222H4.667v2.667H2Zm13.333,2.667H6.444V4.778A1.783,1.783,0,0,1,8.222,3h5.333a1.783,1.783,0,0,1,1.778,1.778Z"
                transform="translate(-2 -3)"
                fill="currentColor"
              />
            </svg>

            <span>SUMMIT GALLERY</span>
          </Link>


          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="
              flex
              h-10
              w-10
              shrink-0
              flex-col
              items-center
              justify-center
              gap-[5px]
              rounded-md
              lg:hidden
            "
          >
            <span
              className={`
                block h-[3px] w-7 rounded-full
                bg-black
                transition-all duration-300
                ${isMenuOpen
                  ? "translate-y-[8px] rotate-45"
                  : ""
                }
              `}
            />

            <span
              className={`
                block h-[3px] w-7 rounded-full
                bg-black
                transition-all duration-300
                ${isMenuOpen
                  ? "opacity-0"
                  : ""
                }
              `}
            />

            <span
              className={`
                block h-[3px] w-7 rounded-full
                bg-black
                transition-all duration-300
                ${isMenuOpen
                  ? "-translate-y-[8px] -rotate-45"
                  : ""
                }
              `}
            />
          </button>

        </div>


        {/* ================= MOBILE NAVIGATION ================= */}
        <div
          className={`
            absolute left-0 top-[88px]
            w-full
            overflow-hidden
            bg-white
            shadow-lg
            transition-all duration-300
            lg:hidden
            ${isMenuOpen
              ? "max-h-[600px] opacity-100"
              : "max-h-0 opacity-0"
            }
          `}
        >
          <nav className="px-5 pb-5">

            <ul>
              {navItems.map((item) => (
                <li
                  key={item.label}
                  className="border-b border-[#e8e8e8]"
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="
                      flex
                      min-h-[56px]
                      items-center
                      justify-between
                      text-[16px]
                      text-[#171717]
                    "
                  >
                    <span>{item.label}</span>

                    {/* Arrow */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17.778"
                      height="16"
                      viewBox="0 0 17.778 16"
                    >
                      <path
                        d="M3.778,16.333V19H6.444V16.333h8.889V19H18V13.667H3.778ZM17.111,9.222h2.667v2.667H17.111ZM2,9.222H4.667v2.667H2Zm13.333,2.667H6.444V4.778A1.783,1.783,0,0,1,8.222,3h5.333a1.783,1.783,0,0,1,1.778,1.778Z"
                        transform="translate(-2 -3)"
                        fill="#fff"
                      />
                    </svg>

                  </Link>
                </li>
              ))}
            </ul>


            {/* ================= MOBILE GALLERY BUTTON ================= */}
            <Link
              href="/gallery"
              onClick={() => setIsMenuOpen(false)}
              className="
    group
    mt-5
    flex
    h-[58px]
    w-full
    items-center
    justify-center
    gap-2
    rounded-[6px]
    border
    border-transparent
    bg-[#f57c16]
    text-[15px]
    font-semibold
    text-white
    transition-all
    duration-300
    hover:border-[#EF7F1B]
    hover:bg-transparent
    hover:text-[#EF7F1B]
  "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17.778"
                height="16"
                viewBox="0 0 17.778 16"
                className="shrink-0 text-white transition-colors duration-300 group-hover:text-[#EF7F1B]"
              >
                <path
                  d="M3.778,16.333V19H6.444V16.333h8.889V19H18V13.667H3.778ZM17.111,9.222h2.667v2.667H17.111ZM2,9.222H4.667v2.667H2Zm13.333,2.667H6.444V4.778A1.783,1.783,0,0,1,8.222,3h5.333a1.783,1.783,0,0,1,1.778,1.778Z"
                  transform="translate(-2 -3)"
                  fill="currentColor"
                />
              </svg>

              <span>SUMMIT GALLERY</span>
            </Link>

          </nav>
        </div>

      </header>


      {/* ================= MOBILE OVERLAY ================= */}
      {isMenuOpen && (
        <button
          aria-label="Close menu"
          onClick={() => setIsMenuOpen(false)}
          className="
            fixed
            inset-0
            top-[88px]
            z-40
            bg-black/30
            lg:hidden
          "
        />
      )}
    </>
  );
}