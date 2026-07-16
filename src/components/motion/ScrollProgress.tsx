"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Barra progresso scroll in alto — micro-detail da siti award */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.2 });

  return (
    <motion.div
      aria-hidden
      className="fixed left-0 right-0 top-0 z-[95] h-[2px] origin-left bg-[#a3ff12]"
      style={{ scaleX }}
    />
  );
}
