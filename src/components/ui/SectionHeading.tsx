"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type HeadingTone = "neutral" | "accent" | "cool" | "warm" | "results";

const LABEL_TONE: Record<HeadingTone, string> = {
  neutral: "text-zinc-500",
  accent: "text-[#a3ff12]",
  cool: "text-cyan-400/90",
  warm: "text-amber-400/90",
  results: "text-amber-300/90",
};

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  tone?: HeadingTone;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "left",
  tone = "neutral",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "mb-8 sm:mb-10 md:mb-12",
        align === "center" && "text-center"
      )}
    >
      <span
        className={cn(
          "inline-block text-[10px] sm:text-xs font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4",
          LABEL_TONE[tone]
        )}
      >
        {label}
      </span>
      <h2
        className={cn(
          "text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-white",
          align === "center" ? "mx-auto max-w-4xl" : "max-w-3xl"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-3 sm:mt-4 text-zinc-400 text-base sm:text-lg md:text-xl max-w-2xl",
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
