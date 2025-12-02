export type AspectRatio = "16:9" | "1:1" | "9:16" | "4:3" | "3:4";

export interface ServiceItem {
  title: string;
  description: string;
  iconName: string;
  imageSrc: string;
}

export interface ProjectItem {
  title: string;
  type: string;
  description: string;
  techStack: string[];
  link: string;
  imageSrc: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}

export interface GeneratedImageProps {
  src: string;
  className?: string;
  aspectRatio?: AspectRatio;
  overlayOpacity?: number;
  alt: string;
}