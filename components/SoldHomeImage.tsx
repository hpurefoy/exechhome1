"use client";

import { useState } from "react";
import Image from "next/image";

/**
 * Renders /public/soldhouse.jpg. If the file is missing or fails to load,
 * falls back to a styled placeholder so the hero never shows a blank or
 * broken image while the real photo is added.
 */
export default function SoldHomeImage() {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gold-gradient px-6 text-center">
        <SoldIcon />
        <span className="text-sm font-medium uppercase tracking-[0.2em] text-navy-deep/70">
          Sold-home photo coming soon
        </span>
      </div>
    );
  }

  return (
    <Image
      src="/soldhouse.jpg"
      alt="A recently sold home"
      fill
      priority
      sizes="(max-width: 1024px) 90vw, 480px"
      className="object-cover"
      onError={() => setErrored(true)}
    />
  );
}

function SoldIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 24 24" fill="none" className="text-navy-deep/70" aria-hidden>
      <path
        d="M3 11l9-7 9 7"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
