"use client";

import { type FormEvent, useState } from "react";
import { ArrowRight, Handshake, Mic, Users } from "lucide-react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

import { APP_EVENT_TYPE } from "@/src/config/eventType.config";
import { registerSpeakerInterest } from "@/src/services/speakerInterest.service";

const FIELDS = [
  {
    name: "name",
    type: "text",
    label: "Name*",
    placeholder: "Enter your full name",
    autoComplete: "name",
  },
  {
    name: "email",
    type: "email",
    label: "Email Id*",
    placeholder: "Enter your email id",
    autoComplete: "email",
  },
  {
    name: "phone",
    type: "tel",
    label: "Contact Number*",
    placeholder: "Enter your contact number",
    autoComplete: "tel",
  },
] as const;

const PERKS = [
  {
    Icon: Users,
    lines: ["Engage with", "Industry Leaders"],
    tone: "orange",
  },
  { Icon: Mic, lines: ["Share", "Your Expertise"], tone: "blue" },
  { Icon: Handshake, lines: ["Expand", "Your Network"], tone: "orange" },
] as const;

function LoungeIllustration() {
  return (
    <svg
      viewBox="0 0 400 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className="h-auto w-full"
    >
      <defs>
        <linearGradient id="lounge-blue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6d82ab" />
          <stop offset="100%" stopColor="#b3c0d9" />
        </linearGradient>
        <linearGradient id="lounge-orange" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f6a462" />
          <stop offset="100%" stopColor="#fcd3b0" />
        </linearGradient>
        <linearGradient id="lounge-pillar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e7ebf2" />
        </linearGradient>
      </defs>

      {/* Courthouse */}
      <g opacity="0.9">
        <path d="M195 70 L285 25 L375 70 Z" fill="url(#lounge-pillar)" />
        <path
          d="M195 70 L285 25 L375 70"
          stroke="#e1e6ee"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <rect x="200" y="72" width="170" height="14" rx="3" fill="#eef1f6" />
        {[212, 246, 280, 314, 348].map((x) => (
          <rect
            key={x}
            x={x}
            y="90"
            width="18"
            height="105"
            rx="3"
            fill="url(#lounge-pillar)"
            stroke="#e3e8ef"
          />
        ))}
        <rect x="192" y="196" width="186" height="14" rx="3" fill="#eef1f6" />
      </g>

      {/* Orbit */}
      <circle cx="210" cy="200" r="150" stroke="#e3e7ee" strokeWidth="2" />
      <path
        d="M110 88 A150 150 0 0 1 170 56"
        stroke="#f58216"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="105" cy="94" r="9" fill="#f58216" />
      <circle cx="210" cy="350" r="9" fill="#f58216" />

      {/* Blue bubble */}
      <path
        d="M95 120 H180 A50 50 0 0 1 230 170 V200 A50 50 0 0 1 180 250 H95 L60 278 L66 240 A50 50 0 0 1 30 200 V170 A65 50 0 0 1 95 120 Z"
        fill="url(#lounge-blue)"
      />
      {[82, 126, 170].map((cx) => (
        <circle key={cx} cx={cx} cy="185" r="11" fill="#ffffff" />
      ))}

      {/* Orange bubble */}
      <path
        d="M230 230 H300 A45 45 0 0 1 345 275 V280 A45 45 0 0 1 335 308 L350 340 L310 322 H230 A45 45 0 0 1 185 277 V275 A45 45 0 0 1 230 230 Z"
        fill="url(#lounge-orange)"
      />
      {[232, 264, 296].map((cx) => (
        <circle key={cx} cx={cx} cy="276" r="8.5" fill="#ffffff" />
      ))}
    </svg>
  );
}

