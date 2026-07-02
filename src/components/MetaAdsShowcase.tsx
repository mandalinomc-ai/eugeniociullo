"use client";

import { motion } from "framer-motion";
import MediaImage from "@/components/ui/MediaImage";
import { META_ADS_SHOWCASE } from "@/lib/constants";

export default function MetaAdsShowcase() {
  return (
    <div className="mt-12 sm:mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <span className="inline-block text-violet-400/90 text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase mb-3">
          Meta ADS · Performance reali
        </span>
        <h3 className="text-2xl sm:text-3xl font-black tracking-tight">Campagne che convertono</h3>
        <p className="text-zinc-500 mt-3 text-sm max-w-2xl mx-auto">
          Oltre ai lanci organici: risultati da Meta Ads Manager con il nostro team.
        </p>
      </motion.div>

      <div className="grid gap-5 sm:gap-6">
        {META_ADS_SHOWCASE.map((item) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-surface rounded-2xl sm:rounded-3xl overflow-hidden"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[320px] bg-zinc-900">
                <MediaImage
                  src={item.image}
                  alt={item.imageAlt}
                  fit="contain"
                  position="center"
                  bg="bg-zinc-900"
                  padding="p-3 sm:p-4"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="p-6 sm:p-8 flex flex-col justify-center">
                <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-600 mb-1">{item.period}</p>
                <h4 className="text-xl sm:text-2xl font-black tracking-tight mb-1">{item.title}</h4>
                <p className="text-xs text-zinc-500 mb-5">
                  {item.spend} · {item.adsCount} annunci · Meta Ads Manager
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {item.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className={`rounded-xl p-3 border ${
                        "highlight" in stat && stat.highlight
                          ? "border-violet-500/30 bg-violet-500/5"
                          : "border-white/5 bg-white/[0.02]"
                      }`}
                    >
                      <p
                        className={`text-lg sm:text-xl font-black ${
                          "highlight" in stat && stat.highlight ? "text-violet-300" : "text-white"
                        }`}
                      >
                        {stat.value}
                      </p>
                      {"change" in stat && stat.change && (
                        <p className="text-[10px] text-emerald-400/90 font-semibold mt-0.5">{stat.change}</p>
                      )}
                      <p className="text-[9px] uppercase tracking-widest text-zinc-600 mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
                {"note" in item && item.note && (
                  <p className="text-sm text-zinc-400 mt-5 leading-relaxed">{item.note}</p>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
