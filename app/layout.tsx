import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Luckiest_Guy, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyBookBar } from "@/components/layout/StickyBookBar";
import { SITE } from "@/lib/data/site";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const luckiestGuy = Luckiest_Guy({
  variable: "--font-luckiest-guy",
  subsets: ["latin"],
  weight: "400",
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
      className={`${jakarta.variable} ${luckiestGuy.variable} ${playfair.variable}`}
    >
      <body className="min-h-screen antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyBookBar />
      </body>
    </html>
  );
}
