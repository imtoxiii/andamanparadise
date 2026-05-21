import Link from "next/link";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "whatsapp";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-coral text-white hover:bg-coral-dark shadow-lg shadow-coral/25",
  secondary:
    "bg-ocean text-white hover:bg-ocean-light shadow-lg shadow-ocean/25",
  outline:
    "border-2 border-ocean text-ocean hover:bg-ocean hover:text-white",
  whatsapp:
    "bg-[#25D366] text-white hover:bg-[#1fb855] shadow-lg shadow-[#25D366]/25",
};

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  external?: boolean;
  icon?: ReactNode;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
  icon,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]";

  const classes = `${base} ${variants[variant]} ${className}`;

  const isExternal =
    external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");

  if (isExternal) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={classes}
      >
        {icon}
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {icon}
      {children}
    </Link>
  );
}
