"use client";

import { useState } from "react";
import Image from "next/image";

interface FormFieldProps {
    label: string;
    required?: boolean;
    placeholder?: string;
    type?: string;
}

interface SelectFieldProps {
    label: string;
    required?: boolean;
    placeholder: string;
    disabled?: boolean;
}

export default function CheckoutPage() {
    const [couponOpen, setCouponOpen] = useState(false);

    return (
        <main className="mt-20 min-h-screen bg-white">
            <div className="mx-auto w-full max-w-[1160px] px-4 py-[40px] sm:py-[50px] lg:py-[60px]">
                <div className="grid grid-cols-1 items-start gap-[35px] lg:grid-cols-[minmax(0,760px)_340px]">

                    {/* ================= LEFT SECTION ================= */}
                    <section className="min-w-0">

                        {/* Your Ticket */}
                        <h2 className="mb-[13px] text-[24px] font-bold uppercase text-[#d9232e]">
                            YOUR TICKET
                        </h2>

                        <div className="mb-[26px] h-[50px] w-full rounded-[5px] border border-[#f3b8bc] bg-[#fffafa]" />

                        {/* Coupon */}
                        <div className="mb-[26px] flex min-h-[55px] items-center rounded-[5px] bg-[#f5f5f5] px-[13px] py-[10px] font-medium text-[16px] text-[#222]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-5 w-5 shrink-0 text-[#D0252D]"
                                aria-hidden="true"
                            >
                                <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                                <path d="M13 5v2" />
                                <path d="M13 17v2" />
                                <path d="M13 11v2" />
                            </svg>

                            <span className="ms-3 text-[14px] sm:text-[16px]">
                                Have a coupon?{" "}
                                <button
                                    type="button"
                                    onClick={() => setCouponOpen(!couponOpen)}
                                    className="text-left text-[#d9232e] underline underline-offset-2"
                                >
                                    Click here to enter your code
                                </button>
                            </span>
                        </div>

                        {/* Coupon Input */}
                        {couponOpen && (
                            <div className="mb-[25px] flex flex-col gap-2 sm:flex-row">
                                <input
                                    type="text"
                                    placeholder="Coupon code"
                                    className="h-[40px] min-w-0 flex-1 rounded border border-gray-300 px-3 text-[13px] outline-none placeholder:text-[13px] focus:border-[#d9232e]"
                                />

                                <button
                                    type="button"
                                    className="h-[40px] rounded bg-[#d9232e] px-5 text-[13px] font-semibold text-white"
                                >
                                    Apply
                                </button>
                            </div>
                        )}

                        {/* Billing Details */}
                        <h2 className="mb-[23px] text-[20px] font-bold uppercase text-[#d9232e]">
                            BILLING DETAILS
                        </h2>

                        <form className="space-y-[16px]">

                            {/* First / Last Name */}
                            <div className="grid grid-cols-1 gap-[16px] sm:grid-cols-2 sm:gap-[12px]">
                                <FormField
                                    label="First name"
                                    required
                                    placeholder="Enter first name"
                                />

                                <FormField
                                    label="Last name"
                                    required
                                    placeholder="Enter last name"
                                />
                            </div>

                            {/* Designation */}
                            <FormField
                                label="Designation"
                                required
                                placeholder="Enter designation"
                            />

                            {/* Email */}
                            <FormField
                                label="Email address"
                                required
                                placeholder="Enter email"
                                type="email"
                            />

                            {/* Phone */}
                            <FormField
                                label="Phone"
                                required
                                placeholder="Enter phone number"
                                type="tel"
                            />

                            {/* GST */}
                            <FormField
                                label="GST Number"
                                placeholder="Enter GST number"
                            />

                            {/* Address */}
                            <div>
                                <label className="mb-[7px] block text-[15px] font-medium leading-[14px] text-[#002b5c]">
                                    Address{" "}
                                    <span className="text-[#d9232e]">*</span>
                                </label>

                                <textarea
                                    placeholder="Enter address"
                                    rows={2}
                                    className="block h-[75px] w-full resize-none rounded-[4px] border border-[#ccd2d9] px-[10px] py-[9px] text-[10px] text-[#333] outline-none placeholder:text-[15px] placeholder:text-[#9da5ae] focus:border-[#999]"
                                />
                            </div>

                            {/* Country */}
                            <div>
                                <label className="mb-[7px] block text-[15px] font-medium leading-[14px] text-[#002b5c]">
                                    Country / Region{" "}
                                    <span className="text-[#d9232e]">*</span>
                                </label>

                                <div className="relative">
                                    <select
                                        defaultValue="India"
                                        className="h-[45px] w-full appearance-none rounded-[3px] border border-[#ccd2d9] bg-white px-[9px] text-[15px] text-[#333] outline-none"
                                    >
                                        <option>India</option>
                                    </select>

                                    <ChevronDown />
                                </div>
                            </div>

                            {/* State / City / Pincode */}
                            <div className="grid grid-cols-1 gap-[16px] sm:grid-cols-3 sm:gap-[12px]">

                                <SelectField
                                    label="State"
                                    required
                                    placeholder="Select State"
                                />

                                <SelectField
                                    label="City"
                                    required
                                    placeholder="Select City"
                                    disabled
                                />

                                <FormField
                                    label="Pincode"
                                    required
                                    placeholder="Enter pincode"
                                />

                            </div>
                        </form>

                        {/* Assistance */}
                        <div className="mt-[25px] rounded-[4px] border border-[#dce0e5] bg-[#fafbfc] px-[15px] py-[18px] sm:px-[19px] sm:py-[21px]">

                            <h3 className="mb-[14px] text-[15px] font-bold uppercase leading-[20px] text-[#d9232e] sm:text-[16px]">
                                IN CASE OF ANY ASSISTANCE WRT YOUR PURCHASE
                            </h3>

                            <p className="mb-[10px] break-words text-[13px] leading-[17px] text-[#333] sm:text-[14px]">
                                Bhupinder Kaur | +91-9654155065 |{" "}
                                <span className="text-[#111]">
                                    bhupinder@witnesslive.in
                                </span>
                            </p>

                            <p className="break-words text-[13px] leading-[17px] text-[#333] sm:text-[14px]">
                                Neelima Maheshwari | +91-8000841600 |{" "}
                                <span>
                                    neelima.maheshwari@witnesslive.in
                                </span>
                            </p>

                        </div>
                    </section>

                    {/* ================= RIGHT SECTION ================= */}
                    <aside className="self-start lg:sticky lg:top-[100px]">

                        <h2 className="mb-[13px] text-[24px] font-bold uppercase text-[#d9232e]">
                            YOUR ORDER
                        </h2>

                        {/* Order Table */}
                        <div className="overflow-hidden rounded-[3px] border border-[#e0e3e7]">

                            <div className="grid grid-cols-[minmax(0,1fr)_141px] bg-[#d9232e] text-[14px] font-bold uppercase text-white">
                                <div className="px-[13px] py-[12px]">
                                    PRODUCT
                                </div>

                                <div className="border-l border-[#d9232e] px-[12px] py-[12px] text-right">
                                    SUBTOTAL
                                </div>
                            </div>

                            <div className="grid grid-cols-[minmax(0,1fr)_141px] text-[15px]">
                                <div className="border-b border-r border-[#dfe2e6] px-[13px] py-[11px] font-semibold">
                                    GST (18%)
                                </div>

                                <div className="border-b border-[#dfe2e6] px-[12px] py-[11px] text-right font-semibold">
                                    ₹0
                                </div>
                            </div>

                            <div className="grid grid-cols-[minmax(0,1fr)_141px] bg-[#f1f2f4] text-[15px]">
                                <div className="border-r border-[#dfe2e6] px-[13px] py-[11px] font-semibold">
                                    Total
                                </div>

                                <div className="px-[12px] py-[11px] text-right font-semibold">
                                    ₹0
                                </div>
                            </div>

                        </div>

                        {/* Payment Box */}
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

                            {/* Razorpay Info */}
                            <div className="mt-[18px] rounded-[3px] bg-[#e4e4e9] px-[12px] py-[11px] text-[12px] leading-[16px] text-[#002b5c] sm:text-[13px] sm:leading-[13px]">
                                Pay securely by Credit or Debit card or Internet
                                <br className="hidden sm:block" />
                                Banking through Razorpay.
                            </div>

                            <div className="my-[19px] h-px bg-[#d2d2d7]" />

                            {/* Privacy */}
                            <p className="text-[12px] leading-[15px] text-[#555]">
                                Your personal data will be used to process your order,
                                support your experience throughout this website, and for
                                other purposes described in our{" "}
                                <span className="text-[#d9232e]">
                                    privacy policy.
                                </span>
                            </p>

                            {/* Place Order */}
                            <div className="mt-[13px] flex justify-end">
                                <button
                                    type="button"
                                    className="h-[45px] min-w-[115px] rounded-[5px] bg-[#d9232e] px-[20px] text-[13px] font-bold text-white transition hover:bg-[#b91c26]"
                                >
                                    Place Order
                                </button>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>
        </main>
    );
}


