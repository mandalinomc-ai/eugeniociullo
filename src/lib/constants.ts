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
  calendlyUrl: "https://calendly.com/eugenio-ciullo/consulenza",
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
    logo: "/images/lil-manda-logo.jpg",
    featured: true,
  },
  {
    name: "HEALTHYSAN",
    logo: "/images/healthysan-logo.jpg",
  },
  {
    name: "AP TRICOSISTEM",
    subtitle: "Cosmoprof & The Lookmaker · Garden Toscana",
    highlight:
      "Partecipazione ufficiale e copertura eventi alle fiere Cosmoprof e The Lookmaker in Toscana presso il Garden",
    logo: "/images/ap-tricosistem-logo.jpg",
    featured: true,
  },
  {
    name: "LE SETTE REGIONI",
    logo: "/images/le-sette-regioni-logo.jpg",
  },
  {
    name: "MISS GRAND INTERNATIONAL",
    logo: "/images/miss-grand-international-logo.jpg",
  },
  {
    name: "THUNDERVAPE STORE",
    logo: "/images/thundervape-logo.jpg",
  },
  {
    name: "ANTUM HOTEL",
    logo: "/images/antum-hotel-logo.jpg",
  },
  {
    name: "AMA EXPERIENCE",
    logo: "/images/ama-experience-logo.jpg",
  },
  {
    name: "THE LOBBY LOUNGE",
    logo: "/images/the-lobby-lounge-logo.jpg",
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
      "Il focus principale di vendita: sessioni personalizzate per sbloccare la crescita del tuo brand.",
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

export const FORM_OBJECTIVES = [
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
] as const;
