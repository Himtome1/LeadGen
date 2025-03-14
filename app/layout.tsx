import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
//import google analytics tag


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Powersport Financing",
  description: "Powersport Financing for all your dirtbike, atv, and snowmobile needs. Proudly serving Vancouver Island.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="G-EQ7LS31Z2R"/>
    </html>
  );
}
