"use client";

import { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const STOPS = [
  { id: "hero", label: "Home", line: "01" },
  { id: "casi-studio", label: "Risultati", line: "02" },
  { id: "chi-sono", label: "Chi Siamo", line: "03" },
  { id: "servizi", label: "Servizi", line: "04" },
  { id: "preventivo", label: "Preventivo", line: "05" },
  { id: "contatti", label: "Contatti", line: "06" },
] as const;

export default function MetroNav() {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState<string>("hero");

  const updateActive = useCallback(() => {
    const marker = window.scrollY + window.innerHeight * 0.38;
    let current: string = STOPS[0].id;

    for (const stop of STOPS) {
      const el = document.getElementById(stop.id);
      if (el && el.offsetTop <= marker) {
        current = stop.id;
      }
    }

    setActiveId(current);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, [pathname, updateActive]);

  if (pathname !== "/") return null;

  const activeIndex = STOPS.findIndex((s) => s.id === activeId);
  const progress =
    STOPS.length > 1 ? (activeIndex / (STOPS.length - 1)) * 100 : 0;

  return (
    <nav
      aria-label="Navigazione rapida tra sezioni"
      className="fixed right-3 sm:right-5 xl:right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block pointer-events-none"
    >
      <div className="relative flex flex-col items-end pointer-events-auto">
        {/* Linea verticale stile metro */}
        <div
          className="absolute right-[7px] top-2 bottom-2 w-[2px] rounded-full bg-zinc-800/90"
          aria-hidden
        />
        <motion.div
          className="absolute right-[7px] top-2 w-[2px] rounded-full bg-[#a3ff12]"
          initial={false}
          animate={{ height: `calc((100% - 1rem) * ${progress / 100})` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          aria-hidden
        />

        <ol className="relative flex flex-col gap-5 xl:gap-6 py-2">
          {STOPS.map((stop, index) => {
            const isActive = stop.id === activeId;
            const isPassed = index < activeIndex;

            return (
              <li key={stop.id} className="flex items-center justify-end gap-3 xl:gap-4">
                <a
                  href={`#${stop.id}`}
                  title={stop.label}
                  className="group flex items-center gap-3 xl:gap-4 outline-none focus-visible:ring-2 focus-visible:ring-[#a3ff12]/60 rounded-full"
                  aria-current={isActive ? "location" : undefined}
                >
                  <span
                    className={`hidden xl:block text-right transition-all duration-300 ${
                      isActive
                        ? "text-[#a3ff12] font-bold text-xs tracking-wide"
                        : "text-zinc-600 text-[10px] font-semibold uppercase tracking-widest group-hover:text-zinc-300"
                    }`}
                  >
                    <span className="block text-[9px] text-zinc-700 group-hover:text-zinc-500 mb-0.5">
                      {stop.line}
                    </span>
                    {stop.label}
                  </span>

                  <span className="relative flex items-center justify-center w-4 h-4 shrink-0">
                    {isActive && (
                      <motion.span
                        layoutId="metro-pulse"
                        className="absolute inset-0 rounded-full bg-[#a3ff12]/30 animate-pulse"
                        transition={{ type: "spring", stiffness: 400, damping: 28 }}
                      />
                    )}
                    <span
                      className={`relative z-10 block rounded-full border-2 transition-all duration-300 ${
                        isActive
                          ? "w-3.5 h-3.5 bg-[#a3ff12] border-[#a3ff12] shadow-[0_0_14px_rgba(163,255,18,0.65)]"
                          : isPassed
                            ? "w-2.5 h-2.5 bg-[#a3ff12]/70 border-[#a3ff12]/70 group-hover:scale-125"
                            : "w-2.5 h-2.5 bg-black border-[#a3ff12]/45 group-hover:border-[#a3ff12] group-hover:scale-125"
                      }`}
                    />
                  </span>
                </a>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
