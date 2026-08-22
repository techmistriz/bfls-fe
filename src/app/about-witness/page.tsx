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

            <section className="w-full bg-white mt-20">
                <div className="mx-auto max-w-[1155px] px-5 pb-16 pt-4">
                    {/* Small orange heading */}
                    <div className="text-center">
                        <p className="text-[30px] font-semibold leading-[1.2] text-[#f58220]">
                            Your Witness Please
                        </p>

                        {/* Main heading */}
                        <h2 className="mt-3 text-[44px] font-bold leading-[1.15] text-[#48688f] font-poppins">
                            Why Lex Witness?
                        </h2>

                        {/* Red underline */}
                        <div className="mx-auto mt-4 h-[3px] w-[120px] bg-[#C9060A]" />
                    </div>

                    {/* Content */}
                    <div className="mt-6 text-[16px] leading-[1.65] text-[#7A7A7A] font-roboto">
                        <p>
                            The Indian legal universe has close to 5 million individuals. This
                            represents highest number in the world who, directly or indirectly,
                            are a part of it. Lex Witness is a high quality monthly magazine
                            with the power of fresh and original content that deals exclusively
                            with subjects on legality. Some of India&apos;s top-notch
                            practitioners and experts contribute in Lex Witness on subjects
                            relevant to all stakeholders in this profession.
                        </p>

                        <p className="mt-6">
                            Lex Witness, ever since its inception in 2009, has become India&apos;s
                            most credible platform for the legal luminaries here to opine,
                            comment and share their views. With an interesting blend of opinion
                            pieces, commentary, reportage, analysis, interviews and movements,
                            Lex Witness is for the entire fraternity of In House and External
                            Counsel besides key decision makers, luminaries, experts, policy
                            makers, bureaucracy and the industry captains in India.
                        </p>

                        {/* Sub heading */}
                        <h3 className="mt-5 text-[17px] font-bold text-[#7A7A7A]">
                            A Must Read
                        </h3>

                        <p className="mt-7">
                            The readers of Lex Witness are high-profile, influential HNI’s. They are the ones who frame the laws and the ones who practice it. Lex Witness covers an interesting bandwidth of readers right from the core legal community of the country that includes the Hon’ble Judges, Lawyers, Bureaucrats, Corporate Legal Professionals and other allied professionals. Lex Witness is available in all the major metropolitan cities of the country and not only India, Lex Witness has a prompt presence in the global legal community as well.
                        </p>
                        <p className="mt-7"><strong>To know more, get in touch with our brand experts;</strong> <br />
                        Bhupinder Kaur | +91-9654155065 | <a className="text-[#c9060a]" href="mailto:bhupinder@witnesslive.in">bhupinder@witnesslive.in</a> <br />
                        Neelima Maheshwari | +91-8800841600 | <a className="text-[#c9060a]" href="mailto:neelima.maheshwari@witnesslive.in">neelima.maheshwari@witnesslive.in</a>
                        </p>
                        <p className="mt-7"><strong>Lex Witness – India’s 1st Magazine on Legal & Corporate Affairs</strong> <br />
                        Suite 1/6, Lower Ground Floor, Block B, Hauz Khas, New Delhi – 110016
                        </p>
                    </div>
                </div>
            </section>


            <section>
                <SubscribeSection />
            </section>

        </div>
    );
}