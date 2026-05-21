export const SITE = {
  name: "Andaman Paradise",
  tagline: "Your Gateway to the Andaman Islands",
  phone: "+919876543210",
  whatsapp: "919876543210",
  email: "info@andamanparadise.com",
  address: "Aberdeen Bazaar, Port Blair, Andaman & Nicobar Islands - 744101",
  hours: "Mon – Sat: 9:00 AM – 7:00 PM",
  responseTime: "We reply within 30 minutes",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.5!2d92.726!3d11.623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDM3JzIyLjgiTiA5MsKwNDMnMzMuNiJF!5e0!3m2!1sen!2sin!4v1",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/destinations", label: "Destinations" },
  { href: "/packages", label: "Packages" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const STATS = [
  { value: "500+", label: "Happy Travelers" },
  { value: "4.9", label: "Google Rating" },
  { value: "15+", label: "Destinations" },
  { value: "8+", label: "Years Experience" },
] as const;

export const WHY_US = [
  {
    title: "Best Price Guarantee",
    description:
      "Transparent pricing with no hidden charges. We match genuine competitor quotes.",
    icon: "badge-dollar-sign" as const,
  },
  {
    title: "Licensed Operator",
    description:
      "Government-registered travel agency with verified ferry, hotel & activity partners.",
    icon: "shield-check" as const,
  },
  {
    title: "Custom Itineraries",
    description:
      "Every trip is tailored to your dates, budget, and interests — honeymoon to family.",
    icon: "map" as const,
  },
  {
    title: "24/7 Trip Support",
    description:
      "Dedicated coordinator on WhatsApp from booking until you return home.",
    icon: "headphones" as const,
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Priya & Rahul",
    location: "Mumbai",
    text: "Our honeymoon at Havelock was flawless. Andaman Paradise handled everything — ferry, resort, scuba — stress-free!",
    rating: 5,
  },
  {
    name: "The Sharma Family",
    location: "Delhi",
    text: "Traveled with kids and grandparents. They customized a 6-day trip that worked for everyone. Highly recommend!",
    rating: 5,
  },
  {
    name: "Arjun Mehta",
    location: "Bangalore",
    text: "Best adventure package — kayaking, trekking, and night kayaking at Havelock. Worth every rupee.",
    rating: 5,
  },
] as const;

export const BOOKING_STEPS = [
  { step: 1, title: "Enquire", description: "WhatsApp or call us with your travel dates and group size." },
  { step: 2, title: "Customize", description: "We craft a personalized itinerary with transparent pricing." },
  { step: 3, title: "Confirm & Pay", description: "Secure your slot with a small advance. Balance before travel." },
  { step: 4, title: "Travel & Enjoy", description: "We coordinate ferries, hotels & activities. You just relax." },
] as const;
