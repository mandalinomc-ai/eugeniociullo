"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminLogout() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin/login");
    router.refresh();
  };

  return (
    <button
      type="button"
      onClick={handleLogout}
      disabled={loading}
      className="text-xs font-medium text-zinc-500 border border-white/10 rounded-full px-3 py-2 min-h-[40px] inline-flex items-center touch-manipulation hover:text-zinc-300 hover:border-white/20 disabled:opacity-50"
    >
      {loading ? "..." : "Esci"}
    </button>
  );
}
