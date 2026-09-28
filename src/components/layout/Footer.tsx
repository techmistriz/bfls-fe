"use client";

import {
  contactPeople,
  summitShowcase,
  exploreLinks,
} from "@/src/data/static/footer";
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
            <Link href="#" aria-label="LinkedIn" className={socialClass}>
              <svg
                viewBox="0 0 24 24"
                className="size-[18px] fill-current"
                aria-hidden="true"
              >
                <path d="M6.94 8.5H3.56V20.5H6.94V8.5ZM5.25 3.5C4.14 3.5 3.25 4.4 3.25 5.5C3.25 6.6 4.14 7.5 5.25 7.5C6.35 7.5 7.25 6.6 7.25 5.5C7.25 4.4 6.35 3.5 5.25 3.5ZM20.5 13.77C20.5 10.16 18.58 8.18 15.94 8.18C13.8 8.18 12.84 9.36 12.44 10.19V8.5H9.06V20.5H12.44V14.56C12.44 13 12.73 11.49 14.7 11.49C16.64 11.49 16.67 13.28 16.67 14.66V20.5H20.05L20.5 13.77Z" />
              </svg>
            </Link>

            <Link href="#" aria-label="YouTube" className={socialClass}>
              <svg
                viewBox="0 0 24 24"
                className="size-[19px] fill-current"
                aria-hidden="true"
              >
                <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.13C19.51 3.55 12 3.55 12 3.55s-7.51 0-9.38.51A3.02 3.02 0 0 0 .5 6.19C0 8.06 0 12 0 12s0 3.94.5 5.81a3.02 3.02 0 0 0 2.12 2.13c1.87.51 9.38.51 9.38.51s7.51 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.13C24 15.94 24 12 24 12s0-3.94-.5-5.81ZM9.55 15.56V8.44L15.82 12l-6.27 3.56Z" />
              </svg>
            </Link>

            <Link href="#" aria-label="Message" className={socialClass}>
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
              <a href="#" className="text-[#777] hover:text-[#f58220]">
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

      {/* Floating WhatsApp */}
      <a
        href="#"
        aria-label="WhatsApp"
        className="fixed right-[17px] bottom-[78px] z-[99] flex size-[41px] items-center justify-center rounded-[10px] bg-[#25D366] text-white shadow-[0_1px_5px_rgba(0,0,0,0.35)] hover:scale-105 max-sm:right-3 max-sm:bottom-[65px] max-sm:size-10"
      >
        <svg
          viewBox="0 0 24 24"
          className="size-[27px] fill-white"
          aria-hidden="true"
        >
          <path d="M12.04 2C6.52 2 2.03 6.49 2.03 12c0 1.76.46 3.48 1.34 5L2 22l5.12-1.34A9.98 9.98 0 0 0 12.04 22C17.56 22 22 17.51 22 12S17.56 2 12.04 2Zm0 18.2c-1.53 0-3.03-.41-4.34-1.18l-.31-.18-3.04.8.81-2.96-.2-.31A8.23 8.23 0 0 1 3.8 12c0-4.55 3.69-8.25 8.24-8.25s8.2 3.7 8.2 8.25-3.65 8.2-8.2 8.2Zm4.52-6.16c-.25-.13-1.48-.73-1.71-.81-.23-.08-.4-.13-.57.13-.17.25-.65.81-.8.98-.15.17-.3.19-.55.06-.25-.13-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.39.11-.52.12-.12.25-.3.38-.45.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.57-1.37-.78-1.87-.21-.5-.42-.43-.57-.44h-.49c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.09s.9 2.43 1.02 2.6c.13.17 1.77 2.7 4.3 3.79.6.26 1.07.42 1.44.54.61.19 1.17.16 1.61.1.49-.07 1.48-.61 1.69-1.2.21-.59.21-1.1.15-1.2-.06-.11-.23-.17-.48-.3Z" />
        </svg>
      </a>

      {/* reCAPTCHA */}
      <div className="fixed right-0 bottom-2 z-[98] flex size-[54px] items-center justify-center rounded-l bg-[#fafafa] shadow-[0_1px_5px_rgba(0,0,0,0.3)]">
        <div className="text-3xl font-bold text-[#4285f4]">↻</div>
      </div>
    </footer>
  );
}
