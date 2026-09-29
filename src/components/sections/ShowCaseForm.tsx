"use client";

import { useForm } from "react-hook-form";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

import { submitShowcaseForm } from "@/src/services/showcase.service";
import type {
  ShowcaseFormValues,
  ShowcasePayload,
} from "@/src/types/showcase.type";
import { APP_EVENT_TYPE } from "@/src/config/eventType.config";

export default function ShowCaseForm() {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<ShowcaseFormValues>();

  const onSubmit = async (data: ShowcaseFormValues) => {
    console.log("Showcase form data:", data);

    if (!executeRecaptcha) {
      console.error("❌ reCAPTCHA is not ready");
      return;
    }

    try {
      console.log("🔄 Executing reCAPTCHA...");

      const captchaToken = await executeRecaptcha("showcase");

      console.log("✅ reCAPTCHA token generated:", {
        exists: Boolean(captchaToken),
        length: captchaToken?.length,
      });

      if (!captchaToken) {
        console.error("❌ reCAPTCHA token is empty");
        return;
      }

      const payload: ShowcasePayload = {
        event_type_id: String(APP_EVENT_TYPE),
        name: data.name,
        email: data.email,
        phone: data.contact,
        captcha: captchaToken,
      };

      console.log("📤 Showcase payload:", {
        ...payload,
        captcha: `${captchaToken.substring(0, 10)}...`,
      });

      const response = await submitShowcaseForm(payload);

      console.log("✅ Showcase API success:", response);

      reset();
    } catch (error) {
      console.error("❌ Showcase submission failed:", error);
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
          <p className="mb-[10px] text-[23px] font-bold leading-tight text-[#f58216] sm:text-[30px]">
            Showcase Yourself
          </p>

          <h2 className="mx-auto max-w-[600px] font-poppins text-[34px] font-extrabold leading-[1.12] text-white sm:text-[42px] lg:text-[56px]">
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
                className="h-[50px] w-full max-w-[250px] border border-[#f58216] bg-white px-[22px] text-[12px] text-[#333] outline-none placeholder:text-[#777] focus:border-[#f58216] disabled:opacity-60"
              />

              <input
                type="email"
                placeholder="Your Email Address"
                disabled={isSubmitting}
                {...register("email", {
                  required: "Email is required",
                })}
                className="h-[50px] w-full max-w-[250px] border border-[#f58216] bg-white px-[22px] text-[12px] text-[#333] outline-none placeholder:text-[#777] focus:border-[#f58216] disabled:opacity-60"
              />

              <input
                type="tel"
                placeholder="Your Contact Number"
                disabled={isSubmitting}
                {...register("contact", {
                  required: "Contact number is required",
                })}
                className="h-[50px] w-full max-w-[250px] border border-[#f58216] bg-white px-[22px] text-[12px] text-[#333] outline-none placeholder:text-[#777] focus:border-[#f58216] disabled:opacity-60"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group mt-15 inline-flex h-[64px] cursor-pointer items-center justify-center gap-2 rounded-[6px] border-2 border-[#EF7F1B] bg-[#EF7F1B] px-[40px] text-[15px] font-bold text-white transition-all duration-300 hover:bg-white hover:text-[#EF7F1B] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 max-md:mt-6 max-md:h-[58px] max-md:px-6 max-md:text-[14px] max-sm:mt-6 max-sm:h-[54px] max-sm:w-full max-sm:px-5 max-sm:text-[14px]"
            >
              {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
            </button>
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
