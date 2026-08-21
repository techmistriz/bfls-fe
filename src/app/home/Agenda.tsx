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
        <span className="text-[#f58216]">REGULATE TO ACCELERATE:</span>{" "}
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

        <ul className="list-disc space-y-2 pl-5 sm:pl-8 italic font-archivo">
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
    title: <>NETWORKING BREAK</>,
  },
  {
    time: "12:00 NOON",
    title: (
      <>
        <span className="text-[#f58216]">
          INSURANCE, LENDING &amp; ESG
        </span>{" "}
        REDEFINING CREDIT AND COMPLIANCE

        <p className="mt-3 font-archivo text-[13px] font-normal leading-[1.5] text-[#000] sm:text-[16px]">
          As the BFSI sector embraces reform and innovation, this session
          explores how regulation, sustainability, and technology are
          redefining
        </p>
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

        <ul className="list-disc space-y-2 pl-5 sm:pl-8 italic font-archivo">
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

        <p className="mt-3 font-archivo text-[13px] font-normal leading-[1.5] text-[#000] sm:text-[16px]">
          With DPDPA, digital rails, and AI lending reshaping Banking, NBFCs &
          Insurance, this panel examines how to balance
        </p>
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

        <ul className="list-disc space-y-2 pl-5 sm:pl-8 italic font-archivo">
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
          COMPLIANCE, GOVERNANCE &amp;
        </span>{" "}
        DISPUTE RESOLUTION (ADR)

        <p className="mt-3 font-archivo text-[13px] font-normal leading-[1.5] text-[#000] sm:text-[16px]">
          As compliance and ADR reshape Banking, NBFCs &amp; Insurance, this
          panel explores faster dispute resolution, stronger governance, and
        </p>
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

        <ul className="list-disc space-y-2 pl-5 sm:pl-8 italic font-archivo">
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
        <span className="text-[#f58216]">GALA LUCKY DRAW</span> &amp; SIGNING
        OFF followed by{" "}
        <span className="text-[#f58216]">'CHAI PE CHARCHA'</span>
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
    <section className="relative overflow-hidden bg-white py-[50px] sm:py-[70px] lg:py-[50px]" id="agenda">

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
      <div className="relative mx-auto w-full max-w-[1190px] px-4 sm:px-6 lg:px-5">

        {/* Section Heading */}
        <div className="mb-[35px] text-center sm:mb-[45px]">

          <p className="mb-3 text-[21px] font-bold leading-tight text-[#EF7F1B] sm:text-[30px] font-archivo">
            Power Packed &amp; Scintillating Discussions.
          </p>

          <h2 className="mx-auto max-w-[850px] text-[27px] font-bold leading-[1.2] text-[#566A8F] sm:text-[42px] lg:text-[44px] font-poppins">
            Panel Discussions, Focussed
            <br className="hidden sm:block" />
            Presentation, Veteran Talks &amp; More
          </h2>

          {/* Orange Line */}
          <div className="mx-auto mt-[18px] h-[3px] w-[100px] bg-[#EF7F1B] sm:mt-[22px] sm:w-[120px]" />
        </div>

        {/* Agenda Box */}
        <div className="relative w-full">

          {/* Summit Title */}
          <div className="relative z-10 mx-auto flex min-h-[70px] w-full max-w-[610px] items-center justify-center bg-[#566e99] px-4 py-4 text-center shadow-sm sm:min-h-[80px] sm:px-5">
            <p className="text-[14px] font-semibold leading-[1.4] text-white sm:text-[17px] font-archivo">
              The Lex Witness 8th Annual Banking &amp; Finance Legal Summit
              2025
            </p>
          </div>

          {/* Agenda List */}
          <div className="w-full border border-[#e1e7f0] bg-white">

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
                    className="
                      group
                      flex
                      w-full
                      items-start
                      gap-3
                      px-4
                      py-[17px]
                      text-left
                      transition-colors
                      duration-200
                      sm:gap-6
                      sm:px-8
                      sm:py-[19px]
                      lg:gap-13
                      lg:px-12
                    "
                  >

                    {/* Time */}
                    <span
                      className="
                        w-[92px]
                        shrink-0
                        text-[15px]
                        font-bold
                        leading-[1.4]
                        text-[#f58216]
                        sm:w-[125px]
                        sm:text-[20px]
                        lg:w-[165px]
                        lg:text-[24px]
                        font-poppins
                      "
                    >
                      {item.time}
                    </span>

                    {/* Title */}
                    <span
                      className="
                        min-w-0
                        flex-1
                        pr-1
                        text-[14px]
                        font-bold
                        leading-[1.4]
                        text-[#526b97]
                        sm:pr-3
                        sm:text-[18px]
                        lg:text-[19px]
                        font-poppins
                      "
                    >
                      {item.title}
                    </span>

                    {/* Plus / Minus */}
                    <span
                      className={`
                        mt-0.5
                        flex
                        h-[28px]
                        w-[28px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        text-[22px]
                        font-light
                        leading-none
                        text-white
                        transition-colors
                        duration-200
                        sm:h-[31px]
                        sm:w-[31px]
                        sm:text-[25px]
                        font-poppins
                        ${
                          isOpen
                            ? "bg-[#f58216]"
                            : "bg-[#566e99]"
                        }
                      `}
                    >
                      {isOpen ? "−" : "+"}
                    </span>

                  </button>

                  {/* Open Content */}
                  <div
                    className={`
                      grid
                      transition-[grid-template-rows]
                      duration-300
                      ease-in-out
                      ${
                        isOpen
                          ? "grid-rows-[1fr]"
                          : "grid-rows-[0fr]"
                      }
                    `}
                  >
                    <div className="overflow-hidden">

                      <div
                        className="
                          w-full
                          px-4
                          pb-8
                          pt-1
                          sm:px-8
                          sm:pb-10
                          lg:ml-[265px]
                          lg:w-[750px]
                          lg:px-0
                        "
                      >

                        {/* Speakers */}
                        {item.speakers && (
                          <div
                            className="
                              mb-8
                              grid
                              w-full
                              grid-cols-2
                              gap-x-4
                              gap-y-8
                              sm:grid-cols-3
                              sm:gap-x-5
                              lg:flex
                              lg:flex-wrap
                              lg:gap-x-0
                              lg:gap-y-7
                            "
                          >
                            {item.speakers.map((speaker) => (
                              <div
                                key={speaker.name}
                                className="
                                  w-full
                                  text-center
                                  sm:w-auto
                                  lg:w-[150px]
                                  lg:mr-0
                                "
                              >

                                {/* Speaker Image */}
                                <div
                                  className="
                                    relative
                                    mx-auto
                                    mb-2
                                    h-[85px]
                                    w-[85px]
                                    overflow-hidden
                                    rounded-full
                                    sm:h-[105px]
                                    sm:w-[105px]
                                    lg:h-[115px]
                                    lg:w-[115px]
                                  "
                                >
                                  <Image
                                    src={speaker.image}
                                    alt={speaker.name}
                                    fill
                                    className="object-cover"
                                  />
                                </div>

                                {/* Name */}
                                <h4
                                  className="
                                    text-[12px]
                                    font-bold
                                    uppercase
                                    leading-[1.3]
                                    text-[#526b97]
                                    sm:text-[14px]
                                    lg:text-[15px]
                                    font-poppins
                                  "
                                >
                                  {speaker.name}
                                </h4>

                                {/* Designation */}
                                <p
                                  className="
                                    mt-2
                                    text-[11px]
                                    font-medium
                                    leading-[1.45]
                                    text-[#333]
                                    sm:text-[12px]
                                    lg:text-[14px]
                                    lg:leading-[1.6]
                                    font-archivo
                                  "
                                >
                                  {speaker.designation}
                                </p>

                              </div>
                            ))}
                          </div>
                        )}

                        {/* Description */}
                        {item.description && (
                          <div
                            className="
                              w-full
                              text-[13px]
                              font-medium
                              leading-[1.6]
                              text-[#333]
                              sm:text-[15px]
                              lg:text-[16px]
                              lg:leading-[1.65]
                              font-archivo
                            "
                          >
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