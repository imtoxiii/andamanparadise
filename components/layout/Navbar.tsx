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

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-500 flex justify-center px-4 ${
          scrolled ? "top-4 md:top-6" : "top-6 md:top-8"
        }`}
      >
        <nav 
          className={`w-full max-w-5xl rounded-full flex items-center justify-between px-4 py-2.5 transition-all duration-300 border ${
            scrolled 
              ? "glass-nav shadow-lg border-white/40 hover:shadow-xl hover:scale-[1.01]" 
              : "bg-white/10 backdrop-blur-md shadow-sm border-white/20 hover:bg-white/15 hover:scale-[1.01]"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <span
              className="relative flex h-10 w-10 items-center justify-center rounded-xl text-white shadow-md transition-transform duration-300 group-hover:scale-105"
              style={{ background: "linear-gradient(135deg, var(--teal) 0%, var(--teal-light) 100%)" }}
            >
              <Palmtree className="h-5 w-5" />
            </span>
            <div>
              <span
                className={`font-heading text-lg leading-none block tracking-tight transition-colors ${
                  scrolled ? "text-slate-900" : "text-white"
                }`}
              >
                {SITE.name}
              </span>
              <span
                className={`text-[10px] uppercase tracking-[0.2em] font-medium mt-0.5 block transition-colors ${
                  scrolled ? "text-slate-400" : "text-white/70"
                }`}
              >
                Travel Agency
              </span>
            </div>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                      active
                        ? scrolled
                          ? "bg-teal text-white"
                          : "bg-white/20 text-white backdrop-blur-sm"
                        : scrolled
                          ? "text-slate-600 hover:text-teal hover:bg-teal/8"
                          : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                    style={active && scrolled ? { background: "var(--teal)" } : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${SITE.phone}`}
              className={`flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium transition-all ${
                scrolled
                  ? "text-slate-600 hover:text-teal hover:bg-teal/6"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              <Phone className="h-4 w-4" />
              <span className="hidden lg:inline">{SITE.phone}</span>
            </a>
            <a
              href={whatsappUrl(generalEnquiryMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, var(--amber) 0%, var(--amber-dark) 100%)",
                boxShadow: "0 4px 14px rgba(245,158,11,0.35)",
              }}
            >
              <MessageCircle className="h-4 w-4" />
              Book Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2.5 rounded-xl transition-colors ${
              scrolled
                ? "text-slate-700 hover:bg-teal/6"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-navy/50 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          />
          <div className="absolute top-0 right-0 h-full w-[min(100%,320px)] bg-white shadow-2xl">
            <div className="flex flex-col h-full pt-20 px-6 pb-8">
              {/* Brand in drawer */}
              <div className="flex items-center gap-3 mb-8 pb-6 border-b border-slate-100">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-xl text-white"
                  style={{ background: "linear-gradient(135deg, var(--teal) 0%, var(--teal-light) 100%)" }}
                >
                  <Palmtree className="h-5 w-5" />
                </span>
                <span className="font-heading text-base text-slate-900">{SITE.name}</span>
              </div>

              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`block rounded-xl px-4 py-3.5 text-base font-medium transition-colors ${
                          active
                            ? "text-white"
                            : "text-slate-700 hover:bg-teal/6"
                        }`}
                        style={active ? { background: "var(--teal)", color: "white" } : undefined}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-auto space-y-3 pt-6 border-t border-slate-100">
                <a
                  href={`tel:${SITE.phone}`}
                  className="flex items-center justify-center gap-2 rounded-xl border-2 py-3.5 font-semibold transition-colors"
                  style={{ borderColor: "var(--teal)", color: "var(--teal)" }}
                >
                  <Phone className="h-4 w-4" />
                  {SITE.phone}
                </a>
                <a
                  href={whatsappUrl(generalEnquiryMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full rounded-xl py-3.5 text-white font-semibold shadow-lg"
                  style={{
                    background: "linear-gradient(135deg, var(--amber) 0%, var(--amber-dark) 100%)",
                    boxShadow: "0 4px 14px rgba(245,158,11,0.3)",
                  }}
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
