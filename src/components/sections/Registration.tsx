"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { RegistrationIcon } from "@/src/components/icons/RegistrationIcon";
import { APP_EVENT_TYPE } from "@/src/config/eventType.config";
import { useEvents } from "@/src/hooks/useEvents";
import { useRegistrationPlans } from "@/src/hooks/useRegistrationPlans";
import { addToCart } from "@/src/services/cart.service";
import { EVENT_CONFIG } from "@/src/config/event";

const PLAN_BACKGROUNDS = ["#b9e3df", "#ebc9ec", "#ffc79f", "#ffe6a8"];

const formatPrice = (price: string) => {
  return `₹${Number(price).toLocaleString("en-IN")}`;
};

export default function Registration() {
  const { plans, loading, error } = useRegistrationPlans();
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
        className="w-full bg-[#f7f7f7] px-4 py-12 sm:px-6 lg:px-10"
      >
        <div className="mx-auto max-w-[1110px]">
          <div className="mb-8 text-center">
            <div className="mb-3 flex justify-center">
              <RegistrationIcon className="text-[#ed1c24]" />
            </div>

            <h2 className="text-[42px] font-extrabold leading-[1.15] tracking-[-1.5px] text-[#566a8f] sm:text-[42px]">
              Delegate Registrations
            </h2>

            <div className="mx-auto mt-[18px] h-[3px] w-[100px] bg-[#EF7F1B] sm:mt-[22px] sm:w-[120px]" />

            <p className="mt-10 mb-20 text-[20px] font-medium text-[#EF7F1B] sm:text-[30px]">
              It&apos;s a Race Against Time. Avail Best Possible Discounts Now.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {loading ? (
              [1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="relative flex min-h-[350px] animate-pulse flex-col rounded-[9px] bg-gray-200 px-7 pb-5 pt-9 shadow-[0_7px_10px_rgba(0,0,0,0.25)]"
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
                  className="relative flex min-h-[350px] flex-col rounded-[9px] px-7 pb-5 pt-9 shadow-[0_7px_10px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:-translate-y-1"
                  style={{
                    backgroundColor:
                      PLAN_BACKGROUNDS[index % PLAN_BACKGROUNDS.length],
                  }}
                >
                  {plan.tag && (
                    <div className="absolute left-1/2 top-[-11px] -translate-x-1/2 whitespace-nowrap rounded-[5px] bg-[#d71920] px-[11px] py-[4px] text-[14px] font-normal leading-[18px] text-white">
                      {plan.tag.toUpperCase()}
                    </div>
                  )}

                  <div className="text-center">
                    <h3 className="mt-5 min-h-[22px] text-[13px] font-bold leading-[22px] text-[#ed1c24]">
                      {plan.title}
                    </h3>

                    <h4 className="mt-3 whitespace-nowrap text-[29px] font-bold leading-[34px] tracking-[-1.2px] text-[#222]">
                      {formatPrice(plan.starting_price)}{" "}
                      <span className="text-[25px]">Onwards</span>
                    </h4>

                    <div className="mt-4 space-y-2">
                      {plan.price_tiers.map((tier) => (
                        <p
                          key={tier.id}
                          className="text-[15px] leading-[21px] text-[#222]"
                        >
                          {tier.min_quantity} {tier.unit_type}
                          {tier.min_quantity > 1 ? "s" : ""} –{" "}
                          {formatPrice(tier.price_per_unit)} per{" "}
                          {tier.unit_type}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto flex justify-center pt-6">
                    <button
                      type="button"
                      onClick={() => handleBookNow(plan.id)}
                      disabled={addingPlanId === plan.id}
                      className="min-w-[129px] cursor-pointer rounded-[4px] border border-[#ed1c24] bg-transparent px-5 py-[13px] text-center text-[14px] font-bold text-[#ed1c24] transition-all duration-300 hover:bg-[#ed1c24] hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
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
