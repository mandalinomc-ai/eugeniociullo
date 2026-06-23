"use client";

import { motion } from "framer-motion";
import { PAYMENT_PLANS } from "@/lib/constants";

export default function PaymentBanner() {
  return (
    <section className="relative py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="gradient-border rounded-2xl sm:rounded-3xl p-6 sm:p-10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#a3ff12]/5 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#a3ff12]/30 text-[10px] font-bold tracking-widest uppercase text-[#a3ff12] mb-4">
                💳 Pagamenti flessibili
              </span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-3">
                {PAYMENT_PLANS.headline}
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                {PAYMENT_PLANS.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {PAYMENT_PLANS.eligible.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/5"
                >
                  <span className="text-[#a3ff12] text-sm shrink-0">✓</span>
                  <span className="text-xs sm:text-sm text-zinc-300 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
