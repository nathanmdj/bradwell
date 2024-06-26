import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bradwell",
  description: "Sales and Marketing Corp.", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col bg-[#F6E9B2]`}>
        <Navbar/>
        <main className="flex-1 flex flex-col">
          {children}          
        </main>
        <Footer/>
      </body>
    </html>
  );
}
