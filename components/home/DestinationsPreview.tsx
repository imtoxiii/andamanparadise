import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { DESTINATIONS } from "@/lib/data/destinations";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function DestinationsPreview() {
  const preview = DESTINATIONS.slice(0, 4);

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
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
                className="group block relative rounded-3xl overflow-hidden aspect-[4/5] shadow-[0_2px_20px_rgba(15,23,42,0.08)] hover:shadow-[0_12px_40px_rgba(15,23,42,0.14)] transition-shadow duration-300"
              >
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="280px"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 px-3 py-1 text-[11px] font-medium text-white/90">
                    <MapPin className="h-3 w-3" />
                    Andaman
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3
                    className="font-heading text-2xl text-white mb-2 transition-colors duration-300"
                    style={{ color: "white" }}
                  >
                    <span className="group-hover:text-amber-300 transition-colors">{dest.name}</span>
                  </h3>
                  <p className="text-white/60 text-sm line-clamp-2 mb-4 leading-relaxed">
                    {dest.description}
                  </p>
                  <span
                    className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-white text-xs font-semibold transition-all duration-300 border border-white/20 group-hover:border-amber-400/60 backdrop-blur-sm"
                    style={{ background: "rgba(255,255,255,0.08)" }}
                  >
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
            className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-white font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg"
            style={{
              background: "linear-gradient(135deg, var(--teal) 0%, var(--teal-light) 100%)",
              boxShadow: "0 8px 24px rgba(10,115,115,0.3)",
            }}
          >
            All Destinations
            <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
