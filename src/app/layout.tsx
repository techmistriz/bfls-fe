import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "@/src/components/layout/Header";
import Footer from "@/src/components/layout/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
