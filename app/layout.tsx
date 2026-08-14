import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rashedujjaman | Full-Stack JavaScript Developer ",
  description: "Full-Stack JavaScript Developer specializing in building modern, responsive, and scalable web applications using Next.js, React, TypeScript, Node.js,Tailwind CSS, MongoDB, and Mongoose.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`antialiased bg-[#0b0416]  text-white `}>
        <Header />
        {children}
        <Footer />

      </body>
    </html>
  );
}
