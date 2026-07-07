import Image from "next/image";

type BrandLogoProps = {
  variant?: "full" | "mark";
  size?: "nav" | "default" | "banner";
  className?: string;
  showTagline?: boolean;
};

const wordmarkSizes = {
  nav: "h-11 sm:h-12 md:h-14 w-auto max-w-[16rem] sm:max-w-[22rem] md:max-w-[26rem]",
  default: "h-9 sm:h-10 w-auto max-w-[13rem] sm:max-w-[18rem]",
  banner: "w-full h-auto max-w-[min(100%,42rem)] sm:max-w-3xl md:max-w-4xl",
};

const markSizes = {
  nav: "w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14",
  default: "w-10 h-10",
  banner: "w-16 h-16 sm:w-20 sm:h-20",
};

export default function BrandLogo({
  variant = "full",
  size = "default",
  className = "",
  showTagline = true,
}: BrandLogoProps) {
  if (variant === "mark") {
    return (
      <Image
        src="/images/logo-icon.png"
        alt="Eugenio Ciullo"
        width={180}
        height={180}
        className={`rounded-xl object-contain ${markSizes[size]} ${className}`}
        priority
      />
    );
  }

  return (
    <span className={`inline-flex flex-col ${className}`}>
      <Image
        src="/images/logo-wordmark.png"
        alt="Eugenio Ciullo - Digital Marketer"
        width={1280}
        height={360}
        className={wordmarkSizes[size]}
        priority
      />
      {showTagline ? (
        <span className="sr-only">Digital Marketer & Content Creator</span>
      ) : null}
    </span>
  );
}
