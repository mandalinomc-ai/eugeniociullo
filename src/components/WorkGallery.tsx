"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import MediaImage from "@/components/ui/MediaImage";
import { WORK_GALLERY } from "@/lib/constants";
import type { MediaFit } from "@/lib/media";

const GALLERY_MEDIA: Record<string, { fit: MediaFit; position: string; bg?: string; padding?: string }> = {
  cosmoprof: { fit: "cover-top", position: "center 20%" },
  presentation: { fit: "cover-center", position: "center" },
  analytics: { fit: "contain", position: "center", bg: "bg-zinc-900", padding: "p-3 sm:p-4" },
  fiera: { fit: "cover-top", position: "center 25%" },
  meeting: { fit: "cover-center", position: "center 30%" },
  team: { fit: "cover-top", position: "center 20%" },
  stage: { fit: "cover-center", position: "center" },
  antum: { fit: "contain", position: "center", bg: "bg-black", padding: "p-2" },
  "thundervape-design": { fit: "contain", position: "center", bg: "bg-zinc-900", padding: "p-3" },
  "thundervape-print": { fit: "cover-center", position: "center" },
};

export default function WorkGallery() {
  return (
    <section id="lavori" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Portfolio Visivo"
          title="Sul campo. Con i dati. Con i risultati."
          subtitle="Foto dal lavoro quotidiano: fiere, eventi, content creation, graphic design e performance ADS."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 auto-rows-[180px] sm:auto-rows-[200px]">
          {WORK_GALLERY.map((item, i) => {
            const media = GALLERY_MEDIA[item.id] ?? { fit: "cover-center" as const, position: "center" };
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`group relative rounded-2xl overflow-hidden gradient-border ${item.span}`}
              >
                <MediaImage
                  src={item.src}
                  alt={item.alt}
                  fit={media.fit}
                  position={media.position}
                  bg={media.bg ?? "bg-zinc-950"}
                  padding={media.padding ?? ""}
                  className="transition-transform duration-700 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity pointer-events-none" />

                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 text-[9px] font-bold tracking-widest uppercase bg-black/60 backdrop-blur-sm border border-white/10 text-zinc-300 rounded-full">
                    {item.category}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                  <p className="text-sm sm:text-base font-bold group-hover:text-[#a3ff12] transition-colors">
                    {item.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
