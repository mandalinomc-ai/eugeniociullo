"use client";

import TrustMarquee from "@/components/TrustMarquee";
import Brands from "@/components/Brands";
import LanciDaZero from "@/components/LanciDaZero";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionShell from "@/components/ui/SectionShell";

export default function CasiStudio() {
  return (
    <SectionShell id="casi-studio" tone="results">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Prove & Risultati"
          title="Risultati che nascono da un ecosistema digitale completo."
          subtitle="Strategia, contenuti, gestione social, campagne ADS e presenza online lavorano insieme. I numeri di Ittico, Parisio e Antum — 119k views, sold-out, crescita organica — sono il frutto di tutto il digitale coordinato, non di un singolo canale."
          align="center"
          tone="results"
        />
      </div>

      <TrustMarquee />

      <LanciDaZero embedded />
      <Brands embedded />
    </SectionShell>
  );
}
