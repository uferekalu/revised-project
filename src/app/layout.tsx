import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ufere Kalu | Full Stack Developer & Data Analyst",
  description:
    "Portfolio of Ufere Kalu — a Full Stack Developer and Data Analyst building scalable, elegant, data-driven software with React, Next.js, NestJS, and Python.",
  openGraph: {
    title: "Ufere Kalu | Full Stack Developer & Data Analyst",
    description:
      "Portfolio of Ufere Kalu — a Full Stack Developer and Data Analyst building scalable, elegant, data-driven software.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground flex flex-col min-h-screen antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="pt-20 flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
