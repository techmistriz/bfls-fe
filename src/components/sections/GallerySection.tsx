"use client";

import Image from "next/image";
import { galleryImages } from "@/src/data/gallery";
import { useLightbox } from "@/src/hooks/useLightbox";
import { Lightbox } from "@/src/components/ui/Lightbox";
import { GalleryIcon } from "@/src/components/icons/GalleryIcon";

export default function GallerySection() {
  const { selectedIndex, open, close, next, previous } = useLightbox(
    galleryImages.length,
  );

  return (
    <>
      <section className="relative w-full overflow-hidden bg-white py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
          <p className="mb-2 text-[20px] font-bold text-[#f58220] sm:text-[24px] md:text-[26px]">
            Visual Delight
          </p>

          <h2 className="font-poppins text-[28px] font-extrabold leading-tight text-[#58709b] sm:text-[32px] md:text-[36px]">
            Quick Glimpse @ BFLS 2025
          </h2>

          <div className="mx-auto mt-4 h-[2px] w-20 bg-[#f58220] sm:w-24" />
        </div>

        <div className="mx-auto mt-7 max-w-[1170px] px-4 sm:mt-8 sm:px-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                type="button"
                onClick={() => open(index)}
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
                  <span className="flex h-0 w-0 items-center justify-center rounded-full bg-[#f58220] text-white opacity-0 transition-all duration-300 group-hover:h-12 group-hover:w-12 group-hover:opacity-100">
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
        </div>

        <div className="mt-8 flex justify-center sm:mt-10">
          <a
            href="/gallery"
            className="group mt-15 inline-flex h-[64px] items-center justify-center gap-2 rounded-[6px] border-2 border-[#EF7F1B] bg-[#EF7F1B] px-[27px] text-[15px] font-bold text-white font-archivo transition-all duration-300 hover:bg-[#fff] hover:text-[#EF7F1B] hover:border-[#EF7F1B] hover:shadow-lg max-md:mt-6 max-md:h-[58px] max-md:px-6 max-md:text-[14px] max-sm:mt-6 max-sm:h-[54px] max-sm:w-full max-sm:px-5 max-sm:text-[14px]"
          >
            <GalleryIcon className="shrink-0 text-white transition-colors duration-300 group-hover:text-[#EF7F1B]" />
            <span>View More</span>
          </a>
        </div>
      </section>

      <Lightbox
        images={galleryImages}
        selectedIndex={selectedIndex}
        onClose={close}
        onNext={next}
        onPrevious={previous}
      />
    </>
  );
}
