"use client";

import Image from "next/image";

import { Stagger, StaggerItem } from "@/components/motion/stagger";

type GalleryImage = { src: string; alt: string };

type AnimatedGalleryProps = {
  images: readonly GalleryImage[];
  className?: string;
  ariaLabel?: string;
  sizes?: string;
};

export function AnimatedGallery({
  images,
  className = "grid grid-cols-2 gap-2.5 px-[5%] pb-10 lg:grid-cols-4",
  ariaLabel,
  sizes = "(min-width: 1024px) 25vw, 50vw",
}: AnimatedGalleryProps) {
  return (
    <section aria-label={ariaLabel}>
      <Stagger className={className}>
        {images.map((image) => (
          <StaggerItem key={image.src} className="relative aspect-[4/3]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes={sizes}
              className="object-cover"
            />
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}