"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MediaImage from "@/components/ui/MediaImage";
import { ONGOING_MANAGEMENT } from "@/lib/constants";

type ManagementId = (typeof ONGOING_MANAGEMENT)[number]["id"];

function InstagramBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-[#f58529]/20 via-[#dd2a7b]/20 to-[#8134af]/20 border border-[#dd2a7b]/30 text-[10px] font-bold tracking-wide text-pink-200">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="2" y="2" width="20" height="20" rx="6" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
      </svg>
      Solo Instagram
    </span>
  );
}

function MetricGrid({
  metrics,
  tone,
}: {
  metrics: readonly { label: string; value: string; highlight?: boolean }[];
  tone: "before" | "after";
}) {
  return (
    <div className="grid grid-cols-2 gap-2 sm:gap-3">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className={`rounded-xl p-3 border ${
            metric.highlight
              ? "border-amber-500/30 bg-amber-500/5"
              : tone === "before"
                ? "border-white/5 bg-white/[0.02]"
                : "border-emerald-500/15 bg-emerald-500/5"
          }`}
        >
          <p
            className={`text-base sm:text-lg font-black tracking-tight ${
              metric.highlight ? "text-amber-300" : "text-white"
            }`}
          >
            {metric.value}
          </p>
          <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-zinc-600 mt-1">
            {metric.label}
          </p>
        </div>
      ))}
    </div>
  );
}

function ScreenStrip({
  screens,
  tone,
}: {
  screens: readonly { src: string; alt: string; label: string }[];
  tone: "before" | "after";
}) {
  return (
    <div className={`grid gap-3 ${screens.length > 2 ? "sm:grid-cols-2 lg:grid-cols-2" : screens.length > 1 ? "sm:grid-cols-2" : "grid-cols-1"}`}>
      {screens.map((screen) => (
        <div
          key={`${screen.src}-${screen.label}`}
          className={`rounded-2xl overflow-hidden border ${
            tone === "before" ? "border-white/10 bg-zinc-950" : "border-amber-500/20 bg-black"
          }`}
        >
          <div className="relative aspect-[9/16] w-full max-w-[200px] mx-auto sm:max-w-none">
            <MediaImage
              src={screen.src}
              alt={screen.alt}
              fit="contain"
              position="center top"
              bg="bg-black"
              padding="p-2"
              sizes="220px"
            />
          </div>
          <p className="text-center text-[10px] uppercase tracking-widest text-zinc-500 py-3 border-t border-white/5 px-2">
            {screen.label}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function GestioneInEssere() {
  const [active, setActive] = useState<ManagementId>(ONGOING_MANAGEMENT[0].id);
  const item = ONGOING_MANAGEMENT.find((entry) => entry.id === active) ?? ONGOING_MANAGEMENT[0];

  return (
    <div id="gestione" className="mt-16 sm:mt-24 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8 sm:mb-10"
      >
        <span className="inline-block text-emerald-400/90 text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase mb-3">
          Gestione in essere
        </span>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
          Prima vs dopo — profili che gestiamo oggi con il team
        </h3>
        <p className="text-zinc-500 mt-3 text-sm sm:text-base max-w-3xl mx-auto">
          Antum Hotel, AMA Experience e The Lobby Lounge sono un{" "}
          <strong className="text-zinc-300 font-medium">ecosistema sinergico</strong> che gestiamo
          con il team ZeroAgency — stessi format, picchi fino a 72.800 views, screenshot reali dalla
          vetrina Reels.
        </p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {ONGOING_MANAGEMENT.map((entry) => (
          <button
            key={entry.id}
            type="button"
            onClick={() => setActive(entry.id)}
            className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold border transition-all ${
              active === entry.id
                ? "border-emerald-400/50 bg-emerald-500/10 text-white"
                : "border-white/10 text-zinc-500 hover:border-white/25"
            }`}
          >
            {entry.name}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.article
          key={item.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35 }}
          className="card-featured rounded-2xl sm:rounded-3xl overflow-hidden bg-black"
        >
          <div className="p-5 sm:p-8 border-b border-white/5">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="px-3 py-1 text-[10px] font-bold tracking-widest uppercase bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 rounded-full">
                {item.badge}
              </span>
              <InstagramBadge />
              <span className="text-xs text-zinc-600">{item.handle}</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-black tracking-tight">{item.name}</h4>
            <p className="text-sm text-zinc-500 mt-1">{item.subtitle}</p>
            {"synergy" in item && item.synergy && (
              <p className="text-xs text-emerald-400/80 mt-2 leading-relaxed">{item.synergy}</p>
            )}
            <p className="text-xs text-zinc-600 mt-2">{item.scope}</p>

            <div className="flex flex-wrap gap-3 mt-6">
              {item.deltas.map((delta) => (
                <div
                  key={delta.label}
                  className="px-3 py-2 rounded-xl border border-amber-500/20 bg-amber-500/5"
                >
                  <p className="text-sm sm:text-base font-black text-amber-300">{delta.value}</p>
                  <p className="text-[9px] uppercase tracking-widest text-zinc-600">{delta.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/5">
            <div className="p-5 sm:p-8 bg-zinc-950/60">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-zinc-600" />
                <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-500">{item.before.title}</p>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed mb-5">{item.before.description}</p>
              <MetricGrid metrics={item.before.metrics} tone="before" />
              <div className="mt-6">
                <ScreenStrip screens={item.before.screens} tone="before" />
              </div>
            </div>

            <div className="p-5 sm:p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <p className="text-[10px] uppercase tracking-[0.25em] text-emerald-400/90">{item.after.title}</p>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed mb-5">{item.after.description}</p>
              <MetricGrid metrics={item.after.metrics} tone="after" />
              <div className="mt-6">
                <ScreenStrip screens={item.after.screens} tone="after" />
              </div>
            </div>
          </div>

          <div className="px-5 sm:px-8 py-4 border-t border-white/5 bg-zinc-950/40">
            <p className="text-[11px] text-zinc-600 text-center leading-relaxed">
              Dati da screenshot Instagram Reels · views visibili sui contenuti · confronto periodo pre-gestione vs
              contenuti prodotti sotto la nostra direzione creativa e strategica, con il team ZeroAgency.
            </p>
          </div>
        </motion.article>
      </AnimatePresence>
    </div>
  );
}
