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
            className="mt-[20px] inline-flex h-[50px] items-center justify-center gap-2 rounded-[5px] bg-[#f58216] px-[23px] text-[12px] font-bold text-white uppercase transition-all duration-300 hover:bg-[#e87508] hover:shadow-lg sm:h-[51px] sm:px-[25px]"
          >
            {/* Gallery Icon */}
            <svg
              width="17"
              height="17"
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
    </section>
  );
}