import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Header from "@/src/components/layout/Header";
import Footer from "@/src/components/layout/Footer";
import RecaptchaProvider from "@/src/components/providers/RecaptchaProvider";
import SiteLoader from "../components/layout/SiteLoader";
import { Toaster } from "react-hot-toast";
import type { Metadata } from "next";

const summitTitle =
  "The Lex Witness 9th Annual Banking & Finance Legal Summit 2026";

const summitDescription = "20TH NOVEMBER 2026, TAJ SANTACRUZ, MUMBAI";

export const metadata: Metadata = {
  metadataBase: new URL("https://bfls.in"),

  title: summitTitle,
  description: summitDescription,

  openGraph: {
    title: summitTitle,
    description: summitDescription,
    type: "website",
    url: "https://bfls.in/",
    siteName: "The Lex Witness",
    images: [
      {
        url: "https://bfls.in/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: summitTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: summitTitle,
    description: summitDescription,
    images: ["https://bfls.in/og-image.jpeg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black antialiased">
        <SiteLoader />
        <RecaptchaProvider>
          <Header />
          <main>{children}</main>
          <Toaster position="bottom-right" />
          <Footer />
        </RecaptchaProvider>
      </body>
    </html>
  );
}
