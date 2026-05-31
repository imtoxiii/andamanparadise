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
                    <span
                      className="inline-flex h-11 w-11 md:h-12 md:w-12 items-center justify-center rounded-2xl mb-3 md:mb-4 transition-all duration-300"
                      style={{
                        background: "linear-gradient(135deg, rgba(10,115,115,0.1) 0%, rgba(245,158,11,0.1) 100%)",
                        color: "var(--teal)",
                      }}
                    >
                      <Icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    </span>
                    <p
                      className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-none"
                      style={{
                        background: "linear-gradient(135deg, var(--teal) 0%, var(--teal-light) 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-slate-500 text-xs md:text-sm mt-2 font-medium tracking-wide">
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
