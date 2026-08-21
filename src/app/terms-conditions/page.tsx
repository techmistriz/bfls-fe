"use client";

import SubscribeSection from "@/src/components/ReuseSection/SubscribeSection";

import Image from "next/image";

const editions = [
  {
    image: "/images/10-scaled.jpg",
    title: "The 8th Annual Banking & Finance Legal Summit 2025",
  },
  {
    image: "/images/65-scaled.jpg",
    title: "The 7th Annual Banking & Finance Legal Summit 2024",
  },
  {
    image: "/images/10-scaled.jpg",
    title: "The 6th Annual Banking & Finance Legal Summit 2019",
  },
  {
    image: "/images/65-scaled.jpg",
    title: "The 5th Annual Banking & Finance Legal Summit 2018",
  },
  {
    image: "/images/10-scaled.jpg",
    title: "The 4th Annual Banking & Finance Legal Summit 2017",
  },
  {
    image: "/images/65-scaled.jpg",
    title: "The 3rd Annual Banking & Finance Legal Summit 2016",
  },
];

export default function PastEditionsBanner() {
  return (
    <div className="w-full">

      {/* ================= BANNER ================= */}

      <section className="relative mt-[88px] h-[398px] w-full overflow-hidden">

        <Image
          src="/images/bg_banner.png"
          alt="Past Editions"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="relative z-10 mx-auto flex h-full max-w-[1130px] items-center px-6 lg:px-0">
          <div>
            <h1 className="font-poppins text-[38px] font-bold leading-tight text-white md:text-[52px]">
              Terms & Conditions
            </h1>

            {/* <p className="mt-1 font-archivo text-[16px] font-medium text-white md:text-[17px]">
              A sneak peek into our past success stories
            </p> */}
          </div>
        </div>

        {/* Breadcrumb */}

        <div className="absolute bottom-0 right-[7%] z-20 md:right-[20%]">
          <div className="flex h-[56px] w-[235px] items-center justify-center gap-3 bg-white font-archivo shadow-sm">

            <span className="text-[13px] text-[#555]">
              <a href="/" className="hover:text-[#EF7F1B]">Home</a>
            </span>

            <span className="text-[13px] text-[#999]">
              /
            </span>

            <span className="text-[13px] font-medium text-[#EF7F1B]">
              Terms & Conditions
            </span>

          </div>
        </div>

      </section>

      <section className="w-full bg-white px-5 py-20">
      <div className="mx-auto w-full max-w-[1120px] font-roboto">

        {/* Heading */}
        <h2 className="mb-[14px] text-[30px] font-bold leading-[1.2] text-[#041A57] max-md:text-[25px] max-sm:text-[22px] font-poppins">
          The Lex Witness Terms & Condition
        </h2>

        {/* Intro */}
        <p className="mb-[27px] text-[16px] font-normal leading-[1.6] text-[#7A7A7A] max-md:text-[14px]">
          Welcome to Lex Witness – India&apos;s 1<sup>st</sup> Magazine on Legal &
          Corporate Affairs. If you continue to browse and use this website,
          you are agreeing to comply with and be bound by the following terms
          and conditions of use, which together with our privacy policy govern
          Lex Witness – India&apos;s 1<sup>st</sup> Magazine on Legal &
          Corporate Affairs&apos; relationship with you in relation to this
          website.
        </p>

        {/* Terms List */}
        <ol className="ml-[38px] list-decimal space-y-[2px] font-normal pl-0 text-[16px] leading-[1.55] text-[#7A7A7A] max-md:ml-[25px] max-md:text-[14px]">

          {/* 1. Use of Website */}
          <li className="pl-[2px]">
            <strong className="font-bold text-[#7A7A7A]">
              Use of the Website
            </strong>

            <ul className="mt-[2px] list-disc space-y-[2px] pl-[38px] max-md:pl-[25px]">
              <li>
                The content of the pages of this website is for your general
                information and use only. It is subject to change without
                notice.
              </li>

              <li>
                Your use of any information or materials on this website is
                entirely at your own risk, for which we shall not be liable. It
                shall be your own responsibility to ensure that any products,
                services, or information available through this website meet
                your specific requirements.
              </li>

              <li>
                Unauthorized use of this website may give rise to a claim for
                damages and/or be a criminal offence.
              </li>
            </ul>
          </li>

          {/* 2. Intellectual Property */}
          <li className="pl-[2px]">
            <strong className="font-bold text-[#7A7A7A]">
              Intellectual Property
            </strong>

            <ul className="mt-[2px] list-disc space-y-[2px] pl-[38px] max-md:pl-[25px]">
              <li>
                This website contains material which is owned by or licensed
                to us. This material includes, but is not limited to, the
                design, layout, look, appearance, and graphics. Reproduction is
                prohibited without prior consent.
              </li>

              <li>
                All trademarks reproduced on this website, which are not the
                property of, or licensed to the operator, are acknowledged on
                the website.
              </li>
            </ul>
          </li>

          {/* 3. Product and Service Pricing */}
          <li className="pl-[2px]">
            <strong className="font-bold text-[#7A7A7A]">
              Product and Service Pricing
            </strong>

            <ul className="mt-[2px] list-disc space-y-[2px] pl-[38px] max-md:pl-[25px]">
              <li>
                Prices for products and services are subject to change without
                notice. We reserve the right to modify or discontinue services
                without notice at any time.
              </li>

              <li>
                We shall not be liable to you or to any third party for any
                modification, price change, suspension, or discontinuance of
                services.
              </li>
            </ul>
          </li>

          {/* 4. Payment and Refunds */}
          <li className="pl-[2px]">
            <strong className="font-bold text-[#7A7A7A]">
              Payment and Refunds
            </strong>

            <ul className="mt-[2px] list-disc space-y-[2px] pl-[38px] max-md:pl-[25px]">
              <li>
                All payments must be made in full at the time of purchase. If any issues arise with payment, please contact us immediately at Akshay Alagh, Group Business Head, Lex Witness – India’s 1st Magazine on Legal & Corporate Affairs, B 1/6, LGF, Hauz Khas, New Delhi – 110016, M: 9899332111, E: <a href="mailto:Akshay@WitnessLive.in.">Akshay@WitnessLive.in.</a>
              </li>

              <li>
                For information regarding refunds, please refer to our Refund Policy.
              </li>
            </ul>
          </li>

          {/* 5. Subscription and Cancellation */}
          <li className="pl-[2px]">
            <strong className="font-bold text-[#7A7A7A]">
              Subscription and Cancellation
            </strong>

            <ul className="mt-[2px] list-disc space-y-[2px] pl-[38px] max-md:pl-[25px]">
              <li>
                If you have subscribed to our services, you can cancel your subscription at any time by contacting us. Please refer to our Refund Policy for details on subscription cancellations and any applicable refund eligibility.
              </li>
            </ul>
          </li>

          {/* 6. Limitation of Liability */}
          <li className="pl-[2px]">
            <strong className="font-bold text-[#7A7A7A]">
              Limitation of Liability
            </strong>

            <ul className="mt-[2px] list-disc space-y-[2px] pl-[38px] max-md:pl-[25px]">
              <li>
                To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website.
              </li>

              <li>We will not be liable for any loss or damage of any nature arising from the use of the website or the products/services offered.</li>
            </ul>
          </li>

          {/* 7. Governing Law */}
          <li className="pl-[2px]">
            <strong className="font-bold text-[#7A7A7A]">
              Governing Law
            </strong>

            <ul className="mt-[2px] list-disc space-y-[2px] pl-[38px] max-md:pl-[25px]">
              <li>
                These Terms & Conditions are governed by and construed in accordance with the laws of New Delhi, NCT, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </li>
            </ul>
          </li>

          {/* 8. Changes to Terms & Conditions */}
          <li className="pl-[2px]">
            <strong className="font-bold text-[#7A7A7A]">
              Changes to Terms & Conditions
            </strong>

            <ul className="mt-[2px] list-disc space-y-[2px] pl-[38px] max-md:pl-[25px]">
              <li>
                We reserve the right, at our sole discretion, to update, change, or replace any part of these Terms & Conditions by posting updates and changes to our website. It is your responsibility to check our website periodically for changes.
              </li>
            </ul>
          </li>

        </ol>
      </div>
    </section>
      

      <section>
        <SubscribeSection />
      </section>

    </div>
  );
}