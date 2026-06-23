"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { SITE, whatsappUrl } from "@/lib/constants";

type ChatStep = "closed" | "q1" | "q2" | "q3" | "done";

const QUESTIONS = [
  {
    id: "q1",
    bot: "Ciao! 👋 Sono l'assistente AI di Eugenio. Che tipo di servizio ti interessa?",
    options: ["Creazione Sito Web", "Social / ADS", "Content Creation", "Eventi", "Consulenza 1to1"],
  },
  {
    id: "q2",
    bot: "Ottimo! Quando vorresti iniziare?",
    options: ["Subito", "Entro 1 mese", "Sto solo esplorando"],
  },
  {
    id: "q3",
    bot: "Vuoi pagamenti dilazionati? (disponibili su siti, social 3+ mesi ed eventi)",
    options: ["Sì, mi interessa", "No, pagamento unico", "Ne parliamo dopo"],
  },
];

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<ChatStep>("closed");
  const [answers, setAnswers] = useState<string[]>([]);

  const openChat = () => {
    setOpen(true);
    setStep("q1");
    setAnswers([]);
  };

  const closeChat = () => {
    setOpen(false);
    setStep("closed");
  };

  const handleAnswer = (answer: string) => {
    const next = [...answers, answer];
    setAnswers(next);
    if (next.length === 1) setStep("q2");
    else if (next.length === 2) setStep("q3");
    else setStep("done");
  };

  const wantsWebsite = answers[0] === "Creazione Sito Web";

  const whatsappHref = useMemo(() => {
    if (answers.length < 3) return whatsappUrl();
    return whatsappUrl(
      `Ciao Eugenio! Ho completato la qualifica AI.\nServizio: ${answers[0]}\nTiming: ${answers[1]}\nPagamenti dilazionati: ${answers[2]}`
    );
  }, [answers]);

  const currentQuestion =
    step === "q1" ? QUESTIONS[0] : step === "q2" ? QUESTIONS[1] : step === "q3" ? QUESTIONS[2] : null;

  return (
    <>
      <motion.button
        onClick={open ? closeChat : openChat}
        className="fixed z-50 w-14 h-14 rounded-full bg-[#a3ff12] text-black flex items-center justify-center shadow-[0_0_30px_rgba(163,255,18,0.4)] hover:shadow-[0_0_50px_rgba(163,255,18,0.6)] transition-shadow safe-bottom safe-right"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label={open ? "Chiudi chat" : "Apri assistente AI"}
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <span className="text-xs font-black tracking-tighter">AI</span>
        )}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed z-50 left-4 right-4 sm:left-auto sm:right-6 sm:w-[360px] gradient-border rounded-2xl overflow-hidden bg-black shadow-2xl safe-bottom-offset"
          >
            <div className="px-4 sm:px-5 py-4 border-b border-white/5 flex items-center gap-3 bg-zinc-950">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#a3ff12] to-emerald-400 flex items-center justify-center text-black text-[10px] font-black shrink-0">
                AI
              </div>
              <div className="min-w-0">
                <p className="text-sm font-bold">Assistente Eugenio</p>
                <p className="text-[10px] text-[#a3ff12] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#a3ff12] animate-pulse shrink-0" />
                  Qualifica lead · {SITE.supportHours}
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-5 space-y-4 min-h-[200px] max-h-[50dvh] sm:max-h-[360px] overflow-y-auto overscroll-contain">
              {answers.map((answer, i) => (
                <div key={`${answer}-${i}`} className="flex justify-end">
                  <div className="bg-[#a3ff12]/20 text-white text-sm px-4 py-2 rounded-2xl rounded-br-sm max-w-[85%]">
                    {answer}
                  </div>
                </div>
              ))}

              {step === "done" ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
                  <div className="bg-white/5 text-sm px-4 py-3 rounded-2xl rounded-bl-sm">
                    {wantsWebsite
                      ? "Perfetto! Usa il Site Builder AI per il brief completo, oppure scrivimi su WhatsApp."
                      : "Ottimo! Eugenio è pronto. Scegli come procedere 👇"}
                  </div>

                  {wantsWebsite && (
                    <a
                      href="#ai-sito"
                      onClick={closeChat}
                      className="block w-full text-center py-3 rounded-xl bg-[#a3ff12] text-black font-bold text-sm hover:brightness-110 transition-all"
                    >
                      🌐 Apri AI Site Builder
                    </a>
                  )}

                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-3.5 rounded-xl bg-[#25D366] text-white font-bold text-sm hover:brightness-110 transition-all active:scale-[0.98]"
                  >
                    💬 {wantsWebsite ? "Consulenza Gratuita WhatsApp" : "Scrivi su WhatsApp"}
                  </a>

                  <a
                    href="#preventivo"
                    onClick={closeChat}
                    className="block w-full text-center py-3 rounded-xl border border-white/10 text-sm font-semibold hover:border-[#a3ff12]/40 transition-all"
                  >
                    📋 Richiedi Preventivo
                  </a>

                  <p className="text-[10px] text-zinc-500 text-center">
                    {SITE.email} · Pagamenti dilazionabili disponibili
                  </p>
                </motion.div>
              ) : (
                currentQuestion && (
                  <motion.div
                    key={currentQuestion.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-3"
                  >
                    <div className="bg-white/5 text-sm px-4 py-3 rounded-2xl rounded-bl-sm">
                      {currentQuestion.bot}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {currentQuestion.options.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => handleAnswer(opt)}
                          className="px-3 py-2.5 text-xs font-medium rounded-full border border-white/10 hover:border-[#a3ff12]/50 hover:bg-[#a3ff12]/10 transition-all active:scale-95"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
