import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Eugenio Ciullo | Digital Marketer",
    short_name: "Eugenio Ciullo",
    description: "Digital Marketing con l'anima da Creator. Strategia, Content & ADS.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/images/eugenio-portrait.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
