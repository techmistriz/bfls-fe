import { GalleryIcon } from "@/src/components/icons/GalleryIcon";

export default function ContactCTA() {
  return (
    <section className="relative min-h-[440px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/count_down_timer_bg.jpg')" }}
      />

      <div className="absolute inset-0 bg-[#536b91]/[0.72]" />

      <div className="relative z-10 flex min-h-[440px] items-center justify-center px-5 py-[100px]">
        <div className="mx-auto w-full max-w-[1050px] text-center text-white">
          <p className="mb-[8px] text-[22px] font-bold leading-[1.3] sm:text-[25px] lg:text-[30px]">
            Time&apos;s Ticking &amp; Discounts Drying Up
          </p>

          <h2 className="text-[32px] font-extrabold leading-[1.15] sm:text-[40px] lg:text-[52px] font-poppins">
            Get in Touch to Avail the Best Deal.
          </h2>

          <p className="mx-auto mt-[35px] max-w-[1100px] text-[15px] font-semibold leading-[1.65] text-white sm:text-[16px] lg:text-[17px]">
            Whether you&apos;re a legal advisor specializing in the nuances of
            BFSI regulations, or you&apos;re at the helm of legal, risk,
            compliance, and data privacy for corporations within banking,
            financial services, insurance, or fintech, this summit promises
            invaluable insights and networking opportunities.
          </p>
          <a
            href="#gallery"
            className="group mt-15 inline-flex h-[64px] items-center justify-center gap-2 rounded-[6px] border-2 border-[#EF7F1B] bg-[#EF7F1B] px-[27px] text-[15px] font-bold text-white font-archivo transition-all duration-300 hover:bg-[#fff] hover:text-[#EF7F1B] hover:border-[#EF7F1B] hover:shadow-lg max-md:mt-6 max-md:h-[58px] max-md:px-6 max-md:text-[14px] max-sm:mt-6 max-sm:h-[54px] max-sm:w-full max-sm:px-5 max-sm:text-[14px]"
          >
            <GalleryIcon className="shrink-0 text-white transition-colors duration-300 group-hover:text-[#EF7F1B]" />
            <span>SUMMIT GALLERY</span>
          </a>
        </div>
      </div>
    </section>
  );
}
