import Image from "next/image";

type BrandLogoProps = {
  variant?: "full" | "mark";
  className?: string;
  showTagline?: boolean;
};

export default function BrandLogo({
  variant = "full",
  className = "",
  showTagline = true,
}: BrandLogoProps) {
  if (variant === "mark") {
    return (
      <Image
        src="/images/logo-icon.png"
        alt="Eugenio Ciullo"
        width={40}
        height={40}
        className={`rounded-xl ${className}`}
        priority
      />
    );
  }

  return (
    <span className={`inline-flex flex-col ${className}`}>
      <Image
        src="/images/logo-wordmark.png"
        alt="Eugenio Ciullo - Digital Marketer"
        width={320}
        height={90}
        className="h-9 sm:h-10 w-auto max-w-[13rem] sm:max-w-[18rem]"
        priority
      />
      {showTagline ? (
        <span className="sr-only">Digital Marketer & Content Creator</span>
      ) : null}
    </span>
  );
}
