"use client";

import GlowButton from "@/components/ui/GlowButton";
import { SITE, whatsappUrl } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12 sm:py-16 px-4 sm:px-6 safe-bottom">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-12 items-start">
          <div>
            <p className="text-2xl font-black tracking-tighter mb-2">
              EUGENIO<span className="text-[#a3ff12]">.</span>
            </p>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Digital Marketer & Content Creator
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-600 mb-4">Contatti</p>
            <div className="flex flex-col gap-3">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-400 hover:text-[#25D366] transition-colors"
              >
                WhatsApp · {SITE.whatsappDisplay}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="text-sm text-zinc-400 hover:text-[#a3ff12] transition-colors break-all"
              >
                {SITE.email}
              </a>
              <p className="text-sm text-zinc-500">{SITE.supportHoursLabel}</p>
            </div>
          </div>

          <div className="sm:col-span-2 md:col-span-1">
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-600 mb-4">Navigazione</p>
            <nav className="flex flex-col gap-2 mb-6">
              {[
                { label: "Chi Sono", href: "#chi-sono" },
                { label: "Lavori", href: "#lavori" },
                { label: "Brand", href: "#brand" },
                { label: "Servizi", href: "#servizi" },
                { label: "AI Sito", href: "#ai-sito" },
                { label: "Preventivo", href: "#preventivo" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-zinc-400 hover:text-[#a3ff12] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <GlowButton href={SITE.consultationUrl} variant="primary" external className="w-full sm:w-auto">
              Prenota via WhatsApp
            </GlowButton>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} Eugenio Ciullo. Tutti i diritti riservati.
          </p>
          <p className="text-xs text-zinc-700 tracking-widest uppercase">
            Built with strategy & soul
          </p>
        </div>
      </div>
    </footer>
  );
}
