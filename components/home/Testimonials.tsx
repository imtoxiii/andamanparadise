import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-sand relative">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          home
          eyebrow="Reviews"
          title="What Our Travelers Say"
          description="Real stories from couples, families, and solo adventurers who trusted us."
        />
        <StaggerContainer className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <StaggerItem key={t.name}>
              <blockquote className="card-premium rounded-3xl p-7 h-full flex flex-col relative">
                <Quote className="absolute top-6 right-6 h-8 w-8 text-ocean/8" />
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-navy/75 leading-relaxed flex-1 text-[15px]">
                  &ldquo;{t.text}&rdquo;
                </p>
                <footer className="mt-6 pt-5 border-t border-ocean/5 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-ocean to-ocean-light text-white text-sm font-semibold">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <p className="font-semibold text-navy text-sm">{t.name}</p>
                    <p className="text-xs text-navy/45">{t.location}</p>
                  </div>
                </footer>
              </blockquote>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
