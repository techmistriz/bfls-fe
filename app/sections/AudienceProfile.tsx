"use client";

import { useState } from "react";

type AudienceCard = {
  title: string;
  content: string[];
  icon: "people" | "legal" | "government";
};

const audienceCards: AudienceCard[] = [
  {
    title: "Audience Profile",
    icon: "people",
    content: [
      "Corporate",
      "In-house General Counsel Community – Legal and Regulatory Heads, Compliance Heads, Litigation Heads, Data Protection Officers, C Level Executives, Directors, Stakeholders",
    ],
  },
  {
    title: "Core Legal Community",
    icon: "legal",
    content: [
      "Judiciary, Law Firms, Law Practitioners and Experts, Managing Partners, Founding Partners, Partners, Allied Industry – CAs, CSs, LegalTech Companies, Solution Providers – SaaS Providers",
    ],
  },
  {
    title: "Government & More",
    icon: "government",
    content: [
      "Government Machinery – Ministries, Regulators and Policy Makers etc",
    ],
  },
];

function PeopleIcon({ active }: { active: boolean }) {
  return (
    <svg
      width="82"
      height="82"
      viewBox="0 0 62 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-colors duration-300"
    >
      <circle
        cx="36"
        cy="20"
        r="10"
        stroke={active ? "white" : "#f58216"}
        strokeWidth="2.5"
      />

      <path
        d="M19 47C19 38.7157 25.7157 32 34 32H38C46.2843 32 53 38.7157 53 47"
        stroke={active ? "white" : "#f58216"}
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <circle
        cx="18"
        cy="26"
        r="7"
        stroke={active ? "white" : "#f58216"}
        strokeWidth="2.5"
      />

      <path
        d="M5 47C5 40.3726 10.3726 35 17 35H20"
        stroke={active ? "white" : "#f58216"}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LegalIcon({ active }: { active: boolean }) {
  return (
    <svg
      width="110"
      height="92"
      viewBox="0 0 62 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Center Pole */}
      <path
        d="M31 13V47"
        stroke={active ? "white" : "#f58216"}
        strokeWidth="2.5"
      />

      {/* Top Bar */}
      <path
        d="M20 18H42"
        stroke={active ? "white" : "#f58216"}
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Left */}
      <path
        d="M20 18L13 34"
        stroke={active ? "white" : "#f58216"}
        strokeWidth="2.5"
      />

      <path
        d="M20 18L27 34"
        stroke={active ? "white" : "#f58216"}
        strokeWidth="2.5"
      />

      <path
        d="M12 34H28"
        stroke={active ? "white" : "#f58216"}
        strokeWidth="2.5"
      />

      {/* Right */}
      <path
        d="M42 18L35 34"
        stroke={active ? "white" : "#f58216"}
        strokeWidth="2.5"
      />

      <path
        d="M42 18L49 34"
        stroke={active ? "white" : "#f58216"}
        strokeWidth="2.5"
      />

      <path
        d="M34 34H50"
        stroke={active ? "white" : "#f58216"}
        strokeWidth="2.5"
      />

      {/* Base */}
      <path
        d="M22 47H40"
        stroke={active ? "white" : "#f58216"}
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <path
        d="M17 51H45"
        stroke={active ? "white" : "#f58216"}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GovernmentIcon({ active }: { active: boolean }) {
  return (
    <svg
      width="110"
      height="92"
      viewBox="0 0 62 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="16"
        y="17"
        width="30"
        height="32"
        stroke={active ? "white" : "#f58216"}
        strokeWidth="2.5"
      />

      <path
        d="M22 17V10H40V17"
        stroke={active ? "white" : "#f58216"}
        strokeWidth="2.5"
      />

      <path
        d="M22 25H40"
        stroke={active ? "white" : "#f58216"}
        strokeWidth="2.5"
      />

      <rect
        x="27"
        y="25"
        width="8"
        height="8"
        stroke={active ? "white" : "#f58216"}
        strokeWidth="2.5"
      />

      <path
        d="M22 41H40"
        stroke={active ? "white" : "#f58216"}
        strokeWidth="2.5"
      />
    </svg>
  );
}

function AudienceIcon({
  type,
  active,
}: {
  type: AudienceCard["icon"];
  active: boolean;
}) {
  if (type === "people") {
    return <PeopleIcon active={active} />;
  }

  if (type === "legal") {
    return <LegalIcon active={active} />;
  }

  return <GovernmentIcon active={active} />;
}

export default function AudienceProfile() {
  const [activeCard, setActiveCard] = useState<number | null>(2);

  return (
    <section className="relative w-full overflow-hidden bg-white py-[65px] sm:py-[75px] lg:py-[80px]">

      {/* =========================
          HEADING
      ========================== */}

      <div className="relative z-10 mx-auto px-5 text-center">

        <p className="mb-[8px] text-[23px] font-bold leading-tight text-[#f58216] sm:text-[25px]">
          Network with a perfect blend of legal professionals.
        </p>

        <h2 className="text-[34px] font-bold leading-[1.15] text-[#566e99] sm:text-[40px] font-poppins">
          Audience Profile
        </h2>

        {/* Orange Line */}
        <div className="mx-auto mt-[15px] h-[3px] w-[95px] bg-[#f58216]" />

      </div>

      {/* =========================
          CARDS
      ========================== */}

      <div className="relative z-10 mx-auto mt-[60px] flex max-w-[1170] flex-col justify-center gap-[16px] px-5 md:flex-row md:gap-[15px]">

        {audienceCards.map((card, index) => {
          const isActive = activeCard === index;

          return (
            <div
              key={card.title}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
              className={`
                audience-card
                relative
                h-[335px]
                w-full
                cursor-pointer
                overflow-hidden
                rounded-[0_0_18px_0px]
                px-[25px]
                py-[35px]
                text-center
                transition-all
                duration-500
                ease-out
                md:w-[370px]
                ${isActive
                  ? "bg-[#566e99] shadow-[0_15px_40px_rgba(50,70,110,0.20)]"
                  : "bg-white shadow-[30px_10px_90px_0px_rgba(0,0,0,0.1)]"
                }
              `}
            >

              {/* Hover Background Image */}
              {isActive && (
                <div className="pointer-events-none absolute inset-0 z-0">
                  <img
                    src="/images/iconbox-overlay2.png"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              )}

              

              {/* Icon */}
              <div className="relative z-10 flex h-[70px] items-center justify-center">
                <AudienceIcon
                  type={card.icon}
                  active={isActive}
                />
              </div>

              {/* Title */}
              <h3
                className={`
                  relative z-10 mt-[25px]
                  text-[24px] font-poppins
                  font-bold
                  leading-[1.25]
                  transition-colors duration-300
                  ${isActive
                    ? "text-white"
                    : "text-[#566e99]"
                  }
                `}
              >
                {card.title}
              </h3>

              {/* Content */}
              <div
                className={`relative z-10 mt-[20px] max-h-[105px] overflow-y-auto pr-2 text-[16px] font-medium leading-[1.65] transition-colors duration-300 ${isActive
                    ? "text-white"
                    : "text-[#666666]"
                  }
              `}
              >
                {card.content.map((line, lineIndex) => (
                  <p key={lineIndex}>
                    {line}
                  </p>
                ))}
              </div>

              

            </div>
          );
        })}

      </div>

    </section>
  );
}