"use client";

import Image from "next/image";
import SubscribeSection from "@/src/components/ReuseSection/SubscribeSection";

const inputClass = `
  h-[50px]
  w-full
  border
  border-[#dedede]
  bg-[#f8f8f8]
  px-[12px]
  text-[16px]
  text-[#555]
  outline-none
  placeholder:text-[#777]
  focus:border-[#f58220]
`;

export default function ContactUs() {
  return (
    <div className="w-full overflow-hidden">

      {/* =====================================================
          BANNER
      ====================================================== */}
      <section className="relative mt-[88px] h-[398px] w-full overflow-hidden">

        <Image
          src="/images/bg_banner_mew.jpg"
          alt="Contact Us"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Banner Content */}
        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1130px] items-center px-5 sm:px-6 lg:px-0">
          <div>
            <h1 className="font-poppins text-[32px] font-bold leading-tight text-white sm:text-[42px] md:text-[52px]">
              Your Witness Please!
            </h1>

            <p className="mt-2 font-archivo text-[14px] font-medium text-white sm:text-[16px] md:text-[17px]">
              Let us know what we can help you with.
            </p>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="absolute bottom-0 right-4 z-20 sm:right-[7%] md:right-[12%] lg:right-[20%]">
          <div className="flex h-[50px] w-[210px] items-center justify-center gap-3 bg-white px-3 font-archivo shadow-sm sm:h-[56px] sm:w-[235px]">

            <a
              href="/"
              className="text-[12px] text-[#555] transition-colors hover:text-[#EF7F1B] sm:text-[13px]"
            >
              Home
            </a>

            <span className="text-[12px] text-[#999] sm:text-[13px]">
              /
            </span>

            <span className="text-[12px] font-medium text-[#EF7F1B] sm:text-[13px]">
              Contact Us
            </span>

          </div>
        </div>

      </section>


      {/* =====================================================
          CONTACT SECTION
      ====================================================== */}
      <section className="relative min-h-[500px] w-full overflow-hidden">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/contact_page_form_bg.jpg')",
          }}
        />

        {/* Background Overlay */}
        {/* <div className="absolute inset-0 bg-white/85" /> */}


        {/* =================================================
            BACKGROUND TEXT
        ================================================== */}
        {/* <div className="pointer-events-none absolute left-1/2 top-[15px] z-[1] -translate-x-1/2 select-none">
          <div className="contact-bg-text">
            contact
          </div>
        </div> */}


        {/* =================================================
            DECORATIVE ELEMENTS
        ================================================== */}

        {/* Orange Dot */}
        <span className="absolute left-[15%] top-[100px] z-[2] h-[4px] w-[4px] rounded-full bg-[#f58220] sm:left-[28%]" />

        {/* Right Orange Dot */}
        <span className="absolute right-[10%] top-[57%] z-[2] text-[18px] font-bold text-[#f58220] sm:right-[22%] sm:text-[20px]">
          ▪
        </span>

        {/* Bottom Cross */}
        <span className="absolute bottom-[30px] left-[10%] z-[2] text-[20px] font-bold text-[#f58220] sm:bottom-[38px] sm:left-[20%] sm:text-[22px]">
          ×
        </span>


        {/* =================================================
            CONTACT CONTENT
        ================================================== */}
        <div className="relative z-[5] mx-auto flex min-h-[500px] w-full max-w-[1130px] flex-col items-center px-0 pb-[115px] pt-[115px] sm:px-0">

          {/* Heading */}
          <div className="relative z-[5] mb-[28px] text-center sm:mb-[32px]">

            <p className="mb-[5px] text-[30px] font-bold leading-none text-[#f58220] sm:text-[32px]">
              # Have Questions?
            </p>

            <h2 className="text-[48px] font-bold leading-[1.15] text-[#536b98] sm:text-[56px]">
              Drop us a Line
            </h2>

          </div>


          {/* =================================================
              FORM + CONTACT INFORMATION
          ================================================== */}
          <div className="flex w-full flex-col items-stretch justify-center gap-4 sm:flex-row sm:gap-[20px]">

            {/* =================================================
                CONTACT FORM
            ================================================== */}
            <div className="w-full h-[500px] rounded-[4px] bg-white px-5 py-6 shadow-[0_5px_25px_rgba(0,0,0,0.05)] sm:w-[900px] sm:px-[40px] sm:py-[40px]">

              {/* Form Heading */}
              <h3 className="mb-[10px] text-[30px] font-bold leading-[1.2] text-[#111]">
                Your{" "}
                <span className="text-[#f58220]">
                  Witness
                </span>{" "}
                Please!
              </h3>

              <form className="w-full">

                {/* First Row */}
                <div className="mb-[10px] grid grid-cols-1 gap-[10px] sm:grid-cols-2 sm:gap-[15px]">

                  <input
                    type="text"
                    placeholder="Your Name*"
                    className={inputClass}
                  />

                  <input
                    type="email"
                    placeholder="Your Email*"
                    className={inputClass}
                  />

                </div>


                {/* Second Row */}
                <div className="mb-[10px] grid grid-cols-1 gap-[10px] sm:grid-cols-2 sm:gap-[15px]">

                  <input
                    type="tel"
                    placeholder="Phone Number*"
                    className={inputClass}
                  />

                  <input
                    type="text"
                    placeholder="Company Name*"
                    className={inputClass}
                  />

                </div>


                {/* Message */}
                <textarea
                  placeholder="Please place your query here"
                  className="
                    mb-[10px]
                    h-[150px]
                    w-full
                    resize-none
                    border
                    border-[#dedede]
                    bg-[#f8f8f8]
                    px-[12px]
                    py-[10px]
                    text-[16px]
                    text-[#555]
                    outline-none
                    placeholder:text-[#777]
                    focus:border-[#f58220]
                  "
                />


                {/* Submit Button */}
                <div className="flex justify-center">

                  <button
                    type="submit"
                    className="
                      h-[50px]
                      w-[200px]
                      rounded-[3px]
                      bg-[#f58220]
                      text-[16px]
                      font-bold
                      text-white
                      transition-all
                      duration-300
                      hover:bg-[#d96d0d]
                    "
                  >
                    Submit
                  </button>

                </div>

              </form>

            </div>


            {/* =================================================
                CONTACT INFORMATION
            ================================================== */}
            <div className="flex w-full flex-col rounded-[3px] bg-[#536b98] px-[16px] py-[10px] text-center text-white sm:w-[400px] sm:py-[16px]">

              {/* Contact Person 1 */}
              <div className="flex flex-1 flex-col items-center justify-center py-4 sm:py-6">

                <div className="mb-[7px]">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    className="text-white"
                  >
                    <circle cx="9" cy="7" r="3" />
                    <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
                    <circle cx="18" cy="8" r="2.3" />
                    <path d="M16 14c2.8.3 5 2.7 5 5.5" />
                  </svg>
                </div>

                <h4 className="text-[18px] font-bold">
                  Bhupinder Kaur
                </h4>

                <p className="mt-[3px] break-all text-[16px] leading-[1.4]">
                  B: bhupinder@lexwitness.in
                </p>

                <p className="text-[16px]">
                  T: +91-9654155065
                </p>

              </div>


              {/* Divider */}
              <div className="h-[1px] w-full bg-white/70" />


              {/* Contact Person 2 */}
              <div className="flex flex-1 flex-col items-center justify-center py-4 sm:py-6">

                <div className="mb-[7px]">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    className="text-white"
                  >
                    <circle cx="9" cy="7" r="3" />
                    <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
                    <circle cx="18" cy="8" r="2.3" />
                    <path d="M16 14c2.8.3 5 2.7 5 5.5" />
                  </svg>
                </div>

                <h4 className="text-[18px] font-bold">
                  Neelima Maheshwari
                </h4>

                <p className="mt-[3px] break-all text-[16px] leading-[1.4]">
                  E: neelima.maheshwari@lexwitness.in
                </p>

                <p className="text-[16px]">
                  T: +91 8880846800
                </p>

              </div>


              {/* Divider */}
              <div className="h-[1px] w-full bg-white/70" />


              {/* Secretariat Office */}
              <div className="flex flex-1 flex-col items-center justify-center py-4 sm:py-6">

                <div className="mb-[7px]">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-white"
                  >
                    <path d="M21.7 2.3 2.4 10.2c-.7.3-.6 1.3.1 1.6l7.2 2.5 2.5 7.2c.2.7 1.2.8 1.6.1l7.9-19.3c.3-.7-.4-1.4-1-1z" />
                  </svg>
                </div>

                <h4 className="text-[18px] font-bold">
                  Secretariat Office
                </h4>

                <p className="mt-[3px] text-[16px] leading-[1.5]">
                  Lex Witness
                  <br />
                  Suite 4/5, Tower Ground Floor, Block B,
                  <br />
                  Hauz Khas, New Delhi – 110016
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* =================================================
            BACKGROUND TEXT ANIMATION
        ================================================== */}

      </section>


      {/* =====================================================
          SUBSCRIBE SECTION
      ====================================================== */}
      <SubscribeSection />

    </div>
  );
}