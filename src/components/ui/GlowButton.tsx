"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlowButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  external?: boolean;
}

export default function GlowButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  external = false,
}: GlowButtonProps) {
  const base =
    "relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 overflow-hidden group";

  const variants = {
    primary:
      "bg-[#a3ff12] text-black hover:shadow-[0_0_30px_rgba(163,255,18,0.5)] hover:scale-[1.02]",
    secondary:
      "bg-white/5 text-white border border-white/10 hover:border-[#a3ff12]/50 hover:shadow-[0_0_25px_rgba(163,255,18,0.2)]",
    outline:
      "bg-transparent text-[#a3ff12] border border-[#a3ff12]/40 hover:bg-[#a3ff12]/10 hover:shadow-[0_0_25px_rgba(163,255,18,0.25)]",
  };

  const content = (
    <>
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      <span className="relative z-10">{children}</span>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={`${base} ${variants[variant]} ${className}`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  );
}
