"use client";

import Image from "next/image";
import { stats } from "@/src/data/audienceStats.data";
import { useCountUp } from "@/src/hooks/useCountUp";
import { GalleryIcon } from "@/src/components/icons/GalleryIcon";

export default function AudienceStats() {
  const { sectionRef, counts } = useCountUp(stats.map((s) => s.value));

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[560px] w-full overflow-hidden bg-white sm:min-h-[580px]"
    >
      <div className="absolute left-0 top-0 w-full">
        <Image
          src="/images/gallery_and_funfact_bg.png"
          alt=""
          width={1920}
          height={800}
          className="h-auto min-h-full w-full object-cover object-top"
        />
      </div>

      <div className="absolute inset-0 bg-white/35" />

      {/* Left Dots */}
      <div className="absolute left-[5%] top-[50%] hidden flex-col gap-10 animate-dots-float lg:left-[8%] lg:flex">
        <span className="h-[6px] w-[6px] rounded-full bg-[#f58216]" />
        <span className="ml-[-30px] h-[6px] w-[6px] rounded-full bg-[#3bcab5]" />
        <span className="ml-[-1px] h-[6px] w-[6px] rounded-full bg-[#2196e8]" />
        <span className="ml-[-30px] h-[6px] w-[6px] rounded-full bg-[#162e69]" />
      </div>

      {/* Right Dots */}
      <div className="absolute right-[5%] top-[50%] hidden flex-col gap-10 animate-dots-float lg:right-[8%] lg:flex">
        <span className="h-[6px] w-[6px] rounded-full bg-[#f58216]" />
        <span className="ml-[-30px] h-[6px] w-[6px] rounded-full bg-[#3bcab5]" />
        <span className="ml-[-1px] h-[6px] w-[6px] rounded-full bg-[#2196e8]" />
        <span className="ml-[-30px] h-[6px] w-[6px] rounded-full bg-[#162e69]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[560px] w-full max-w-[1200px] flex-col items-center px-4 pb-[40px] pt-[38px] sm:min-h-[580px] sm:px-6 sm:pb-0 sm:pt-[46px]">
        {/* Subtitle */}
        <p className="text-center font-archivo text-[19px] font-semibold leading-tight text-[#f58216] sm:text-[32px]">
          Explore More #BFLS2025
        </p>

        {/* Heading */}
        <h2 className="mt-2 w-full max-w-[760px] text-center font-poppins text-[23px] font-extrabold leading-[1.25] text-[#566e99] sm:mt-3 sm:text-[37px] sm:leading-[1.15] lg:text-[45px]">
          Varied Industry Audience
          <br />
          with Even More Intense
          <br />
          Discussions
        </h2>

        {/* Divider */}
        <div className="mt-[15px] h-[3px] w-[90px] bg-[#f58216] sm:mt-[22px] sm:w-[120px]" />

        {/* Stats */}
        <div className="mt-[42px] grid w-full max-w-[820px] grid-cols-2 gap-x-3 gap-y-8 sm:mt-[76px] sm:grid-cols-4 sm:gap-x-0 sm:gap-y-0">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="flex min-w-0 flex-col items-center justify-center text-center"
            >
              <div className="flex items-baseline font-archivo">
                <span className="text-[32px] font-bold leading-none text-[#082568] sm:text-[42px] lg:text-[45px]">
                  {counts[index]}
                </span>

                <span
                  className="text-[30px] font-bold leading-none sm:text-[40px]"
                  style={{ color: stat.suffixColor }}
                >
                  {stat.suffix}
                </span>
              </div>

              <p className="mt-1.5 max-w-[125px] text-[12px] font-medium leading-[1.3] text-[#082568] sm:mt-2 sm:max-w-none sm:text-[19px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Button */}
        <a
          href="#gallery"
          className="group mt-10 inline-flex h-[54px] w-full max-w-[300px] items-center justify-center gap-2 rounded-[6px] border-2 border-[#EF7F1B] bg-[#EF7F1B] px-5 font-archivo text-[14px] font-bold text-white transition-all duration-300 hover:border-[#EF7F1B] hover:bg-transparent hover:text-[#EF7F1B] hover:shadow-lg sm:mt-15 sm:h-[64px] sm:w-auto sm:max-w-none sm:px-[27px] sm:text-[15px]"
        >
          <GalleryIcon className="shrink-0 text-white transition-colors duration-300 group-hover:text-[#EF7F1B]" />

          <span className="text-[13px] font-medium uppercase sm:text-[14px]">
            Sponsorship Opportunities
          </span>
        </a>
      </div>
    </section>
  );
}
