"use client";

import { motion } from "framer-motion";
import MediaImage from "@/components/ui/MediaImage";
import { ONGOING_MANAGEMENT } from "@/lib/constants";

const caseStudy = ONGOING_MANAGEMENT[0];

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

export default function GestioneInEssere() {
  return (
    <div id="gestione" className="mt-16 sm:mt-24 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8 sm:mb-10"
      >
        <span className="inline-block text-emerald-400/90 text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase mb-3">
          Case study hospitality
        </span>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
          Ecosistema Antum · AMA · The Lobby
        </h3>
        <p className="text-zinc-500 mt-3 text-sm sm:text-base max-w-3xl mx-auto">
          Un accordo cross-brand, un format con influencer e reel che hanno portato reach mai visti
          sull&apos;ecosistema — e un trend nuovo a Benevento.
        </p>
      </motion.div>

      <motion.article
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="card-featured rounded-2xl sm:rounded-3xl overflow-hidden bg-black"
      >
        <div className="p-5 sm:p-8 border-b border-white/5">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-3 py-1 text-[10px] font-bold tracking-widest uppercase bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 rounded-full">
              {caseStudy.badge}
            </span>
            <InstagramBadge />
            <span className="text-xs text-zinc-500">{caseStudy.period}</span>
          </div>
          <h4 className="text-xl sm:text-2xl font-black tracking-tight">{caseStudy.name}</h4>
          <p className="text-sm text-zinc-500 mt-1">{caseStudy.subtitle}</p>
          <p className="text-xs text-zinc-600 mt-2">
            {caseStudy.handles.join(" · ")} · The Lobby Lounge
          </p>
          <p className="text-xs text-zinc-600 mt-1">{caseStudy.scope}</p>

          <div className="flex flex-wrap gap-3 mt-6">
            {caseStudy.highlights.map((h) => (
              <div
                key={h.label}
                className="px-3 py-2 rounded-xl border border-amber-500/20 bg-amber-500/5"
              >
                <p className="text-sm sm:text-base font-black text-amber-300">{h.value}</p>
                <p className="text-[9px] uppercase tracking-widest text-zinc-600">{h.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/5">
          <div className="p-5 sm:p-8 space-y-5">
            <div className="rounded-2xl border border-pink-500/20 bg-pink-500/5 p-5 sm:p-6">
              <p className="text-[10px] uppercase tracking-[0.25em] text-pink-300/90 mb-2">
                {caseStudy.influencer.title}
              </p>
              <p className="text-lg font-black text-white mb-2">{caseStudy.influencer.handle}</p>
              <p className="text-sm text-zinc-400 leading-relaxed">{caseStudy.influencer.description}</p>
            </div>

            <p className="text-sm text-zinc-400 leading-relaxed">{caseStudy.story}</p>
            <p className="text-sm text-zinc-400 leading-relaxed">{caseStudy.legacy}</p>

            <div className="rounded-xl border border-white/10 bg-zinc-950/60 p-4">
              <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-2">Nota</p>
              <p className="text-xs text-zinc-500 leading-relaxed">{caseStudy.exitNote}</p>
            </div>
          </div>

          <div className="p-5 sm:p-8">
            <p className="text-[10px] uppercase tracking-[0.25em] text-emerald-400/90 mb-4">
              Risultati in vetrina
            </p>
            <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-6">
              {caseStudy.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className={`rounded-xl p-3 border ${
                    "highlight" in metric && metric.highlight
                      ? "border-amber-500/30 bg-amber-500/5"
                      : "border-emerald-500/15 bg-emerald-500/5"
                  }`}
                >
                  <p
                    className={`text-base sm:text-lg font-black tracking-tight ${
                      "highlight" in metric && metric.highlight ? "text-amber-300" : "text-white"
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

            <div className="grid sm:grid-cols-2 gap-3">
              {caseStudy.screens.map((screen) => (
                <div
                  key={screen.src}
                  className="rounded-2xl overflow-hidden border border-amber-500/20 bg-black"
                >
                  <div className="relative aspect-[9/16] w-full">
                    <MediaImage
                      src={screen.src}
                      alt={screen.alt}
                      fit="contain"
                      position="center top"
                      bg="bg-black"
                      padding="p-2"
                      sizes="200px"
                    />
                  </div>
                  <p className="text-center text-[10px] uppercase tracking-widest text-zinc-500 py-3 border-t border-white/5 px-2">
                    {screen.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="px-5 sm:px-8 py-4 border-t border-white/5 bg-zinc-950/40">
          <p className="text-[11px] text-zinc-600 text-center leading-relaxed">
            Screenshot da Instagram Reels · views visibili sui contenuti · periodo di gestione del
            nostro team con ZeroAgency. Non confrontiamo numeri &quot;prima/dopo&quot;: il nuovo
            posizionamento ha elevato l&apos;intero profilo, inclusi i contenuti già pubblicati.
          </p>
        </div>
      </motion.article>
    </div>
  );
}
