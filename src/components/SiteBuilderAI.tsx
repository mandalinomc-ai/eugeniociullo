"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useMemo, useCallback } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionShell from "@/components/ui/SectionShell";
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

const AUTO_LABEL = "Non lo so, scegli tu";

const STEPS: { id: StepId; question: string }[] = [
  { id: "business", question: "Ciao! 👋 Sono l'AI di Eugenio. Che tipo di attività hai?" },
  { id: "goal", question: "Perfetto. Qual è l'obiettivo principale del tuo sito?" },
  { id: "pages", question: "Quali sezioni ti servono? Seleziona tutte quelle utili." },
  { id: "style", question: "Che stile visivo ti rappresenta di più?" },
  { id: "timeline", question: "Quando vorresti andare online?" },
  { id: "budget", question: "Budget indicativo per il progetto?" },
  { id: "contact", question: "Ultimo step: come posso contattarti?" },
];

function pickGoal(business: string): string {
  if (business.includes("Ristorante") || business.includes("Hotel")) return "Prenotazioni / Booking";
  if (business.includes("E-commerce")) return "Vendere online";
  if (business.includes("Personal Brand")) return "Portfolio e credibilità";
  if (business.includes("Professionista")) return "Generare lead e contatti";
  if (business.includes("Agenzia")) return "Portfolio e credibilità";
  return "Generare lead e contatti";
}

function pickPages(business: string, goal: string): string[] {
  const pages = new Set<string>(["Home impattante", "Contatti + Mappa"]);

  if (business.includes("Ristorante") || business.includes("Hotel")) {
    pages.add("Servizi / Menu");
    pages.add("Gallery / Portfolio");
    pages.add("Testimonial");
  } else if (business.includes("E-commerce")) {
    pages.add("Shop / Catalogo");
    pages.add("FAQ");
  } else if (business.includes("Personal Brand") || business.includes("Professionista")) {
    pages.add("Chi Siamo / Story");
    pages.add("Gallery / Portfolio");
    pages.add("Testimonial");
  } else {
    pages.add("Servizi / Menu");
    pages.add("Chi Siamo / Story");
  }

  if (goal.includes("Blog") || goal.includes("Portfolio")) pages.add("Blog / News");
  if (goal.includes("Vendere")) pages.add("Shop / Catalogo");

  return Array.from(pages).slice(0, 6);
}

function autoPick(stepId: StepId, data: BuilderData): { text: string; update: Partial<BuilderData> } {
  switch (stepId) {
    case "business":
      return { text: AUTO_LABEL, update: { business: "Professionista / Studio" } };
    case "goal":
      return { text: AUTO_LABEL, update: { goal: pickGoal(data.business || "Professionista / Studio") } };
    case "pages": {
      const business = data.business || "Professionista / Studio";
      const goal = data.goal || pickGoal(business);
      const pages = pickPages(business, goal);
      return { text: AUTO_LABEL, update: { pages } };
    }
    case "style":
      return { text: AUTO_LABEL, update: { style: SITE_BUILDER.styles[0] } };
    case "timeline":
      return { text: AUTO_LABEL, update: { timeline: "Standard (1 mese)" } };
    case "budget":
      return { text: AUTO_LABEL, update: { budget: "Da definire in consulenza" } };
    default:
      return { text: AUTO_LABEL, update: {} };
  }
}

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

function getBrandName(business: string): string {
  if (!business || business === AUTO_LABEL) return "TUOBRAND";
  const word = business.split(/[/·]/)[0].trim().split(" ").pop() ?? "Brand";
  return word.toUpperCase().slice(0, 12);
}

function getHeroLine(goal: string, business: string): string {
  if (goal.includes("Prenotazioni")) return "Prenota la tua esperienza";
  if (goal.includes("Vendere")) return "Scopri e acquista ora";
  if (goal.includes("Portfolio")) return "Il tuo brand, al top";
  if (goal.includes("Lancio")) return "Il lancio che meriti";
  if (business.includes("Ristorante")) return "Sapori autentici, online";
  if (business.includes("Hotel")) return "Il tuo soggiorno ideale";
  return "Fatti sentire online";
}

