import type { Metadata } from "next";
import { Suspense } from "react";
import { MessageCircle, Sparkles } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { PackageFilters } from "@/components/packages/PackageFilters";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { PACKAGES } from "@/lib/data/packages";
import { generalEnquiryMessage, whatsappUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Tour Packages",
  description:
    "Andaman tour packages from ₹12,999 — honeymoon, family, and adventure trips. Filter by duration and type. Enquire on WhatsApp.",
};

type PackagesPageProps = {
  searchParams: Promise<{ destination?: string }>;
};

function PackageFiltersWrapper({ destination }: { destination?: string }) {
  return <PackageFilters initialDestination={destination} />;
}

function PackageFiltersFallback() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="card-premium rounded-3xl h-[480px] animate-pulse bg-cream"
        />
      ))}
    </div>
  );
}

export default async function PackagesPage({ searchParams }: PackagesPageProps) {
  const params = await searchParams;
  const destination = params.destination;

  const lowestPrice = Math.min(...PACKAGES.map((p) => p.priceFrom));

  return (
    <>
      <PageHero
        eyebrow="Curated Itineraries"
        title="Tour Packages for Every Traveler"
        subtitle="Handcrafted itineraries with transparent pricing. Enquire now for the best seasonal rates."
        image="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&q=80"
      />

      <section className="py-16 md:py-24 bg-sand relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(232,93,76,0.04),transparent_45%)]" />

        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {[
              { value: `${PACKAGES.length}`, label: "Packages Available" },
              { value: `₹${(lowestPrice / 1000).toFixed(0)}K+`, label: "Starting Price" },
              { value: "3–7 Days", label: "Trip Durations" },
              { value: "100%", label: "Customizable" },
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
            eyebrow="Browse & Filter"
            title="Find Your Perfect Trip"
            description="Filter by duration, trip type, or destination. Every package includes ferry transfers and expert support."
          />

          <Suspense fallback={<PackageFiltersFallback />}>
            <PackageFiltersWrapper destination={destination} />
          </Suspense>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-coral/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-ocean/5 rounded-full blur-3xl" />

        <AnimatedSection className="relative mx-auto max-w-2xl px-4 md:px-6 text-center">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-ocean to-ocean-light text-white mb-6 shadow-lg shadow-ocean/20">
            <Sparkles className="h-6 w-6" />
          </span>
          <h2 className="font-heading text-3xl md:text-4xl text-navy mb-4">
            Need a Custom Package?
          </h2>
          <p className="text-navy/60 text-base md:text-lg mb-8 leading-relaxed">
            We design trips for any budget, group size, or special occasion —
            honeymoons, family reunions, corporate retreats, and more.
          </p>
          <a
            href={whatsappUrl(generalEnquiryMessage("Packages page - custom"))}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-3.5 text-white font-semibold shadow-lg shadow-[#25D366]/25 hover:bg-[#1fb855] hover:scale-[1.02] transition-all duration-300"
          >
            <MessageCircle className="h-4 w-4" />
            Request Custom Package on WhatsApp
          </a>
        </AnimatedSection>
      </section>
    </>
  );
}
