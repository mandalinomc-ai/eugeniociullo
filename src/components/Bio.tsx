"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

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
    sub: "Benevento · Partner lavorativo attuale",
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
    <section id="chi-sono" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Chi Sono"
          title="Dati, visual e street culture."
          subtitle="La mia esperienza unisce marketing digitale e creatività sul campo."
        />

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="space-y-5 sm:space-y-6"
          >
            <div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden gradient-border lg:hidden mb-6">
              <Image
                src="/images/work-fiera.png"
                alt="Eugenio Ciullo in fiera professionale"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <p className="absolute bottom-4 left-4 text-xs text-[#a3ff12] tracking-widest uppercase">
                Sul campo
              </p>
            </div>

            <p className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug">
              Eugenio Ciullo<span className="text-[#a3ff12]">.</span>
            </p>
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
              Opero ufficialmente nel digital e social marketing da{" "}
              <span className="text-white font-medium">gennaio 2025</span>, in{" "}
              <span className="text-[#a3ff12] font-medium">collaborazione lavorativa con ZeroAgency</span>{" "}
              (nota agenzia offline di Benevento) e con molteplici brand come consulente e content creator.
            </p>
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
              La mia esperienza nasce molto prima, sperimentando sul campo con aziende e personal brand
              nel settore musicale ed eventi. Gestisco strategicamente Facebook, Instagram e TikTok,
              occupandomi di analisi, content creation, campagne Meta ADS, reportistica mensile e
              sviluppo web.
            </p>
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
              Unisco la potenza dei dati alla forza del visual: realizzo foto per eventi con
              macchina fotografica dedicata e produco contenuti foto/video ad alto impatto come
              Content Creator utilizzando{" "}
              <span className="text-white font-medium">iPhone 16 Pro</span>.
            </p>
          </motion.div>

          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative hidden lg:block w-full aspect-[16/10] rounded-2xl overflow-hidden gradient-border mb-4"
            >
              <Image
                src="/images/work-fiera.png"
                alt="Eugenio Ciullo in fiera professionale"
                fill
                className="object-cover"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="absolute bottom-4 left-4 text-xs text-[#a3ff12] tracking-widest uppercase">
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
                  className={`gradient-border rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:glow-accent transition-shadow duration-500 ${card.span} ${
                    card.highlight ? "border-[#a3ff12]/30" : ""
                  }`}
                >
                  <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 mb-2 sm:mb-3">
                    {card.label}
                  </p>
                  <p className="text-lg sm:text-xl md:text-2xl font-black tracking-tight mb-1 break-words">
                    {card.value}
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-500 leading-snug">{card.sub}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
