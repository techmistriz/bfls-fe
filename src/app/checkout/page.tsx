// app/checkout/page.tsx
import { Metadata } from "next";
import CheckoutClient from "./CheckoutClient";

export const metadata: Metadata = {
  title: "Checkout - Witness Live",
  description: "Complete your ticket purchase securely",
};

export default function CheckoutPage() {
  return <CheckoutClient />;
}
