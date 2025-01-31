import Header from "@/components/nav-bar/Header";
import "./globals.css";
import Footer from "@/components/sections/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="mb-[100px]">
          <Header />
        </div>
        {children}
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
