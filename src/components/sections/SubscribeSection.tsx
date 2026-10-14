"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { isAxiosError } from "axios";

import { submitShowcaseForm } from "@/src/services/showcase.service";
import type { ShowcaseFormValues } from "@/src/types/showcase.type";
import { APP_EVENT_TYPE } from "@/src/config/eventType.config";
import { FORM_TYPES } from "@/src/config/showcase.config";

// The showcase API stores every site form in one table, keyed by form_type.
const SHOWCASE_EVENT_TYPE_ID = APP_EVENT_TYPE;
const FORM_TYPE = FORM_TYPES.GET_INVOLVED;

const INPUT_CLASS =
  "h-[54px] w-full rounded-[2px] border border-[#dcdcdc] bg-[#f7f7f7] px-6 text-[16px] text-[#555] outline-none transition-colors placeholder:text-[#777] focus:border-[#F57C16] disabled:opacity-60 max-md:h-[48px] max-md:px-4 max-md:text-[15px]";

export default function SubscribeSection() {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ShowcaseFormValues>();

  const onSubmit = async (data: ShowcaseFormValues) => {
    if (!executeRecaptcha) {
      setStatus("error");
      setStatusMessage("reCAPTCHA is not ready. Please try again.");
      return;
    }

    setStatus("idle");
    setStatusMessage("");

    try {
      const captcha = await executeRecaptcha("get_involved");

      const response = await submitShowcaseForm({
        event_type_id: SHOWCASE_EVENT_TYPE_ID,
        form_type: FORM_TYPE,
        name: data.name.trim(),
        email: data.email.trim(),
        phone: data.contact,
        captcha,
      });

      if (response.status) {
        setStatus("success");
        setStatusMessage("Thank you for your interest");
        reset();
      } else {
        setStatus("error");
        setStatusMessage(
          response.message || "Something went wrong. Please try again.",
        );
      }
    } catch (error: unknown) {
      console.error("Get Involved submission failed:", error);

      setStatus("error");

      if (isAxiosError<{ status: boolean; message: string }>(error)) {
        const backendMessage = error.response?.data?.message;

        setStatusMessage(
          backendMessage || "Something went wrong. Please try again.",
        );
      } else {
        setStatusMessage("Something went wrong. Please try again.");
      }
    }
  };

  const fieldError =
    errors.name?.message || errors.email?.message || errors.contact?.message;
  const message = status !== "idle" ? statusMessage : fieldError;

  return (
    <section className="relative w-full overflow-hidden bg-white px-5 pb-[90px] pt-[56px]">
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

      <div className="relative z-[2] mx-auto w-full max-w-[1170px] text-center">
        <p className="mb-[6px] font-poppins text-[22px] font-semibold leading-[1.25] text-[#F57C16] max-md:text-[19px]">
          Get Involved
        </p>

        <h2 className="mb-[10px] font-poppins text-[38px] font-bold leading-[1.15] text-[#566a8f] max-md:text-[30px] max-sm:text-[26px]">
          As a Speaker, Sponsor or a Delegate
        </h2>

        <p className="mb-[28px] font-poppins text-[18px] text-[#555] max-md:text-[15px]">
          Queries? The team would be glad to assist you on them.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="flex w-full flex-col items-center"
        >
          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
            <input
              type="text"
              placeholder="Name*"
              aria-label="Name"
              autoComplete="name"
              disabled={isSubmitting}
              aria-invalid={!!errors.name}
              {...register("name", {
                required: "Name is required",
                validate: (v) => v.trim() !== "" || "Name is required",
              })}
              className={INPUT_CLASS}
            />
            <input
              type="email"
              placeholder="Email Id*"
              aria-label="Email Id"
              autoComplete="email"
              disabled={isSubmitting}
              aria-invalid={!!errors.email}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email",
                },
              })}
              className={INPUT_CLASS}
            />
            <input
              type="tel"
              inputMode="numeric"
              maxLength={10}
              placeholder="Contact No*"
              aria-label="Contact No"
              autoComplete="tel"
              disabled={isSubmitting}
              aria-invalid={!!errors.contact}
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
              className={INPUT_CLASS}
            />
          </div>

          <p className="mt-2 self-start text-[14px] text-[#555] max-md:mt-3">
            *All fields are mandatory
          </p>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 inline-flex h-[60px] w-[210px] cursor-pointer items-center justify-center rounded-[6px] border-2 border-[#EF7F1B] bg-[#EF7F1B] font-archivo text-[20px] font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#EF7F1B] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 max-md:mt-5 max-md:h-[50px] max-md:w-[180px] max-md:text-[16px]"
          >
            {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
          </button>

          {message && (
            <p
              role={status === "success" ? "status" : "alert"}
              className={`mt-3 text-[14px] font-semibold ${
                status === "success" ? "text-green-600" : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
