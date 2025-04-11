import type { Metadata } from "next";

import "./globals.css";
import localFont from "next/font/local";
import Header from "./components/Header";

const satoshi = localFont({
  src: "./fonts/Satoshi-variable.woff2",
  style: "normal",
  display: "swap",
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  title: "Rethink Tomorrow",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
