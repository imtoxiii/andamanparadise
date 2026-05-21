"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Calendar, Filter, MapPin, Package, X } from "lucide-react";
import {
  PACKAGES,
  type PackageDuration,
  type PackageType,
  type TravelPackage,
} from "@/lib/data/packages";
import { PackageCard } from "./PackageCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const DURATIONS: { value: PackageDuration | "all"; label: string }[] = [
  { value: "all", label: "All Durations" },
  { value: "3D", label: "3 Days" },
  { value: "5D", label: "5 Days" },
  { value: "7D", label: "7+ Days" },
];

const TYPES: { value: PackageType | "all"; label: string }[] = [
  { value: "all", label: "All Types" },
  { value: "honeymoon", label: "Honeymoon" },
  { value: "family", label: "Family" },
  { value: "adventure", label: "Adventure" },
];

type PackageFiltersProps = {
  initialDestination?: string;
};

function formatDestinationLabel(slug: string) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function PackageFilters({ initialDestination }: PackageFiltersProps) {
  const [duration, setDuration] = useState<PackageDuration | "all">("all");
  const [type, setType] = useState<PackageType | "all">("all");

  const filtered = useMemo(() => {
    return PACKAGES.filter((pkg) => {
      const matchDuration = duration === "all" || pkg.duration === duration;
      const matchType = type === "all" || pkg.type === type;
      const destQuery = initialDestination?.replace(/-/g, " ").toLowerCase() ?? "";
      const matchDest =
        !initialDestination ||
        pkg.destinations.some((d) => d.toLowerCase().includes(destQuery)) ||
        pkg.slug.includes(initialDestination);
      return matchDuration && matchType && matchDest;
    });
  }, [duration, type, initialDestination]);

  const hasActiveFilters =
    duration !== "all" || type !== "all" || !!initialDestination;

  const clearFilters = () => {
    setDuration("all");
    setType("all");
  };

  return (
    <div>
      {initialDestination && (
        <AnimatedSection className="mb-8">
          <div className="flex items-start gap-4 rounded-2xl bg-gradient-to-r from-ocean/8 to-coral/5 border border-ocean/10 p-5 md:p-6">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ocean text-white">
              <MapPin className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ocean mb-1">
                Filtered by destination
              </p>
              <p className="font-heading text-xl text-navy">
                {formatDestinationLabel(initialDestination)}
              </p>
              <p className="text-sm text-navy/55 mt-1">
                Showing packages that include this destination. Adjust filters below to refine.
              </p>
            </div>
          </div>
        </AnimatedSection>
      )}

      <div className="card-premium rounded-3xl p-5 md:p-7 mb-10">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ocean/10 text-ocean">
              <Filter className="h-4 w-4" />
            </span>
            <div>
              <p className="font-heading text-sm text-navy">Filter Packages</p>
              <p className="text-xs text-navy/45">
                {filtered.length} of {PACKAGES.length} packages shown
              </p>
            </div>
          </div>
          {hasActiveFilters && (
            <div className="flex flex-wrap gap-2">
              {(duration !== "all" || type !== "all") && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="inline-flex items-center gap-1.5 rounded-full border border-ocean/15 px-4 py-2 text-xs font-semibold text-ocean hover:bg-ocean/5 transition-colors"
                >
                  <X className="h-3.5 w-3.5" />
                  Clear filters
                </button>
              )}
              {initialDestination && (
                <Link
                  href="/packages"
                  className="inline-flex items-center gap-1.5 rounded-full border border-coral/20 bg-coral/5 px-4 py-2 text-xs font-semibold text-coral hover:bg-coral/10 transition-colors"
                >
                  View all packages
                </Link>
              )}
            </div>
          )}
        </div>

        <div className="space-y-5">
          <div>
            <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-navy/45 mb-3">
              <Calendar className="h-3.5 w-3.5" />
              Duration
            </p>
            <div className="flex flex-wrap gap-2">
              {DURATIONS.map((d) => (
                <button
                  key={d.value}
                  type="button"
                  onClick={() => setDuration(d.value)}
                  className={`rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                    duration === d.value
                      ? "bg-ocean text-white shadow-md shadow-ocean/20 scale-[1.02]"
                      : "bg-cream text-navy/65 border border-ocean/8 hover:border-ocean/25 hover:text-ocean"
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-navy/45 mb-3">
              <Package className="h-3.5 w-3.5" />
              Trip Type
            </p>
            <div className="flex flex-wrap gap-2">
              {TYPES.map((t) => (
                <button
                  key={t.value}
                  type="button"
                  onClick={() => setType(t.value)}
                  className={`rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                    type === t.value
                      ? "bg-coral text-white shadow-md shadow-coral/20 scale-[1.02]"
                      : "bg-cream text-navy/65 border border-ocean/8 hover:border-coral/25 hover:text-coral"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {filtered.length === 0 ? (
        <AnimatedSection className="text-center py-20">
          <div className="card-premium rounded-3xl p-10 max-w-md mx-auto">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-ocean/10 text-ocean mb-4">
              <Package className="h-6 w-6" />
            </span>
            <p className="font-heading text-xl text-navy mb-2">
              No packages match your filters
            </p>
            <p className="text-sm text-navy/55 mb-6">
              Try adjusting filters or contact us for a custom plan tailored to your trip.
            </p>
            <button
              type="button"
              onClick={clearFilters}
              className="rounded-full bg-ocean px-6 py-2.5 text-sm font-semibold text-white hover:bg-ocean-light transition-colors"
            >
              Reset Filters
            </button>
          </div>
        </AnimatedSection>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((pkg: TravelPackage, i) => (
            <AnimatedSection key={pkg.id} delay={i * 0.05}>
              <PackageCard pkg={pkg} />
            </AnimatedSection>
          ))}
        </div>
      )}
    </div>
  );
}
