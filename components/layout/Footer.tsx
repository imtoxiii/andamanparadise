import Link from "next/link";
import { Palmtree, Phone, Mail, MapPin } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/data/site";
import { generalEnquiryMessage, whatsappUrl } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ocean">
                <Palmtree className="h-5 w-5 text-white" />
              </span>
              <span className="font-heading text-xl">
                {SITE.name}
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              {SITE.tagline}. Crafting unforgettable Andaman experiences since
              2016.
            </p>
          </div>

          <div>
            <h3 className="font-heading mb-4 text-coral">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading mb-4 text-coral">Popular Packages</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/packages" className="hover:text-white transition-colors">
                  Honeymoon Packages
                </Link>
              </li>
              <li>
                <Link href="/packages" className="hover:text-white transition-colors">
                  Family Tours
                </Link>
              </li>
              <li>
                <Link href="/packages" className="hover:text-white transition-colors">
                  Adventure Trips
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="hover:text-white transition-colors">
                  Havelock Island
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading mb-4 text-coral">Contact Us</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-coral shrink-0 mt-0.5" />
                {SITE.address}
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-coral shrink-0" />
                <a href={`tel:${SITE.phone}`} className="hover:text-white">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-coral shrink-0" />
                <a href={`mailto:${SITE.email}`} className="hover:text-white">
                  {SITE.email}
                </a>
              </li>
            </ul>
            <a
              href={whatsappUrl(generalEnquiryMessage("Footer"))}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold hover:bg-[#1fb855] transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>Government Registered Travel Agency · Andaman & Nicobar</p>
        </div>
      </div>
    </footer>
  );
}
