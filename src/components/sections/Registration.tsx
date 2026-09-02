import Link from "next/link";
import { registrationPlans } from "@/src/data/registration";
import { RegistrationIcon } from "@/src/components/icons/RegistrationIcon";

export default function Registration() {
  return (
    <section className="w-full bg-[#f7f7f7] px-4 py-12 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1110px]">
        <div className="mb-8 text-center">
          <div className="mb-3 flex justify-center">
            <RegistrationIcon className="text-[#ed1c24]" />
          </div>

          <h2 className="text-[36px] font-normal leading-[1.15] tracking-[-1.5px] text-[#333] sm:text-[42px]">
            Delegate Registrations
          </h2>

          <p className="mt-4 text-[14px] text-[#1769aa]">
            It&apos;s a Race Against Time. Avail Best Possible Discounts Now.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {registrationPlans.map((plan, index) => (
            <div
              key={index}
              className="relative flex min-h-[350px] flex-col rounded-[9px] px-7 pb-5 pt-9 shadow-[0_7px_10px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:-translate-y-1"
              style={{ backgroundColor: plan.bg }}
            >
              {plan.badge && (
                <div className="absolute top-[-11px] left-1/2 -translate-x-1/2 rounded-[5px] bg-[#d71920] px-[11px] py-[4px] text-[14px] font-normal leading-[18px] text-white">
                  {plan.badge}
                </div>
              )}

              <div className="text-center">
                <h3 className="min-h-[22px] text-[16px] font-bold leading-[22px] text-[#ed1c24]">
                  {plan.title}
                </h3>

                <h4 className="mt-3 whitespace-nowrap text-[29px] font-bold leading-[34px] tracking-[-1.2px] text-[#222]">
                  {plan.price} <span className="text-[25px]">Onwards</span>
                </h4>

                <div className="mt-4 space-y-2">
                  {plan.details.map((detail, detailIndex) => (
                    <p
                      key={detailIndex}
                      className="text-[15px] leading-[21px] text-[#222]"
                    >
                      {detail}
                    </p>
                  ))}
                </div>
              </div>

              <div className="mt-auto flex justify-center pt-6">
                <Link
                  href="/checkout"
                  className="min-w-[129px] rounded-[4px] border border-[#ed1c24] bg-transparent px-5 py-[13px] text-center text-[14px] font-bold text-[#ed1c24] transition-all duration-300 hover:bg-[#ed1c24] hover:text-white"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
