import Image from "next/image";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  image?: string;
  align?: "center" | "left";
};

export function PageHero({
  title,
  subtitle,
  eyebrow,
  image = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80",
  align = "center",
}: PageHeroProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <section className="relative pt-28 pb-24 md:pt-36 md:pb-32 overflow-hidden">
      <Image src={image} alt="" fill className="object-cover scale-105" priority sizes="100vw" />
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(232,93,76,0.12),transparent_55%)]" />

      <div className={`relative z-10 mx-auto max-w-7xl px-4 md:px-6 ${alignClass}`}>
        {eyebrow && (
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 font-heading text-sm text-white/85 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-coral" />
            {eyebrow}
          </span>
        )}
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white leading-[1.08] mb-5 max-w-4xl drop-shadow-md">
          {title}
        </h1>
        {subtitle && (
          <p className="text-base md:text-lg text-white/75 max-w-2xl leading-relaxed font-light">
            {subtitle}
          </p>
        )}
        <div className="section-divider mt-8 max-w-xs opacity-40" />
      </div>
    </section>
  );
}
