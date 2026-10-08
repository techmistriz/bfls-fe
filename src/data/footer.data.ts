export interface ContactPerson {
  name: string;
  role: string;
  email: string;
  phone: string;
}

export interface SummitShowcase {
  title: string;
  description: string;
  location: string;
  linkLabel: string;
  linkHref: string;
}

export interface ExploreLink {
  label: string;
  href: string;
}

export const contactPeople: ContactPerson[] = [
  {
    name: "Bhupinder Kaur",
    role: "Sr. Manager – Brand Innovation",
    email: "bhupinder@witnsslive.in",
    phone: "+91-9654155065",
  },
  {
    name: "Neelima Maheshwari",
    role: "Sr. Manager – Brand Innovation",
    email: "neelima.maheshwari@witnsslive.in",
    phone: "+91-8800841600",
  },
];

export const summitShowcase: SummitShowcase[] = [
  {
    title: "The 8th Annual Banking & Finance Legal Summit 2025",
    description: "Banking / Crypto / Fintech & More",
    location: "21st November 2025, Taj Santacruz, Mumbai",
    linkLabel: "www.bfls.in",
    linkHref: "https://bfls.in/",
  },
  {
    title: "The 11th Annual Grand Masters 2025 – Pune Edition",
    description: "A 6-city pan-India General Counsel, multi-industry format",
    location: "New Delhi, Mumbai, Bengaluru, Hyderabad, Pune, Chennai",
    linkLabel: "www.grandmasters.in",
    linkHref: "https://www.grandmasters.in/",
  },
  {
    title: "The 11th Annual Grand Masters 2025 – Chennai Edition",
    description: "A 6-city pan-India General Counsel, multi-industry format",
    location: "New Delhi, Mumbai, Bengaluru, Hyderabad, Pune, Chennai",
    linkLabel: "www.grandmasters.in",
    linkHref: "https://www.grandmasters.in/",
  },
];

export const exploreLinks: ExploreLink[] = [
  {
    label: "READ & SUBSCRIBE",
    href: "https://www.magzter.com/IN/SRIGRO-INTERACTIVE-PVT-LTD/Lex-Witness/Business/",
  },
  { label: "OUR BRAND DECK", href: "/contact" },
  { label: "PRIVACY POLICY", href: "/privacy-policy" },
  { label: "REFUND POLICY", href: "/refund-policy" },
  { label: "TERMS & CONDITIONS", href: "/terms-conditions" },
];
