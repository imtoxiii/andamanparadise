import Link from "next/link";
import { type ReactNode, type CSSProperties } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "whatsapp";

const variants: Record<ButtonVariant, string> = {
  primary:  "text-white shadow-lg hover:opacity-90",
  secondary: "text-white shadow-lg hover:opacity-90",
  outline:  "border-2 hover:text-white",
  whatsapp: "bg-[#25D366] text-white hover:bg-[#1fb855] shadow-lg shadow-[#25D366]/25",
};

const variantStyles: Record<ButtonVariant, CSSProperties> = {
  primary: {
    background: "linear-gradient(135deg, var(--amber) 0%, var(--amber-dark) 100%)",
    boxShadow: "0 4px 14px rgba(245,158,11,0.3)",
  },
  secondary: {
    background: "linear-gradient(135deg, var(--teal) 0%, var(--teal-light) 100%)",
    boxShadow: "0 4px 14px rgba(10,115,115,0.25)",
  },
  outline: {
    borderColor: "var(--teal)",
    color: "var(--teal)",
  },
  whatsapp: {},
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
  const style = variantStyles[variant];

  const isExternal =
    external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");

  if (isExternal) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={classes}
        style={style}
      >
        {icon}
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} style={style}>
      {icon}
      {children}
    </Link>
  );
}
