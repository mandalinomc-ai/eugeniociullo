"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import GlowButton from "@/components/ui/GlowButton";
import { EVENT_PRODUCTION, whatsappUrl } from "@/lib/constants";

type EventCategoryId = (typeof EVENT_PRODUCTION.categories)[number]["id"];

export default function EventProduction() {
  const [activeCategory, setActiveCategory] = useState<EventCategoryId>(
    EVENT_PRODUCTION.categories[0].id
  );

  const whatsappMessage = (() => {
    const cat = EVENT_PRODUCTION.categories.find((c) => c.id === activeCategory)?.label ?? "Evento";
    return whatsappUrl(
      `Ciao Eugenio! Mi interessa l'organizzazione di un evento: ${cat}. Vorrei un preventivo.`
    );
  })();

  return (
    <section id="eventi" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 scroll-mt-24 overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-fuchsia-500/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-rose-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <SectionHeading
          label="Eventi & Allestimenti"
          title={EVENT_PRODUCTION.headline}
          subtitle={EVENT_PRODUCTION.subheadline}
        />

        {/* Category selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-14"
        >
          {EVENT_PRODUCTION.categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-4 sm:px-6 py-3 rounded-full border text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat.id
                  ? "border-[#a3ff12] bg-[#a3ff12]/15 text-white glow-accent"
                  : "border-white/10 text-zinc-400 hover:border-white/25"
              }`}
            >
              <span>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Hero visual + services grid */}
        <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 relative min-h-[280px] sm:min-h-[360px] rounded-2xl sm:rounded-3xl overflow-hidden gradient-border"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <Image
                  src={
                    activeCategory === "fair" || activeCategory === "corporate"
                      ? EVENT_PRODUCTION.imageSecondary
                      : EVENT_PRODUCTION.image
                  }
                  alt="Allestimento evento professionale Eugenio Ciullo"
                  fill
                  className="object-cover opacity-75"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="inline-block px-3 py-1 text-[10px] font-bold tracking-widest uppercase bg-[#a3ff12] text-black rounded-full mb-2">
                    {EVENT_PRODUCTION.categories.find((c) => c.id === activeCategory)?.label}
                  </span>
                  <p className="text-lg font-black tracking-tight">
                    {activeCategory === "private" && "Feste ed eventi privati su misura"}
                    {activeCategory === "corporate" && "Meeting, convention e team building"}
                    {activeCategory === "fair" && "Stand fiera e copertura expo live"}
                    {activeCategory === "showroom" && "Lancio prodotto e showroom experience"}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4 sm:gap-5">
            {EVENT_PRODUCTION.services.map((service, i) => (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="group gradient-border rounded-2xl p-5 sm:p-6 hover:glow-accent transition-all duration-500"
              >
                <span className="text-2xl mb-3 block">{service.icon}</span>
                <h3 className="text-base sm:text-lg font-black tracking-tight mb-2 group-hover:text-[#a3ff12] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">{service.description}</p>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Extras marquee + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="gradient-border rounded-2xl sm:rounded-3xl p-6 sm:p-10"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 mb-4">
                Extra disponibili
              </p>
              <div className="flex flex-wrap gap-2">
                {EVENT_PRODUCTION.extras.map((extra) => (
                  <span
                    key={extra}
                    className="px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs text-zinc-400"
                  >
                    {extra}
                  </span>
                ))}
              </div>
              <p className="text-sm text-zinc-500 mt-5 leading-relaxed">
                Proiezione PDF e video aziendali, consulenza pre-evento, coordinamento fornitori e
                pagamenti dilazionabili su richiesta. Un referente unico dal concept alla consegna.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <GlowButton href={whatsappMessage} variant="primary" external className="w-full py-4">
                Preventivo Evento →
              </GlowButton>
              <GlowButton href="#preventivo" variant="secondary" className="w-full py-4">
                Form Multi-Step
              </GlowButton>
              <p className="text-[10px] text-zinc-600 text-center">
                Festa privata · Corporate · Fiera · Showroom — Campania e tutta Italia
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
