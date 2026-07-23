import { cn } from "@/lib/utils";

/**
 * A thin diagonal wedge dropped between two sections for an asymmetric,
 * non-generic seam instead of a plain straight edge. `bg` should match the
 * section that follows it so the wedge reads as that section's lead-in.
 */
export default function Divider({
  bg,
  flip = false,
  className,
}: {
  bg: string;
  flip?: boolean;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn("relative h-14 w-full sm:h-20 lg:h-28", bg, className)}
      style={{
        clipPath: flip
          ? "polygon(0 100%, 100% 0%, 100% 100%)"
          : "polygon(0 0%, 100% 100%, 0% 100%)",
      }}
    />
  );
}
