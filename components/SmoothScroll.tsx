"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

/**
 * Drives buttery smooth scrolling site-wide via Lenis, synced to rAF.
 * Renders nothing — just wires up the scroll behavior for its children.
 */
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);

    // Intercept in-page anchor links so Lenis handles the scroll smoothly.
    function handleClick(e: MouseEvent) {
      const target = (e.target as HTMLElement)?.closest("a[href^='#']");
      if (!target) return;
      const href = target.getAttribute("href");
      if (!href || href === "#") return;
      const el = document.querySelector(href);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el as HTMLElement, { offset: -80 });
    }
    document.addEventListener("click", handleClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", handleClick);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
