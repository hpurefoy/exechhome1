import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  tone?: "dark" | "light";
  /**
   * "tag" — the standard small uppercase pill label used above most headings.
   * "statement" — a large, bold attention-grabbing line (Promise + 7-Step
   * sections call for real visual weight here, not a small label).
   */
  variant?: "tag" | "statement";
  className?: string;
}

export default function Eyebrow({
  children,
  tone = "dark",
  variant = "tag",
  className,
}: EyebrowProps) {
  if (variant === "statement") {
    return (
      <p
        className={cn(
          "text-xl sm:text-2xl md:text-3xl font-bold tracking-tight",
          tone === "dark" ? "text-royal" : "text-gold",
          className
        )}
      >
        {children}
      </p>
    );
  }

  return (
    <span
      className={cn(
        "inline-block rounded-full border px-4 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em]",
        tone === "dark"
          ? "border-gold-antique/40 bg-gold/10 text-gold-antique"
          : "border-white/25 bg-white/10 text-gold",
        className
      )}
    >
      {children}
    </span>
  );
}
