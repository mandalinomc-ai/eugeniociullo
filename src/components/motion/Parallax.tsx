"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function Parallax({
  children,
  className,
  speed = 0.2,
}: {
  children: ReactNode;
  className?: string;
  /** Negativo = più lento (sfondo), positivo = più veloce */
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`${-speed * 100}%`, `${speed * 100}%`]);

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div style={reduce ? undefined : { y }} className="will-change-transform h-full w-full">
        {children}
      </motion.div>
    </div>
  );
}
