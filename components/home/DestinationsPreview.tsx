import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { DESTINATIONS } from "@/lib/data/destinations";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function DestinationsPreview() {
  const preview = DESTINATIONS.slice(0, 4);

  return (
    <section className="py-20 md:py-28 bg-cream relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(13,79,79,0.04),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          home
          eyebrow="Explore"
          title="Stunning Destinations"
          description="From turquoise Havelock to historic Ross Island — discover the best of Andaman."
        />
        <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible">
          {preview.map((dest, i) => (
            <AnimatedSection
              key={dest.id}
              delay={i * 0.08}
              className="min-w-[280px] md:min-w-0"
            >
              <Link
                href={`/packages?destination=${dest.slug}`}
                className="group block relative rounded-3xl overflow-hidden aspect-[4/5] card-premium hover:translate-y-0 hover:shadow-2xl hover:shadow-ocean/15"
              >
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="280px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/30 to-navy/5" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 px-3 py-1 text-[11px] font-medium text-white/90">
                    <MapPin className="h-3 w-3" />
                    Andaman
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-heading text-2xl text-white mb-2 group-hover:text-coral transition-colors">
                    {dest.name}
                  </h3>
                  <p className="text-white/65 text-sm line-clamp-2 mb-4 leading-relaxed">
                    {dest.description}
                  </p>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 px-4 py-2 text-white text-xs font-semibold group-hover:bg-coral group-hover:border-coral transition-all duration-300">
                    View packages
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection className="text-center mt-12">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-ocean to-ocean-light px-8 py-3.5 text-white font-semibold shadow-lg shadow-ocean/20 hover:shadow-xl hover:shadow-ocean/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            All Destinations
            <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
