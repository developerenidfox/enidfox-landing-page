import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const eyesomeScript = localFont({
  src: "../fonts/Eyesome-Script.otf",
  variable: "--font-eyesome",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Enid Fox — Official Website Coming Soon",
  description: "Something extraordinary is taking shape. Be the first to know when Enid Fox officially launches.",
  keywords: ["Enid Fox", "Landing Page", "Official Website", "Coming Soon", "BodyTalk", "Reiki", "Cranio Sacral"],
  authors: [{ name: "Enid Fox" }],
};

export const viewport: Viewport = {
  themeColor: "#F4EFE8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${eyesomeScript.variable} h-[100dvh] antialiased`}
    >
      <body className="h-[100dvh] overflow-hidden bg-cream text-charcoal font-sans m-0 p-0">{children}</body>
    </html>
  );
}
