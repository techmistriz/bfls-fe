"use client";

import { useState } from "react";
import SubscribeSection from "@/src/components/ReuseSection/SubscribeSection";

import Image from "next/image";

export default function AboutWitnessBanner() {

    const [openEdition, setOpenEdition] = useState<number | null>(0);

    const toggleEdition = (index: number) => {
        setOpenEdition((current) =>
            current === index ? null : index
        );
    };

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
                            The Lex Witness Summit Secretariat
                        </h1>

                        {/* <p className="mt-1 font-archivo text-[16px] font-medium text-white md:text-[17px]">
                            Your Witness Please!
                        </p> */}

                    </div>
                </div>

                {/* Breadcrumb */}

                <div className="absolute bottom-0 right-[7%] z-20 md:right-[20%]">

                    <div className="flex h-[56px] w-[235px] items-center justify-center gap-3 bg-white font-archivo shadow-sm">

                        <span className="text-[13px] text-[#555]">
                            <a
                                href="/"
                                className="hover:text-[#EF7F1B]"
                            >
                                Home
                            </a>
                        </span>

                        <span className="text-[13px] text-[#999]">
                            /
                        </span>

                        <span className="text-[13px] font-medium text-[#EF7F1B]">
                            Summit Secretariat
                        </span>

                    </div>

                </div>

            </section>


            {/* =====================================================
                SUMMIT SECRETARIAT CONTENT
            ====================================================== */}

            <section className="w-full bg-white">

                <div
                    className="
                        mx-auto
                        max-w-[1130px]
                        px-6
                        py-[55px]

                        lg:px-0
                        lg:py-[60px]

                        max-md:py-[45px]
                        max-sm:px-[20px]
                        max-sm:py-[35px]
                    "
                >

                    <div
                        className="
                            grid
                            grid-cols-[1fr_320px]
                            gap-[40px]

                            max-lg:grid-cols-[1fr_300px]
                            max-md:grid-cols-1
                            max-md:gap-[45px]
                        "
                    >

                        {/* =================================================
                            LEFT CONTENT
                        ================================================== */}

                        <div className="min-w-0">

                            {/* Intro Paragraph */}

                            <p
                                className="
                                    mb-[15px]
                                    font-archivo
                                    text-[16px]
                                    leading-[1.6]
                                    text-[#666]

                                    max-sm:mb-[30px]
                                    max-sm:text-[14px]
                                    max-sm:leading-[1.7]
                                "
                            >
                                Typically known as an A to A magazine – an adult to adult magazine as they say, Lex Witness has been a platform for knowledge sharing and thought leadership on various industry sectors. It is through the space of the magazine as well as the pedigree of summits which it has been organising ever since its inception that industry veterans bring into limelight various undercurrents of law in their respective chambers and corporate offices!
                            </p>

                            <p
                                className="
                                    mb-[38px]
                                    font-archivo
                                    text-[16px]
                                    leading-[1.6]
                                    text-[#666]

                                    max-sm:mb-[30px]
                                    max-sm:text-[14px]
                                    max-sm:leading-[1.7]
                                "
                            >
                                A major development here at the action packed Summit
                                Secretariat is the extension of these services to
                                various organizations who have started entrusting
                                Witness with the responsibility to create, execute and
                                conclude Summit Concepts to meet their respective
                                purposes. Witness through its already existing
                                ecosystem of summit management team is all set to
                                provide these services with an added expertise of
                                quality content through the magazine presence. You
                                have an idea and we have a summit to showcase it! For
                                more details on our Summit Secretariat services please
                                contact us.
                            </p>


                            {/* =================================================
                                ORANGE HEADING
                            ================================================== */}

                            <h2
                                className="
                                    mb-[18px]
                                    font-archivo
                                    text-[24px]
                                    font-bold
                                    leading-[1.3]
                                    text-[#f58220]

                                    max-sm:text-[20px]
                                    max-sm:leading-[1.4]
                                "
                            >
                                Meanwhile here’s a gist of The Lex Witness Summits so far;
                            </h2>


                            {/* =================================================
                                ACCORDION
                            ================================================== */}

                            <div className="w-full">

                                {/* ================= 2023 ================= */}

                                <div className="mb-[18px] w-full">

                                    <button
                                        type="button"
                                        onClick={() => toggleEdition(0)}
                                        className={`
                                            flex
                                            min-h-[54px]
                                            w-full
                                            items-center
                                            justify-between
                                            px-[30px]
                                            text-left
                                            font-archivo
                                            text-[16px]
                                            font-bold
                                            transition-all

                                            max-sm:min-h-[52px]
                                            max-sm:px-[18px]
                                            max-sm:text-[14px]

                                            ${openEdition === 0
                                                ? "bg-[#1195d0] text-white"
                                                : "bg-[#f3f5f7] text-[#111]"
                                            }
                                        `}
                                    >

                                        <span>
                                            Lex Witness Summits 2023
                                        </span>

                                        <span className="ml-4 shrink-0">

                                            {openEdition === 0 ? (
                                                <svg
                                                    width="18"
                                                    height="18"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                >
                                                    <path d="m6 15 6-6 6 6" />
                                                </svg>
                                            ) : (
                                                <svg
                                                    width="18"
                                                    height="18"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                >
                                                    <path d="m6 9 6 6 6-6" />
                                                </svg>
                                            )}

                                        </span>

                                    </button>


                                    {openEdition === 0 && (

                                        <div
                                            className="
                                                grid
                                                grid-cols-[240px_1fr]
                                                gap-[30px]
                                                bg-[#f5f5f5]
                                                px-[10px]
                                                py-[20px]

                                                max-sm:grid-cols-1
                                                max-sm:gap-[18px]
                                                max-sm:px-[10px]
                                                max-sm:py-[15px]
                                            "
                                        >

                                            {/* Image */}

                                            <div
                                                className="
                                                    flex
                                                    min-h-[215px]
                                                    items-start
                                                    justify-center
                                                    bg-[#f1f1f1]
                                                    p-[10px]

                                                    max-sm:min-h-0
                                                "
                                            >

                                                <div className="relative aspect-[1.35/1] w-full max-w-[230px] overflow-hidden">

                                                    <Image
                                                        src="/images/10-scaled.jpg"
                                                        alt="Lex Witness Summits 2023"
                                                        fill
                                                        className="object-cover"
                                                    />

                                                </div>

                                            </div>


                                            {/* Content */}

                                            <div
                                                className="
                                                    font-archivo
                                                    text-[16px]
                                                    leading-[1.5]
                                                    text-[#222]

                                                    max-sm:text-[14px]
                                                    max-sm:leading-[1.65]
                                                "
                                            >

                                                <p>
                                                    <strong>
                                                        The Grand Masters 2023 – New Delhi,
                                                        Mumbai &amp; Bengaluru Edition
                                                    </strong>{" "}
                                                    focused on certain pre identified set
                                                    of topical issues and challenges that
                                                    the In-House Counsel has been facing in
                                                    order to ensure his role being
                                                    implemented successfully. Apart from a
                                                    common set of topics we had also brought
                                                    in an element of fireside chats between
                                                    an in-house counsel &amp; external counsel
                                                    which was well received by the audience.
                                                    With expert industry practitioners as
                                                    speakers and a variegated audience
                                                    profile, the summit proved to be one of
                                                    the best learning and networking
                                                    opportunities under one roof.
                                                </p>

                                            </div>

                                        </div>

                                    )}

                                </div>


                                {/* ================= 2021 ================= */}

                                <div className="mb-[18px] w-full">

                                    <button
                                        type="button"
                                        onClick={() => toggleEdition(1)}
                                        className={`
                                            flex
                                            min-h-[54px]
                                            w-full
                                            items-center
                                            justify-between
                                            bg-[#f3f5f7]
                                            px-[30px]
                                            text-left
                                            font-archivo
                                            text-[16px]
                                            font-bold
                                            text-[#111]
                                            transition-all
                                            hover:bg-[#e9edf0]

                                            max-sm:min-h-[52px]
                                            max-sm:px-[18px]
                                            max-sm:text-[14px]
                                            ${openEdition === 0
                                                ? "bg-[#1195d0] text-white"
                                                : "bg-[#f3f5f7] text-[#111]"
                                            }
                                        `}
                                    >

                                        <span>
                                            Lex Witness Summits 2021
                                        </span>

                                        <span className="ml-4 shrink-0">

                                            {openEdition === 1 ? (
                                                <svg
                                                    width="18"
                                                    height="18"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                >
                                                    <path d="m6 15 6-6 6 6" />
                                                </svg>
                                            ) : (
                                                <svg
                                                    width="18"
                                                    height="18"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                >
                                                    <path d="m6 9 6 6 6-6" />
                                                </svg>
                                            )}

                                        </span>

                                    </button>


                                    {openEdition === 1 && (

                                        <div
                                            className="
                                                grid
                                                grid-cols-[240px_1fr]
                                                gap-[30px]
                                                bg-[#f5f5f5]
                                                px-[10px]
                                                py-[20px]

                                                max-sm:grid-cols-1
                                                max-sm:gap-[18px]
                                                max-sm:px-[10px]
                                                max-sm:py-[15px]
                                            "
                                        >

                                            {/* Image */}

                                            <div
                                                className="
                                                    flex
                                                    min-h-[215px]
                                                    items-start
                                                    justify-center
                                                    bg-[#f1f1f1]
                                                    p-[10px]

                                                    max-sm:min-h-0
                                                "
                                            >

                                                <div className="relative aspect-[1.35/1] w-full max-w-[230px] overflow-hidden">

                                                    <Image
                                                        src="/images/10-scaled.jpg"
                                                        alt="Lex Witness Summits 2023"
                                                        fill
                                                        className="object-cover"
                                                    />

                                                </div>

                                            </div>


                                            {/* Content */}

                                            <div
                                                className="
                                                    font-archivo
                                                    text-[16px]
                                                    leading-[1.5]
                                                    text-[#222]

                                                    max-sm:text-[14px]
                                                    max-sm:leading-[1.65]
                                                "
                                            >

                                                <p>
                                                    <strong>
                                                        The Grand Masters 2023 – New Delhi,
                                                        Mumbai &amp; Bengaluru Edition
                                                    </strong>{" "}
                                                    focused on certain pre identified set
                                                    of topical issues and challenges that
                                                    the In-House Counsel has been facing in
                                                    order to ensure his role being
                                                    implemented successfully. Apart from a
                                                    common set of topics we had also brought
                                                    in an element of fireside chats between
                                                    an in-house counsel &amp; external counsel
                                                    which was well received by the audience.
                                                    With expert industry practitioners as
                                                    speakers and a variegated audience
                                                    profile, the summit proved to be one of
                                                    the best learning and networking
                                                    opportunities under one roof.
                                                </p>

                                            </div>

                                        </div>

                                    )}

                                </div>


                                {/* ================= 2020 ================= */}

                                <div className="mb-[18px] w-full">

                                    <button
                                        type="button"
                                        onClick={() => toggleEdition(2)}
                                        className="
                                            flex
                                            min-h-[54px]
                                            w-full
                                            items-center
                                            justify-between
                                            bg-[#f3f5f7]
                                            px-[30px]
                                            text-left
                                            font-archivo
                                            text-[16px]
                                            font-bold
                                            text-[#111]
                                            transition-all
                                            hover:bg-[#e9edf0]

                                            max-sm:min-h-[52px]
                                            max-sm:px-[18px]
                                            max-sm:text-[14px]
                                            
                                        "
                                    >

                                        <span>
                                            Lex Witness Summits 2020
                                        </span>

                                        <span className="ml-4 shrink-0">

                                            {openEdition === 2 ? (
                                                <svg
                                                    width="18"
                                                    height="18"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                >
                                                    <path d="m6 15 6-6 6 6" />
                                                </svg>
                                            ) : (
                                                <svg
                                                    width="18"
                                                    height="18"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                >
                                                    <path d="m6 9 6 6 6-6" />
                                                </svg>
                                            )}

                                        </span>

                                    </button>


                                    {openEdition === 2 && (

                                        <div className="bg-[#f5f5f5] p-[20px] text-[15px] text-[#555]">
                                            Lex Witness Summits 2020 details.
                                        </div>

                                    )}

                                </div>


                                {/* ================= 2019 ================= */}

                                <div className="w-full">

                                    <button
                                        type="button"
                                        onClick={() => toggleEdition(3)}
                                        className="
                                            flex
                                            min-h-[54px]
                                            w-full
                                            items-center
                                            justify-between
                                            bg-[#f3f5f7]
                                            px-[30px]
                                            text-left
                                            font-archivo
                                            text-[16px]
                                            font-bold
                                            text-[#111]
                                            transition-all
                                            hover:bg-[#e9edf0]

                                            max-sm:min-h-[52px]
                                            max-sm:px-[18px]
                                            max-sm:text-[14px]
                                        "
                                    >

                                        <span>
                                            Lex Witness Summits 2019
                                        </span>

                                        <span className="ml-4 shrink-0">

                                            {openEdition === 3 ? (
                                                <svg
                                                    width="18"
                                                    height="18"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                >
                                                    <path d="m6 15 6-6 6 6" />
                                                </svg>
                                            ) : (
                                                <svg
                                                    width="18"
                                                    height="18"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                >
                                                    <path d="m6 9 6 6 6-6" />
                                                </svg>
                                            )}

                                        </span>

                                    </button>


                                    {openEdition === 3 && (

                                        <div className="bg-[#f5f5f5] p-[20px] text-[15px] text-[#555]">
                                            Lex Witness Summits 2019 details.
                                        </div>

                                    )}

                                </div>

                            </div>

                        </div>


                        {/* =================================================
                            RIGHT SIDEBAR
                        ================================================== */}

                        <aside className="w-full">

                            {/* ================= MESSAGE 1 ================= */}

                            <div className="pb-[28px]">

                                <h3
                                    className="
                                        mb-[18px]
                                        font-archivo
                                        text-[25px]
                                        font-bold
                                        text-[#d71920]

                                        max-sm:text-[21px]
                                    "
                                >
                                    2020 Official Messages
                                </h3>

                                <div className="font-archivo text-[16px] leading-[1.5] text-[#666]">

                                    <p className="font-semibold text-[#666]">
                                        Ms. Veta T. Richardson
                                    </p>

                                    <p>
                                        President &amp; CEO, ACC
                                    </p>

                                    <a
                                        href="#"
                                        className="text-[#222] hover:text-[#f58220]"
                                    >
                                        Read More...
                                    </a>

                                </div>

                            </div>


                            {/* Divider */}

                            <div className="mb-[0px] h-px w-full " />


                            {/* ================= MESSAGE 2 ================= */}

                            <div className="pb-[28px]">

                                <div className="font-archivo text-[16px] leading-[1.5] text-[#666]">

                                    <p className="font-semibold text-[#666]">
                                        Ms. Manjaree Choudhary
                                    </p>

                                    <p>
                                        General Counsel, Maruti Suzuki
                                    </p>

                                    <p>
                                        Summit Chair, New Delhi Edition
                                    </p>

                                    <a
                                        href="#"
                                        className="text-[#222] hover:text-[#f58220]"
                                    >
                                        Read More...
                                    </a>

                                </div>

                            </div>


                            {/* Divider */}

                            <div className="mb-[34px] h-px w-full bg-[#222]" />


                            {/* ================= MESSAGE 3 ================= */}

                            <div className="pb-[28px]">

                                <div className="font-archivo text-[16px] leading-[1.5] text-[#666]">

                                    <h3
                                        className="
                                        mb-[18px]
                                        font-archivo
                                        text-[25px]
                                        font-bold
                                        text-[#d71920]

                                        max-sm:text-[21px]
                                    "
                                    >
                                        2020 Official Messages
                                    </h3>

                                    <p className="font-semibold text-[#666]">
                                        Ms. Debolina Partap
                                    </p>

                                    <p>
                                        Group GC, Wockhardt Group
                                    </p>

                                    <p>
                                        Summit Chair, Mumbai Edition
                                    </p>

                                    <a
                                        href="#"
                                        className="text-[#222] hover:text-[#f58220]"
                                    >
                                        Read More...
                                    </a>

                                </div>

                            </div>


                            {/* Divider */}

                            <div className="mb-[34px] h-px w-full bg-[#222]" />


                            {/* ================= MESSAGE 4 ================= */}

                            <div>

                                <div className="font-archivo text-[16px] leading-[1.5] text-[#666]">

                                    <p className="font-semibold text-[#666]">
                                        Ms. Debolina Partap
                                    </p>

                                    <p>
                                        Group GC, Wockhardt Group
                                    </p>

                                    <p>
                                        Summit Chair, Mumbai Edition
                                    </p>

                                    <a
                                        href="#"
                                        className="text-[#222] hover:text-[#f58220]"
                                    >
                                        Read More...
                                    </a>

                                </div>

                            </div>

                            {/* Divider */}

                            <div className="mb-[34px] h-px w-full bg-[#222]" />


                            {/* ================= MESSAGE 4 ================= */}

                            <div>

                                <div className="font-archivo text-[16px] leading-[1.5] text-[#666]">

                                    <p className="font-semibold text-[#666]">
                                        Ms. Debolina Partap
                                    </p>

                                    <p>
                                        Group GC, Wockhardt Group
                                    </p>

                                    <p>
                                        Summit Chair, Mumbai Edition
                                    </p>

                                    <a
                                        href="#"
                                        className="text-[#222] hover:text-[#f58220]"
                                    >
                                        Read More...
                                    </a>

                                </div>

                            </div>

                            {/* Divider */}

                            <div className="mb-[34px] h-px w-full bg-[#222]" />


                            {/* ================= MESSAGE 4 ================= */}

                            <div>

                                <div className="font-archivo text-[16px] leading-[1.5] text-[#666]">

                                    <p className="font-semibold text-[#666]">
                                        Ms. Debolina Partap
                                    </p>

                                    <p>
                                        Group GC, Wockhardt Group
                                    </p>

                                    <p>
                                        Summit Chair, Mumbai Edition
                                    </p>

                                    <a
                                        href="#"
                                        className="text-[#222] hover:text-[#f58220]"
                                    >
                                        Read More...
                                    </a>

                                </div>

                            </div>

                        </aside>

                    </div>

                </div>

            </section>


            {/* =====================================================
                EXISTING SUBSCRIBE SECTION
            ====================================================== */}

            <section>
                <SubscribeSection />
            </section>

        </div>
    );
}