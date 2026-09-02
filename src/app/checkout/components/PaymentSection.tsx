"use client";

import Image from "next/image";
import { useCallback, useState } from "react";

export function PaymentSection() {
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);

  const handlePlaceOrder = useCallback(async () => {
    setIsPlacingOrder(true);
    try {
      // TODO: Implement order placement logic with Razorpay
      console.log("Placing order...");
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // Handle successful order
    } catch (error) {
      console.error("Order placement error:", error);
    } finally {
      setIsPlacingOrder(false);
    }
  }, []);

  return (
    <div className="mt-[20px] rounded-[5px] bg-[#ededf2] px-[15px] py-[18px] sm:px-[19px] sm:py-[20px]">
      <div className="flex items-start justify-between gap-3">
        <div className="text-[11px] font-medium leading-[15px] text-[#222]">
          Credit Card/Debit
          <br />
          Card/NetBanking
        </div>

        <div className="flex shrink-0 items-center gap-[5px] pt-[3px]">
          <Image
            src="/images/rzp_payment_icon.svg"
            alt="Razorpay"
            width={120}
            height={40}
            priority
            className="h-auto w-[90px] object-contain object-center sm:w-[120px]"
          />
        </div>
      </div>

      <div className="mt-[18px] rounded-[3px] bg-[#e4e4e9] px-[12px] py-[11px] text-[12px] leading-[16px] text-[#002b5c] sm:text-[13px] sm:leading-[13px]">
        Pay securely by Credit or Debit card or Internet
        <br className="hidden sm:block" />
        Banking through Razorpay.
      </div>

      <div className="my-[19px] h-px bg-[#d2d2d7]" />

      <p className="text-[12px] leading-[15px] text-[#555]">
        Your personal data will be used to process your order, support your
        experience throughout this website, and for other purposes described in
        our <span className="text-[#d9232e]">privacy policy.</span>
      </p>

      <div className="mt-[13px] flex justify-end">
        <button
          type="button"
          onClick={handlePlaceOrder}
          disabled={isPlacingOrder}
          className="h-[45px] min-w-[115px] rounded-[5px] bg-[#d9232e] px-[20px] text-[13px] font-bold text-white transition hover:bg-[#b91c26] disabled:opacity-50 disabled:hover:bg-[#d9232e]"
        >
          {isPlacingOrder ? "Processing..." : "Place Order"}
        </button>
      </div>
    </div>
  );
}
