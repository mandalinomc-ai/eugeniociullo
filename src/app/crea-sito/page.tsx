import Link from "next/link";
import Navbar from "@/components/Navbar";
import SiteBuilderAI from "@/components/SiteBuilderAI";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

export const metadata = {
  title: "Crea il tuo sito | Eugenio Ciullo",
  description: "Site Architect AI — brief guidato per il tuo sito web premium.",
};

export default function CreaSitoPage() {
  return (
    <main className="relative bg-black min-h-screen">
      <Navbar />
      <div className="pt-20 pb-4 px-4 sm:px-6 max-w-7xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-[#a3ff12] transition-colors"
        >
          ← Torna alla homepage
        </Link>
      </div>
      <SiteBuilderAI />
      <Footer />
      <WhatsAppFab />
    </main>
  );
}
