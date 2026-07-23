"use client";

import { useState } from "react";
import Image from "next/image";

/**
 * Renders /public/headshot.jpg. If the file is missing or fails to load,
 * falls back to a styled gold-gradient monogram card so the hero never
 * shows a blank/broken image while the real photo is swapped in.
 */
export default function AgentHeadshot() {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center bg-gold-gradient">
        <span className="font-sans text-7xl font-extrabold tracking-tight text-navy-deep sm:text-8xl">
          HP
        </span>
        <span className="mt-3 text-sm font-medium uppercase tracking-[0.2em] text-navy-deep/70">
          Photo coming soon
        </span>
      </div>
    );
  }

  return (
    <Image
      src="/headshot.jpg"
      alt="Hank Purefoy, REALTOR® with eXp Realty"
      fill
      priority
      sizes="(max-width: 1024px) 90vw, 480px"
      className="object-cover"
      onError={() => setErrored(true)}
    />
  );
}
