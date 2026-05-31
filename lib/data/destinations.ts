export type Destination = {
  id: string;
  name: string;
  slug: string;
  description: string;
  highlights: string[];
  image: string;
};

export const DESTINATIONS: Destination[] = [
  {
    id: "havelock",
    name: "Havelock Island",
    slug: "havelock",
    description:
      "Famous for Radhanagar Beach — Asia's best beach — crystal-clear waters, scuba diving, and serene sunsets.",
    highlights: ["Radhanagar Beach", "Elephant Beach", "Scuba Diving"],
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
  },
  {
    id: "neil",
    name: "Neil Island",
    slug: "neil",
    description:
      "A quieter paradise with Bharatpur Beach, natural rock formations, and laid-back village charm.",
    highlights: ["Bharatpur Beach", "Natural Bridge", "Snorkeling"],
    image:
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80",
  },
  {
    id: "port-blair",
    name: "Port Blair",
    slug: "port-blair",
    description:
      "The capital gateway with Cellular Jail, museums, local markets, and ferry connections to all islands.",
    highlights: ["Cellular Jail", "Corbyn's Cove", "Ross Island Ferry"],
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  },
  {
    id: "ross-island",
    name: "Ross Island",
    slug: "ross-island",
    description:
      "Historic ruins of the British headquarters, peacocks, deer, and lighthouse views amid lush greenery.",
    highlights: ["British Ruins", "Light House", "Half-day Trip"],
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
  },
  {
    id: "baratang",
    name: "Baratang Island",
    slug: "baratang",
    description:
      "Mangrove creeks, limestone caves, and the unique mud volcano — an offbeat adventure from Port Blair.",
    highlights: ["Limestone Caves", "Mud Volcano", "Mangrove Safari"],
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
  },
  {
    id: "north-bay",
    name: "North Bay Island",
    slug: "north-bay",
    description:
      "Snorkeling, sea walking, and glass-bottom boat rides — perfect for a day trip from Port Blair.",
    highlights: ["Sea Walk", "Snorkeling", "Coral Reefs"],
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
  },
  {
    id: "chidiya-tapu",
    name: "Chidiya Tapu",
    slug: "chidiya-tapu",
    description:
      "The sunset point of Andaman — mangrove forests, bird watching, and dramatic evening skies.",
    highlights: ["Sunset Point", "Bird Watching", "Munda Pahar Trek"],
    image:
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&q=80",
  },
  {
    id: "diglipur",
    name: "Diglipur",
    slug: "diglipur",
    description:
      "Northern Andaman's hidden gem — Saddle Peak, Ross & Smith twin islands, and turtle nesting beaches.",
    highlights: ["Ross & Smith Islands", "Saddle Peak", "Turtle Nesting"],
    image:
      "https://images.unsplash.com/photo-1476514525535-07fa9c4a5734?w=800&q=80",
  },
];
