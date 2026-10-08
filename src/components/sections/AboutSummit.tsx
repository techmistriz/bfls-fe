import Image from "next/image";

import { GalleryIcon } from "@/src/components/icons/GalleryIcon";
import { DotsRow } from "@/src/components/ui/DotsRow";
import MouseParallax from "../ui/MouseParallax";

export default function AboutSummit() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-[70px] lg:py-[50px] max-md:py-[50px] max-sm:py-[40px]">
      <div className="absolute left-0 top-0 w-full">
        <Image
          src="/images/about_section_top_bg.png"
          alt=""
          width={1920}
          height={800}
          className="h-auto w-full"
        />
      </div>

      <div className="relative mx-auto mb-[10px] max-w-[1170px] px-5 max-md:px-6 max-sm:px-4">
        <div className="relative flex flex-col lg:flex-row">
          {/* Image */}
          <div className="relative z-10 w-full lg:w-[58%]">
            <div className="relative aspect-[0.76] w-full overflow-hidden max-md:aspect-[1/0.85] max-sm:aspect-[1/0.95] lg:aspect-auto lg:h-full">
              <Image
                src="/images/section-2-bfls.png"
                alt="BFSI Legal Landscape 2025"
                fill
                priority
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Content */}
          <div className="relative z-20 w-full lg:-ml-1 lg:w-[57%]">
            <div className="absolute -right-[18px] bottom-[70px] top-[50px] hidden w-full rounded-[7px] bg-[#dfe1e6] md:block" />

            <div className="relative rounded-[7px] bg-white px-4 py-9 shadow-[30px_10px_90px_0px_rgba(0,0,0,0.1)] max-md:px-7 max-md:py-8 max-sm:px-2 max-sm:py-7 sm:px-10 lg:px-[40px] lg:py-[28px]">
              <h2 className="max-w-[430px] font-archivo text-[27px] font-bold leading-[1.28] text-[#EF7F1B] max-md:max-w-full max-md:text-[24px] max-sm:text-[22px]">
                BFSI Legal Landscape 2025:
                <br />
                Navigating Reform, Innovation &amp;
                <br className="hidden sm:block" />
                Resilience
              </h2>

              <div className="mb-[22px] mt-[12px] h-[3px] w-[120px] bg-[#EF7F1B] max-sm:mb-[18px] max-sm:mt-[10px]" />

              <div className="max-w-[490px] font-archivo text-[18px] font-medium leading-[1.58] text-[#4a4a4a] max-md:max-w-full max-md:text-[16px] max-sm:text-[15px]">
                <p>
                  The Banking &amp; Finance Legal Summit 2025 brings together{" "}
                  <strong>
                    leaders from banking, financial services, insurance, and
                    fintech
                  </strong>{" "}
                  to address the sector&apos;s most urgent challenges and
                  transformative opportunities.
                </p>

                <p className="mt-4">
                  This year&apos;s agenda dives deep into{" "}
                  <strong>
                    regulatory reforms, digital lending evolution, data privacy
                    mandates, sustainable finance,
                  </strong>{" "}
                  and <strong>dispute resolution innovations.</strong>
                </p>

                <p className="mt-4">
                  From{" "}
                  <strong>RBI&apos;s latest frameworks, IBC amendments,</strong>{" "}
                  and <strong>DPDPA enforcement</strong>, to{" "}
                  <strong>
                    emerging technologies like AI-driven lending and CBDCs,
                  </strong>{" "}
                  every session is designed to equip decision-makers with
                  actionable insights.
                </p>

                <p className="mt-4">
                  As <strong>compliance converges with growth strategy,</strong>{" "}
                  this summit provides a pivotal platform for{" "}
                  <strong>
                    industry leaders, policymakers, and legal experts
                  </strong>{" "}
                  to shape the future of BFSI — where innovation thrives under
                  robust governance.
                </p>
              </div>

              <a
                href="#gallery"
                className="group mt-7 inline-flex h-[64px] items-center justify-center gap-2 rounded-[6px] border-2 border-[#EF7F1B] bg-[#EF7F1B] px-[27px] font-archivo text-[15px] font-bold text-white transition-all duration-300 hover:bg-transparent hover:text-[#EF7F1B] hover:shadow-lg max-md:mt-6 max-md:h-[58px] max-md:px-6 max-md:text-[14px] max-sm:h-[54px] max-sm:w-full max-sm:px-5"
              >
                <GalleryIcon className="shrink-0 text-white transition-colors duration-300 group-hover:text-[#EF7F1B]" />
                <span>SUMMIT GALLERY</span>
              </a>
            </div>
          </div>
        </div>

        {/* Decorative Dots */}
        <MouseParallax
          strength={12}
          className="hidden w-full -translate-x-[100px] md:block"
        >
          <div className="hidden md:block">
            <DotsRow color="bg-[#dfe2e8]" className="mt-8 justify-end pr-2" />

            <DotsRow color="bg-[#dfe2e8]" className="mt-5 justify-end pr-2" />
          </div>
        </MouseParallax>
      </div>
    </section>
  );
}
