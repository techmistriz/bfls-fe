export default function SubscribeSection() {
  return (
    <section className="relative w-full min-h-[315px] overflow-hidden bg-white px-5 pt-[56px] pb-[90px]">

      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            radial-gradient(
              ellipse at center,
              transparent 0px,
              transparent 8px,
              #536b98 9px,
              #536b98 10px,
              transparent 11px
            )
          `,
          backgroundSize: "30px 22px",
        }}
      />

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 z-[1] h-[75px] bg-gradient-to-b from-transparent to-white" />

      {/* Content */}
      <div className="relative z-[2] mx-auto w-full max-w-[1000px] text-center">

        {/* Small Heading */}
        <p className="mb-[6px] text-[28px] font-bold leading-[1.25] text-[#F57C16] max-md:text-[19px]">
          Curate Your Own Sponsorship Wish
        </p>

        {/* Main Heading */}
        <h2 className="mb-[19px] text-[56px] font-bold leading-[1.1] text-[#536B98] max-md:text-[32px] max-sm:text-[29px] font-poppins">
          Showcase Yourself
        </h2>

        {/* Form */}
        <form className="flex w-full flex-col items-center">

          {/* Email Input */}
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="
              h-[50px]
              w-[800px]
              max-w-full
              border
              border-[#dcdcdc]
              bg-[#f7f7f7]
              px-6
              text-[14px]
              text-[#555]
              outline-none
              placeholder:text-[#777]
              focus:border-[#F57C16]
              max-md:h-[42px]
              max-md:px-[15px]
            "
          />

          {/* Button */}
          <button
            type="submit"
            className="
              mt-4
              h-[55px]
              w-[170px]
              rounded-[5px]
              border-0
              bg-[#F57C16]
              text-[14px]
              font-bold
              text-white
              transition-all
              duration-300
              hover:-translate-y-[2px]
              hover:bg-[#E96F08]
              max-md:mt-[15px]
              max-md:h-[44px]
              max-md:w-[140px]
            "
          >
            SUBSCRIBE
          </button>

        </form>
      </div>
    </section>
  );
}