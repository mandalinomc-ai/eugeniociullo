"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import GlowButton from "@/components/ui/GlowButton";
import BrandLogo from "@/components/BrandLogo";
import { SITE } from "@/lib/constants";

const navLinks = [
  { href: "#casi-studio", label: "Risultati" },
  { href: "#chi-sono", label: "Chi è Eugenio" },
  { href: "#servizi", label: "Servizi" },
  { href: "#preventivo", label: "Richiedi Preventivo", accent: true },
] as const;

function NavPill({
  href,
  label,
  accent = false,
  onClick,
  size = "md",
}: {
  href: string;
  label: string;
  accent?: boolean;
  onClick?: () => void;
  size?: "sm" | "md";
}) {
  const sizeClass =
    size === "sm"
      ? "px-2.5 py-1 text-[10px] lg:px-3 lg:py-1.5 lg:text-[11px]"
      : "px-4 py-3 text-sm";

  return (
    <a
      href={href}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-lg font-semibold border transition-all duration-200 active:scale-[0.98] ${sizeClass} ${
        size === "md" ? "w-full" : ""
      } ${
        accent
          ? "border-[#a3ff12]/30 bg-[#a3ff12]/10 text-[#a3ff12] hover:border-[#a3ff12]/50 hover:bg-[#a3ff12]/15 hover:shadow-[0_0_20px_rgba(163,255,18,0.12)]"
          : "border-white/10 bg-white/[0.04] text-zinc-300 hover:border-white/20 hover:bg-white/[0.09] hover:text-white"
      }`}
    >
      {label}
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const homePrefix = pathname === "/" ? "" : "/";

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
        <nav className="max-w-7xl mx-auto px-3 sm:px-6 py-3 sm:py-5 flex items-center justify-between gap-2 sm:gap-3">
          <a href={pathname === "/" ? "#" : "/"} className="group shrink-0" onClick={closeMenu}>
            <BrandLogo size="nav" className="group-hover:opacity-90 transition-opacity" />
          </a>

          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            {navLinks.map((link) =>
              "accent" in link && link.accent ? (
                <GlowButton
                  key={link.href}
                  href={`${homePrefix}${link.href}`}
                  variant="primary"
                  className="text-xs md:text-sm px-4 sm:px-5 py-2.5"
                >
                  {link.label}
                </GlowButton>
              ) : (
                <a
                  key={link.href}
                  href={`${homePrefix}${link.href}`}
                  className="text-sm text-zinc-400 hover:text-white transition-colors relative group whitespace-nowrap"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#a3ff12] group-hover:w-full transition-all duration-300" />
                </a>
              )
            )}
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] hover:border-[#a3ff12]/40 hover:bg-white/[0.08] transition-colors"
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
              className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-zinc-950 border-l border-white/10 flex flex-col safe-top safe-bottom shadow-[-8px_0_40px_rgba(0,0,0,0.5)]"
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-zinc-900/50">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-400">Sezioni</span>
                <button
                  type="button"
                  onClick={closeMenu}
                  className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] hover:border-white/20 transition-colors"
                  aria-label="Chiudi menu"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-5 py-5">
                <div className="grid grid-cols-2 gap-2">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.04 }}
                      className={link.href === "#preventivo" ? "col-span-2" : undefined}
                    >
                      <NavPill
                        href={`${homePrefix}${link.href}`}
                        label={link.label}
                        accent={"accent" in link && link.accent}
                        onClick={closeMenu}
                        size="md"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="px-5 py-5 border-t border-white/10 bg-zinc-900/40 space-y-3">
                <GlowButton href={SITE.consultationUrl} variant="primary" external className="w-full py-3.5">
                  Prenota via WhatsApp
                </GlowButton>
                <a
                  href={`https://wa.me/${SITE.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-3 rounded-lg border border-[#25D366]/40 bg-[#25D366]/5 text-[#25D366] text-sm font-semibold hover:bg-[#25D366]/10 transition-colors"
                >
                  WhatsApp · {SITE.whatsappDisplay}
                </a>
                <p className="text-[11px] text-zinc-600 text-center">{SITE.supportHoursLabel}</p>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
