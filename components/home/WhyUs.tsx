import {
  BadgeDollarSign,
  ShieldCheck,
  Map,
  Headphones,
  type LucideIcon,
} from "lucide-react";
import { WHY_US } from "@/lib/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";

const iconMap: Record<string, LucideIcon> = {
  "badge-dollar-sign": BadgeDollarSign,
  "shield-check": ShieldCheck,
  map: Map,
  headphones: Headphones,
};

export function WhyUs() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-ocean/3 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-coral/3 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Travel with Confidence"
          description="We're not just agents — we're your Andaman travel partners from planning to return."
        />
        <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_US.map((item, i) => {
            const Icon = iconMap[item.icon] ?? ShieldCheck;
            return (
              <StaggerItem key={item.title}>
                <div className="card-premium group rounded-3xl p-7 h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 font-display text-7xl font-bold text-ocean/[0.04] leading-none select-none">
                    0{i + 1}
                  </div>
                  <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-ocean to-ocean-light text-white mb-5 shadow-lg shadow-ocean/20 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="font-display text-xl font-semibold text-navy mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-navy/55 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
