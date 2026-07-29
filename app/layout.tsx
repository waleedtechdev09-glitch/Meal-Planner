import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
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
  title: "Meal Planner",
  description:
    "Meal Planner is a web application that helps you plan your meals, track your nutrition, and achieve your health goals. With personalized meal plans, AI-powered features, and expert guidance, Meal Planner makes it easy to eat healthy and stay on track.",
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
      <body
        className="min-h-full flex flex-col overflow-x-hidden bg-white"
        suppressHydrationWarning
      >
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
