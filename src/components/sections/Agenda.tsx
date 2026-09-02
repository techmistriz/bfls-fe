"use client";

import { useState } from "react";
import Image from "next/image";
import { agendaItems } from "@/src/data/agenda";

export default function Agenda() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      className="relative overflow-hidden bg-white py-[50px] sm:py-[70px] lg:py-[50px]"
      id="agenda"
    >
      <div className="pointer-events-none absolute left-0 top-0 w-full">
        <Image
          src="/images/schedule_top_bg.png"
          alt=""
          width={1920}
          height={800}
          className="h-auto w-full"
          priority
        />
      </div>

      <div className="pointer-events-none absolute left-0 top-0 w-full">
        <Image
          src="/images/schedule__bottom_bg.png"
          alt=""
          width={1920}
          height={800}
          className="h-auto w-full opacity-[0.3]"
        />
      </div>

      <span className="pointer-events-none absolute left-[11%] top-[27%] hidden h-[23px] w-[23px] rounded-full border-[3px] border-[#dfe3e9] lg:block" />
      <span className="pointer-events-none absolute right-[10%] top-[20%] hidden text-[70px] font-thin leading-none text-[#e5e8ed] lg:block">
        〽
      </span>
      <span className="pointer-events-none absolute left-[11%] top-[29%] hidden text-[70px] font-thin leading-none text-[#e5e8ed] lg:block">
        〰
      </span>
      <span className="pointer-events-none absolute right-[8%] top-[63%] hidden text-[65px] font-thin leading-none text-[#e5e8ed] lg:block">
        〰
      </span>

      <div className="relative mx-auto w-full max-w-[1190px] px-4 sm:px-6 lg:px-5">
        <div className="mb-[35px] text-center sm:mb-[45px]">
          <p className="mb-3 text-[21px] font-bold leading-tight text-[#EF7F1B] sm:text-[30px] font-archivo">
            Power Packed &amp; Scintillating Discussions.
          </p>
          <h2 className="mx-auto max-w-[850px] text-[27px] font-bold leading-[1.2] text-[#566A8F] sm:text-[42px] lg:text-[44px] font-poppins">
            Panel Discussions, Focussed
            <br className="hidden sm:block" />
            Presentation, Veteran Talks &amp; More
          </h2>
          <div className="mx-auto mt-[18px] h-[3px] w-[100px] bg-[#EF7F1B] sm:mt-[22px] sm:w-[120px]" />
        </div>

        <div className="relative w-full">
          <div className="relative z-10 mx-auto flex min-h-[70px] w-full max-w-[610px] items-center justify-center bg-[#566e99] px-4 py-4 text-center shadow-sm sm:min-h-[80px] sm:px-5">
            <p className="text-[14px] font-semibold leading-[1.4] text-white sm:text-[17px] font-archivo">
              The Lex Witness 8th Annual Banking &amp; Finance Legal Summit 2025
            </p>
          </div>

          <div className="w-full border border-[#e1e7f0] bg-white">
            {agendaItems.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={`${item.time}-${index}`}
                  className="border-b border-[#e1e7f0] last:border-b-0"
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(index)}
                    className="group flex w-full items-start gap-3 px-4 py-[17px] text-left transition-colors duration-200 sm:gap-6 sm:px-8 sm:py-[19px] lg:gap-13 lg:px-12"
                  >
                    <span className="w-[92px] shrink-0 text-[15px] font-bold leading-[1.4] text-[#f58216] sm:w-[125px] sm:text-[20px] lg:w-[165px] lg:text-[24px] font-poppins">
                      {item.time}
                    </span>

                    <span className="min-w-0 flex-1 pr-1 text-[14px] font-bold leading-[1.4] text-[#526b97] sm:pr-3 sm:text-[18px] lg:text-[19px] font-poppins">
                      {item.title}
                    </span>

                    <span
                      className={`mt-0.5 flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full text-[22px] font-light leading-none text-white transition-colors duration-200 sm:h-[31px] sm:w-[31px] sm:text-[25px] font-poppins ${
                        isOpen ? "bg-[#f58216]" : "bg-[#566e99]"
                      }`}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                    <div className="overflow-hidden">
                      <div className="w-full px-4 pb-8 pt-1 sm:px-8 sm:pb-10 lg:ml-[265px] lg:w-[750px] lg:px-0">
                        {item.speakers && (
                          <div className="mb-8 grid w-full grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-5 lg:flex lg:flex-wrap lg:gap-x-0 lg:gap-y-7">
                            {item.speakers.map((speaker) => (
                              <div
                                key={speaker.name}
                                className="w-full text-center sm:w-auto lg:w-[150px] lg:mr-0"
                              >
                                <div className="relative mx-auto mb-2 h-[85px] w-[85px] overflow-hidden rounded-full sm:h-[105px] sm:w-[105px] lg:h-[115px] lg:w-[115px]">
                                  <Image
                                    src={speaker.image}
                                    alt={speaker.name}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <h4 className="text-[12px] font-bold uppercase leading-[1.3] text-[#526b97] sm:text-[14px] lg:text-[15px] font-poppins">
                                  {speaker.name}
                                </h4>
                                <p className="mt-2 text-[11px] font-medium leading-[1.45] text-[#333] sm:text-[12px] lg:text-[14px] lg:leading-[1.6] font-archivo">
                                  {speaker.designation}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}

                        {item.description && (
                          <div className="w-full text-[13px] font-medium leading-[1.6] text-[#333] sm:text-[15px] lg:text-[16px] lg:leading-[1.65] font-archivo">
                            {item.description}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
