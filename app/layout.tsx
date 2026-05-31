import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Oswald, Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyBookBar } from "@/components/layout/StickyBookBar";
import { InkPageTransition } from "@/components/layout/InkPageTransition";
import { SITE } from "@/lib/data/site";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} | Andaman Islands Travel Agency`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Book curated Andaman tour packages — Havelock, Neil Island, scuba diving & more. Best prices, licensed agency, 24/7 WhatsApp support.",
  keywords: [
    "Andaman tour packages",
    "Havelock honeymoon",
    "Andaman travel agency",
    "Port Blair tours",
  ],
  openGraph: {
    title: SITE.name,
    description: SITE.tagline,
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${oswald.variable} ${outfit.variable} ${playfair.variable}`}
    >
      <head>
        {/* Preload the transition sprite to prevent first-load lag */}
        <link rel="preload" href="/ink-black.png" as="image" type="image/png" />
      </head>
      <body className="min-h-screen antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyBookBar />
        <InkPageTransition />
      </body>
    </html>
  );
}
