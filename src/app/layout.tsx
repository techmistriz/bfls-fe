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

export const metadata: Metadata = {
  title: summitTitle,
  description: summitTitle,
  openGraph: {
    title: summitTitle,
    description: summitTitle,
    type: "website",
    url: "https://bfls.in/",
    siteName: "The Lex Witness",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: summitTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: summitTitle,
    description: summitTitle,
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
