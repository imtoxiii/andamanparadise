type BadgeProps = {
  label: string;
  variant?: "coral" | "ocean" | "gold";
};

const styles = {
  coral: "bg-coral/10 text-coral border-coral/20",
  ocean: "bg-ocean/10 text-ocean border-ocean/20",
  gold: "bg-amber-100 text-amber-800 border-amber-200",
};

export function Badge({ label, variant = "coral" }: BadgeProps) {
  return (
    <span
      className={`inline-block rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide ${styles[variant]}`}
    >
      {label}
    </span>
  );
}
