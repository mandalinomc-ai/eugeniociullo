"use client";

import { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const STOPS = [
  { id: "hero", code: "01", label: "Home" },
  { id: "casi-studio", code: "02", label: "Risultati" },
  { id: "chi-sono", code: "03", label: "Chi Siamo" },
  { id: "servizi", code: "04", label: "Servizi" },
  { id: "preventivo", code: "05", label: "Preventivo" },
  { id: "contatti", code: "06", label: "Contatti" },
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
      className="fixed left-2 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-30 max-w-[calc(100vw-1rem)]"
      style={{ paddingLeft: "var(--safe-left)" }}
    >
      <div className="group/metro rounded-xl border border-white/[0.05] bg-black/70 backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.45)] px-2 py-2.5 sm:px-3 sm:py-3.5 opacity-[0.82] hover:opacity-100 focus-within:opacity-100 transition-opacity duration-300">
        <p className="hidden sm:block text-[8px] uppercase tracking-[0.28em] text-zinc-600 mb-2 pl-7 font-semibold">
          Linea EC
        </p>

        <div className="relative pl-1">
          {/* Binario — opaco, non invasivo */}
          <div
            className="absolute left-[11px] sm:left-[12px] top-3 bottom-3 w-px rounded-full bg-white/[0.08]"
            aria-hidden
          />
          <motion.div
            className="absolute left-[11px] sm:left-[12px] top-3 w-px rounded-full bg-[#a3ff12]/45"
            initial={false}
            animate={{ height: `calc((100% - 1.5rem) * ${progress / 100})` }}
            transition={{ type: "spring", stiffness: 280, damping: 32 }}
            aria-hidden
          />

          <ol className="relative flex flex-col gap-0.5 sm:gap-1">
            {STOPS.map((stop, index) => {
              const isActive = stop.id === activeId;
              const isPassed = index < activeIndex;

              return (
                <li key={stop.id}>
                  <a
                    href={`#${stop.id}`}
                    className="flex items-center gap-2 sm:gap-2.5 py-1 sm:py-1.5 pr-1 rounded-lg outline-none focus-visible:ring-1 focus-visible:ring-[#a3ff12]/40 hover:bg-white/[0.03] transition-colors"
                    aria-current={isActive ? "location" : undefined}
                  >
                    {/* Fermata */}
                    <span className="relative flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 shrink-0">
                      {isActive && (
                        <span
                          className="absolute inset-0 rounded-full bg-[#a3ff12]/15"
                          aria-hidden
                        />
                      )}
                      {isActive && (
                        <motion.span
                          className="absolute inset-0 rounded-full border border-[#a3ff12]/30"
                          animate={{ scale: [1, 1.35, 1], opacity: [0.5, 0, 0.5] }}
                          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                          aria-hidden
                        />
                      )}
                      <span
                        className={`relative z-10 rounded-full border transition-all duration-300 ${
                          isActive
                            ? "w-3 h-3 sm:w-3.5 sm:h-3.5 bg-[#a3ff12] border-[#a3ff12] shadow-[0_0_10px_rgba(163,255,18,0.55)]"
                            : isPassed
                              ? "w-2 h-2 sm:w-2.5 sm:h-2.5 bg-[#a3ff12]/35 border-[#a3ff12]/40"
                              : "w-2 h-2 sm:w-2.5 sm:h-2.5 bg-black/80 border-[#a3ff12]/20"
                        }`}
                      />
                    </span>

                    {/* Nome fermata stile metro */}
                    <span className="min-w-0 flex flex-col leading-tight">
                      <span
                        className={`text-[8px] sm:text-[9px] font-mono tracking-widest ${
                          isActive ? "text-[#a3ff12]/70" : "text-zinc-600"
                        }`}
                      >
                        {stop.code}
                      </span>
                      <span
                        className={`text-[10px] sm:text-[11px] font-semibold uppercase tracking-wide truncate max-w-[5rem] sm:max-w-none ${
                          isActive
                            ? "text-[#a3ff12]"
                            : isPassed
                              ? "text-zinc-400"
                              : "text-zinc-500"
                        }`}
                      >
                        {stop.label}
                      </span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </nav>
  );
}
