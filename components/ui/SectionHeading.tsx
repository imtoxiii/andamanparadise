import { AnimatedSection } from "./AnimatedSection";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  home?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  home = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <AnimatedSection className={`max-w-2xl mb-14 md:mb-16 ${alignClass}`}>
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 mb-4 font-heading text-sm ${
            home ? "normal-case tracking-normal" : "uppercase tracking-[0.15em] text-xs"
          } ${light ? "text-coral" : "text-ocean"}`}
        >
          {!home && (
            <span className={`h-px w-6 ${light ? "bg-coral/50" : "bg-ocean/30"}`} />
          )}
          {eyebrow}
          {!home && (
            <span className={`h-px w-6 ${light ? "bg-coral/50" : "bg-ocean/30"}`} />
          )}
        </span>
      )}
      <h2
        className={`font-heading text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.1] ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base md:text-lg leading-relaxed max-w-xl font-sans ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-white/75" : "text-navy/60"}`}
        >
          {description}
        </p>
      )}
      <div
        className={`section-divider mt-8 max-w-xs ${align === "center" ? "mx-auto" : ""}`}
      />
    </AnimatedSection>
  );
}
