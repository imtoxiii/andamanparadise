"use client";

import { Users, Star, MapPin, Award } from "lucide-react";
import { STATS } from "@/lib/data/site";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";

const statIcons = [Users, Star, MapPin, Award];

export function StatsStrip() {
  return (
    <section className="relative z-20 -mt-16 md:-mt-20 px-4 md:px-6">
      <div className="mx-auto max-w-7xl">
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {STATS.map((stat, i) => {
            const Icon = statIcons[i] ?? Star;
            return (
              <StaggerItem key={stat.label}>
                <AnimatedSection>
                  <div className="card-premium rounded-2xl md:rounded-3xl p-5 md:p-7 text-center group">
                    <span className="inline-flex h-11 w-11 md:h-12 md:w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-ocean/10 to-coral/10 text-ocean mb-3 md:mb-4 group-hover:from-ocean group-hover:to-ocean-light group-hover:text-white transition-all duration-300">
                      <Icon className="h-5 w-5" />
                    </span>
                    <p className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-gradient leading-none">
                      {stat.value}
                    </p>
                    <p className="text-navy/55 text-xs md:text-sm mt-2 font-medium tracking-wide">
                      {stat.label}
                    </p>
                  </div>
                </AnimatedSection>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
