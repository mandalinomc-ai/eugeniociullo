"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionShell from "@/components/ui/SectionShell";
import GlowButton from "@/components/ui/GlowButton";
import {
  BUDGET_OPTIONS,
  FORM_OBJECTIVES,
  QUOTE_PAYMENT_PLANS,
  QUOTE_TIMELINES,
  SITE,
  whatsappUrl,
} from "@/lib/constants";
import {
  clearQuoteDraft,
  formatSavedAt,
  loadQuoteDraft,
  saveQuoteDraft,
} from "@/lib/quote-form-storage";
import { EMPTY_QUOTE_FORM, type QuoteFormData } from "@/lib/quote-form-types";
import { exportQuotePdf } from "@/lib/quote-pdf";

const STEPS = ["Servizi", "Budget", "Cliente"];

type QuoteFormProps = {
  standalone?: boolean;
};

export default function QuoteForm({ standalone = false }: QuoteFormProps) {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<QuoteFormData>(EMPTY_QUOTE_FORM);
  const [savedAt, setSavedAt] = useState<string | null>(null);
  const [saveMessage, setSaveMessage] = useState<string | null>(null);
  const [pdfLoading, setPdfLoading] = useState(false);
  const [draftRestored, setDraftRestored] = useState(false);
  const hydrated = useRef(false);

  useEffect(() => {
    const draft = loadQuoteDraft();
    if (!draft) return;

    setForm({
      objectives: draft.objectives,
      budget: draft.budget,
      timeline: draft.timeline,
      paymentPlan: draft.paymentPlan,
      details: draft.details,
      socialLinks: draft.socialLinks,
      name: draft.name,
      email: draft.email,
      phone: draft.phone,
    });
    if (typeof draft.step === "number" && draft.step >= 0 && draft.step < STEPS.length) {
      setStep(draft.step);
    }
    setSavedAt(draft.savedAt);
    setDraftRestored(true);
  }, []);

  useEffect(() => {
    if (!hydrated.current) {
      hydrated.current = true;
      return;
    }

    const timer = window.setTimeout(() => {
      const iso = saveQuoteDraft(form, step);
      setSavedAt(iso);
    }, 600);

    return () => window.clearTimeout(timer);
  }, [form, step]);

  const showToast = useCallback((message: string) => {
    setSaveMessage(message);
    window.setTimeout(() => setSaveMessage(null), 2600);
  }, []);

  const handleManualSave = () => {
    const iso = saveQuoteDraft(form, step);
    setSavedAt(iso);
    showToast("Bozza salvata sul dispositivo");
  };

  const handleExportPdf = async () => {
    setPdfLoading(true);
    try {
      await exportQuotePdf(form);
      showToast("PDF scaricato");
    } catch {
      showToast("Errore durante l'esportazione PDF");
    } finally {
      setPdfLoading(false);
    }
  };

  const toggleObjective = (label: string) => {
    setForm((prev) => ({
      ...prev,
      objectives: prev.objectives.includes(label)
        ? prev.objectives.filter((o) => o !== label)
        : [...prev.objectives, label],
    }));
  };

  const canProceed = () => {
    if (step === 0) return form.objectives.length > 0;
    if (step === 1) return !!form.budget && !!form.timeline && !!form.paymentPlan;
    if (step === 2) return !!form.name.trim();
    return false;
  };

  const handleSubmit = () => {
    setSubmitted(true);
    saveQuoteDraft(form, step);
    const objectives = form.objectives.length ? form.objectives.join(", ") : "Non indicati";
    const message = [
      "Ciao Eugenio! Vorrei un preventivo.",
      "",
      `Servizi richiesti: ${objectives}`,
      `Budget: ${form.budget}`,
      `Timeline: ${form.timeline}`,
      `Pagamento: ${form.paymentPlan}`,
      `Dettagli: ${form.details || "Non indicati"}`,
      `Social: ${form.socialLinks || "Non indicati"}`,
      `Nome: ${form.name}`,
      `Email: ${form.email || "Non indicata"}`,
      `Telefono: ${form.phone || "Non indicato"}`,
    ].join("\n");
    window.open(whatsappUrl(message), "_blank");
  };

  const resetForm = () => {
    setForm(EMPTY_QUOTE_FORM);
    setStep(0);
    setSubmitted(false);
    setDraftRestored(false);
    clearQuoteDraft();
    setSavedAt(null);
  };

  const touchBtn =
    "min-h-[52px] px-4 py-3.5 rounded-2xl border text-left transition-all duration-200 active:scale-[0.98] touch-manipulation";
  const touchInput =
    "w-full min-h-[52px] px-4 py-3.5 rounded-2xl bg-white/5 border border-white/10 focus:border-[#a3ff12]/50 focus:outline-none focus:ring-1 focus:ring-[#a3ff12]/30 transition-all text-base touch-manipulation";

  const actionBar = (
    <div
      className={`${
        standalone
          ? "fixed bottom-0 inset-x-0 z-40 border-t border-white/10 bg-black/95 backdrop-blur-xl pb-[max(0.75rem,var(--safe-bottom))] pt-3 px-4"
          : "mt-6 pt-4 border-t border-white/10"
      }`}
    >
      <div className="flex flex-col gap-2 max-w-3xl mx-auto">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          <button
            type="button"
            onClick={handleManualSave}
            className="min-h-[48px] rounded-2xl border border-white/15 bg-white/5 text-sm font-semibold text-white hover:border-[#a3ff12]/40 active:scale-[0.98] touch-manipulation"
          >
            💾 Salva in locale
          </button>
          <button
            type="button"
            onClick={handleExportPdf}
            disabled={pdfLoading}
            className="min-h-[48px] rounded-2xl border border-[#a3ff12]/30 bg-[#a3ff12]/10 text-sm font-semibold text-[#a3ff12] hover:bg-[#a3ff12]/15 active:scale-[0.98] disabled:opacity-50 touch-manipulation"
          >
            {pdfLoading ? "PDF..." : "📄 Esporta PDF"}
          </button>
          {!standalone && (
            <button
              type="button"
              onClick={resetForm}
              className="min-h-[48px] rounded-2xl border border-white/10 text-sm font-medium text-zinc-500 hover:text-zinc-300 active:scale-[0.98] touch-manipulation col-span-2 sm:col-span-1"
            >
              Svuota bozza
            </button>
          )}
        </div>

        {savedAt && (
          <p className="text-[11px] text-zinc-500 text-center">
            Ultimo salvataggio: {formatSavedAt(savedAt)}
            {draftRestored ? " · bozza ripristinata" : ""}
          </p>
        )}
      </div>
    </div>
  );

  const formCard = (
    <motion.div
      initial={standalone ? false : { opacity: 0, y: 30 }}
      whileInView={standalone ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`card-featured rounded-2xl sm:rounded-3xl bg-black/50 backdrop-blur-sm ${
        standalone ? "p-4 pb-36 min-h-[calc(100dvh-4.5rem)]" : "p-5 sm:p-8 md:p-12"
      }`}
    >
      <div className="flex items-center gap-2 mb-6 sm:mb-8">
        {STEPS.map((s, i) => (
          <div key={s} className="flex-1 flex flex-col gap-2">
            <div
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i <= step ? "bg-[#a3ff12]" : "bg-white/10"
              }`}
            />
            <span
              className={`text-[10px] sm:text-[11px] tracking-widest uppercase ${
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
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.25 }}
          >
            {step === 0 && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Di cosa ha bisogno il cliente?</h3>
                <p className="text-sm text-zinc-500">
                  Seleziona uno o più servizi — anche da appunti veloci in giro.
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {FORM_OBJECTIVES.map((obj) => {
                    const selected = form.objectives.includes(obj.label);
                    return (
                      <button
                        key={obj.id}
                        type="button"
                        aria-pressed={selected}
                        onClick={() => toggleObjective(obj.label)}
                        className={`${touchBtn} flex items-center gap-3 ${
                          selected
                            ? "border-[#a3ff12] bg-[#a3ff12]/10 glow-accent"
                            : "border-white/10 bg-white/[0.02] hover:border-white/20"
                        }`}
                      >
                        <span
                          className={`flex items-center justify-center w-6 h-6 rounded-md border shrink-0 ${
                            selected
                              ? "bg-[#a3ff12] border-[#a3ff12] text-black"
                              : "border-white/25 text-transparent"
                          }`}
                        >
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" aria-hidden>
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        </span>
                        <span className="font-semibold text-base">{obj.label}</span>
                      </button>
                    );
                  })}
                </div>
                {form.objectives.length > 0 && (
                  <p className="text-xs text-[#a3ff12]/80">{form.objectives.length} servizi selezionati</p>
                )}
              </div>
            )}

            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-4">Budget orientativo</h3>
                  <div className="space-y-3">
                    {BUDGET_OPTIONS.map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setForm({ ...form, budget: opt.label })}
                        className={`${touchBtn} w-full ${
                          form.budget === opt.label
                            ? "border-[#a3ff12] bg-[#a3ff12]/10"
                            : "border-white/10 bg-white/[0.02] hover:border-white/20"
                        }`}
                      >
                        <span className="font-semibold text-base">{opt.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Timeline</h3>
                  <div className="space-y-3">
                    {QUOTE_TIMELINES.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setForm({ ...form, timeline: opt })}
                        className={`${touchBtn} w-full ${
                          form.timeline === opt
                            ? "border-[#a3ff12] bg-[#a3ff12]/10"
                            : "border-white/10 bg-white/[0.02] hover:border-white/20"
                        }`}
                      >
                        <span className="font-semibold text-base">{opt}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Pagamento dilazionato</h3>
                  <div className="space-y-3">
                    {QUOTE_PAYMENT_PLANS.map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setForm({ ...form, paymentPlan: opt.label })}
                        className={`${touchBtn} w-full ${
                          form.paymentPlan === opt.label
                            ? "border-[#a3ff12] bg-[#a3ff12]/10"
                            : "border-white/10 bg-white/[0.02] hover:border-white/20"
                        }`}
                      >
                        <span className="font-semibold text-base">{opt.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-5">
                <h3 className="text-xl font-bold">Scheda cliente & note</h3>

                <div>
                  <label htmlFor="name" className="text-xs uppercase tracking-widest text-zinc-500 mb-2 block">
                    Nome cliente *
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    enterKeyHint="next"
                    placeholder="Es. Mario Rossi — Bar Centrale"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={touchInput}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="text-xs uppercase tracking-widest text-zinc-500 mb-2 block">
                      Telefono
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      enterKeyHint="next"
                      placeholder="348 000 0000"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={touchInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-xs uppercase tracking-widest text-zinc-500 mb-2 block">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      inputMode="email"
                      autoComplete="email"
                      enterKeyHint="next"
                      placeholder="cliente@email.it"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={touchInput}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="social-links" className="text-xs uppercase tracking-widest text-zinc-500 mb-2 block">
                    Link social
                  </label>
                  <input
                    id="social-links"
                    type="url"
                    name="url"
                    inputMode="url"
                    autoComplete="url"
                    enterKeyHint="next"
                    placeholder="Instagram, TikTok, sito..."
                    value={form.socialLinks}
                    onChange={(e) => setForm({ ...form, socialLinks: e.target.value })}
                    className={touchInput}
                  />
                </div>

                <div>
                  <label htmlFor="details" className="text-xs uppercase tracking-widest text-zinc-500 mb-2 block">
                    Appunti / richieste
                  </label>
                  <textarea
                    id="details"
                    name="notes"
                    rows={4}
                    enterKeyHint="done"
                    placeholder="Cosa ha chiesto, obiettivi, tempistiche, note dalla chiamata..."
                    value={form.details}
                    onChange={(e) => setForm({ ...form, details: e.target.value })}
                    className={`${touchInput} min-h-[120px] resize-y`}
                  />
                </div>
              </div>
            )}

            <div className="flex flex-col-reverse sm:flex-row sm:justify-between gap-3 mt-8">
              {step > 0 ? (
                <GlowButton variant="secondary" onClick={() => setStep(step - 1)} className="w-full sm:w-auto min-h-[48px]">
                  ← Indietro
                </GlowButton>
              ) : (
                <div className="hidden sm:block" />
              )}

              {step < 2 ? (
                <GlowButton
                  variant="primary"
                  onClick={() => canProceed() && setStep(step + 1)}
                  className={`w-full sm:w-auto min-h-[48px] ${!canProceed() ? "opacity-40 pointer-events-none" : ""}`}
                >
                  Avanti →
                </GlowButton>
              ) : (
                <GlowButton
                  variant="primary"
                  onClick={() => canProceed() && handleSubmit()}
                  className={`w-full sm:w-auto min-h-[48px] ${!canProceed() ? "opacity-40 pointer-events-none" : ""}`}
                >
                  Invia via WhatsApp
                </GlowButton>
              )}
            </div>

            {!standalone && actionBar}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-6 sm:py-8"
          >
            <div className="text-5xl mb-4">✓</div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Richiesta inviata!</h3>
            <p className="text-zinc-400 text-sm sm:text-base mb-6">
              Bozza salvata in locale. Controlla WhatsApp per conferma.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <GlowButton variant="secondary" onClick={handleExportPdf} className="min-h-[48px]">
                📄 Esporta PDF
              </GlowButton>
              <GlowButton variant="outline" onClick={resetForm} className="min-h-[48px]">
                Nuova scheda
              </GlowButton>
            </div>
            <p className="text-xs text-zinc-500 mt-4">{SITE.supportHoursLabel}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );

  const toast = (
    <AnimatePresence>
      {saveMessage && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className={`fixed z-50 left-1/2 -translate-x-1/2 px-4 py-2.5 rounded-full bg-[#a3ff12] text-black text-sm font-semibold shadow-lg ${
            standalone ? "bottom-[calc(5.5rem+var(--safe-bottom))]" : "bottom-6"
          }`}
        >
          {saveMessage}
        </motion.div>
      )}
    </AnimatePresence>
  );

  if (standalone) {
    return (
      <>
        {formCard}
        {actionBar}
        {toast}
      </>
    );
  }

  return (
    <SectionShell id="preventivo" tone="cta">
      <div className="max-w-3xl mx-auto relative">
        <SectionHeading
          label="Preventivo"
          title="Inizia il tuo progetto."
          subtitle="Seleziona i servizi, timeline e pagamento. Usa «Salva in locale» dal telefono come quaderno digitale — i dati restano anche senza inviare."
          align="center"
          tone="accent"
        />
        {formCard}
      </div>
      {toast}
    </SectionShell>
  );
}
