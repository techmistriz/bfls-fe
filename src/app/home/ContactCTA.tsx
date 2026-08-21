export default function ContactCTA() {
  return (
    <section className="relative min-h-[440px] w-full overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/count_down_timer_bg.jpg')",
        }}
      />

      {/* Blue/Gray Overlay */}
      <div className="absolute inset-0 bg-[#536b91]/[0.72]" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[440px] items-center justify-center px-5 py-[100px]">
        <div className="mx-auto w-full max-w-[1050px] text-center text-white">

          {/* Small Heading */}
          <p className="mb-[8px] text-[22px] font-bold leading-[1.3] sm:text-[25px] lg:text-[30px]">
            Time's Ticking &amp; Discounts Drying Up
          </p>

          {/* Main Heading */}
          <h2 className="text-[32px] font-bold leading-[1.15] sm:text-[40px] lg:text-[56px] font-poppins">
            Get in Touch to Avail the Best Deal.
          </h2>

          {/* Description */}
          <p className="mx-auto mt-[35px] max-w-[1100px] text-[15px] font-semibold leading-[1.65] text-white sm:text-[16px] lg:text-[17px]">
            Whether you're a legal advisor specializing in the nuances of BFSI regulations, or you're at the helm of legal, risk, compliance, and data privacy for corporations within banking, financial services, insurance, or fintech, this summit promises invaluable insights and networking opportunities.
          </p>

          {/* Button */}
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

          <span>SUMMIT GALLERY</span>
        </a>

        </div>
      </div>
    </section>
  );
}