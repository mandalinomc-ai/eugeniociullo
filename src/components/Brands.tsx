"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { BRANDS } from "@/lib/constants";

export default function Brands() {
  const [failedLogos, setFailedLogos] = useState<Record<string, boolean>>({});

  return (
    <section id="brand" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 overflow-hidden scroll-mt-20">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#a3ff12]/3 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="I Successi"
          title="Brand con cui ho lavorato"
          subtitle="Collaborazioni che uniscono strategia digitale e impatto visivo."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {BRANDS.map((brand, i) => (
            <motion.article
              key={brand.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
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
                    onError={() => setFailedLogos((prev) => ({ ...prev, [brand.name]: true }))}
                  />
                ) : (
                  <span className="text-2xl sm:text-3xl font-black text-zinc-700 tracking-tighter px-4 text-center">
                    {brand.name}
                  </span>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />

                {"highlight" in brand && brand.highlight && (
                  <span className="absolute top-3 sm:top-4 left-3 sm:left-4 px-2.5 sm:px-3 py-1 text-[9px] sm:text-[10px] font-bold tracking-widest uppercase bg-[#a3ff12] text-black rounded-full">
                    {"featured" in brand && brand.featured ? "Attuale" : "Highlight"}
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
          ))}
        </div>
      </div>
    </section>
  );
}
