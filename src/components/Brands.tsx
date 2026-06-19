"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { BRANDS, WORK_COLLABORATION } from "@/lib/constants";

function BrandCard({
  brand,
  failedLogos,
  onLogoError,
  index,
}: {
  brand: (typeof BRANDS)[number];
  failedLogos: Record<string, boolean>;
  onLogoError: (name: string) => void;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className={`group relative gradient-border rounded-2xl overflow-hidden hover:glow-accent transition-all duration-500 ${
        "featured" in brand && brand.featured ? "ring-1 ring-[#a3ff12]/20" : ""
      }`}
    >
      <div className="relative h-36 sm:h-40 bg-zinc-900/50 overflow-hidden flex items-center justify-center">
        {!failedLogos[brand.name] ? (
          <img
            src={brand.logo}
            alt={`Logo ${brand.name}`}
            className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
            onError={() => onLogoError(brand.name)}
          />
        ) : (
          <span className="text-2xl sm:text-3xl font-black text-zinc-700 tracking-tighter px-4 text-center">
            {brand.name}
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />

        {"highlight" in brand && brand.highlight && (
          <span className="absolute top-3 sm:top-4 left-3 sm:left-4 px-2.5 sm:px-3 py-1 text-[9px] sm:text-[10px] font-bold tracking-widest uppercase bg-[#a3ff12] text-black rounded-full">
            {"featured" in brand && brand.featured ? "Case Study" : "Highlight"}
          </span>
        )}
      </div>

      <div className="p-4 sm:p-6">
        <h3 className="text-base sm:text-lg font-black tracking-tight group-hover:text-[#a3ff12] transition-colors">
          {brand.name}
        </h3>
        {"subtitle" in brand && brand.subtitle && (
          <p className="text-xs sm:text-sm text-zinc-500 mt-1">{brand.subtitle}</p>
        )}
        {"highlight" in brand && brand.highlight && (
          <p className="text-xs sm:text-sm text-zinc-400 mt-3 leading-relaxed border-l-2 border-[#a3ff12]/40 pl-3">
            {brand.highlight}
          </p>
        )}
      </div>
    </motion.article>
  );
}

export default function Brands() {
  const [failedLogos, setFailedLogos] = useState<Record<string, boolean>>({});

  const handleLogoError = (name: string) => {
    setFailedLogos((prev) => ({ ...prev, [name]: true }));
  };

  return (
    <section id="brand" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 overflow-hidden scroll-mt-20">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#a3ff12]/3 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Collaborazione lavorativa — separata dai clienti */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 sm:mb-20"
        >
          <span className="inline-block text-[#a3ff12] text-[10px] sm:text-xs font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4">
            Collaborazione Lavorativa
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight mb-8 sm:mb-10">
            Dove opero ogni giorno.
          </h2>

          <div className="gradient-border rounded-2xl sm:rounded-3xl overflow-hidden hover:glow-accent transition-all duration-500">
            <div className="grid md:grid-cols-5 gap-0">
              <div className="relative md:col-span-2 h-48 md:h-auto min-h-[12rem] bg-zinc-900/50 flex items-center justify-center overflow-hidden">
                {!failedLogos[WORK_COLLABORATION.name] ? (
                  <img
                    src={WORK_COLLABORATION.logo}
                    alt={`Logo ${WORK_COLLABORATION.name}`}
                    className="w-full h-full object-cover opacity-70"
                    onError={() => handleLogoError(WORK_COLLABORATION.name)}
                  />
                ) : (
                  <span className="text-3xl font-black text-zinc-700">{WORK_COLLABORATION.name}</span>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/80 md:bg-gradient-to-r md:from-transparent md:to-black pointer-events-none" />
                <span className="absolute top-4 left-4 px-3 py-1 text-[10px] font-bold tracking-widest uppercase bg-white text-black rounded-full">
                  {WORK_COLLABORATION.badge}
                </span>
              </div>

              <div className="md:col-span-3 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 mb-2">Partner lavorativo</p>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-2">
                  {WORK_COLLABORATION.name}
                </h3>
                <p className="text-sm text-zinc-500 mb-4">{WORK_COLLABORATION.subtitle}</p>
                <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
                  {WORK_COLLABORATION.description}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <SectionHeading
          label="I Successi"
          title="Brand con cui ho lavorato"
          subtitle="Clienti e progetti che uniscono strategia digitale e impatto visivo."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {BRANDS.map((brand, i) => (
            <BrandCard
              key={brand.name}
              brand={brand}
              failedLogos={failedLogos}
              onLogoError={handleLogoError}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
