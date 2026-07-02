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
  logo: "/images/work-fiera.png",
  badge: "Collaborazione attuale",
} as const;

export const BRANDS = [
  {
    name: "LIL MANDA",
    subtitle: "Personal Brand · Rap & Events",
    highlight:
      "Gestione strategica del personal brand: social media, content creation e identità visiva nel mondo rap ed eventi.",
    logo: "/images/logos/lil-manda.png",
    logoFit: "contain" as const,
    logoBg: "bg-black",
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
    logo: "/images/logos/ap-tricosistem.png",
    logoFit: "contain" as const,
    logoBg: "bg-white",
    featured: true,
  },
  {
    name: "LE SETTE REGIONI",
    textOnly: true,
    accent: "#f59e0b",
  },
  {
    name: "MISS GRAND INTERNATIONAL",
    subtitle: "Beauty Pageant · International",
    logo: "/images/logos/miss-grand.png",
    logoFit: "contain" as const,
    logoBg: "bg-white",
  },
  {
    name: "THUNDERVAPE STORE",
    subtitle: "Graphic Design & Social",
    highlight: "Flyer promozionali, branding visivo e gestione social per il punto vendita di Benevento.",
    logo: "/images/logos/thundervape.png",
    logoFit: "contain" as const,
    logoBg: "bg-zinc-900",
    featured: true,
  },
  {
    name: "ANTUM HOTEL",
    subtitle: "Benevento · Hospitality",
    highlight: "Content creation e promozione social per l'hotel, inclusi format Instagram e materiali evento.",
    logo: "/images/logos/antum-hotel.png",
    logoFit: "contain" as const,
    logoBg: "bg-white",
    featured: true,
  },
  {
    name: "AMA EXPERIENCE",
    subtitle: "Ristorante · Antum Hotel",
    highlight: "Gestione social e content creation per il ristorante gourmet: Reels, eventi e crescita organica.",
    logo: "/images/logos/ama-experience.png",
    logoFit: "contain" as const,
    logoBg: "bg-zinc-900",
    featured: true,
  },
  {
    name: "THE LOBBY LOUNGE",
    textOnly: true,
    accent: "#06b6d4",
  },
  {
    name: "PARISIO",
    subtitle: "Trattoria Contemporanea · Benevento",
    highlight: "Lancio da zero: 70.000+ impression in 3 settimane, locale sold-out ogni giorno.",
    logo: "/images/logos/parisio.png",
    logoFit: "contain" as const,
    logoBg: "bg-zinc-100",
    featured: true,
  },
  {
    name: "ITTICO LOCANDA DI MARE",
    subtitle: "Telese · Ristorante di pesce",
    highlight: "119.111 visualizzazioni in 30 giorni, +84% follower e locale sold-out dal lancio.",
    logo: "/images/logos/ittico.png",
    logoFit: "contain" as const,
    logoBg: "bg-[#f5e6d3]",
    featured: true,
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
    id: "parisio",
    name: "PARISIO TRATTORIA CONTEMPORANEA",
    impressions: 70000,
    timeframe: "3 settimane",
    result: "Locale SOLD OUT tutti i giorni",
    tag: "Lanciato da zero",
  },
  {
    id: "ittico",
    name: "ITTICO LOCANDA DI MARE",
    impressions: 100000,
    timeframe: "16 giorni",
    result: "Locale SOLD OUT tutti i giorni",
    tag: "Lanciato da zero",
  },
] as const;

