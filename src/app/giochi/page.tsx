import type { Metadata } from "next";
import Link from "next/link";
import OrbitCatch from "@/components/games/OrbitCatch";
import MemoryPulse from "@/components/games/MemoryPulse";
import NeonDodge from "@/components/games/NeonDodge";
import ReactionBloom from "@/components/games/ReactionBloom";

export const metadata: Metadata = {
  title: "Giochi Animati | Eugenio Ciullo",
  description:
    "Mini-giochi grafici con animazioni stile Webflow: Orbit Catch, Memory Pulse, Neon Dodge e Reaction Bloom.",
};

export default function GiochiPage() {
  return (
    <main className="min-h-[100dvh] bg-black text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(163,255,18,0.08),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(168,85,247,0.08),transparent_45%)]" />

      <header className="relative sticky top-0 z-40 border-b border-white/10 bg-black/80 backdrop-blur-xl pt-[var(--safe-top)]">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#a3ff12]">Playground</p>
            <h1 className="text-xl font-black tracking-tight sm:text-2xl">Giochi Animati</h1>
          </div>
          <Link
            href="/"
            className="inline-flex min-h-[40px] items-center rounded-full border border-white/15 px-4 text-xs font-medium text-zinc-400 hover:text-white hover:border-white/30"
          >
            ← Sito
          </Link>
        </div>
      </header>

      <section className="relative mx-auto max-w-6xl px-4 py-10 sm:py-14">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-black tracking-tighter sm:text-5xl">
            Motion da{" "}
            <span className="text-[#a3ff12]">Webflow</span>
            <span className="text-zinc-500">,</span>
            <br />
            energia da gioco.
          </h2>
          <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
            Quattro mini-esperienze touch-first: spring, glow e interazioni fluide. Ideali da
            mostrare su mobile o come break creativo.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <OrbitCatch />
          <MemoryPulse />
          <NeonDodge />
          <ReactionBloom />
        </div>
      </section>
    </main>
  );
}