function getCtaLabel(goal: string): string {
  if (goal.includes("Prenotazioni")) return "Prenota ora";
  if (goal.includes("Vendere")) return "Acquista";
  if (goal.includes("lead")) return "Richiedi info";
  return "Contattaci";
}

function getBusinessIcon(business: string): string {
  if (business.includes("Ristorante")) return "🍽️";
  if (business.includes("Hotel")) return "🏨";
  if (business.includes("E-commerce")) return "🛒";
  if (business.includes("Personal Brand")) return "⭐";
  if (business.includes("Professionista")) return "💼";
  if (business.includes("Agenzia")) return "🚀";
  return "✦";
}

function SitePreview({ data }: { data: BuilderData }) {
  const accent = data.style?.accent ?? "#a3ff12";
  const bg = data.style?.bg ?? "#0a0a0a";
  const isMinimal = data.style?.id === "minimal";
  const isBold = data.style?.id === "bold";
  const isCorporate = data.style?.id === "corporate";

  const brandName = getBrandName(data.business);
  const heroLine = getHeroLine(data.goal, data.business);
  const ctaLabel = getCtaLabel(data.goal);
  const icon = getBusinessIcon(data.business);

  const navItems =
    data.pages.length > 0
      ? data.pages.slice(0, 4).map((p) => p.split(" ")[0])
      : ["Home", "Servizi", "Contatti"];

  const progress = [
    data.business,
    data.goal,
    data.pages.length,
    data.style,
    data.timeline,
    data.budget,
  ].filter(Boolean).length;

  return (
    <div className="card-featured rounded-2xl overflow-hidden">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-3 bg-zinc-900/95 border-b border-white/5 backdrop-blur-sm">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        </div>
        <div className="flex-1 mx-2 h-6 rounded-lg bg-black/40 border border-white/5 flex items-center px-3 gap-2">
          <span className="text-[8px] text-zinc-600">🔒</span>
          <span className="text-[10px] text-zinc-500 truncate">
            {brandName.toLowerCase()}.it
          </span>
        </div>
        <motion.span
          key={progress}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full"
          style={{ backgroundColor: `${accent}20`, color: accent }}
        >
          {Math.round((progress / 6) * 100)}%
        </motion.span>
      </div>

      {/* Preview canvas */}
      <div
        className="relative overflow-hidden min-h-[340px] sm:min-h-[380px]"
        style={{ backgroundColor: bg }}
      >
        {/* Ambient glow */}
        <div
          className="absolute top-0 right-0 w-40 h-40 rounded-full blur-[80px] opacity-30 pointer-events-none"
          style={{ backgroundColor: accent }}
        />
        {isBold && (
          <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full blur-[60px] opacity-20 pointer-events-none bg-fuchsia-500" />
        )}

        <div className="relative p-4 sm:p-5 space-y-3">
          {/* Navbar preview */}
          <AnimatePresence mode="wait">
            <motion.div
              key={navItems.join("-")}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <span
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-sm"
                  style={{ backgroundColor: `${accent}25` }}
                >
                  {icon}
                </span>
                <span
                  className="text-[11px] font-black tracking-tight"
                  style={{ color: isMinimal ? "#fff" : accent }}
                >
                  {brandName}
                </span>
              </div>
              <div className="flex gap-1">
                {navItems.map((item, i) => (
                  <span
                    key={item}
                    className="text-[7px] px-1.5 py-0.5 rounded uppercase tracking-wider"
                    style={{
                      color: i === 0 ? accent : "#71717a",
                      backgroundColor: i === 0 ? `${accent}15` : "transparent",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Hero block */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${data.business}-${data.goal}-${data.style?.id}`}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className={`relative rounded-2xl overflow-hidden border border-white/5 ${
                isCorporate ? "bg-blue-950/30" : isBold ? "bg-fuchsia-950/20" : "bg-white/[0.03]"
              }`}
              style={{ minHeight: isBold ? 120 : 100 }}
            >
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  background: isMinimal
                    ? "linear-gradient(135deg, transparent, rgba(255,255,255,0.05))"
                    : `linear-gradient(135deg, ${accent}15, transparent 60%)`,
                }}
              />
              <div className="relative p-4 flex flex-col justify-end h-full min-h-[100px]">
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-[9px] uppercase tracking-[0.2em] mb-1"
                  style={{ color: `${accent}99` }}
                >
                  {data.business || "La tua attività"}
                </motion.p>
                <motion.h4
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className={`font-black leading-tight mb-3 ${
                    isBold ? "text-lg" : "text-base"
                  } ${isMinimal ? "text-white" : ""}`}
                  style={{ color: isMinimal ? undefined : accent }}
                >
                  {heroLine}
                </motion.h4>
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex self-start px-4 py-1.5 rounded-full text-[10px] font-bold text-black"
                  style={{ backgroundColor: accent }}
                >
                  {ctaLabel}
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Content sections grid */}
          <div className="grid grid-cols-2 gap-2">
            {(data.pages.length > 0 ? data.pages.slice(0, 4) : ["Servizi", "Gallery", "About", "Contatti"]).map(
              (page, i) => (
                <motion.div
                  key={page}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                  className="rounded-xl border border-white/5 p-2.5 bg-white/[0.02]"
                >
                  <div
                    className="h-1.5 w-8 rounded-full mb-2"
                    style={{ backgroundColor: i === 0 ? accent : "rgba(255,255,255,0.15)" }}
                  />
                  <p className="text-[8px] text-zinc-500 uppercase tracking-wider truncate">
                    {page.split(" ")[0]}
                  </p>
                  <div className="mt-2 space-y-1">
                    <div className="h-1 w-full rounded-full bg-white/5" />
                    <div className="h-1 w-3/4 rounded-full bg-white/5" />
                  </div>
                </motion.div>
              )
            )}
          </div>

          {/* Style + goal badge row */}
          <motion.div
            layout
            className="flex flex-wrap gap-1.5 pt-1"
          >
            {data.style && (
              <span
                className="text-[8px] px-2 py-0.5 rounded-full border font-medium"
                style={{ borderColor: `${accent}40`, color: accent }}
              >
                {data.style.label}
              </span>
            )}
            {data.goal && (
              <span className="text-[8px] px-2 py-0.5 rounded-full border border-white/10 text-zinc-500">
                {data.goal.split(" ")[0]}
              </span>
            )}
            {data.timeline && (
              <span className="text-[8px] px-2 py-0.5 rounded-full border border-white/10 text-zinc-600">
                ⏱ {data.timeline.split(" ")[0]}
              </span>
            )}
          </motion.div>
        </div>
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

  const handleAutoPick = (stepId: StepId) => {
    const picked = autoPick(stepId, data);
    advance(picked.text, picked.update);
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
    <SectionShell id="ai-sito" tone="cool">
      <div className="max-w-7xl mx-auto relative">
        <SectionHeading
          label="Web Design Premium"
          title="CREA IL TUO SITO"
          subtitle="Rispondi alle domande — o lascia scegliere all'AI — e guarda l'anteprima prendere forma in tempo reale."
          align="center"
          tone="cool"
        />

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-featured rounded-2xl sm:rounded-3xl overflow-hidden bg-black/60 backdrop-blur-sm flex flex-col h-[520px] sm:h-[580px]"
          >
            <div className="px-5 py-4 border-b border-white/5 flex items-center gap-3 bg-zinc-950">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#a3ff12] to-emerald-400 flex items-center justify-center text-black text-xs font-black">
                AI
              </div>
              <div>
                <p className="text-sm font-bold">Eugenio Site Architect</p>
                <p className="text-[10px] text-[#a3ff12] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#a3ff12] animate-pulse" />
                  {typing ? "Sta scrivendo..." : "Online · Anteprima live attiva"}
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
                    {currentStep.id === "business" && (
                      <>
                        {SITE_BUILDER.businessTypes.map((opt) => (
                          <OptionBtn key={opt} onClick={() => advance(opt, { business: opt })}>
                            {opt}
                          </OptionBtn>
                        ))}
                        <OptionBtn onClick={() => handleAutoPick("business")} variant="auto">
                          ✨ {AUTO_LABEL}
                        </OptionBtn>
                      </>
                    )}

                    {currentStep.id === "goal" && (
                      <>
                        {SITE_BUILDER.goals.map((opt) => (
                          <OptionBtn key={opt} onClick={() => advance(opt, { goal: opt })}>
                            {opt}
                          </OptionBtn>
                        ))}
                        <OptionBtn onClick={() => handleAutoPick("goal")} variant="auto">
                          ✨ {AUTO_LABEL}
                        </OptionBtn>
                      </>
                    )}

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
                              data.pages.length ? data.pages.join(", ") : pickPages(data.business, data.goal).join(", "),
                              {
                                pages: data.pages.length
                                  ? data.pages
                                  : pickPages(data.business || "Professionista / Studio", data.goal || pickGoal(data.business)),
                              }
                            )
                          }
                          className="w-full py-3 rounded-xl bg-[#a3ff12] text-black font-bold text-sm hover:brightness-110 transition-all"
                        >
                          Continua →
                        </button>
                        <OptionBtn
                          onClick={() => handleAutoPick("pages")}
                          variant="auto"
                        >
                          ✨ {AUTO_LABEL}
                        </OptionBtn>
                      </div>
                    )}

                    {currentStep.id === "style" && (
                      <>
                        {SITE_BUILDER.styles.map((opt) => (
                          <OptionBtn
                            key={opt.id}
                            onClick={() => advance(opt.label, { style: opt })}
                            accent={opt.accent}
                          >
                            {opt.label}
                          </OptionBtn>
                        ))}
                        <OptionBtn onClick={() => handleAutoPick("style")} variant="auto">
                          ✨ {AUTO_LABEL}
                        </OptionBtn>
                      </>
                    )}

                    {currentStep.id === "timeline" && (
                      <>
                        {SITE_BUILDER.timelines.map((opt) => (
                          <OptionBtn key={opt} onClick={() => advance(opt, { timeline: opt })}>
                            {opt}
                          </OptionBtn>
                        ))}
                        <OptionBtn onClick={() => handleAutoPick("timeline")} variant="auto">
                          ✨ {AUTO_LABEL}
                        </OptionBtn>
                      </>
                    )}

                    {currentStep.id === "budget" && (
                      <>
                        {SITE_BUILDER.budgets.map((opt) => (
                          <OptionBtn key={opt} onClick={() => advance(opt, { budget: opt })}>
                            {opt}
                          </OptionBtn>
                        ))}
                        <OptionBtn onClick={() => handleAutoPick("budget")} variant="auto">
                          ✨ {AUTO_LABEL}
                        </OptionBtn>
                      </>
                    )}

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
                    <p className="text-sm text-zinc-300">Il tuo brief è pronto! Scegli come procedere:</p>
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
            <div className="flex items-center justify-between px-1">
              <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600">Anteprima live</p>
              <p className="text-[10px] text-zinc-700">Si aggiorna ad ogni scelta</p>
            </div>
            <SitePreview data={data} />

            <div className="card-surface rounded-2xl p-5 space-y-3">
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
    </SectionShell>
  );
}

function OptionBtn({
  children,
  onClick,
  accent,
  variant = "default",
}: {
  children: React.ReactNode;
  onClick: () => void;
  accent?: string;
  variant?: "default" | "auto";
}) {
  if (variant === "auto") {
    return (
      <button
        type="button"
        onClick={onClick}
        className="block w-full text-left px-4 py-3 mb-2 text-sm font-medium rounded-xl border border-dashed border-[#a3ff12]/30 text-[#a3ff12]/80 hover:bg-[#a3ff12]/10 hover:border-[#a3ff12]/50 transition-all active:scale-[0.98]"
      >
        {children}
      </button>
    );
  }

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
