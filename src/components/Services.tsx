"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionShell from "@/components/ui/SectionShell";
import GlowButton from "@/components/ui/GlowButton";
import { SERVICES, PAYMENT_PLANS } from "@/lib/constants";

const serviceExtras: Record<string, string[]> = {
  consulting: ["Strategia & posizionamento", "Lanci commerciali"],
  content: ["iPhone 16 Pro · Droni", "UGC · Produzione sul campo"],
  social: ["Gestione social", "Analisi · Campagne & ADS"],
  websites: ["Siti web premium", "Pagabile a rate · Brief AI"],
  events: ["Eventi & live", "Produzione sul campo"],
};

export default function Services() {
  return (
    <SectionShell id="servizi" tone="raised">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="I Nostri Servizi"
          title="Tutto il digitale, un unico ecosistema."
          subtitle="Gestiamo ogni leva del marketing digitale — strategia, contenuti, social, siti web, analisi e campagne ADS — con lo stesso impegno. L'obiettivo è sempre uno: far conoscere e convertire le attività che seguiamo."
          tone="neutral"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 transition-all duration-500 overflow-hidden card-surface-hover"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <span className="text-3xl sm:text-4xl block mb-5 sm:mb-6">{service.icon}</span>

                <h3 className="text-xl sm:text-2xl font-black tracking-tight mb-3 sm:mb-4 group-hover:text-white transition-colors">
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
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-12 flex flex-col items-center gap-4 text-center"
        >
          <GlowButton href="#preventivo" variant="primary" className="px-8 py-3.5">
            Richiedi una Consulenza →
          </GlowButton>
          <p className="text-xs text-zinc-600 max-w-2xl leading-relaxed">
            {PAYMENT_PLANS.description} · Siti web, social, contenuti e ADS: un unico team, un unico obiettivo.
          </p>
        </motion.div>
      </div>
    </SectionShell>
  );
}
