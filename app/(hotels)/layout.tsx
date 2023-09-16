import { Toaster } from "@/components/ui/toaster";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BharatBNB",
  description: "India's Tourism and Travels Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Toaster/>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
