"use client";

import Image from "next/image";

const speakers = [
  {
    image: "/images/ALOK-KUMAR-1.jpg",
    name: "ALOK KUMAR",
    designation: "Managing Partner, THS - The Law Firm",
  },
  {
    image: "/images/ALOK-KUMAR-1.jpg",
    name: "ANKITA CHOUDHARY",
    designation:
      "Head - Contracts and Advisory - Legal, Nuvama Group",
  },
  {
    image: "/images/ALOK-KUMAR-1.jpg",
    name: "APARNA RAWAT",
    designation: "Chief Legal Officer, L&T Finance",
  },
  {
    image: "/images/ALOK-KUMAR-1.jpg",
    name: "ASHISH LAKHTAKIA",
    designation:
      "General Counsel, Chief - Regulatory Affairs & Company Secretary, Generali Central Insurance",
  },
  {
    image: "/images/ALOK-KUMAR-1.jpg",
    name: "GARIMA NAHAR",
    designation:
      "General Counsel, Chief Compliance Officer and Head of Secretarial, JioBlackRock Asset Management Company",
  },
  {
    image: "/images/ALOK-KUMAR-1.jpg",
    name: "GURANPREET SINGH SARNA",
    designation: "Partner, Dhir & Dhir Associates",
  },
  {
    image: "/images/ALOK-KUMAR-1.jpg",
    name: "JYOTI KRISHNAN",
    designation:
      "General Counsel & Head – Liability Claims, Prudent Insurance Brokers Pvt Ltd.",
  },
  {
    image: "/images/ALOK-KUMAR-1.jpg",
    name: "KULIN DAVE",
    designation:
      "Head - Legal and DPO, Paymentz - Payment Gateway Solutions",
  },
];

export default function Speakers() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-[65px] sm:py-[75px] lg:py-[85px]">

      {/* =========================
          DECORATIVE ANIMATIONS
      ========================== */}

      {/* Left Lightning */}
      <div className="speaker-lightning speaker-lightning-left pointer-events-none absolute left-[12%] top-[125px] hidden lg:block">
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

      {/* Right Wave */}
      <div className="speaker-wave speaker-wave-right pointer-events-none absolute right-[15%] top-[165px] hidden lg:block">
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

      {/* Small left decorative circle */}
      <div className="speaker-dot-animation pointer-events-none absolute left-[8%] top-[300px] hidden h-[8px] w-[8px] rounded-full bg-[#e8edf2] lg:block" />

      {/* Small right decorative circle */}
      <div className="speaker-dot-animation-2 pointer-events-none absolute right-[9%] top-[300px] hidden h-[8px] w-[8px] rounded-full bg-[#e8edf2] lg:block" />

      {/* =========================
          MAIN CONTAINER
      ========================== */}

      <div className="relative mx-auto max-w-[2000px] px-5 sm:px-8 lg:px-10">

        {/* =========================
            HEADING
        ========================== */}

        <div className="text-center">

          <p className="mb-[8px] text-[25px] font-bold leading-tight text-[#f58216] sm:text-[27px] ">
            Confirmed Speakers
          </p>

          <h2 className="text-[34px] font-bold leading-[1.15] text-[#566e99] sm:text-[40px] lg:text-[38px] font-poppins">
            Meet Our Mighty Speakers
          </h2>

          {/* Orange Line */}
          <div className="mx-auto mt-[17px] h-[3px] w-[96px] bg-[#f58216]" />

        </div>

        {/* =========================
            SPEAKERS GRID
        ========================== */}

        <div className="mt-[60px] grid grid-cols-1 gap-y-[55px] sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4 lg:gap-x-[45px] lg:gap-y-[62px]">

          {speakers.map((speaker) => (
            <div
              key={speaker.name}
              className="flex flex-col items-center text-center"
            >

              {/* Profile Image */}
              <div className="relative h-[158px] w-[158px] overflow-hidden rounded-full sm:h-[160px] sm:w-[160px] lg:h-[200px] lg:w-[200px]">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </div>

              {/* Name */}
              <h3 className="mt-[20px] text-[22px] font-bold leading-[1.2] text-[#f58216] font-poppins">
                {speaker.name}
              </h3>

              {/* Designation */}
              <p className="mt-[7px] max-w-[360px] text-[14px] font-medium leading-[1.55] text-[#4b4b4b] sm:text-[16px]">
                {speaker.designation}
              </p>

            </div>
          ))}

        </div>
      </div>

      {/* =========================
          ANIMATION CSS
      ========================== */}

      <style jsx>{`
        .speaker-lightning-left {
          animation: lightningFloat 4s ease-in-out infinite;
        }

        .speaker-wave-right {
          animation: waveFloat 5s ease-in-out infinite;
        }

        .speaker-dot-animation {
          animation: dotFloat 3s ease-in-out infinite;
        }

        .speaker-dot-animation-2 {
          animation: dotFloatReverse 4s ease-in-out infinite;
        }

        @keyframes lightningFloat {
          0% {
            transform: translateY(0px) rotate(0deg);
          }

          50% {
            transform: translateY(-12px) rotate(4deg);
          }

          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }

        @keyframes waveFloat {
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

        @keyframes dotFloat {
          0% {
            transform: translateY(0px);
            opacity: 0.5;
          }

          50% {
            transform: translateY(-15px);
            opacity: 1;
          }

          100% {
            transform: translateY(0px);
            opacity: 0.5;
          }
        }

        @keyframes dotFloatReverse {
          0% {
            transform: translateY(0px);
            opacity: 0.4;
          }

          50% {
            transform: translateY(14px);
            opacity: 1;
          }

          100% {
            transform: translateY(0px);
            opacity: 0.4;
          }
        }
      `}</style>
    </section>
  );
}