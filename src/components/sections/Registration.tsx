"use client";

import { useState, type CSSProperties } from "react";
import { useRouter } from "next/navigation";

// import { RegistrationIcon } from "@/src/components/icons/RegistrationIcon";
import { APP_EVENT_TYPE } from "@/src/config/eventType.config";
import { useEvents } from "@/src/hooks/useEvents";
import { useRegistrationPlans } from "@/src/hooks/useRegistrationPlans";
import { addToCart } from "@/src/services/cart.service";
import { EVENT_CONFIG } from "@/src/config/event";
import EarlyBirdInterest from "@/src/components/sections/EarlyBirdInterest";

const PLAN_COLORS = ["#b9e3df", "#ebc9ec", "#9bc9fc", "#aaef92"];

const TAG_COLORS: Record<string, string> = {
  TRENDING: "#ff7a00",
  "MOST PREFERRED": "#2e9b22",
};
const DEFAULT_TAG_COLOR = "#f57c16";

const formatPrice = (price: string) => {
  return `₹${Number(price).toLocaleString("en-IN")}`;
};

export default function Registration() {
  const { plans, loading, error } = useRegistrationPlans();
  console.log(plans);
  const { events } = useEvents();
  const router = useRouter();

  const eventId = events[0]?.id;
  const [addingPlanId, setAddingPlanId] = useState<number | null>(null);

  const handleBookNow = async (planId: number) => {
    if (!eventId) return;

    try {
      setAddingPlanId(planId);

      await addToCart({
        event_type_id: APP_EVENT_TYPE,
        event_id: eventId,
        plan_id: planId,
        quantity: 1,
      });

      router.push("/checkout");
    } catch (error) {
      console.error("Failed to add plan to cart:", error);
    } finally {
      setAddingPlanId(null);
    }
  };

  return (
    EVENT_CONFIG.registrationOpen && (
      <section
        id="register"
        className="w-full scroll-mt-15 bg-[#f7f7f7] px-4 py-12 sm:px-6 lg:px-10"
      >
        <div className="mx-auto max-w-[1110px]">
          <div className="mb-20 text-center">
            {/* <div className="mb-3 flex justify-center">
              <RegistrationIcon className="text-[#ed1c24]" />
            </div> */}

            <p className="mt-10 text-[20px] font-medium text-[#EF7F1B] sm:text-[30px]">
              It&apos;s a Race Against Time. Avail Best Possible Discounts Now.
            </p>
            <h2 className="text-[42px] font-extrabold leading-[1.15] tracking-[-1.5px] text-[#566a8f] sm:text-[42px]">
              Delegate Registrations
            </h2>

            <div className="mx-auto mt-[18px] h-[3px] w-[100px] bg-[#EF7F1B] sm:mt-[22px] sm:mb-[6px] sm:w-[120px]" />
          </div>

          <EarlyBirdInterest />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {loading ? (
              [1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  // Loading skeleton
                  className="relative flex min-h-[350px] animate-pulse flex-col rounded-[9px] bg-gray-200 px-4 pb-4 pt-6 shadow-[0_7px_10px_rgba(0,0,0,0.25)]"
                />
              ))
            ) : error ? (
              <div className="col-span-full py-10 text-center text-red-500">
                {error}
              </div>
            ) : (
              plans.map((plan, index) => (
                <div
                  key={plan.id}
                  // Registration card
                  className="relative flex min-h-[350px] flex-col rounded-[9px] border-[5px] border-[var(--plan-color)] bg-white pb-4 pt-6 transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--plan-color)]"
                  style={
                    {
                      "--plan-color": PLAN_COLORS[index % PLAN_COLORS.length],
                    } as CSSProperties
                  }
                >
                  {plan.tag && (
                    <div
                      className="absolute left-1/2 top-[-16px] -translate-x-1/2 whitespace-nowrap rounded-[5px] px-[11px] py-[4px] text-[14px] font-normal leading-[25px] text-white"
                      style={{
                        backgroundColor:
                          TAG_COLORS[plan.tag.trim().toUpperCase()] ??
                          DEFAULT_TAG_COLOR,
                      }}
                    >
                      {plan.tag.toUpperCase()}
                    </div>
                  )}

                  <div className="text-center">
                    <h3 className="mt-5 min-h-[22px] text-[16px] font-semibold leading-[22px] text-[#ed1c24]">
                      {plan.title}
                    </h3>

                    <h4 className="mt-3 whitespace-nowrap text-[29px] font-bold leading-[34px] tracking-[-1.2px] text-[#222]">
                      {formatPrice(plan.starting_price)}{" "}
                      <span className="text-[17px]">Onwards</span>
                    </h4>

                    <div
                      className="mt-4 space-y-2 text-center text-[15px] leading-[21px] text-[#222] [&_p]:mb-2 [&_ul]:mt-2 [&_ul]:space-y-2 [&_li]:mb-2"
                      dangerouslySetInnerHTML={{
                        __html: plan.description ?? "",
                      }}
                    />
                  </div>

                  <div className="mt-auto flex justify-center pt-6">
                    <button
                      type="button"
                      onClick={() => handleBookNow(plan.id)}
                      disabled={addingPlanId === plan.id}
                      className="min-w-[129px] cursor-pointer rounded-[4px] border border-[#f57c16] bg-transparent px-5 py-[13px] text-center text-[14px] font-bold text-[#f57c16] transition-all duration-300 hover:bg-[#f57c16] hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {addingPlanId === plan.id ? "Adding..." : "Book Now"}
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    )
  );
}
