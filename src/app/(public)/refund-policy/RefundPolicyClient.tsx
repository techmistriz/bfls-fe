import Image from "next/image";
import Link from "next/link";

import SubscribeSection from "@/src/components/sections/SubscribeSection";

export default function RefundPolicyClient() {
  return (
    <div className="w-full">
      {/* ================= BANNER ================= */}

      <section className="relative mt-[88px] h-[398px] w-full overflow-hidden">
        <Image
          src="/images/bg_banner.png"
          alt="Refund Policy"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="relative z-10 mx-auto flex h-full max-w-[1130px] items-center px-6 lg:px-0">
          <div>
            <h1 className="font-poppins text-[38px] font-bold leading-tight text-white md:text-[52px]">
              Refund Policy
            </h1>
          </div>
        </div>

        {/* Breadcrumb */}

        <div className="absolute bottom-0 right-[7%] z-20 md:right-[20%]">
          <div className="flex h-[56px] w-[235px] items-center justify-center gap-3 bg-white font-archivo shadow-sm">
            <span className="text-[13px] text-[#555]">
              <Link href="/" className="hover:text-[#EF7F1B]">
                Home
              </Link>
            </span>

            <span className="text-[13px] text-[#999]">/</span>

            <span className="text-[13px] font-medium text-[#EF7F1B]">
              Refund Policy
            </span>
          </div>
        </div>
      </section>

      {/* ================= REFUND POLICY CONTENT ================= */}

      <section className="w-full bg-white px-5 py-20">
        <div className="mx-auto w-full max-w-[1120px] font-roboto">
          <h2 className="mb-[14px] font-poppins text-[30px] font-bold leading-[1.2] text-[#041A57] max-md:text-[25px] max-sm:text-[22px]">
            The Lex Witness Refund Policy
          </h2>

          <ol className="ml-[38px] list-decimal space-y-[2px] pl-0 text-[16px] font-normal leading-[1.55] text-[#7A7A7A] max-md:ml-[25px] max-md:text-[14px]">
            <li className="py-2 pl-[2px]">
              <strong className="font-poppins font-bold text-[#7A7A7A]">
                Magazine Sales
              </strong>

              <ul className="mt-[5px] list-disc space-y-[2px] pl-[38px] max-md:pl-[25px]">
                <li>
                  <strong>Physical Magazines:</strong> Refunds are not available
                  for physical magazines once shipped. If the magazine arrives
                  damaged, please get in touch with our customer service within
                  7 days of receipt with proof of damage, and we will arrange
                  for a replacement.
                </li>

                <li>
                  <strong>Digital Magazines:</strong> Due to the nature of
                  digital products, refunds are not available for digital
                  magazine purchases. Please ensure your device is compatible
                  with our digital format before purchase.
                </li>
              </ul>
            </li>

            <li className="py-2 pl-[2px]">
              <strong className="font-poppins font-bold text-[#7A7A7A]">
                Subscriptions
              </strong>

              <ul className="mt-[2px] list-disc space-y-[2px] pl-[38px] max-md:pl-[25px]">
                <li>
                  <strong>Print Subscriptions:</strong> Once a subscription fee
                  is paid, refunds are not available. However, you can modify
                  your subscription details, such as subscriber name, address,
                  etc.
                </li>

                <li>
                  <strong>Digital Subscriptions:</strong> Once access has been
                  granted, refunds are not available for digital subscriptions.
                  However, you can modify your subscription details, such as
                  subscriber name, email ID, etc.
                </li>
              </ul>
            </li>

            <li className="py-2 pl-[2px]">
              <strong className="font-poppins font-bold text-[#7A7A7A]">
                Summit Ticket Sales
              </strong>

              <ul className="mt-[2px] list-disc space-y-[2px] pl-[38px] max-md:pl-[25px]">
                <li>
                  <strong>Single Event Tickets and Annual Passes:</strong>{" "}
                  Refunds are unavailable for summit tickets or annual passes.
                  However, tickets and passes are transferable within the same
                  organisation. If you cannot attend, you may transfer your
                  ticket or pass to another individual within your organisation
                  by submitting a written request at least seven days before the
                  event.
                </li>
              </ul>
            </li>

            <li className="py-2 pl-[2px]">
              <strong className="font-poppins font-bold text-[#7A7A7A]">
                Event Cancellation
              </strong>

              <ul className="mt-[2px] list-disc space-y-[2px] pl-[38px] max-md:pl-[25px]">
                <li>
                  If we cancel an event, a Legacy Ticket will be issued. This
                  ticket is redeemable at any future Lex Witness Summits of your
                  choice. No refunds will be provided, but the Legacy Ticket
                  ensures your participation in future events.
                </li>
              </ul>
            </li>

            <li className="py-2 pl-[2px]">
              <strong className="font-poppins font-bold text-[#7A7A7A]">
                Changes to the Refund Policy
              </strong>

              <ul className="mt-[2px] list-disc space-y-[2px] pl-[38px] max-md:pl-[25px]">
                <li>
                  We reserve the right to update or modify this Refund Policy at
                  any time without prior notice. Changes will be effective
                  immediately upon posting on our website.
                </li>
              </ul>
            </li>

            <li className="py-2 pl-[2px]">
              <strong className="font-poppins font-bold text-[#7A7A7A]">
                Contact Information
              </strong>

              <ul className="mt-[2px] list-disc space-y-[2px] pl-[38px] max-md:pl-[25px]">
                <li>
                  If you have any questions or need further assistance, please
                  contact:
                </li>
              </ul>
            </li>
          </ol>

          <p className="mt-5 ms-5 text-[18px] text-[#7A7A7A]">
            <strong>Mr. Akshay Alagh</strong>
          </p>

          <p className="ms-5 text-[16px] text-[#7A7A7A]">
            Group Business Head
            <br />
            B1/6 LGF Hauz Khas
            <br />
            New Delhi- 110016
            <br />
            Phone: +91-9899332111
            <br />
            Email: akshay@witnesslive.in
          </p>
        </div>
      </section>

      {/* ================= SUBSCRIBE ================= */}

      <section>
        <SubscribeSection />
      </section>
    </div>
  );
}
