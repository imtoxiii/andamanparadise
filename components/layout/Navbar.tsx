"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Palmtree, Phone, MessageCircle } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/data/site";
import { generalEnquiryMessage, whatsappUrl } from "@/lib/whatsapp";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "bg-sand/98 shadow-[0_4px_24px_rgba(13,79,79,0.1)] border-ocean/10 backdrop-blur-md"
            : "bg-sand border-ocean/5"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
          <Link href="/" className="flex items-center gap-3 group">
            <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-ocean to-ocean-light text-white shadow-md shadow-ocean/20 transition-transform duration-300 group-hover:scale-105">
              <Palmtree className="h-5 w-5" />
            </span>
            <div>
              <span className="font-heading text-lg leading-none block tracking-tight text-gradient">
                {SITE.name}
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium mt-0.5 block text-navy/45">
                Travel Agency
              </span>
            </div>
          </Link>

          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                      active
                        ? "bg-ocean text-white"
                        : "text-navy/70 hover:text-ocean hover:bg-ocean/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-navy/70 hover:text-ocean hover:bg-ocean/5 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden lg:inline">{SITE.phone}</span>
            </a>
            <a
              href={whatsappUrl(generalEnquiryMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-coral to-coral-dark px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-coral/25 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              <MessageCircle className="h-4 w-4" />
              Book Now
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2.5 rounded-xl text-navy hover:bg-ocean/5 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-navy/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          />
          <div className="absolute top-0 right-0 h-full w-[min(100%,320px)] bg-sand shadow-2xl border-l border-ocean/10">
            <div className="flex flex-col h-full pt-20 px-6 pb-8">
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`block rounded-xl px-4 py-3.5 text-base font-medium transition-colors ${
                          active
                            ? "bg-ocean/10 text-ocean"
                            : "text-navy hover:bg-ocean/5"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-auto space-y-3 pt-6 border-t border-ocean/10">
                <a
                  href={`tel:${SITE.phone}`}
                  className="flex items-center justify-center gap-2 rounded-xl border border-ocean/15 py-3.5 text-ocean font-semibold"
                >
                  <Phone className="h-4 w-4" />
                  {SITE.phone}
                </a>
                <a
                  href={whatsappUrl(generalEnquiryMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-coral to-coral-dark py-3.5 text-white font-semibold shadow-lg shadow-coral/25"
                >
                  <MessageCircle className="h-4 w-4" />
                  Book on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
