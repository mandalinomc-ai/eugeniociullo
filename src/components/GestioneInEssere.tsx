"use client";

import { motion } from "framer-motion";
import MediaImage from "@/components/ui/MediaImage";
import { ONGOING_MANAGEMENT } from "@/lib/constants";

const caseStudy = ONGOING_MANAGEMENT[0];

function InstagramBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 px-2 py-1 sm:px-2.5 rounded-full bg-gradient-to-r from-[#f58529]/20 via-[#dd2a7b]/20 to-[#8134af]/20 border border-[#dd2a7b]/30 text-[9px] sm:text-[10px] font-bold tracking-wide text-pink-200 whitespace-nowrap">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden className="sm:w-[14px] sm:h-[14px]">
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
    <div id="gestione" className="mt-12 sm:mt-24 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-6 sm:mb-10 px-1"
      >
        <span className="inline-block text-emerald-400/90 text-[10px] sm:text-xs font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase mb-2 sm:mb-3">
          Case study hospitality
        </span>
        <h3 className="text-xl sm:text-3xl md:text-4xl font-black tracking-tight text-balance-safe leading-tight">
          Ecosistema Antum · AMA · The Lobby
        </h3>
        <p className="text-zinc-500 mt-2 sm:mt-3 text-[13px] sm:text-base max-w-3xl mx-auto leading-relaxed text-balance-safe">
          Business Lunch con ZeroAgency, strategia influencer con @quelladeldigitale e reel fino a
          72.800 views.
        </p>
      </motion.div>

      <motion.article
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="card-featured rounded-xl sm:rounded-3xl overflow-hidden bg-black"
      >
        <div className="mobile-card-pad border-b border-white/5">
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center mb-3 sm:mb-4">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <span className="px-2.5 py-1 text-[9px] sm:text-[10px] font-bold tracking-widest uppercase bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 rounded-full">
                {caseStudy.badge}
              </span>
              <InstagramBadge />
            </div>
            <span className="text-[11px] sm:text-xs text-zinc-500">{caseStudy.period}</span>
          </div>
          <h4 className="text-lg sm:text-2xl font-black tracking-tight leading-tight">{caseStudy.name}</h4>
          <p className="text-xs sm:text-sm text-zinc-500 mt-1">{caseStudy.subtitle}</p>
          <p className="text-[11px] sm:text-xs text-zinc-600 mt-2 break-words leading-relaxed">
            {caseStudy.handles.join(" · ")} · The Lobby Lounge
          </p>
          <p className="text-[11px] sm:text-xs text-zinc-600 mt-1 leading-relaxed">{caseStudy.scope}</p>

          <div className="grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:gap-3 mt-4 sm:mt-6">
            {caseStudy.highlights.map((h) => (
              <div
                key={h.label}
                className="px-2 py-2 sm:px-3 rounded-lg sm:rounded-xl border border-amber-500/20 bg-amber-500/5 min-w-0"
              >
                <p className="text-[11px] sm:text-base font-black text-amber-300 leading-tight truncate sm:whitespace-normal">
                  {h.value}
                </p>
                <p className="text-[8px] sm:text-[9px] uppercase tracking-wider sm:tracking-widest text-zinc-600 mt-0.5 leading-tight">
                  {h.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mobile-card-pad border-b border-white/5 space-y-3 sm:space-y-4">
          <p className="text-[13px] sm:text-sm text-zinc-400 leading-relaxed">{caseStudy.story}</p>
          <p className="text-[13px] sm:text-sm text-zinc-400 leading-relaxed">{caseStudy.legacy}</p>
        </div>

        {/* Lavori grafici ZeroAgency */}
        <div className="mobile-card-pad border-b border-white/5">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
            <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 text-[9px] sm:text-[10px] font-bold tracking-widest uppercase bg-violet-500/15 border border-violet-500/30 text-violet-300 rounded-full">
              ZeroAgency
            </span>
            <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-violet-300/90">
              Lavori grafici
            </p>
          </div>
          <h5 className="text-base sm:text-xl font-black tracking-tight mb-2 leading-tight">
            {caseStudy.graphicsWork.title}
          </h5>
          <p className="text-[13px] sm:text-sm text-zinc-400 leading-relaxed">
            {caseStudy.graphicsWork.description}
          </p>
          <p className="text-[11px] sm:text-xs text-zinc-600 mt-2">{caseStudy.graphicsWork.teamNote}</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 sm:gap-3 mt-4 sm:mt-6">
            {caseStudy.graphicsWork.items.map((item) => (
              <div
                key={item.src}
                className="rounded-lg sm:rounded-xl overflow-hidden border border-violet-500/15 bg-zinc-950/60"
              >
                <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full">
                  <MediaImage
                    src={item.src}
                    alt={item.alt}
                    fit="cover"
                    position="center"
                    bg="bg-black"
                    sizes="(max-width: 640px) 45vw, 200px"
                  />
                </div>
                <p className="text-center text-[8px] sm:text-[9px] uppercase tracking-wide sm:tracking-widest text-zinc-500 py-1.5 sm:py-2 px-0.5 border-t border-white/5 leading-tight">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Strategia influencer @quelladeldigitale */}
        <div className="mobile-card-pad border-b border-white/5">
          <div className="flex flex-col gap-1.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-2 mb-3 sm:mb-4">
            <span className="self-start px-2 py-0.5 sm:px-2.5 sm:py-1 text-[9px] sm:text-[10px] font-bold tracking-widest uppercase bg-pink-500/15 border border-pink-500/30 text-pink-300 rounded-full">
              {caseStudy.influencer.timing}
            </span>
            <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-pink-300/90">
              {caseStudy.influencer.title}
            </p>
          </div>

          <div className="flex flex-col gap-5 lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="order-2 lg:order-1 space-y-3 sm:space-y-4 min-w-0">
              <p className="text-base sm:text-lg font-black text-white">{caseStudy.influencer.handle}</p>
              <p className="text-[13px] sm:text-sm text-zinc-400 leading-relaxed">
                {caseStudy.influencer.description}
              </p>
              <p className="text-[13px] sm:text-sm text-zinc-500 leading-relaxed italic">
                {caseStudy.influencer.strategyIntro}
              </p>

              <div className="space-y-2 sm:space-y-3 pt-1 sm:pt-2">
                <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-pink-300/80">
                  Scaletta · 24 video
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {caseStudy.influencer.pillars.map((pillar) => (
                    <div
                      key={pillar.title}
                      className="rounded-lg sm:rounded-xl border border-pink-500/15 bg-pink-500/5 p-2.5 sm:p-3"
                    >
                      <p className="text-[11px] sm:text-xs font-bold text-pink-200 mb-1">{pillar.title}</p>
                      <ul className="space-y-0.5 sm:space-y-1">
                        {pillar.items.map((item) => (
                          <li key={item} className="text-[10px] sm:text-[11px] text-zinc-500 leading-snug">
                            · {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 rounded-xl sm:rounded-2xl overflow-hidden border border-pink-500/20 bg-black w-full">
              <div className="relative aspect-square w-full max-h-[min(85vw,420px)] mx-auto lg:max-h-none">
                <MediaImage
                  src={caseStudy.influencer.gridImage.src}
                  alt={caseStudy.influencer.gridImage.alt}
                  fit="cover"
                  position="center top"
                  bg="bg-black"
                  sizes="(max-width: 640px) 100vw, 400px"
                />
              </div>
              <p className="text-center text-[9px] sm:text-[10px] uppercase tracking-widest text-zinc-500 py-2 sm:py-3 border-t border-white/5 px-2">
                {caseStudy.influencer.gridImage.label}
              </p>
            </div>
          </div>
        </div>

        {/* Risultati Reels */}
        <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/5">
          <div className="mobile-card-pad">
            <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-emerald-400/90 mb-3 sm:mb-4">
              Risultati in vetrina
            </p>
            <div className="grid grid-cols-2 gap-2">
              {caseStudy.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className={`rounded-lg sm:rounded-xl p-2.5 sm:p-3 border min-w-0 ${
                    "highlight" in metric && metric.highlight
                      ? "border-amber-500/30 bg-amber-500/5"
                      : "border-emerald-500/15 bg-emerald-500/5"
                  }`}
                >
                  <p
                    className={`text-sm sm:text-lg font-black tracking-tight truncate sm:whitespace-normal ${
                      "highlight" in metric && metric.highlight ? "text-amber-300" : "text-white"
                    }`}
                  >
                    {metric.value}
                  </p>
                  <p className="text-[8px] sm:text-[10px] uppercase tracking-wider sm:tracking-widest text-zinc-600 mt-0.5 sm:mt-1 leading-tight">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-lg sm:rounded-xl border border-white/10 bg-zinc-950/60 p-3 sm:p-4 mt-4 sm:mt-6">
              <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-zinc-500 mb-1.5 sm:mb-2">Nota</p>
              <p className="text-[11px] sm:text-xs text-zinc-500 leading-relaxed">{caseStudy.exitNote}</p>
            </div>
          </div>

          <div className="mobile-card-pad">
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {caseStudy.screens.map((screen) => (
                <div
                  key={screen.src}
                  className="rounded-xl sm:rounded-2xl overflow-hidden border border-amber-500/20 bg-black w-full min-w-0"
                >
                  <div className="relative aspect-[9/16] w-full">
                    <MediaImage
                      src={screen.src}
                      alt={screen.alt}
                      fit="contain"
                      position="center top"
                      bg="bg-black"
                      padding="p-1.5 sm:p-2"
                      sizes="(max-width: 640px) 45vw, 200px"
                    />
                  </div>
                  <p className="text-center text-[8px] sm:text-[10px] uppercase tracking-wide sm:tracking-widest text-zinc-500 py-2 sm:py-3 border-t border-white/5 px-1.5 leading-tight">
                    {screen.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="px-4 sm:px-8 py-3 sm:py-4 border-t border-white/5 bg-zinc-950/40">
          <p className="text-[10px] sm:text-[11px] text-zinc-600 text-center leading-relaxed">
            Screenshot da Instagram Reels · views visibili sui contenuti · periodo di gestione del
            nostro team con ZeroAgency. Non confrontiamo numeri &quot;prima/dopo&quot;: il nuovo
            posizionamento ha elevato l&apos;intero profilo, inclusi i contenuti già pubblicati.
          </p>
        </div>
      </motion.article>
    </div>
  );
}
