"use client";

import { useState } from "react";
import Image from "next/image";

type Speaker = {
  image: string;
  name: string;
  designation: string;
};

type AgendaItem = {
  time: string;
  title: React.ReactNode;
  speakers?: Speaker[];
  description?: React.ReactNode;
};

const agendaItems: AgendaItem[] = [
  {
    time: "08:30 AM",
    title: "REGISTRATION & WELCOME REFRESHMENTS",
  },
  {
    time: "09:15 AM",
    title: "WELCOME REMARKS BY LEX WITNESS",
  },
  {
    time: "09:30 AM",
    title: "RESERVED FOR SPECIAL ADDRESS",
  },
  {
    time: "10:00 AM",
    title: (
      <>
        <span className="text-[#f58216]">KEYNOTE ADDRESS</span> BY NILANJAN
        SINHA, GENERAL COUNSEL, ICICI BANK
        <br className="hidden md:block" />– SUMMIT CHAIR
      </>
    ),
    speakers: [
      {
        image: "/images/Rajiv-Mohapatra.jpeg",
        name: "KULIN DAVE",
        designation:
          "Head - Legal and DPO, Paymentz - Payment Gateway Solutions",
      },
      
    ],
    
  },
  {
    time: "10:15 AM",
    title: (
      <>
        <span className="text-[#f58216]">
          REGULATE TO ACCELERATE:
        </span>{" "}
        THE BALANCING ACT OF GROWTH &amp; GOVERNANCE
      </>
    ),
    speakers: [
      {
        image: "/images/Rajiv-Mohapatra.jpeg",
        name: "KULIN DAVE",
        designation:
          "Head - Legal and DPO, Paymentz - Payment Gateway Solutions",
      },
      {
        image: "/images/Rajiv-Mohapatra.jpeg",
        name: "ANKITA CHOUDHARY",
        designation:
          "Head - Contracts and Advisory - Legal, Nuvama Group",
      },
      {
        image: "/images/Rajiv-Mohapatra.jpeg",
        name: "RAJAT SRIVASTAV",
        designation:
          "General Counsel, Central Depository Services (India) Ltd. (CDSL)",
      },
      {
        image: "/images/Rajiv-Mohapatra.jpeg",
        name: "SHRADHA VYAS",
        designation:
          "Deputy Compliance Officer, CISO, Data Protection Expert, Munich Re India Branch",
      },
      {
        image: "/images/Rajiv-Mohapatra.jpeg",
        name: "VIJAYADHEER VALUSA",
        designation:
          "Chief General Manager (Legal), IDBI Bank",
      },
    ],
    description: (
      <>
        <p className="mb-7 italic font-archivo">
          With DPDPA, digital rails, and AI lending reshaping Banking, NBFCs
          &amp; Insurance, this panel examines how to balance compliance,
          innovation, and trust in a connected world.
        </p>

        <ul className="list-disc space-y-2 pl-8 italic font-archivo">
          <li>
            With DPDPA now a reality, how can banks plug data leaks and tech
            loopholes before they turn into liabilities—and where does this
            leave insurers juggling IoT data, underwriting models, and health
            disclosures?
          </li>

          <li>
            How does DPDPA reshape how financial institutions approach
            consumer data, analytics, and targeted offerings—and what does
            this mean for MSME credit access via Account Aggregators?
          </li>

          <li>
            KYC regimes and AML surveillance – how do we synergise between
            Banks, FinTech &amp; Insurance, especially as the Account
            Aggregator ecosystem scales and compliance challenges mount?
          </li>

          <li>
            Compliances for insurance web-aggregators and penalties hence—how
            is tech redefining the “premium–claim” equation in a
            digital-first insurance market?
          </li>
        </ul>
      </>
    ),
  },
  {
    time: "11:30 AM",
    title: (
      <>
        
        NETWORKING BREAK
      </>
    ),
  },
  {
    time: "12:00 NOON",
    title: (
      <>
        <span className="text-[#f58216]">
          INSURANCE, LENDING & ESG
        </span>{" "}
        REDEFINING CREDIT AND COMPLIANCE
        <p className="font-[14px] font-light text-[#000] mt-3 font-archivo">As the BFSI sector embraces reform and innovation, this session explores how regulation, sustainability, and technology are redefining</p>
      </>
    ),
    speakers: [
      {
        image: "/images/Rajiv-Mohapatra.jpeg",
        name: "KULIN DAVE",
        designation:
          "Head - Legal and DPO, Paymentz - Payment Gateway Solutions",
      },
      {
        image: "/images/Rajiv-Mohapatra.jpeg",
        name: "ANKITA CHOUDHARY",
        designation:
          "Head - Contracts and Advisory - Legal, Nuvama Group",
      },
      {
        image: "/images/Rajiv-Mohapatra.jpeg",
        name: "RAJAT SRIVASTAV",
        designation:
          "General Counsel, Central Depository Services (India) Ltd. (CDSL)",
      },
      {
        image: "/images/Rajiv-Mohapatra.jpeg",
        name: "SHRADHA VYAS",
        designation:
          "Deputy Compliance Officer, CISO, Data Protection Expert, Munich Re India Branch",
      },
      {
        image: "/images/Rajiv-Mohapatra.jpeg",
        name: "VIJAYADHEER VALUSA",
        designation:
          "Chief General Manager (Legal), IDBI Bank",
      },
    ],
    description: (
      <>
        <p className="mb-7 italic font-archivo">
          With DPDPA, digital rails, and AI lending reshaping Banking, NBFCs
          &amp; Insurance, this panel examines how to balance compliance,
          innovation, and trust in a connected world.
        </p>

        <ul className="list-disc space-y-2 pl-8 italic font-archivo">
          <li>
            With DPDPA now a reality, how can banks plug data leaks and tech
            loopholes before they turn into liabilities—and where does this
            leave insurers juggling IoT data, underwriting models, and health
            disclosures?
          </li>

          <li>
            How does DPDPA reshape how financial institutions approach
            consumer data, analytics, and targeted offerings—and what does
            this mean for MSME credit access via Account Aggregators?
          </li>

          <li>
            KYC regimes and AML surveillance – how do we synergise between
            Banks, FinTech &amp; Insurance, especially as the Account
            Aggregator ecosystem scales and compliance challenges mount?
          </li>

          <li>
            Compliances for insurance web-aggregators and penalties hence—how
            is tech redefining the “premium–claim” equation in a
            digital-first insurance market?
          </li>
        </ul>
      </>
    ),
  },
  {
    time: "01:00 PM",
    title: "NETWORKING LUNCH",
  },
  {
    time: "02:00 PM",
    title: (
      <>
        <span className="text-[#f58216]">
          DATA, PRIVACY &amp; DIGITAL RAILS IN FINTECH:
        </span>{" "}
        BUILDING TRUST IN A CONNECTED WORLD

        <p className="font-[14px] font-light text-[#000] mt-3 font-archivo">With DPDPA, digital rails, and AI lending reshaping Banking, NBFCs & Insurance, this panel examines how to balance</p>
      </>
    ),
    speakers: [
      {
        image: "/images/Rajiv-Mohapatra.jpeg",
        name: "KULIN DAVE",
        designation:
          "Head - Legal and DPO, Paymentz - Payment Gateway Solutions",
      },
      {
        image: "/images/Rajiv-Mohapatra.jpeg",
        name: "ANKITA CHOUDHARY",
        designation:
          "Head - Contracts and Advisory - Legal, Nuvama Group",
      },
      {
        image: "/images/Rajiv-Mohapatra.jpeg",
        name: "RAJAT SRIVASTAV",
        designation:
          "General Counsel, Central Depository Services (India) Ltd. (CDSL)",
      },
      {
        image: "/images/Rajiv-Mohapatra.jpeg",
        name: "SHRADHA VYAS",
        designation:
          "Deputy Compliance Officer, CISO, Data Protection Expert, Munich Re India Branch",
      },
      {
        image: "/images/Rajiv-Mohapatra.jpeg",
        name: "VIJAYADHEER VALUSA",
        designation:
          "Chief General Manager (Legal), IDBI Bank",
      },
    ],
    description: (
      <>
        <p className="mb-7 italic font-archivo">
          With DPDPA, digital rails, and AI lending reshaping Banking, NBFCs
          &amp; Insurance, this panel examines how to balance compliance,
          innovation, and trust in a connected world.
        </p>

        <ul className="list-disc space-y-2 pl-8 italic font-archivo">
          <li>
            With DPDPA now a reality, how can banks plug data leaks and tech
            loopholes before they turn into liabilities—and where does this
            leave insurers juggling IoT data, underwriting models, and health
            disclosures?
          </li>

          <li>
            How does DPDPA reshape how financial institutions approach
            consumer data, analytics, and targeted offerings—and what does
            this mean for MSME credit access via Account Aggregators?
          </li>

          <li>
            KYC regimes and AML surveillance – how do we synergise between
            Banks, FinTech &amp; Insurance, especially as the Account
            Aggregator ecosystem scales and compliance challenges mount?
          </li>

          <li>
            Compliances for insurance web-aggregators and penalties hence—how
            is tech redefining the “premium–claim” equation in a
            digital-first insurance market?
          </li>
        </ul>
      </>
    ),
  },
  {
    time: "03:00 PM",
    title: (
      <>
        <span className="text-[#f58216]">
          COMPLIANCE, GOVERNANCE & 
        </span>{" "}
        DISPUTE RESOLUTION (ADR)

        <p className="font-[14px] font-light text-[#000] mt-3 font-archivo">As compliance and ADR reshape Banking, NBFCs & Insurance, this panel explores faster dispute resolution, stronger governance, and</p>
      </>
    ),
    speakers: [
      {
        image: "/images/Rajiv-Mohapatra.jpeg",
        name: "KULIN DAVE",
        designation:
          "Head - Legal and DPO, Paymentz - Payment Gateway Solutions",
      },
      {
        image: "/images/Rajiv-Mohapatra.jpeg",
        name: "ANKITA CHOUDHARY",
        designation:
          "Head - Contracts and Advisory - Legal, Nuvama Group",
      },
      {
        image: "/images/Rajiv-Mohapatra.jpeg",
        name: "RAJAT SRIVASTAV",
        designation:
          "General Counsel, Central Depository Services (India) Ltd. (CDSL)",
      },
      {
        image: "/images/Rajiv-Mohapatra.jpeg",
        name: "SHRADHA VYAS",
        designation:
          "Deputy Compliance Officer, CISO, Data Protection Expert, Munich Re India Branch",
      },
      {
        image: "/images/Rajiv-Mohapatra.jpeg",
        name: "VIJAYADHEER VALUSA",
        designation:
          "Chief General Manager (Legal), IDBI Bank",
      },
    ],
    description: (
      <>
        <p className="mb-7 italic font-archivo">
          With DPDPA, digital rails, and AI lending reshaping Banking, NBFCs
          &amp; Insurance, this panel examines how to balance compliance,
          innovation, and trust in a connected world.
        </p>

        <ul className="list-disc space-y-2 pl-8 italic font-archivo">
          <li>
            With DPDPA now a reality, how can banks plug data leaks and tech
            loopholes before they turn into liabilities—and where does this
            leave insurers juggling IoT data, underwriting models, and health
            disclosures?
          </li>

          <li>
            How does DPDPA reshape how financial institutions approach
            consumer data, analytics, and targeted offerings—and what does
            this mean for MSME credit access via Account Aggregators?
          </li>

          <li>
            KYC regimes and AML surveillance – how do we synergise between
            Banks, FinTech &amp; Insurance, especially as the Account
            Aggregator ecosystem scales and compliance challenges mount?
          </li>

          <li>
            Compliances for insurance web-aggregators and penalties hence—how
            is tech redefining the “premium–claim” equation in a
            digital-first insurance market?
          </li>
        </ul>
      </>
    ),
  },
  {
    time: "04:00 PM",
    title: (
      <>
        <span className="text-[#f58216]">
          GALA LUCKY DRAW
        </span>{" "}
         & SIGNING OFF followed by 
        <span className="text-[#f58216]">
          'CHAI PE CHARCHA'
        </span>{" "}
      </>
    ),
  },
];

