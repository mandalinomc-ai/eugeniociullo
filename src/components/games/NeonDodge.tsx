"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

type Drop = { id: number; x: number; y: number; speed: number; good: boolean; size: number };

export default function NeonDodge() {
  const areaRef = useRef<HTMLDivElement>(null);
  const [playerX, setPlayerX] = useState(50);
  const [drops, setDrops] = useState<Drop[]>([]);
  const [score, setScore] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [over, setOver] = useState(false);
  const idRef = useRef(0);
  const playerXRef = useRef(50);

  useEffect(() => {
    playerXRef.current = playerX;
  }, [playerX]);

  const start = () => {
    setScore(0);
    setDrops([]);
    setOver(false);
    setPlaying(true);
    setPlayerX(50);
    playerXRef.current = 50;
  };

  const move = useCallback((clientX: number) => {
    const el = areaRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPlayerX(Math.min(92, Math.max(8, pct)));
  }, []);

  useEffect(() => {
    if (!playing) return;

    const spawn = window.setInterval(() => {
      idRef.current += 1;
      setDrops((prev) => [
        ...prev.slice(-18),
        {
          id: idRef.current,
          x: 8 + Math.random() * 84,
          y: -8,
          speed: 0.7 + Math.random() * 1.1 + Math.min(score / 80, 1.2),
          good: Math.random() > 0.35,
          size: 14 + Math.random() * 10,
        },
      ]);
    }, 420);

    const loop = window.setInterval(() => {
      setDrops((prev) => {
        const next: Drop[] = [];
        let hit = false;
        let gained = 0;

        for (const d of prev) {
          const y = d.y + d.speed;
          const nearPlayer = y > 78 && y < 94 && Math.abs(d.x - playerXRef.current) < 9;

          if (nearPlayer) {
            if (d.good) gained += 5;
            else hit = true;
            continue;
          }
          if (y < 108) next.push({ ...d, y });
        }

        if (gained) setScore((s) => s + gained);
        if (hit) {
          setPlaying(false);
          setOver(true);
        }
        return next;
      });
    }, 16);

    return () => {
      clearInterval(spawn);
      clearInterval(loop);
    };
  }, [playing, score]);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-950 to-black p-4 sm:p-6">
      <div className="flex items-center justify-between mb-4 gap-3">
        <div>
          <p className="text-[10px] uppercase tracking-[0.25em] text-cyan-400">03 · Drift</p>
          <h3 className="text-lg font-bold">Neon Dodge</h3>
        </div>
        <span className="text-sm text-zinc-400">
          Score <strong className="text-white">{score}</strong>
        </span>
      </div>

      <div
        ref={areaRef}
        className="relative mx-auto h-[340px] sm:h-[400px] max-w-md overflow-hidden rounded-2xl border border-white/5 bg-[linear-gradient(180deg,rgba(34,211,238,0.06),transparent_40%),radial-gradient(ellipse_at_bottom,rgba(163,255,18,0.08),transparent_50%)] touch-none select-none"
        onPointerMove={(e) => playing && move(e.clientX)}
        onPointerDown={(e) => {
          (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
          if (playing) move(e.clientX);
        }}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/50 to-transparent" />

        <AnimatePresence>
          {drops.map((d) => (
            <motion.div
              key={d.id}
              className="absolute rounded-full"
              style={{
                left: `${d.x}%`,
                top: `${d.y}%`,
                width: d.size,
                height: d.size,
                marginLeft: -d.size / 2,
                background: d.good
                  ? "radial-gradient(circle at 30% 30%, #a3ff12, #4ade80)"
                  : "radial-gradient(circle at 30% 30%, #fb7185, #e11d48)",
                boxShadow: d.good
                  ? "0 0 18px rgba(163,255,18,0.55)"
                  : "0 0 18px rgba(244,63,94,0.55)",
              }}
              initial={{ scale: 0.4, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
            />
          ))}
        </AnimatePresence>

        <motion.div
          className="absolute bottom-6 h-3 w-14 -translate-x-1/2 rounded-full bg-white shadow-[0_0_24px_rgba(163,255,18,0.65)]"
          style={{ left: `${playerX}%` }}
          animate={{ boxShadow: ["0 0 16px #a3ff12aa", "0 0 28px #a3ff12", "0 0 16px #a3ff12aa"] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />

        {!playing && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/60 backdrop-blur-sm px-6 text-center">
            <p className="text-sm text-zinc-300">
              {over
                ? `Game Over · ${score} punti`
                : "Scorri per muoverti. Raccogli il verde, evita il rosso."}
            </p>
            <button
              type="button"
              onClick={start}
              className="min-h-[48px] px-6 rounded-full bg-cyan-400 text-black font-bold text-sm hover:brightness-110 active:scale-95"
            >
              {over ? "Rigioca" : "Inizia"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
