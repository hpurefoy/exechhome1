"use client";

import { useEffect, useState } from "react";
import Container from "./Container";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/constants";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "The System", href: "#seven-step-system" },
  { label: "Free Bonus", href: "#bonus-guide" },
  { label: "Reviews", href: "#testimonials" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-navy-deep/80 backdrop-blur-md shadow-[0_1px_0_0_rgba(255,255,255,0.08)]"
          : "bg-transparent"
      )}
    >
      <Container className="flex items-center justify-between py-4">
        <a href="#" className="flex items-center gap-3" data-cursor-hover>
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-gradient text-sm font-extrabold tracking-tight text-navy-deep shadow-gold">
            HP
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-sans text-base font-bold tracking-tight text-white sm:text-lg">
              Hank Purefoy
            </span>
            <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-blue-100/60 sm:text-[11px]">
              REALTOR&reg; &middot; The Purefoy Realty Group &mdash; Powered
              by eXp
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-cursor-hover
              className="group relative text-sm font-medium text-blue-50/85 transition-colors hover:text-white"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href={PHONE_HREF}
            data-cursor-hover
            className="inline-flex items-center gap-2 text-sm font-semibold text-white"
          >
            <PhoneIcon />
            {PHONE_DISPLAY}
          </a>
        </div>
      </Container>
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
