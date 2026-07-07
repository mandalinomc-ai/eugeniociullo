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

function ParkIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className={className}
      aria-hidden
    >
      <path d="M6 4v16M6 4h10l-2 4 2 4H6" />
    </svg>
  );
}

function MetroIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className={className}
      aria-hidden
    >
      <path d="M4 15h16M4 9h16M8 3v18M16 3v18" />
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

  return (
    <div
      className="fixed left-2 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-30"
      style={{ paddingLeft: "var(--safe-left)" }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {parked ? (
          <motion.button
            key="parked-tab"
            type="button"
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.25 }}
            onClick={toggleParked}
            aria-label="Mostra navigazione metro"
            title="Mostra mappa sezioni"
            className="flex flex-col items-center gap-1.5 rounded-xl border border-white/[0.06] bg-black/75 backdrop-blur-sm px-2 py-2.5 sm:px-2.5 sm:py-3 text-[#a3ff12] shadow-[0_8px_32px_rgba(0,0,0,0.45)] hover:bg-black/85 hover:border-[#a3ff12]/25 transition-colors"
          >
            <MetroIcon />
            <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-zinc-500">
              EC
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#a3ff12] shadow-[0_0_8px_rgba(163,255,18,0.6)]" />
            <span className="text-[8px] font-mono text-[#a3ff12]/80">{activeStop.code}</span>
          </motion.button>
        ) : (
          <motion.nav
            key="metro-panel"
            aria-label="Navigazione rapida tra sezioni"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.25 }}
            className="max-w-[calc(100vw-1rem)]"
          >
            <div className="group/metro rounded-xl border border-white/[0.05] bg-black/70 backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.45)] px-2 py-2.5 sm:px-3 sm:py-3.5 opacity-[0.82] hover:opacity-100 focus-within:opacity-100 transition-opacity duration-300">
              <div className="flex items-center justify-between gap-2 mb-2 pl-1 pr-0.5">
                <p className="text-[8px] uppercase tracking-[0.28em] text-zinc-600 font-semibold pl-6 sm:pl-7">
                  Linea EC
                </p>
                <button
                  type="button"
                  onClick={toggleParked}
                  aria-label="Parcheggia navigazione metro"
                  title="Parcheggia mappa sezioni"
                  className="flex items-center justify-center w-6 h-6 rounded-md border border-white/[0.06] bg-white/[0.03] text-zinc-500 hover:text-[#a3ff12] hover:border-[#a3ff12]/30 hover:bg-[#a3ff12]/5 transition-colors shrink-0"
                >
                  <ParkIcon />
                </button>
              </div>

              <div className="relative pl-1">
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
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
