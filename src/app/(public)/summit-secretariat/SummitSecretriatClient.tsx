import Image from "next/image";
import Link from "next/link";
import LexWitnessSummits from "./components/LexWitnessSummits";
import SummitSecretariatSidebar from "./components/SummitSecretariatSidebar";
import SubscribeSection from "@/src/components/sections/SubscribeSection";

export default function SummitSecretriatClient() {
  return (
    <div className="w-full">
      {/* ---------- BANNER ---------- */}

      <section className="relative mt-[88px] h-[398px] w-full overflow-hidden">
        <Image
          src="/images/schedule-banner.jpg"
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
          </div>
        </div>

        {/* Breadcrumb */}

        <div className="absolute bottom-0 right-[7%] z-20 md:right-[12%]">
          <div className="flex h-[56px] w-[235px] items-center justify-center gap-3 bg-white font-archivo shadow-sm">
            <span className="text-[13px] text-[#555]">
              <Link href="/" className="hover:text-[#EF7F1B]">
                Home
              </Link>
            </span>

            <span className="text-[13px] text-[#999]">/</span>

            <span className="text-[13px] font-medium text-[#EF7F1B]">
              Summit Secretariat
            </span>
          </div>
        </div>
      </section>

      {/* ---------- SUMMIT SECRETARIAT CONTENT ---------- */}

      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1130px] px-6 py-[55px] lg:px-0 lg:py-[60px] max-md:py-[45px] max-sm:px-[20px] max-sm:py-[35px]">
          <div className="grid grid-cols-[1fr_320px] gap-[40px] max-lg:grid-cols-[1fr_300px] max-md:grid-cols-1 max-md:gap-[45px]">
            {/* ---------- LEFT CONTENT ---------- */}

            <div className="min-w-0">
              <p className="mb-[15px] font-archivo text-[16px] leading-[1.6] text-[#666] max-sm:mb-[30px] max-sm:text-[14px] max-sm:leading-[1.7]">
                Typically known as an A to A magazine – an adult to adult
                magazine as they say, Lex Witness has been a platform for
                knowledge sharing and thought leadership on various industry
                sectors. It is through the space of the magazine as well as the
                pedigree of summits which it has been organising ever since its
                inception that industry veterans bring into limelight various
                undercurrents of law in their respective chambers and corporate
                offices!
              </p>

              <p className="mb-[38px] font-archivo text-[16px] leading-[1.6] text-[#666] max-sm:mb-[30px] max-sm:text-[14px] max-sm:leading-[1.7]">
                A major development here at the action packed Summit Secretariat
                is the extension of these services to various organizations who
                have started entrusting Witness with the responsibility to
                create, execute and conclude Summit Concepts to meet their
                respective purposes. Witness through its already existing
                ecosystem of summit management team is all set to provide these
                services with an added expertise of quality content through the
                magazine presence. You have an idea and we have a summit to
                showcase it! For more details on our Summit Secretariat services
                please contact us.
              </p>

              {/* ---------- LEX WITNESS SUMMITS ---------- */}

              <LexWitnessSummits />
            </div>

            {/* ---------- RIGHT SIDEBAR ---------- */}

            <SummitSecretariatSidebar />
          </div>
        </div>
      </section>

      {/* ---------- SUBSCRIBE ---------- */}

      <section>
        <SubscribeSection />
      </section>
    </div>
  );
}
