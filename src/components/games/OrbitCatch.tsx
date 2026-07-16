"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

type Orb = { id: number; angle: number; radius: number; speed: number; hue: number };

export default function OrbitCatch() {
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [playing, setPlaying] = useState(false);
  const [orbs, setOrbs] = useState<Orb[]>([]);
  const [flash, setFlash] = useState<"good" | "bad" | null>(null);
  const idRef = useRef(0);
  const tickRef = useRef<number | null>(null);

  const spawn = useCallback(() => {
    idRef.current += 1;
    setOrbs((prev) => [
      ...prev.slice(-7),
      {
        id: idRef.current,
        angle: Math.random() * Math.PI * 2,
        radius: 70 + Math.random() * 90,
        speed: 0.012 + Math.random() * 0.02,
        hue: Math.random() > 0.5 ? 72 : 280,
      },
    ]);
  }, []);

  useEffect(() => {
    if (!playing || lives <= 0) return;
    const spawnInterval = window.setInterval(spawn, 900);
    tickRef.current = window.setInterval(() => {
      setOrbs((prev) =>
        prev.map((o) => ({ ...o, angle: o.angle + o.speed }))
      );
    }, 16) as unknown as number;

    return () => {
      clearInterval(spawnInterval);
      if (tickRef.current) clearInterval(tickRef.current);
    };
  }, [playing, lives, spawn]);

  useEffect(() => {
    if (lives <= 0) setPlaying(false);
  }, [lives]);

  const start = () => {
    setScore(0);
    setLives(3);
    setOrbs([]);
    setPlaying(true);
    spawn();
  };

  const catchOrb = (id: number) => {
    if (!playing) return;
    setOrbs((prev) => prev.filter((o) => o.id !== id));
    setScore((s) => s + 10);
    setFlash("good");
    window.setTimeout(() => setFlash(null), 200);
  };

  const miss = () => {
    if (!playing || orbs.length === 0) return;
    setLives((l) => l - 1);
    setFlash("bad");
    window.setTimeout(() => setFlash(null), 250);
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-950 to-black p-4 sm:p-6">
      <div className="flex items-center justify-between mb-4 gap-3">
        <div>
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#a3ff12]">01 · Orbit</p>
          <h3 className="text-lg font-bold">Orbit Catch</h3>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <span className="text-zinc-400">Score <strong className="text-white">{score}</strong></span>
          <span className="text-zinc-400">Vite <strong className="text-[#a3ff12]">{"♥".repeat(lives)}{"♡".repeat(Math.max(0, 3 - lives))}</strong></span>
        </div>
      </div>

      <div
        className="relative mx-auto aspect-square max-w-md rounded-full border border-white/5 bg-[radial-gradient(circle_at_center,rgba(163,255,18,0.08),transparent_55%)] cursor-crosshair"
        onClick={miss}
      >
        <motion.div
          className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a3ff12]"
          animate={{ scale: [1, 1.25, 1], boxShadow: ["0 0 12px #a3ff12", "0 0 28px #a3ff12", "0 0 12px #a3ff12"] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        />

        <AnimatePresence>
          {orbs.map((orb) => {
            const x = Math.cos(orb.angle) * orb.radius;
            const y = Math.sin(orb.angle) * orb.radius;
            return (
              <motion.button
                key={orb.id}
                type="button"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, x, y }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                onClick={(e) => {
                  e.stopPropagation();
                  catchOrb(orb.id);
                }}
                className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 touch-manipulation"
                style={{
                  background: `radial-gradient(circle at 30% 30%, hsl(${orb.hue} 90% 70%), hsl(${orb.hue} 80% 45%))`,
                  boxShadow: `0 0 20px hsl(${orb.hue} 90% 50% / 0.55)`,
                }}
                aria-label="Cattura orbita"
              />
            );
          })}
        </AnimatePresence>

        <AnimatePresence>
          {flash && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.35 }}
              exit={{ opacity: 0 }}
              className={`pointer-events-none absolute inset-0 rounded-full ${flash === "good" ? "bg-[#a3ff12]" : "bg-rose-500"}`}
            />
          )}
        </AnimatePresence>

        {!playing && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/55 backdrop-blur-sm rounded-full">
            <p className="text-sm text-zinc-300 px-6 text-center">
              {lives <= 0 ? `Game Over · ${score} punti` : "Tocca le sfere in orbita. Evita i miss."}
            </p>
            <button
              type="button"
              onClick={start}
              className="min-h-[48px] px-6 rounded-full bg-[#a3ff12] text-black font-bold text-sm hover:brightness-110 active:scale-95"
            >
              {lives <= 0 ? "Rigioca" : "Inizia"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
