"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import GlowButton from "@/components/ui/GlowButton";
import { SITE } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(163,255,18,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(163,255,18,0.03)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

        <motion.div
          className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-96 sm:h-96 rounded-full bg-[#a3ff12]/5 blur-[80px] sm:blur-[120px]"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-80 sm:h-80 rounded-full bg-violet-600/10 blur-[60px] sm:blur-[100px]"
          animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="absolute inset-0">
          <Image
            src="/images/ap-tricosistem-cosmoprof.png"
            alt="Eugenio Ciullo al lavoro - Cosmoprof"
            fill
            priority
            className="object-cover opacity-25"
            sizes="100vw"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
        <div className="noise-overlay absolute inset-0 pointer-events-none" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-20">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] sm:text-xs tracking-widest uppercase text-zinc-400 mb-6 sm:mb-8">
                <span className="w-2 h-2 rounded-full bg-[#a3ff12] animate-pulse shrink-0" />
                Digital Marketer · Content Creator
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="text-[2.25rem] leading-[0.95] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter mb-6 sm:mb-8"
            >
              Digital Marketing
              <br />
              <span className="text-gradient">con l&apos;anima</span>
              <br />
              da Creator.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-400 max-w-2xl leading-relaxed font-light"
            >
              Strategia, Content, ADS &amp;{" "}
              <span className="text-white font-medium">Siti Web Premium</span>{" "}
              per brand che vogliono farsi sentire.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="lg:col-span-5 flex flex-col gap-3 sm:gap-4"
          >
            <div className="relative aspect-[4/5] max-h-72 sm:max-h-80 w-full rounded-2xl overflow-hidden gradient-border glow-accent mb-2">
              <Image
                src="/images/eugenio-portrait.png"
                alt="Eugenio Ciullo - Digital Marketer"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 400px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-lg font-black tracking-tight">EUGENIO CIULLO</p>
                <p className="text-xs text-[#a3ff12] tracking-widest uppercase">Digital · Content · ADS</p>
              </div>
            </div>

            <GlowButton href="#ai-sito" variant="primary" className="w-full py-3.5 sm:py-4 text-sm sm:text-base">
              CREA IL TUO SITO
            </GlowButton>
            <GlowButton href="#preventivo" variant="secondary" className="w-full py-3.5 sm:py-4 text-sm sm:text-base">
              Richiedi Preventivo
            </GlowButton>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 text-sm text-zinc-400 hover:text-[#25D366] transition-colors"
            >
              💬 WhatsApp · {SITE.whatsappDisplay}
            </a>

            <div className="gradient-border rounded-2xl p-4 sm:p-5">
              <p className="text-[10px] sm:text-xs text-zinc-500 uppercase tracking-widest mb-2">Assistenza</p>
              <p className="text-sm sm:text-base font-semibold text-white">{SITE.supportHoursLabel}</p>
              <p className="text-xs sm:text-sm text-zinc-500 mt-2">{SITE.email}</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-zinc-600">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-12 bg-gradient-to-b from-[#a3ff12] to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