export const LAUNCH_REPORTS = [
  {
    id: "ittico",
    title: "ITTICO LOCANDA DI MARE",
    subtitle: "Ittico Telese · Lancio locale Instagram",
    period: "2 giu – 1 lug · Ultimi 30 giorni",
    stats: [
      { label: "Visualizzazioni", value: "119.111", highlight: true },
      { label: "Nuovi follower", value: "224" },
      { label: "Interazioni", value: "1.877" },
      { label: "Crescita follower", value: "+84,1%" },
      { label: "Follower totali", value: "464" },
      { label: "Contenuti", value: "276" },
    ],
    frames: [
      {
        src: "/images/report-ittico-followers.png",
        alt: "Report follower ITTICO +84,1% in 30 giorni",
        fit: "contain" as const,
        position: "center top",
        bg: "bg-white",
        padding: "p-3 sm:p-4",
        aspect: "aspect-[9/16] max-w-xs mx-auto",
        label: "Crescita follower",
      },
      {
        src: "/images/report-ittico-profilo.png",
        alt: "Profilo Instagram ITTICO Telese - 119.111 visualizzazioni",
        fit: "contain" as const,
        position: "center top",
        bg: "bg-white",
        padding: "p-3 sm:p-4",
        aspect: "aspect-[9/16] max-w-xs mx-auto",
        label: "Profilo & reach",
      },
      {
        src: "/images/report-ittico-dashboard.png",
        alt: "Dashboard professionisti ITTICO - interazioni e nuovi follower",
        fit: "contain" as const,
        position: "center top",
        bg: "bg-white",
        padding: "p-3 sm:p-4",
        aspect: "aspect-[9/16] max-w-xs mx-auto",
        label: "Dashboard Insights",
      },
    ],
  },
  {
    id: "parisio",
    title: "PARISIO TRATTORIA CONTEMPORANEA",
    subtitle: "Benevento · Lancio trattoria contemporanea",
    period: "Prime 3 settimane dal lancio",
    stats: [
      { label: "Impression", value: "70.000+", highlight: true },
      { label: "Tempo", value: "3 settimane" },
      { label: "Risultato", value: "SOLD OUT giornaliero" },
      { label: "Settore", value: "Food & Hospitality" },
    ],
    frames: [
      {
        src: "/images/parisio-chef.jpg",
        alt: "Chef Nazzareno Parisio - Parisio Trattoria Contemporanea",
        fit: "cover-top" as const,
        position: "center 15%",
        bg: "bg-black",
        aspect: "aspect-[3/4] sm:aspect-[4/5]",
        label: "Brand & chef",
      },
      {
        src: "/images/report-ama-reels-2.png",
        alt: "Content food Parisio / AMA Experience - alta qualità visiva",
        fit: "contain" as const,
        position: "center top",
        bg: "bg-black",
        padding: "p-2",
        aspect: "aspect-[9/16] max-w-xs mx-auto",
        label: "Content Reels",
      },
      {
        src: "/images/report-ama-reels-1.png",
        alt: "Vetrina Instagram contenuti gastronomici",
        fit: "contain" as const,
        position: "center top",
        bg: "bg-black",
        padding: "p-2",
        aspect: "aspect-[9/16] max-w-xs mx-auto",
        label: "Vetrina social",
      },
    ],
  },
  {
    id: "antum",
    title: "ANTUM HOTEL",
    subtitle: "Benevento · Content & crescita profilo",
    period: "Report Instagram · Vetrina Reels",
    stats: [
      { label: "Format", value: "Reels & Stories" },
      { label: "Focus", value: "Hospitality" },
      { label: "Reach", value: "Views fino a 72K" },
      { label: "Engagement", value: "Alto su food & room" },
    ],
    frames: [
      {
        src: "/images/report-antum-reels-1.png",
        alt: "Vetrina Reels Antum Hotel - contenuti hospitality",
        fit: "contain" as const,
        position: "center top",
        bg: "bg-black",
        padding: "p-2",
        aspect: "aspect-[9/16] max-w-xs mx-auto",
        label: "Reels grid 1",
      },
      {
        src: "/images/report-antum-reels-2.png",
        alt: "Antum Hotel Reels - San Valentino e food content",
        fit: "contain" as const,
        position: "center top",
        bg: "bg-black",
        padding: "p-2",
        aspect: "aspect-[9/16] max-w-xs mx-auto",
        label: "Reels grid 2",
      },
      {
        src: "/images/report-antum-reels-3.png",
        alt: "Antum Hotel Reels - cocktail e chef content",
        fit: "contain" as const,
        position: "center top",
        bg: "bg-black",
        padding: "p-2",
        aspect: "aspect-[9/16] max-w-xs mx-auto",
        label: "Reels grid 3",
      },
    ],
  },
  {
    id: "ama",
    title: "AMA EXPERIENCE",
    subtitle: "Ristorante gourmet · Antum Hotel",
    period: "Report Instagram · Performance Reels",
    stats: [
      { label: "Top view", value: "72.800" },
      { label: "Format", value: "Food & eventi" },
      { label: "Copertura", value: "Multi-format" },
      { label: "Brand", value: "Casual dining premium" },
    ],
    frames: [
      {
        src: "/images/report-ama-reels-3.png",
        alt: "AMA Experience Reels - chef e pasta format",
        fit: "contain" as const,
        position: "center top",
        bg: "bg-black",
        padding: "p-2",
        aspect: "aspect-[9/16] max-w-xs mx-auto",
        label: "Chef & kitchen",
      },
      {
        src: "/images/report-ama-reels-1.png",
        alt: "AMA Experience Reels - eventi corporate e food",
        fit: "contain" as const,
        position: "center top",
        bg: "bg-black",
        padding: "p-2",
        aspect: "aspect-[9/16] max-w-xs mx-auto",
        label: "Eventi & corporate",
      },
      {
        src: "/images/report-ama-reels-2.png",
        alt: "AMA Experience Reels - Ferragosto e pool event",
        fit: "contain" as const,
        position: "center top",
        bg: "bg-black",
        padding: "p-2",
        aspect: "aspect-[9/16] max-w-xs mx-auto",
        label: "Eventi stagionali",
      },
    ],
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
      "Remote, UGC, on-site o team dedicato. Foto, video, drone e editing pro per brand e personal brand.",
    icon: "🎬",
    gradient: "from-emerald-500/20 to-cyan-500/10",
    link: "#content-creator",
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
      "Allestimenti, DJ, stand fiera, proiezioni video/PDF e consulenza. Feste private, corporate e showroom.",
    icon: "🎉",
    gradient: "from-pink-500/20 to-rose-500/10",
    link: "#eventi",
  },
] as const;

