"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlowButton from "@/components/ui/GlowButton";
import { FORM_OBJECTIVES, BUDGET_OPTIONS, SITE, whatsappUrl } from "@/lib/constants";

type FormData = {
  objective: string;
  budget: string;
  socialLinks: string;
  name: string;
  email: string;
};

const STEPS = ["Obiettivo", "Budget", "Contatti"];

export default function QuoteForm() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormData>({
    objective: "",
    budget: "",
    socialLinks: "",
    name: "",
    email: "",
  });

  const canProceed = () => {
    if (step === 0) return !!form.objective;
    if (step === 1) return !!form.budget;
    if (step === 2) return !!form.name && !!form.email;
    return false;
  };

  const handleSubmit = () => {
    setSubmitted(true);
    const message = `Ciao Eugenio! Vorrei un preventivo.\n\nObiettivo: ${form.objective}\nBudget: ${form.budget}\nSocial: ${form.socialLinks || "Non indicati"}\nNome: ${form.name}\nEmail: ${form.email}`;
    window.open(whatsappUrl(message), "_blank");
  };

  return (
    <section id="preventivo" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 scroll-mt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#a3ff12]/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-3xl mx-auto relative">
        <SectionHeading
          label="Preventivo"
          title="Inizia il tuo progetto."
          subtitle="Compila il form multi-step e ricevi una risposta personalizzata. Pagamenti dilazionabili su richiesta."
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="gradient-border rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 bg-black/50 backdrop-blur-sm"
        >
          <div className="flex items-center gap-2 mb-8 sm:mb-10">
            {STEPS.map((s, i) => (
              <div key={s} className="flex-1 flex flex-col gap-2">
                <div
                  className={`h-1 rounded-full transition-all duration-500 ${
                    i <= step ? "bg-[#a3ff12]" : "bg-white/10"
                  }`}
                />
                <span
                  className={`text-[10px] tracking-widest uppercase ${
                    i <= step ? "text-[#a3ff12]" : "text-zinc-600"
                  }`}
                >
                  {s}
                </span>
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {step === 0 && (
                  <div className="space-y-4">
                    <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Qual è il tuo obiettivo?</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {FORM_OBJECTIVES.map((obj) => (
                        <button
                          key={obj.id}
                          type="button"
                          onClick={() => setForm({ ...form, objective: obj.label })}
                          className={`p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300 active:scale-[0.98] ${
                            form.objective === obj.label
                              ? "border-[#a3ff12] bg-[#a3ff12]/10 glow-accent"
                              : "border-white/10 hover:border-white/20 bg-white/[0.02]"
                          }`}
                        >
                          <span className="font-semibold text-sm sm:text-base">{obj.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 1 && (
                  <div className="space-y-4">
                    <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Budget orientativo?</h3>
                    <div className="space-y-3">
                      {BUDGET_OPTIONS.map((opt) => (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => setForm({ ...form, budget: opt.label })}
                          className={`w-full p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300 active:scale-[0.98] ${
                            form.budget === opt.label
                              ? "border-[#a3ff12] bg-[#a3ff12]/10"
                              : "border-white/10 hover:border-white/20 bg-white/[0.02]"
                          }`}
                        >
                          <span className="font-semibold text-sm sm:text-base">{opt.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-5">
                    <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Social & contatti</h3>
                    <div>
                      <label htmlFor="social-links" className="text-xs uppercase tracking-widest text-zinc-500 mb-2 block">
                        Link social attuali
                      </label>
                      <input
                        id="social-links"
                        type="text"
                        placeholder="Instagram, TikTok, Facebook..."
                        value={form.socialLinks}
                        onChange={(e) => setForm({ ...form, socialLinks: e.target.value })}
                        className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-[#a3ff12]/50 focus:outline-none focus:ring-1 focus:ring-[#a3ff12]/30 transition-all text-base"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="text-xs uppercase tracking-widest text-zinc-500 mb-2 block">
                          Nome *
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-[#a3ff12]/50 focus:outline-none focus:ring-1 focus:ring-[#a3ff12]/30 transition-all text-base"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="text-xs uppercase tracking-widest text-zinc-500 mb-2 block">
                          Email *
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          autoComplete="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-[#a3ff12]/50 focus:outline-none focus:ring-1 focus:ring-[#a3ff12]/30 transition-all text-base"
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex flex-col-reverse sm:flex-row sm:justify-between gap-3 mt-8 sm:mt-10">
                  {step > 0 ? (
                    <GlowButton variant="secondary" onClick={() => setStep(step - 1)} className="w-full sm:w-auto">
                      ← Indietro
                    </GlowButton>
                  ) : (
                    <div className="hidden sm:block" />
                  )}

                  {step < 2 ? (
                    <GlowButton
                      variant="primary"
                      onClick={() => canProceed() && setStep(step + 1)}
                      className={`w-full sm:w-auto ${!canProceed() ? "opacity-40 pointer-events-none" : ""}`}
                    >
                      Avanti →
                    </GlowButton>
                  ) : (
                    <GlowButton
                      variant="primary"
                      onClick={() => canProceed() && handleSubmit()}
                      className={`w-full sm:w-auto ${!canProceed() ? "opacity-40 pointer-events-none" : ""}`}
                    >
                      Invia via WhatsApp
                    </GlowButton>
                  )}
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6 sm:py-8"
              >
                <div className="text-5xl mb-4">✓</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Richiesta inviata!</h3>
                <p className="text-zinc-400 text-sm sm:text-base mb-4">
                  Ti contatterò al più presto. Controlla WhatsApp per conferma.
                </p>
                <p className="text-xs text-zinc-500">{SITE.supportHoursLabel}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
