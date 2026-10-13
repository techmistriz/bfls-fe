"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

import { submitShowcaseForm } from "@/src/services/showcase.service";
import type { ShowcaseFormValues } from "@/src/types/showcase.type";

// The showcase API stores every site form in one table, keyed by form_type.
// BFLS is event type 3 there (per the backend team).
const SHOWCASE_EVENT_TYPE_ID = "3";
const FORM_TYPE = "Showcase";

const INPUT_CLASS =
  "h-[54px] w-full rounded-[8px] border border-[#d6dbe3] bg-white px-5 text-[16px] text-[#1e293b] outline-none transition-colors placeholder:text-[#6b7280] focus:border-[#f58216] disabled:opacity-60 font-poppins";

export default function ShowCaseForm() {
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
      const captcha = await executeRecaptcha("showcase");

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
    } catch (error) {
      console.error("Showcase submission failed:", error);
      setStatus("error");
      setStatusMessage("Something went wrong. Please try again.");
    }
  };

  const fieldError =
    errors.name?.message || errors.email?.message || errors.contact?.message;

  return (
    <section className="relative w-full overflow-hidden bg-[#0b1430]">
      <div
        className="absolute inset-0 scale-110 bg-cover bg-center bg-no-repeat blur-[6px]"
        style={{ backgroundImage: "url('/images/65-scaled.jpg')" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,14,38,0.82)_0%,rgba(10,18,48,0.6)_55%,rgba(10,18,48,0.4)_100%)]" />

      <div className="pointer-events-none absolute left-0 top-[18%] hidden h-[200px] w-[150px] opacity-60 sm:block">
        <div className="dot-pattern" />
      </div>
      <div className="pointer-events-none absolute bottom-[6%] right-0 hidden h-[150px] w-[190px] opacity-60 sm:block">
        <div className="dot-pattern" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1170px] items-center gap-10 px-5 py-[70px] sm:px-6 lg:grid-cols-[minmax(0,1fr)_420px] lg:gap-10 lg:py-[110px]">
        {/* Pitch */}
        <div>
          <div className="flex items-center gap-4">
            <p className="text-[22px] font-semibold leading-tight text-[#f58216] sm:text-[30px] font-poppins">
              Showcase Yourself
            </p>
            <span className="h-[2px] w-[90px] bg-[#f58216] sm:w-[150px]" />
          </div>

          <h2 className="mt-5 border-l-[5px] border-[#f58216] pl-5 text-[36px] font-extrabold uppercase leading-[1.06] tracking-[-0.01em] text-white sm:-ml-[25px] sm:text-[52px] lg:text-[68px] font-poppins">
            Your Brand.
            <br />
            Your Stage.
            <br />
            Your Impact.
          </h2>

          <p className="mt-6 text-[20px] font-semibold leading-snug text-white sm:text-[24px] lg:text-[27px] font-poppins">
            Create Your Bespoke Sponsorship Experience
          </p>
          <p className="mt-4 max-w-[640px] text-[16px] leading-[1.6] text-white/90 sm:text-[20px] font-poppins">
            Tell us how you want your brand to be seen.
            <br className="hidden sm:block" /> We&rsquo;ll curate a partnership
            around your objectives.
          </p>
        </div>

        {/* Interest form */}
        <div className="rounded-[18px] bg-white px-6 py-8 shadow-[0_25px_60px_-20px_rgba(0,0,0,0.5)] sm:px-10 sm:py-10">
          <h3 className="text-[32px] font-extrabold leading-tight text-[#14245c] sm:text-[38px] font-poppins">
            I&rsquo;m Interested!
          </h3>
          <div className="mt-[10px] h-[3px] w-[60px] bg-[#f58216]" />

          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="mt-7 space-y-5"
          >
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
              placeholder="Contact Number*"
              aria-label="Contact Number"
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

            <p className="text-[14px] text-[#4b5563] font-poppins">
              *All fields are mandatory
            </p>

            <button
              type="submit"
              disabled={isSubmitting}
              className="!mt-7 flex h-[60px] w-full cursor-pointer items-center justify-center rounded-[10px] bg-[#f26b0f] text-[20px] font-bold text-white shadow-[0_10px_22px_-10px_rgba(242,107,15,0.8)] transition-all duration-300 hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60 font-poppins"
            >
              {isSubmitting ? "Submitting..." : "Submit Interest"}
            </button>

            {(fieldError || status !== "idle") && (
              <p
                role={status === "success" ? "status" : "alert"}
                className={`text-center text-[14px] font-semibold ${
                  !fieldError && status === "success"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {fieldError || statusMessage}
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
            rgba(255, 255, 255, 0.55) 2.5px,
            transparent 2.5px
          );
          background-size: 24px 24px;
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
