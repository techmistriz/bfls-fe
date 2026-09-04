import Image from "next/image";
import { DotsRow } from "@/src/components/ui/DotsRow";

export default function Banner() {
  return (
    <section className="relative mt-[88px] flex min-h-[664px] w-full items-center justify-center overflow-hidden max-lg:min-h-[620px] max-md:min-h-[680px] max-md:py-[60px] max-sm:min-h-[700px] max-sm:py-[50px]">
      <div className="absolute inset-0">
        <Image
          src="/images/pexels-ravi-roshan-14907339-scaled.jpeg"
          alt="Banking and Finance Summit"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 z-[1] opacity-[0.8]">
        <Image
          src="/images/overlay2-1.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      <div className="absolute left-[19.3%] top-[6%] z-[1] h-[218px] w-[218px] overflow-hidden rounded-full opacity-[0.6] min-[768px]:max-[1499px]:left-[9.3%] max-lg:top-[5%] max-md:left-[40px] max-md:top-[4%] max-md:h-[150px] max-md:w-[150px] max-sm:left-[-55px] max-sm:top-[3%] max-sm:h-[130px] max-sm:w-[130px]">
        <Image
          src="/images/red-circle-shape-1.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <span className="absolute left-[21.4%] top-[43%] z-[2] text-[38px] font-light text-white/40 max-lg:left-[8%] max-lg:top-[45%] max-md:left-[5%] max-md:top-[42%] max-md:text-[30px] max-sm:left-[4%] max-sm:top-[39%] max-sm:text-[26px]">
        ×
      </span>

      <div className="relative z-10 mx-auto flex w-full max-w-[1250px] flex-col items-center px-5 pt-2 text-center max-md:px-6 max-sm:px-5 mt[32px]">
        <div className="mb-8 max-lg:mb-7 max-md:mb-6 max-sm:mb-5">
          <Image
            src="/images/BFLS_LOGO_IMAGE.png"
            alt="Witness Banking and Finance"
            width={435}
            height={160}
            priority
            className="h-auto w-[435px] max-w-full max-lg:w-[390px] max-md:w-[330px] max-sm:w-[280px]"
          />
        </div>

        <h1 className="max-w-[1180px] text-[45px] font-extrabold leading-[1.18] tracking-[-1px] text-white font-poppins max-lg:text-[42px] max-md:max-w-[700px] max-md:text-[36px] max-md:leading-[1.2] max-md:tracking-[-0.5px] max-sm:max-w-[100%] max-sm:text-[28px] max-sm:leading-[1.25] max-sm:tracking-[-0.3px]">
          The Lex Witness 8th Annual Banking &amp; Finance
          <br className="max-sm:hidden" />
          <span className="sm:hidden"> </span>
          Legal Summit 2025
        </h1>

        <p className="mt-8 text-[24px] font-bold uppercase leading-none text-white font-poppins max-lg:mt-7 max-lg:text-[21px] max-md:mt-6 max-md:max-w-[650px] max-md:text-[19px] max-md:leading-[1.35] max-sm:mt-5 max-sm:max-w-[330px] max-sm:text-[16px] max-sm:leading-[1.4]">
          21ST NOVEMBER 2025, TAJ SANTACRUZ, MUMBAI
        </p>

        <p className="mt-12 max-w-[720px] text-[16px] font-bold leading-[1.65] text-white font-archivo max-lg:mt-10 max-md:mt-8 max-md:max-w-[650px] max-md:text-[15px] max-sm:mt-7 max-sm:max-w-[340px] max-sm:text-[14px] max-sm:leading-[1.6]">
          The 2025 Edition was a massive success and we now look forward to the
          2026 Edition. In case you wish to participate in the future editions,
          please get in touch with us.
        </p>

        <a
          href="#contact"
          className="group mt-11 inline-flex h-[66px] min-w-[178px] items-center justify-center gap-2 rounded-[6px] border border-transparent bg-[#f58216] px-7 text-[16px] font-bold uppercase text-white shadow-sm font-archivo transition-all duration-300 hover:border-[#EF7F1B] hover:bg-[#fff] hover:text-[#EF7F1B] hover:shadow-lg max-lg:mt-9 max-md:mt-8 max-md:h-[58px] max-md:min-w-[165px] max-md:px-6 max-md:text-[15px] max-sm:mt-7 max-sm:h-[54px] max-sm:min-w-[155px] max-sm:px-5 max-sm:text-[14px]"
        >
          <i
            aria-hidden="true"
            className="text-[20px] fas fa-download text-white transition-colors duration-300 group-hover:text-[#EF7F1B]"
          />
          <span>CONTACT US</span>
        </a>

        <DotsRow className="mt-8 max-md:mt-7 max-sm:mt-6" />
        <DotsRow className="mt-3 max-sm:mt-2" />
      </div>
    </section>
  );
}
