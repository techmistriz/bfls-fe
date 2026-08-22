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

export default function RefundPolicyBanner() {
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
                            Refund Policy
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
                            Refund Policy
                        </span>

                    </div>
                </div>

            </section>

            <section className="w-full bg-white px-5 py-20">
                <div className="mx-auto w-full max-w-[1120px] font-roboto">

                    {/* Heading */}
                    <h2 className="mb-[14px] text-[30px] font-bold leading-[1.2] text-[#041A57] max-md:text-[25px] max-sm:text-[22px] font-poppins">
                        The Lex Witness Refund Policy
                    </h2>

                    {/* Intro */}
                    {/* <p className="mb-[27px] text-[16px] font-normal leading-[1.6] text-[#7A7A7A] max-md:text-[14px]">
          Welcome to Lex Witness – India&apos;s 1<sup>st</sup> Magazine on Legal &
          Corporate Affairs. If you continue to browse and use this website,
          you are agreeing to comply with and be bound by the following terms
          and conditions of use, which together with our privacy policy govern
          Lex Witness – India&apos;s 1<sup>st</sup> Magazine on Legal &
          Corporate Affairs&apos; relationship with you in relation to this
          website.
        </p> */}

                    {/* Terms List */}
                    <ol className="ml-[38px] list-decimal space-y-[2px] font-normal pl-0 text-[16px] leading-[1.55] text-[#7A7A7A] max-md:ml-[25px] max-md:text-[14px]">

                        {/* 1. Use of Website */}
                        <li className="pl-[2px] py-2">
                            <strong className="font-bold text-[#7A7A7A] font-poppins">
                                Magazine Sales
                            </strong>

                            <ul className="mt-[5px] list-disc space-y-[2px] pl-[38px] max-md:pl-[25px]">
                                <li>
                                    <strong>Physical Magazines:</strong> Refunds are not available for physical magazines once shipped. If the magazine arrives damaged, please get in touch with our customer service within 7 days of receipt with proof of damage, and we will arrange for a replacement.
                                </li>
                                <li><strong>Digital Magazines:</strong> Due to the nature of digital products, refunds are not available for digital magazine purchases. Please ensure your device is compatible with our digital format before purchase.</li>

                            </ul>
                        </li>

                        {/* 2. Intellectual Property */}
                        <li className="pl-[2px] py-2">
                            <strong className="font-bold text-[#7A7A7A] font-poppins">
                                Subscriptions
                            </strong>

                            <ul className="mt-[2px] list-disc space-y-[2px] pl-[38px] max-md:pl-[25px]">
                                <li>
                                    <strong>Print Subscriptions:</strong> Once a subscription fee is paid, refunds are not available. However, you can modify your subscription details, such as subscriber name, address, etc.
                                </li>

                                <li>
                                    <strong>Digital Subscriptions:</strong> Once access has been granted, refunds are not available for digital subscriptions. However, you can modify your subscription details, such as subscriber name, email ID, etc.
                                </li>
                            </ul>
                        </li>

                        {/* 3. Product and Service Pricing */}
                        <li className="pl-[2px] py-2">
                            <strong className="font-bold text-[#7A7A7A] font-poppins">
                                Summit Ticket Sales
                            </strong>

                            <ul className="mt-[2px] list-disc space-y-[2px] pl-[38px] max-md:pl-[25px]">
                                <li>
                                    <strong>Single Event Tickets and Annual Passes:</strong> Refunds are unavailable for summit tickets or annual passes. However, tickets and passes are transferable within the same organisation. If you cannot attend, you may transfer your ticket or pass to another individual within your organisation by submitting a written request at least seven days before the event.
                                </li>

                            </ul>
                        </li>

                        {/* 4. Payment and Refunds */}
                        <li className="pl-[2px] py-2">
                            <strong className="font-bold text-[#7A7A7A] font-poppins">
                                Event Cancellation
                            </strong>

                            <ul className="mt-[2px] list-disc space-y-[2px] pl-[38px] max-md:pl-[25px]">
                                <li>
                                    If we cancel an event, a Legacy Ticket will be issued. This ticket is redeemable at any future Lex Witness Summits of your choice. No refunds will be provided, but the Legacy Ticket ensures your participation in future events.
                                </li>

                            </ul>
                        </li>

                        {/* 5. Subscription and Cancellation */}
                        <li className="pl-[2px] py-2">
                            <strong className="font-bold text-[#7A7A7A] font-poppins">
                                Changes to the Refund Policy
                            </strong>

                            <ul className="mt-[2px] list-disc space-y-[2px] pl-[38px] max-md:pl-[25px]">
                                <li>
                                    We reserve the right to update or modify this Refund Policy at any time without prior notice. Changes will be effective immediately upon posting on our website.
                                </li>
                            </ul>
                        </li>

                        {/* 6. Limitation of Liability */}
                        <li className="pl-[2px] py-2">
                            <strong className="font-bold text-[#7A7A7A] font-poppins">
                                Contact Information
                            </strong>

                            <ul className="mt-[2px] list-disc space-y-[2px] pl-[38px] max-md:pl-[25px]">
                                <li>
                                    If you have any questions or need further assistance, please contact:
                                </li>
                            </ul>
                        </li>

                    </ol>

                    <p className="text-[#7a7a7a] font-[18px] mt-5 ms-5"><strong>Mr. Akshay Alagh</strong></p>
                    <p className="text-[#7a7a7a] ms-5 font-[16px]">Group Business Head <br />
                        B1/6 LGF Hauz Khas <br />
                        New Delhi- 110016 <br />
                        Phone: +91-9899332111 <br />
                        Email: akshay@witnesslive.in</p>
                </div>
            </section>


            <section>
                <SubscribeSection />
            </section>

        </div>
    );
}