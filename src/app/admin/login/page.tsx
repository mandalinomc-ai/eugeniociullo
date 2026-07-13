"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, Suspense, useState } from "react";
import Link from "next/link";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get("next") || "/admin/appunti";

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = (await res.json()) as { error?: string };

      if (!res.ok) {
        setError(data.error || "Accesso negato");
        return;
      }

      router.replace(next);
      router.refresh();
    } catch {
      setError("Errore di connessione. Riprova.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-[100dvh] bg-black text-white flex items-center justify-center px-4 pt-[var(--safe-top)] pb-[var(--safe-bottom)]">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#a3ff12] mb-2">Area riservata</p>
          <h1 className="text-2xl font-bold tracking-tight">Eugenio Ciullo</h1>
          <p className="text-sm text-zinc-500 mt-2">Accedi al quaderno appunti clienti</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="card-featured rounded-3xl p-6 sm:p-8 bg-black/60 border border-white/10 space-y-5"
        >
          <div>
            <label htmlFor="admin-password" className="text-xs uppercase tracking-widest text-zinc-500 mb-2 block">
              Password admin
            </label>
            <input
              id="admin-password"
              type="password"
              name="password"
              autoComplete="current-password"
              inputMode="text"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full min-h-[52px] px-4 py-3.5 rounded-2xl bg-white/5 border border-white/10 focus:border-[#a3ff12]/50 focus:outline-none focus:ring-1 focus:ring-[#a3ff12]/30 text-base touch-manipulation"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading || !password}
            className="w-full min-h-[52px] rounded-2xl bg-[#a3ff12] text-black font-bold text-base hover:brightness-110 active:scale-[0.98] disabled:opacity-40 touch-manipulation"
          >
            {loading ? "Accesso..." : "Entra"}
          </button>
        </form>

        <p className="text-center mt-6">
          <Link href="/" className="text-xs text-zinc-600 hover:text-zinc-400">
            ← Torna al sito pubblico
          </Link>
        </p>
      </div>
    </main>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-[100dvh] bg-black flex items-center justify-center text-zinc-500 text-sm">
          Caricamento...
        </main>
      }
    >
      <LoginForm />
    </Suspense>
  );
}
