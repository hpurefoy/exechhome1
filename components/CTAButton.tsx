"use client";

import { BOOKING_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import MagneticButton from "./MagneticButton";

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
  size?: "md" | "lg";
  /** "external" opens the booking link in a new tab (default).
   *  "anchor" scrolls in-page to #consult instead. */
  variant?: "external" | "anchor";
}

/**
 * The site's single call-to-action pattern: bright CTA-yellow pill with a
 * dark navy shadow for depth, wrapped in a magnetic hover effect.
 * Every primary CTA on the page renders through this component so the
 * booking URL only needs to be configured in one place (lib/constants.ts).
 */
export default function CTAButton({
  children,
  className,
  size = "lg",
  variant = "external",
}: CTAButtonProps) {
  const sizeClasses =
    size === "lg"
      ? "px-8 py-4 text-base sm:text-lg"
      : "px-5 py-2.5 text-sm sm:text-base";

  const sharedClasses = cn(
    "relative inline-flex items-center justify-center gap-2 rounded-full",
    "bg-cta text-navy-deep font-semibold tracking-tight",
    "shadow-cta transition-transform duration-150 ease-out",
    "hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-cta-active",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-deep",
    sizeClasses,
    className
  );

  return (
    <MagneticButton>
      {variant === "anchor" ? (
        <a href="#consult" className={sharedClasses} data-cursor-hover>
          {children}
        </a>
      ) : (
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={sharedClasses}
          data-cursor-hover
        >
          {children}
        </a>
      )}
    </MagneticButton>
  );
}