export default function SpeakersLounge() {
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
      const captcha = await executeRecaptcha("speaker_interest");

      const response = await registerSpeakerInterest({
        event_type_id: String(APP_EVENT_TYPE),
        name: value("name"),
        email: value("email"),
        phone: value("phone"),
        captcha,
      });

      if (response.status) {
        setStatus("success");
        setStatusMessage(
          response.message || "Thank you! We'll be in touch shortly.",
        );
        form.reset();
      } else {
        setStatus("error");
        setStatusMessage(
          response.message || "Something went wrong. Please try again.",
        );
      }
    } catch (error) {
      console.error("Speaker interest failed:", error);
      setStatus("error");
      setStatusMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="speakers-lounge"
      className="relative w-full scroll-mt-20 overflow-hidden bg-[#f3f5f9] py-[55px] sm:py-[65px] lg:py-[75px]"
    >
      <div className="pointer-events-none absolute -left-16 -top-16 hidden h-[220px] w-[220px] rounded-full bg-[#fde6d2] lg:block" />
      <div className="pointer-events-none absolute bottom-6 left-4 hidden h-[80px] w-[110px] bg-[radial-gradient(#d5dbe5_2px,transparent_2px)] [background-size:20px_20px] lg:block" />

      <div className="relative mx-auto grid max-w-[1170px] gap-6 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_350px] lg:gap-6">
        {/* Intro card */}
        <div className="relative flex flex-col justify-between gap-9 overflow-hidden rounded-[22px] bg-white/80 px-6 py-9 shadow-[0_20px_50px_-25px_rgba(30,45,80,0.25)] sm:px-10 lg:px-11 lg:py-11">
          <div className="pointer-events-none absolute -bottom-28 -right-10 h-[200px] w-[200px] rounded-full bg-[#e9edf5]" />
          <div className="pointer-events-none absolute -top-20 right-10 h-[240px] w-[240px] rounded-full bg-[#f1f3f8]" />

          <div className="relative grid flex-1 content-center items-center gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,240px)] lg:grid-cols-[minmax(0,1fr)_minmax(0,240px)]">
            <div>
              <p className="text-[18px] font-semibold leading-tight text-[#f58216] sm:text-[20px] font-poppins">
                Interested in Speaking?
              </p>
              <div className="mt-[10px] h-[3px] w-[64px] bg-[#f58216]" />

              <h2 className="mt-5 text-[34px] font-extrabold leading-[1.12] text-[#566e99] sm:text-[40px] lg:text-[41px] font-poppins">
                Join the
                <br />
                Speakers&rsquo; Lounge
              </h2>

              <p className="mt-4 text-[22px] font-medium leading-tight text-[#566e99] sm:text-[24px] lg:text-[26px] font-poppins">
                Showcase Your Expertise
              </p>
            </div>

            <div className="mx-auto w-full max-w-[260px] md:max-w-none">
              <LoungeIllustration />
            </div>
          </div>

          <ul className="relative grid gap-5 sm:grid-cols-3 sm:gap-0">
            {PERKS.map(({ Icon, lines, tone }, i) => (
              <li
                key={lines.join(" ")}
                className={`flex items-center gap-3 sm:px-3 lg:px-4 ${
                  i === 0 ? "sm:pl-0" : "sm:border-l sm:border-[#d9dee7]"
                }`}
              >
                <span
                  className={`flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full ${
                    tone === "orange"
                      ? "bg-[#fdeee1] text-[#f58216]"
                      : "bg-[#e6ebf4] text-[#566e99]"
                  }`}
                >
                  <Icon
                    aria-hidden
                    className="h-[22px] w-[22px]"
                    strokeWidth={1.75}
                  />
                </span>
                <span className="whitespace-nowrap text-[16px] font-medium leading-[1.4] text-[#566e99] sm:text-[13px] lg:text-[14px] font-poppins">
                  {lines[0]}
                  <br />
                  {lines[1]}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Interest form */}
        <div className="rounded-[22px] bg-white px-6 py-8 shadow-[0_20px_50px_-25px_rgba(30,45,80,0.25)] sm:px-9 lg:py-9">
          <h3 className="text-[30px] font-extrabold leading-tight text-[#566e99] sm:text-[34px] font-poppins">
            I&apos;m Interested!
          </h3>
          <div className="mt-[10px] h-[3px] w-[64px] bg-[#f58216]" />

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {FIELDS.map(({ name, type, label, placeholder, autoComplete }) => (
              <label key={name} className="block">
                <span className="mb-[6px] block text-[15px] font-semibold text-[#4b5a75] font-poppins">
                  {label}
                </span>
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
                  className="h-[50px] w-full rounded-[8px] border border-[#d6dbe3] bg-[#f6f8fb] px-4 text-[15px] text-[#1e293b] outline-none transition-colors placeholder:text-[#9aa4b5] focus:border-[#f58216] focus:bg-white disabled:opacity-60"
                />
              </label>
            ))}

            <p className="text-[13px] text-[#64748b]">
              *All fields are mandatory
            </p>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex h-[56px] w-full cursor-pointer items-center justify-center gap-2 rounded-[12px] bg-[#f58216] text-[18px] font-bold text-white shadow-[0_10px_22px_-10px_rgba(245,130,22,0.8)] transition-all duration-300 hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60 font-poppins"
            >
              {isSubmitting ? "Submitting..." : "Submit Interest"}
              {!isSubmitting && (
                <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-white text-[#f58216]">
                  <ArrowRight aria-hidden className="h-4 w-4" strokeWidth={3} />
                </span>
              )}
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
    </section>
  );
}
