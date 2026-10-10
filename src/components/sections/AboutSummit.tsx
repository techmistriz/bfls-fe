import Image from "next/image";
import {
  Cpu,
  Landmark,
  Leaf,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

import { GalleryIcon } from "@/src/components/icons/GalleryIcon";
import { DotsRow } from "@/src/components/ui/DotsRow";
import MouseParallax from "../ui/MouseParallax";

const focusAreas: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Landmark,
    title: "Regulatory Reform",
    text: "RBI's latest frameworks and IBC amendments",
  },
  {
    icon: Cpu,
    title: "Digital Lending & Tech",
    text: "AI-driven lending, CBDCs and the digital credit stack",
  },
  {
    icon: ShieldCheck,
    title: "Data Privacy",
    text: "DPDPA enforcement and privacy mandates",
  },
  {
    icon: Leaf,
    title: "Sustainable Finance & ADR",
    text: "ESG finance and dispute resolution innovations",
  },
];

export default function AboutSummit() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-[80px] max-md:py-[50px] max-sm:py-[40px]">
      <div className="absolute left-0 top-0 w-full">
        <Image
          src="/images/about_section_top_bg.png"
          alt=""
          width={1920}
          height={800}
          className="h-auto w-full"
        />
      </div>

      <div className="relative mx-auto max-w-[1170px] px-5 max-md:px-6 max-sm:px-4">
        <div className="grid items-center gap-14 max-lg:gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Image */}
          <div className="relative">
            <div className="absolute -bottom-[18px] -left-[18px] hidden h-[85%] w-[85%] rounded-[10px] bg-[#dfe1e6] md:block" />
            <div className="relative aspect-[0.82] w-full overflow-hidden rounded-[10px] shadow-[30px_10px_90px_0px_rgba(0,0,0,0.12)] max-lg:aspect-[16/11]">
              <Image
                src="/images/section-2-bfls.png"
                alt="BFSI Legal Landscape 2026"
                fill
                priority
                className="object-cover object-center"
              />
            </div>

            <div className="absolute -right-5 bottom-8 rounded-[8px] bg-[#EF7F1B] px-6 py-4 text-white shadow-[0_15px_40px_rgba(239,127,27,0.35)] max-lg:right-4 max-sm:bottom-4 max-sm:px-4 max-sm:py-3">
              <p className="font-archivo text-[34px] font-extrabold leading-none max-sm:text-[26px]">
                2026
              </p>
              <p className="mt-1 font-archivo text-[12px] font-semibold uppercase tracking-[0.12em]">
                BFSI Legal Summit
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="flex items-center gap-3 font-archivo text-[13px] font-bold uppercase tracking-[0.18em] text-[#EF7F1B]">
              <span className="h-[2px] w-8 bg-[#EF7F1B]" />
              About the Summit
            </p>

            <h2 className="mt-4 font-archivo text-[34px] font-bold leading-[1.2] text-[#1d1d1f] max-md:text-[28px] max-sm:text-[24px]">
              BFSI Legal Landscape 2026:{" "}
              <span className="text-[#EF7F1B]">
                Navigating Reform, Innovation &amp; Resilience
              </span>
            </h2>

            <p className="mt-5 font-archivo text-[18px] font-medium leading-[1.6] text-[#4a4a4a] max-sm:text-[16px]">
              The Banking &amp; Finance Legal Summit 2026 brings together{" "}
              <strong className="text-[#1d1d1f]">
                leaders from banking, financial services, insurance, and fintech
              </strong>{" "}
              to address the sector&apos;s most urgent challenges and
              transformative opportunities.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {focusAreas.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="group flex gap-4 rounded-[8px] border border-[#ececec] bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#EF7F1B]/40 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[8px] bg-[#EF7F1B]/10 text-[#EF7F1B] transition-colors duration-300 group-hover:bg-[#EF7F1B] group-hover:text-white">
                    <Icon size={22} strokeWidth={2} />
                  </span>
                  <div>
                    <h3 className="font-archivo text-[16px] font-bold leading-tight text-[#1d1d1f]">
                      {title}
                    </h3>
                    <p className="mt-1 font-archivo text-[14px] leading-[1.45] text-[#6b6b6b]">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-7 border-l-[3px] border-[#EF7F1B] pl-5 font-archivo text-[16px] italic leading-[1.6] text-[#4a4a4a]">
              As compliance converges with growth strategy, the summit is a
              pivotal platform for industry leaders, policymakers and legal
              experts to shape the future of BFSI, where innovation thrives
              under robust governance.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 max-sm:justify-center">
              <a
                href="#agenda"
                className="inline-flex h-[56px] items-center justify-center rounded-[6px] border-2 border-[#EF7F1B] bg-[#EF7F1B] px-[27px] font-archivo text-[15px] font-bold text-white transition-all duration-300 hover:bg-transparent hover:text-[#EF7F1B] hover:shadow-lg"
              >
                EXPLORE THE AGENDA
              </a>
              <a
                href="#gallery"
                className="group inline-flex h-[56px] items-center justify-center gap-2 rounded-[6px] border-2 border-[#EF7F1B] px-[27px] font-archivo text-[15px] font-bold text-[#EF7F1B] transition-all duration-300 hover:bg-[#EF7F1B] hover:text-white"
              >
                <GalleryIcon className="shrink-0 text-[#EF7F1B] transition-colors duration-300 group-hover:text-white" />
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
            <DotsRow color="bg-[#dfe2e8]" className="mt-10 justify-end pr-2" />
            <DotsRow color="bg-[#dfe2e8]" className="mt-5 justify-end pr-2" />
          </div>
        </MouseParallax>
      </div>
    </section>
  );
}
