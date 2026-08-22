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

export default function PrivacyPolicyBanner() {
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
                            Privacy Policy
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
                            Privacy Policy
                        </span>

                    </div>
                </div>

            </section>

            <section className="w-full bg-white px-5 py-20">
                <div className="mx-auto w-full max-w-[1120px] font-roboto">

                    {/* Heading */}
                    <h2 className="mb-[14px] text-[30px] font-bold leading-[1.2] text-[#566A8F] max-md:text-[25px] max-sm:text-[22px] font-poppins">
                        Introduction
                    </h2>

                    {/* Intro */}
                    <p className="mb-[27px] text-[16px] font-normal leading-[1.6] text-[#7A7A7A] max-md:text-[14px]">
                        Welcome to Lex Witness – India’s 1st Magazine on Legal & Corporate Affairs (“we,” “us,” or “our”). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website.
                    </p>

                    {/* Heading */}
                    <h2 className="mb-[14px] text-[30px] font-bold leading-[1.2] text-[#566A8F] max-md:text-[25px] max-sm:text-[22px] font-poppins">
                        Information We Collect
                    </h2>

                    {/* Intro */}
                    <p className="mb-[27px] text-[16px] font-normal leading-[1.6] text-[#7A7A7A] max-md:text-[14px]">
                        Personal Information: We may collect personally identifiable information such as your name, email address, postal address, and phone number when you voluntarily provide it to us.
                    </p>

                    <p className="mb-[27px] text-[16px] font-normal leading-[1.6] text-[#7A7A7A] max-md:text-[14px]">
                        Non-Personal Information: We may also collect non-personal information, such as your IP address, browser type, and usage data, which does not identify you personally.
                    </p>

                    {/* Heading */}
                    <h2 className="mb-[14px] text-[30px] font-bold leading-[1.2] text-[#566A8F] max-md:text-[25px] max-sm:text-[22px] font-poppins">
                        How We Use Your Information
                    </h2>

                    {/* Intro */}
                    <p className="mb-[27px] text-[16px] font-normal leading-[1.6] text-[#7A7A7A] max-md:text-[14px]">
                        We may use your personal information for various purposes, including:
                    </p>

                    <p className="mb-[27px] text-[16px] font-normal leading-[1.6] text-[#7A7A7A] max-md:text-[14px]">
                        Providing and improving our services <br />
                        Responding to your inquiries and requests <br />
                        Sending you updates and promotional materials <br />
                        Analyzing website usage and trends <br />
                        Ensuring the security of our website
                    </p>

                    {/* Heading */}
                    <h2 className="mb-[14px] text-[30px] font-bold leading-[1.2] text-[#566A8F] max-md:text-[25px] max-sm:text-[22px] font-poppins">
                        Disclosure of Your Information
                    </h2>

                    {/* Intro */}
                    <p className="mb-[27px] text-[16px] font-normal leading-[1.6] text-[#7A7A7A] max-md:text-[14px]">
                        We may share your personal information with:
                    </p>

                    <ul className="mb-[27px] list-disc pl-[38px] max-md:pl-[25px] text-[16px] font-normal leading-[1.6] text-[#7A7A7A] max-md:text-[14px]">
                        <li>Service providers who help us operate and improve our website</li>
                        <li>Legal authorities when required by law</li>
                        <li>Third parties with your consent</li>
                    </ul>

                    {/* Heading */}
                    <h2 className="mb-[14px] text-[30px] font-bold leading-[1.2] text-[#566A8F] max-md:text-[25px] max-sm:text-[22px] font-poppins">
                        Cookies and Tracking Technologies
                    </h2>

                    {/* Intro */}
                    <p className="mb-[27px] text-[16px] font-normal leading-[1.6] text-[#7A7A7A] max-md:text-[14px]">
                        We may use cookies and similar tracking technologies to collect information about your browsing behavior on our website. You can manage your cookie preferences by adjusting your browser settings.
                    </p>

                    {/* Heading */}
                    <h2 className="mb-[14px] text-[30px] font-bold leading-[1.2] text-[#566A8F] max-md:text-[25px] max-sm:text-[22px] font-poppins">
                        Third-Party Links
                    </h2>

                    {/* Intro */}
                    <p className="mb-[27px] text-[16px] font-normal leading-[1.6] text-[#7A7A7A] max-md:text-[14px]">
                        Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites. Please review the privacy policies of third-party sites before providing them with your personal information.
                    </p>

                    {/* Heading */}
                    <h2 className="mb-[14px] text-[30px] font-bold leading-[1.2] text-[#566A8F] max-md:text-[25px] max-sm:text-[22px] font-poppins">
                        Security
                    </h2>

                    {/* Intro */}
                    <p className="mb-[27px] text-[16px] font-normal leading-[1.6] text-[#7A7A7A] max-md:text-[14px]">
                        We take reasonable measures to protect your personal information, but no method of transmission over the internet is 100% secure. We cannot guarantee the absolute security of your data.
                    </p>

                    {/* Heading */}
                    <h2 className="mb-[14px] text-[30px] font-bold leading-[1.2] text-[#566A8F] max-md:text-[25px] max-sm:text-[22px] font-poppins">
                        Your Choices
                    </h2>

                    {/* Intro */}
                    <p className="mb-[27px] text-[16px] font-normal leading-[1.6] text-[#7A7A7A] max-md:text-[14px]">
                        You have the right to access, update, or delete your personal information. You can also opt out of receiving promotional communications from us.
                    </p>

                    {/* Heading */}
                    <h2 className="mb-[14px] text-[30px] font-bold leading-[1.2] text-[#566A8F] max-md:text-[25px] max-sm:text-[22px] font-poppins">
                        Changes to this Privacy Policy
                    </h2>

                    {/* Intro */}
                    <p className="mb-[27px] text-[16px] font-normal leading-[1.6] text-[#7A7A7A] max-md:text-[14px]">
                        We may update this Privacy Policy from time to time. The updated policy will be posted on this page with a revised date.
                    </p>

                    {/* Heading */}
                    <h2 className="mb-[14px] text-[30px] font-bold leading-[1.2] text-[#566A8F] max-md:text-[25px] max-sm:text-[22px] font-poppins">
                        Contact Us
                    </h2>

                    {/* Intro */}
                    <p className="mb-[27px] text-[16px] font-normal leading-[1.6] text-[#7A7A7A] max-md:text-[14px]">
                        If you have any questions or concerns about this Privacy Policy or our data practices, please contact the nominated Data Protection Officer;
                    </p>


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