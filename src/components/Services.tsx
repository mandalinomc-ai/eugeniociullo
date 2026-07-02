"use client";

import { motion } from "framer-motion";
import MediaImage from "@/components/ui/MediaImage";
import SectionHeading from "@/components/ui/SectionHeading";
import GlowButton from "@/components/ui/GlowButton";
import { SERVICES, SITE } from "@/lib/constants";

const serviceImages = [
  { src: "/images/ap-tricosistem-presentation.png", alt: "Event management AP TRICOSISTEM", label: "Eventi & Presentazioni", fit: "cover-top" as const, position: "center 25%" },
  { src: "/images/antum-hotel-work.png", alt: "Content creation Antum Hotel", label: "Content & Social", fit: "contain" as const, position: "center", bg: "bg-black", padding: "p-2" },
  { src: "/images/work-event-stage.png", alt: "Allestimento evento professionale", label: "Event Management", fit: "cover-center" as const, position: "center" },
];

export default function Services() {
  return (
    <section id="servizi" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="I Miei Servizi"
          title="Tutto ciò che serve per farti sentire."
          subtitle="Cinque pilastri — siti web, social, content, consulenza ed eventi — per costruire presenza e risultati misurabili."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative gradient-border rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 hover:glow-accent transition-all duration-500 overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between gap-3 mb-5 sm:mb-6">
                  <span className="text-3xl sm:text-4xl shrink-0">{service.icon}</span>
                  <div className="flex flex-wrap gap-2 justify-end">
                    {"badge" in service && service.badge && (
                      <span className="px-2.5 sm:px-3 py-1 text-[10px] font-black tracking-widest uppercase bg-[#a3ff12] text-black rounded-full">
                        {service.badge}
                      </span>
                    )}
                    {"featured" in service && service.featured && (
                      <span className="px-2.5 sm:px-3 py-1 text-[10px] font-black tracking-widest uppercase border border-[#a3ff12]/50 text-[#a3ff12] rounded-full">
                        Focus Vendita
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight mb-3 sm:mb-4 group-hover:text-[#a3ff12] transition-colors">
                  {service.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">{service.description}</p>

                {"link" in service && service.link && (
                  <div className="mt-5">
                    <GlowButton href={service.link} variant="outline" className="w-full sm:w-auto text-xs sm:text-sm">
                      Scopri di più →
                    </GlowButton>
                  </div>
                )}

                {"featured" in service && service.featured && (
                  <div className="mt-6 sm:mt-8">
                    <GlowButton
                      href={service.id === "websites" ? "#ai-sito" : SITE.consultationUrl}
                      variant="outline"
                      external={service.id !== "websites"}
                      className="w-full sm:w-auto"
                    >
                      {service.id === "websites" ? "CREA IL TUO SITO →" : "Prenota via WhatsApp →"}
                    </GlowButton>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4"
        >
          {serviceImages.map((img) => (
            <div
              key={img.src}
              className="relative h-48 sm:h-56 rounded-2xl overflow-hidden gradient-border group"
            >
              <MediaImage
                src={img.src}
                alt={img.alt}
                fit={img.fit}
                position={img.position}
                bg={img.bg ?? "bg-zinc-950"}
                padding={img.padding ?? ""}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-4">
                <span className="text-sm font-bold">{img.label}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
