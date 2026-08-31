"use client";

import { useEffect, useState } from "react";
import SubscribeSection from "@/src/components/ReuseSection/SubscribeSection";
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

export default function GalleryBanner() {
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
    <div className="w-full overflow-hidden">

      {/* =====================================================
          BANNER
      ====================================================== */}

      <section
        className="
          relative
          mt-[88px]
          h-[398px]
          w-full
          overflow-hidden

          max-md:mt-[75px]
          max-md:h-[340px]

          max-sm:mt-[65px]
          max-sm:h-[280px]
        "
      >

        <Image
          src="/images/bg_banner.png"
          alt="Past Editions"
          fill
          priority
          sizes="100vw"
          className="
            object-cover
            object-center
          "
        />

        {/* Banner Content */}

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            h-full
            w-full
            max-w-[1130px]
            items-center
            px-6
            lg:px-0

            max-sm:px-[20px]
          "
        >

          <div>

            <h1
              className="
                font-poppins
                text-[38px]
                font-bold
                leading-tight
                text-white

                md:text-[52px]

                max-sm:text-[30px]
              "
            >
              Gallery
            </h1>

          </div>

        </div>


        {/* =====================================================
            BREADCRUMB
        ====================================================== */}

        <div
          className="
            absolute
            bottom-0
            right-[7%]
            z-20

            md:right-[20%]

            max-sm:right-0
          "
        >

          <div
            className="
              flex
              h-[56px]
              w-[235px]
              items-center
              justify-center
              gap-3
              bg-white
              font-archivo
              shadow-sm

              max-sm:h-[48px]
              max-sm:w-[185px]
              max-sm:gap-2
            "
          >

            <span
              className="
                text-[13px]
                text-[#555]

                max-sm:text-[11px]
              "
            >
              <a
                href="/"
                className="transition-colors hover:text-[#EF7F1B]"
              >
                Home
              </a>
            </span>

            <span
              className="
                text-[13px]
                text-[#999]

                max-sm:text-[11px]
              "
            >
              /
            </span>

            <span
              className="
                text-[13px]
                font-medium
                text-[#EF7F1B]

                max-sm:text-[11px]
              "
            >
              Gallery
            </span>

          </div>

        </div>

      </section>


      {/* =====================================================
          GALLERY SECTION
      ====================================================== */}

      <section
        className="
          w-full
          bg-white
          px-5
          py-20

          max-md:px-4
          max-md:py-16

          max-sm:px-[15px]
          max-sm:py-12
        "
      >

        <div
          className="
            mx-auto
            mt-7
            max-w-[1170px]
            px-4

            sm:mt-8
            sm:px-6

            max-sm:mt-0
            max-sm:px-0
          "
        >

          <div
            className="
              grid
              grid-cols-1
              gap-4

              sm:grid-cols-2
              md:grid-cols-3

              max-sm:gap-3
            "
          >

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

                {/* =========================
                    IMAGE
                ========================== */}

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

                      max-sm:group-active:h-12
                      max-sm:group-active:w-12
                      max-sm:group-active:opacity-100
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

      </section>


      {/* =====================================================
          SUBSCRIBE
      ====================================================== */}

      <section>
        <SubscribeSection />
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

          {/* =================================================
              POPUP CONTAINER
          ================================================== */}

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

              max-sm:h-[78vh]
            "
            onClick={(e) => e.stopPropagation()}
          >

            {/* =================================================
                CLOSE BUTTON
            ================================================== */}

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

                max-sm:right-0
                max-sm:top-0
              "
            >
              ×
            </button>


            {/* =================================================
                PREVIOUS BUTTON
            ================================================== */}

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

                max-sm:left-1
                max-sm:h-9
                max-sm:w-9
              "
            >

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="
                  h-5
                  w-5

                  sm:h-6
                  sm:w-6
                "
              >
                <path d="m15 18-6-6 6-6" />
              </svg>

            </button>


            {/* =================================================
                IMAGE
            ================================================== */}

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


            {/* =================================================
                NEXT BUTTON
            ================================================== */}

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

                max-sm:right-1
                max-sm:h-9
                max-sm:w-9
              "
            >

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="
                  h-5
                  w-5

                  sm:h-6
                  sm:w-6
                "
              >
                <path d="m9 18 6-6-6-6" />
              </svg>

            </button>


            {/* =================================================
                IMAGE COUNTER
            ================================================== */}

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

                max-sm:px-3
                max-sm:py-1
                max-sm:text-[11px]
              "
            >
              {selectedImage + 1} / {galleryImages.length}
            </div>

          </div>

        </div>

      )}

    </div>
  );
}