export const CONTENT_CREATOR = {
  headline: "Seguo il tuo brand ovunque sia.",
  subheadline:
    "Content creation flessibile: a distanza, con UGC, sul campo con me o con il mio team di operatori. Per brand e personal brand che vogliono contenuti autentici e strategia dietro ogni frame.",
  modes: [
    {
      id: "remote",
      title: "Gestione a Distanza",
      icon: "🌍",
      description:
        "Briefing, direzione creativa, editing e pubblicazione. Coordino tutto da remoto: tu produci o invii materiale, io trasformo in contenuti che convertono.",
      tags: ["Briefing video", "Editing pro", "Calendario editoriale", "Report mensile"],
    },
    {
      id: "ugc",
      title: "Campagne UGC",
      icon: "📱",
      badge: "Trend",
      description:
        "User Generated Content autentico: guido clienti e creator nel produrre video e foto on-brand, poi li ottimizzo per ADS e social con hook testati.",
      tags: ["Script & storyboard", "Format TikTok/Reels", "Ottimizzazione ADS", "A/B test creativi"],
    },
    {
      id: "onsite",
      title: "Sul Campo · Io o il Team",
      icon: "🎥",
      description:
        "Per clienti locali vado personalmente. Per eventi più grandi o multi-location mando un team di operatori fidati con cui lavoro da anni.",
      tags: ["Copertura eventi", "Team dedicato", "Multi-camera", "Consegna rapida"],
    },
  ],
  gear: [
    { label: "iPhone 16 Pro", detail: "Reels, Stories, UGC mobile-first", highlight: false as const },
    { label: "Macchina fotografica", detail: "Eventi, ritratti, prodotti", highlight: false as const },
    { label: "Riprese con Drone", detail: "Disponibili · Location, fiere, hotel, eventi", highlight: true as const },
  ],
  process: [
    { step: "01", title: "Brief & Strategia", text: "Obiettivo, tone of voice, piattaforme e KPI definiti insieme." },
    { step: "02", title: "Produzione", text: "Remote, UGC, on-site o team — scegliamo il modello giusto per te." },
    { step: "03", title: "Post & Pubblicazione", text: "Editing, copy, hashtag, scheduling e ottimizzazione format." },
    { step: "04", title: "Analisi & Scale", text: "Report performance, iterazione creativa e boost ADS sui winner." },
  ],
  image: "/images/ap-tricosistem-team.png",
  imageAlt: "Eugenio Ciullo e team content creation AP TRICOSISTEM",
} as const;

