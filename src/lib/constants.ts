export const SITE = {
  name: "Eugenio Ciullo",
  title: "Eugenio Ciullo | Digital Marketer & Content Creator",
  description:
    "Digital Marketing con l'anima da Creator. Strategia, Content & ADS per brand che vogliono farsi sentire.",
  whatsapp: "393483470654",
  whatsappDisplay: "348 347 0654",
  email: "eugeniociullo96@gmail.com",
  supportHours: "9:00 – 17:00",
  supportHoursLabel: "Assistenza Lun–Ven, 9:00 – 17:00",
  consultationUrl:
    "https://wa.me/393483470654?text=Ciao%20Eugenio!%20Vorrei%20prenotare%20una%20consulenza%201to1.",
} as const;

export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${SITE.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const WORK_COLLABORATION = {
  name: "ZeroAgency",
  subtitle: "Agenzia Offline · Benevento",
  description:
    "Collaborazione lavorativa attuale. Opero all'interno della struttura su digital marketing, social media e content per i progetti dell'agenzia.",
  logo: "/images/zeroagency-logo.jpg",
  badge: "Collaborazione attuale",
} as const;

export const BRANDS = [
  {
    name: "LIL MANDA",
    subtitle: "Personal Brand · Rap & Events",
    highlight:
      "Gestione strategica del personal brand: social media, content creation e identità visiva nel mondo rap ed eventi.",
    logo: "/images/work-event-stage.png",
    featured: true,
  },
  {
    name: "HEALTHYSAN",
    textOnly: true,
    accent: "#22c55e",
  },
  {
    name: "AP TRICOSISTEM",
    subtitle: "Cosmoprof & The Lookmaker · Garden Toscana",
    highlight:
      "Partecipazione ufficiale e copertura eventi alle fiere Cosmoprof e The Lookmaker in Toscana presso il Garden",
    logo: "/images/ap-tricosistem-cosmoprof.png",
    featured: true,
  },
  {
    name: "LE SETTE REGIONI",
    textOnly: true,
    accent: "#f59e0b",
  },
  {
    name: "MISS GRAND INTERNATIONAL",
    textOnly: true,
    accent: "#ec4899",
  },
  {
    name: "THUNDERVAPE STORE",
    subtitle: "Graphic Design & Social",
    highlight: "Flyer promozionali, branding visivo e gestione social per il punto vendita di Benevento.",
    logo: "/images/thundervape-design.png",
    featured: true,
  },
  {
    name: "ANTUM HOTEL",
    subtitle: "Benevento · Hospitality",
    highlight: "Content creation e promozione social per l'hotel, inclusi format Instagram e materiali evento.",
    logo: "/images/antum-hotel-work.png",
    featured: true,
  },
  {
    name: "AMA EXPERIENCE",
    textOnly: true,
    accent: "#8b5cf6",
  },
  {
    name: "THE LOBBY LOUNGE",
    textOnly: true,
    accent: "#06b6d4",
  },
] as const;

export const WORK_GALLERY = [
  {
    id: "cosmoprof",
    src: "/images/ap-tricosistem-cosmoprof.png",
    alt: "Eugenio Ciullo a Cosmoprof Bologna per AP TRICOSISTEM",
    label: "Cosmoprof 2025",
    category: "Eventi & Fiere",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: "presentation",
    src: "/images/ap-tricosistem-presentation.png",
    alt: "Presentazione evento AP TRICOSISTEM",
    label: "Event Management",
    category: "Sul Campo",
    span: "md:col-span-2",
  },
  {
    id: "analytics",
    src: "/images/analytics-meta-ads.png",
    alt: "Report prestazioni Meta ADS - 31.799 visualizzazioni",
    label: "31.799 Views · CPC €0,07",
    category: "Risultati ADS",
    span: "md:col-span-1",
  },
  {
    id: "fiera",
    src: "/images/work-fiera.png",
    alt: "Eugenio Ciullo in fiera professionale",
    label: "Copertura Fiere",
    category: "Sul Campo",
    span: "md:col-span-1",
  },
  {
    id: "meeting",
    src: "/images/ap-tricosistem-meeting.png",
    alt: "Incontro professionale AP TRICOSISTEM",
    label: "AP TRICOSISTEM",
    category: "Clienti",
    span: "md:col-span-1",
  },
  {
    id: "team",
    src: "/images/ap-tricosistem-team.png",
    alt: "Team AP TRICOSISTEM evento",
    label: "Team & Networking",
    category: "Eventi",
    span: "md:col-span-1",
  },
  {
    id: "stage",
    src: "/images/work-event-stage.png",
    alt: "Allestimento evento professionale",
    label: "Allestimenti Evento",
    category: "Event Management",
    span: "md:col-span-1",
  },
  {
    id: "antum",
    src: "/images/antum-hotel-work.png",
    alt: "Content creation Antum Hotel Benevento",
    label: "Antum Hotel",
    category: "Content Creation",
    span: "md:col-span-1",
  },
  {
    id: "thundervape-design",
    src: "/images/thundervape-design.png",
    alt: "Graphic design flyer Thunder Vape",
    label: "Graphic Design",
    category: "Progetti",
    span: "md:col-span-1",
  },
  {
    id: "thundervape-print",
    src: "/images/thundervape-print.png",
    alt: "Stampa flyer Thunder Vape",
    label: "Print & Delivery",
    category: "Progetti",
    span: "md:col-span-1",
  },
] as const;

export const LANCI_DA_ZERO = [
  {
    name: "PARISIO TRATTORIA CONTEMPORANEA",
    impressions: 70000,
    timeframe: "3 settimane",
    result: "Locale SOLD OUT tutti i giorni",
    tag: "Lanciato da zero",
  },
  {
    name: "ITTICO LOCANDA DI MARE",
    impressions: 100000,
    timeframe: "16 giorni",
    result: "Locale SOLD OUT tutti i giorni",
    tag: "Lanciato da zero",
  },
] as const;

export const SERVICES = [
  {
    id: "websites",
    title: "Creazione Siti Web Premium",
    badge: "NUOVO",
    description:
      "Siti veloci, SEO-ready e mobile-first. Design su misura, integrazione social/ADS e funnel di conversione integrato.",
    icon: "🌐",
    gradient: "from-cyan-500/20 to-blue-600/10",
    featured: true,
  },
  {
    id: "social",
    title: "Social Media Management & ADS",
    description:
      "Strategia, Funnel, Meta ADS e Report Mensili per far crescere la tua presenza online con dati concreti.",
    icon: "📊",
    gradient: "from-violet-600/20 to-fuchsia-600/10",
  },
  {
    id: "content",
    title: "Content Creation",
    description:
      "Foto e Video professionali con iPhone 16 Pro e macchina fotografica dedicata per eventi ad alto impatto.",
    icon: "🎬",
    gradient: "from-emerald-500/20 to-cyan-500/10",
  },
  {
    id: "consulting",
    title: "Consulenza Strategica 1to1",
    description:
      "Sessioni personalizzate per sbloccare la crescita del tuo brand con piano d'azione concreto.",
    icon: "🎯",
    gradient: "from-amber-500/20 to-orange-500/10",
    featured: true,
  },
  {
    id: "events",
    title: "Event Management & Booking",
    badge: "NUOVO",
    description:
      "Organizzazione eventi chiavi in mano. Barman, Deejay, Vocalist, Ballerine, Allestimenti party, Selfie 360 e Pirotecnica.",
    icon: "🎉",
    gradient: "from-pink-500/20 to-rose-500/10",
  },
] as const;

export const TRUST_STATS = [
  { value: "170K+", label: "Impression generate" },
  { value: "31.799", label: "Views campagna Meta" },
  { value: "€0,07", label: "CPC medio ottimizzato" },
  { value: "10+", label: "Brand gestiti" },
  { value: "2", label: "Lanci sold-out da zero" },
  { value: "<5min", label: "Risposta assistente AI" },
] as const;

export const PAYMENT_PLANS = {
  headline: "Pagamenti flessibili disponibili",
  description:
    "Per siti web, pacchetti social e progetti eventi puoi dilazionare il pagamento in 2–3 rate senza interessi, previo accordo.",
  eligible: ["Creazione Siti Web", "Social Management (3+ mesi)", "Event Management", "Pacchetti Combo"],
} as const;

export const SITE_BUILDER = {
  businessTypes: [
    "Ristorante / Bar",
    "Hotel / B&B",
    "E-commerce",
    "Personal Brand",
    "Professionista / Studio",
    "Agenzia / Servizi",
    "Altro",
  ],
  goals: [
    "Generare lead e contatti",
    "Vendere online",
    "Prenotazioni / Booking",
    "Portfolio e credibilità",
    "Lancio nuovo brand",
  ],
  pages: [
    "Home impattante",
    "Chi Siamo / Story",
    "Servizi / Menu",
    "Gallery / Portfolio",
    "Testimonial",
    "Blog / News",
    "Shop / Catalogo",
    "Contatti + Mappa",
    "FAQ",
  ],
  styles: [
    { id: "luxury-dark", label: "Luxury Dark", accent: "#a3ff12", bg: "#0a0a0a" },
    { id: "minimal", label: "Minimal Premium", accent: "#ffffff", bg: "#111111" },
    { id: "bold", label: "Bold Creativo", accent: "#f472b6", bg: "#0f0a14" },
    { id: "corporate", label: "Corporate Clean", accent: "#3b82f6", bg: "#0c1222" },
  ],
  timelines: ["Urgente (2–3 settimane)", "Standard (1 mese)", "Flessibile (2+ mesi)", "Sto esplorando"],
  budgets: [
    "Fino a €800",
    "€800 – €2.000",
    "€2.000 – €5.000",
    "Oltre €5.000",
    "Da definire in consulenza",
  ],
} as const;

export const AI_AUTOMATION = [
  {
    id: "qualify",
    title: "Qualifica Lead Automatica",
    description: "Ogni richiesta viene analizzata, classificata e instradata verso consulenza o preventivo in meno di 5 minuti.",
    icon: "⚡",
  },
  {
    id: "site-brief",
    title: "Brief Sito con AI",
    description: "Il cliente descrive l'idea e riceve subito struttura pagine, stile consigliato e stima orientativa.",
    icon: "🤖",
  },
  {
    id: "assist",
    title: "Assistente 24/7",
    description: "Risposte su servizi, orari e disponibilità anche fuori orario — zero lead persi.",
    icon: "💬",
  },
  {
    id: "audit",
    title: "Audit Social Express",
    description: "Analisi rapida profilo social del prospect per personalizzare la prima consulenza gratuita.",
    icon: "🔍",
  },
] as const;

export const FORM_OBJECTIVES = [
  { id: "website", label: "Creazione Sito Web" },
  { id: "social", label: "Social / ADS" },
  { id: "content", label: "Content Creation" },
  { id: "events", label: "Organizzazione Eventi" },
  { id: "consulting", label: "Consulenza 1to1" },
] as const;

export const BUDGET_OPTIONS = [
  { id: "starter", label: "Fino a €500/mese" },
  { id: "growth", label: "€500 – €1.500/mese" },
  { id: "scale", label: "€1.500 – €5.000/mese" },
  { id: "enterprise", label: "Oltre €5.000/mese" },
  { id: "website", label: "Progetto sito web (una tantum)" },
] as const;
