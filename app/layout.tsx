import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "G12 - Modern Living in Crveni Krst",
  description: "Luxury apartments in the heart of Crveni Krst, Belgrade. Modern architecture with travertine stone façade and geothermal heating.",
  keywords: ["apartments", "Belgrade", "Crveni Krst", "luxury living", "real estate"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
