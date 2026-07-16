"use client";

import { cn } from "@/lib/utils";

const DEFAULT_ITEMS = [
  "STRATEGIA",
  "CONTENT",
  "META ADS",
  "SITI WEB",
  "SOCIAL",
  "EVENTI",
  "ZEROAGENCY",
  "CONVERSIONI",
];

/** Marquee infinito stile Webflow hero strip */
export default function MotionMarquee({
  items = DEFAULT_ITEMS,
  className,
  reverse = false,
}: {
  items?: string[];
  className?: string;
  reverse?: boolean;
}) {
  const row = [...items, ...items];

  return (
    <div
      className={cn(
        "relative overflow-hidden border-y border-white/5 bg-black/60 py-3 sm:py-4",
        className
      )}
    >
      <div
        className={cn(
          "flex w-max gap-8 sm:gap-12 whitespace-nowrap",
          reverse ? "marquee-track-reverse" : "marquee-track"
        )}
      >
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="inline-flex items-center gap-8 sm:gap-12 text-xs sm:text-sm font-black tracking-[0.2em] uppercase text-zinc-600"
          >
            {item}
            <span className="text-[#a3ff12]/70">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
