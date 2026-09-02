"use client";

import { useState, useCallback } from "react";
import { Ticket } from "lucide-react";

interface CouponSectionProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function CouponSection({ isOpen, onToggle }: CouponSectionProps) {
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleApply = useCallback(async () => {
    if (!code.trim()) return;

    setIsLoading(true);
    try {
      // TODO: Implement coupon validation API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Applying coupon:", code);
    } finally {
      setIsLoading(false);
    }
  }, [code]);

  return (
    <>
      <div className="mb-[26px] flex min-h-[55px] items-center rounded-[5px] bg-[#f5f5f5] px-[13px] py-[10px] font-medium text-[16px] text-[#222]">
        <Ticket
          className="h-5 w-5 shrink-0 text-[#D0252D]"
          aria-hidden="true"
        />

        <span className="ms-3 text-[14px] sm:text-[16px]">
          Have a coupon?{" "}
          <button
            type="button"
            onClick={onToggle}
            className="text-left text-[#d9232e] underline underline-offset-2 hover:opacity-80"
            aria-expanded={isOpen}
          >
            Click here to enter your code
          </button>
        </span>
      </div>

      {isOpen && (
        <div className="mb-[25px] flex flex-col gap-2 sm:flex-row">
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Coupon code"
            className="h-[40px] min-w-0 flex-1 rounded border border-gray-300 px-3 text-[13px] outline-none placeholder:text-[13px] focus:border-[#d9232e]"
            aria-label="Coupon code"
          />

          <button
            type="button"
            onClick={handleApply}
            disabled={isLoading || !code.trim()}
            className="h-[40px] rounded bg-[#d9232e] px-5 text-[13px] font-semibold text-white transition hover:bg-[#b91c26] disabled:opacity-50 disabled:hover:bg-[#d9232e]"
          >
            {isLoading ? "Applying..." : "Apply"}
          </button>
        </div>
      )}
    </>
  );
}
