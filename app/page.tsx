import { Hero } from "@/components/home/Hero";
import { FeaturedPackages } from "@/components/home/FeaturedPackages";
import { DestinationsPreview } from "@/components/home/DestinationsPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPackages />
      <DestinationsPreview />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
