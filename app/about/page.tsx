import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { BOOKING_STEPS, SITE } from "@/lib/data/site";
import { generalEnquiryMessage, whatsappUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Andaman Paradise — a licensed, government-registered travel agency crafting unforgettable island experiences since 2016.",
};

const VALUES = [
  "Transparency in pricing — no hidden fees",
  "Personally vetted hotels and activity partners",
  "Eco-conscious travel recommendations",
  "Dedicated trip coordinator on WhatsApp",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Andaman Paradise"
        subtitle="Your trusted local partner for authentic Andaman experiences."
        image="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <AnimatedSection>
              <span className="text-sm font-heading text-ocean mb-3 block">
                Our Story
              </span>
              <h2 className="font-heading text-3xl md:text-4xl text-navy mb-6">
                Born in Port Blair, Built for Travelers
              </h2>
              <p className="text-navy/70 leading-relaxed mb-4">
                {SITE.name} started in 2016 with a simple mission: help travelers
                experience the Andaman Islands without the stress of planning ferries,
                permits, and accommodations on their own.
              </p>
              <p className="text-navy/70 leading-relaxed mb-6">
                As locals, we know every beach, every ferry schedule, and every
                hidden gem. Today, we&apos;ve helped 500+ travelers from across India
                create memories that last a lifetime.
              </p>
              <ul className="space-y-3">
                {VALUES.map((v) => (
                  <li key={v} className="flex items-start gap-2 text-navy/80">
                    <CheckCircle className="h-5 w-5 text-coral shrink-0 mt-0.5" />
                    {v}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80"
                  alt="Andaman travel experience"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            eyebrow="How It Works"
            title="Book in 4 Simple Steps"
            description="From first message to island paradise — we handle the details."
          />
          <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {BOOKING_STEPS.map((step) => (
              <StaggerItem key={step.step}>
                <div className="text-center">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-ocean text-white font-heading text-xl mb-4">
                    {step.step}
                  </span>
                  <h3 className="font-heading text-lg text-navy mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-navy/60">{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-16 bg-ocean">
        <AnimatedSection className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-heading text-2xl md:text-3xl text-white mb-4">
            Government Registered · Fully Licensed
          </h2>
          <p className="text-white/80 mb-8">
            We operate with all required permits and work only with verified ferry
            operators, hotels, and activity providers across the Andaman Islands.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href={whatsappUrl(generalEnquiryMessage("About page"))}
              variant="whatsapp"
              external
            >
              Start Planning on WhatsApp
            </Button>
            <Button href="/contact" variant="outline" className="!border-white/40 !text-white hover:!bg-white hover:!text-ocean">
              Contact Us
            </Button>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
