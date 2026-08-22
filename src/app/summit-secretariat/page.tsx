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

export default function AboutWitnessBanner() {
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
                            About Lex Witness
                        </h1>

                        <p className="mt-1 font-archivo text-[16px] font-medium text-white md:text-[17px]">
                            Your Witness Please!
                        </p>
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
                            About Lex Witness
                        </span>

                    </div>
                </div>

            </section>

            <section>
                <SubscribeSection />
            </section>

        </div>
    );
}