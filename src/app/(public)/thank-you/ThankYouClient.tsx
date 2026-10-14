"use client";

import Link from "next/link";
import { useState } from "react";

interface ThankYouData {
  order: {
    orderNumber: string;
    orderId: string;
    amount: number;
    currency: string;
  };
  user: {
    name: string;
    email: string;
  };
}

export default function ThankYouClient() {
  const [data] = useState<ThankYouData | null>(() => {
    if (typeof window === "undefined") {
      return null;
    }

    const storedData = sessionStorage.getItem("bfls-order-success");

    if (!storedData) {
      return null;
    }

    try {
      return JSON.parse(storedData) as ThankYouData;
    } catch (error) {
      console.error("Unable to read order details:", error);
      return null;
    }
  });

  if (!data) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f7f8fa] px-4">
        <div className="text-center">
          <h1 className="text-xl font-bold text-[#002b5c]">
            Order details not found
          </h1>

          <Link
            href="/"
            className="mt-4 inline-flex rounded-[4px] bg-[#d9232e] px-5 py-2.5 text-sm font-semibold text-white"
          >
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="mt-15 flex min-h-[calc(100vh-80px)] items-center justify-center bg-[#f7f8fa] px-4 py-6">
      <div className="w-full max-w-[620px]">
        <div className="rounded-[8px] bg-white p-5 shadow-sm sm:p-7">
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-2xl font-bold text-green-600">
              ✓
            </div>

            <h1 className="mt-3 text-[24px] font-bold text-[#d9232e]">
              Thank You!
            </h1>

            <p className="mt-1 text-[13px] text-[#666]">
              Your payment has been successfully verified.
            </p>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <DetailCard
              title="Order Details"
              rows={[
                ["Order Number", data.order.orderNumber],
                ["Payment ID", data.order.orderId],
                ["Amount", `${data.order.currency} ${data.order.amount}`],
                ["Status", "Paid"],
              ]}
            />

            <DetailCard
              title="Customer Details"
              rows={[
                ["Name", data.user.name],
                ["Email", data.user.email],
              ]}
            />
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="inline-flex h-[42px] items-center justify-center rounded-[4px] bg-[#d9232e] px-6 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

function DetailCard({
  title,
  rows,
}: {
  title: string;
  rows: [string, string | number][];
}) {
  return (
    <div className="rounded-[5px] border border-[#e1e4e8]">
      <div className="border-b border-[#e1e4e8] px-4 py-3">
        <h2 className="text-[15px] font-bold text-[#002b5c]">{title}</h2>
      </div>

      <div className="space-y-2.5 px-4 py-3">
        {rows.map(([label, value]) => (
          <div
            key={label}
            className="flex items-start justify-between gap-3 text-[12px]"
          >
            <span className="text-[#777]">{label}</span>

            <span className="max-w-[65%] text-right font-medium text-[#333]">
              {value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
