"use client";

import { motion, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { LANCI_DA_ZERO } from "@/lib/constants";

function AnimatedCounter({ target }: { target: number }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animate(0, target, {
            duration: 2,
            ease: "easeOut",
            onUpdate: (v) => setValue(Math.round(v)),
          });
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="tabular-nums">
      {value.toLocaleString("it-IT")}
    </span>
  );
}

export default function LanciDaZero() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block text-[#a3ff12] text-xs font-bold tracking-[0.3em] uppercase mb-4">
            Case Study Premium
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter">
            I LANCI DA ZERO
          </h2>
          <p className="text-zinc-500 mt-4 text-base sm:text-lg">Numeri che parlano da soli.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 sm:gap-8">
          {LANCI_DA_ZERO.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative group"
            >
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-[#a3ff12]/40 via-transparent to-violet-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

              <div className="relative gradient-border rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 bg-black overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] font-mono text-[8px] leading-tight text-[#a3ff12] overflow-hidden pointer-events-none select-none">
                  {Array.from({ length: 20 }).map((_, row) => (
                    <div key={row} className="whitespace-nowrap">
                      {Array.from({ length: 30 }).map((_, col) => (
                        <span key={col}>{(row + col) % 2 === 0 ? "1" : "0"}</span>
                      ))}
                    </div>
                  ))}
                </div>

                <span className="inline-block px-3 sm:px-4 py-1.5 text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase border border-[#a3ff12]/30 text-[#a3ff12] rounded-full mb-6 sm:mb-8">
                  {item.tag}
                </span>

                <h3 className="text-lg sm:text-xl md:text-2xl font-black tracking-tight mb-8 sm:mb-10 leading-tight">
                  {item.name}
                </h3>

                <div className="space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-zinc-600 mb-2">Impression</p>
                    <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-[#a3ff12] leading-none tracking-tighter break-words">
                      <AnimatedCounter target={item.impressions} />
                      <span className="text-2xl sm:text-3xl md:text-4xl">+</span>
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 gradient-border rounded-2xl sm:rounded-3xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[320px] bg-zinc-900">
              <Image
                src="/images/analytics-meta-ads.png"
                alt="Report Meta ADS - 31.799 visualizzazioni, CPC €0,07"
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-6 sm:p-10 flex flex-col justify-center">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#a3ff12] mb-3">Prova dai dati</span>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight mb-4">
                Performance reali da Meta ADS Manager
              </h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-[#a3ff12]">31.799</p>
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
                  <p className="text-2xl sm:text-3xl font-black text-[#a3ff12]">€0,07</p>
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
    </section>
  );
}
