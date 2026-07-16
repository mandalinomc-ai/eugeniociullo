"use client";

import { motion } from "framer-motion";
import MediaImage from "@/components/ui/MediaImage";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionShell from "@/components/ui/SectionShell";
import HoverTilt from "@/components/motion/HoverTilt";
import { ImageMaskReveal } from "@/components/motion/MaskReveal";
import { CONTENT_CREATOR } from "@/lib/constants";

const bioCards = [
  {
    label: "Dal",
    value: "Gen 2025",
    sub: "Digital & Social Marketing ufficiale",
    span: "col-span-1",
  },
  {
    label: "Collaborazione",
    value: "ZeroAgency",
    sub: "Benevento · Team operativo con cui lavoriamo ogni giorno",
    span: "col-span-1",
    highlight: true,
  },
  {
    label: "Piattaforme",
    value: "FB · IG · TikTok",
    sub: "Analisi · Content · Meta ADS · Report",
    span: "col-span-1",
  },
  {
    label: "Specialità",
    value: "Content & ADS",
    sub: "Social strategy · Eventi · Visual",
    span: "col-span-1",
  },
  {
    label: "Gear",
    value: "iPhone 16 Pro",
    sub: "+ Macchina fotografica dedicata eventi",
    span: "col-span-2",
  },
];

export default function Bio() {
  return (
    <SectionShell id="chi-sono" tone="raised">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Chi è Eugenio"
          title="Dati, visual e street culture."
          subtitle="Strategia, contenuti, social, siti web e campagne ADS: un team unico con ZeroAgency per far crescere ogni attività che gestiamo."
          tone="neutral"
        />

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="space-y-5 sm:space-y-6"
          >
            <p className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug">
              Eugenio Ciullo<span className="text-[#a3ff12]">.</span>{" "}
              <span className="text-zinc-500 text-lg sm:text-xl font-semibold">& Team</span>
            </p>

            <div className="relative w-full max-w-xs aspect-[3/4] rounded-2xl overflow-hidden gradient-border lg:hidden">
              <ImageMaskReveal className="h-full w-full">
                <MediaImage
                  src="/images/eugenio-portrait-pro.png"
                  alt="Eugenio Ciullo - Digital Marketer, ritratto professionale"
                  fit="cover-center"
                  position="center 22%"
                  className="scale-[1.04]"
                  sizes="(max-width: 1024px) 100vw, 320px"
                />
              </ImageMaskReveal>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent pointer-events-none" />
              <p className="absolute bottom-4 left-4 text-xs text-zinc-400 tracking-widest uppercase">
                Sul campo
              </p>
            </div>

            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
              Operiamo ufficialmente nel digital e social marketing da{" "}
              <span className="text-white font-medium">gennaio 2025</span>, in{" "}
              <span className="text-white font-medium">collaborazione con ZeroAgency</span>{" "}
              (agenzia di Benevento) e con molteplici brand come consulenza e content creation.
              Io coordino strategia e creatività, il team supporta produzione, eventi e delivery.
            </p>
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
              La nostra esperienza nasce molto prima, sperimentando sul campo con aziende e personal brand
              nel settore musicale ed eventi. Gestiamo strategicamente Facebook, Instagram e TikTok,
              occupandoci di analisi, content creation, campagne Meta ADS, reportistica mensile e
              sviluppo web.
            </p>
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
              Uniamo la potenza dei dati alla forza del visual: realizziamo foto per eventi con
              macchina fotografica dedicata e produciamo contenuti foto/video ad alto impatto come
              team Content Creator utilizzando{" "}
              <span className="text-white font-medium">iPhone 16 Pro</span> e attrezzatura pro.
            </p>
          </motion.div>

          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative hidden lg:block w-full aspect-[16/10] rounded-2xl overflow-hidden gradient-border mb-4"
            >
              <ImageMaskReveal className="h-full w-full" delay={0.1}>
                <MediaImage
                  src="/images/ap-tricosistem-cosmoprof.png"
                  alt="Eugenio Ciullo a Cosmoprof Bologna"
                  fit="cover-top"
                  position="center 20%"
                  sizes="50vw"
                />
              </ImageMaskReveal>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              <p className="absolute bottom-4 left-4 text-xs text-zinc-400 tracking-widest uppercase">
                Sul campo · Fiere & Eventi
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {bioCards.map((card, i) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={card.span}
                >
                  <HoverTilt className="h-full group">
                    <div
                      className={`h-full rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:-translate-y-0.5 ${
                        card.highlight ? "card-featured" : "card-surface-hover"
                      }`}
                    >
                      <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 mb-2 sm:mb-3">
                        {card.label}
                      </p>
                      <p className="text-lg sm:text-xl md:text-2xl font-black tracking-tight mb-1 break-words">
                        {card.value}
                      </p>
                      <p className="text-xs sm:text-sm text-zinc-500 leading-snug">{card.sub}</p>
                    </div>
                  </HoverTilt>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="mt-10 sm:mt-14 pt-10 border-t border-white/5"
        >
            <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 mb-2">Metodo di produzione</p>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight mb-3">{CONTENT_CREATOR.headline}</h3>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6 max-w-3xl">
              {CONTENT_CREATOR.subheadline}
            </p>
            <div className="grid sm:grid-cols-3 gap-3 sm:gap-4 mb-6">
              {CONTENT_CREATOR.modes.map((mode, i) => (
                <div key={mode.id} className="card-surface-hover rounded-xl p-4 sm:p-5">
                  <span className="text-2xl">{mode.icon}</span>
                  <p className="font-bold mt-2 text-sm sm:text-base">{mode.title}</p>
                  <p className="text-xs text-zinc-500 mt-1 leading-relaxed">{mode.description}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {CONTENT_CREATOR.gear.map((g) => (
                <span
                  key={g.label}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold border ${
                    g.highlight
                      ? "border-[#a3ff12]/40 bg-[#a3ff12]/10 text-[#a3ff12]"
                      : "border-white/10 text-zinc-400"
                  }`}
                >
                  {g.label}
                  {g.detail ? ` · ${g.detail}` : ""}
                </span>
              ))}
            </div>
          </motion.div>
      </div>
    </SectionShell>
  );
}
