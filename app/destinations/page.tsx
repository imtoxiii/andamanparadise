import type { Metadata } from "next";
import { Compass, MessageCircle } from "lucide-react";
import { DESTINATIONS } from "@/lib/data/destinations";
import { PageHero } from "@/components/ui/PageHero";
import { DestinationCard } from "@/components/destinations/DestinationCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { generalEnquiryMessage, whatsappUrl } from "@/lib/whatsapp";
import { SITE } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Explore Havelock, Neil Island, Port Blair, Ross Island, Baratang and more — top Andaman destinations with curated packages.",
};

export default function DestinationsPage() {
  const [featured, ...rest] = DESTINATIONS;

  return (
    <>
      <PageHero
        eyebrow="Explore Andaman"
        title="Islands Worth Every Mile"
        subtitle="Turquoise waters, pristine beaches, and unforgettable adventures — from Havelock to Diglipur."
        image="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&q=80"
      />

      <section className="py-16 md:py-24 bg-sand relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_0%,rgba(13,79,79,0.04),transparent_45%)]" />

        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
            {[
              { value: `${DESTINATIONS.length}+`, label: "Islands & Spots" },
              { value: "365", label: "Days of Sunshine" },
              { value: "4.9★", label: "Traveler Rating" },
              { value: "24/7", label: "Trip Support" },
            ].map((item) => (
              <AnimatedSection key={item.label}>
                <div className="card-premium rounded-2xl p-5 text-center">
                  <p className="font-heading text-2xl md:text-3xl text-gradient">
                    {item.value}
                  </p>
                  <p className="text-xs md:text-sm text-navy/50 mt-1 font-medium">
                    {item.label}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <SectionHeading
            eyebrow="All Destinations"
            title="Pick Your Perfect Island"
            description="Each destination offers unique experiences — browse highlights and find packages tailored to your trip."
          />

          <div className="grid gap-6 md:grid-cols-2">
            <DestinationCard destination={featured} index={0} featured />
            {rest.map((dest, i) => (
              <DestinationCard key={dest.id} destination={dest} index={i + 1} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ocean via-ocean-light to-navy" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(232,93,76,0.2),transparent_50%)]" />

        <AnimatedSection className="relative mx-auto max-w-3xl px-4 md:px-6 text-center">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 text-white mb-6">
            <Compass className="h-6 w-6" />
          </span>
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">
            Not sure where to go?
          </h2>
          <p className="text-white/75 text-base md:text-lg mb-8 leading-relaxed">
            Tell us your interests and dates — we&apos;ll recommend the perfect
            islands and build a custom itinerary for you.
          </p>
          <a
            href={whatsappUrl(generalEnquiryMessage("Destinations page"))}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-coral to-coral-dark px-8 py-3.5 text-white font-semibold shadow-lg shadow-coral/30 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
          >
            <MessageCircle className="h-4 w-4" />
            Chat with {SITE.name}
          </a>
        </AnimatedSection>
      </section>
    </>
  );
}
