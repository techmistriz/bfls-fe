"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const galleryImages = [
  {
    src: "/images/10-scaled.jpg",
    alt: "BFLS 2025 Gallery 1",
  },
  {
    src: "/images/65-scaled.jpg",
    alt: "BFLS 2025 Gallery 2",
  },
  {
    src: "/images/10-scaled.jpg",
    alt: "BFLS 2025 Gallery 3",
  },
  {
    src: "/images/65-scaled.jpg",
    alt: "BFLS 2025 Gallery 4",
  },
  {
    src: "/images/10-scaled.jpg",
    alt: "BFLS 2025 Gallery 5",
  },
  {
    src: "/images/65-scaled.jpg",
    alt: "BFLS 2025 Gallery 6",
  },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  /* =========================
     OPEN POPUP
  ========================== */

  const openPopup = (index: number) => {
    setSelectedImage(index);
  };

  /* =========================
     CLOSE POPUP
  ========================== */

  const closePopup = () => {
    setSelectedImage(null);
  };

  /* =========================
     NEXT IMAGE
  ========================== */

  const nextImage = () => {
    setSelectedImage((current) => {
      if (current === null) return null;

      return (current + 1) % galleryImages.length;
    });
  };

  /* =========================
     PREVIOUS IMAGE
  ========================== */

  const previousImage = () => {
    setSelectedImage((current) => {
      if (current === null) return null;

      return (
        (current - 1 + galleryImages.length) %
        galleryImages.length
      );
    });
  };

  /* =========================
     KEYBOARD CONTROLS
  ========================== */

  useEffect(() => {
    if (selectedImage === null) return;

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

    // Prevent background scrolling
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <>
      {/* =====================================================
          GALLERY SECTION
      ====================================================== */}

      <section className="relative w-full overflow-hidden bg-white py-12 sm:py-16 md:py-20">

        {/* =========================
            HEADING
        ========================== */}

        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">

          <p className="mb-2 text-[20px] font-bold text-[#f58220] sm:text-[24px] md:text-[26px]">
            Visual Delight
          </p>

          <h2 className="font-poppins text-[28px] font-extrabold leading-tight text-[#58709b] sm:text-[32px] md:text-[36px]">
            Quick Glimpse @ BFLS 2025
          </h2>

          {/* Orange underline */}
          <div className="mx-auto mt-4 h-[2px] w-20 bg-[#f58220] sm:w-24" />

        </div>


        {/* =========================
            GALLERY
        ========================== */}

        <div className="mx-auto mt-7 max-w-[1170px] px-4 sm:mt-8 sm:px-6">

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">

            {galleryImages.map((image, index) => (

              <button
                key={index}
                type="button"
                onClick={() => openPopup(index)}
                className="
                  group
                  relative
                  aspect-[1.55/1]
                  w-full
                  overflow-hidden
                  bg-gray-100
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#f58220]
                  focus:ring-offset-2
                "
                aria-label={`Open ${image.alt}`}
              >

                {/* Image */}

                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="
                    (max-width: 640px) 100vw,
                    (max-width: 768px) 50vw,
                    33vw
                  "
                  className="
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />

                {/* =========================
                    HOVER OVERLAY
                ========================== */}

                <div
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    bg-[#12264f]/0
                    transition-all
                    duration-300
                    group-hover:bg-[#12264f]/75
                  "
                >

                  {/* Plus Button */}

                  <span
                    className="
                      flex
                      h-0
                      w-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#f58220]
                      text-white
                      opacity-0
                      transition-all
                      duration-300
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


        {/* =========================
            VIEW MORE BUTTON
        ========================== */}

        <div className="mt-8 flex justify-center sm:mt-10">

          <a
          href="#gallery"
          className=" group mt-15 inline-flex h-[64px] items-center justify-center gap-2 rounded-[6px] border-2 border-[#EF7F1B] bg-[#EF7F1B] px-[27px] text-[15px] font-bold text-white font-archivo transition-all duration-300 hover:bg-[#fff] hover:text-[#EF7F1B] hover:border-[#EF7F1B] hover:shadow-lg max-md:mt-6 max-md:h-[58px] max-md:px-6 max-md:text-[14px] max-sm:mt-6 max-sm:h-[54px] max-sm:w-full max-sm:px-5 max-sm:text-[14px]"
        >
          {/* Gallery Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17.778"
            height="16"
            viewBox="0 0 17.778 16"
            className="
      shrink-0
      text-white
      transition-colors
      duration-300
      group-hover:text-[#EF7F1B]
    "
          >
            <path
              d="M3.778,16.333V19H6.444V16.333h8.889V19H18V13.667H3.778ZM17.111,9.222h2.667v2.667H17.111ZM2,9.222H4.667v2.667H2Zm13.333,2.667H6.444V4.778A1.783,1.783,0,0,1,8.222,3h5.333a1.783,1.783,0,0,1,1.778,1.778Z"
              transform="translate(-2 -3)"
              fill="currentColor"
            />
          </svg>

          <span>View More</span>
        </a>

        </div>

      </section>


      {/* =====================================================
          LIGHTBOX / POPUP
      ====================================================== */}

      {selectedImage !== null && (

        <div
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            bg-black/90
            p-3
            sm:p-5
          "
          onClick={closePopup}
        >

          {/* =========================
              POPUP CONTAINER
          ========================== */}

          <div
            className="
              relative
              flex
              h-[75vh]
              w-full
              max-w-[1100px]
              items-center
              justify-center
              sm:h-[82vh]
              md:h-[88vh]
            "
            onClick={(e) => e.stopPropagation()}
          >

            {/* =========================
                CLOSE BUTTON
            ========================== */}

            <button
              type="button"
              onClick={closePopup}
              aria-label="Close gallery"
              className="
                absolute
                right-1
                top-1
                z-30
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                bg-white
                text-[24px]
                font-light
                leading-none
                text-[#222]
                shadow-lg
                transition
                hover:bg-[#f58220]
                hover:text-white
                sm:-right-2
                sm:-top-2
                sm:h-10
                sm:w-10
              "
            >
              ×
            </button>


            {/* =========================
                PREVIOUS BUTTON
            ========================== */}

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                previousImage();
              }}
              aria-label="Previous image"
              className="
                absolute
                left-1
                top-1/2
                z-30
                flex
                h-10
                w-10
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                bg-[#f58220]
                text-white
                shadow-lg
                transition
                hover:bg-[#df7014]
                sm:left-2
                sm:h-12
                sm:w-12
                md:-left-6
              "
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


            {/* =========================
                IMAGE
            ========================== */}

            <div
              className="
                relative
                h-full
                w-full
                overflow-hidden
              "
            >

              <Image
                key={galleryImages[selectedImage].src}
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                fill
                sizes="100vw"
                className="
                  object-contain
                "
                priority
              />

            </div>


            {/* =========================
                NEXT BUTTON
            ========================== */}

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              aria-label="Next image"
              className="
                absolute
                right-1
                top-1/2
                z-30
                flex
                h-10
                w-10
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                bg-[#f58220]
                text-white
                shadow-lg
                transition
                hover:bg-[#df7014]
                sm:right-2
                sm:h-12
                sm:w-12
                md:-right-6
              "
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


            {/* =========================
                IMAGE COUNTER
            ========================== */}

            <div
              className="
                absolute
                bottom-2
                left-1/2
                z-30
                -translate-x-1/2
                rounded-full
                bg-black/60
                px-4
                py-1.5
                text-xs
                font-medium
                text-white
                sm:bottom-4
                sm:text-sm
              "
            >
              {selectedImage + 1} / {galleryImages.length}
            </div>

          </div>

        </div>
      )}

    </>
  );
}