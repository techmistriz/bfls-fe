"use client";

import Agenda from "@/src/components/sections/Agenda";
import type { Event } from "@/src/types/event.type";

const avatars = [
  "mockup/avatar-e9edf3.svg",
  "mockup/avatar-fde9d6.svg",
  "mockup/avatar-e3e9f2.svg",
];
let sid = 0;
const sp = (n: number) =>
  Array.from({ length: n }, (_, i) => {
    sid++;
    return {
      id: sid,
      event_agenda_id: 0,
      speaker_id: sid,
      ordering: i,
      status: 1,
      speaker: {
        id: sid,
        name: `Speaker Name ${sid}`,
        designation:
          i === 0 && n > 2
            ? "Moderator · General Counsel, Bank Name"
            : "Designation, Organisation Name",
        image: avatars[sid % 3],
        linkedin_url: "#",
      },
    };
  });

const desc = `<p>Placeholder full description. India's banking and financial services sector is moving through a period of rapid regulatory change. This session brings together in-house counsel, regulators and practitioners to unpack what the latest frameworks mean for day-to-day legal and compliance work.</p>
<ul><li>Key regulatory updates and how institutions are responding</li><li>Practical approaches to compliance, governance and risk</li><li>What legal teams should prepare for over the next 12 months</li></ul>
<p>The discussion closes with an open Q&amp;A with the audience.</p>`;

const agendas = [
  [
    "09:30 AM",
    "Inaugural Address &amp; <span>Keynote</span>",
    1,
    "Setting the tone for the day with a keynote on the state of BFSI law in India.",
  ],
  [
    "10:15 AM",
    "Panel Discussion: <span>Navigating Regulatory Reform</span>",
    5,
    "Leading GCs and regulators discuss how recent RBI and SEBI reforms are reshaping compliance.",
  ],
  [
    "11:30 AM",
    "Focussed Presentation: <span>Digital Lending &amp; Fintech</span>",
    2,
    "A deep dive into digital lending guidelines, co-lending and fintech partnerships.",
  ],
  [
    "12:15 PM",
    "Veteran Talk: <span>Lessons from Three Decades of Banking Law</span>",
    1,
    "A veteran of the industry reflects on landmark moments and what comes next.",
  ],
  [
    "02:00 PM",
    "Panel Discussion: <span>Data Privacy &amp; the DPDP Act</span>",
    4,
    "What the Digital Personal Data Protection Act means for banks, NBFCs and insurers.",
  ],
] as const;

const event = {
  id: 1,
  title: "Banking & Finance Legal Summit 2026 · Day 1 (placeholder)",
  agendas: agendas.map(([t, title, n, short], i) => ({
    id: i + 1,
    event_id: 1,
    agenda_time: t,
    agenda_title: title,
    agenda_short_description: short,
    agenda_description: desc,
    status: 1,
    agenda_speakers: sp(n),
  })),
} as unknown as Event;

export default function AgendaMockup() {
  return <Agenda previewEvent={event} defaultOpenIndex={1} />;
}
