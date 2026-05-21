import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PACKAGES, FEATURED_PACKAGE_IDS } from "@/lib/data/packages";
import { PackageCard } from "@/components/packages/PackageCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function FeaturedPackages() {
  const featured = PACKAGES.filter((p) =>
    FEATURED_PACKAGE_IDS.includes(p.id)
  );

  return (
    <section className="py-20 md:py-28 bg-sand">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          home
          eyebrow="Top Packages"
          title="Our Most Booked Experiences"
          description="Handpicked itineraries loved by honeymooners, families, and adventurers."
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((pkg, i) => (
            <AnimatedSection key={pkg.id} delay={i * 0.1}>
              <PackageCard pkg={pkg} />
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection className="text-center mt-12">
          <Link
            href="/packages"
            className="inline-flex items-center gap-2 text-ocean font-semibold hover:text-coral transition-colors"
          >
            View All Packages
            <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
