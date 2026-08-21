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
              group mt-5 inline-flex h-[60px] items-center justify-center gap-2 rounded-[6px] border-2 border-[#EF7F1B] bg-[#EF7F1B] px-[40px] text-[15px] font-bold text-white font-archivo transition-all duration-300 hover:bg-[#fff] hover:text-[#EF7F1B] hover:border-[#EF7F1B] hover:shadow-lg max-md:mt-6 max-md:h-[58px] max-md:px-6 max-md:text-[14px] max-sm:mt-6 max-sm:h-[54px] max-sm:w-full max-sm:px-5 max-sm:text-[14px]
            "
          >
            SUBSCRIBE
          </button>

        </form>
      </div>
    </section>
  );
}