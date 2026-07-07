"use client";

import { useEffect, useState, useCallback, useRef } from "react";
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
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

// Glifo grafico della linea metro (nessuna lettera/numero): binario verticale con fermate
function MetroLineGlyph({ activeIndex }: { activeIndex: number }) {
  const dots = 4;
  const activeDot = Math.round((activeIndex / (STOPS.length - 1)) * (dots - 1));
  return (
    <svg width="14" height="26" viewBox="0 0 14 26" fill="none" aria-hidden>
      <line x1="7" y1="3" x2="7" y2="23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.35" />
      {Array.from({ length: dots }).map((_, i) => {
        const y = 3 + (i * 20) / (dots - 1);
        const isActive = i === activeDot;
        return (
          <circle
            key={i}
            cx="7"
            cy={y}
            r={isActive ? 3 : 2}
            fill={isActive ? "#a3ff12" : "currentColor"}
            opacity={isActive ? 1 : 0.5}
          />
        );
      })}
    </svg>
  );
}

const AUTO_PARK_DELAY_MS = 350;

export default function MetroNav() {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState<string>("hero");
  const [parked, setParked] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const leaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  const parkNav = useCallback(() => {
    setParked(true);
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
  }, []);

  const unparkNav = useCallback(() => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }
    setParked(false);
    try {
      localStorage.setItem(STORAGE_KEY, "0");
    } catch {
      /* ignore */
    }
  }, []);

  const scheduleAutoPark = useCallback(() => {
    if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
    leaveTimerRef.current = setTimeout(() => {
      parkNav();
      leaveTimerRef.current = null;
    }, AUTO_PARK_DELAY_MS);
  }, [parkNav]);

  const cancelAutoPark = useCallback(() => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }
  }, []);

  useEffect(() => {
    return () => {
      if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
    };
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

  if (pathname !== "/" || !hydrated) return null;

  const activeIndex = STOPS.findIndex((s) => s.id === activeId);
  const progress =
    STOPS.length > 1 ? (activeIndex / (STOPS.length - 1)) * 100 : 0;

  return (
    <div
      className="fixed left-0 sm:left-2 lg:left-4 top-1/2 -translate-y-1/2 z-30 pointer-events-none"
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
            transition={{ duration: 0.22 }}
            onClick={unparkNav}
            aria-label="Apri mappa sezioni"
            title="Apri mappa sezioni"
            className="pointer-events-auto group/tab flex flex-col items-center gap-1.5 rounded-r-2xl border border-l-0 border-white/10 bg-black/80 supports-[backdrop-filter]:bg-black/40 backdrop-blur-lg backdrop-saturate-150 px-1.5 py-3 text-zinc-400 shadow-[3px_0_20px_rgba(0,0,0,0.4)] ring-1 ring-inset ring-white/5 hover:supports-[backdrop-filter]:bg-black/60 hover:text-[#a3ff12] hover:border-[#a3ff12]/25 transition-colors"
          >
            <MetroLineGlyph activeIndex={activeIndex} />
            <span className="text-[#a3ff12]/70 group-hover/tab:text-[#a3ff12] transition-colors">
              <ChevronRightIcon />
            </span>
          </motion.button>
        ) : (
          <motion.div
            key="metro-panel"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.22 }}
            className="flex items-stretch pointer-events-auto max-w-[calc(100vw-1.5rem)] group/metro"
            onMouseEnter={cancelAutoPark}
            onMouseLeave={scheduleAutoPark}
            onFocus={cancelAutoPark}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                scheduleAutoPark();
              }
            }}
          >
            <nav
              aria-label="Navigazione rapida tra sezioni"
              className="relative overflow-hidden rounded-r-none rounded-l-none sm:rounded-l-2xl border border-r-0 border-white/10 bg-black/80 supports-[backdrop-filter]:bg-black/40 backdrop-blur-lg backdrop-saturate-150 shadow-[3px_0_24px_rgba(0,0,0,0.4)] ring-1 ring-inset ring-white/5 pl-2 pr-2.5 py-2.5 sm:py-3 transition-colors duration-300 group-hover/metro:bg-black/60 group-focus-within/metro:bg-black/60"
            >
              {/* Strato gradiente: rinforza il contrasto sul lato del testo, sfuma verso il bordo */}
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent"
                aria-hidden
              />

              <p className="relative text-[8px] uppercase tracking-[0.3em] text-zinc-400 mb-2 pl-6 sm:pl-7 font-semibold [text-shadow:0_1px_2px_rgba(0,0,0,0.7)] group-hover/metro:text-[#a3ff12]/70 transition-colors">
                Linea EC
              </p>

              <div className="relative">
                <div
                  className="absolute left-[11px] sm:left-[12px] top-3 bottom-3 w-px rounded-full bg-white/[0.1]"
                  aria-hidden
                />
                <motion.div
                  className="absolute left-[11px] sm:left-[12px] top-3 w-px rounded-full bg-[#a3ff12]/50"
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
                          onClick={parkNav}
                          className="flex items-center gap-2.5 py-1 pr-1.5 rounded-lg outline-none focus-visible:ring-1 focus-visible:ring-[#a3ff12]/40 hover:bg-white/[0.05] transition-colors"
                          aria-current={isActive ? "location" : undefined}
                        >
                          <span className="relative flex items-center justify-center w-6 sm:w-7 h-7 shrink-0">
                            {isActive && (
                              <motion.span
                                className="absolute inset-1 rounded-full border border-[#a3ff12]/30"
                                animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
                                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                                aria-hidden
                              />
                            )}
                            <span
                              className={`relative z-10 rounded-full border transition-all duration-300 ${
                                isActive
                                  ? "w-3 h-3 sm:w-3.5 sm:h-3.5 bg-[#a3ff12] border-[#a3ff12] shadow-[0_0_8px_rgba(163,255,18,0.6)]"
                                  : isPassed
                                    ? "w-2 h-2 bg-[#a3ff12]/40 border-[#a3ff12]/40"
                                    : "w-2 h-2 bg-black/60 border-[#a3ff12]/25"
                              }`}
                            />
                          </span>

                          <span className="min-w-0 flex flex-col leading-tight">
                            <span
                              className={`text-[8px] font-mono tracking-widest ${
                                isActive ? "text-[#a3ff12]/70" : "text-zinc-600"
                              }`}
                            >
                              {stop.code}
                            </span>
                            <span
                              className={`text-[10px] sm:text-[11px] font-semibold uppercase tracking-wide truncate max-w-[5rem] sm:max-w-none [text-shadow:0_1px_2px_rgba(0,0,0,0.7)] ${
                                isActive
                                  ? "text-[#a3ff12]"
                                  : isPassed
                                    ? "text-zinc-300"
                                    : "text-zinc-400"
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

            {/* Linguetta laterale: freccia ← per parcheggiare verso sinistra */}
            <button
              type="button"
              onClick={parkNav}
              aria-label="Parcheggia mappa sezioni"
              title="Parcheggia mappa sezioni"
              className="flex items-center justify-center shrink-0 w-5 sm:w-6 rounded-r-2xl border border-l-0 border-white/10 bg-black/80 supports-[backdrop-filter]:bg-black/40 backdrop-blur-lg backdrop-saturate-150 text-zinc-400 shadow-[3px_0_20px_rgba(0,0,0,0.35)] ring-1 ring-inset ring-white/5 hover:supports-[backdrop-filter]:bg-black/60 hover:text-[#a3ff12] hover:border-[#a3ff12]/25 transition-colors"
            >
              <ChevronLeftIcon />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
