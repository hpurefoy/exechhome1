"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * A soft circular cursor that trails the pointer and scales up over
 * interactive elements. Desktop (fine-pointer) only — hides itself
 * entirely on touch devices so mobile is unaffected.
 */
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springConfig = { damping: 28, stiffness: 320, mass: 0.4 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const enabledRef = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const update = () => {
      enabledRef.current = mq.matches;
      setEnabled(mq.matches);
      document.documentElement.classList.toggle("cursor-enabled", mq.matches);
    };
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    function move(e: MouseEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
    }

    function over(e: MouseEvent) {
      const target = (e.target as HTMLElement)?.closest(
        "a, button, [data-cursor-hover]"
      );
      setHovering(Boolean(target));
    }

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled, visible]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[999] mix-blend-difference"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        opacity: visible ? 1 : 0,
      }}
    >
      <motion.div
        className="rounded-full bg-white"
        animate={{
          width: hovering ? 56 : 16,
          height: hovering ? 56 : 16,
        }}
        transition={{ type: "spring", damping: 22, stiffness: 300 }}
      />
    </motion.div>
  );
}
