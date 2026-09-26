import type { Metadata } from "next";
import { Press_Start_2P, VT323, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pressStart = Press_Start_2P({
  variable: "--font-pixel",
  subsets: ["latin"],
  weight: "400",
});

const vt323 = VT323({
  variable: "--font-terminal",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Hello World 2026",
  description: "The Midwest's largest beginner-friendly hackathon",
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} ${pressStart.variable} ${vt323.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
