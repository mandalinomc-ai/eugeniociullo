"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionShell from "@/components/ui/SectionShell";
import { AI_AUTOMATION } from "@/lib/constants";

export default function AutomationHub() {
  return (
    <SectionShell tone="base" compact>
      <div className="max-w-7xl mx-auto relative">
        <SectionHeading
          label="AI Automation"
          title="Tecnologia che lavora mentre dormi."
          subtitle="Sistema intelligente integrato nel sito: qualifica lead, genera brief, assiste clienti e prepara consulenze personalizzate."
          align="center"
          tone="cool"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {AI_AUTOMATION.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group card-surface-hover rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{item.icon}</span>
                <span className="w-2 h-2 rounded-full bg-cyan-400/70" />
              </div>
              <h3 className="text-base font-black tracking-tight mb-2 group-hover:text-cyan-100 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <p className="text-xs text-zinc-600 uppercase tracking-[0.25em]">
            Powered by Eugenio Ciullo · AI + Strategia Umana
          </p>
        </motion.div>
      </div>
    </SectionShell>
  );
}
