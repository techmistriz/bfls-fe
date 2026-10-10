"use client";

import Image from "next/image";
import { DotsRow } from "@/src/components/ui/DotsRow";
import MouseParallax from "../ui/MouseParallax";
import { useEvents } from "@/src/hooks/useEvents";
import { formatDateWithOrdinal } from "@/src/utils/date";
import { EVENT_CONFIG } from "@/src/config/event";
import Link from "next/link";

const FALLBACK_BANNER_IMAGE = "/images/pexels-ravi-roshan-14907339-scaled.jpeg";

const FALLBACK_LOGO = "/images/BFLS_logo_26.webp";

export default function Banner() {
  const { events, loading } = useEvents();

  const event = events?.[0];

  const title = event?.title || "";

  const venue = event?.venue || "";
  const city = event?.city?.name || "";

  const location = [venue, city].filter(Boolean).join(", ").toUpperCase();

  return (
    <section className="relative mt-[88px] flex min-h-[664px] w-full items-center justify-center overflow-hidden max-lg:min-h-[620px] max-md:min-h-[680px] max-md:py-[60px] max-sm:min-h-[700px] max-sm:py-[50px]">
      {/* Background - loads immediately */}
      <div className="absolute inset-0">
        <Image
          src={FALLBACK_BANNER_IMAGE}
          alt={title || "Banking & Finance Legal Summit"}
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 z-[1] opacity-[0.8]">
        <Image
          src="/images/overlay2-1.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Circle */}
      <div className="absolute left-[12.3%] top-[6%] z-[1] h-[218px] w-[218px] overflow-hidden rounded-full opacity-[0.6] min-[768px]:max-[1499px]:left-[9.3%] max-lg:top-[5%] max-md:left-[40px] max-md:top-[4%] max-md:h-[150px] max-md:w-[150px] max-sm:left-[-55px] max-sm:top-[3%] max-sm:h-[130px] max-sm:w-[130px]">
        <Image
          src="/images/red-circle-shape-1.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <MouseParallax
        strength={30}
        className=" absolute left-[13.4%] top-[38%] z-[2] text-[48px] font-light text-white/20 max-lg:left-[8%] max-lg:top-[45%] max-md:left-[5%] max-md:top-[42%] max-md:text-[30px] max-sm:left-[4%] max-sm:top-[39%] max-sm:text-[26px] "
      >
        ×
      </MouseParallax>

      {/* Rotating Triangle */}
      <div className="absolute bottom-[18%] right-[22%] z-[2] animate-spin opacity-30 [animation-duration:12s] max-lg:right-[6%] max-md:bottom-[12%] max-md:right-[4%] max-sm:bottom-[8%] max-sm:right-[2%]">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 max-md:h-7 max-md:w-7"
        >
          <polygon
            points="20,4 36,36 4,36"
            stroke="white"
            strokeWidth="2"
            strokeOpacity="0.3"
            fill="white"
            fillOpacity="0.3"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto mt-[32px] md:mt-14 flex w-full max-w-[1170px] flex-col items-center px-2 pt-2 text-center max-md:px-3 max-sm:px-3">
        {/* Logo - fixed position */}
        <div className=" mb-8 -mt-6 flex h-[160px] w-full shrink-0 items-center justify-center max-lg:mb-7 max-lg:h-[145px] max-md:mb-6 max-md:h-[125px] max-sm:mb-5 max-sm:h-[105px] ">
          <Image
            src={FALLBACK_LOGO}
            alt={event?.event_type?.name || "Lex Witness"}
            width={435}
            height={160}
            priority
            className=" h-auto w-[435px] max-w-full max-lg:w-[390px] max-md:w-[330px] max-sm:w-[280px] "
          />
        </div>

        {/* Dynamic area - fixed/reserved height */}
        <div
          className="
      flex w-full shrink-0 flex-col items-center
      min-h-[330px]
    "
        >
          {/* Title */}
          <div className="flex h-[106px] w-full shrink-0 items-center justify-center sm:mt-4 max-md:mt-8 max-sm:mb-8">
            {!loading && event && (
              <h1 className=" max-w-295 font-poppins text-[48px] font-extrabold leading-[1.18] tracking-[-1px] text-white max-lg:text-[42px] max-md:max-w-175 max-md:text-[36px] max-md:leading-[1.2] max-md:tracking-[-0.5px] max-sm:max-w-full max-sm:text-[36px] max-sm:leading-[1.2] max-sm:tracking-[-0.3px] ">
                {event.title}
              </h1>
            )}
          </div>

          {/* Date + Venue */}
          <div className="flex h-auto min-h-[62px] w-full shrink-0 items-center justify-center max-sm:mb-4">
            {!loading && event && (
              <p className=" mt-8 font-poppins text-[24px] font-medium uppercase leading-[39px] text-white max-lg:mt-7 max-lg:text-[21px] max-md:mt-6 max-md:max-w-[650px] max-md:text-[19px] max-md:leading-[1.35] max-sm:mt-5 max-sm:max-w-[330px] max-sm:text-[18px] max-sm:leading-[1.5] ">
                {event.date ? formatDateWithOrdinal(event.date) : ""},{" "}
                {location}
              </p>
            )}
          </div>

          {/* Description */}
          {!EVENT_CONFIG.registrationOpen && (
            <div className="flex h-auto min-h-[100px] w-full shrink-0 items-center justify-center max-sm:mb-4">
              {!loading && event && (
                <p className="mt-12 max-w-[720px] font-archivo text-[16px] font-normal leading-[1.65] text-white max-lg:mt-10 max-md:mt-8 max-md:max-w-[650px] max-md:text-[15px] max-sm:mt-7 max-sm:max-w-[340px] max-sm:text-[16px] max-sm:leading-[1.7]">
                  The {event.year || "current"} edition was a massive success
                  and we now look forward to the next edition. In case you wish
                  to participate in future editions, please get in touch with
                  us.
                </p>
              )}
            </div>
          )}

          {/* CTA Buttons */}
          <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 px-2 max-sm:mt-6 sm:flex-row sm:flex-wrap sm:gap-4 sm:px-0">
            {!loading && event && (
              <>
                {/* Register + Past Editions: show when registration is open */}
                {EVENT_CONFIG.registrationOpen && (
                  <>
                    {/* Register */}
                    <a
                      href="#register"
                      className="group inline-flex h-[54px] w-full max-w-[200px] items-center justify-center gap-2 rounded-[6px] border border-transparent bg-[#f58216] px-3 font-archivo text-[14px] font-bold uppercase text-white shadow-sm transition-all duration-300 hover:border-[#EF7F1B] hover:bg-white hover:text-[#EF7F1B] hover:shadow-lg sm:h-[60px] sm:w-auto sm:max-w-none sm:min-w-[178px] sm:px-6 sm:text-[16px]"
                    >
                      <svg
                        aria-hidden="true"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        className="shrink-0"
                      >
                        <path d="M6 2h12v5H6V2Zm-2 7h16a2 2 0 0 1 2 2v8h-4v3H6v-3H2v-8a2 2 0 0 1 2-2Zm4 11h8v-5H8v5Zm10-8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
                      </svg>
                      <span>Register Now</span>
                    </a>

                    {/* Past Editions */}
                    <Link
                      href="/past-editions"
                      className="group inline-flex h-[54px] w-full max-w-[200px] items-center justify-center gap-2 rounded-[6px] border border-transparent bg-[#f58216] px-3 font-archivo text-[14px] font-bold uppercase text-white shadow-sm transition-all duration-300 hover:border-[#EF7F1B] hover:bg-white hover:text-[#EF7F1B] hover:shadow-lg sm:h-[60px] sm:w-auto sm:max-w-none sm:min-w-[178px] sm:px-6 sm:text-[16px]"
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
                          d="M14 4h6v6M20 4 10 14"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>Past Editions</span>
                    </Link>
                  </>
                )}

                {/* Contact Us: always visible */}
                <Link
                  href="/contact"
                  className="group inline-flex h-[54px] w-full max-w-[200px] items-center justify-center gap-2 rounded-[6px] border border-transparent bg-[#f58216] px-3 font-archivo text-[14px] font-bold uppercase text-white shadow-sm transition-all duration-300 hover:border-[#EF7F1B] hover:bg-white hover:text-[#EF7F1B] hover:shadow-lg sm:h-[60px] sm:w-auto sm:max-w-none sm:min-w-[178px] sm:px-6 sm:text-[16px]"
                >
                  <i
                    aria-hidden="true"
                    className="fas fa-download text-[20px] transition-colors duration-300 group-hover:text-[#EF7F1B]"
                  />
                  <span>Contact Us</span>
                </Link>
              </>
            )}
          </div>

          {/* Dots */}
          <div className="dots-group mt-4 hidden translate-x-[8px] sm:translate-x-[12px] md:block md:translate-x-[55px]">
            <DotsRow className="mt-4 max-md:mt-3 max-sm:mt-6" />
            <DotsRow className="mt-3 max-sm:mt-2" />
          </div>
        </div>
      </div>
    </section>
  );
}
