"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";

const ICONS = ["◈", "◇", "○", "△", "✦", "⬡"];

type Card = { id: number; icon: string; flipped: boolean; matched: boolean };

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildDeck(): Card[] {
  const pairs = shuffle([...ICONS, ...ICONS]);
  return pairs.map((icon, i) => ({ id: i, icon, flipped: false, matched: false }));
}

export default function MemoryPulse() {
  const [cards, setCards] = useState<Card[]>(() => buildDeck());
  const [picked, setPicked] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [locked, setLocked] = useState(false);

  const won = useMemo(() => cards.every((c) => c.matched), [cards]);

  const reset = () => {
    setCards(buildDeck());
    setPicked([]);
    setMoves(0);
    setLocked(false);
  };

  const flip = (index: number) => {
    if (locked || cards[index].flipped || cards[index].matched) return;

    const nextPicked = [...picked, index];
    const nextCards = cards.map((c, i) => (i === index ? { ...c, flipped: true } : c));
    setCards(nextCards);
    setPicked(nextPicked);

    if (nextPicked.length === 2) {
      setMoves((m) => m + 1);
      setLocked(true);
      const [a, b] = nextPicked;
      const match = nextCards[a].icon === nextCards[b].icon;

      window.setTimeout(() => {
        setCards((prev) =>
          prev.map((c, i) => {
            if (i === a || i === b) {
              return match
                ? { ...c, matched: true, flipped: true }
                : { ...c, flipped: false };
            }
            return c;
          })
        );
        setPicked([]);
        setLocked(false);
      }, match ? 350 : 700);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-950 to-black p-4 sm:p-6">
      <div className="flex items-center justify-between mb-4 gap-3">
        <div>
          <p className="text-[10px] uppercase tracking-[0.25em] text-fuchsia-400">02 · Memory</p>
          <h3 className="text-lg font-bold">Memory Pulse</h3>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <span className="text-zinc-400">Mosse <strong className="text-white">{moves}</strong></span>
          <button
            type="button"
            onClick={reset}
            className="min-h-[40px] px-4 rounded-full border border-white/15 text-xs font-semibold hover:border-[#a3ff12]/40 active:scale-95"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2.5 sm:gap-3 max-w-md mx-auto">
        {cards.map((card, i) => {
          const show = card.flipped || card.matched;
          return (
            <motion.button
              key={card.id}
              type="button"
              onClick={() => flip(i)}
              whileTap={{ scale: 0.94 }}
              className="relative aspect-square rounded-2xl touch-manipulation perspective-[800px]"
              style={{ perspective: 800 }}
              aria-label={show ? card.icon : "Carta coperta"}
            >
              <motion.div
                className="absolute inset-0 rounded-2xl"
                animate={{ rotateY: show ? 180 : 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div
                  className="absolute inset-0 flex items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02]"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <span className="text-zinc-600 text-lg">◆</span>
                </div>
                <div
                  className={`absolute inset-0 flex items-center justify-center rounded-2xl border text-2xl sm:text-3xl ${
                    card.matched
                      ? "border-[#a3ff12]/50 bg-[#a3ff12]/15 text-[#a3ff12]"
                      : "border-fuchsia-400/30 bg-fuchsia-500/10 text-fuchsia-200"
                  }`}
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                  {card.icon}
                </div>
              </motion.div>
            </motion.button>
          );
        })}
      </div>

      {won && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-5 text-center"
        >
          <p className="text-[#a3ff12] font-semibold">Completato in {moves} mosse</p>
          <button
            type="button"
            onClick={reset}
            className="mt-3 min-h-[44px] px-5 rounded-full bg-[#a3ff12] text-black text-sm font-bold"
          >
            Nuova partita
          </button>
        </motion.div>
      )}
    </div>
  );
}
