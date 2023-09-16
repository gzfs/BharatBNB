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
  return <>{children}</>;
}
