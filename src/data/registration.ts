import type { RegistrationPlan } from "@/src/types";

export const registrationPlans: RegistrationPlan[] = [
  {
    title: "Corporate Registrations",
    price: "₹7,000",
    badge: "TRENDING",
    badgePosition: "top-center",
    bg: "#b9e3df",
    details: [
      "1 Seat – INR 10000 per Seat",
      "2 Seats – INR 7500 per Seat",
      "3 Seats – INR 7000 per Seat",
    ],
  },
  {
    title: "Law Firms & Solutions Providers",
    price: "₹9,000",
    bg: "#ebc9ec",
    details: [
      "1 Seat – INR 12000 per Seat",
      "2 Seats – INR 10000 per Seat",
      "3 Seats – INR 9000 per Seat",
    ],
  },
  {
    title: "International Delegates",
    price: "₹20,000",
    bg: "#ffc79f",
    details: [
      "1 Seat – INR 30000 per Seat",
      "2 Seats – INR 25000 per Seat",
      "3 Seats – INR 20000 per Seat",
    ],
  },
  {
    title: "The Lex Witness Annual Pass",
    price: "₹40,000",
    badge: "MOST PREFERRED",
    badgePosition: "top-right",
    bg: "#ffe6a8",
    details: [
      "Access to all Summits",
      "Transferable at any Time",
      "1 Pass: INR 60000 per pass",
      "2 Passes: INR 50000 per pass",
      "3 Passes: INR 40000 per pass",
    ],
  },
];
