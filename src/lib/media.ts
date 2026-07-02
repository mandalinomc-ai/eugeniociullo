export type MediaFit = "cover" | "contain" | "cover-top" | "cover-center";

export type MediaImageProps = {
  src: string;
  alt: string;
  fit?: MediaFit;
  position?: string;
  bg?: string;
  padding?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export type MediaFrame = {
  src: string;
  alt: string;
  fit?: MediaFit;
  position?: string;
  bg?: string;
  padding?: string;
  aspect?: string;
  label?: string;
};
