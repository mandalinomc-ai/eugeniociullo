"use client";

import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

/** Glow cursore desktop — look Webflow / premium SaaS */
export default function CursorGlow() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const sx = useSpring(x, { stiffness: 280, damping: 28 });
  const sy = useSpring(y, { stiffness: 280, damping: 28 });

  useEffect(() => {
    if (reduce) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;

    setVisible(true);
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [reduce, x, y]);

  if (!visible) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-[90] hidden md:block mix-blend-screen"
      style={{
        left: sx,
        top: sy,
        x: "-50%",
        y: "-50%",
        width: 280,
        height: 280,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(163,255,18,0.14) 0%, rgba(163,255,18,0.04) 35%, transparent 70%)",
      }}
    />
  );
}
