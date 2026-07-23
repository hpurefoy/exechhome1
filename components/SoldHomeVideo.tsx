"use client";

import { useState } from "react";
import SoldHomeImage from "./SoldHomeImage";

/**
 * Renders /public/soldhouse-video.mp4 as a muted, autoplaying, looping
 * background clip. Falls back to the static SoldHomeImage (which has its
 * own placeholder fallback) if the video fails to load or can't autoplay.
 */
export default function SoldHomeVideo() {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return <SoldHomeImage />;
  }

  return (
    <video
      className="h-full w-full object-cover"
      src="/soldhouse-video.mp4"
      poster="/soldhouse.jpg"
      autoPlay
      muted
      loop
      playsInline
      onError={() => setErrored(true)}
    />
  );
}
