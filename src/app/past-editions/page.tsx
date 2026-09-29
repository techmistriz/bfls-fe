"use client";

import SubscribeSection from "@/src/components/sections/SubscribeSection";

import Image from "next/image";
import Link from "next/link";

import { usePastEditions } from "@/src/hooks/usePastEditions";
import { getPastEditionImageUrl } from "@/src/utils/image";

export default function PastEditionsBanner() {
  const { editions: yearGroups, loading } = usePastEditions();

  const editions = yearGroups.flatMap((yearGroup) => yearGroup.events);

  return (
    <div className="w-full">
      {/* ================= BANNER ================= */}

      <section className="relative mt-[88px] h-[398px] w-full overflow-hidden">
        <Image
          src="/images/bg_banner_mew.jpg"
          alt="Past Editions"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="relative z-10 mx-auto flex h-full max-w-[1130px] items-center px-6 lg:px-0">
          <div>
            <h1 className="font-poppins text-[38px] font-black leading-tight tracking-[-0.4px] text-white md:text-[48px]">
              Past Editions
            </h1>

            <p className="mt-1 font-archivo text-[16px] font-medium text-white md:text-[17px]">
              A sneak peek into our past success stories
            </p>
          </div>
        </div>

        {/* Breadcrumb */}

        <div className="absolute bottom-0 right-[7%] z-20 md:right-[12%]">
          <div className="flex h-[56px] w-[235px] items-center justify-center gap-3 bg-white font-archivo shadow-sm">
            <span className="text-[13px] text-[#555]">
              <Link href="/" className="hover:text-[#EF7F1B]">
                Home
              </Link>
            </span>

            <span className="text-[13px] text-[#999]">/</span>

            <span className="text-[13px] font-medium text-[#EF7F1B]">
              Past Editions
            </span>
          </div>
        </div>
      </section>

      {/* ================= PREVIOUS EDITIONS ================= */}

      <section className="relative overflow-hidden bg-white py-[80px] md:py-[75px]">
        {/* Left Circle */}

        <div className="absolute left-[0px] top-[65px] hidden md:block">
          <div className="relative animate-slow-bounce">
            <Image
              src="/images/Venue-hotel-right-icon.png"
              alt=""
              width={50}
              height={50}
              className="transition-transform duration-500 ease-out group-hover:rotate-12 group-hover:scale-110"
            />
          </div>
        </div>

        {/* Right Arrow */}

        <div className="absolute right-0 top-[65px] hidden md:block">
          <div className="h-0 w-0 border-y-[15px] border-y-transparent border-r-[16px] border-r-[#ff5b4d]" />
        </div>

        {/* Content */}

        <div className="relative z-10 mx-auto max-w-[1170px] px-5">
          {/* Heading */}

          <div className="mb-15 text-center">
            <p className="mb-1 font-poppins text-[21px] font-semibold leading-tight text-[#EF7F1B] md:text-[32px]">
              Banking &amp; Finance Legal Summit
            </p>

            <h2 className="mx-auto  font-poppins text-[50px] font-bold leading-[53.1px] tracking-[-1px] text-[#566a8f]">
              Here&apos;s a quick look at
              <br />
              our previous editions.
            </h2>
          </div>

          {/* Cards */}

          {loading ? (
            <div className="grid grid-cols-1 gap-x-[21px] gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="group">
                  <div className="h-[170px] w-full animate-pulse bg-gray-200" />

                  <div className="min-h-[118px] bg-white px-[32px] py-[17px] shadow-[0_8px_25px_rgba(0,0,0,0.07)]">
                    <div className="h-6 w-4/5 animate-pulse bg-gray-200" />
                    <div className="mt-3 h-4 w-1/3 animate-pulse bg-gray-200" />
                  </div>
                </div>
              ))}
            </div>
          ) : editions.length > 0 ? (
            <div className="grid grid-cols-1 gap-x-[21px] gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
              {editions.map((edition) => (
                <Link
                  key={edition.id}
                  href={`/past-editions/${edition.slug}`}
                  className="group"
                >
                  {/* Image */}

                  <div className="relative h-[170px] w-full overflow-hidden">
                    <Image
                      src={getPastEditionImageUrl(edition.image)}
                      alt={edition.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 250px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Card Details */}

                  <div className="min-h-[118px] bg-white px-[32px] py-[17px] shadow-[0_8px_25px_rgba(0,0,0,0.07)]">
                    <h3 className="font-poppins text-[19px] font-semibold leading-[1.55] text-[#111]">
                      {edition.title}
                    </h3>

                    {edition.city?.name && (
                      <p className="mt-1 font-poppins text-[16px] font-medium text-[#EF7F1B]">
                        {edition.city.name}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-10 text-center">
              <p className="font-archivo text-[16px] text-[#666]">
                No past editions available.
              </p>
            </div>
          )}
        </div>
      </section>

      <section>
        <SubscribeSection />
      </section>
    </div>
  );
}
