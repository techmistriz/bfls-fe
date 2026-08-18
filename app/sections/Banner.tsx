import Image from "next/image";

export default function Banner() {
  return (
    <section className="relative flex min-h-[664px] w-full items-center justify-center overflow-hidden mt-[88px]">

      {/* Main Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/pexels-ravi-roshan-14907339-scaled.jpeg"
          alt="Banking and Finance Summit"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Overlay Background Image */}
      <div className="absolute inset-0 z-[1] opacity-[0.8]">
        <Image
          src="/images/overlay2-1.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
        />
      </div>



      {/* Decorative Circle */}
      <div className="absolute left-[19.3%] top-[6%] h-[218px] w-[218px] overflow-hidden rounded-full">
        <Image
          src="/images/red-circle-shape-1.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      {/* Decorative X */}
      <span className="absolute left-[21.4%] top-[43%] text-[38px] font-light text-white/40">
        ×
      </span>

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1250px] flex-col items-center px-5 pt-2 text-center">

        {/* Summit Logo */}
        <div className="mb-8">
          <Image
            src="/images/BFLS_LOGO_IMAGE.png"
            alt="Witness Banking and Finance"
            width={435}
            height={160}
            priority
            className="h-auto w-[435px] max-w-full"
          />
        </div>

        {/* Heading */}
        <h1 className="max-w-[1180px] text-[48px] font-bold leading-[1.18] tracking-[-1px] text-white lg:text-[48px] font-poppins">
          The Lex Witness 8th Annual Banking &amp; Finance
          <br />
          Legal Summit 2025
        </h1>

        {/* Date */}
        <p className="mt-8 text-[24px] font-medium uppercase leading-none text-white font-poppins">
          21ST NOVEMBER 2025, TAJ SANTACRUZ, MUMBAI
        </p>

        {/* Description */}
        <p className="mt-12 max-w-[720px] text-[16px] font-bold leading-[1.65] text-white font-archivo">
          The 2025 Edition was a massive success and we now look forward to
          the 2026 Edition. In case you
          {/* <br className="hidden md:block" /> */}
          wish to participate in the future editions, please get in touch with us.
        </p>

        {/* Contact Button */}
        <a
          href="#contact"
          className="mt-11 inline-flex h-[66px] min-w-[178px] items-center font-archivo justify-center gap-2 rounded-[6px] bg-[#f58216] px-7 text-[16px] font-bold uppercase text-white shadow-sm transition-all duration-300 hover:bg-[#e87308] hover:shadow-lg"
        >
          {/* Download/Contact Icon */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 3V14"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M8 10L12 14L16 10"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 17V20H19V17"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span>CONTACT US</span>
        </a>

        {/* Slider Dots */}
        <div className="mt-3 flex items-center gap-[9px]">
          {Array.from({ length: 7 }).map((_, index) => (
            <span
              key={index}
              className="h-[7px] w-[7px] rounded-full bg-white"
            />
          ))}
        </div>
      </div>
    </section>
  );
}