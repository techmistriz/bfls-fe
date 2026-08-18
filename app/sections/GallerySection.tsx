"use client";

import { useState } from "react";
import Image from "next/image";

const galleryImages = [
  {
    src: "/images/10-scaled.jpg",
    alt: "BFLS 2025 Gallery 1",
  },
  {
    src: "/images/10-scaled.jpg",
    alt: "BFLS 2025 Gallery 2",
  },
  {
    src: "/images/10-scaled.jpg",
    alt: "BFLS 2025 Gallery 3",
  },
  {
    src: "/images/10-scaled.jpg",
    alt: "BFLS 2025 Gallery 4",
  },
  {
    src: "/images/10-scaled.jpg",
    alt: "BFLS 2025 Gallery 5",
  },
  {
    src: "/images/10-scaled.jpg",
    alt: "BFLS 2025 Gallery 6",
  },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const closePopup = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage === null) return;

    setSelectedImage(
      (selectedImage + 1) % galleryImages.length
    );
  };

  const previousImage = () => {
    if (selectedImage === null) return;

    setSelectedImage(
      (selectedImage - 1 + galleryImages.length) %
        galleryImages.length
    );
  };

  return (
    <>
      {/* ================= GALLERY SECTION ================= */}
      <section className="relative w-full bg-white py-16 md:py-20 overflow-hidden">
        
        {/* Heading */}
        <div className="mx-auto max-w-7xl px-4 text-center">
          
          <p className="mb-2 text-xl font-bold text-[#f58220] md:text-[26px]">
            Visual Delight
          </p>

          <h2 className="text-3xl font-extrabold leading-tight text-[#58709b] md:text-4xl lg:text-[36px] font-poppins">
            Quick Glimpse @ BFLS 2025
          </h2>

          {/* Orange underline */}
          <div className="mx-auto mt-4 h-[2px] w-24 bg-[#f58220]" />
        </div>


        {/* Gallery */}
        <div className="mx-auto mt-8 max-w-[1170px] px-4">
          
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            
            {galleryImages.map((image, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setSelectedImage(index)}
                className="group relative aspect-[1.55/1] w-full overflow-hidden bg-gray-100 focus:outline-none"
              >
                
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 300px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-[#12264f]/0 transition-all duration-300 group-hover:bg-[#12264f]/75">
                  
                  {/* Plus Button */}
                  <span
                    className="
                      flex h-0 w-0 items-center justify-center
                      rounded-full bg-[#f58220]
                      text-white opacity-0
                      transition-all duration-300
                      group-hover:h-12
                      group-hover:w-12
                      group-hover:opacity-100
                    "
                  >
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


        {/* View More Button */}
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            className="
              inline-flex items-center gap-2
              rounded-md bg-[#f58220]
              px-6 py-4
              text-sm font-bold text-white
              transition-all duration-300
              hover:bg-[#df7014]
              hover:-translate-y-0.5
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-4 w-4"
            >
              <path d="M3 8h18" />
              <path d="M5 8v10h14V8" />
              <path d="M8 8V5h8v3" />
            </svg>

            VIEW MORE
          </button>
        </div>

      </section>


      {/* ================= LIGHTBOX / POPUP ================= */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 px-4"
          onClick={closePopup}
        >

          {/* Popup */}
          <div
            className="relative flex h-[85vh] w-full max-w-6xl items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close Button */}
            <button
              type="button"
              onClick={closePopup}
              className="
                absolute right-0 top-0 z-20
                flex h-10 w-10 items-center justify-center
                rounded-full bg-white/90
                text-2xl font-light text-gray-800
                transition hover:bg-white
              "
              aria-label="Close gallery"
            >
              ×
            </button>


            {/* Previous Button */}
            <button
              type="button"
              onClick={previousImage}
              className="
                absolute left-0 md:-left-6
                z-20
                flex h-12 w-12 items-center justify-center
                rounded-full bg-[#f58220]
                text-white
                shadow-lg
                transition
                hover:bg-[#df7014]
              "
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


            {/* Image */}
            <div className="relative h-full w-full">
              <Image
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>


            {/* Next Button */}
            <button
              type="button"
              onClick={nextImage}
              className="
                absolute right-0 md:-right-6
                z-20
                flex h-12 w-12 items-center justify-center
                rounded-full bg-[#f58220]
                text-white
                shadow-lg
                transition
                hover:bg-[#df7014]
              "
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