"use client";

import Image from "next/image";
import type { GalleryImage } from "@/src/types";

interface LightboxProps {
  images: GalleryImage[];
  selectedIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

export function Lightbox({
  images,
  selectedIndex,
  onClose,
  onNext,
  onPrevious,
}: LightboxProps) {
  if (selectedIndex === null) return null;

  const image = images[selectedIndex];

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-3 sm:p-5"
      onClick={onClose}
    >
      <div
        className="relative flex h-[75vh] w-full max-w-[1100px] items-center justify-center sm:h-[82vh] md:h-[88vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close gallery"
          className="absolute right-1 top-1 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[24px] font-light leading-none text-[#222] shadow-lg transition hover:bg-[#f58220] hover:text-white sm:-right-2 sm:-top-2 sm:h-10 sm:w-10"
        >
          ×
        </button>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onPrevious();
          }}
          aria-label="Previous image"
          className="absolute left-1 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#f58220] text-white shadow-lg transition hover:bg-[#df7014] sm:left-2 sm:h-12 sm:w-12 md:-left-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-5 w-5 sm:h-6 sm:w-6"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        <div className="relative h-full w-full overflow-hidden">
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            fill
            sizes="100vw"
            className="object-contain"
            priority
          />
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Next image"
          className="absolute right-1 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#f58220] text-white shadow-lg transition hover:bg-[#df7014] sm:right-2 sm:h-12 sm:w-12 md:-right-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-5 w-5 sm:h-6 sm:w-6"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>

        <div className="absolute bottom-2 left-1/2 z-30 -translate-x-1/2 rounded-full bg-black/60 px-4 py-1.5 text-xs font-medium text-white sm:bottom-4 sm:text-sm">
          {selectedIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}
