import Footer from "../_components/Footer";
import Navbar from "../_components/Navbar";

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
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
