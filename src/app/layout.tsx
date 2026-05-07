import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FinSight Design Guidelines",
  description:
    "A research-driven mobile banking prototype and design guideline site for blind and low-vision users."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
