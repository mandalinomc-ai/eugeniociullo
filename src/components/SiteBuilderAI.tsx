"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useMemo, useCallback } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlowButton from "@/components/ui/GlowButton";
import { SITE, SITE_BUILDER, whatsappUrl } from "@/lib/constants";

type BuilderData = {
  business: string;
  goal: string;
  pages: string[];
  style: (typeof SITE_BUILDER.styles)[number] | null;
  timeline: string;
  budget: string;
  name: string;
  contact: string;
};

type StepId = "business" | "goal" | "pages" | "style" | "timeline" | "budget" | "contact" | "done";

const STEPS: { id: StepId; question: string }[] = [
  { id: "business", question: "Ciao! 👋 Sono l'AI di Eugenio. Che tipo di attività hai?" },
  { id: "goal", question: "Perfetto. Qual è l'obiettivo principale del tuo sito?" },
  { id: "pages", question: "Quali sezioni ti servono? Seleziona tutte quelle utili." },
  { id: "style", question: "Che stile visivo ti rappresenta di più?" },
  { id: "timeline", question: "Quando vorresti andare online?" },
  { id: "budget", question: "Budget indicativo per il progetto?" },
  { id: "contact", question: "Ultimo step: come posso contattarti?" },
];

function buildBrief(data: BuilderData): string {
  const styleLabel = data.style?.label ?? "Premium";
  const pagesList = data.pages.length ? data.pages.join(", ") : "Home, Servizi, Contatti";
  return [
    `🌐 BRIEF SITO WEB — Generato con AI`,
    ``,
    `Attività: ${data.business}`,
    `Obiettivo: ${data.goal}`,
    `Sezioni: ${pagesList}`,
    `Stile: ${styleLabel}`,
    `Timeline: ${data.timeline}`,
    `Budget: ${data.budget}`,
    ``,
    `💡 Suggerimento AI:`,
    `Sito ${styleLabel.toLowerCase()} con focus su "${data.goal.toLowerCase()}".`,
    `Stack consigliato: Next.js + SEO + mobile-first + integrazione WhatsApp/ADS.`,
    data.pages.includes("Shop / Catalogo") ? `→ E-commerce o catalogo prodotti consigliato.` : "",
    data.pages.includes("Prenotazioni / Booking") || data.goal.includes("Prenotazioni")
      ? `→ Modulo booking o integrazione Calendly/WhatsApp.`
      : "",
  ]
    .filter(Boolean)
    .join("\n");
}

