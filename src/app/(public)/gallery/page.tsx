"use client";

import Image from "next/image";
import { useEffect, useState, useCallback } from "react";

import { PageBanner } from "@/src/components/layout/PageBanner";
import SubscribeSection from "@/src/components/sections/SubscribeSection";
import { useGallery } from "@/src/hooks/useGallery";

interface GalleryImage {
  src: string;
  alt: string;
}

export default function GalleryBanner() {
  const { gallery, loading } = useGallery();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages: GalleryImage[] = gallery.map((item, index) => ({
    src: item.image,
    alt: `BFLS Gallery ${index + 1}`,
  }));

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

          {!loading && galleryImages.length === 0 && (
            <div className="py-20 text-center text-sm text-gray-500">
              No gallery images found.
            </div>
          )}

          {!loading && galleryImages.length > 0 && (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 max-sm:gap-3">
              {galleryImages.map((image, index) => (
                <button
                  key={`${image.src}-${index}`}
                  type="button"
                  onClick={() => openPopup(index)}
                  className="group relative aspect-[1.55/1] w-full overflow-hidden bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#f58220] focus:ring-offset-2"
                  aria-label={`Open ${image.alt}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 flex items-center justify-center bg-[#12264f]/0 transition-all duration-300 group-hover:bg-[#12264f]/75">
                    <span className="flex h-0 w-0 items-center justify-center rounded-full bg-[#f58220] text-white opacity-0 transition-all duration-300 group-hover:h-12 group-hover:w-12 group-hover:opacity-100 max-sm:group-active:h-12 max-sm:group-active:w-12 max-sm:group-active:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="h-6 w-6"
                      >
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      <SubscribeSection />

      {selectedImage !== null && galleryImages[selectedImage] && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-3 sm:p-5"
          onClick={closePopup}
        >
          <div
            className="relative flex h-[75vh] w-full max-w-[1100px] items-center justify-center sm:h-[82vh] md:h-[88vh] max-sm:h-[78vh]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closePopup}
              aria-label="Close gallery"
              className="absolute right-1 top-1 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[24px] font-light leading-none text-[#222] shadow-lg transition hover:bg-[#f58220] hover:text-white sm:-right-2 sm:-top-2 sm:h-10 sm:w-10 max-sm:right-0 max-sm:top-0"
            >
              ×
            </button>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                previousImage();
              }}
              aria-label="Previous image"
              className="absolute left-1 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#f58220] text-white shadow-lg transition hover:bg-[#df7014] sm:left-2 sm:h-12 sm:w-12 md:-left-6 max-sm:left-1 max-sm:h-9 max-sm:w-9"
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
                key={galleryImages[selectedImage].src}
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                nextImage();
              }}
              aria-label="Next image"
              className="absolute right-1 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#f58220] text-white shadow-lg transition hover:bg-[#df7014] sm:right-2 sm:h-12 sm:w-12 md:-right-6 max-sm:right-1 max-sm:h-9 max-sm:w-9"
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

            <div className="absolute bottom-2 left-1/2 z-30 -translate-x-1/2 rounded-full bg-black/60 px-4 py-1.5 text-xs font-medium text-white sm:bottom-4 sm:text-sm max-sm:px-3 max-sm:py-1 max-sm:text-[11px]">
              {selectedImage + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
