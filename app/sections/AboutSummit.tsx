import Image from "next/image";

export default function AboutSummit() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-[70px] lg:py-[50px]">

      {/* =========================
          BACKGROUND IMAGE
      ========================== */}
      <div className="absolute left-0 top-0 w-full">
        <Image
          src="/images/about_section_top_bg.png"
          alt=""
          width={1920}
          height={800}
          className="h-auto w-full"
        />
      </div>

      {/* =========================
          MAIN CONTAINER
      ========================== */}
      <div className="relative mx-auto mb-[50px] max-w-[1170px] px-5">

        {/* =========================
            MAIN CARD
        ========================== */}
        <div className="relative flex flex-col lg:flex-row">

          {/* =========================
              LEFT IMAGE
          ========================== */}
          <div className="relative z-10 w-full lg:w-[54%]">
            <div className="relative aspect-[0.76] w-full overflow-hidden lg:h-[714px] lg:aspect-auto">
              <Image
                src="/images/section-2-bfls.png"
                alt="BFSI Legal Landscape 2025"
                fill
                priority
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* =========================
              RIGHT CONTENT WRAPPER
          ========================== */}
          <div className="relative z-20 -mt-1 w-full lg:-ml-1 lg:mt-0 lg:w-[57%]">

            {/* =========================
                GREY BACK PANEL
                Screenshot-style offset
            ========================== */}
            <div
              className="
                absolute
                -right-[18px]
                top-[50px]
                bottom-[70px]
                w-full
                rounded-[7px]
                bg-[#dfe1e6]
              "
            />

            {/* =========================
                WHITE CONTENT CARD
            ========================== */}
            <div
              className="
                relative
                rounded-[7px]
                bg-white
                px-7
                py-9
                sm:px-10
                lg:px-[40px]
                lg:py-[28px] bg-white shadow-[30px_10px_90px_0px_rgba(0,0,0,0.1)]

              "
            >

              {/* Heading */}
              <h2
                className="
                  max-w-[430px]
                  text-[27px]
                  font-bold
                  leading-[1.28]
                  text-[#EF7F1B]
                  font-archivo
                  sm:text-[27px]
                "
              >
                BFSI Legal Landscape 2025:
                <br />
                Navigating Reform, Innovation &amp;
                <br className="hidden sm:block" />
                Resilience
              </h2>

              {/* Orange Line */}
              <div className="mb-[22px] mt-[12px] h-[3px] w-[120px] bg-[#EF7F1B]" />

              {/* Description */}
              <div
                className="
                  max-w-[490px]
                  text-[18px]
                  font-medium
                  leading-[1.58]
                  text-[#4a4a4a]
                  font-archivo
                "
              >
                <p>
                  The Banking &amp; Finance Legal Summit 2025 brings together{" "}
                  <strong>
                    leaders from banking, financial services, insurance, and
                    fintech
                  </strong>{" "}
                  to address the sector’s most urgent challenges and
                  transformative opportunities.
                </p>

                <p>
                  This year’s agenda dives deep into{" "}
                  <strong>
                    regulatory reforms, digital lending evolution, data
                    privacy mandates, sustainable finance,
                  </strong>{" "}
                  and{" "}
                  <strong>
                    dispute resolution innovations.
                  </strong>
                </p>

                <p>
                  From{" "}
                  <strong>
                    RBI’s latest frameworks, IBC amendments,
                  </strong>{" "}
                  and{" "}
                  <strong>DPDPA enforcement</strong>, to{" "}
                  <strong>
                    emerging technologies like AI-driven lending and CBDCs,
                  </strong>{" "}
                  every session is designed to equip decision-makers with
                  actionable insights.
                </p>

                <p>
                  As{" "}
                  <strong>
                    compliance converges with growth strategy,
                  </strong>{" "}
                  this summit provides a pivotal platform for{" "}
                  <strong>
                    industry leaders, policymakers, and legal experts
                  </strong>{" "}
                  to shape the future of BFSI — where innovation thrives under
                  robust governance.
                </p>
              </div>

              {/* =========================
                  SUMMIT GALLERY BUTTON
              ========================== */}
              <a
                href="#gallery"
                className="
                  mt-7
                  inline-flex
                  h-[64px]
                  items-center
                  justify-center
                  gap-2
                  rounded-[6px]
                  bg-[#EF7F1B]
                  px-[27px]
                  text-[15px]
                  font-bold
                  text-white
                  font-archivo
                  transition-all
                  duration-300
                  hover:bg-[#e87508]
                  hover:shadow-lg
                "
              >
                {/* Gallery Icon */}
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3"
                    y="4"
                    width="18"
                    height="16"
                    rx="2"
                    stroke="white"
                    strokeWidth="2"
                  />

                  <circle
                    cx="8"
                    cy="9"
                    r="1.5"
                    fill="white"
                  />

                  <path
                    d="M4 17L9 12L13 16L16 13L20 17"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span>SUMMIT GALLERY</span>
              </a>

            </div>
          </div>
        </div>

        {/* =========================
            SLIDER DOTS
        ========================== */}
        <div className="absolute -bottom-[45px] right-[-5px] flex items-center gap-[11px]">
          {Array.from({ length: 7 }).map((_, index) => (
            <span
              key={index}
              className={`h-[7px] w-[7px] rounded-full ${
                index === 0
                  ? "bg-[#c9cdd5]"
                  : "bg-[#e1e3e8]"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}