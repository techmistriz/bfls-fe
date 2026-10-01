"use client";

import Image from "next/image";
import { useEffect, useState, useCallback } from "react";

import { PageBanner } from "@/src/components/layout/PageBanner";
import SubscribeSection from "@/src/components/sections/SubscribeSection";
import { useGallery } from "@/src/hooks/useGallery";
import { useEvents } from "@/src/hooks/useEvents";

interface GalleryImage {
  src: string;
  alt: string;
}

export default function GalleryBanner() {
  const { events } = useEvents();
  const eventId = events[0]?.id;

  const { gallery, loading } = useGallery(eventId);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages: GalleryImage[] = gallery.map((image, index) => ({
    src: image,
    alt: `BFLS Gallery ${index + 1}`,
  }));

  console.log("galleryImages", galleryImages);

  const openPopup = (index: number) => {
    setSelectedImage(index);
  };

  const closePopup = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const nextImage = useCallback(() => {
    setSelectedImage((current) => {
      if (current === null || !galleryImages.length) {
        return null;
      }

      return (current + 1) % galleryImages.length;
    });
  }, [galleryImages.length]);

  const previousImage = useCallback(() => {
    setSelectedImage((current) => {
      if (current === null || !galleryImages.length) {
        return null;
      }

      return (current - 1 + galleryImages.length) % galleryImages.length;
    });
  }, [galleryImages.length]);

  useEffect(() => {
    if (selectedImage === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePopup();
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }

      if (event.key === "ArrowLeft") {
        previousImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedImage, closePopup, nextImage, previousImage]);

  return (
    <div className="w-full overflow-hidden">
      <PageBanner
        backgroundImage="/images/bg_banner.png"
        title="Gallery"
        subtitle=""
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
      />

      <section className="w-full bg-white px-5 py-20 max-md:px-4 max-md:py-16 max-sm:px-[15px] max-sm:py-12">
        <div className="mx-auto mt-7 max-w-[1170px] px-4 sm:mt-8 sm:px-6 max-sm:mt-0 max-sm:px-0">
          {loading && (
            <div className="py-20 text-center text-sm text-gray-500">
              Loading gallery...
            </div>
          )}

          {!loading && galleryImages.length > 0 && (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 max-sm:gap-3">
              {galleryImages.map((image, index) => (
                <button
                  key={`${image.src}-${index}`}
                  type="button"
                  onClick={() => openPopup(index)}
                  className="group relative aspect-[1.55/1] w-full cursor-pointer overflow-hidden bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#f58220] focus:ring-offset-2"
                  aria-label={`Open ${image.alt}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    className="object-cover "
                  />

                  <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-white/30" />
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      <SubscribeSection />

      {selectedImage !== null && galleryImages[selectedImage] && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4 sm:p-8"
          onClick={closePopup}
        >
          {/* Top-Left Image Counter */}
          <div className="absolute left-6 top-6 z-30 text-sm font-medium text-white/90">
            {selectedImage + 1} / {galleryImages.length}
          </div>

          {/* Close Button (Top-Right) */}
          <button
            type="button"
            onClick={closePopup}
            aria-label="Close gallery"
            className="absolute right-6 top-6 z-30 text-2xl text-white/80 transition hover:text-white cursor-pointer"
          >
            ✕
          </button>

          {/* Navigation: Previous Button (Left Edge) */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              previousImage();
            }}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 z-30 -translate-y-1/2 p-2 text-white/70 transition hover:text-white sm:left-8 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8 sm:h-10 sm:w-10"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          {/* Image Container (Main Center Display) */}
          <div
            className="relative flex h-full max-h-[85vh] w-full max-w-[85vw] items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              key={galleryImages[selectedImage].src}
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          {/* Navigation: Next Button (Right Edge) */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              nextImage();
            }}
            aria-label="Next image"
            className="absolute right-4 top-1/2 z-30 -translate-y-1/2 p-2 text-white/70 transition hover:text-white sm:right-8 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8 sm:h-10 sm:w-10"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
