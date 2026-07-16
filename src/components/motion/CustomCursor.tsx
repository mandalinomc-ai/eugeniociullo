"use client";

import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

/** Cursore custom stile Webflow / agency — dot + anello che cresce sugli elementi */
export default function CustomCursor() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 35, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 35, mass: 0.4 });
  const rx = useSpring(x, { stiffness: 180, damping: 22, mass: 0.6 });
  const ry = useSpring(y, { stiffness: 180, damping: 22, mass: 0.6 });

  useEffect(() => {
    if (reduce) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    setVisible(true);
    document.documentElement.classList.add("has-custom-cursor");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      const hit = t.closest("a, button, [data-cursor], input, textarea, label");
      setHovering(Boolean(hit));
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [reduce, x, y]);

  if (!visible) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed z-[100] hidden md:block mix-blend-difference"
        style={{ left: sx, top: sy, x: "-50%", y: "-50%" }}
      >
        <motion.div
          className="rounded-full bg-white"
          animate={{
            width: hovering ? 10 : 6,
            height: hovering ? 10 : 6,
            opacity: 1,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 28 }}
        />
      </motion.div>

      <motion.div
        aria-hidden
        className="pointer-events-none fixed z-[99] hidden md:block mix-blend-difference"
        style={{ left: rx, top: ry, x: "-50%", y: "-50%" }}
      >
        <motion.div
          className="rounded-full border border-white"
          animate={{
            width: hovering ? 56 : 32,
            height: hovering ? 56 : 32,
            opacity: hovering ? 0.95 : 0.55,
          }}
          transition={{ type: "spring", stiffness: 260, damping: 24 }}
        />
      </motion.div>
    </>
  );
}
