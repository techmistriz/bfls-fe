"use client";

import Image from "next/image";
import { stats } from "@/src/data/audienceStats";
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

      <div className="absolute left-[5%] top-[50%] hidden flex-col gap-10 lg:left-[8%] lg:flex animate-dots-float">
        <span className="h-[6px] w-[6px] rounded-full bg-[#f58216]" />
        <span className="ml-[-30px] h-[6px] w-[6px] rounded-full bg-[#3bcab5]" />
        <span className="ml-[-1px] h-[6px] w-[6px] rounded-full bg-[#2196e8]" />
        <span className="ml-[-30px] h-[6px] w-[6px] rounded-full bg-[#162e69]" />
      </div>

      <div className="absolute right-[5%] top-[50%] hidden flex-col gap-10 lg:right-[8%] lg:flex animate-dots-float">
        <span className="h-[6px] w-[6px] rounded-full bg-[#f58216]" />
        <span className="ml-[-30px] h-[6px] w-[6px] rounded-full bg-[#3bcab5]" />
        <span className="ml-[-1px] h-[6px] w-[6px] rounded-full bg-[#2196e8]" />
        <span className="ml-[-30px] h-[6px] w-[6px] rounded-full bg-[#162e69]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[560px] w-full max-w-[1200px] flex-col items-center px-5 pb-[50px] pt-[42px] sm:min-h-[580px] sm:px-6 sm:pb-0 sm:pt-[46px]">
        <p className="text-center text-[21px] font-bold leading-tight text-[#f58216] sm:text-[30px] font-archivo">
          Explore More #BFLS2025
        </p>

        <h2 className="mt-3 w-full max-w-[760px] text-center text-[28px] font-extrabold leading-[1.2] text-[#566e99] sm:text-[37px] sm:leading-[1.15] lg:text-[44px] font-poppins">
          Varied Industry Audience
          <br />
          with Even More Intense
          <br />
          Discussions
        </h2>

        <div className="mt-[18px] h-[3px] w-[100px] bg-[#f58216] sm:mt-[22px] sm:w-[120px]" />

        <div className="mt-[55px] grid w-full max-w-[820px] grid-cols-2 gap-x-4 gap-y-9 sm:mt-[76px] sm:grid-cols-4 sm:gap-x-0 sm:gap-y-0">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="flex min-w-0 flex-col items-center justify-center text-center"
            >
              <div className="flex items-baseline font-archivo">
                <span className="text-[36px] font-bold leading-none text-[#082568] sm:text-[42px] lg:text-[44px]">
                  {counts[index]}
                </span>
                <span
                  className="text-[34px] font-bold leading-none sm:text-[40px]"
                  style={{ color: stat.suffixColor }}
                >
                  {stat.suffix}
                </span>
              </div>

              <p className="mt-2 max-w-[140px] text-[14px] font-bold leading-[1.25] text-[#082568] sm:max-w-none sm:text-[18px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <a
          href="#gallery"
          className="group mt-15 inline-flex h-[64px] items-center justify-center gap-2 rounded-[6px] border-2 border-[#EF7F1B] bg-[#EF7F1B] px-[27px] text-[15px] font-bold text-white font-archivo transition-all duration-300 hover:bg-transparent hover:text-[#EF7F1B] hover:border-[#EF7F1B] hover:shadow-lg max-md:mt-6 max-md:h-[58px] max-md:px-6 max-md:text-[14px] max-sm:mt-6 max-sm:h-[54px] max-sm:w-full max-sm:px-5 max-sm:text-[14px]"
        >
          <GalleryIcon className="shrink-0 text-white transition-colors duration-300 group-hover:text-[#EF7F1B]" />
          <span>Sponsorship Opportunities</span>
        </a>
      </div>
    </section>
  );
}
