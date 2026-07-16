"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const TARGET_MS = 500;

export default function ReactionBloom() {
  const [phase, setPhase] = useState<"idle" | "wait" | "go" | "result">("idle");
  const [startAt, setStartAt] = useState(0);
  const [reaction, setReaction] = useState<number | null>(null);
  const [best, setBest] = useState<number | null>(null);
  const waitTimer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (waitTimer.current) window.clearTimeout(waitTimer.current);
    };
  }, []);

  const arm = () => {
    setPhase("wait");
    setReaction(null);
    if (waitTimer.current) window.clearTimeout(waitTimer.current);
    const delay = 1200 + Math.random() * 2200;
    waitTimer.current = window.setTimeout(() => {
      setStartAt(performance.now());
      setPhase("go");
    }, delay);
  };

  const tap = () => {
    if (phase === "wait") {
      if (waitTimer.current) window.clearTimeout(waitTimer.current);
      setPhase("result");
      setReaction(-1);
      return;
    }
    if (phase !== "go") return;
    const ms = Math.round(performance.now() - startAt);
    setReaction(ms);
    setBest((b) => (b === null ? ms : Math.min(b, ms)));
    setPhase("result");
  };

  const label =
    phase === "wait"
      ? "Aspetta il verde…"
      : phase === "go"
        ? "TAP!"
        : phase === "result"
          ? reaction === -1
            ? "Troppo presto"
            : `${reaction} ms`
          : "Pronto?";

  const bg =
    phase === "go"
      ? "from-[#a3ff12]/30 to-emerald-900/40"
      : phase === "wait"
        ? "from-rose-500/20 to-rose-950/40"
        : "from-white/5 to-transparent";

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-950 to-black p-4 sm:p-6">
      <div className="flex items-center justify-between mb-4 gap-3">
        <div>
          <p className="text-[10px] uppercase tracking-[0.25em] text-amber-300">04 · Reflex</p>
          <h3 className="text-lg font-bold">Reaction Bloom</h3>
        </div>
        {best !== null && (
          <span className="text-sm text-zinc-400">
            Best <strong className="text-[#a3ff12]">{best} ms</strong>
          </span>
        )}
      </div>

      <motion.button
        type="button"
        onClick={() => {
          if (phase === "idle" || phase === "result") arm();
          else tap();
        }}
        className={`relative mx-auto flex h-56 w-full max-w-md items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${bg} touch-manipulation`}
        whileTap={{ scale: 0.985 }}
      >
        <motion.div
          className="absolute inset-0 opacity-40"
          animate={
            phase === "go"
              ? { scale: [1, 1.4, 1], opacity: [0.2, 0.5, 0.2] }
              : { scale: 1, opacity: 0.15 }
          }
          transition={{ duration: 0.9, repeat: phase === "go" ? Infinity : 0 }}
          style={{
            background:
              "radial-gradient(circle at center, rgba(163,255,18,0.6), transparent 60%)",
          }}
        />
        <div className="relative z-10 text-center px-4">
          <p className="text-3xl sm:text-4xl font-black tracking-tight">{label}</p>
          {phase === "result" && reaction !== null && reaction > 0 && (
            <p className="mt-2 text-sm text-zinc-400">
              {reaction <= TARGET_MS ? "Riflessi da creator ⚡" : "Puoi fare meglio"}
            </p>
          )}
          {(phase === "idle" || phase === "result") && (
            <p className="mt-3 text-xs text-zinc-500">Tocca per iniziare</p>
          )}
        </div>
      </motion.button>
    </div>
  );
}
