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
          title="Case study che parlano da soli."
          subtitle="Sold-out, view organiche a 6 cifre e brand che crescono — ecco i numeri reali del nostro lavoro."
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
