import Image from "next/image";

import { EVENT_CONFIG } from "@/src/config/event";

const discounts = [
  "Early Bird – 25% Discount for 1st 25 Seats",
  "Special Red Carpet for the Ladies – 10% Discount",
  "Lex Witness Subscribers – 10% Discount",
];

export default function SpecialDiscounts() {
  return (
    EVENT_CONFIG.registrationOpen && (
      <section className="w-full bg-white px-4 py-12 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[900px] text-center">
          <div className="flex justify-center">
            <Image
              src="/icons/alarm-clock.png"
              alt=""
              width={112}
              height={88}
              className="h-auto w-[72px] sm:w-[100px]"
            />
          </div>

          <h2 className="text-[34px] font-extrabold leading-[1.15] tracking-[-1.5px] text-[#566a8f] sm:text-[42px]">
            Avail Special Discounts
          </h2>

          <p className="mt-2 text-[18px] font-medium text-[#222] sm:text-[22px]">
            Limited Period{" "}
            <span className="text-[#EF7F1B]">Discounts &amp; Offers</span>
          </p>

          <div className="mx-auto mt-[18px] h-[3px] w-[100px] bg-[#EF7F1B] sm:mt-[22px] sm:w-[120px]" />

          <ul className="mt-8 space-y-3">
            {discounts.map((text) => (
              <li
                key={text}
                className="text-[15px] font-bold leading-[24px] text-[#222] sm:text-[17px]"
              >
                {text}
              </li>
            ))}
          </ul>

          <div className="mt-8 space-y-1 text-[14px] italic text-[#555] sm:text-[15px]">
            <p>*No 2 Discounts can be clubbed together</p>
            <p>*Taxes Extra as Applicable</p>
          </div>
        </div>
      </section>
    )
  );
}
