import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "HomelinkGlobal — Real Estate & Relocation",
  description: "Find verified properties and relocation support worldwide.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-navy text-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}