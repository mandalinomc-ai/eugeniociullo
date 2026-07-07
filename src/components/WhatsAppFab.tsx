"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { SITE } from "@/lib/constants";

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
    </svg>
  );
}

export default function WhatsAppFab() {
  const reduceMotion = useReducedMotion();
  const [expanded, setExpanded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const t = setTimeout(() => setExpanded(true), 1600);
    const t2 = setTimeout(() => setExpanded(false), 6000);
    return () => {
      clearTimeout(t);
      clearTimeout(t2);
    };
  }, []);

  if (!mounted) return null;

  const href = SITE.consultationUrl;

  return (
    <div className="fixed right-4 sm:right-6 bottom-4 sm:bottom-6 z-40 safe-bottom-fab">
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contattaci su WhatsApp per una consulenza"
        title="Scrivici su WhatsApp"
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        initial={{ opacity: 0, scale: 0.6, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 360, damping: 22, delay: 0.4 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        className="group relative flex items-center gap-0 rounded-full bg-[#25D366] text-black shadow-[0_8px_30px_rgba(37,211,102,0.45)] ring-1 ring-[#25D366]/40"
      >
        {/* Aloni pulsanti verdi */}
        {!reduceMotion && (
          <>
            <motion.span
              className="pointer-events-none absolute inset-0 rounded-full bg-[#25D366]"
              animate={{ scale: [1, 1.55], opacity: [0.5, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
              aria-hidden
            />
            <motion.span
              className="pointer-events-none absolute inset-0 rounded-full bg-[#25D366]/70"
              animate={{ scale: [1, 1.35], opacity: [0.4, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay: 0.6 }}
              aria-hidden
            />
          </>
        )}

        {/* Glow costante */}
        <motion.span
          className="pointer-events-none absolute inset-[-6px] rounded-full bg-[#25D366]/35 blur-lg"
          animate={reduceMotion ? undefined : { opacity: [0.35, 0.65, 0.35] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden
        />

        <span className="relative z-10 flex items-center justify-center w-14 h-14 sm:w-15 sm:h-15 shrink-0">
          <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8" />
        </span>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.span
              key="label"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "auto", opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="relative z-10 overflow-hidden whitespace-nowrap"
            >
              <span className="block pr-5 pl-1 text-sm font-bold tracking-tight">
                Chatta con noi
              </span>
            </motion.span>
          )}
        </AnimatePresence>
      </motion.a>
    </div>
  );
}