/* ================= FORM FIELD ================= */

function FormField({
    label,
    required = false,
    placeholder,
    type = "text",
}: FormFieldProps) {
    return (
        <div>
            <label
                className="mb-[5px] block font-medium text-[#002b5c]"
                style={{
                    fontSize: "15px",
                    lineHeight: "14px",
                }}
            >
                {label}{" "}
                {required && (
                    <span
                        className="text-[#d9232e]"
                        style={{ fontSize: "15px" }}
                    >
                        *
                    </span>
                )}
            </label>

            <input
                type={type}
                placeholder={placeholder}
                className="h-[45px] w-full rounded-[4px] border border-[#ccd2d9] px-[10px] text-[#333] outline-none placeholder:text-[15px] placeholder:text-[#9da5ae] focus:border-[#999]"
                style={{
                    fontSize: "10px",
                    lineHeight: "14px",
                }}
            />
        </div>
    );
}


/* ================= SELECT FIELD ================= */

function SelectField({
    label,
    required = false,
    placeholder,
    disabled = false,
}: SelectFieldProps) {
    return (
        <div>
            <label className="mb-[7px] block text-[15px] font-medium leading-[14px] text-[#002b5c]">
                {label}{" "}
                {required && (
                    <span className="text-[#d9232e]">*</span>
                )}
            </label>

            <div className="relative">
                <select
                    disabled={disabled}
                    defaultValue=""
                    className="h-[45px] w-full appearance-none rounded-[3px] border border-[#ccd2d9] bg-white px-[9px] text-[15px] text-[#777] outline-none disabled:bg-[#f3f3f3]"
                >
                    <option value="" disabled>
                        {placeholder}
                    </option>

                    <option>Option 1</option>
                    <option>Option 2</option>
                </select>

                <ChevronDown />
            </div>
        </div>
    );
}


/* ================= CHEVRON ================= */

function ChevronDown() {
    return (
        <svg
            viewBox="0 0 24 24"
            className="pointer-events-none absolute right-[8px] top-1/2 h-[15px] w-[15px] -translate-y-1/2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
        >
            <path d="m6 9 6 6 6-6" />
        </svg>
    );
}