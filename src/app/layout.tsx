import type { Metadata } from "next";
import {  Inter } from "next/font/google";
import "./globals.css";
import "animate.css"

const inter = Inter({
  weight: ["400", "500", "700"], // choose the weights you need
  subsets: ["latin"],
  variable: "--font-inter",
});
export const metadata: Metadata = {
  title: "Nova Crest",
  description: "Nova Crest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body
        className={`${inter.variable}  antialiased `}
      >
        {children}
      </body>
    </html>
  );
}

