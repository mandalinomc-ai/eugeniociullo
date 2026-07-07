"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

type BrandLogoProps = {
  variant?: "full" | "mark";
  size?: "nav" | "default" | "banner";
  className?: string;
  showTagline?: boolean;
  animated?: boolean;
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

const SMOKE_PARTICLES = [
  { left: "18%", width: "38%", delay: 0, duration: 3.2 },
  { left: "42%", width: "28%", delay: 0.9, duration: 2.8 },
  { left: "30%", width: "34%", delay: 1.6, duration: 3.6 },
  { left: "52%", width: "22%", delay: 2.2, duration: 2.5 },
  { left: "24%", width: "30%", delay: 0.4, duration: 3.9 },
] as const;

function LogoSmoke({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden logo-smoke-mask ${className}`}
      aria-hidden
    >
      {SMOKE_PARTICLES.map((p, i) => (
        <motion.span
          key={i}
          className="absolute bottom-0 rounded-full bg-[#a3ff12]/50 blur-[6px] sm:blur-[8px]"
          style={{
            left: p.left,
            width: p.width,
            height: "28%",
          }}
          initial={{ y: "70%", opacity: 0, scale: 0.85 }}
          animate={{
            y: ["70%", "-90%"],
            opacity: [0, 0.55, 0.35, 0],
            scale: [0.85, 1.05, 0.95],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeOut",
          }}
        />
      ))}
      {SMOKE_PARTICLES.slice(0, 3).map((p, i) => (
        <motion.span
          key={`wisp-${i}`}
          className="absolute bottom-0 rounded-full bg-[#c8ff5a]/35 blur-[10px] sm:blur-[12px]"
          style={{
            left: `calc(${p.left} + 8%)`,
            width: `calc(${p.width} * 0.6)`,
            height: "18%",
          }}
          initial={{ y: "60%", opacity: 0 }}
          animate={{
            y: ["60%", "-70%"],
            opacity: [0, 0.4, 0],
            x: [0, i % 2 === 0 ? 6 : -6, 0],
          }}
          transition={{
            duration: p.duration + 0.8,
            repeat: Infinity,
            delay: p.delay + 0.5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function LogoGlow({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`pointer-events-none absolute inset-[-18%] rounded-full bg-[#a3ff12]/25 blur-xl sm:blur-2xl ${className}`}
      aria-hidden
      animate={{
        opacity: [0.25, 0.55, 0.3],
        scale: [0.92, 1.08, 0.95],
      }}
      transition={{
        duration: 3.2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

function AnimatedMarkImage({
  size,
  className,
  animate,
}: {
  size: keyof typeof markSizes;
  className: string;
  animate: boolean;
}) {
  const imgClass = `relative z-10 rounded-xl object-contain ${markSizes[size]} ${className}`;

  if (!animate) {
    return (
      <Image
        src="/images/logo-icon.png"
        alt="Eugenio Ciullo"
        width={180}
        height={180}
        className={imgClass}
        priority
      />
    );
  }

  return (
    <motion.div
      className={`relative inline-flex items-center justify-center shrink-0 ${markSizes[size]}`}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 400, damping: 24 }}
    >
      <LogoGlow />
      <LogoSmoke />
      <motion.div
        className="relative z-10 w-full h-full"
        animate={{
          filter: [
            "brightness(1) drop-shadow(0 0 6px rgba(163,255,18,0.25))",
            "brightness(1.12) drop-shadow(0 0 16px rgba(163,255,18,0.55))",
            "brightness(1.04) drop-shadow(0 0 10px rgba(163,255,18,0.35))",
          ],
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/images/logo-icon.png"
          alt="Eugenio Ciullo"
          width={180}
          height={180}
          className={`w-full h-full rounded-xl object-contain ${className}`}
          priority
        />
      </motion.div>
    </motion.div>
  );
}

function AnimatedWordmark({
  size,
  className,
  showTagline,
  animate,
}: {
  size: keyof typeof wordmarkSizes;
  className: string;
  showTagline: boolean;
  animate: boolean;
}) {
  const imgClass = `${wordmarkSizes[size]} ${className}`;

  if (!animate) {
    return (
      <span className={`inline-flex flex-col ${className}`}>
        <Image
          src="/images/logo-wordmark.png"
          alt="Eugenio Ciullo - Digital Marketer"
          width={1280}
          height={360}
          className={imgClass}
          priority
        />
        {showTagline ? (
          <span className="sr-only">Digital Marketer & Content Creator</span>
        ) : null}
      </span>
    );
  }

  return (
    <span className={`relative inline-flex flex-col ${className}`}>
      <motion.span
        className="relative inline-block"
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
      >
        {/* Glow + fumo sulla zona cervello (sinistra del wordmark) */}
        <span
          className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 h-[88%] aspect-square"
          aria-hidden
        >
          <LogoGlow className="inset-[-12%]" />
          <LogoSmoke />
        </span>

        <motion.span
          className="relative block"
          animate={{
            filter: [
              "brightness(1) drop-shadow(0 0 4px rgba(163,255,18,0.15))",
              "brightness(1.06) drop-shadow(0 0 12px rgba(163,255,18,0.35))",
              "brightness(1.02) drop-shadow(0 0 8px rgba(163,255,18,0.22))",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/images/logo-wordmark.png"
            alt="Eugenio Ciullo - Digital Marketer"
            width={1280}
            height={360}
            className={imgClass}
            priority
          />
        </motion.span>
      </motion.span>
      {showTagline ? (
        <span className="sr-only">Digital Marketer & Content Creator</span>
      ) : null}
    </span>
  );
}

export default function BrandLogo({
  variant = "full",
  size = "default",
  className = "",
  showTagline = true,
  animated = true,
}: BrandLogoProps) {
  const reduceMotion = useReducedMotion();
  const shouldAnimate = animated && !reduceMotion;

  if (variant === "mark") {
    return (
      <AnimatedMarkImage size={size} className={className} animate={shouldAnimate} />
    );
  }

  return (
    <AnimatedWordmark
      size={size}
      className={className}
      showTagline={showTagline}
      animate={shouldAnimate}
    />
  );
}
