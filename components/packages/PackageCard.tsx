import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, Star } from "lucide-react";
import { type TravelPackage, formatPrice } from "@/lib/data/packages";
import { Badge } from "@/components/ui/Badge";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

type PackageCardProps = {
  pkg: TravelPackage;
};

const typeLabels: Record<TravelPackage["type"], string> = {
  honeymoon: "Honeymoon",
  family: "Family",
  adventure: "Adventure",
};

export function PackageCard({ pkg }: PackageCardProps) {
  return (
    <article className="group card-premium flex flex-col overflow-hidden rounded-3xl">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={pkg.image}
          alt={pkg.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

        {pkg.badge && (
          <div className="absolute top-4 left-4">
            <Badge
              label={pkg.badge}
              variant={pkg.badge === "Bestseller" ? "gold" : "coral"}
            />
          </div>
        )}

        <div className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-white/95 backdrop-blur-sm px-2.5 py-1 text-xs font-semibold text-amber-600 shadow-sm">
          <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
          4.9
        </div>

        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
          <span className="inline-block rounded-full bg-white/15 backdrop-blur-md border border-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
            {typeLabels[pkg.type]}
          </span>
          <div className="text-right">
            <p className="text-[10px] uppercase tracking-wider text-white/60 font-medium">
              Starting from
            </p>
            <p className="font-heading text-2xl text-white leading-none">
              {formatPrice(pkg.priceFrom)}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-heading text-2xl text-navy mb-2 group-hover:text-ocean transition-colors">
          {pkg.name}
        </h3>
        <p className="text-sm text-navy/55 mb-5 line-clamp-2 leading-relaxed">
          {pkg.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-ocean/5 px-3 py-1.5 text-xs font-medium text-ocean">
            <Calendar className="h-3.5 w-3.5" />
            {pkg.days}D / {pkg.nights}N
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-coral/5 px-3 py-1.5 text-xs font-medium text-coral">
            <MapPin className="h-3.5 w-3.5" />
            {pkg.destinations.slice(0, 2).join(", ")}
            {pkg.destinations.length > 2 && " +more"}
          </span>
        </div>

        <ul className="text-sm text-navy/60 space-y-2 mb-6 flex-1">
          {pkg.inclusions.slice(0, 3).map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-coral/10 text-coral text-[10px] font-bold mt-0.5">
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>

        <div className="flex gap-2.5 pt-4 border-t border-ocean/5">
          <WhatsAppButton packageName={pkg.name} className="flex-1" size="sm" />
          <Link
            href="/packages"
            className="flex items-center justify-center rounded-full border border-ocean/15 px-5 py-2 text-xs font-semibold text-ocean hover:bg-ocean hover:text-white transition-all duration-300"
          >
            Details
          </Link>
        </div>
      </div>
    </article>
  );
}
