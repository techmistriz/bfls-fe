"use client";

import { type FormEvent, useState } from "react";
import Image from "next/image";
import { ArrowRight, Mail, Phone, User } from "lucide-react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

import { submitShowcaseForm } from "@/src/services/showcase.service";

// Lead forms share the /showcase endpoint; form_type tells them apart.
const SHOWCASE_EVENT_TYPE_ID = "3";
const FORM_TYPE = "Registration";

const FIELDS = [
  {
    name: "name",
    type: "text",
    placeholder: "Name*",
    autoComplete: "name",
    Icon: User,
  },
  {
    name: "email",
    type: "email",
    placeholder: "Email Id*",
    autoComplete: "email",
    Icon: Mail,
  },
  {
    name: "phone",
    type: "tel",
    placeholder: "Contact Number*",
    autoComplete: "tel",
    Icon: Phone,
  },
] as const;

export default function EarlyBirdInterest() {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const value = (key: string) => String(formData.get(key) ?? "").trim();

    if (!executeRecaptcha) {
      setStatus("error");
      setStatusMessage("reCAPTCHA is not ready. Please try again.");
      return;
    }

    setIsSubmitting(true);
    setStatus("idle");
    setStatusMessage("");

    try {
      const captcha = await executeRecaptcha("register_interest");

      const response = await submitShowcaseForm({
        event_type_id: SHOWCASE_EVENT_TYPE_ID,
        form_type: FORM_TYPE,
        name: value("name"),
        email: value("email"),
        phone: value("phone"),
        captcha,
      });

      if (response.status) {
        setStatus("success");
        setStatusMessage("Thank you for your interest");
        form.reset();
      } else {
        setStatus("error");
        setStatusMessage(
          response.message || "Something went wrong. Please try again.",
        );
      }
    } catch (error) {
      console.error("Register interest failed:", error);
      setStatus("error");
      setStatusMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto -mt-8 mb-14 grid max-w-[1110px] items-center gap-8 sm:-mt-6 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-10">
      <Image
        src="/images/early-bird-offer.png"
        alt="Early Bird Offer: flat 25% off, valid for the first 25 seats only"
        width={1916}
        height={821}
        sizes="(max-width: 1024px) 100vw, 680px"
        className="h-auto w-full"
      />

      <div className="relative rounded-[20px] bg-white px-6 py-7 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.25)] sm:px-8">
        <h3 className="mb-5 text-center text-[28px] font-extrabold leading-tight tracking-[-0.5px] text-[#0f172a] sm:text-[32px]">
          I&apos;m Interested!
        </h3>

        <form onSubmit={handleSubmit} className="space-y-3">
          {FIELDS.map(({ name, type, placeholder, autoComplete, Icon }) => (
            <label key={name} className="relative block">
              <span className="sr-only">{placeholder}</span>
              <Icon
                aria-hidden
                className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#64748b]"
              />
              <input
                type={type}
                name={name}
                placeholder={placeholder}
                autoComplete={autoComplete}
                required
                disabled={isSubmitting}
                {...(name === "phone" && {
                  inputMode: "numeric" as const,
                  pattern: "[0-9+\\-\\s]{7,15}",
                })}
                className="h-[52px] w-full rounded-[10px] border border-[#d6dbe3] bg-white pl-12 pr-4 text-[15px] text-[#0f172a] outline-none transition-colors placeholder:text-[#64748b] focus:border-[#1366f2] disabled:opacity-60"
              />
            </label>
          ))}

          <p className="text-[13px] text-[#64748b]">
            *All fields are mandatory
          </p>

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex h-[54px] w-full cursor-pointer items-center justify-center gap-3 rounded-[10px] bg-gradient-to-b from-[#1a73ff] to-[#0a58e0] text-[17px] font-bold text-white shadow-[0_8px_20px_-8px_rgba(10,88,224,0.7)] transition-all duration-300 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Submitting..." : "Register Interest"}
            {!isSubmitting && <ArrowRight aria-hidden className="h-5 w-5" />}
          </button>

          {status !== "idle" && (
            <p
              role={status === "error" ? "alert" : "status"}
              className={`text-center text-[14px] font-semibold ${
                status === "success" ? "text-green-600" : "text-red-600"
              }`}
            >
              {statusMessage}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
