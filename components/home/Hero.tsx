"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Sparkles } from "lucide-react";
import { SITE } from "@/lib/data/site";
import { generalEnquiryMessage, whatsappUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80"
        alt="Andaman Paradise tropical beach"
        fill
        priority
        className="object-cover scale-105"
        sizes="100vw"
      />
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(232,93,76,0.15),transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-28 pb-32 md:px-6 md:pt-32 md:pb-36 text-center md:text-left w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-white/90 mb-8"
          >
            <Sparkles className="h-3.5 w-3.5 text-coral" />
            Government Registered Travel Agency
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="font-hero text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.1] mb-6 drop-shadow-lg"
          >
            Discover Paradise in the Andaman Islands
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="text-base md:text-xl text-white/75 leading-relaxed mb-10 max-w-xl font-light"
          >
            {SITE.tagline}. Curated packages, best prices, and 24/7 support —
            your dream island vacation starts here.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Button
              href={whatsappUrl(generalEnquiryMessage("Home Hero"))}
              variant="whatsapp"
              external
              icon={<ArrowRight className="h-4 w-4" />}
            >
              Get Quote on WhatsApp
            </Button>
            <Button
              href={`tel:${SITE.phone}`}
              variant="outline"
              className="!border-white/30 !text-white hover:!bg-white hover:!text-ocean backdrop-blur-sm"
              icon={<Phone className="h-4 w-4" />}
            >
              Call Now
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="hidden lg:flex absolute bottom-12 right-6 text-white/50 text-xs uppercase tracking-[0.2em] flex-col items-center gap-3"
        >
          <span>Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-px h-14 bg-gradient-to-b from-white/60 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
