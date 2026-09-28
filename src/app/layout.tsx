import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Header from "@/src/components/layout/Header";
import Footer from "@/src/components/layout/Footer";
import RecaptchaProvider from "@/src/components/providers/RecaptchaProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black antialiased">
        <RecaptchaProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </RecaptchaProvider>
      </body>
    </html>
  );
}
