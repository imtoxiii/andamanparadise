import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, MessageCircle, Sparkles } from "lucide-react";
import { type Destination } from "@/lib/data/destinations";
import { destinationEnquiryMessage, whatsappUrl } from "@/lib/whatsapp";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

type DestinationCardProps = {
  destination: Destination;
  index?: number;
  featured?: boolean;
};

export function DestinationCard({
  destination,
  index = 0,
  featured = false,
}: DestinationCardProps) {
  if (featured) {
    return (
      <AnimatedSection delay={index * 0.06} className="md:col-span-2">
        <article className="group card-premium flex flex-col md:flex-row overflow-hidden rounded-3xl hover:translate-y-0">
          <div className="relative h-64 md:h-auto md:w-1/2 overflow-hidden">
            <Image
              src={destination.image}
              alt={destination.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-navy/60 via-transparent to-transparent" />
            <span className="absolute top-5 left-5 inline-flex items-center gap-1.5 rounded-full bg-coral/90 backdrop-blur-sm px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white">
              <Sparkles className="h-3 w-3" />
              Must Visit
            </span>
          </div>
          <div className="flex flex-1 flex-col justify-center p-7 md:p-9">
            <span className="text-xs font-heading uppercase tracking-wider text-ocean mb-3">
              Featured Destination
            </span>
            <h2 className="font-heading text-3xl md:text-4xl text-navy mb-3 group-hover:text-ocean transition-colors">
              {destination.name}
            </h2>
            <p className="text-navy/55 text-sm md:text-base leading-relaxed mb-5">
              {destination.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-7">
              {destination.highlights.map((h) => (
                <span
                  key={h}
                  className="inline-flex items-center gap-1.5 rounded-full bg-ocean/5 border border-ocean/8 px-3 py-1.5 text-xs text-ocean font-medium"
                >
                  <MapPin className="h-3 w-3" />
                  {h}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href={`/packages?destination=${destination.slug}`}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-ocean to-ocean-light px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-ocean/20 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              >
                View Packages
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={whatsappUrl(destinationEnquiryMessage(destination.name))}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#25D366]/30 bg-[#25D366]/5 px-5 py-3 text-sm font-semibold text-[#128C7E] hover:bg-[#25D366] hover:text-white transition-all duration-300"
              >
                <MessageCircle className="h-4 w-4" />
                Ask on WhatsApp
              </a>
            </div>
          </div>
        </article>
      </AnimatedSection>
    );
  }

  return (
    <AnimatedSection delay={index * 0.06}>
      <article className="group card-premium flex flex-col overflow-hidden rounded-3xl h-full">
        <div className="relative h-52 overflow-hidden">
          <Image
            src={destination.image}
            alt={destination.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <h2 className="font-heading text-2xl text-white mb-1">
              {destination.name}
            </h2>
            <span className="inline-flex items-center gap-1 text-white/60 text-xs">
              <MapPin className="h-3 w-3" />
              Andaman Islands
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <p className="text-navy/55 text-sm leading-relaxed mb-4 flex-1">
            {destination.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-5">
            {destination.highlights.map((h) => (
              <span
                key={h}
                className="inline-flex items-center gap-1 rounded-full bg-cream border border-ocean/8 px-3 py-1 text-xs text-ocean font-medium"
              >
                {h}
              </span>
            ))}
          </div>
          <div className="flex gap-2.5 pt-4 border-t border-ocean/5">
            <Link
              href={`/packages?destination=${destination.slug}`}
              className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-ocean text-white py-2.5 text-sm font-semibold hover:bg-ocean-light transition-all duration-300"
            >
              Packages
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <a
              href={whatsappUrl(destinationEnquiryMessage(destination.name))}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded-full border border-ocean/15 px-4 py-2.5 text-sm font-semibold text-ocean hover:bg-ocean hover:text-white transition-all duration-300"
            >
              <MessageCircle className="h-4 w-4" />
              Ask
            </a>
          </div>
        </div>
      </article>
    </AnimatedSection>
  );
}
