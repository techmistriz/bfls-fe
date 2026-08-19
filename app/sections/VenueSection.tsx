"use client";

export default function VenueSection() {
  const handleDirections = () => {
    window.open(
      "https://www.google.com/maps/dir/?api=1&destination=Taj+Santacruz,+Mumbai",
      "_blank"
    );
  };

  return (
    <section className="relative w-full overflow-hidden bg-white py-12 sm:py-16 lg:py-[45px]">

      {/* ================= DECORATIVE ELEMENTS ================= */}

      {/* Left Wave */}
      <div className="pointer-events-none absolute left-[8%] top-[45px] hidden lg:block">
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

      {/* Right Lightning */}
      <div className="pointer-events-none absolute right-[18%] top-[5px] hidden lg:block">
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

      {/* Left Circle */}
      <div className="pointer-events-none absolute left-[4%] top-[205px] hidden h-5 w-5 rounded-full border-[3px] border-[#e1e5eb] lg:block" />

      {/* Right Dot */}
      <div className="pointer-events-none absolute right-[8%] top-[135px] hidden h-2 w-2 rounded-full bg-[#dfe3e9] lg:block" />

      {/* Bottom Wave */}
      <div className="pointer-events-none absolute bottom-[110px] right-[9%] hidden lg:block">
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


      {/* ================= MAIN CONTAINER ================= */}

      <div className="relative mx-auto w-full max-w-[1170px] px-5 sm:px-6 lg:px-5">

        <div
          className="
            grid
            grid-cols-1
            gap-8
            sm:gap-10
            lg:grid-cols-[370px_minmax(0,1fr)]
            lg:gap-[25px]
          "
        >

          {/* ================= LEFT CONTENT ================= */}

          <div className="flex flex-col items-center text-center lg:items-start lg:pt-2 lg:text-left">

            {/* Small Heading */}
            <p
              className="
                mb-1
                text-[23px]
                font-bold
                leading-tight
                text-[#f58220]
                sm:text-[27px]
                lg:text-[30px]
              "
            >
              Been there?
            </p>

            {/* Main Heading */}
            <h2
              className="
                max-w-[500px]
                text-[30px]
                font-extrabold
                leading-[1.2]
                tracking-[-1px]
                text-[#58709b]
                sm:text-[36px]
                md:text-[40px]
                lg:text-[43px]
                lg:tracking-[-1.5px]
                font-poppins
              "
            >
              Directions to the Venue
            </h2>


            {/* ================= VENUE DETAILS ================= */}

            <div className="mt-7 w-full max-w-[430px] sm:mt-8">

              {/* Venue */}
              <div className="flex items-start text-left">

                <span className="mr-2 mt-[1px] shrink-0 text-[20px] font-bold leading-none text-[#f58220]">
                  •
                </span>

                <div className="min-w-0">
                  <h3 className="text-[20px] font-bold leading-6 text-[#f58220] sm:text-[22px]">
                    Venue
                  </h3>

                  <p className="mt-1 text-[15px] leading-5 text-[#555] sm:text-[16px]">
                    Taj Santacruz, Mumbai
                  </p>
                </div>

              </div>


              {/* Address */}
              <div className="mt-5 flex items-start text-left">

                <span className="mr-2 mt-[1px] shrink-0 text-[20px] font-bold leading-none text-[#f58220]">
                  •
                </span>

                <div className="min-w-0">
                  <h3 className="text-[20px] font-bold leading-6 text-[#f58220] sm:text-[22px]">
                    Address
                  </h3>

                  <p className="mt-1 break-words text-[15px] leading-5 text-[#555] sm:text-[16px]">
                    Santacruz East, Mumbai, Maharashtra 400099
                  </p>
                </div>

              </div>

            </div>


            {/* ================= DIRECTIONS BUTTON ================= */}

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

          <span>Get Directions</span>
        </a>

          </div>


          {/* ================= MAP ================= */}

          <div
            className="
              relative
              h-[280px]
              min-h-0
              w-full
              overflow-hidden
              rounded-[4px]
              border-[5px]
              border-white
              bg-[#eee]
              shadow-[0_10px_35px_rgba(0,0,0,0.10)]
              sm:h-[350px]
              md:h-[400px]
              lg:h-[430px]
              lg:border-[7px]
            "
          >
            <iframe
              title="Taj Santacruz Location"
              src="https://www.google.com/maps?q=Taj+Santacruz,+Mumbai&output=embed"
              className="
                absolute
                inset-0
                h-full
                w-full
                border-0
                grayscale-[15%]
              "
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