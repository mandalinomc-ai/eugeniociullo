"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`mb-8 sm:mb-12 md:mb-16 ${align === "center" ? "text-center" : ""}`}
    >
      <span className="inline-block text-[#a3ff12] text-[10px] sm:text-xs font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4">
        {label}
      </span>
      <h2
        className={`text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] ${
          align === "center" ? "mx-auto max-w-4xl" : "max-w-3xl"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 sm:mt-4 text-zinc-400 text-base sm:text-lg md:text-xl max-w-2xl ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
