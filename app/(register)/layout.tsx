import type { Metadata } from "next";
import RegisterNavbar from "../_components/RegisterNavbar";

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
    <main className="h-screen">
      <RegisterNavbar />
      {children}
    </main>
  );
}
