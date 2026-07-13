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
      { src: "/images/logo-icon.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/images/logo-icon.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
    shortcuts: [
      {
        name: "Appunti Cliente",
        short_name: "Appunti",
        description: "Quaderno digitale per schede cliente",
        url: "/admin/appunti",
        icons: [{ src: "/images/logo-icon.png", sizes: "512x512", type: "image/png" }],
      },
    ],
  };
}
