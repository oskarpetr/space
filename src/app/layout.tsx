import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Lenis from "lenis/react";
import "./globals.css";
import { ReactNode } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Space",
  description: "Space by Oskar Petr",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <Lenis root>{children}</Lenis>
      </body>
    </html>
  );
}
