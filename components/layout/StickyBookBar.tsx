"use client";

import { MessageCircle, Phone, X, HeadphonesIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/data/site";
import { generalEnquiryMessage, whatsappUrl } from "@/lib/whatsapp";

export function StickyBookBar() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  /* Show FAB after scrolling 80% of viewport height */
  useEffect(() => {
    const threshold = typeof window !== "undefined" ? window.innerHeight * 0.8 : 600;
    const onScroll = () => setVisible(window.scrollY > threshold);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close when user clicks outside */
  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("#fab-root")) setOpen(false);
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [open]);

  return (
    <>
      {/* ── Desktop floating FAB ── */}
      <div
        id="fab-root"
        className={`hidden md:flex fixed bottom-8 right-8 z-50 flex-col items-end gap-3 transition-all duration-500 ${
          visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {/* Expanded options */}
        <div
          className={`flex flex-col gap-2.5 items-end transition-all duration-300 ${
            open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        >
          {/* WhatsApp option */}
          <a
            href={whatsappUrl(generalEnquiryMessage("Desktop FAB"))}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl bg-[#25D366] text-white px-4 py-3 text-sm font-semibold shadow-xl shadow-[#25D366]/30 hover:scale-105 transition-transform"
          >
            <MessageCircle className="h-4 w-4 shrink-0" />
            Book on WhatsApp
          </a>

          {/* Call option */}
          <a
            href={`tel:${SITE.phone}`}
            className="flex items-center gap-3 rounded-2xl bg-white text-teal border border-teal/15 px-4 py-3 text-sm font-semibold shadow-xl shadow-slate-200/60 hover:scale-105 transition-transform"
            style={{ color: "var(--teal)" }}
          >
            <Phone className="h-4 w-4 shrink-0" />
            {SITE.phone}
          </a>
        </div>

        {/* Main FAB trigger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close contact options" : "Open contact options"}
          className={`fab-ring relative flex h-15 w-15 items-center justify-center rounded-full text-white shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95
            ${open
              ? "bg-slate-700 rotate-45"
              : "bg-gradient-to-br from-teal to-teal-light"
            }`}
          style={{
            width: 60,
            height: 60,
            background: open
              ? "#334155"
              : `linear-gradient(135deg, var(--teal) 0%, var(--teal-light) 100%)`,
          }}
        >
          {open ? (
            <X className="h-5 w-5" />
          ) : (
            <HeadphonesIcon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* ── Mobile FAB ── */}
      <div
        id="fab-root-mobile"
        className={`md:hidden fixed bottom-6 right-5 z-50 flex flex-col items-end gap-2.5 transition-all duration-500 ${
          visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-6 pointer-events-none"
        }`}
      >
        {/* Expanded options mobile */}
        <div
          className={`flex flex-col gap-2 items-end transition-all duration-300 ${
            open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        >
          <a
            href={whatsappUrl(generalEnquiryMessage("Mobile FAB"))}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl bg-[#25D366] text-white px-4 py-2.5 text-sm font-semibold shadow-lg shadow-[#25D366]/25 active:scale-95 transition-transform"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
          <a
            href={`tel:${SITE.phone}`}
            className="flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold shadow-lg border border-slate-100 active:scale-95 transition-transform"
            style={{ color: "var(--teal)" }}
          >
            <Phone className="h-4 w-4" />
            Call Us
          </a>
        </div>

        {/* Mobile FAB button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close" : "Contact us"}
          className="fab-ring flex items-center justify-center rounded-full text-white shadow-2xl transition-all duration-300 active:scale-95"
          style={{
            width: 56,
            height: 56,
            background: open
              ? "#334155"
              : `linear-gradient(135deg, var(--teal) 0%, var(--teal-light) 100%)`,
          }}
        >
          {open ? <X className="h-5 w-5" /> : <HeadphonesIcon className="h-5 w-5" />}
        </button>
      </div>

      {/* No bottom spacer needed — FAB floats above content */}
    </>
  );
}
