"use client";

import { FormEvent, useState } from "react";
import { subscribeToNewsletter } from "@/src/services/newsletter.service";

export default function SubscribeSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = String(formData.get("email") ?? "");

    setIsSubmitting(true);
    setStatus("idle");

    try {
      await subscribeToNewsletter({ email });
      setStatus("success");
      e.currentTarget.reset();
    } catch (error) {
      console.error("Newsletter subscription failed:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-[315px] w-full overflow-hidden bg-white px-5 pb-[90px] pt-[56px]">
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            radial-gradient(
              ellipse at center,
              transparent 0px,
              transparent 8px,
              #536b98 9px,
              #536b98 10px,
              transparent 11px
            )
          `,
          backgroundSize: "30px 22px",
        }}
      />

      <div className="absolute bottom-0 left-0 right-0 z-[1] h-[75px] bg-gradient-to-b from-transparent to-white" />

      <div className="relative z-[2] mx-auto w-full max-w-[1000px] text-center">
        <p className="mb-[6px] text-[28px] font-bold leading-[1.25] text-[#F57C16] max-md:text-[19px]">
          Curate Your Own Sponsorship Wish
        </p>

        <h2 className="mb-[19px] text-[56px] font-bold leading-[1.1] text-[#536B98] max-md:text-[32px] max-sm:text-[29px] font-poppins">
          Showcase Yourself
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col items-center"
        >
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email Address"
            required
            disabled={isSubmitting}
            className="h-[50px] w-[800px] max-w-full border border-[#dcdcdc] bg-[#f7f7f7] px-6 text-[14px] text-[#555] outline-none placeholder:text-[#777] focus:border-[#F57C16] disabled:opacity-60 max-md:h-[42px] max-md:px-[15px]"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="group mt-5 inline-flex h-[60px] items-center justify-center gap-2 rounded-[6px] border-2 border-[#EF7F1B] bg-[#EF7F1B] px-[40px] text-[15px] font-bold text-white font-archivo transition-all duration-300 hover:bg-[#fff] hover:text-[#EF7F1B] hover:border-[#EF7F1B] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 max-md:mt-6 max-md:h-[58px] max-md:px-6 max-md:text-[14px] max-sm:mt-6 max-sm:h-[54px] max-sm:w-full max-sm:px-5 max-sm:text-[14px]"
          >
            {isSubmitting ? "SUBSCRIBING..." : "SUBSCRIBE"}
          </button>

          {status === "success" && (
            <p className="mt-3 text-[14px] font-semibold text-green-600">
              Thanks for subscribing!
            </p>
          )}

          {status === "error" && (
            <p className="mt-3 text-[14px] font-semibold text-red-600">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
