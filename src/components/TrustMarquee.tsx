"use client";

import { TRUST_STATS } from "@/lib/constants";

export default function TrustMarquee() {
  const items = [...TRUST_STATS, ...TRUST_STATS];

  return (
    <section className="relative py-5 border-y border-white/[0.06] bg-zinc-950 overflow-hidden">
      <div className="flex whitespace-nowrap marquee-track">
        {items.map((stat, i) => (
          <div
            key={`${stat.label}-${i}`}
            className="flex items-center gap-4 px-8 sm:px-12 shrink-0"
          >
            <span className="text-xl sm:text-2xl font-black text-white tracking-tight">
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
