"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import GlowButton from "@/components/ui/GlowButton";
import { SITE } from "@/lib/constants";

const navLinks = [
  { href: "#chi-sono", label: "Chi Sono" },
  { href: "#lavori", label: "Lavori" },
  { href: "#brand", label: "Brand" },
  { href: "#servizi", label: "Servizi" },
  { href: "#ai-sito", label: "Crea Sito" },
  { href: "#preventivo", label: "Preventivo" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 safe-top ${
          scrolled || menuOpen
            ? "bg-black/90 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-3">
          <a href="#" className="group flex flex-col shrink-0" onClick={closeMenu}>
            <span className="text-base sm:text-lg font-black tracking-tighter">
              EUGENIO<span className="text-[#a3ff12]">.</span>
            </span>
            <span className="text-[10px] text-zinc-500 tracking-[0.2em] uppercase group-hover:text-[#a3ff12] transition-colors">
              Digital Marketer
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-400 hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#a3ff12] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <GlowButton
              href={SITE.consultationUrl}
              variant="primary"
              external
              className="hidden sm:inline-flex text-xs md:text-sm px-4 sm:px-6"
            >
              Prenota via WhatsApp
            </GlowButton>

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:border-[#a3ff12]/40 transition-colors"
              aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={closeMenu} />

            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-zinc-950 border-l border-white/5 flex flex-col safe-top safe-bottom"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
                <span className="text-sm font-bold tracking-widest uppercase text-zinc-500">Menu</span>
                <button
                  type="button"
                  onClick={closeMenu}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10"
                  aria-label="Chiudi menu"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="text-2xl font-black tracking-tight py-4 border-b border-white/5 hover:text-[#a3ff12] transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              <div className="px-6 py-6 border-t border-white/5 space-y-4">
                <GlowButton href={SITE.consultationUrl} variant="primary" external className="w-full py-4">
                  Prenota via WhatsApp
                </GlowButton>
                <a
                  href={`https://wa.me/${SITE.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-3 rounded-full border border-[#25D366]/40 text-[#25D366] text-sm font-semibold hover:bg-[#25D366]/10 transition-colors"
                >
                  WhatsApp · {SITE.whatsappDisplay}
                </a>
                <p className="text-xs text-zinc-500 text-center">{SITE.supportHoursLabel}</p>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
