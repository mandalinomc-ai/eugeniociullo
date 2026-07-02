"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MediaImage from "@/components/ui/MediaImage";
import { LAUNCH_REPORTS } from "@/lib/constants";

type ReportId = (typeof LAUNCH_REPORTS)[number]["id"];

function PlatformBadge({ platforms }: { platforms?: string }) {
  const isMulti = platforms?.includes("+");
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide ${
        isMulti
          ? "bg-cyan-500/10 border border-cyan-500/30 text-cyan-200"
          : "bg-gradient-to-r from-[#f58529]/20 via-[#dd2a7b]/20 to-[#8134af]/20 border border-[#dd2a7b]/30 text-pink-200"
      }`}
    >
      {isMulti ? "IG + TikTok · organico" : "Solo Instagram"}
    </span>
  );
}

export default function LaunchReports() {
  const [active, setActive] = useState<ReportId>("parisio");
  const report = LAUNCH_REPORTS.find((r) => r.id === active) ?? LAUNCH_REPORTS[0];
  const isParisio = report.id === "parisio";

  return (
    <div className="mt-16 sm:mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8 sm:mb-10 px-1"
      >
        <span className="inline-block text-amber-400/80 text-[10px] sm:text-xs font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase mb-3">
          Report reali · prove dai lanci
        </span>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-balance-safe">
          Prove dai lanci da zero
        </h3>
        <p className="text-zinc-500 mt-3 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Screenshot da dashboard professionali{" "}
          <strong className="text-zinc-300 font-medium">Instagram e TikTok</strong> — metriche
          reali, conversione da pubblico freddo, zero sponsor.
        </p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {LAUNCH_REPORTS.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActive(item.id)}
            className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border transition-all ${
              active === item.id
                ? "border-amber-400/50 bg-amber-500/10 text-white"
                : "border-white/10 text-zinc-500 hover:border-white/25"
            }`}
          >
            {item.title.split(" ")[0]}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={report.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35 }}
          className="card-surface rounded-2xl sm:rounded-3xl overflow-hidden"
        >
          <div className="p-4 sm:p-8 border-b border-white/5 bg-zinc-950/50">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <PlatformBadge platforms={isParisio ? "TikTok + Instagram" : "Instagram"} />
            </div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-600 mb-1">{report.period}</p>
            <h4 className="text-lg sm:text-xl font-black tracking-tight">{report.title}</h4>
            <p className="text-sm text-zinc-500 mt-1">{report.subtitle}</p>

            {"organicNote" in report && report.organicNote && (
              <p className="text-[13px] sm:text-sm text-zinc-400 mt-3 leading-relaxed max-w-3xl">
                {report.organicNote}
              </p>
            )}

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 mt-4 sm:mt-6">
              {report.stats.map((stat) => (
                <div
                  key={stat.label}
                  className={`rounded-lg sm:rounded-xl p-2 sm:p-3 border min-w-0 ${
                    "highlight" in stat && stat.highlight
                      ? "border-amber-500/30 bg-amber-500/5"
                      : "border-white/5 bg-white/[0.02]"
                  }`}
                >
                  <p
                    className={`text-sm sm:text-xl font-black tracking-tight truncate sm:whitespace-normal ${
                      "highlight" in stat && stat.highlight ? "text-amber-300" : "text-white"
                    }`}
                  >
                    {stat.value}
                  </p>
                  <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-zinc-600 mt-1 leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {"collaboration" in report && report.collaboration && (
            <div className="p-4 sm:p-8 border-b border-white/5 bg-amber-500/[0.03]">
              <p className="text-[10px] uppercase tracking-[0.25em] text-amber-300/90 mb-2">
                Produzione contenuti
              </p>
              <h5 className="text-base sm:text-lg font-black tracking-tight mb-2">
                {report.collaboration.title}
              </h5>
              <p className="text-[13px] sm:text-sm text-zinc-400 leading-relaxed max-w-3xl mb-4">
                {report.collaboration.description}
              </p>
              <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-amber-500/20 bg-black max-w-[280px] sm:max-w-xs mx-auto">
                <video
                  src={report.collaboration.video}
                  muted
                  playsInline
                  loop
                  autoPlay
                  controls
                  preload="metadata"
                  className="w-full aspect-[9/16] object-cover bg-black"
                />
                <p className="text-center text-[9px] sm:text-[10px] uppercase tracking-widest text-zinc-500 py-2 sm:py-3 border-t border-white/5 px-2">
                  {report.collaboration.videoLabel}
                </p>
              </div>
            </div>
          )}

          <div className="p-4 sm:p-8 bg-black/40">
            <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-600 mb-4 text-center sm:text-left">
              {isParisio ? "Screenshot reali · IG & TikTok" : "Screenshot reali · Instagram"}
            </p>
            <div
              className={
                isParisio
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto"
                  : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-6xl mx-auto"
              }
            >
              {report.frames.map((frame, i) => (
                <motion.div
                  key={frame.src}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`gradient-border rounded-xl sm:rounded-2xl overflow-hidden w-full ${
                    isParisio ? "max-w-[340px] mx-auto" : "max-w-[300px] mx-auto"
                  }`}
                >
                  <div className="relative w-full aspect-[9/16]">
                    <MediaImage
                      src={frame.src}
                      alt={frame.alt}
                      fit={frame.fit ?? "contain"}
                      position={frame.position ?? "center top"}
                      bg={frame.bg ?? "bg-black"}
                      padding={isParisio ? "p-0.5 sm:p-1" : "padding" in frame ? frame.padding : "p-2"}
                      sizes={isParisio ? "(max-width: 640px) 88vw, 340px" : "(max-width: 640px) 88vw, 300px"}
                    />
                  </div>
                  {"label" in frame && frame.label && (
                    <p className="text-center text-[10px] sm:text-[11px] uppercase tracking-wide sm:tracking-widest text-zinc-500 py-2.5 sm:py-3 border-t border-white/5 px-2 leading-tight bg-zinc-950/80">
                      {frame.label}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
