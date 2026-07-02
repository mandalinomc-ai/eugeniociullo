"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionShell from "@/components/ui/SectionShell";
import { BRANDS, WORK_COLLABORATION } from "@/lib/constants";

function BrandVisual({
  brand,
  failed,
  onError,
}: {
  brand: (typeof BRANDS)[number];
  failed: boolean;
  onError: () => void;
}) {
  const textOnly = "textOnly" in brand && brand.textOnly;
  const hasLogo = "logo" in brand && brand.logo;

  if (textOnly) {
    const accent =
      "accent" in brand && typeof brand.accent === "string"
        ? brand.accent
        : "#a3ff12";

    return (
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-zinc-950 via-black to-zinc-900 overflow-hidden">
        <div
          className="absolute inset-0 opacity-25 blur-3xl pointer-events-none"
          style={{ background: `radial-gradient(circle at center, ${accent}, transparent 70%)` }}
        />
        <p
          className="relative text-center px-4 text-sm sm:text-base font-black tracking-[0.15em] uppercase leading-snug"
          style={{ color: accent }}
        >
          {brand.name}
        </p>
      </div>
    );
  }

  if (failed || !hasLogo) {
    const initials = brand.name
      .split(" ")
      .slice(0, 2)
      .map((w) => w[0])
      .join("");

    return (
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-zinc-900 via-black to-zinc-900">
        <span className="text-4xl sm:text-5xl font-black text-zinc-800 tracking-tighter select-none">
          {initials}
        </span>
        <span className="absolute bottom-4 left-4 right-4 text-center text-xs sm:text-sm font-bold text-zinc-500 tracking-widest uppercase">
          {brand.name}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={brand.logo}
      alt={`${brand.name} - progetto Eugenio Ciullo`}
      fill
      className={`transition-all duration-500 group-hover:scale-105 ${
        "logoFit" in brand && brand.logoFit === "contain"
          ? `object-contain p-6 sm:p-8 opacity-90 group-hover:opacity-100`
          : "object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105"
      }`}
      style={
        "logoFit" in brand && brand.logoFit === "contain"
          ? undefined
          : { objectPosition: "center" }
      }
      sizes="(max-width: 768px) 100vw, 33vw"
      onError={onError}
    />
  );
}

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
  const failed = failedLogos[brand.name] ?? false;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className={`group relative card-surface-hover rounded-2xl overflow-hidden ${
        "featured" in brand && brand.featured ? "ring-1 ring-[#a3ff12]/20" : ""
      }`}
    >
      <div className={`relative h-36 sm:h-40 overflow-hidden ${"logoBg" in brand && brand.logoBg ? brand.logoBg : "bg-zinc-900/50"}`}>
        <BrandVisual brand={brand} failed={failed} onError={() => onLogoError(brand.name)} />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />

        {"highlight" in brand && brand.highlight && (
          <span className="absolute top-3 sm:top-4 left-3 sm:left-4 px-2.5 sm:px-3 py-1 text-[9px] sm:text-[10px] font-bold tracking-widest uppercase bg-[#a3ff12] text-black rounded-full z-10">
            {"management" in brand && brand.management === "ongoing"
              ? "Gestione attiva"
              : "featured" in brand && brand.featured
                ? "Case Study"
                : "Highlight"}
          </span>
        )}
      </div>

      <div className="p-4 sm:p-6">
        <h3 className="text-base sm:text-lg font-black tracking-tight group-hover:text-white transition-colors">
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
        {"website" in brand && brand.website && (
          <a
            href={brand.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 mt-3 text-xs font-semibold text-[#a3ff12] hover:underline"
          >
            Visita il sito →
          </a>
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
    <SectionShell id="brand" tone="warm">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 sm:mb-20"
        >
          <span className="inline-block text-amber-400/80 text-[10px] sm:text-xs font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4">
            Collaborazione Lavorativa
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight mb-8 sm:mb-10">
            Dove operiamo ogni giorno.
          </h2>

          <div className="card-featured rounded-2xl sm:rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-5 gap-0">
              <div className="relative md:col-span-2 h-48 md:h-auto min-h-[12rem] bg-zinc-900/50 overflow-hidden">
                <Image
                  src="/images/work-fiera.png"
                  alt="Eugenio Ciullo al lavoro con ZeroAgency"
                  fill
                  className="object-cover opacity-70"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
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
          label="I Nostri Successi"
          title="Brand con cui abbiamo lavorato"
          subtitle="Clienti e progetti che uniscono strategia digitale, impatto visivo e il lavoro del nostro team."
          align="center"
          tone="neutral"
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
    </SectionShell>
  );
}
