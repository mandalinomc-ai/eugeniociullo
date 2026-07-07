"use client";

import { motion } from "framer-motion";
import MediaImage from "@/components/ui/MediaImage";
import GlowButton from "@/components/ui/GlowButton";
import { SITE } from "@/lib/constants";

function PortraitCard({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden gradient-border rounded-2xl ${className}`}>
      <MediaImage
        src="/images/eugenio-portrait-pro.png"
        alt="Eugenio Ciullo - Digital Marketer, ritratto professionale"
        fit="cover-center"
        position="center 22%"
        className="scale-[1.04]"
        priority
        sizes="(max-width: 1024px) 160px, 320px"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
      <div className="absolute bottom-3 left-3 right-3">
        <p className="text-xs sm:text-sm font-black tracking-tight">EUGENIO CIULLO</p>
        <p className="text-[9px] sm:text-[10px] text-[#a3ff12] tracking-widest uppercase">
          Digital · Content · ADS · Team
        </p>
      </div>
    </div>
  );
}

function HeroCtas({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-3 sm:gap-4 ${className}`}>
      <GlowButton href="#preventivo" variant="primary" className="w-full py-3.5 sm:py-4 text-sm sm:text-base">
        Inizia il tuo Lancio
      </GlowButton>
      <GlowButton href="#casi-studio" variant="secondary" className="w-full py-3.5 sm:py-4 text-sm sm:text-base">
        Guarda i nostri Risultati
      </GlowButton>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
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
          <MediaImage
            src="/images/hero-background.png"
            alt="Eugenio Ciullo - digital marketing e content creation"
            fit="cover-top"
            position="center 20%"
            className="opacity-25"
            priority
            sizes="100vw"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
        <div className="noise-overlay absolute inset-0 pointer-events-none" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-3 sm:px-6 pt-[5.25rem] sm:pt-32 pb-10 sm:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-5 sm:mb-6"
        >
          <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] sm:text-xs tracking-widest uppercase text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-[#a3ff12] animate-pulse shrink-0" />
            Eugenio Ciullo & Team · ZeroAgency
          </span>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-[1fr_10.5rem] lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center">
          <div className="flex flex-col justify-center space-y-4 sm:space-y-5 min-w-0">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="text-[1.75rem] leading-[1] sm:text-5xl md:text-6xl lg:text-[3.25rem] xl:text-7xl font-black tracking-tighter text-balance-safe"
            >
              Digital Marketing
              <br />
              <span className="text-gradient-accent">con l&apos;anima</span>
              <br />
              da Creator.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-[15px] sm:text-lg md:text-xl text-zinc-400 max-w-xl leading-relaxed font-light"
            >
              Strategia, Content Creation sul campo e Performance Marketing. Insieme a{" "}
              <span className="text-white font-medium">ZeroAgency</span>, guidiamo il posizionamento
              digitale di brand locali e nazionali.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="lg:hidden pt-1"
            >
              <HeroCtas />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col items-center sm:items-end justify-center gap-5 sm:gap-6"
          >
            <PortraitCard className="aspect-[3/4] w-full max-w-[11rem] sm:max-w-[12rem] lg:max-w-[17rem] xl:max-w-[19rem]" />

            <div className="hidden lg:flex flex-col w-full max-w-[17rem] xl:max-w-[19rem] gap-4">
              <HeroCtas />
              <div className="card-surface rounded-2xl p-4 sm:p-5">
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1.5">Assistenza</p>
                <p className="text-sm font-semibold text-white">{SITE.supportHoursLabel}</p>
                <p className="text-xs text-zinc-500 mt-1.5">{SITE.email}</p>
              </div>
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
