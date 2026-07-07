"use client";

import { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "ec-metro-nav-parked";

const STOPS = [
  { id: "hero", code: "01", label: "Home" },
  { id: "casi-studio", code: "02", label: "Risultati" },
  { id: "chi-sono", code: "03", label: "Chi Siamo" },
  { id: "servizi", code: "04", label: "Servizi" },
  { id: "preventivo", code: "05", label: "Preventivo" },
  { id: "contatti", code: "06", label: "Contatti" },
] as const;

function ChevronLeftIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

export default function MetroNav() {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState<string>("hero");
  const [parked, setParked] = useState(false);
  const [hydrated, setHydrated] = useState(false);

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
    try {
      setParked(localStorage.getItem(STORAGE_KEY) === "1");
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  const toggleParked = useCallback(() => {
    setParked((prev) => {
      const next = !prev;
      try {
        localStorage.setItem(STORAGE_KEY, next ? "1" : "0");
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  useEffect(() => {
    if (pathname !== "/" || parked) return;

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, [pathname, parked, updateActive]);

  if (pathname !== "/" || !hydrated) return null;

  const activeIndex = STOPS.findIndex((s) => s.id === activeId);
  const activeStop = STOPS[activeIndex] ?? STOPS[0];
  const progress =
    STOPS.length > 1 ? (activeIndex / (STOPS.length - 1)) * 100 : 0;

  const lateralTabClass =
    "flex items-center justify-center shrink-0 w-5 sm:w-6 self-stretch min-h-[3.5rem] border border-white/[0.06] bg-black/55 text-zinc-400 hover:text-[#a3ff12] hover:bg-black/70 hover:border-[#a3ff12]/25 transition-colors";

  return (
    <div
      className="fixed left-1 sm:left-3 lg:left-5 top-1/2 -translate-y-1/2 z-30 pointer-events-none"
      style={{ paddingLeft: "var(--safe-left)" }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {parked ? (
          <motion.button
            key="parked-tab"
            type="button"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.22 }}
            onClick={toggleParked}
            aria-label="Mostra navigazione metro"
            title="Apri mappa sezioni"
            className={`pointer-events-auto rounded-r-lg rounded-l-sm border-l-0 ${lateralTabClass} flex-col gap-1 py-3 shadow-[4px_0_16px_rgba(0,0,0,0.25)]`}
          >
            <ChevronRightIcon />
            <span className="text-[7px] font-mono text-[#a3ff12]/75">{activeStop.code}</span>
          </motion.button>
        ) : (
          <motion.div
            key="metro-panel"
            initial={{ opacity: 0, x: -14 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -14 }}
            transition={{ duration: 0.22 }}
            className="flex items-stretch pointer-events-auto max-w-[calc(100vw-1.5rem)] group/metro"
          >
            <nav
              aria-label="Navigazione rapida tra sezioni"
              className="rounded-l-xl rounded-r-none border border-r-0 border-white/[0.04] bg-black/35 backdrop-blur-[2px] shadow-[0_4px_24px_rgba(0,0,0,0.2)] px-2 py-2 sm:px-2.5 sm:py-2.5 transition-[background-color,box-shadow] duration-300 group-hover/metro:bg-black/55 group-hover/metro:backdrop-blur-sm group-focus-within/metro:bg-black/55"
            >
              <p className="text-[8px] uppercase tracking-[0.28em] text-zinc-500 mb-1.5 pl-6 sm:pl-7 font-semibold group-hover/metro:text-zinc-400 transition-colors">
                Linea EC
              </p>

              <div className="relative pl-1">
                <div
                  className="absolute left-[11px] sm:left-[12px] top-3 bottom-3 w-px rounded-full bg-white/[0.06]"
                  aria-hidden
                />
                <motion.div
                  className="absolute left-[11px] sm:left-[12px] top-3 w-px rounded-full bg-[#a3ff12]/35"
                  initial={false}
                  animate={{ height: `calc((100% - 1.5rem) * ${progress / 100})` }}
                  transition={{ type: "spring", stiffness: 280, damping: 32 }}
                  aria-hidden
                />

                <ol className="relative flex flex-col gap-0.5">
                  {STOPS.map((stop, index) => {
                    const isActive = stop.id === activeId;
                    const isPassed = index < activeIndex;

                    return (
                      <li key={stop.id}>
                        <a
                          href={`#${stop.id}`}
                          className="flex items-center gap-2 py-1 pr-0.5 rounded-lg outline-none focus-visible:ring-1 focus-visible:ring-[#a3ff12]/35 hover:bg-white/[0.04] transition-colors"
                          aria-current={isActive ? "location" : undefined}
                        >
                          <span className="relative flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 shrink-0">
                            {isActive && (
                              <span className="absolute inset-0 rounded-full bg-[#a3ff12]/10" aria-hidden />
                            )}
                            <span
                              className={`relative z-10 rounded-full border transition-all duration-300 ${
                                isActive
                                  ? "w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#a3ff12] border-[#a3ff12] shadow-[0_0_6px_rgba(163,255,18,0.4)]"
                                  : isPassed
                                    ? "w-2 h-2 bg-[#a3ff12]/30 border-[#a3ff12]/35"
                                    : "w-2 h-2 bg-transparent border-[#a3ff12]/18"
                              }`}
                            />
                          </span>

                          <span className="min-w-0 flex flex-col leading-tight">
                            <span
                              className={`text-[8px] font-mono tracking-widest ${
                                isActive ? "text-[#a3ff12]/65" : "text-zinc-600"
                              }`}
                            >
                              {stop.code}
                            </span>
                            <span
                              className={`text-[10px] sm:text-[11px] font-semibold uppercase tracking-wide truncate max-w-[4.75rem] sm:max-w-none ${
                                isActive
                                  ? "text-[#a3ff12]"
                                  : isPassed
                                    ? "text-zinc-500"
                                    : "text-zinc-600"
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
            </nav>

            {/* Tab laterale freccia ← = parcheggia verso sinistra */}
            <button
              type="button"
              onClick={toggleParked}
              aria-label="Parcheggia navigazione metro"
              title="Parcheggia mappa sezioni"
              className={`rounded-r-lg rounded-l-none border-l-0 ${lateralTabClass} shadow-[4px_0_16px_rgba(0,0,0,0.2)]`}
            >
              <ChevronLeftIcon />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
