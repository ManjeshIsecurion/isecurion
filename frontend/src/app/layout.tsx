import Navbar from "../components/layout/Navbar";
import "./globals.css";
import type { ReactNode } from "react";
import Footer from "../components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ISECURION | CERT-In Empanelled",
  description: "ISECURION Technology & Consulting Pvt Ltd",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={` h-full antialiased`}>
      <head />
      <body className="min-h-full flex flex-col ">
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
