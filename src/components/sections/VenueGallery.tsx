"use client";

import Image from "next/image";
import { venueImages } from "@/src/data/venue";
import { useLightbox } from "@/src/hooks/useLightbox";

export default function VenueGallery() {
  const { selectedIndex, open, close, next, previous } = useLightbox(
    venueImages.length,
  );

  return (
    <>
      <section className="relative w-full overflow-hidden bg-white py-10 md:py-14">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            backgroundImage: `
              radial-gradient(
                circle at 50% 50%,
                transparent 8px,
                rgba(235, 237, 240, 0.8) 9px,
                transparent 11px
              )
            `,
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative mx-auto max-w-[1170px] px-5">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {venueImages.map((image, index) => (
              <button
                key={index}
                type="button"
                onClick={() => open(index)}
                className="group relative aspect-[1.55/1] w-full overflow-hidden rounded-[4px] bg-gray-200 text-left focus:outline-none"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-[#162c58]/0 transition-all duration-300 group-hover:bg-[#162c58]/75">
                  <span className="flex h-0 w-0 items-center justify-center rounded-full bg-[#f58220] text-white opacity-0 transition-all duration-300 group-hover:h-10 group-hover:w-10 group-hover:opacity-100 md:group-hover:h-12 md:group-hover:w-12">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="h-5 w-5 md:h-6 md:w-6"
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
      </section>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 px-4"
          onClick={close}
        >
          <div
            className="relative flex h-[80vh] w-full max-w-6xl items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={close}
              className="absolute right-0 top-[-45px] z-30 flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl text-gray-800 transition hover:bg-gray-200 md:right-0 md:top-[-5px]"
              aria-label="Close"
            >
              ×
            </button>

            <button
              type="button"
              onClick={previous}
              className="absolute left-0 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-[#f58220] text-white shadow-lg transition hover:bg-[#df7014] md:-left-6 md:h-12 md:w-12"
              aria-label="Previous image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-6 w-6"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            <div className="relative h-full w-full">
              <Image
                src={venueImages[selectedIndex].src}
                alt={venueImages[selectedIndex].alt}
                fill
                sizes="100vw"
                priority
                className="object-contain"
              />
            </div>

            <button
              type="button"
              onClick={next}
              className="absolute right-0 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-[#f58220] text-white shadow-lg transition hover:bg-[#df7014] md:-right-6 md:h-12 md:w-12"
              aria-label="Next image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-6 w-6"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
