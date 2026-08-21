import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
/>
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";

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