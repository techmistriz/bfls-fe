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
    title: "The 9th Annual Banking & Finance Legal Summit 2026",
    description: "Banking / Crypto / Fintech & More",
    location: "",
    linkLabel: "www.bfls.in",
    linkHref: "https://bfls.in/",
  },
  {
    title: "The 12th Annual Grand Masters 2026 – 7 City Series",
    description: "A pan-India General Counsel, multi-industry format",
    location:
      "New Delhi, Mumbai, Pune, Bengaluru, Hyderabad, Chennai & Ahmedabad",
    linkLabel: "www.grandmasters.in",
    linkHref: "https://www.grandmasters.in/",
  },
  {
    title: "The 13th Annual Real Estate & Construction Legal Summit 2027",
    description: "Real Estate / Infra / Construction & More",
    location: "",
    linkLabel: "www.rcls.in",
    linkHref: "https://www.rcls.in/",
  },
  {
    title: "The 12th Annual IT Legal Summit 2027",
    description: "IT / ITeS / e-Commerce / Gaming & More",
    location: "",
    linkLabel: "www.itlegalsummit.com",
    linkHref: "https://www.itlegalsummit.com/",
  },
  {
    title:
      "The 12th Annual Media, Advertising & Entertainment Legal Summit 2027",
    description: "A Cross-Sectional Legal Dig on M&E Sector & More",
    location: "",
    linkLabel: "www.maels.in",
    linkHref: "https://www.maels.in/",
  },
  {
    title: "The 13th Annual Pharma Legal & Compliance Summit 2027",
    description: "Pharma / Healthcare / Medical Devices & More",
    location: "",
    linkLabel: "www.plcs.co.in",
    linkHref: "https://www.plcs.co.in/",
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
