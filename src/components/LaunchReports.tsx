"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MediaImage from "@/components/ui/MediaImage";
import { LAUNCH_REPORTS } from "@/lib/constants";

type ReportId = (typeof LAUNCH_REPORTS)[number]["id"];

export default function LaunchReports() {
  const [active, setActive] = useState<ReportId>(LAUNCH_REPORTS[0].id);
  const report = LAUNCH_REPORTS.find((r) => r.id === active) ?? LAUNCH_REPORTS[0];

  return (
    <div className="mt-16 sm:mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8 sm:mb-10"
      >
        <span className="inline-block text-amber-400/80 text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase mb-3">
          Report reali · Instagram Insights
        </span>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
          Prove dai lanci da zero
        </h3>
        <p className="text-zinc-500 mt-3 text-sm sm:text-base max-w-2xl mx-auto">
          Screenshot da <strong className="text-zinc-300 font-medium">Instagram Professional Dashboard</strong> per
          Parisio e ITTICO — follower, visualizzazioni e interazioni al lancio.{" "}
          <span className="text-pink-300/90">Solo Instagram</span>.
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
          <div className="p-5 sm:p-8 border-b border-white/5 bg-zinc-950/50">
            <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-600 mb-1">{report.period}</p>
            <h4 className="text-lg sm:text-xl font-black tracking-tight">{report.title}</h4>
            <p className="text-sm text-zinc-500 mt-1">{report.subtitle}</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-6">
              {report.stats.map((stat) => (
                <div
                  key={stat.label}
                  className={`rounded-xl p-3 border ${
                    "highlight" in stat && stat.highlight
                      ? "border-amber-500/30 bg-amber-500/5"
                      : "border-white/5 bg-white/[0.02]"
                  }`}
                >
                  <p
                    className={`text-lg sm:text-xl font-black tracking-tight ${
                      "highlight" in stat && stat.highlight ? "text-amber-300" : "text-white"
                    }`}
                  >
                    {stat.value}
                  </p>
                  <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-zinc-600 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-5 sm:p-8 bg-black/40">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
              {report.frames.map((frame, i) => (
                <motion.div
                  key={frame.src}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="gradient-border rounded-2xl overflow-hidden"
                >
                  <div className={`relative w-full ${"aspect" in frame && frame.aspect ? frame.aspect : "aspect-[9/16]"}`}>
                    <MediaImage
                      src={frame.src}
                      alt={frame.alt}
                      fit={frame.fit ?? "contain"}
                      position={frame.position ?? "center top"}
                      bg={frame.bg ?? "bg-black"}
                      padding={"padding" in frame ? frame.padding : "p-2"}
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  </div>
                  {"label" in frame && frame.label && (
                    <p className="text-center text-[10px] uppercase tracking-widest text-zinc-600 py-3 border-t border-white/5">
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
