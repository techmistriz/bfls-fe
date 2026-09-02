"use client";

import { useState, useCallback } from "react";
import { CouponSection } from "./components/CouponSection";
import { BillingDetails } from "./components/BillingDetails";
import { AssistanceSection } from "./components/AssistanceSection";
import { OrderSummary } from "./components/OrderSummary";

export default function CheckoutClient() {
  const [couponOpen, setCouponOpen] = useState(false);

  const toggleCoupon = useCallback(() => {
    setCouponOpen((prev) => !prev);
  }, []);

  return (
    <main className="mt-20 min-h-screen bg-white">
      <div className="mx-auto w-full max-w-290 px-4 py-10 sm:py-[50px] lg:py-[60px]">
        <div className="grid grid-cols-1 items-start gap-[35px] lg:grid-cols-[minmax(0,760px)_340px]">
          {/* LEFT SECTION */}
          <section className="min-w-0">
            <h2 className="mb-[13px] text-[24px] font-bold uppercase text-[#d9232e]">
              YOUR TICKET
            </h2>

            <div className="mb-[26px] h-[50px] w-full rounded-[5px] border border-[#f3b8bc] bg-[#fffafa]" />

            <CouponSection isOpen={couponOpen} onToggle={toggleCoupon} />

            <h2 className="mb-[23px] text-[20px] font-bold uppercase text-[#d9232e]">
              BILLING DETAILS
            </h2>

            <BillingDetails />

            <AssistanceSection />
          </section>

          {/* RIGHT SECTION */}
          <aside className="self-start lg:sticky lg:top-[100px]">
            <OrderSummary />
          </aside>
        </div>
      </div>
    </main>
  );
}
