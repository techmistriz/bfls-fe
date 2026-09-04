"use client";

import Image from "next/image";
import { sponsors } from "@/src/data/sponsors";

export default function Sponsors() {
  return (
    <section
      className="relative w-full overflow-hidden bg-white py-[60px] sm:py-[75px] lg:py-[80px]"
      id="sponsors"
    >
      <div className="sponsor-lightning pointer-events-none absolute left-[12%] top-[105px] hidden lg:block">
        <svg
          width="42"
          height="55"
          viewBox="0 0 42 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28 2L8 27H21L15 53L35 24H22L28 2Z"
            stroke="#dfe3e9"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      <div className="sponsor-wave pointer-events-none absolute right-[15%] top-[150px] hidden lg:block">
        <svg
          width="82"
          height="42"
          viewBox="0 0 82 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 22C10 22 10 10 18 10C26 10 26 28 34 28C42 28 42 12 50 12C58 12 58 25 66 25C74 25 74 14 80 14"
            stroke="#dfe3e9"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="sponsor-wave-left pointer-events-none absolute left-[4%] top-[390px] hidden lg:block">
        <svg
          width="75"
          height="35"
          viewBox="0 0 75 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 17C10 17 10 7 18 7C26 7 26 22 34 22C42 22 42 9 50 9C58 9 58 20 66 20C69 20 71 17 73 17"
            stroke="#dfe3e9"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="sponsor-circle pointer-events-none absolute right-[9%] top-[310px] hidden h-[19px] w-[19px] rounded-full border-[2px] border-[#dfe3e9] lg:block" />
      <div className="sponsor-dot pointer-events-none absolute left-[6.5%] top-[235px] hidden h-[8px] w-[8px] rounded-full bg-[#dfe3e9] lg:block" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-5">
        <div className="text-center">
          <p className="mb-[8px] text-[25px] font-bold leading-tight text-[#f58216] sm:text-[27px]">
            Welcome Aboard
          </p>

          <h2 className="text-[34px] font-extrabold leading-[1.15] text-[#566e99] sm:text-[40px] font-poppins">
            Sponsors &amp; Partners
          </h2>

          <div className="mx-auto mt-[17px] h-[3px] w-[95px] bg-[#f58216]" />
        </div>

        <div className="mx-auto mt-[55px] grid max-w-[1130px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {sponsors.map((sponsor, index) => (
            <div
              key={`${sponsor.category}-${index}`}
              className="group relative flex h-[145px] flex-col items-center justify-center border border-[#e1e8f1] bg-white px-4 transition-all duration-300 hover:z-10 hover:shadow-[0_8px_25px_rgba(70,90,120,0.12)]"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <p className="absolute left-0 right-0 top-[11px] text-center text-[13px] font-semibold text-[#777]">
                {sponsor.category}
              </p>

              <div className="relative mt-[12px] h-[70px] w-[170px]">
                <Image
                  src={sponsor.image}
                  alt={sponsor.category}
                  fill
                  sizes="170px"
                  className="object-contain transition-transform duration-300 group-hover:scale-[1.05]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .sponsor-card {
          animation: sponsorFloat 4s ease-in-out infinite;
        }
        .sponsor-lightning {
          animation: sponsorLightning 4s ease-in-out infinite;
        }
        .sponsor-wave {
          animation: sponsorWave 5s ease-in-out infinite;
        }
        .sponsor-wave-left {
          animation: sponsorWaveLeft 4.5s ease-in-out infinite;
        }
        .sponsor-circle {
          animation: sponsorCircle 4s ease-in-out infinite;
        }
        .sponsor-dot {
          animation: sponsorDot 3s ease-in-out infinite;
        }
        @keyframes sponsorFloat {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-4px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        @keyframes sponsorLightning {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(4deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }
        @keyframes sponsorWave {
          0% {
            transform: translate(0px, 0px);
          }
          50% {
            transform: translate(8px, -8px);
          }
          100% {
            transform: translate(0px, 0px);
          }
        }
        @keyframes sponsorWaveLeft {
          0% {
            transform: translateX(0px);
          }
          50% {
            transform: translateX(10px);
          }
          100% {
            transform: translateX(0px);
          }
        }
        @keyframes sponsorCircle {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.15);
          }
          100% {
            transform: scale(1);
          }
        }
        @keyframes sponsorDot {
          0% {
            transform: translateY(0px);
            opacity: 0.5;
          }
          50% {
            transform: translateY(-12px);
            opacity: 1;
          }
          100% {
            transform: translateY(0px);
            opacity: 0.5;
          }
        }
      `}</style>
    </section>
  );
}
