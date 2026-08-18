"use client";

export default function VenueSection() {
  const handleDirections = () => {
    window.open(
      "https://www.google.com/maps/dir/?api=1&destination=Taj+Santacruz,+Mumbai",
      "_blank"
    );
  };

  return (
    <section className="relative w-full overflow-hidden bg-white py-14 md:py-20 lg:py-[45px]">
      
      {/* Decorative Elements */}
      <div className="pointer-events-none absolute left-[8%] top-[45px] hidden md:block">
        <svg
          width="85"
          height="45"
          viewBox="0 0 85 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 8C12 8 12 24 23 24C34 24 34 8 44 8C55 8 55 27 66 27C76 27 76 16 83 16"
            stroke="#E0E4EB"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="pointer-events-none absolute right-[18%] top-[5px] hidden md:block">
        <svg
          width="40"
          height="55"
          viewBox="0 0 40 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 2L37 20L27 21L35 36L19 53L21 34L3 33L22 2Z"
            stroke="#E0E4EB"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="pointer-events-none absolute left-[4%] top-[205px] hidden h-5 w-5 rounded-full border-[3px] border-[#e1e5eb] md:block" />

      <div className="pointer-events-none absolute right-[8%] top-[135px] hidden h-2 w-2 rounded-full bg-[#dfe3e9] md:block" />

      <div className="pointer-events-none absolute right-[9%] bottom-[110px] hidden md:block">
        <svg
          width="65"
          height="35"
          viewBox="0 0 65 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 17C10 5 18 5 26 17C34 29 42 29 50 17C56 8 60 8 63 13"
            stroke="#E0E4EB"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>


      {/* Main Container */}
      <div className="relative mx-auto max-w-[1170px] px-5 md:px-3">
        
        <div className="grid items-stretch gap-10 lg:grid-cols-[370px_1fr] lg:gap-[25px]">

          {/* ================= LEFT CONTENT ================= */}
          <div className="text-center lg:text-left">

            {/* Small Heading */}
            <p className="mb-1 text-[24px] font-bold leading-tight text-[#f58220] md:text-[30px]">
              Been there?
            </p>

            {/* Main Heading */}
            <h2 className="text-[34px] font-extrabold leading-[1.25] tracking-[-1.5px] text-[#58709b] md:text-[43px] font-poppins">
              Directions to the Venue
            </h2>


            {/* Venue */}
            <div className="mt-8">

              <div className="flex items-start lg:flex">
                <span className="mr-1 text-[20px] font-bold text-[#f58220]">
                  •
                </span>

                <div>
                  <h3 className="text-[22px] font-bold leading-6 text-[#f58220]">
                    Venue
                  </h3>

                  <p className="mt-0.5 text-[16px] leading-5 text-[#555]">
                    Taj Santacruz, Mumbai
                  </p>
                </div>
              </div>


              {/* Address */}
              <div className="mt-5 flex items-start lg:flex">
                <span className="mr-1 text-[20px] font-bold text-[#f58220]">
                  •
                </span>

                <div>
                  <h3 className="text-[22px] font-bold leading-6 text-[#f58220]">
                    Address
                  </h3>

                  <p className="mt-0.5 text-[16px] leading-5 text-[#555]">
                    Santacruz East, Mumbai, Maharashtra 400099
                  </p>
                </div>
              </div>

            </div>


            {/* Directions Button */}
            <button
              type="button"
              onClick={handleDirections}
              className="
                mt-8
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-[4px]
                bg-[#f58220]
                px-5
                py-[22px]
                text-[14px]
                font-bold
                text-white
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#df7014]
                hover:shadow-lg
              "
            >
              {/* Map / Direction Icon */}
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 20V10M19 20V10M5 10L12 4L19 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 20H16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>

              GET DIRECTIONS
            </button>

          </div>


          {/* ================= MAP ================= */}
          <div
            className="
              relative
              h-full
              w-full
              overflow-hidden
              rounded-[4px]
              border-[7px]
              border-white
              bg-[#eee]
              shadow-[0_10px_35px_rgba(0,0,0,0.10)]
              md:h-full
            "
          >
            <iframe
              title="Taj Santacruz Location"
              src="https://www.google.com/maps?q=Taj+Santacruz,+Mumbai&output=embed"
              className="absolute inset-0 h-full w-full border-0 grayscale-[15%]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

      </div>

    </section>
  );
}