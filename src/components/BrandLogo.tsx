import Image from "next/image";

type BrandLogoProps = {
  variant?: "full" | "mark";
  size?: "nav" | "default" | "banner";
  className?: string;
  showTagline?: boolean;
};

const wordmarkSizes = {
  nav: "h-[3.25rem] sm:h-[3.75rem] md:h-20 lg:h-[5.5rem] w-auto max-w-[20rem] sm:max-w-[28rem] md:max-w-[34rem] lg:max-w-[40rem]",
  default: "h-9 sm:h-10 w-auto max-w-[13rem] sm:max-w-[18rem]",
  banner: "w-full h-auto max-w-[min(100%,42rem)] sm:max-w-3xl md:max-w-4xl",
};

const markSizes = {
  nav: "w-[3.25rem] h-[3.25rem] sm:w-[3.75rem] sm:h-[3.75rem] md:w-20 md:h-20",
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
