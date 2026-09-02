import Image from "next/image";
import { GalleryIcon } from "@/src/components/icons/GalleryIcon";
import { DotsRow } from "@/src/components/ui/DotsRow";

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
          <div className="relative z-10 w-full lg:w-[54%]">
            <div className="relative aspect-[0.76] w-full overflow-hidden lg:h-[100%] lg:aspect-auto max-md:aspect-[1/0.85] max-sm:aspect-[1/0.95]">
              <Image
                src="/images/section-2-bfls.png"
                alt="BFSI Legal Landscape 2025"
                fill
                priority
                className="object-cover object-center"
              />
            </div>
          </div>

          <div className="relative z-20 -mt-1 w-full lg:-ml-1 lg:mt-0 lg:w-[57%] max-md:mt-0">
            <div className="absolute -right-[18px] top-[50px] bottom-[70px] w-full rounded-[7px] bg-[#dfe1e6] max-md:-right-[10px] max-md:top-[25px] max-md:bottom-[35px] max-sm:-right-[7px] max-sm:top-[18px] max-sm:bottom-[25px]" />

            <div className="relative rounded-[7px] bg-white px-7 py-9 shadow-[30px_10px_90px_0px_rgba(0,0,0,0.1)] sm:px-10 lg:px-[40px] lg:py-[28px] max-md:px-7 max-md:py-8 max-sm:px-5 max-sm:py-7">
              <h2 className="max-w-[430px] text-[27px] font-bold leading-[1.28] text-[#EF7F1B] font-archivo sm:text-[27px] max-md:max-w-full max-md:text-[24px] max-md:leading-[1.3] max-sm:text-[22px] max-sm:leading-[1.3]">
                BFSI Legal Landscape 2025:
                <br />
                Navigating Reform, Innovation &amp;
                <br className="hidden sm:block" />
                Resilience
              </h2>

              <div className="mb-[22px] mt-[12px] h-[3px] w-[120px] bg-[#EF7F1B] max-sm:mb-[18px] max-sm:mt-[10px]" />

              <div className="max-w-[490px] text-[18px] font-medium leading-[1.58] text-[#4a4a4a] font-archivo max-md:max-w-full max-md:text-[16px] max-md:leading-[1.6] max-sm:text-[15px] max-sm:leading-[1.6]">
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
                className="group mt-7 inline-flex h-[64px] items-center justify-center gap-2 rounded-[6px] border-2 border-[#EF7F1B] bg-[#EF7F1B] px-[27px] text-[15px] font-bold text-white font-archivo transition-all duration-300 hover:bg-transparent hover:text-[#EF7F1B] hover:border-[#EF7F1B] hover:shadow-lg max-md:mt-6 max-md:h-[58px] max-md:px-6 max-md:text-[14px] max-sm:mt-6 max-sm:h-[54px] max-sm:w-full max-sm:px-5 max-sm:text-[14px]"
              >
                <GalleryIcon className="shrink-0 text-white transition-colors duration-300 group-hover:text-[#EF7F1B]" />
                <span>SUMMIT GALLERY</span>
              </a>
            </div>
          </div>
        </div>

        <DotsRow
          color="bg-[#dfe2e8]"
          animation="float"
          className="mt-8 justify-end pr-2 max-md:mt-7 max-md:gap-[8px] max-sm:mt-6 max-sm:gap-[7px] max-sm:pr-0"
        />
        <DotsRow
          color="bg-[#dfe2e8]"
          animation="float"
          className="mt-5 justify-end pr-2 max-md:mt-4 max-md:gap-[8px] max-sm:mt-3 max-sm:gap-[7px] max-sm:pr-0"
        />
      </div>
    </section>
  );
}
