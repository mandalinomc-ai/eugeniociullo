import { SITE } from "@/lib/constants";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.name,
    jobTitle: "Digital Marketer & Content Creator",
    worksFor: {
      "@type": "Organization",
      name: "ZeroAgency",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Benevento",
        addressCountry: "IT",
      },
    },
    email: SITE.email,
    telephone: `+${SITE.whatsapp}`,
    url: "https://eugeniociullo.vercel.app",
    sameAs: [`https://wa.me/${SITE.whatsapp}`],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Benevento",
      addressCountry: "IT",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
