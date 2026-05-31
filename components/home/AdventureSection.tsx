import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const ADVENTURES = [
  {
    id: "scuba",
    title: "Scuba Diving",
    description: "Explore the vibrant coral reefs and marine life of Havelock with certified PADI instructors.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
  },
  {
    id: "snorkeling",
    title: "Snorkeling",
    description: "Discover shallow reefs and colorful fishes at Elephant beach and North Bay.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80",
  },
  {
    id: "kayaking",
    title: "Mangrove Kayaking",
    description: "Paddle through the dense and serene mangrove forests of Havelock and Baratang.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  },
  {
    id: "sea-walk",
    title: "Sea Walking",
    description: "Walk on the ocean floor and experience marine life up close, no swimming skills required.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
  },
  {
    id: "parasailing",
    title: "Parasailing",
    description: "Soar high above the ocean and get a bird's eye view of the stunning Andaman coastline.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
  },
  {
    id: "jet-ski",
    title: "Jet Skiing",
    description: "Feel the rush of adrenaline as you speed across the clear blue waves on a jet ski.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
  },
  {
    id: "glass-bottom",
    title: "Glass Bottom Boat",
    description: "Enjoy the colorful coral reefs and marine life without getting wet, perfect for families.",
    image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&q=80",
  },
];

export function AdventureSection() {
  const preview = ADVENTURES.slice(0, 4);

  return (
    <section className="bg-slate-50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Thrilling Adventures"
            subtitle="Dive into the clear waters or explore the dense mangroves. Experience the adrenaline of the Andaman Islands."
            align="center"
          />
        </AnimatedSection>

        <div className="mt-16 flex gap-5 overflow-x-auto pb-4 scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible">
          {preview.map((adv, index) => (
            <AnimatedSection key={adv.id} delay={index * 0.08} className="min-w-[300px] md:min-w-0">
              <div className="group block relative rounded-3xl overflow-hidden aspect-[3/4] shadow-[0_2px_20px_rgba(15,23,42,0.08)] hover:shadow-[0_12px_40px_rgba(15,23,42,0.14)] transition-shadow duration-300">
                  <Image
                    src={adv.image}
                    alt={adv.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
                    <h3 className="font-heading text-2xl text-white mb-2">{adv.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {adv.description}
                    </p>
                  </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
