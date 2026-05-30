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

const accentColors = [
  { from: "rgba(10,115,115,1)", to: "rgba(13,148,136,1)", shadow: "rgba(10,115,115,0.25)" },
  { from: "rgba(245,158,11,1)", to: "rgba(217,119,6,1)",  shadow: "rgba(245,158,11,0.25)" },
  { from: "rgba(10,115,115,1)", to: "rgba(13,148,136,1)", shadow: "rgba(10,115,115,0.25)" },
  { from: "rgba(245,158,11,1)", to: "rgba(217,119,6,1)",  shadow: "rgba(245,158,11,0.25)" },
];

export function WhyUs() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Subtle background blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full -translate-y-1/2 translate-x-1/3 opacity-[0.04]"
           style={{ background: "radial-gradient(circle, var(--teal), transparent)" }} />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full translate-y-1/2 -translate-x-1/3 opacity-[0.04]"
           style={{ background: "radial-gradient(circle, var(--amber), transparent)" }} />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Travel with Confidence"
          description="We're not just agents — we're your Andaman travel partners from planning to return."
        />
        <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_US.map((item, i) => {
            const Icon = iconMap[item.icon] ?? ShieldCheck;
            const accent = accentColors[i % accentColors.length];
            return (
              <StaggerItem key={item.title}>
                <div className="card-premium group rounded-3xl p-7 h-full relative overflow-hidden">
                  {/* Watermark number */}
                  <div className="absolute top-0 right-0 font-display text-7xl font-bold leading-none select-none opacity-[0.035]"
                       style={{ color: "var(--teal)" }}>
                    0{i + 1}
                  </div>

                  {/* Icon */}
                  <span
                    className="relative flex h-14 w-14 items-center justify-center rounded-2xl text-white mb-5 group-hover:scale-110 transition-transform duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${accent.from} 0%, ${accent.to} 100%)`,
                      boxShadow: `0 8px 20px ${accent.shadow}`,
                    }}
                  >
                    <Icon className="h-6 w-6" />
                  </span>

                  <h3 className="font-display text-xl font-semibold text-slate-800 mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
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
