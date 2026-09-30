"use client";

import type { CartCoupon, CartItem } from "@/src/types/cart";

import { PaymentSection } from "./PaymentSection";

interface OrderSummaryProps {
  subtotal: number;
  gstPercent: number;
  gstAmount: number;
  total: number;
  discount: number;
  coupon: CartCoupon | null;
  items: CartItem[];
  paymentProcessing?: boolean;
}

export function OrderSummary({
  subtotal,
  gstPercent,
  gstAmount,
  total,
  discount,
  coupon,
  items,
  paymentProcessing = false,
}: OrderSummaryProps) {
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

        {items.map((item) => (
          <div
            key={item.plan_id}
            className="grid grid-cols-[minmax(0,1fr)_141px] text-[15px]"
          >
            <div className="border-b border-r border-[#dfe2e6] px-[13px] py-[11px]">
              <div className="font-semibold text-[#333]">{item.plan_name}</div>

              <div className="text-[12px] text-[#666]">
                ₹{item.price.toLocaleString("en-IN")} × {item.quantity}
              </div>
            </div>

            <div className="border-b border-[#dfe2e6] px-[12px] py-[11px] text-right text-[#333]">
              ₹{(item.price * item.quantity).toLocaleString("en-IN")}
            </div>
          </div>
        ))}

        <div className="grid grid-cols-[minmax(0,1fr)_141px] text-[15px]">
          <div className="border-b border-r border-[#dfe2e6] px-[13px] py-[11px] font-bold text-[#333]">
            Subtotal
          </div>

          <div className="border-b border-[#dfe2e6] px-[12px] py-[11px] text-right font-semibold text-[#333]">
            ₹{subtotal.toLocaleString("en-IN")}
          </div>
        </div>

        {coupon && discount > 0 && (
          <div className="grid grid-cols-[minmax(0,1fr)_141px] text-[15px]">
            <div className="border-b border-r border-[#dfe2e6] px-[13px] py-[11px] font-semibold text-[#333]">
              Discount ({coupon.code})
            </div>

            <div className="border-b border-[#dfe2e6] px-[12px] py-[11px] text-right font-semibold text-[#d9232e]">
              -₹{discount.toLocaleString("en-IN")}
            </div>
          </div>
        )}

        <div className="grid grid-cols-[minmax(0,1fr)_141px] text-[15px]">
          <div className="border-b border-r border-[#dfe2e6] px-[13px] py-[11px] font-semibold text-[#333]">
            GST ({gstPercent}%)
          </div>

          <div className="border-b border-[#dfe2e6] px-[12px] py-[11px] text-right font-semibold text-[#333]">
            ₹{gstAmount.toLocaleString("en-IN")}
          </div>
        </div>

        <div className="grid grid-cols-[minmax(0,1fr)_141px] bg-[#f1f2f4] text-[15px]">
          <div className="border-r border-[#dfe2e6] px-[13px] py-[11px] font-bold text-[#333]">
            Total
          </div>

          <div className="px-[12px] py-[11px] text-right font-semibold text-[#333]">
            ₹{total.toLocaleString("en-IN")}
          </div>
        </div>
      </div>

      <PaymentSection loading={paymentProcessing} />
    </>
  );
}
