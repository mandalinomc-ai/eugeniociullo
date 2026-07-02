"use client";

import Image from "next/image";
import type { MediaImageProps } from "@/lib/media";

export default function MediaImage({
  src,
  alt,
  fit = "cover",
  position = "center",
  bg = "bg-zinc-950",
  padding = "",
  className = "",
  sizes = "(max-width: 768px) 100vw, 33vw",
  priority = false,
}: MediaImageProps) {
  const fitClass =
    fit === "contain"
      ? "object-contain"
      : fit === "cover-top"
        ? "object-cover object-top"
        : fit === "cover-center"
          ? "object-cover object-center"
          : "object-cover";

  return (
    <div className={`absolute inset-0 ${bg} ${padding}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={`${fitClass} ${className}`}
        style={{ objectPosition: position }}
      />
    </div>
  );
}
