"use client";

import { type FormEvent, useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

import { APP_EVENT_TYPE } from "@/src/config/eventType.config";
import { subscribeToNewsletter } from "@/src/services/newsletter.service";

export default function SubscribeSection() {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get("email") ?? "").trim();

    if (!executeRecaptcha) {
      setStatus("error");
      setStatusMessage("reCAPTCHA is not ready. Please try again.");
      return;
    }

    setIsSubmitting(true);
    setStatus("idle");
    setStatusMessage("");

    try {
      const captcha = await executeRecaptcha("newsletter");

      const response = await subscribeToNewsletter({
        event_type_id: String(APP_EVENT_TYPE),
        email,
        captcha,
      });

      if (response.status) {
        setStatus("success");
        setStatusMessage(response.message || "Thanks for subscribing!");
        form.reset();
      } else {
        setStatus("error");
        setStatusMessage(
          response.message || "Something went wrong. Please try again.",
        );
      }
    } catch (error) {
      console.error("Newsletter subscription failed:", error);
      setStatus("error");
      setStatusMessage("Something went wrong. Please try again.");
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
        <p className="mb-[6px] text-[18px] font-semibold leading-[1.25] text-[#F57C16] max-md:text-[19px]">
          Curate Your Own Sponsorship Wish
        </p>

        <h2 className="mb-[19px] font-poppins text-[30px] font-bold leading-[1.1] text-[#536B98] max-md:text-[32px] max-sm:text-[29px]">
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
            className="group mt-5 inline-flex h-[60px] cursor-pointer items-center justify-center gap-2 rounded-[6px] border-2 border-[#EF7F1B] bg-[#EF7F1B] px-[40px] font-archivo text-[16px] font-medium text-white transition-all duration-300 hover:border-[#EF7F1B] hover:bg-white hover:text-[#EF7F1B] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 max-md:mt-6 max-md:h-[48px] max-md:w-auto max-md:px-6 max-md:text-[13px]"
          >
            {isSubmitting ? "SUBSCRIBING..." : "SUBSCRIBE"}
          </button>

          {status !== "idle" && (
            <p
              role={status === "error" ? "alert" : "status"}
              className={`mt-3 text-[14px] font-semibold ${
                status === "success" ? "text-green-600" : "text-red-600"
              }`}
            >
              {statusMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
