"use client";

import type { MouseEvent } from "react";
import Link from "next/link";

import { GalleryIcon } from "@/src/components/icons/GalleryIcon";
import { EVENT_CONFIG } from "@/src/config/event";

const HEADER_HEIGHT = 88;

export default function ContactCTA() {
  const handleNavigationClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (!href.startsWith("/#") || window.location.pathname !== "/") {
      return;
    }

    const sectionId = href.split("#")[1];
    const target = document.getElementById(sectionId);

    if (!target) return;

    event.preventDefault();

    if (window.location.hash !== `#${sectionId}`) {
      window.history.pushState(null, "", href);
    }

    const targetPosition =
      target.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT;

    window.scrollTo({
      top: Math.max(0, targetPosition),
      behavior: "smooth",
    });
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
    <section className="relative min-h-[440px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/count_down_timer_bg.jpg')" }}
      />

      <div className="absolute inset-0 bg-[#536b91]/[0.72]" />

      <div className="relative z-10 flex min-h-[440px] items-center justify-center px-5 py-[100px]">
        <div className="mx-auto w-full max-w-[1050px] text-center text-white">
          <p className="mb-[8px] text-[18px] font-semibold leading-[1.3] sm:text-[25px] lg:text-[32px]">
            Time&apos;s Ticking &amp; Discounts Drying Up
          </p>

          <h2 className="text-[26px] font-bold leading-[1.15] sm:text-[40px] lg:text-[56px] font-poppins">
            Get in Touch to Avail the Best Deal.
          </h2>

          <p className="mx-auto mt-[35px] max-w-[1100px] text-[20px] font-medium leading-[1.65] text-white sm:text-[16px] lg:text-[20px]">
            Whether you&apos;re a legal advisor specializing in the nuances of
            BFSI regulations, or you&apos;re at the helm of legal, risk,
            compliance, and data privacy for corporations within banking,
            financial services, insurance, or fintech, this summit promises
            invaluable insights and networking opportunities.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5 uppercase">
            {/* Register / Summit Gallery */}
            <a
              href={actionButton.href}
              onClick={(event) =>
                handleNavigationClick(event, actionButton.href)
              }
              className="group inline-flex h-[64px] w-full max-w-[260px] items-center justify-center gap-2 rounded-[6px] border-2 border-[#EF7F1B] bg-[#EF7F1B] px-[27px] font-archivo text-[16px] font-bold text-white transition-all duration-300 hover:bg-white hover:text-[#EF7F1B] hover:shadow-lg sm:w-auto sm:min-w-[220px]"
            >
              <GalleryIcon className="shrink-0 text-white transition-colors duration-300 group-hover:text-[#EF7F1B]" />
              <span>{actionButton.label}</span>
            </a>

            {/* Agenda */}
            <Link
              href="/#agenda"
              onClick={(event) => handleNavigationClick(event, "/#agenda")}
              className="group inline-flex h-[64px] w-full max-w-[260px] items-center justify-center gap-2 rounded-[6px]  border-2 border-[#EF7F1B] bg-[#EF7F1B] px-[27px] font-archivo text-[16px] font-bold text-white transition-all duration-300 hover:bg-white hover:text-[#EF7F1B] hover:shadow-lg sm:w-auto sm:min-w-[220px]"
            >
              <svg
                aria-hidden="true"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0"
              >
                <path
                  d="M8 2v4M16 2v4M3.5 9h17M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 13h2M8 17h6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Agenda</span>
            </Link>

            {/* Speakers */}
            <Link
              href="/#speakers"
              onClick={(event) => handleNavigationClick(event, "/#speakers")}
              className="group inline-flex h-[64px] w-full max-w-[260px] items-center justify-center gap-2 rounded-[6px] border-2 border-[#EF7F1B] bg-[#EF7F1B] px-[27px] font-archivo text-[16px] font-bold text-white transition-all duration-300 hover:bg-white hover:text-[#EF7F1B] hover:shadow-lg sm:w-auto sm:min-w-[220px]"
            >
              <i
                aria-hidden="true"
                className="fas fa-microphone shrink-0 text-[20px]"
              />
              <span>Speakers</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