function SitePreview({ style, pages }: { style: BuilderData["style"]; pages: string[] }) {
  const accent = style?.accent ?? "#a3ff12";
  const bg = style?.bg ?? "#0a0a0a";

  return (
    <div className="gradient-border rounded-2xl overflow-hidden shadow-2xl">
      <div className="flex items-center gap-2 px-4 py-3 bg-zinc-900 border-b border-white/5">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        <div className="flex-1 mx-2 h-5 rounded-md bg-white/5 flex items-center px-3">
          <span className="text-[9px] text-zinc-600 truncate">tuobrand.it</span>
        </div>
        <span className="text-[9px] text-[#a3ff12] font-bold uppercase tracking-widest">Live Preview</span>
      </div>

      <div className="p-4 sm:p-6 space-y-3 min-h-[280px] sm:min-h-[320px]" style={{ backgroundColor: bg }}>
        <div className="h-16 sm:h-20 rounded-xl shimmer border border-white/5 flex items-end p-3">
          <div>
            <div className="h-2 w-24 rounded-full mb-2" style={{ backgroundColor: accent, opacity: 0.8 }} />
            <div className="h-1.5 w-16 rounded-full bg-white/20" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="h-8 rounded-lg border border-white/5 flex items-center justify-center"
              style={{ backgroundColor: i === 0 ? `${accent}15` : "transparent" }}
            >
              <span className="text-[8px] text-zinc-600 uppercase tracking-wider">
                {pages[i]?.split(" ")[0] ?? ["Home", "Servizi", "Contatti"][i]}
              </span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="h-20 rounded-xl border border-white/5 bg-white/[0.02]" />
          <div className="h-20 rounded-xl border border-white/5 bg-white/[0.02]" />
        </div>

        <div
          className="h-8 rounded-full flex items-center justify-center text-[10px] font-bold text-black"
          style={{ backgroundColor: accent }}
        >
          CTA · Contattaci
        </div>

        {pages.length > 3 && (
          <div className="flex flex-wrap gap-1">
            {pages.slice(3, 6).map((p) => (
              <span
                key={p}
                className="text-[8px] px-2 py-0.5 rounded-full border border-white/10 text-zinc-500"
              >
                + {p.split(" ")[0]}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function SiteBuilderAI() {
  const [stepIndex, setStepIndex] = useState(0);
  const [typing, setTyping] = useState(true);
  const [messages, setMessages] = useState<{ role: "bot" | "user"; text: string }[]>([]);
  const [data, setData] = useState<BuilderData>({
    business: "",
    goal: "",
    pages: [],
    style: null,
    timeline: "",
    budget: "",
    name: "",
    contact: "",
  });
  const [contactForm, setContactForm] = useState({ name: "", contact: "" });

  const currentStep = STEPS[stepIndex];
  const isDone = stepIndex >= STEPS.length;

  const showQuestion = useCallback(() => {
    if (stepIndex >= STEPS.length) return;
    setTyping(true);
    const q = STEPS[stepIndex].question;
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "bot", text: q }]);
      setTyping(false);
    }, 600);
  }, [stepIndex]);

  useEffect(() => {
    if (messages.length === 0) showQuestion();
  }, [messages.length, showQuestion]);

  const advance = (userText: string, update: Partial<BuilderData>) => {
    setMessages((prev) => [...prev, { role: "user", text: userText }]);
    setData((prev) => ({ ...prev, ...update }));
    setTimeout(() => setStepIndex((i) => i + 1), 400);
  };

  useEffect(() => {
    if (stepIndex > 0 && stepIndex < STEPS.length) {
      showQuestion();
    }
  }, [stepIndex, showQuestion]);

  const brief = useMemo(() => (isDone ? buildBrief(data) : ""), [isDone, data]);

  const consultationHref = useMemo(() => {
    if (!isDone) return SITE.consultationUrl;
    return whatsappUrl(
      `Ciao Eugenio! Ho completato il brief AI per il mio sito.\n\n${brief}\n\nVorrei una consulenza gratuita.`
    );
  }, [isDone, brief]);

  const quoteHref = useMemo(() => {
    if (!isDone) return whatsappUrl();
    return whatsappUrl(
      `Ciao Eugenio! Richiedo preventivo sito web.\n\n${brief}\n\nNome: ${data.name}\nContatto: ${data.contact}`
    );
  }, [isDone, brief, data.name, data.contact]);

  const togglePage = (page: string) => {
    setData((prev) => ({
      ...prev,
      pages: prev.pages.includes(page)
        ? prev.pages.filter((p) => p !== page)
        : [...prev.pages, page],
    }));
  };

  const submitContact = () => {
    if (!contactForm.name || !contactForm.contact) return;
    advance(`${contactForm.name} · ${contactForm.contact}`, {
      name: contactForm.name,
      contact: contactForm.contact,
    });
  };

  const reset = () => {
    setStepIndex(0);
    setMessages([]);
    setData({
      business: "",
      goal: "",
      pages: [],
      style: null,
      timeline: "",
      budget: "",
      name: "",
      contact: "",
    });
    setContactForm({ name: "", contact: "" });
  };

  return (
    <section id="ai-sito" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 scroll-mt-24 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#a3ff12]/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <SectionHeading
          label="AI Site Builder"
          title="Costruisci la tua idea di sito."
          subtitle="Rispondi alle domande dell'assistente AI e ricevi un brief personalizzato + consulenza gratuita o preventivo su misura."
          align="center"
        />

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="gradient-border rounded-2xl sm:rounded-3xl overflow-hidden bg-black/60 backdrop-blur-sm flex flex-col h-[520px] sm:h-[580px]"
          >
            <div className="px-5 py-4 border-b border-white/5 flex items-center gap-3 bg-zinc-950">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#a3ff12] to-emerald-400 flex items-center justify-center text-black text-xs font-black">
                AI
              </div>
              <div>
                <p className="text-sm font-bold">Eugenio Site Architect</p>
                <p className="text-[10px] text-[#a3ff12] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#a3ff12] animate-pulse" />
                  {typing ? "Sta scrivendo..." : "Online · Brief in tempo reale"}
                </p>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3 overscroll-contain">
              {messages.map((msg, i) => (
                <motion.div
                  key={`${msg.role}-${i}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[88%] text-sm px-4 py-3 rounded-2xl ${
                      msg.role === "user"
                        ? "bg-[#a3ff12]/20 text-white rounded-br-sm"
                        : "bg-white/5 text-zinc-200 rounded-bl-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {typing && (
                <div className="flex gap-1 px-4 py-3 bg-white/5 rounded-2xl rounded-bl-sm w-fit">
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-zinc-500"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                    />
                  ))}
                </div>
              )}

              <AnimatePresence mode="wait">
                {!typing && !isDone && currentStep && (
                  <motion.div
                    key={currentStep.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="pt-2"
                  >
                    {currentStep.id === "business" &&
                      SITE_BUILDER.businessTypes.map((opt) => (
                        <OptionBtn key={opt} onClick={() => advance(opt, { business: opt })}>
                          {opt}
                        </OptionBtn>
                      ))}

                    {currentStep.id === "goal" &&
                      SITE_BUILDER.goals.map((opt) => (
                        <OptionBtn key={opt} onClick={() => advance(opt, { goal: opt })}>
                          {opt}
                        </OptionBtn>
                      ))}

                    {currentStep.id === "pages" && (
                      <div className="space-y-3">
                        <div className="flex flex-wrap gap-2">
                          {SITE_BUILDER.pages.map((opt) => (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => togglePage(opt)}
                              className={`px-3 py-2 text-xs rounded-full border transition-all ${
                                data.pages.includes(opt)
                                  ? "border-[#a3ff12] bg-[#a3ff12]/15 text-white"
                                  : "border-white/10 hover:border-white/25"
                              }`}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                        <button
                          type="button"
                          onClick={() =>
                            advance(
                              data.pages.length
                                ? data.pages.join(", ")
                                : "Home, Servizi, Contatti",
                              { pages: data.pages.length ? data.pages : ["Home impattante", "Servizi / Menu", "Contatti + Mappa"] }
                            )
                          }
                          className="w-full py-3 rounded-xl bg-[#a3ff12] text-black font-bold text-sm hover:brightness-110 transition-all"
                        >
                          Continua →
                        </button>
                      </div>
                    )}

                    {currentStep.id === "style" &&
                      SITE_BUILDER.styles.map((opt) => (
                        <OptionBtn
                          key={opt.id}
                          onClick={() => advance(opt.label, { style: opt })}
                          accent={opt.accent}
                        >
                          {opt.label}
                        </OptionBtn>
                      ))}

                    {currentStep.id === "timeline" &&
                      SITE_BUILDER.timelines.map((opt) => (
                        <OptionBtn key={opt} onClick={() => advance(opt, { timeline: opt })}>
                          {opt}
                        </OptionBtn>
                      ))}

                    {currentStep.id === "budget" &&
                      SITE_BUILDER.budgets.map((opt) => (
                        <OptionBtn key={opt} onClick={() => advance(opt, { budget: opt })}>
                          {opt}
                        </OptionBtn>
                      ))}

                    {currentStep.id === "contact" && (
                      <div className="space-y-3">
                        <input
                          type="text"
                          placeholder="Il tuo nome *"
                          value={contactForm.name}
                          onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#a3ff12]/50 focus:outline-none text-sm"
                        />
                        <input
                          type="text"
                          placeholder="WhatsApp o email *"
                          value={contactForm.contact}
                          onChange={(e) => setContactForm({ ...contactForm, contact: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#a3ff12]/50 focus:outline-none text-sm"
                        />
                        <button
                          type="button"
                          onClick={submitContact}
                          disabled={!contactForm.name || !contactForm.contact}
                          className="w-full py-3 rounded-xl bg-[#a3ff12] text-black font-bold text-sm disabled:opacity-40 hover:brightness-110 transition-all"
                        >
                          Genera Brief AI →
                        </button>
                      </div>
                    )}
                  </motion.div>
                )}

                {isDone && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="space-y-4 pt-2"
                  >
                    <div className="bg-white/5 rounded-2xl p-4 text-xs text-zinc-400 font-mono whitespace-pre-wrap leading-relaxed max-h-40 overflow-y-auto border border-[#a3ff12]/20">
                      {brief}
                    </div>
                    <p className="text-sm text-zinc-300">
                      Il tuo brief è pronto! Scegli come procedere:
                    </p>
                    <a
                      href={consultationHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center py-3.5 rounded-xl bg-[#a3ff12] text-black font-bold text-sm hover:brightness-110 transition-all"
                    >
                      🎁 Consulenza Gratuita su WhatsApp
                    </a>
                    <a
                      href={quoteHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center py-3.5 rounded-xl border border-white/15 text-white font-bold text-sm hover:border-[#a3ff12]/40 transition-all"
                    >
                      📋 Richiedi Preventivo Dettagliato
                    </a>
                    <button
                      type="button"
                      onClick={reset}
                      className="w-full text-center text-xs text-zinc-600 hover:text-zinc-400 py-2"
                    >
                      Ricomincia da capo
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 lg:sticky lg:top-24"
          >
            <SitePreview style={data.style} pages={data.pages} />

            <div className="gradient-border rounded-2xl p-5 space-y-3">
              <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600">Cosa include</p>
              {[
                "Design premium mobile-first",
                "SEO + Google indexing",
                "Integrazione WhatsApp & ADS",
                "Pagamenti dilazionabili (2–3 rate)",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-zinc-400">
                  <span className="text-[#a3ff12]">→</span>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function OptionBtn({
  children,
  onClick,
  accent,
}: {
  children: React.ReactNode;
  onClick: () => void;
  accent?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={accent ? { borderColor: `${accent}40` } : undefined}
      className="block w-full text-left px-4 py-3 mb-2 text-sm rounded-xl border border-white/10 hover:border-[#a3ff12]/40 hover:bg-[#a3ff12]/5 transition-all active:scale-[0.98]"
    >
      {children}
    </button>
  );
}
