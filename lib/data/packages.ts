export type PackageType = "honeymoon" | "family" | "adventure";
export type PackageDuration = "3D" | "5D" | "7D";

export type TravelPackage = {
  id: string;
  name: string;
  slug: string;
  duration: PackageDuration;
  days: number;
  nights: number;
  priceFrom: number;
  type: PackageType;
  destinations: string[];
  inclusions: string[];
  badge?: "Bestseller" | "New" | "Popular";
  image: string;
  description: string;
};

export const PACKAGES: TravelPackage[] = [
  {
    id: "romantic-5d",
    name: "Romantic Havelock Escape",
    slug: "romantic-havelock-escape",
    duration: "5D",
    days: 5,
    nights: 4,
    priceFrom: 24999,
    type: "honeymoon",
    destinations: ["Port Blair", "Havelock", "Neil"],
    inclusions: [
      "4-star beach resort stay",
      "Private candlelight dinner",
      "Couple scuba diving session",
      "All ferry transfers",
      "Airport pickup & drop",
    ],
    badge: "Bestseller",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
    description:
      "The perfect honeymoon — turquoise waters, private beach moments, and unforgettable underwater adventures.",
  },
  {
    id: "family-6d",
    name: "Family Fun Andaman",
    slug: "family-fun-andaman",
    duration: "5D",
    days: 6,
    nights: 5,
    priceFrom: 18999,
    type: "family",
    destinations: ["Port Blair", "Havelock", "North Bay"],
    inclusions: [
      "Family-friendly hotels",
      "Cellular Jail light & sound",
      "Glass-bottom boat ride",
      "Elephant Beach visit",
      "All meals (breakfast included)",
    ],
    badge: "Popular",
    image:
      "https://images.unsplash.com/photo-1478144592103-25e218a0481c?w=800&q=80",
    description:
      "Kid-friendly itinerary with beaches, history, and boat rides — fun for all ages.",
  },
  {
    id: "adventure-7d",
    name: "Adventure Explorer",
    slug: "adventure-explorer",
    duration: "7D",
    days: 7,
    nights: 6,
    priceFrom: 32999,
    type: "adventure",
    destinations: ["Port Blair", "Havelock", "Baratang", "Neil"],
    inclusions: [
      "Scuba diving & sea kayaking",
      "Baratang limestone caves tour",
      "Trek to Munda Pahar",
      "Snorkeling at Elephant Beach",
      "All adventure permits",
    ],
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1682687220063-4742bd5fd3bb?w=800&q=80",
    description:
      "For thrill-seekers — scuba, kayaking, caves, and treks across the best of Andaman.",
  },
  {
    id: "quick-3d",
    name: "Quick Andaman Getaway",
    slug: "quick-andaman-getaway",
    duration: "3D",
    days: 3,
    nights: 2,
    priceFrom: 12999,
    type: "family",
    destinations: ["Port Blair", "Havelock"],
    inclusions: [
      "2-night hotel stay",
      "Radhanagar Beach visit",
      "Ferry tickets included",
      "Sightseeing in Port Blair",
      "Breakfast daily",
    ],
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    description:
      "Short on time? Experience the highlights of Port Blair and Havelock in a long weekend.",
  },
  {
    id: "luxury-7d",
    name: "Luxury Island Hopping",
    slug: "luxury-island-hopping",
    duration: "7D",
    days: 7,
    nights: 6,
    priceFrom: 54999,
    type: "honeymoon",
    destinations: ["Port Blair", "Havelock", "Neil", "Ross Island"],
    inclusions: [
      "5-star premium resorts",
      "Private yacht sunset cruise",
      "Couple spa session",
      "Premium scuba with photos",
      "Private chauffeur throughout",
    ],
    badge: "Bestseller",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
    description:
      "Ultimate luxury — premium stays, private experiences, and white-glove service.",
  },
  {
    id: "budget-5d",
    name: "Budget Backpacker",
    slug: "budget-backpacker",
    duration: "5D",
    days: 5,
    nights: 4,
    priceFrom: 14999,
    type: "adventure",
    destinations: ["Port Blair", "Havelock", "Neil"],
    inclusions: [
      "Comfortable guesthouse stays",
      "Shared ferry transfers",
      "Guided island hopping",
      "Snorkeling gear included",
      "Local food recommendations",
    ],
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
    description:
      "Explore Andaman on a budget without compromising on experiences.",
  },
  {
    id: "heritage-4d",
    name: "Heritage & Beaches",
    slug: "heritage-beaches",
    duration: "3D",
    days: 4,
    nights: 3,
    priceFrom: 16999,
    type: "family",
    destinations: ["Port Blair", "Ross Island", "North Bay"],
    inclusions: [
      "Cellular Jail tour",
      "Ross Island exploration",
      "North Bay water sports",
      "Anthropological Museum",
      "Corbyn's Cove beach",
    ],
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
    description:
      "Discover Andaman's rich history and enjoy water sports — ideal for culture lovers.",
  },
  {
    id: "offbeat-6d",
    name: "Offbeat Andaman Trail",
    slug: "offbeat-andaman-trail",
    duration: "5D",
    days: 6,
    nights: 5,
    priceFrom: 27999,
    type: "adventure",
    destinations: ["Port Blair", "Baratang", "Diglipur"],
    inclusions: [
      "Baratang mangrove safari",
      "Limestone caves expedition",
      "Ross & Smith twin islands",
      "Saddle Peak trek",
      "Local homestay experience",
    ],
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
    description:
      "Go beyond the usual — northern Andaman's hidden gems and raw natural beauty.",
  },
];

export const FEATURED_PACKAGE_IDS = [
  "romantic-5d",
  "family-6d",
  "adventure-7d",
];

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}
