"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GlowButton from "@/components/ui/GlowButton";
import MediaImage from "@/components/ui/MediaImage";
import { CONTENT_CREATOR, whatsappUrl } from "@/lib/constants";

export default function ContentCreator() {
  return (
    <section id="content-creator" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 scroll-mt-24 overflow-hidden">
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <SectionHeading
          label="Content Creator"
          title={CONTENT_CREATOR.headline}
          subtitle={CONTENT_CREATOR.subheadline}
        />

        {/* Three delivery modes */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-5 mb-12 sm:mb-16">
          {CONTENT_CREATOR.modes.map((mode, i) => (
            <motion.article
              key={mode.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group gradient-border rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:glow-accent transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{mode.icon}</span>
                {"badge" in mode && mode.badge && (
                  <span className="px-2 py-0.5 text-[9px] font-black tracking-widest uppercase bg-[#a3ff12] text-black rounded-full">
                    {mode.badge}
                  </span>
                )}
              </div>
              <h3 className="text-xl font-black tracking-tight mb-3 group-hover:text-[#a3ff12] transition-colors">
                {mode.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-5">{mode.description}</p>
              <div className="flex flex-wrap gap-2">
                {mode.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2.5 py-1 rounded-full border border-white/10 text-zinc-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Gear + Drone highlight */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 mb-2">Attrezzatura & Capacità</p>
            {CONTENT_CREATOR.gear.map((item) => (
              <div
                key={item.label}
                className={`gradient-border rounded-2xl p-5 flex items-start gap-4 ${
                  item.highlight ? "ring-1 ring-[#a3ff12]/20 glow-accent" : ""
                }`}
              >
                <span className="text-2xl shrink-0">{item.highlight ? "🚁" : "📷"}</span>
                <div>
                  <p className="font-black tracking-tight text-lg">{item.label}</p>
                  <p className="text-sm text-zinc-500 mt-1">{item.detail}</p>
                  {item.highlight && (
                    <span className="inline-block mt-2 text-[10px] font-bold tracking-widest uppercase text-[#a3ff12]">
                      Disponibile su richiesta
                    </span>
                  )}
                </div>
              </div>
            ))}

            <GlowButton
              href={whatsappUrl("Ciao Eugenio! Mi interessa il servizio Content Creator. Vorrei saperne di più.")}
              variant="primary"
              external
              className="w-full sm:w-auto mt-4"
            >
              Richiedi Content Plan →
            </GlowButton>
          </motion.div>

          {/* Process + Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden gradient-border">
              <MediaImage
                src={CONTENT_CREATOR.image}
                alt={CONTENT_CREATOR.imageAlt}
                fit="cover-top"
                position="center 25%"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <p className="absolute bottom-4 left-4 text-xs text-[#a3ff12] tracking-widest uppercase">
                Team · On-site · Fiere
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {CONTENT_CREATOR.process.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="gradient-border rounded-xl p-4"
                >
                  <span className="text-[10px] font-black text-[#a3ff12] tracking-widest">{step.step}</span>
                  <p className="text-sm font-bold mt-1 mb-1">{step.title}</p>
                  <p className="text-xs text-zinc-500 leading-relaxed">{step.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Brand types strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 gradient-border rounded-2xl p-6 sm:p-8 text-center"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 mb-4">Perfetto per</p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {[
              "Personal Brand",
              "Ristoranti & Hotel",
              "E-commerce",
              "Artisti & Eventi",
              "Aziende B2B",
              "Startup & Lanci",
            ].map((label) => (
              <span
                key={label}
                className="px-4 py-2 rounded-full border border-white/10 text-sm text-zinc-400 hover:border-[#a3ff12]/30 hover:text-white transition-colors"
              >
                {label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
