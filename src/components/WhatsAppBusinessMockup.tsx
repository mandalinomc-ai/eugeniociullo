"use client";

const LABELS = ["Nuovi lead", "Prenotazioni", "VIP", "Eventi"] as const;

const QUICK_REPLIES = [
  { text: "Ciao! Grazie per il messaggio 👋", shortcut: "/benvenuto" },
  { text: "Per prenotare: giorno, ora e persone", shortcut: "/prenotazione" },
  { text: "Ecco il menu aggiornato e le promo 🍽️", shortcut: "/menu" },
  { text: "Confermiamo la tua richiesta. A presto!", shortcut: "/conferma" },
] as const;

export default function WhatsAppBusinessMockup() {
  return (
    <div className="h-full min-h-[300px] sm:min-h-[420px] bg-[#0b141a] text-[#e9edef] flex flex-col">
      <div className="bg-gradient-to-b from-[#075E54] to-[#128C7E] px-4 py-5 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-lg shrink-0">
            💬
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Antum · Business</p>
            <p className="text-[11px] text-[#d9fdd3]">WhatsApp Business</p>
          </div>
        </div>
      </div>

      <div className="flex-1 p-4 space-y-5 overflow-y-auto">
        <div className="rounded-xl bg-[#1f2c34] px-4 py-3 text-xs text-[#8696a0]">
          🔍 Cerca o inizia nuova chat
        </div>

        <div>
          <p className="text-[10px] font-bold tracking-widest text-[#25D366] mb-2">ETICHETTE CLIENTI</p>
          <div className="flex flex-wrap gap-2">
            {LABELS.map((label) => (
              <span
                key={label}
                className="px-3 py-1.5 rounded-full text-[11px] border border-[#25D366]/40 bg-[#1f2c34] text-[#e9edef]"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[10px] font-bold tracking-widest text-[#25D366] mb-2">FRASI RAPIDE</p>
          <div className="space-y-2">
            {QUICK_REPLIES.map((reply) => (
              <div key={reply.shortcut} className="rounded-xl bg-[#005c4b] px-4 py-3">
                <p className="text-xs text-[#e9edef] leading-relaxed">{reply.text}</p>
                <p className="text-[10px] text-[#99beb3] mt-1">{reply.shortcut}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-[#25D366]/20 bg-[#1f2c34]/80 px-4 py-3">
          <p className="text-[10px] text-[#8696a0] uppercase tracking-widest mb-1">Messaggio di benvenuto</p>
          <p className="text-xs text-[#d9fdd3]">
            Attivo fuori orario · risponde automaticamente ai primi contatti
          </p>
        </div>
      </div>
    </div>
  );
}
