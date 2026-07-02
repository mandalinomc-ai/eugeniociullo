"use client";

import { motion } from "framer-motion";
import MediaImage from "@/components/ui/MediaImage";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionShell from "@/components/ui/SectionShell";
import { LANCI_DA_ZERO, WHATSAPP_BUSINESS_SETUP } from "@/lib/constants";
import LaunchReports from "@/components/LaunchReports";
import GestioneInEssere from "@/components/GestioneInEssere";
import WhatsAppBusinessMockup from "@/components/WhatsAppBusinessMockup";
import MetaAdsShowcase from "@/components/MetaAdsShowcase";

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

export default function LanciDaZero() {
  return (
    <SectionShell id="lanci" tone="results">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Case Study · Lanci & Gestione"
          title="Risultati reali su Instagram"
          subtitle="Lanci da zero (Parisio, ITTICO), ecosistema Antum/AMA/Lobby e campagne ADS — numeri e screenshot reali."
          align="center"
          tone="results"
        />

        <div className="grid md:grid-cols-2 gap-5 sm:gap-8">
          {LANCI_DA_ZERO.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative"
            >
              <div className="relative card-featured rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 bg-black overflow-hidden">
                <div className="flex flex-wrap items-center gap-2 mb-6 sm:mb-8">
                  <span className="inline-block px-3 sm:px-4 py-1.5 text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase border border-amber-500/30 text-amber-300/90 rounded-full">
                    {item.tag}
                  </span>
                  <InstagramBadge />
                </div>

                <h3 className="text-lg sm:text-xl md:text-2xl font-black tracking-tight mb-4 leading-tight">
                  {item.name}
                </h3>

                <div className="mb-6 rounded-xl border border-violet-500/20 bg-violet-500/5 p-4">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-violet-300 mb-2">
                    Fase 1 · Pre-analisi
                  </p>
                  <p className="text-sm text-zinc-400 leading-relaxed">{item.preAnalysis}</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <p className="text-xs uppercase tracking-[0.3em] text-zinc-600">{item.metricLabel}</p>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-pink-400/80"
                        aria-hidden
                      >
                        <rect x="2" y="2" width="20" height="20" rx="6" stroke="currentColor" strokeWidth="1.5" />
                        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </div>
                    <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-amber-300 leading-none tracking-tighter">
                      {item.impressions.toLocaleString("it-IT")}
                      <span className="text-2xl sm:text-3xl md:text-4xl">+</span>
                    </p>
                    <p className="text-[11px] text-zinc-500 mt-3 leading-relaxed border-l-2 border-pink-500/40 pl-3">
                      {item.instagramRef}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:flex-wrap gap-6 sm:gap-8 pt-6 border-t border-white/5">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-zinc-600 mb-1">Tempo</p>
                      <p className="text-xl sm:text-2xl md:text-3xl font-bold">{item.timeframe}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-zinc-600 mb-1">Risultato</p>
                      <p className="text-base sm:text-lg md:text-xl font-bold text-white">{item.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <GestioneInEssere />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 card-surface rounded-2xl sm:rounded-3xl overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative lg:min-h-[480px] bg-[#0b141a] overflow-hidden">
              <WhatsAppBusinessMockup />
            </div>
            <div className="p-6 sm:p-10 flex flex-col justify-center bg-zinc-950/80">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#25D366] mb-3">
                {WHATSAPP_BUSINESS_SETUP.badge}
              </span>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight mb-3">
                {WHATSAPP_BUSINESS_SETUP.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">{WHATSAPP_BUSINESS_SETUP.subtitle}</p>
              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {WHATSAPP_BUSINESS_SETUP.features.map((f) => (
                  <div key={f.label} className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                    <span className="text-xl mb-2 block">{f.icon}</span>
                    <p className="text-sm font-bold text-white mb-1">{f.label}</p>
                    <p className="text-xs text-zinc-500 leading-relaxed">{f.detail}</p>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-zinc-600">
                Applicato a: {WHATSAPP_BUSINESS_SETUP.appliesTo.join(" · ")}
              </p>
            </div>
          </div>
        </motion.div>

        <LaunchReports />

        <MetaAdsShowcase />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 card-surface rounded-2xl sm:rounded-3xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[320px]">
              <MediaImage
                src="/images/analytics-meta-ads.png"
                alt="Report Meta ADS - 31.799 visualizzazioni, CPC €0,07"
                fit="contain"
                position="center"
                bg="bg-zinc-900"
                padding="p-4 sm:p-6"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-6 sm:p-10 flex flex-col justify-center">
              <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-3">
                Prova dai dati · Meta ADS
              </span>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight mb-2">
                Performance reali da Meta ADS Manager
              </h3>
              <p className="text-xs text-zinc-500 mb-4">
                Separato dai numeri Instagram organici sopra — campagne a pagamento.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-white">31.799</p>
                  <p className="text-xs text-zinc-500 uppercase tracking-widest">Visualizzazioni</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-white">1.208</p>
                  <p className="text-xs text-zinc-500 uppercase tracking-widest">Clic sul link</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-white">24.799</p>
                  <p className="text-xs text-zinc-500 uppercase tracking-widest">Copertura</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-amber-300">€0,07</p>
                  <p className="text-xs text-zinc-500 uppercase tracking-widest">CPC medio</p>
                </div>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Campagna ottimizzata in 10 giorni. Dati concreti, non promesse: ogni euro investito
                tracciato e reportato.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionShell>
  );
}
