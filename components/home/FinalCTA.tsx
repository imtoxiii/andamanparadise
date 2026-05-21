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
        src="https://images.unsplash.com/photo-1519046909882-9b02a989a880?w=1920&q=80"
        alt="Andaman sunset"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 gradient-hero" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 md:px-6 text-center">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-5xl text-white mb-4 drop-shadow-md">
            Ready for Your Andaman Adventure?
          </h2>
          <p className="text-white/80 text-lg mb-8">
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
              className="!border-white/40 !text-white hover:!bg-white hover:!text-ocean"
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
