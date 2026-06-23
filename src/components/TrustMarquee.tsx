"use client";

import { TRUST_STATS } from "@/lib/constants";

export default function TrustMarquee() {
  const items = [...TRUST_STATS, ...TRUST_STATS];

  return (
    <section className="relative py-6 border-y border-white/5 bg-zinc-950/80 overflow-hidden">
      <div className="absolute inset-0 shimmer pointer-events-none opacity-50" />
      <div className="flex whitespace-nowrap marquee-track">
        {items.map((stat, i) => (
          <div
            key={`${stat.label}-${i}`}
            className="flex items-center gap-4 px-8 sm:px-12 shrink-0"
          >
            <span className="text-xl sm:text-2xl font-black text-[#a3ff12] tracking-tight">
              {stat.value}
            </span>
            <span className="text-xs sm:text-sm text-zinc-500 uppercase tracking-widest">
              {stat.label}
            </span>
            <span className="text-zinc-800 text-lg">·</span>
          </div>
        ))}
      </div>
    </section>
  );
}
