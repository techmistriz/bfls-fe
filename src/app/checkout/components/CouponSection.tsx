"use client";

import { useState } from "react";
import { Ticket } from "lucide-react";

interface CouponSectionProps {
  isOpen: boolean;
  onToggle: () => void;
  couponCode?: string | null;
  updating: boolean;
  error: string;
  onApply: (couponCode: string) => Promise<boolean>;
  onRemove: (couponCode: string) => Promise<boolean>;
}

export function CouponSection({
  isOpen,
  onToggle,
  couponCode,
  updating,
  error,
  onApply,
  onRemove,
}: CouponSectionProps) {
  const [code, setCode] = useState("");

  const handleApply = async () => {
    const trimmedCode = code.trim();

    if (!trimmedCode || updating) {
      return;
    }

    const success = await onApply(trimmedCode);

    if (success) {
      setCode("");
    }
  };

  const handleRemove = async () => {
    if (!couponCode || updating) {
      return;
    }

    await onRemove(couponCode);
  };

  return (
    <>
      <div className="mb-[26px] flex min-h-[55px] items-center rounded-[5px] bg-[#f5f5f5] px-[13px] py-[10px] text-[16px] font-medium text-[#222]">
        <Ticket
          className="h-5 w-5 shrink-0 text-[#d0252d]"
          aria-hidden="true"
        />

        <span className="ms-3 text-[14px] sm:text-[16px]">
          Have a coupon?{" "}
          <button
            type="button"
            onClick={onToggle}
            className="text-left text-[#d9232e] underline underline-offset-2 hover:opacity-80 cursor-pointer"
            aria-expanded={isOpen}
          >
            Click here to enter your code
          </button>
        </span>
      </div>

      {isOpen && (
        <div className="mb-[25px]">
          <div className="flex flex-col gap-2 sm:flex-row">
            <input
              type="text"
              value={code}
              onChange={(event) => setCode(event.target.value)}
              placeholder="Coupon code"
              aria-label="Coupon code"
              disabled={updating}
              className="h-[40px] min-w-0 flex-1 rounded border border-gray-300 bg-white px-3 text-[13px] text-[#222] outline-none placeholder:text-[13px] placeholder:text-[#95898a] focus:border-[#d9232e] disabled:bg-gray-100 disabled:text-[#666]"
            />

            <button
              type="button"
              onClick={handleApply}
              disabled={updating || !code.trim()}
              className="h-[40px] cursor-pointer rounded bg-[#d9232e] px-5 text-[13px] font-semibold text-white transition hover:bg-[#b91c26] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {updating ? "Applying..." : "Apply"}
            </button>
          </div>

          {error && <p className="mt-2 text-[13px] text-[#d9232e]">{error}</p>}
        </div>
      )}

      {couponCode && (
        <div className="mb-[25px] flex items-center justify-between rounded-[5px] border border-[#e0e3e7] px-3 py-2">
          <span className="text-[13px] font-medium text-[#333]">
            Coupon applied: {couponCode}
          </span>

          <button
            type="button"
            onClick={handleRemove}
            disabled={updating}
            className="text-[13px] font-semibold text-[#d9232e] hover:underline disabled:opacity-50 cursor-pointer"
          >
            {updating ? "Removing..." : "Remove"}
          </button>
        </div>
      )}
    </>
  );
}
