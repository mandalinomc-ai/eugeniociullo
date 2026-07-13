import type { Metadata } from "next";
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import AdminLogout from "@/components/admin/AdminLogout";

export const metadata: Metadata = {
  title: "Appunti Cliente | Admin",
  description: "Quaderno digitale riservato per schede cliente.",
  robots: { index: false, follow: false },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "EC Appunti",
  },
};

export default function AdminAppuntiPage() {
  return (
    <main className="min-h-[100dvh] bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-xl pt-[var(--safe-top)]">
        <div className="flex items-center justify-between gap-3 px-4 py-3 max-w-3xl mx-auto">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#a3ff12]">Admin · Quaderno</p>
            <h1 className="text-lg font-bold leading-tight">Eugenio Ciullo</h1>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="text-xs font-medium text-zinc-400 border border-white/10 rounded-full px-3 py-2 min-h-[40px] inline-flex items-center touch-manipulation"
            >
              Sito →
            </Link>
            <AdminLogout />
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 pt-4">
        <QuoteForm standalone />
      </div>
    </main>
  );
}
