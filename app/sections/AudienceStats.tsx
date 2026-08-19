"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Stat = {
  value: number;
  suffix: string;
  label: string;
  suffixColor: string;
};

const stats: Stat[] = [
  {
    value: 100,
    suffix: "+",
    label: "Delegates",
    suffixColor: "#f58216",
  },
  {
    value: 30,
    suffix: "+",
    label: "Speakers",
    suffixColor: "#f58216",
  },
  {
    value: 12,
    suffix: "+",
    label: "Partners & Sponsors",
    suffixColor: "#42cdb8",
  },
  {
    value: 18,
    suffix: "+",
    label: "Special Invitees",
    suffixColor: "#38a9e8",
  },
];

export default function AudienceStats() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));

  const [started, setStarted] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const duration = 1800;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      // Smooth ease-out
      const easedProgress =
        1 - Math.pow(1 - progress, 3);

      setCounts(
        stats.map((stat) =>
          Math.floor(stat.value * easedProgress)
        )
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCounts(stats.map((stat) => stat.value));
      }
    };

    requestAnimationFrame(animate);
  }, [started]);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        min-h-[560px]
        w-full
        overflow-hidden
        bg-white
        sm:min-h-[580px]
      "
    >

      {/* =========================
          BACKGROUND IMAGE
      ========================== */}
      <div className="absolute left-0 top-0 w-full">
        <Image
          src="/images/gallery_and_funfact_bg.png"
          alt=""
          width={1920}
          height={800}
          className="
            h-auto
            min-h-full
            w-full
            object-cover
            object-top
          "
        />
      </div>

      {/* =========================
          WHITE OVERLAY
      ========================== */}
      <div className="absolute inset-0 bg-white/35" />

      {/* =========================
          DECORATIVE DOTS - LEFT
      ========================== */}
      <div
        className="
          absolute
          left-[5%]
          top-[50%]
          hidden
          flex-col
          gap-10
          lg:left-[8%]
          lg:flex
          animate-dots-float
        "
      >
        <span className="h-[6px] w-[6px] rounded-full bg-[#f58216]" />

        <span className="ml-[-30px] h-[6px] w-[6px] rounded-full bg-[#3bcab5]" />

        <span className="ml-[-1px] h-[6px] w-[6px] rounded-full bg-[#2196e8]" />

        <span className="ml-[-30px] h-[6px] w-[6px] rounded-full bg-[#162e69]" />
      </div>

      {/* =========================
          DECORATIVE DOTS - RIGHT
      ========================== */}
      <div
        className="
          absolute
          right-[5%]
          top-[50%]
          hidden
          flex-col
          gap-10
          lg:right-[8%]
          lg:flex
          animate-dots-float
        "
      >
        <span className="h-[6px] w-[6px] rounded-full bg-[#f58216]" />

        <span className="ml-[-30px] h-[6px] w-[6px] rounded-full bg-[#3bcab5]" />

        <span className="ml-[-1px] h-[6px] w-[6px] rounded-full bg-[#2196e8]" />

        <span className="ml-[-30px] h-[6px] w-[6px] rounded-full bg-[#162e69]" />
      </div>

      {/* =========================
          MAIN CONTENT
      ========================== */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[560px]
          w-full
          max-w-[1200px]
          flex-col
          items-center
          px-5
          pb-[50px]
          pt-[42px]
          sm:min-h-[580px]
          sm:px-6
          sm:pb-0
          sm:pt-[46px]
        "
      >

        {/* =========================
            SMALL HEADING
        ========================== */}
        <p
          className="
            text-center
            text-[21px]
            font-bold
            leading-tight
            text-[#f58216]
            sm:text-[30px]
            font-archivo
          "
        >
          Explore More #BFLS2025
        </p>

        {/* =========================
            MAIN HEADING
        ========================== */}
        <h2
          className="
            mt-3
            w-full
            max-w-[760px]
            text-center
            text-[28px]
            font-bold
            leading-[1.2]
            text-[#566e99]
            sm:text-[37px]
            sm:leading-[1.15]
            lg:text-[44px]
            font-poppins
          "
        >
          Varied Industry Audience
          <br />
          with Even More Intense
          <br />
          Discussions
        </h2>

        {/* =========================
            ORANGE LINE
        ========================== */}
        <div
          className="
            mt-[18px]
            h-[3px]
            w-[100px]
            bg-[#f58216]
            sm:mt-[22px]
            sm:w-[120px]
          "
        />

        {/* =========================
            STATS
        ========================== */}
        <div
          className="
            mt-[55px]
            grid
            w-full
            max-w-[820px]
            grid-cols-2
            gap-x-4
            gap-y-9
            sm:mt-[76px]
            sm:grid-cols-4
            sm:gap-x-0
            sm:gap-y-0
          "
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="
                flex
                min-w-0
                flex-col
                items-center
                justify-center
                text-center
              "
            >
              {/* Number */}
              <div className="flex items-baseline font-archivo">

                <span
                  className="
                    text-[36px]
                    font-bold
                    leading-none
                    text-[#082568]
                    sm:text-[42px]
                    lg:text-[44px]
                  "
                >
                  {counts[index]}
                </span>

                <span
                  className="
                    text-[34px]
                    font-bold
                    leading-none
                    sm:text-[40px]
                  "
                  style={{
                    color: stat.suffixColor,
                  }}
                >
                  {stat.suffix}
                </span>

              </div>

              {/* Label */}
              <p
                className="
                  mt-2
                  max-w-[140px]
                  text-[14px]
                  font-bold
                  leading-[1.25]
                  text-[#082568]
                  sm:max-w-none
                  sm:text-[18px]
                "
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* =========================
            SPONSORSHIP BUTTON
        ========================== */}
        <a
          href="#gallery"
          className=" group mt-15 inline-flex h-[64px] items-center justify-center gap-2 rounded-[6px] border-2 border-[#EF7F1B] bg-[#EF7F1B] px-[27px] text-[15px] font-bold text-white font-archivo transition-all duration-300 hover:bg-transparent hover:text-[#EF7F1B] hover:border-[#EF7F1B] hover:shadow-lg max-md:mt-6 max-md:h-[58px] max-md:px-6 max-md:text-[14px] max-sm:mt-6 max-sm:h-[54px] max-sm:w-full max-sm:px-5 max-sm:text-[14px]"
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

          <span>Sponsorship Opportunities</span>
        </a>

      </div>
    </section>
  );
}