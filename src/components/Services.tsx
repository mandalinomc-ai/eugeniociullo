"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionShell from "@/components/ui/SectionShell";
import GlowButton from "@/components/ui/GlowButton";
import { SERVICES, PAYMENT_PLANS } from "@/lib/constants";

const serviceExtras: Record<string, string[]> = {
  social: ["Meta ADS · Report mensili", "Strategia lanci & sold-out"],
  content: ["iPhone 16 Pro · Droni", "UGC · Produzione sul campo"],
  consulting: ["Lanci da zero", "Qualifica lead AI"],
  websites: ["Pagabile a rate · 2–3 rate", "Brief AI su /crea-sito"],
};

export default function Services() {
  return (
    <SectionShell id="servizi" tone="raised">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="I Nostri Servizi"
          title="Digital Marketing e Content che generano risultati."
          subtitle="Social, contenuti virali e performance ADS al centro. I siti web e le automazioni sono l'infrastruttura che amplifica la strategia — non il nostro core business."
          tone="neutral"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {SERVICES.map((service, i) => {
            const isFeatured = "featured" in service && service.featured;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 transition-all duration-500 overflow-hidden ${
                  isFeatured ? "card-featured md:col-span-2 lg:col-span-2" : "card-surface-hover"
                }`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-3 mb-5 sm:mb-6">
                    <span className="text-3xl sm:text-4xl shrink-0">{service.icon}</span>
                    <div className="flex flex-wrap gap-2 justify-end">
                      {"badge" in service && service.badge && (
                        <span className="px-2.5 sm:px-3 py-1 text-[10px] font-black tracking-widest uppercase bg-[#a3ff12] text-black rounded-full">
                          {service.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight mb-3 sm:mb-4 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">{service.description}</p>

                  {serviceExtras[service.id] && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {serviceExtras[service.id].map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide rounded-full border border-[#a3ff12]/30 text-[#a3ff12] bg-[#a3ff12]/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {isFeatured && (
                    <div className="mt-6 sm:mt-8">
                      <GlowButton href="#preventivo" variant="primary" className="w-full sm:w-auto">
                        Inizia il tuo Lancio →
                      </GlowButton>
                    </div>
                  )}

                  {service.id === "websites" && (
                    <div className="mt-6 sm:mt-8">
                      <GlowButton href="/crea-sito" variant="outline" className="w-full sm:w-auto text-xs sm:text-sm">
                        Scopri il brief AI →
                      </GlowButton>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-xs text-zinc-600 max-w-2xl mx-auto leading-relaxed"
        >
          {PAYMENT_PLANS.description} · Siti web e automazioni come supporto alla tua strategia di marketing.
        </motion.p>
      </div>
    </SectionShell>
  );
}
