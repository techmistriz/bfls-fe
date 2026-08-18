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

  const [counts, setCounts] = useState<number[]>(
    stats.map(() => 0)
  );

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
      className="relative min-h-[580px] w-full overflow-hidden bg-white">

      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full">
        <Image src="/images/gallery_and_funfact_bg.png"
          alt=""
          width={1920}
          height={800}
          className="h-auto w-full"
        />
      </div>

      {/* Background Pattern */}
      {/* <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage: `
            radial-gradient(
              circle at 50% 50%,
              transparent 0px,
              transparent 9px,
              #eeeeee 10px,
              #eeeeee 11px,
              transparent 12px
            )
          `,
          backgroundSize: "34px 34px",
        }}
      /> */}

      {/* Very Light White Overlay */}
      <div className="absolute inset-0 bg-white/35" />

      {/* Decorative Dots - Left */}
      <div className="absolute left-[3.5%] top-[55%] hidden flex-col gap-10 lg:flex">
        <span className="h-[6px] w-[6px] rounded-full bg-[#f58216]" />
        <span className="ml-7 h-[6px] w-[6px] rounded-full bg-[#3bcab5]" />
        <span className="ml-14 h-[6px] w-[6px] rounded-full bg-[#2196e8]" />
        <span className="ml-20 h-[6px] w-[6px] rounded-full bg-[#162e69]" />
      </div>

      {/* Decorative Dots - Right */}
      <div className="absolute right-[8%] top-[50%] hidden flex-col gap-10 lg:flex">
        <span className="h-[6px] w-[6px] rounded-full bg-[#f58216]" />
        <span className="ml-[-30px] h-[6px] w-[6px] rounded-full bg-[#3bcab5]" />
        <span className="ml-[-1px] h-[6px] w-[6px] rounded-full bg-[#2196e8]" />
        <span className="ml-[-30px] h-[6px] w-[6px] rounded-full bg-[#162e69]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-[580px] max-w-[1200px] flex-col items-center px-5 pt-[46px]">

        {/* Small Heading */}
        <p className="text-center text-[27px] font-bold leading-tight text-[#f58216] sm:text-[30px] font-archivo">
          Explore More #BFLS2025
        </p>

        {/* Main Heading */}
        <h2 className="mt-3 max-w-[760px] text-center text-[37px] font-bold leading-[1.15] text-[#566e99] sm:text-[43px] lg:text-[44px] font-poppins">
          Varied Industry Audience
          <br />
          with Even More Intense
          <br />
          Discussions
        </h2>

        {/* Orange Line */}
        <div className="mt-[22px] h-[3px] w-[120px] bg-[#f58216]" />

        {/* Stats */}
        <div className="mt-[76px] grid w-full max-w-[820px] grid-cols-2 gap-y-10 sm:grid-cols-4 sm:gap-y-0">

          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center"
            >
              {/* Number */}
              <div className="flex items-baseline font-archivo">
                <span className="text-[42px] font-bold leading-none text-[#082568] sm:text-[44px]">
                  {counts[index]}
                </span>

                <span
                  className="text-[40px] font-bold leading-none"
                  style={{
                    color: stat.suffixColor,
                  }}
                >
                  {stat.suffix}
                </span>
              </div>

              {/* Label */}
              <p className="mt-2 text-[16px] font-bold leading-tight text-[#082568] sm:text-[18px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Sponsorship Button */}
        <a
          href="#sponsorship"
          className="mt-[54px] inline-flex h-[64px] items-center justify-center gap-2 rounded-[6px] bg-[#f58216] px-7 text-[14px] font-bold uppercase text-white shadow-sm transition-all duration-300 hover:bg-[#e87308] hover:shadow-lg sm:min-w-[295px]"
        >
          {/* Gallery / Chair Icon */}
          <svg
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 20V9"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />

            <path
              d="M3 20H9"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />

            <path
              d="M5 9H18"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />

            <path
              d="M15 5V9"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />

            <path
              d="M12 5H18"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />

            <path
              d="M18 9V20"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          <span>SPONSORSHIP OPPORTUNITIES</span>
        </a>
      </div>
    </section>
  );
}