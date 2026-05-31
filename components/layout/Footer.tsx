import Link from "next/link";
import { Palmtree, Phone, Mail, MapPin } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/data/site";
import { generalEnquiryMessage, whatsappUrl } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer style={{ background: "var(--navy)" }} className="text-white">
      {/* Top accent bar */}
      <div
        className="h-1 w-full"
        style={{
          background: "linear-gradient(90deg, var(--teal) 0%, var(--teal-light) 50%, var(--navy) 100%)",
        }}
      />
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ background: "linear-gradient(135deg, var(--teal) 0%, var(--teal-light) 100%)" }}
              >
                <Palmtree className="h-5 w-5 text-white" />
              </span>
              <span className="font-heading text-xl text-white">{SITE.name}</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              {SITE.tagline}. Crafting unforgettable Andaman experiences since
              2016.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading mb-5 text-sm uppercase tracking-[0.15em] text-white/80">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Packages */}
          <div>
            <h3 className="font-heading mb-5 text-sm uppercase tracking-[0.15em] text-white/80">
              Popular Packages
            </h3>
            <ul className="space-y-2.5 text-sm text-white/60">
              {["Honeymoon Packages", "Family Tours", "Adventure Trips", "Havelock Island"].map(
                (name, i) => (
                  <li key={name}>
                    <Link
                      href={i < 3 ? "/packages" : "/destinations"}
                      className="hover:text-white transition-colors duration-200"
                    >
                      {name}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading mb-5 text-sm uppercase tracking-[0.15em] text-white/80">
              Contact Us
            </h3>
            <ul className="space-y-3.5 text-sm text-white/60">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-white/60" />
                {SITE.address}
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-white/60" />
                <a href={`tel:${SITE.phone}`} className="hover:text-white transition-colors">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-white/60" />
                <a href={`mailto:${SITE.email}`} className="hover:text-white transition-colors">
                  {SITE.email}
                </a>
              </li>
            </ul>
            <a
              href={whatsappUrl(generalEnquiryMessage("Footer"))}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-all hover:scale-[1.03] active:scale-[0.97]"
              style={{ background: "#25D366", boxShadow: "0 4px 14px rgba(37,211,102,0.3)" }}
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/35">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>Government Registered Travel Agency · Andaman &amp; Nicobar</p>
        </div>
      </div>
    </footer>
  );
}