export default function Agenda() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="relative overflow-hidden bg-white py-[55px] sm:py-[70px] lg:py-[50px]">

      {/* Background Image */}
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

      {/* Overlay Image */}
      <div className="pointer-events-none absolute left-0 top-0 w-full">
        <Image
          src="/images/schedule__bottom_bg.png"
          alt=""
          width={1920}
          height={800}
          className="h-auto w-full opacity-[0.3]"
        />
      </div>

      {/* Background Pattern */}
      {/* <div
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage: `
            linear-gradient(45deg, #eeeeee 25%, transparent 25%),
            linear-gradient(-45deg, #eeeeee 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, #eeeeee 75%),
            linear-gradient(-45deg, transparent 75%, #eeeeee 75%)
          `,
          backgroundSize: "42px 42px",
          backgroundPosition:
            "0 0, 0 21px, 21px -21px, -21px 0px",
        }}
      /> */}

      {/* Decorative Elements */}
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

      {/* Main Container */}
      <div className="relative mx-auto max-w-[1190px] px-4 sm:px-6">

        {/* Section Heading */}
        <div className="mb-[45px] text-center">

          <p className="mb-3 text-[25px] font-bold leading-tight text-[#EF7F1B] sm:text-[30px] font-archivo">
            Power Packed &amp; Scintillating Discussions.
          </p>

          <h2 className="mx-auto max-w-[850px] text-[35px] font-bold leading-[1.15] text-[#566A8F] sm:text-[42px] lg:text-[44px] font-poppins">
            Panel Discussions, Focussed
            <br />
            Presentation, Veteran Talks &amp; More
          </h2>

          {/* Orange Line */}
          <div className="mx-auto mt-[22px] h-[3px] w-[120px] bg-[#EF7F1B]" />
        </div>

        {/* Agenda Box */}
        <div className="relative">

          {/* Summit Title */}
          <div className="relative z-10 mx-auto flex min-h-[80px] max-w-[610px] items-center justify-center bg-[#566e99] px-5 text-center shadow-sm">
            <p className="text-[16px] font-semibold text-white sm:text-[17px] font-archivo">
              The Lex Witness 8th Annual Banking &amp; Finance Legal Summit
              2025
            </p>
          </div>

          {/* Agenda List */}
          <div className="border border-[#e1e7f0] bg-white">

            {agendaItems.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={`${item.time}-${index}`}
                  className="border-b border-[#e1e7f0] last:border-b-0"
                >

                  {/* Agenda Row */}
                  <button
                    type="button"
                    onClick={() => toggleItem(index)}
                    className="group flex w-full items-start gap-13 px-6 py-[19px] text-left transition-colors duration-200 sm:px-12"
                  >

                    {/* Time */}
                    <span className="w-[165px] shrink-0 text-[23px] font-bold leading-[1.3] text-[#f58216] sm:text-[24px] font-poppins">
                      {item.time}
                    </span>

                    {/* Title */}
                    <span className="flex-1 pr-3 text-[20px] font-bold leading-[1.25] text-[#526b97] sm:text-[19px] font-poppins">
                      {item.title}
                    </span>

                    {/* Plus / Minus */}
                    <span
                      className={`mt-[3px] flex h-[31px] w-[31px] shrink-0 items-center justify-center rounded-full text-[25px] font-poppins font-light leading-none text-white transition-colors duration-200 ${isOpen
                          ? "bg-[#f58216]"
                          : "bg-[#566e99]"
                        }`}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {/* Open Content */}
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                      }`}
                  >
                    <div className="overflow-hidden">

                      <div className="px-6 pb-10 pt-2 sm:px-[265px]">

                        {/* Speakers */}
                        {item.speakers && (
                          <div className="w-[750px] mb-10 flex flex-wrap justify-self-start gap-x-0 gap-y-7">

                            {item.speakers.map((speaker) => (
                              <div
                                key={speaker.name}
                                className="w-[105px] text-center sm:w-[150px]"
                              >
                                {/* Speaker Image */}
                                <div className="relative mx-auto mb-2 h-[105px] w-[105px] overflow-hidden rounded-full sm:h-[115px] sm:w-[115px]">
                                  <Image
                                    src={speaker.image}
                                    alt={speaker.name}
                                    fill
                                    className="object-cover"
                                  />
                                </div>

                                {/* Name */}
                                <h4 className="text-[15px] font-bold uppercase leading-[1.25] text-[#526b97] font-poppins">
                                  {speaker.name}
                                </h4>

                                {/* Designation */}
                                <p className="mt-2 text-[14px] font-medium leading-[1.6] text-[#333] font-archivo">
                                  {speaker.designation}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Description */}
                        {item.description && (
                          <div className="w-[750px] text-[16px] font-medium leading-[1.65] text-[#333] font-archivo">
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

        {/* Bottom Dots */}
        <div className="mt-8 flex justify-end gap-[10px] pr-2">
          {Array.from({ length: 7 }).map((_, index) => (
            <span
              key={index}
              className="h-[7px] w-[7px] rounded-full bg-[#dfe2e8]"
            />
          ))}
        </div>

      </div>
    </section>
  );
}