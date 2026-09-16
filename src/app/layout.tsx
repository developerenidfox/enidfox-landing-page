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
  openGraph: {
    title: "Enid Fox — Coming Soon",
    description: "International BodyTalk Practitioner • Nature's Language Practitioner • Reiki Master • Cranio Sacral Therapist",
    type: "website",
    siteName: "Enid Fox",
    images: [
      {
        url: "/images/full-bg.png",
        width: 1920,
        height: 1080,
        alt: "Enid Fox Coming Soon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enid Fox — Coming Soon",
    description: "International BodyTalk Practitioner • Nature's Language Practitioner • Reiki Master • Cranio Sacral Therapist",
    images: ["/images/full-bg.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#F4EFE8",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${eyesomeScript.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-charcoal font-sans">{children}</body>
    </html>
  );
}
