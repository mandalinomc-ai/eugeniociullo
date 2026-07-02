export const SITE = {
  name: "Eugenio Ciullo",
  title: "Eugenio Ciullo | Digital Marketer & Content Creator",
  description:
    "Digital Marketing con l'anima da Creator. Noi di Eugenio Ciullo & Team — con ZeroAgency — portiamo strategia, content e ADS ai brand che vogliono farsi sentire.",
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

export const TEAM = {
  lead: "Eugenio Ciullo",
  name: "Eugenio Ciullo & Team",
  partner: "ZeroAgency",
  partnerSubtitle: "Agenzia · Benevento",
  shortTagline: "Io in prima linea, team ZeroAgency al fianco.",
} as const;

export const WORK_COLLABORATION = {
  name: "ZeroAgency",
  subtitle: "Agenzia · Benevento · Il nostro team operativo",
  description:
    "Collaborazione lavorativa attuale. Operiamo all'interno della struttura su digital marketing, social media e content: io coordino, il team ZeroAgency supporta produzione ed eventi.",
  logo: "/images/work-fiera.png",
  badge: "Collaborazione attuale",
} as const;

export const BRANDS = [
  {
    name: "HEALTHYSAN",
    subtitle: "Beauty & Spa",
    highlight: "Identità visiva e presenza social per il centro benessere.",
    logo: "/images/logos/healthysan.png",
    logoFit: "contain" as const,
    logoBg: "bg-white",
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
    subtitle: "Bar & Ristorante · Benevento",
    highlight: "Gestione social e comunicazione digitale per il ristorante delle 7 regioni italiane.",
    logo: "/images/logos/le-sette-regioni.png",
    logoFit: "contain" as const,
    logoBg: "bg-zinc-900",
    website: "https://www.ristorantelesetteregioni.it/",
  },
  {
    name: "MISS GRAND INTERNATIONAL",
    subtitle: "Beauty Pageant · International",
    highlight:
      "Meta ADS: 84.732 visualizzazioni, +432% conversazioni messaggi e +149% copertura in 60 giorni.",
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
    logoBg: "bg-black",
    featured: true,
  },
  {
    name: "ANTUM HOTEL",
    subtitle: "Benevento · Hospitality",
    highlight:
      "Case study: Business Lunch, format influencer con @quelladeldigitale, picchi fino a 72.800 views nell'ecosistema AMA & Lobby.",
    logo: "/images/logos/antum-hotel.png",
    logoFit: "contain" as const,
    logoBg: "bg-white",
    featured: true,
    management: "case-study" as const,
  },
  {
    name: "AMA EXPERIENCE",
    subtitle: "Ristorante · Antum Hotel",
    highlight:
      "Accordo cross-brand Antum + Lobby: format chef + host con @quelladeldigitale, reel virali fino a 72K.",
    logo: "/images/logos/ama-experience.png",
    logoFit: "contain" as const,
    logoBg: "bg-white",
    featured: true,
    management: "case-study" as const,
  },
  {
    name: "THE LOBBY LOUNGE",
    subtitle: "Lounge Bar · Eventi",
    highlight: "Parte dell'ecosistema Antum · AMA: eventi lounge e format condivisi con il team.",
    logo: "/images/logos/lobby-lounge.png",
    logoFit: "contain" as const,
    logoBg: "bg-white",
  },
  {
    name: "PARISIO",
    subtitle: "Trattoria Contemporanea · Benevento",
    highlight: "Lancio organico IG + TikTok: 80K+ views, pubblico freddo convertito in clienti — zero sponsor.",
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
    logoBg: "bg-[#1a3d5c]",
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
    impressions: 80840,
    metricLabel: "Visualizzazioni TikTok",
    platform: "TikTok + Instagram",
    timeframe: "Prime settimane",
    result: "Pubblico freddo convertito · locale sold-out",
    tag: "Lanciato da zero",
    preAnalysis:
      "Fase di pre-analisi: audit competitor locali, benchmark food, tone of voice e piano editoriale su Instagram e TikTok prima del primo contenuto.",
    instagramRef:
      "80.840 views TikTok · +2.504% attività profilo IG · tutto organico, zero sponsor · dati da dashboard professionali",
  },
  {
    id: "ittico",
    name: "ITTICO LOCANDA DI MARE",
    impressions: 119111,
    metricLabel: "Visualizzazioni Instagram",
    platform: "Instagram",
    timeframe: "16 giorni",
    result: "Locale SOLD OUT tutti i giorni",
    tag: "Lanciato da zero",
    preAnalysis:
      "Fase di pre-analisi: studio del mercato Telese, analisi target ristorazione di pesce e definizione format Reels prima del go-live.",
    instagramRef: "Dato da Instagram Insights · ultimi 30 giorni · solo Instagram",
  },
] as const;

export const WHATSAPP_BUSINESS_SETUP = {
  title: "WhatsApp Business · Setup operativo",
  subtitle:
    "Oltre al lancio Instagram: configurazione completa WhatsApp Business per gestire prenotazioni e lead senza perdere messaggi.",
  badge: "Post-lancio · Operatività",
  features: [
    { icon: "💬", label: "Frasi rapide preimpostate", detail: "Benvenuto, prenotazione, menu, conferma e follow-up" },
    { icon: "🏷️", label: "Etichette clienti", detail: "Nuovi lead, prenotazioni, VIP ed eventi per segmentare le chat" },
    { icon: "👋", label: "Messaggio di benvenuto", detail: "Risposta automatica ai primi contatti fuori orario" },
    { icon: "📋", label: "Catalogo & info business", detail: "Orari, indirizzo e servizi sempre a portata del cliente" },
  ],
  image: "/images/whatsapp-business-setup.svg",
  imageAlt: "Mockup WhatsApp Business con frasi rapide ed etichette clienti configurate",
  appliesTo: ["PARISIO", "ITTICO", "AMA Experience", "Antum Hotel", "The Lobby Lounge"],
} as const;

/** Screen ecosistema Antum · AMA · The Lobby — periodo di gestione */
const ECOSYSTEM_SCREENS = [
  {
    src: "/images/report-antum-ama-reels-peak-2.png",
    alt: "Reels format chef + host con picchi fino a 72.800 views",
    label: "Format chef + host · fino a 72,8K",
  },
  {
    src: "/images/report-antum-ama-reels-peak-1.png",
    alt: "Reels eventi Ferragosto e cross-brand Antum AMA",
    label: "Eventi & Ferragosto · 50K+",
  },
  {
    src: "/images/report-antum-ama-reels-growth.png",
    alt: "Reel eventi e lifestyle Antum Hotel",
    label: "Eventi & lifestyle · 44K",
  },
  {
    src: "/images/report-antum-ama-reels-mid.png",
    alt: "Reel partnership food Antum AMA",
    label: "Partnership & food · 58K",
  },
] as const;

const ECOSYSTEM_RESULT_METRICS = [
  { label: "Picco singolo reel", value: "72.800", highlight: true },
  { label: "Format virali", value: "50K–72K", highlight: true },
  { label: "Brand coinvolti", value: "3 realtà" },
  { label: "Influencer", value: "@quelladeldigitale" },
] as const;

const ECOSYSTEM_HIGHLIGHTS = [
  { label: "Picco contenuto", value: "72.800 views" },
  { label: "Accordo", value: "Antum + AMA + Lobby" },
  { label: "Trend locale", value: "Influencer marketing HQ" },
] as const;

const ECOSYSTEM_GRAPHIC_WORKS = [
  {
    src: "/images/graphics/ama-dish-01.png",
    alt: "Asset grafico Business Lunch Ama Experience — piatto gourmet del giorno",
    label: "Piatto del giorno",
  },
  {
    src: "/images/graphics/ama-dish-02.png",
    alt: "Asset grafico Business Lunch — risotto e nocciole",
    label: "Risotto & nocciole",
  },
  {
    src: "/images/graphics/ama-dish-03.png",
    alt: "Asset grafico Business Lunch — secondo gourmet",
    label: "Secondo gourmet",
  },
  {
    src: "/images/graphics/ama-dish-04.png",
    alt: "Asset grafico Business Lunch — polpo e purée",
    label: "Polpo & purée",
  },
  {
    src: "/images/graphics/ama-dish-05.png",
    alt: "Asset grafico Business Lunch — uovo e tartufo",
    label: "Uovo & tartufo",
  },
  {
    src: "/images/graphics/ama-dish-06.png",
    alt: "Asset grafico Business Lunch — pasta ripiena",
    label: "Pasta ripiena",
  },
] as const;

const INFLUENCER_VIDEO_PILLARS = [
  {
    title: "Posizione & accessibilità",
    items: [
      "Vicinanza alla stazione e parcheggio interno privato",
      "Servizio transfer verso il centro città",
    ],
  },
  {
    title: "The Lobby Lounge",
    items: [
      "Il salotto di Benevento, aperto a tutti",
      "Aperitivo post-lavoro, card drink+food, coffee moment",
    ],
  },
  {
    title: "Ama Experience",
    items: [
      "Filosofia gourmet e ricerca in cucina",
      "Menu Business Lunch e Business Dinner",
      "Sushi all'italiana e backstage in cucina",
    ],
  },
  {
    title: "Smart working & lifestyle",
    items: [
      "Hall comoda per call e lavoro",
      "Atmosfera internazionale al mattino",
    ],
  },
  {
    title: "Eventi & ricorrenze",
    items: [
      "Chiara: consulenza dedicata per feste e meeting",
      "Cene aziendali, compleanni, lauree e battesimi",
      "Cura della mise en place e degli allestimenti",
    ],
  },
  {
    title: "Suite & pacchetti",
    items: [
      "Soggiorno in suite, cantina e degustazioni",
      "San Valentino, compleanno in camera, gift card",
      "Degustazione + pernottamento",
    ],
  },
] as const;

export const META_ADS_SHOWCASE = [
  {
    id: "miss-grand",
    title: "MISS GRAND INTERNATIONAL ITALY",
    period: "1 mar – 29 apr 2025 · Ultimi 60 giorni",
    spend: "€219,47 investiti",
    adsCount: "2 annunci",
    image: "/images/report-miss-grand-ads.png",
    imageAlt: "Dashboard Meta ADS Miss Grand International Italy — visualizzazioni e conversioni messaggi",
    stats: [
      { label: "Visualizzazioni", value: "84.732", change: "↑ 25,1%" },
      { label: "Copertura", value: "57.401", change: "↑ 149,7%" },
      { label: "Interazioni post", value: "22.406", change: "↑ 100%" },
      { label: "Conv. messaggi", value: "2.177", change: "↑ 432,3%", highlight: true },
    ],
    note: "Campagna Meta ADS gestita dal nostro team: crescita esponenziale delle conversazioni avviate via messaggio nel periodo finale.",
  },
] as const;

export const ONGOING_MANAGEMENT = [
  {
    id: "ecosistema-antum",
    name: "ANTUM · AMA · THE LOBBY",
    handles: ["@antumhotel", "@ama_experience_"],
    subtitle: "Ecosistema hospitality sinergico · Benevento",
    badge: "Case study hospitality",
    period: "Gestione conclusa · inizio marzo 2025",
    scope:
      "Accordo cross-brand tra Antum Hotel, AMA Experience e The Lobby Lounge — content, Reels e influencer marketing.",
    influencer: {
      handle: "@quelladeldigitale",
      timing: "Fine gestione · inizio febbraio 2025",
      title: "Influencer marketing · strategia contenuti",
      description:
        "Nella fase finale della gestione abbiamo progettato 24 video brevi per Reels e TikTok. L'obiettivo: abbandonare la pubblicità fredda e mostrare cosa significa davvero vivere la struttura. Claudia (@quelladeldigitale) guida i contenuti; Eugenio compare nei momenti di coppia (brindisi, suite); Chiara dà voce agli eventi e alle ricorrenze.",
      strategyIntro:
        "Un format editoriale pianificato — non spot improvvisati — con una guida riconoscibile e volti professionali per ogni area dello stabile.",
      gridImage: {
        src: "/images/graphics/claudia-antum-grid.png",
        alt: "Griglia Instagram @antumhotel con Reels di Claudia @quelladeldigitale e asset grafici",
        label: "Profilo @antumhotel · Reels & grafiche",
      },
      pillars: INFLUENCER_VIDEO_PILLARS,
    },
    graphicsWork: {
      title: "Business Lunch · asset grafici ZeroAgency",
      description:
        "Con ZeroAgency abbiamo creato l'asset Business Lunch: un invito a ospiti e clienti esterni a pranzare in struttura con un'offerta dedicata. Ogni giorno una pietanza diversa in foto — per comunicare varietà, qualità gourmet e presenza costante sui social.",
      teamNote:
        "Progettazione grafica, food styling in layout e coerenza visiva con i brand Ama Experience e Antum Hotel.",
      items: ECOSYSTEM_GRAPHIC_WORKS,
    },
    story:
      "Abbiamo strutturato un accordo unico tra AMA, Antum e The Lobby Lounge: stesso linguaggio visivo, format condivisi, contenuti che viaggiano tra hotel, ristorante e lounge. Parallelamente abbiamo sviluppato asset grafici per il Business Lunch e, in chiusura gestione, una strategia influencer con @quelladeldigitale.",
    legacy:
      "Abbiamo portato a Benevento un trend che prima non c'era: influencer marketing con contenuti di qualità e persone preparate, non improvvisate. Anche i video già online hanno beneficiato del nuovo posizionamento una volta ripresa la gestione.",
    exitNote:
      "A inizio marzo 2025 siamo usciti dalla gestione operativa dei profili. Le prove restano in vetrina: format, picchi e metodo che abbiamo lasciato all'ecosistema.",
    metrics: ECOSYSTEM_RESULT_METRICS,
    screens: ECOSYSTEM_SCREENS,
    highlights: ECOSYSTEM_HIGHLIGHTS,
    amaReelsGrid: {
      src: "/images/graphics/ama-reels-grid.png",
      alt: "Griglia Reels @ama_experience_ — format virali, Ventigrani e backstage",
      label: "Vetrina Reels @ama_experience_",
    },
  },
] as const;

export const LAUNCH_REPORTS = [
  {
    id: "parisio",
    title: "PARISIO TRATTORIA CONTEMPORANEA",
    subtitle: "Benevento · Lancio organico TikTok + Instagram",
    period: "Prime settimane dal lancio · zero sponsor",
    organicNote:
      "Abbiamo convertito un pubblico freddo che non ci conosceva: commenti con richieste di indirizzo, recensioni e DM su TikTok — tutto organico, senza campagne a pagamento.",
    collaboration: {
      title: "Collaborazione Nazzareno Parisio × Ventigrani",
      description:
        "Abbiamo fatto collaborare lo chef Nazzareno con Ventigrani: ci siamo organizzati con il partner commerciale Ventigrani e coordinato con lui e il videomaker la produzione dei video da realizzare.",
      video: "/videos/parisio-ventigrani-reel.mp4",
      videoLabel: "Reel collaborazione · senza audio",
    },
    stats: [
      { label: "Views TikTok", value: "80.840", highlight: true },
      { label: "Views Instagram", value: "70.820", highlight: true },
      { label: "Crescita IG", value: "+2.504%" },
      { label: "Interazioni TT", value: "5.137" },
      { label: "Follower TT", value: "+377" },
      { label: "Risultato", value: "SOLD OUT" },
    ],
    frames: [
      {
        src: "/images/parisio/tt-dashboard.png",
        alt: "Dashboard Instagram Parisio — 70.820 visualizzazioni",
        fit: "contain" as const,
        position: "center top",
        bg: "bg-white",
        padding: "p-1",
        label: "Dashboard IG · 70,8K",
      },
      {
        src: "/images/parisio/tt-analytics.png",
        alt: "Analytics TikTok Parisio 80.840 views e crescita 28x",
        fit: "contain" as const,
        position: "center top",
        bg: "bg-white",
        padding: "p-1",
        label: "Analytics TikTok · 28x",
      },
      {
        src: "/images/parisio/tt-inbox.png",
        alt: "Inbox TikTok Parisio con 99+ nuovi follower e attività",
        fit: "contain" as const,
        position: "center top",
        bg: "bg-white",
        padding: "p-1",
        label: "Inbox · 99+ attività",
      },
      {
        src: "/images/parisio/tt-comments-1.png",
        alt: "Commenti TikTok clienti che chiedono indirizzo e lasciano recensioni",
        fit: "contain" as const,
        position: "center top",
        bg: "bg-white",
        padding: "p-1",
        label: "Commenti · conversione",
      },
      {
        src: "/images/parisio/tt-comments-2.png",
        alt: "Commenti TikTok richieste ubicazione e interazioni organiche",
        fit: "contain" as const,
        position: "center top",
        bg: "bg-white",
        padding: "p-1",
        label: "Pubblico freddo → clienti",
      },
    ],
  },
  {
    id: "ittico",
    title: "ITTICO LOCANDA DI MARE",
    subtitle: "Ittico Telese · Lancio locale Instagram",
    period: "2 giu – 1 lug · Ultimi 30 giorni",
    stats: [
      { label: "Visualizzazioni IG", value: "119.111", highlight: true },
      { label: "Nuovi follower", value: "224" },
      { label: "Interazioni", value: "1.877" },
      { label: "Crescita follower", value: "+84,1%" },
      { label: "Follower totali", value: "464" },
      { label: "Contenuti", value: "276" },
    ],
    frames: [
      {
        src: "/images/logos/ittico.png",
        alt: "Logo ITTICO Locanda di Mare",
        fit: "contain" as const,
        position: "center",
        bg: "bg-[#1a3d5c]",
        padding: "p-6 sm:p-8",
        aspect: "aspect-[9/16] max-w-xs mx-auto",
        label: "Brand identity",
      },
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
      "Sessioni personalizzate con Eugenio e il team per sbloccare la crescita del tuo brand con piano d'azione concreto.",
    icon: "🎯",
    gradient: "from-amber-500/20 to-orange-500/10",
    featured: true,
  },
  {
    id: "events",
    title: "Event Management & Booking",
    badge: "NUOVO",
    description:
      "Allestimenti, DJ, stand fiera, proiezioni video/PDF e consulenza. Feste private, corporate e showroom — organizzati dal nostro team.",
    icon: "🎉",
    gradient: "from-pink-500/20 to-rose-500/10",
    link: "#eventi",
  },
] as const;

export const CONTENT_CREATOR = {
  headline: "Seguiamo il tuo brand ovunque sia.",
  subheadline:
    "Content creation flessibile: a distanza, con UGC, sul campo con noi o con il nostro team di operatori ZeroAgency. Per brand e personal brand che vogliono contenuti autentici e strategia dietro ogni frame.",
  modes: [
    {
      id: "remote",
      title: "Gestione a Distanza",
      icon: "🌍",
      description:
        "Briefing, direzione creativa, editing e pubblicazione. Coordiniamo tutto da remoto: tu produci o invii materiale, noi lo trasformiamo in contenuti che convertono.",
      tags: ["Briefing video", "Editing pro", "Calendario editoriale", "Report mensile"],
    },
    {
      id: "ugc",
      title: "Campagne UGC",
      icon: "📱",
      badge: "Trend",
      description:
        "User Generated Content autentico: guidiamo clienti e creator nel produrre video e foto on-brand, poi li ottimizziamo per ADS e social con hook testati.",
      tags: ["Script & storyboard", "Format TikTok/Reels", "Ottimizzazione ADS", "A/B test creativi"],
    },
    {
      id: "onsite",
      title: "Sul Campo · Noi o il Team",
      icon: "🎥",
      description:
        "Per clienti locali ci spostiamo personalmente io e il team. Per eventi più grandi o multi-location mandiamo operatori ZeroAgency con cui lavoriamo ogni giorno.",
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
  image: "/images/antum-hotel-work.png",
  imageAlt: "Content creation on-site - Antum Hotel Benevento",
} as const;

export const EVENT_PRODUCTION = {
  headline: "Eventi che si ricordano.",
  subheadline:
    "Allestimento chiavi in mano, booking artisti e tecnologia per ogni occasione: festa privata, meeting aziendale, stand in fiera o showroom. Un unico referente — noi e il team ZeroAgency — zero stress.",
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
  categoryImages: {
    private: "/images/work-event-stage.png",
    corporate: "/images/ap-tricosistem-meeting.png",
    fair: "/images/work-fiera.png",
    showroom: "/images/parisio-hero.jpg",
  } as const,
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
    description: "Analisi rapida profilo social del prospect per personalizzare la prima consulenza gratuita con il team.",
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
