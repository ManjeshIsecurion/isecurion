import "./globals.css";
import Navbar from "../components/layout/Navbar";

import type { ReactNode } from "react";
import Footer from "../components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ISECURION | CERT-IN Empanelled",
  description: "ISECURION Technology & Consulting Pvt Ltd",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html className={` h-full `}>
      <head />
      <body className=" flex flex-col ">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
