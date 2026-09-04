"use client";

import { useState } from "react";
import { audienceCards } from "@/src/data/audienceProfile";
import { AudienceIcon } from "@/src/components/icons/AudienceIcons";
import Image from "next/image";

export default function AudienceProfile() {
  const [activeCard, setActiveCard] = useState<number | null>(2);

  return (
    <section
      className="relative w-full overflow-hidden bg-white py-[65px] sm:py-[75px] lg:py-[80px]"
      id="audience-profile"
    >
      <div className="relative z-10 mx-auto px-5 text-center">
        <p className="mb-[8px] text-[23px] font-bold leading-tight text-[#f58216] sm:text-[25px]">
          Network with a perfect blend of legal professionals.
        </p>
        <h2 className="text-[34px] font-bold leading-[1.15] text-[#566e99] sm:text-[40px] font-poppins">
          Audience Profile
        </h2>
        <div className="mx-auto mt-[15px] h-[3px] w-[95px] bg-[#f58216]" />
      </div>

      <div className="relative z-10 mx-auto mt-[60px] flex max-w-[1170] flex-col justify-center gap-[16px] px-5 md:flex-row md:gap-[15px]">
        {audienceCards.map((card, index) => {
          const isActive = activeCard === index;

          return (
            <div
              key={card.title}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
              className={`audience-card relative h-[335px] w-full cursor-pointer overflow-hidden rounded-[0_0_18px_0px] px-[25px] py-[35px] text-center transition-all duration-500 ease-out md:w-[370px] ${
                isActive
                  ? "bg-[#566e99] shadow-[0_15px_40px_rgba(50,70,110,0.20)]"
                  : "bg-white shadow-[30px_10px_90px_0px_rgba(0,0,0,0.1)]"
              }`}
            >
              <div
                className={`pointer-events-none absolute inset-0 z-0 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] ${
                  isActive
                    ? "translate-y-0 opacity-100"
                    : "translate-y-full opacity-0"
                }`}
              >
                <Image
                  src="/images/iconbox-overlay2.png"
                  alt=""
                  width={500}
                  height={500}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="relative z-10 flex h-[70px] items-center justify-center">
                <AudienceIcon type={card.icon} active={isActive} />
              </div>

              <h3
                className={`relative z-10 mt-[25px] text-[24px] font-poppins font-bold leading-[1.25] transition-colors duration-300 ${
                  isActive ? "text-white" : "text-[#566e99]"
                }`}
              >
                {card.title}
              </h3>

              <div
                className={`relative z-10 mt-[20px] max-h-[105px] overflow-y-auto pr-2 text-[16px] font-medium leading-[1.65] transition-colors duration-300 ${
                  isActive ? "text-white" : "text-[#666666]"
                }`}
              >
                {card.content.map((line, lineIndex) => (
                  <p key={lineIndex}>{line}</p>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
