"use client";

import { motion } from "framer-motion";
import { Asterisk } from "lucide-react";
import { SITE } from "@/lib/data/site";
import { generalEnquiryMessage, whatsappUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://images.pexels.com/photos/10671403/pexels-photo-10671403.jpeg")' }}
      />
      {/* Subtle gradient overlay to keep brightness high but ensure text readability at the bottom */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 pt-36 md:pt-48 pb-20 text-center w-full flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[900px] mx-auto"
        >
          <h1 className="font-hero text-white leading-[1.3] mb-8 uppercase text-[2rem] sm:text-[2.8rem] md:text-[4rem] lg:text-[4.5rem] tracking-tight text-center [text-wrap:balance] drop-shadow-lg">
            DISCOVER <span className="marker-green">PARADISE</span> IN THE ANDAMANS. WE CREATE <span className="marker-green">UNFORGETTABLE</span> MOMENTS FOR YOUR <span className="marker-green">LOVED ONES</span>.
          </h1>

          <p className="text-white/95 drop-shadow-md font-medium tracking-wide text-sm md:text-base mb-10 max-w-md mx-auto">
            {SITE.tagline}. Curated packages, best prices, and 24/7 support.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href={whatsappUrl(generalEnquiryMessage("Home Hero"))}
              variant="whatsapp"
              external
            >
              Get Quote on WhatsApp
            </Button>
            <Button
              href={`tel:${SITE.phone}`}
              variant="outline"
              className="!border-white/40 !text-white hover:!bg-white hover:!text-slate-900 hover:!border-white backdrop-blur-sm shadow-lg"
            >
              Call Now
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
