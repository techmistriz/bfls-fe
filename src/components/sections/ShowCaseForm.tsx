"use client";

import { useForm } from "react-hook-form";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

import { submitShowcaseForm } from "@/src/services/showcase.service";
import type {
  ShowcaseFormValues,
  ShowcasePayload,
} from "@/src/types/showcase.type";
import { APP_EVENT_TYPE } from "@/src/config/eventType.config";
import { useState } from "react";

export default function ShowCaseForm() {
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const { executeRecaptcha } = useGoogleReCaptcha();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<ShowcaseFormValues>();

  const onSubmit = async (data: ShowcaseFormValues) => {
    if (!executeRecaptcha) {
      setStatus("error");
      return;
    }

    setStatus(null);

    try {
      const captchaToken = await executeRecaptcha("showcase");

      if (!captchaToken) {
        setStatus("error");
        return;
      }

      const payload: ShowcasePayload = {
        event_type_id: String(APP_EVENT_TYPE),
        name: data.name,
        email: data.email,
        phone: data.contact,
        captcha: captchaToken,
      };

      await submitShowcaseForm(payload);

      reset();
      setStatus("success");
    } catch (error) {
      console.error("Showcase submission failed:", error);
      setStatus("error");
    }
  };

  return (
    <section className="relative min-h-[460px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/call_to_action_bg.png')" }}
      />

      <div className="absolute inset-0 bg-black/70" />

      <div className="pointer-events-none absolute left-0 top-[250px] hidden h-[180px] w-[260px] opacity-60 sm:block">
        <div className="dot-pattern" />
      </div>

      <div className="pointer-events-none absolute right-[8%] top-[250px] hidden h-[180px] w-[260px] opacity-60 sm:block">
        <div className="dot-pattern" />
      </div>

      <div className="relative z-10 flex min-h-[460px] items-start justify-center px-5 py-[130px]">
        <div className="w-full max-w-[1000px] text-center">
          <p className="mb-[10px] text-[18px] font-semibold leading-tight text-[#f58216] sm:text-[32px]">
            Showcase Yourself
          </p>

          <h2 className="mx-auto max-w-[600px] font-poppins text-[30px] font-bold leading-[1.12] text-white sm:text-[42px] lg:text-[56px]">
            Curate Your Own
            <br />
            Sponsorship Wish
          </h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto mt-[20px] w-full"
          >
            <div className="flex flex-col items-center justify-center gap-[30px] sm:flex-row">
              <input
                type="text"
                placeholder="Your Name"
                disabled={isSubmitting}
                {...register("name", {
                  required: "Name is required",
                })}
                className="h-[50px] w-full max-w-[250px] border border-[#f58216] bg-white px-[22px] text-[16px] text-[#333] outline-none placeholder:text-[#777] focus:border-[#f58216] disabled:opacity-60 max-sm:max-w-none"
              />
              <input
                type="email"
                placeholder="Your Email Address"
                disabled={isSubmitting}
                {...register("email", {
                  required: "Email is required",
                })}
                className="h-[50px] w-full max-w-[250px] border border-[#f58216] bg-white px-[22px] text-[16px] text-[#333] outline-none placeholder:text-[#777] focus:border-[#f58216] disabled:opacity-60 max-sm:max-w-none"
              />
              <input
                type="tel"
                inputMode="numeric"
                maxLength={10}
                placeholder="Your Contact Number"
                disabled={isSubmitting}
                {...register("contact", {
                  required: "Contact number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Contact number must be exactly 10 digits",
                  },
                  onChange: (e) => {
                    e.target.value = e.target.value
                      .replace(/\D/g, "")
                      .slice(0, 10);
                  },
                })}
                className="h-[50px] w-full max-w-[250px] border border-[#f58216] bg-white px-[22px] text-[16px] text-[#333] outline-none placeholder:text-[#777] focus:border-[#f58216] disabled:opacity-60 max-sm:max-w-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group mt-15 inline-flex h-[64px] cursor-pointer items-center justify-center gap-2 rounded-[6px] border-2 border-[#EF7F1B] bg-[#EF7F1B] px-[40px] text-[16px] font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#EF7F1B] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 max-md:mt-6 max-md:h-[58px] max-md:px-6 max-md:text-[14px] max-sm:mt-6 max-sm:h-[48px] max-sm:w-auto max-sm:px-8 max-sm:text-[13px]"
            >
              {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
            </button>
            {status && (
              <p
                role={status === "success" ? "status" : "alert"}
                className={`mt-4 text-sm font-semibold ${
                  status === "success" ? "text-[#f58216]" : "text-red-400"
                }`}
              >
                {status === "success"
                  ? "Thank you! Your showcase form has been submitted successfully."
                  : "Something went wrong. Please try again."}
              </p>
            )}
          </form>
        </div>
      </div>

      <style jsx>{`
        .dot-pattern {
          width: 100%;
          height: 100%;
          background-image: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.55) 3px,
            transparent 3px
          );
          background-size: 16px 16px;
          animation: dotsMove 5s ease-in-out infinite;
        }

        @keyframes dotsMove {
          0% {
            transform: translateY(0px);
            opacity: 0.45;
          }

          50% {
            transform: translateY(-10px);
            opacity: 0.8;
          }

          100% {
            transform: translateY(0px);
            opacity: 0.45;
          }
        }
      `}</style>
    </section>
  );
}
