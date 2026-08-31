"use client";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#333333] font-sans text-[13px] text-[#eeeeee]">

      {/* ================= MAIN FOOTER ================= */}
      <div
        className="
          mx-auto grid min-h-[523px]
          w-[1125px] max-w-[calc(100%-40px)]
          grid-cols-[300px_500px_250px]
          gap-[19px]
          pt-[47px] font-roboto

          max-lg:w-[calc(100%-40px)]
          max-lg:grid-cols-1
          max-lg:gap-[40px]
          max-lg:pt-[40px]

          max-sm:w-[calc(100%-30px)]
          max-sm:max-w-none
          max-sm:gap-[35px]
          max-sm:pt-[35px]
        "
      >

        {/* ================= CONTACT ================= */}
        <div className="w-full min-w-0">

          <h3 className="mb-[17px] text-[18px] font-bold leading-[1.2] text-[#f58220]">
            CONTACT
          </h3>

          {/* Person 1 */}
          <div className="mb-[23px] text-[15px]">

            <strong className="mb-[6px] block font-bold text-[#f2f2f2]">
              Bhupinder Kaur
            </strong>

            <span className="block leading-[1.55]">
              Sr. Manager – Brand Innovation
            </span>

            <a
              href="mailto:bhupinder@witnsslive.in"
              className="
                block
                break-all
                font-semibold
                leading-[1.55]
                text-white
                underline
                hover:text-[#f58220]
              "
            >
              bhupinder@witnsslive.in
            </a>

            <span className="block leading-[1.55]">
              +91-9654155065
            </span>

          </div>


          {/* Person 2 */}
          <div className="mb-[23px] text-[15px]">

            <strong className="mb-[6px] block font-bold text-[#f2f2f2]">
              Neelima Maheshwari
            </strong>

            <span className="block leading-[1.55]">
              Sr. Manager – Brand Innovation
            </span>

            <a
              href="mailto:neelima_maheshwari@witnsslive.in"
              className="
                block
                break-all
                font-semibold
                leading-[1.55]
                text-white
                underline
                hover:text-[#f58220]
              "
            >
              neelima_maheshwari@witnsslive.in
            </a>

            <span className="block leading-[1.55]">
              +91-8800841600
            </span>

          </div>


          {/* Address */}
          <div>

            <strong className="mb-[6px] block font-bold text-[#f2f2f2]">
              Address
            </strong>

            <span className="block leading-[1.6]">
              Suite # B 1/6, LGF, Hauz Khas, New
              <br />
              Delhi – 110016
            </span>

          </div>


          {/* ================= SOCIAL ICONS ================= */}
          <div className="mt-[12px] flex gap-[6px]">

            {/* LinkedIn */}
            <a
              href="#"
              aria-label="LinkedIn"
              className="
                flex h-[32px] w-[32px]
                shrink-0
                items-center justify-center
                rounded-[3px]
                border border-[#f4f4f4]
                text-[#f58220]
                transition-all duration-200
                hover:border-[#f58220]
                hover:bg-[#f58220]
                hover:text-white
              "
            >
              <svg
                viewBox="0 0 24 24"
                className="h-[18px] w-[18px] fill-current"
                aria-hidden="true"
              >
                <path d="M6.94 8.5H3.56V20.5H6.94V8.5ZM5.25 3.5C4.14 3.5 3.25 4.4 3.25 5.5C3.25 6.6 4.14 7.5 5.25 7.5C6.35 7.5 7.25 6.6 7.25 5.5C7.25 4.4 6.35 3.5 5.25 3.5ZM20.5 13.77C20.5 10.16 18.58 8.18 15.94 8.18C13.8 8.18 12.84 9.36 12.44 10.19V8.5H9.06V20.5H12.44V14.56C12.44 13 12.73 11.49 14.7 11.49C16.64 11.49 16.67 13.28 16.67 14.66V20.5H20.05L20.5 13.77Z" />
              </svg>
            </a>


            {/* YouTube */}
            <a
              href="#"
              aria-label="YouTube"
              className="
                flex h-[32px] w-[32px]
                shrink-0
                items-center justify-center
                rounded-[3px]
                border border-[#f4f4f4]
                text-[#f58220]
                transition-all duration-200
                hover:border-[#f58220]
                hover:bg-[#f58220]
                hover:text-white
              "
            >
              <svg
                viewBox="0 0 24 24"
                className="h-[19px] w-[19px] fill-current"
                aria-hidden="true"
              >
                <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.13C19.51 3.55 12 3.55 12 3.55s-7.51 0-9.38.51A3.02 3.02 0 0 0 .5 6.19C0 8.06 0 12 0 12s0 3.94.5 5.81a3.02 3.02 0 0 0 2.12 2.13c1.87.51 9.38.51 9.38.51s7.51 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.13C24 15.94 24 12 24 12s0-3.94-.5-5.81ZM9.55 15.56V8.44L15.82 12l-6.27 3.56Z" />
              </svg>
            </a>


            {/* Message */}
            <a
              href="#"
              aria-label="Message"
              className="
                flex h-[32px] w-[32px]
                shrink-0
                items-center justify-center
                rounded-[3px]
                border border-[#f4f4f4]
                text-[#f58220]
                transition-all duration-200
                hover:border-[#f58220]
                hover:bg-[#f58220]
                hover:text-white
              "
            >
              <svg
                viewBox="0 0 24 24"
                className="h-[18px] w-[18px] fill-none stroke-current"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <path
                  d="M20.5 11.5a7.5 7.5 0 0 1-8 7.5 8.6 8.6 0 0 1-3.65-.82L4 20l1.82-3.88A7.35 7.35 0 0 1 4.5 11.5a7.5 7.5 0 0 1 8-7.5 7.5 7.5 0 0 1 8 7.5Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  d="M8 11.5h.01M12 11.5h.01M16 11.5h.01"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                />
              </svg>
            </a>

          </div>

        </div>


        {/* ================= SUMMIT SHOWCASE ================= */}
        <div className="w-full min-w-0">

          <h3 className="mb-[17px] text-[18px] font-bold leading-[1.2] text-[#f58220]">
            LEX WITNESS SUMMITS SHOWCASE
          </h3>


          {/* Summit 1 */}
          <div className="mb-[19px] text-[15px]">

            <strong className="mb-[3px] block break-words font-bold leading-[1.45] text-[#f2f2f2]">
              The 8th Annual Banking &amp; Finance Legal Summit 2025
            </strong>

            <span className="block leading-[1.5]">
              Banking / Crypto / Fintech &amp; More
            </span>

            <span className="block leading-[1.5]">
              21st November 2025, Taj Santacruz, Mumbai
            </span>

            <span className="block leading-[1.5]">
              To access past editions, visit{" "}
              <a
                href="#"
                className="text-[#f58220] hover:underline"
              >
                www.bfils.in
              </a>
            </span>

          </div>


          {/* Summit 2 */}
          <div className="mb-[19px] text-[15px]">

            <strong className="mb-[3px] block break-words font-bold leading-[1.45] text-[#f2f2f2]">
              The 11th Annual Grand Masters 2025 – Pune Edition
            </strong>

            <span className="block leading-[1.5]">
              A 6-city pan-India General Counsel, multi-industry format
            </span>

            <span className="block leading-[1.5]">
              New Delhi, Mumbai, Bengaluru, Hyderabad, Pune, Chennai
            </span>

            <span className="block leading-[1.5]">
              To access past editions, visit{" "}
              <a
                href="#"
                className="text-[#f58220] hover:underline"
              >
                www.grandmasters.in
              </a>
            </span>

          </div>


          {/* Summit 3 */}
          <div className="text-[15px]">

            <strong className="mb-[3px] block break-words font-bold leading-[1.45] text-[#f2f2f2]">
              The 11th Annual Grand Masters 2025 – Chennai Edition
            </strong>

            <span className="block leading-[1.5]">
              A 6-city pan-India General Counsel, multi-industry format
            </span>

            <span className="block leading-[1.5]">
              New Delhi, Mumbai, Bengaluru, Hyderabad, Pune, Chennai
            </span>

            <span className="block leading-[1.5]">
              To access past editions, visit{" "}
              <a
                href="#"
                className="text-[#f58220] hover:underline"
              >
                www.grandmasters.in
              </a>
            </span>

          </div>

        </div>


        {/* ================= EXPLORE ================= */}
        <div className="w-full min-w-0">

          <h3 className="mb-[17px] text-[18px] font-bold leading-[1.2] text-[#f58220]">
            EXPLORE FURTHER!
          </h3>

          <p className="mb-[20px] text-[15px] leading-[1.7] text-[#eeeeee]">
            We at Lex Witness strategically
            <br className="max-sm:hidden" />
            assist firms in reaching out to the
            <br className="max-sm:hidden" />
            relevant audience sets through
            <br className="max-sm:hidden" />
            various knowledge sharing
            <br className="max-sm:hidden" />
            initiatives. Here are some more info
            <br className="max-sm:hidden" />
            decks for you to know us better :)
          </p>


          {/* Buttons */}
          <div className="flex flex-col items-start gap-[15px]">

            {[
              {
                label: "READ & SUBSCRIBE",
                href: "/subscribe",
              },
              {
                label: "OUR BRAND DECK",
                href: "/contact",
              },
              {
                label: "PRIVACY POLICY",
                href: "/privacy-policy",
              },
              {
                label: "REFUND POLICY",
                href: "/refund-policy",
              },
              {
                label: "TERMS & CONDITIONS",
                href: "/terms-conditions",
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="
                  flex min-h-[40px]
                  w-[180px]
                  items-center
                  justify-center
                  rounded-[4px]
                  border border-[#f4f4f4]
                  px-[11px]
                  text-[14px]
                  font-bold
                  text-[#eeeeee]
                  transition-all duration-200
                  hover:border-[#f58220]
                  hover:bg-[#f58220]
                  hover:text-white

                  max-sm:w-full
                  max-sm:max-w-[250px]
                "
              >
                {item.label}
              </a>
            ))}

          </div>

        </div>

      </div>


      {/* ================= BOTTOM BAR ================= */}
      <div
        className="
          mx-auto
          mt-[50px]
          flex min-h-[87px]
          w-[1170px] max-w-[calc(100%-40px)]
          items-center
          justify-center
          border-t border-[#777777]

          max-lg:h-auto
          max-lg:min-h-0
          max-lg:flex-col
          max-lg:items-start
          max-lg:gap-[15px]
          max-lg:px-[20px]
          max-lg:py-[25px]

          max-sm:w-[calc(100%-30px)]
          max-sm:max-w-none
          max-sm:px-0
        "
      >

        {/* Left */}
        <div
          className="
            flex w-[390px]
            flex-col
            leading-[1.55]

            max-lg:w-full
          "
        >

          <strong className="text-[13px] text-[#eeeeee]">
            Lex Witness – India’s 1st Magazine on Legal &amp; Corporate Affairs
          </strong>

          <span className="text-[13px] text-[#dddddd]">
            A Unit of SriGro Interactive Pvt Ltd. | Image Courtesy:{" "}
            <a
              href="#"
              className="text-[#777777] hover:text-[#f58220]"
            >
              pexels.com
            </a>
          </span>

        </div>


        {/* Divider */}
        <div
          className="
            mx-[28px]
            h-[37px]
            w-px
            bg-[#777777]

            max-lg:mx-0
            max-lg:h-px
            max-lg:w-full
          "
        />


        {/* Rights */}
        <div
          className="
            w-[200px]
            whitespace-nowrap
            text-[13px]
            font-bold
            text-[#eeeeee]

            max-lg:w-full
          "
        >
          Rights of Admission Reserved
        </div>


        {/* Divider */}
        <div
          className="
            mx-[28px]
            h-[37px]
            w-px
            bg-[#777777]

            max-lg:mx-0
            max-lg:h-px
            max-lg:w-full
          "
        />


        {/* Links */}
        <div
          className="
            flex gap-[18px]
            whitespace-nowrap

            max-lg:flex-wrap
            max-lg:gap-x-[18px]
            max-lg:gap-y-[8px]
            max-lg:whitespace-normal
          "
        >

          <a
            href="/about-witness"
            className="text-[13px] text-[#eeeeee] hover:text-[#f58220]"
          >
            About Lex Witness
          </a>

          <a
            href="/summit-secretariat"
            className="text-[13px] text-[#eeeeee] hover:text-[#f58220]"
          >
            Summit Secretariat
          </a>

        </div>

      </div>


      {/* ================= FLOATING WHATSAPP ================= */}
      <a
        href="#"
        aria-label="WhatsApp"
        className="
          fixed
          bottom-[78px]
          right-[17px]
          z-[99]
          flex
          h-[41px]
          w-[41px]
          items-center
          justify-center
          rounded-[10px]
          bg-[#25D366]
          text-white
          shadow-[0_1px_5px_rgba(0,0,0,0.35)]
          transition-transform
          hover:scale-105

          max-sm:bottom-[65px]
          max-sm:right-[12px]
          max-sm:h-[40px]
          max-sm:w-[40px]
        "
      >

        {/* WhatsApp SVG */}
        <svg
          viewBox="0 0 24 24"
          className="h-[27px] w-[27px] fill-white"
          aria-hidden="true"
        >
          <path d="M12.04 2C6.52 2 2.03 6.49 2.03 12c0 1.76.46 3.48 1.34 5L2 22l5.12-1.34A9.98 9.98 0 0 0 12.04 22C17.56 22 22 17.51 22 12S17.56 2 12.04 2Zm0 18.2c-1.53 0-3.03-.41-4.34-1.18l-.31-.18-3.04.8.81-2.96-.2-.31A8.23 8.23 0 0 1 3.8 12c0-4.55 3.69-8.25 8.24-8.25s8.2 3.7 8.2 8.25-3.65 8.2-8.2 8.2Zm4.52-6.16c-.25-.13-1.48-.73-1.71-.81-.23-.08-.4-.13-.57.13-.17.25-.65.81-.8.98-.15.17-.3.19-.55.06-.25-.13-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.39.11-.52.12-.12.25-.3.38-.45.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.57-1.37-.78-1.87-.21-.5-.42-.43-.57-.44h-.49c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.09s.9 2.43 1.02 2.6c.13.17 1.77 2.7 4.3 3.79.6.26 1.07.42 1.44.54.61.19 1.17.16 1.61.1.49-.07 1.48-.61 1.69-1.2.21-.59.21-1.1.15-1.2-.06-.11-.23-.17-.48-.3Z" />
        </svg>

      </a>


      {/* ================= RECAPTCHA ================= */}
      <div
        className="
          fixed
          bottom-[10px]
          right-0
          z-[98]
          flex
          h-[50px]
          w-[54px]
          items-center
          justify-center
          rounded-l-[3px]
          bg-[#fafafa]
          shadow-[0_1px_5px_rgba(0,0,0,0.3)]
        "
      >
        <div className="text-[30px] font-bold text-[#4285f4]">
          ↻
        </div>
      </div>

    </footer>
  );
}