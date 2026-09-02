"use client";

import { PaymentSection } from "./PaymentSection";

interface OrderSummaryProps {
  subtotal?: number;
  gstRate?: number;
}

export function OrderSummary({
  subtotal = 0,
  gstRate = 0.18,
}: OrderSummaryProps) {
  const gst = subtotal * gstRate;
  const total = subtotal + gst;

  return (
    <>
      <h2 className="mb-[13px] text-[24px] font-bold uppercase text-[#d9232e]">
        YOUR ORDER
      </h2>

      <div className="overflow-hidden rounded-[3px] border border-[#e0e3e7]">
        <div className="grid grid-cols-[minmax(0,1fr)_141px] bg-[#d9232e] text-[14px] font-bold uppercase text-white">
          <div className="px-[13px] py-[12px]">PRODUCT</div>
          <div className="border-l border-[#d9232e] px-[12px] py-[12px] text-right">
            SUBTOTAL
          </div>
        </div>

        {/* Order items would go here */}
        <div className="grid grid-cols-[minmax(0,1fr)_141px] text-[15px]">
          <div className="border-b border-r border-[#dfe2e6] px-[13px] py-[11px] font-semibold">
            GST ({(gstRate * 100).toFixed(0)}%)
          </div>
          <div className="border-b border-[#dfe2e6] px-[12px] py-[11px] text-right font-semibold">
            ₹{gst.toFixed(2)}
          </div>
        </div>

        <div className="grid grid-cols-[minmax(0,1fr)_141px] bg-[#f1f2f4] text-[15px]">
          <div className="border-r border-[#dfe2e6] px-[13px] py-[11px] font-semibold">
            Total
          </div>
          <div className="px-[12px] py-[11px] text-right font-semibold">
            ₹{total.toFixed(2)}
          </div>
        </div>
      </div>

      <PaymentSection />
    </>
  );
}
