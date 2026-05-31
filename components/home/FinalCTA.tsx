import Image from "next/image";
import { Phone } from "lucide-react";
import { SITE } from "@/lib/data/site";
import { generalEnquiryMessage, whatsappUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function FinalCTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=1920&q=80"
        alt="Beautiful Andaman sunset beach"
        fill
        className="object-cover"
        sizes="100vw"
      />
      {/* Clean dark overlay — not gradient heavy */}
      <div className="absolute inset-0 bg-slate-900/65" />
      {/* Dark warm glow bottom */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(10,115,115,0.18),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 md:px-8 text-center">
        <AnimatedSection>
          {/* Eyebrow */}
          <span
            className="inline-block rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/90 mb-6 border border-white/20 backdrop-blur-sm"
            style={{ background: "rgba(245,158,11,0.18)" }}
          >
            Limited Spots Available
          </span>

          <h2 className="font-heading font-bold text-white text-4xl md:text-5xl lg:text-7xl mb-5 leading-tight tracking-tight">
            Ready for Your{" "}
            <span className="text-white/80">
              Andaman
            </span>{" "}
            Adventure?
          </h2>
          <p className="text-white/75 text-lg mb-10 max-w-xl mx-auto">
            Get a free customized quote in minutes. No obligation — just expert
            advice and the best prices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href={whatsappUrl(generalEnquiryMessage("Final CTA"))}
              variant="whatsapp"
              external
            >
              Get Free Quote on WhatsApp
            </Button>
            <Button
              href={`tel:${SITE.phone}`}
              variant="outline"
              className="!border-white/35 !text-white hover:!bg-white hover:!text-teal"
              icon={<Phone className="h-4 w-4" />}
            >
              {SITE.phone}
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
