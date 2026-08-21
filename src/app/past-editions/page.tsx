"use client";

import SubscribeSection from "@/src/components/ReuseSection/SubscribeSection";

import Image from "next/image";

const editions = [
  {
    image: "/images/10-scaled.jpg",
    title: "The 8th Annual Banking & Finance Legal Summit 2025",
  },
  {
    image: "/images/65-scaled.jpg",
    title: "The 7th Annual Banking & Finance Legal Summit 2024",
  },
  {
    image: "/images/10-scaled.jpg",
    title: "The 6th Annual Banking & Finance Legal Summit 2019",
  },
  {
    image: "/images/65-scaled.jpg",
    title: "The 5th Annual Banking & Finance Legal Summit 2018",
  },
  {
    image: "/images/10-scaled.jpg",
    title: "The 4th Annual Banking & Finance Legal Summit 2017",
  },
  {
    image: "/images/65-scaled.jpg",
    title: "The 3rd Annual Banking & Finance Legal Summit 2016",
  },
];

export default function PastEditionsBanner() {
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
            <h1 className="font-poppins text-[38px] font-bold leading-tight text-white md:text-[52px]">
              Past Editions
            </h1>

            <p className="mt-1 font-archivo text-[16px] font-medium text-white md:text-[17px]">
              A sneak peek into our past success stories
            </p>
          </div>
        </div>

        {/* Breadcrumb */}

        <div className="absolute bottom-0 right-[7%] z-20 md:right-[20%]">
          <div className="flex h-[56px] w-[235px] items-center justify-center gap-3 bg-white font-archivo shadow-sm">

            <span className="text-[13px] text-[#555]">
              <a href="/" className="hover:text-[#EF7F1B]">Home</a>
            </span>

            <span className="text-[13px] text-[#999]">
              /
            </span>

            <span className="text-[13px] font-medium text-[#EF7F1B]">
              Past Editions
            </span>

          </div>
        </div>

      </section>


      {/* ================= PREVIOUS EDITIONS ================= */}

      <section className="relative overflow-hidden bg-white py-[80px] md:py-[95px]">

        {/* Left Circle */}

        <div className="absolute left-[-45px] top-[65px] hidden md:block">

          <div className="relative h-[90px] w-[90px] animate-bounce rounded-full border-[3px] border-[#ff5b4d]">

            <div className="absolute inset-[6px] rounded-full border-[3px] border-[#ff5b4d]" />

            <div className="absolute inset-[13px] rounded-full border-[3px] border-[#ff5b4d]" />

            <div className="absolute inset-[20px] rounded-full border-[3px] border-[#ff5b4d]" />

            <div className="absolute inset-[27px] rounded-full border-[3px] border-[#ff5b4d]" />

            <div className="absolute inset-[34px] rounded-full border-[3px] border-[#ff5b4d]" />

          </div>

        </div>


        {/* Right Arrow */}

        <div className="absolute right-0 top-[65px] hidden md:block">

          <div className="h-0 w-0 border-y-[15px] border-y-transparent border-r-[16px] border-r-[#ff5b4d]" />

        </div>


        {/* Content */}

        <div className="relative z-10 mx-auto max-w-[1170px] px-5">

          {/* Heading */}

          <div className="mb-12 text-center">

            <p className="mb-1 font-archivo text-[21px] font-semibold leading-tight text-[#EF7F1B] md:text-[23px]">
              Banking &amp; Finance Legal Summit
            </p>

            <h2 className="mx-auto max-w-[470px] font-poppins text-[34px] font-bold leading-[1.08] tracking-[-1px] text-[#52698f] md:text-[38px]">
              Here's a quick look at
              <br />
              our previous editions.
            </h2>

          </div>


          {/* Cards */}

          <div className="grid grid-cols-1 gap-x-[21px] gap-y-2 sm:grid-cols-2 lg:grid-cols-3">

            {editions.map((edition) => (

              <div
                key={edition.title}
                className="group"
              >

                {/* Image */}

                <div className="relative h-[170px] w-full overflow-hidden">

                  <Image
                    src={edition.image}
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

                  <p className="mt-1 font-poppins text-[16px] font-medium text-[#EF7F1B]">
                    Mumbai
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      <section>
        <SubscribeSection />
      </section>

    </div>
  );
}