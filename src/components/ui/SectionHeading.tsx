"use client";

import { motion } from "framer-motion";
import { TextReveal } from "@/components/motion/Reveal";
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
    <div
      className={cn(
        "mb-8 sm:mb-10 md:mb-12",
        align === "center" && "text-center"
      )}
    >
      <motion.span
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "inline-block text-[10px] sm:text-xs font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4",
          LABEL_TONE[tone]
        )}
      >
        {label}
      </motion.span>

      <TextReveal
        text={title}
        as="h2"
        className={cn(
          "text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-white",
          align === "center" ? "mx-auto max-w-4xl justify-center" : "max-w-3xl"
        )}
        delay={0.08}
      />

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "mt-3 sm:mt-4 text-zinc-400 text-base sm:text-lg md:text-xl max-w-2xl",
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
