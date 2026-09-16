import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Enid Fox — Official Website Coming Soon",
  description: "Something extraordinary is taking shape. Be the first to know when Enid Fox officially launches.",
  keywords: ["Enid Fox", "Landing Page", "Official Website", "Coming Soon", "Art", "Design"],
  authors: [{ name: "Enid Fox" }],
  openGraph: {
    title: "Enid Fox — Coming Soon",
    description: "Something extraordinary is taking shape. Be the first to know when Enid Fox officially launches.",
    type: "website",
    siteName: "Enid Fox",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enid Fox — Coming Soon",
    description: "Something extraordinary is taking shape. Be the first to know when Enid Fox officially launches.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-charcoal font-sans">{children}</body>
    </html>
  );
}
