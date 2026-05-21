"use client";

import { MessageCircle, Phone } from "lucide-react";
import { SITE } from "@/lib/data/site";
import { generalEnquiryMessage, whatsappUrl } from "@/lib/whatsapp";

export function StickyBookBar() {
  return (
    <>
      {/* Mobile sticky bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden glass-nav border-t border-ocean/10 px-4 py-3 flex gap-3">
        <a
          href={`tel:${SITE.phone}`}
          className="flex-1 flex items-center justify-center gap-2 rounded-full border-2 border-ocean text-ocean py-3 text-sm font-semibold"
        >
          <Phone className="h-4 w-4" />
          Call Now
        </a>
        <a
          href={whatsappUrl(generalEnquiryMessage("Mobile sticky bar"))}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white py-3 text-sm font-semibold"
        >
          <MessageCircle className="h-4 w-4" />
          Book Trip
        </a>
      </div>

      {/* Desktop floating pill */}
      <a
        href={whatsappUrl(generalEnquiryMessage("Desktop floating CTA"))}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-8 right-8 z-40 items-center gap-2 rounded-full bg-[#25D366] text-white px-6 py-4 text-sm font-semibold shadow-2xl shadow-[#25D366]/30 hover:scale-105 transition-transform"
      >
        <MessageCircle className="h-5 w-5" />
        Book Your Trip
      </a>

      {/* Spacer for mobile bar */}
      <div className="h-20 md:h-0" aria-hidden />
    </>
  );
}
