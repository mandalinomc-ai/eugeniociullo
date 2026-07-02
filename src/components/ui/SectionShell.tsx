"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type SectionTone = "base" | "raised" | "cool" | "warm" | "results" | "cta";

const TONE_CLASS: Record<SectionTone, string> = {
  base: "bg-black border-t border-white/[0.04]",
  raised: "bg-zinc-950 border-t border-white/[0.06]",
  cool: "bg-[#05080a] border-t border-cyan-950",
  warm: "bg-[#0a0806] border-t border-amber-950/80",
  results: "bg-[#080806] border-t border-amber-500/10",
  cta: "bg-zinc-950 border-t border-[#a3ff12]/15",
};

interface SectionShellProps {
  id?: string;
  tone?: SectionTone;
  className?: string;
  children: ReactNode;
  compact?: boolean;
}

export default function SectionShell({
  id,
  tone = "base",
  className,
  children,
  compact = false,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-20 px-4 sm:px-6",
        compact ? "py-10 sm:py-14" : "py-14 sm:py-20 md:py-24",
        TONE_CLASS[tone],
        className
      )}
    >
      {children}
    </section>
  );
}
