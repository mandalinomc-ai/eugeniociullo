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
        src="/logo-mark.svg"
        alt="Eugenio Ciullo"
        width={40}
        height={40}
        className={className}
        priority
      />
    );
  }

  return (
    <span className={`inline-flex flex-col ${className}`}>
      <Image
        src="/logo.svg"
        alt="Eugenio Ciullo - Digital Marketer"
        width={260}
        height={54}
        className="h-8 sm:h-9 w-auto max-w-[11.5rem] sm:max-w-none"
        priority
      />
      {showTagline ? (
        <span className="sr-only">Digital Marketer & Content Creator</span>
      ) : null}
    </span>
  );
}
