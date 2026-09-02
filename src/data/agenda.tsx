// Shared description block — reused across 4 identical panel sessions.
// NOTE: verify this is intentional final copy and not placeholder content

import { AgendaItem } from "../types";

// left over from duplicating the first panel item.
const dpdpaPanelDescription = (
  <>
    <p className="mb-7 italic font-archivo">
      With DPDPA, digital rails, and AI lending reshaping Banking, NBFCs &amp;
      Insurance, this panel examines how to balance compliance, innovation, and
      trust in a connected world.
    </p>

    <ul className="list-disc space-y-2 pl-5 sm:pl-8 italic font-archivo">
      <li>
        With DPDPA now a reality, how can banks plug data leaks and tech
        loopholes before they turn into liabilities—and where does this leave
        insurers juggling IoT data, underwriting models, and health disclosures?
      </li>
      <li>
        How does DPDPA reshape how financial institutions approach consumer
        data, analytics, and targeted offerings—and what does this mean for MSME
        credit access via Account Aggregators?
      </li>
      <li>
        KYC regimes and AML surveillance – how do we synergise between Banks,
        FinTech &amp; Insurance, especially as the Account Aggregator ecosystem
        scales and compliance challenges mount?
      </li>
      <li>
        Compliances for insurance web-aggregators and penalties hence—how is
        tech redefining the “premium–claim” equation in a digital-first
        insurance market?
      </li>
    </ul>
  </>
);

// Shared speaker panel — reused across 4 identical sessions.
const bfsiPanelSpeakers: import("@/src/types").Speaker[] = [
  {
    image: "/images/Rajiv-Mohapatra.jpeg",
    name: "KULIN DAVE",
    designation: "Head - Legal and DPO, Paymentz - Payment Gateway Solutions",
  },
  {
    image: "/images/Rajiv-Mohapatra.jpeg",
    name: "ANKITA CHOUDHARY",
    designation: "Head - Contracts and Advisory - Legal, Nuvama Group",
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
    designation: "Chief General Manager (Legal), IDBI Bank",
  },
];

export const agendaItems: AgendaItem[] = [
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
        <span className="text-[#f58216]">REGULATE TO ACCELERATE:</span> THE
        BALANCING ACT OF GROWTH &amp; GOVERNANCE
      </>
    ),
    speakers: bfsiPanelSpeakers,
    description: dpdpaPanelDescription,
  },
  {
    time: "11:30 AM",
    title: <>NETWORKING BREAK</>,
  },
  {
    time: "12:00 NOON",
    title: (
      <>
        <span className="text-[#f58216]">INSURANCE, LENDING &amp; ESG</span>{" "}
        REDEFINING CREDIT AND COMPLIANCE
        <p className="mt-3 font-archivo text-[13px] font-normal leading-[1.5] text-[#000] sm:text-[16px]">
          As the BFSI sector embraces reform and innovation, this session
          explores how regulation, sustainability, and technology are redefining
        </p>
      </>
    ),
    speakers: bfsiPanelSpeakers,
    description: dpdpaPanelDescription,
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
    speakers: bfsiPanelSpeakers,
    description: dpdpaPanelDescription,
  },
  {
    time: "03:00 PM",
    title: (
      <>
        <span className="text-[#f58216]">COMPLIANCE, GOVERNANCE &amp;</span>{" "}
        DISPUTE RESOLUTION (ADR)
        <p className="mt-3 font-archivo text-[13px] font-normal leading-[1.5] text-[#000] sm:text-[16px]">
          As compliance and ADR reshape Banking, NBFCs &amp; Insurance, this
          panel explores faster dispute resolution, stronger governance, and
        </p>
      </>
    ),
    speakers: bfsiPanelSpeakers,
    description: dpdpaPanelDescription,
  },
  {
    time: "04:00 PM",
    title: (
      <>
        <span className="text-[#f58216]">GALA LUCKY DRAW</span> &amp; SIGNING
        OFF followed by <span className="text-[#f58216]">CHAI PE CHARCHA</span>
      </>
    ),
  },
];
