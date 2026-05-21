import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SITE } from "@/lib/data/site";
import { generalEnquiryMessage, whatsappUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Andaman Paradise — WhatsApp, phone, email. Port Blair office. We reply within 30 minutes.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Ready to plan your trip? Reach out — we're here to help."
        image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
      />

      <section className="py-16 md:py-24 bg-sand">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <AnimatedSection>
              <div className="rounded-2xl bg-white p-8 shadow-lg border border-ocean/5">
                <h2 className="font-heading text-2xl text-navy mb-2">
                  Get Your Free Quote
                </h2>
                <p className="text-navy/60 mb-6">
                  {SITE.responseTime}. The fastest way to reach us is WhatsApp.
                </p>

                <div className="flex flex-col gap-4 mb-8">
                  <a
                    href={whatsappUrl(generalEnquiryMessage("Contact page"))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 rounded-2xl bg-[#25D366] py-4 text-white font-semibold text-lg hover:bg-[#1fb855] transition-colors shadow-lg shadow-[#25D366]/20"
                  >
                    <MessageCircle className="h-6 w-6" />
                    Chat on WhatsApp
                  </a>
                  <a
                    href={`tel:${SITE.phone}`}
                    className="flex items-center justify-center gap-3 rounded-2xl bg-ocean py-4 text-white font-semibold text-lg hover:bg-ocean-light transition-colors"
                  >
                    <Phone className="h-6 w-6" />
                    Call {SITE.phone}
                  </a>
                </div>

                <ul className="space-y-4 text-navy/80">
                  <li className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-coral shrink-0 mt-0.5" />
                    <span>{SITE.address}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-coral shrink-0" />
                    <a href={`mailto:${SITE.email}`} className="hover:text-coral">
                      {SITE.email}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-coral shrink-0" />
                    <span>{SITE.hours}</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="rounded-2xl overflow-hidden shadow-lg border border-ocean/5 h-full min-h-[400px]">
                <iframe
                  src={SITE.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 400 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Andaman Paradise office location"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
