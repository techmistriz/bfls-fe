"use client";

import SubscribeSection from "@/src/components/sections/SubscribeSection";

import Image from "next/image";

import { usePastEditions } from "@/src/hooks/usePastEditions";
import { getPastEditionImageUrl } from "@/src/utils/image";
import { PageBanner } from "@/src/components/layout/PageBanner";

export default function PastEditionsBanner() {
  const { editions: yearGroups, loading } = usePastEditions();

  const editions = yearGroups.flatMap((yearGroup) => yearGroup.events);

  return (
    <div className="w-full">
      {/* --------- BANNER --------- */}

      <PageBanner
        backgroundImage="/images/bg_banner.png"
        title="Past Editions"
        subtitle="A sneak peek into our past success stories"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Past Editions" }]}
      />

      {/* --------- PREVIOUS EDITIONS --------- */}

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
            <p className="mb-1 font-poppins text-[32px] font-semibold leading-tight text-[#EF7F1B] md:text-[32px]">
              Banking &amp; Finance Legal Summit
            </p>

            <h2 className="mx-auto  font-poppins text-[30px] font-bold leading-[53.1px] tracking-[-1px] text-[#566a8f]">
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
                <div key={edition.id} className="group">
                  {/* Image */}

                  <div className="relative aspect-[350/233] w-full overflow-hidden">
                    <Image
                      src={getPastEditionImageUrl(edition.image)}
                      alt={edition.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 350px"
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
                </div>
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