export const EVENT_PRODUCTION = {
  headline: "Eventi che si ricordano.",
  subheadline:
    "Allestimento chiavi in mano, booking artisti e tecnologia per ogni occasione: festa privata, meeting aziendale, stand in fiera o showroom. Un unico referente, zero stress.",
  categories: [
    { id: "private", label: "Festa Privata", icon: "🥂" },
    { id: "corporate", label: "Meeting Aziendale", icon: "🏢" },
    { id: "fair", label: "Stand Fiera", icon: "🎪" },
    { id: "showroom", label: "Showroom & Launch", icon: "✨" },
  ],
  services: [
    {
      id: "dj",
      title: "Booking DJ & Intrattenimento",
      description: "DJ set per feste private, eventi corporate e party brand. Deejay, vocalist, ballerine e performer su misura.",
      icon: "🎧",
    },
    {
      id: "setup",
      title: "Allestimento Eventi",
      description: "Setup completo: luci, audio, palco, decorazioni, photo booth, Selfie 360, pirotecnica e allestimenti party.",
      icon: "🎪",
    },
    {
      id: "stand",
      title: "Stand Fiera & Expo",
      description: "Progettazione, allestimento stand, materiali promo, hostess e copertura social live da fiere come Cosmoprof.",
      icon: "📐",
    },
    {
      id: "projection",
      title: "Proiezione Video & PDF",
      description: "Schermi, proiettori e supporto tecnico per presentazioni aziendali, lancio prodotti, showroom e convention.",
      icon: "📽️",
    },
    {
      id: "consulting",
      title: "Consulenza Event Strategy",
      description: "Concept, timeline, budget, fornitori e coordinamento. Dalla idea alla consegna, con un piano chiaro.",
      icon: "🎯",
    },
    {
      id: "extra",
      title: "Servizi Aggiuntivi",
      description: "Barman, catering drink, hostess, security, transfer e tutto ciò che serve per un evento completo.",
      icon: "➕",
    },
  ],
  extras: [
    "Selfie 360°",
    "Pirotecnica",
    "Barman & Cocktail",
    "Vocalist live",
    "Ballerine & Performer",
    "Copertura foto/video",
  ],
  image: "/images/work-event-stage.png",
  imageSecondary: "/images/ap-tricosistem-presentation.png",
} as const;

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
  eligible: ["Creazione Siti Web", "Content & UGC", "Social Management (3+ mesi)", "Event Management", "Pacchetti Combo"],
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
  { id: "content", label: "Content Creation / UGC" },
  { id: "events", label: "Allestimento Eventi / DJ" },
  { id: "consulting", label: "Consulenza 1to1" },
] as const;

export const BUDGET_OPTIONS = [
  { id: "starter", label: "Fino a €500/mese" },
  { id: "growth", label: "€500 – €1.500/mese" },
  { id: "scale", label: "€1.500 – €5.000/mese" },
  { id: "enterprise", label: "Oltre €5.000/mese" },
  { id: "website", label: "Progetto sito web (una tantum)" },
] as const;
