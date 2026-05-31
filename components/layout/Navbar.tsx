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
                className={`font-nav text-lg leading-none block tracking-tight transition-colors ${
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
                background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 100%)",
              }}
            >
              <MessageCircle className="h-4 w-4" />
              Book Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className={`md:hidden p-2.5 rounded-xl transition-colors ${
              scrolled
                ? "text-slate-700 hover:bg-teal/6"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </header>

      {/* Mobile Full-Screen Menu */}
      <div 
        className={`fixed inset-0 z-[100] bg-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col md:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto visible" : "opacity-0 pointer-events-none invisible"
        }`}
      >
        {/* Top bar inside menu */}
        <div className="flex items-center justify-between px-4 py-6">
          <Link href="/" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
            <span
              className="flex h-10 w-10 items-center justify-center rounded-xl text-white shadow-md"
              style={{ background: "linear-gradient(135deg, var(--teal) 0%, var(--teal-light) 100%)" }}
            >
              <Palmtree className="h-5 w-5" />
            </span>
            <span className="font-nav text-xl text-slate-900 tracking-tight uppercase">
              {SITE.name}
            </span>
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-1.5 px-3 py-2 text-slate-900 hover:text-slate-500 transition-colors rounded-full hover:bg-slate-100"
          >
            <span className="text-sm font-bold tracking-widest uppercase mt-0.5">Close</span>
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 flex flex-col justify-center px-6 text-center">
          <ul className="flex flex-col items-center gap-6">
            {NAV_LINKS.map((link, i) => {
              const active = pathname === link.href;
              return (
                <li key={link.href} className="overflow-hidden py-1">
                  <Link
                    href={link.href}
                    className={`inline-block font-nav text-5xl sm:text-6xl uppercase tracking-tight transition-colors ${
                      active ? "marker-green" : "text-slate-900 hover:text-teal"
                    }`}
                    style={{
                      transform: mobileOpen ? "translateY(0)" : "translateY(100%)",
                      opacity: mobileOpen ? 1 : 0,
                      transition: `transform 500ms cubic-bezier(0.22, 1, 0.36, 1) ${i * 80 + 100}ms, opacity 500ms ease ${i * 80 + 100}ms`
                    }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Bottom CTA & Info */}
        <div className="px-6 pb-12">
          <div 
            className="flex flex-col items-center gap-5 border-t border-slate-200 pt-8"
            style={{
              transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
              opacity: mobileOpen ? 1 : 0,
              transition: `transform 500ms ease 400ms, opacity 500ms ease 400ms`
            }}
          >
            <div className="flex flex-col items-center gap-1 text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Keep in touch</span>
              <a href={`tel:${SITE.phone}`} className="text-lg font-semibold text-slate-900 hover:text-teal transition-colors">
                {SITE.phone}
              </a>
            </div>
            
            <a
              href={whatsappUrl(generalEnquiryMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full rounded-2xl py-4 px-8 text-white font-semibold text-base shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 100%)",
              }}
            >
              <MessageCircle className="h-5 w-5" />
              Book on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
