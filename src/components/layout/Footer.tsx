"use client";

import {
  contactPeople,
  summitShowcase,
  exploreLinks,
} from "@/src/data/footer.data";
import Link from "next/link";

const socialClass =
  "flex size-8 shrink-0 items-center justify-center rounded border border-[#f4f4f4] text-[#f58220] transition-colors hover:border-[#f58220] hover:bg-[#f58220] hover:text-white";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#333] font-sans text-[14px] text-[#eee]">
      {/* Main Footer */}
      <div className="mx-auto grid min-h-[523px] w-[1125px] max-w-[calc(100%-40px)] grid-cols-[300px_500px_250px] gap-5 pt-12 max-lg:w-[calc(100%-40px)] max-lg:grid-cols-1 max-lg:gap-10 max-lg:pt-10 max-sm:w-[calc(100%-30px)] max-sm:gap-9 max-sm:pt-9">
        {/* Contact */}
        <div>
          <h3 className="mb-4 text-lg font-bold text-[#f58220]">CONTACT</h3>

          {contactPeople.map((person) => (
            <div key={person.email} className="mb-6 text-[15px]">
              <strong className="mb-1 block font-bold text-[#f2f2f2]">
                {person.name}
              </strong>

              <span className="block leading-relaxed">{person.role}</span>

              <a
                href={`mailto:${person.email}`}
                className="block break-all font-semibold leading-relaxed text-white underline hover:text-[#f58220]"
              >
                {person.email}
              </a>

              <span className="block leading-relaxed">{person.phone}</span>
            </div>
          ))}

          <div className="text-[15px]">
            <strong className="mb-1 block font-bold text-[#f2f2f2]">
              Address
            </strong>

            <span className="block leading-[1.6]">
              Suite # B 1/6, LGF, Hauz Khas, New
              <br />
              Delhi – 110016
            </span>
          </div>

          {/* Social Icons */}
          <div className="mt-3 flex gap-1.5">
            <Link
              href="https://www.linkedin.com/company/389718/admin/"
              aria-label="LinkedIn"
              className={socialClass}
            >
              <svg
                viewBox="0 0 24 24"
                className="size-[18px] fill-current"
                aria-hidden="true"
              >
                <path d="M6.94 8.5H3.56V20.5H6.94V8.5ZM5.25 3.5C4.14 3.5 3.25 4.4 3.25 5.5C3.25 6.6 4.14 7.5 5.25 7.5C6.35 7.5 7.25 6.6 7.25 5.5C7.25 4.4 6.35 3.5 5.25 3.5ZM20.5 13.77C20.5 10.16 18.58 8.18 15.94 8.18C13.8 8.18 12.84 9.36 12.44 10.19V8.5H9.06V20.5H12.44V14.56C12.44 13 12.73 11.49 14.7 11.49C16.64 11.49 16.67 13.28 16.67 14.66V20.5H20.05L20.5 13.77Z" />
              </svg>
            </Link>

            <Link
              href="https://www.youtube.com/channel/UCKIRmg38oGa-y26ThnSoWcA"
              aria-label="YouTube"
              className={socialClass}
            >
              <svg
                viewBox="0 0 24 24"
                className="size-[19px] fill-current"
                aria-hidden="true"
              >
                <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.13C19.51 3.55 12 3.55 12 3.55s-7.51 0-9.38.51A3.02 3.02 0 0 0 .5 6.19C0 8.06 0 12 0 12s0 3.94.5 5.81a3.02 3.02 0 0 0 2.12 2.13c1.87.51 9.38.51 9.38.51s7.51 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.13C24 15.94 24 12 24 12s0-3.94-.5-5.81ZM9.55 15.56V8.44L15.82 12l-6.27 3.56Z" />
              </svg>
            </Link>

            <Link
              href="https://wa.link/zy0a8a"
              aria-label="Message"
              className={socialClass}
            >
              <svg
                viewBox="0 0 24 24"
                className="size-[18px] fill-none stroke-current"
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
            </Link>
          </div>
        </div>

        {/* Summit Showcase */}
        <div>
          <h3 className="mb-4 text-lg font-bold text-[#f58220]">
            LEX WITNESS SUMMITS SHOWCASE
          </h3>

          {summitShowcase.map((summit, i) => (
            <div
              key={summit.title}
              className={`text-[15px] ${i < summitShowcase.length - 1 ? "mb-5" : ""}`}
            >
              <strong className="mb-1 block break-words font-bold text-[#f2f2f2]">
                {summit.title}
              </strong>

              <span className="block leading-relaxed">
                {summit.description}
              </span>

              <span className="block leading-relaxed">{summit.location}</span>

              <span className="block leading-relaxed">
                To access past editions, visit{" "}
                <a
                  href={summit.linkHref}
                  className="text-[#f58220] hover:underline"
                >
                  {summit.linkLabel}
                </a>
              </span>
            </div>
          ))}
        </div>

        {/* Explore */}
        <div>
          <h3 className="mb-4 text-lg font-bold text-[#f58220]">
            EXPLORE FURTHER!
          </h3>

          <p className="mb-5 text-[15px] leading-[1.7]">
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

          <div className="flex flex-col items-start gap-4">
            {exploreLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex min-h-10 w-[180px] items-center justify-center rounded border border-[#f4f4f4] px-3 text-sm font-bold hover:border-[#f58220] hover:bg-[#f58220] hover:text-white max-sm:w-full max-sm:max-w-[250px]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 w-full border-t-2 border-[#777]">
        <div className="mx-auto flex min-h-21.75 w-292.5 max-w-[calc(100%-40px)] items-center px-6 max-lg:h-auto max-lg:min-h-0 max-lg:flex-col max-lg:items-start max-lg:gap-4 max-lg:py-6 max-sm:w-[calc(100%-30px)]">
          <div className="flex flex-1 flex-col leading-relaxed ">
            <strong className="font-medium">
              Lex Witness – India’s 1st Magazine on Legal &amp; Corporate
              Affairs
            </strong>
            <div>
              <span className="text-[#ddd] font-normal">
                A Unit of SriGro Interactive Pvt Ltd. | Image Courtesy:{" "}
              </span>
              <a
                href="https://pexels.com/"
                className="text-[#777] hover:text-[#f58220]"
              >
                pexels.com
              </a>
            </div>
          </div>

          <div className="mx-7 h-[37px] w-[1px] shrink-0 bg-[#edebeb] max-lg:mx-0 max-lg:h-px max-lg:w-full" />

          <div className="flex w-[200px] shrink-0 items-center justify-center font-medium">
            Rights of Admission Reserved
          </div>

          <div className="mx-7 h-[37px] w-[2px] shrink-0 bg-[#edebeb] max-lg:mx-0 max-lg:h-px max-lg:w-full" />

          <div className="flex flex-1 justify-center gap-[18px] whitespace-nowrap max-lg:flex-wrap max-lg:gap-2 max-lg:whitespace-normal">
            <Link
              href="/about-witness"
              className="hover:text-[#f58220] font-medium"
            >
              About Lex Witness
            </Link>

            <Link
              href="/summit-secretariat"
              className="hover:text-[#f58220] font-medium"
            >
              Summit Secretariat
            </Link>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <div className="fixed bottom-8 right-4 md:bottom-24 md:right-6 z-50 group">
        {/* Tooltip */}
        <a
          href="https://api.whatsapp.com/send?phone=919899332111&text=Hi%2C%20I%27d%20Like%20to%20Know%20More%20About%20The%20Lex%20Witness%208th%20Annual%20Banking%20%26%20Finance%20Legal%20Summit%202025"
          target="_blank"
          rel="noopener noreferrer"
          className="font-roboto absolute right-16 top-1/2 -translate-y-1/2 bg-[#25D366] text-white text-[15px] font-normal leading-6 px-3 py- rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-200 whitespace-nowrap cursor-pointer"
        >
          Get In Touch
        </a>

        {/* Button */}
        <a
          href="https://api.whatsapp.com/send?phone=919899332111&text=Hi%2C%20I%27d%20Like%20to%20Know%20More%20About%20The%20Lex%20Witness%208th%20Annual%20Banking%20%26%20Finance%20Legal%20Summit%202025"
          target="_blank"
          rel="noopener noreferrer"
          className="
              bg-gradient-to-b
              from-[#5BF673]
              to-[#32C131]
              w-12 h-12 md:w-13 md:h-13
              rounded-xl
              flex items-center justify-center
              shadow-[0_8px_20px_rgba(50,193,49,0.35)]
              border border-[#74F58A]
              transition-all duration-300
            "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            className="w-6 h-6 md:w-9 md:h-9"
          >
            <path d="M20.52 3.48A11.79 11.79 0 0012.05 0C5.49 0 .14 5.35.14 11.91c0 2.1.55 4.15 1.59 5.96L0 24l6.33-1.66a11.84 11.84 0 005.72 1.46h.01c6.56 0 11.91-5.35 11.91-11.91 0-3.18-1.24-6.17-3.45-8.41zm-8.47 18.3h-.01a9.9 9.9 0 01-5.05-1.39l-.36-.21-3.76.99 1-3.66-.24-.38a9.86 9.86 0 01-1.51-5.24c0-5.46 4.44-9.9 9.91-9.9 2.64 0 5.12 1.03 6.98 2.89a9.83 9.83 0 012.89 6.98c0 5.47-4.44 9.91-9.9 9.91zm5.43-7.39c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15s-.77.97-.95 1.17c-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.48-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
