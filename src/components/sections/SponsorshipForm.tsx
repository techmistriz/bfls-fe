"use client";

import { FormEvent, useState } from "react";
import { submitSponsorshipForm } from "@/src/services/sponsorship.service";

export default function SponsorshipForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      contact: String(formData.get("contact") ?? ""),
    };

    setIsSubmitting(true);

    try {
      await submitSponsorshipForm(data);
      e.currentTarget.reset();
    } catch (error) {
      console.error("Sponsorship form submission failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-[460px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/call_to_action_bg.png')" }}
      />

      <div className="absolute inset-0 bg-black/70" />

      <div className="pointer-events-none absolute left-0 top-[225px] hidden h-[105px] w-[195px] opacity-60 sm:block">
        <div className="dot-pattern" />
      </div>

      <div className="pointer-events-none absolute right-[8%] top-[155px] hidden h-[90px] w-[150px] opacity-60 sm:block">
        <div className="dot-pattern" />
      </div>

      <div className="relative z-10 flex min-h-[460px] items-start justify-center px-5 py-[130px]">
        <div className="w-full max-w-[1000px] text-center">
          <p className="mb-[10px] text-[23px] font-bold leading-tight text-[#f58216] sm:text-[30px]">
            Showcase Yourself
          </p>

          <h2 className="mx-auto max-w-[600px] text-[34px] font-extrabold leading-[1.12] text-white sm:text-[42px] lg:text-[56px] font-poppins">
            Curate Your Own
            <br />
            Sponsorship Wish
          </h2>

          <form onSubmit={handleSubmit} className="mx-auto mt-[20px] w-full">
            <div className="flex flex-col items-center justify-center gap-[30px] sm:flex-row">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                disabled={isSubmitting}
                className="h-[50px] w-full max-w-[250px] border border-[#f58216] bg-white px-[22px] text-[12px] text-[#333] outline-none placeholder:text-[#777] focus:border-[#f58216] disabled:opacity-60"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                required
                disabled={isSubmitting}
                className="h-[50px] w-full max-w-[250px] border border-[#f58216] bg-white px-[22px] text-[12px] text-[#333] outline-none placeholder:text-[#777] focus:border-[#f58216] disabled:opacity-60"
              />

              <input
                type="tel"
                name="contact"
                placeholder="Your Contact Number"
                required
                disabled={isSubmitting}
                className="h-[50px] w-full max-w-[250px] border border-[#f58216] bg-white px-[22px] text-[12px] text-[#333] outline-none placeholder:text-[#777] focus:border-[#f58216] disabled:opacity-60"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group mt-15 inline-flex h-[64px] items-center justify-center gap-2 rounded-[6px] border-2 border-[#EF7F1B] bg-[#EF7F1B] px-[40px] text-[15px] font-bold text-white font-archivo transition-all duration-300 hover:bg-[#fff] hover:text-[#EF7F1B] hover:border-[#EF7F1B] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 max-md:mt-6 max-md:h-[58px] max-md:px-6 max-md:text-[14px] max-sm:mt-6 max-sm:h-[54px] max-sm:w-full max-sm:px-5 max-sm:text-[14px]"
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
            rgba(255, 255, 255, 0.55) 2px,
            transparent 2px
          );
          background-size: 17px 16px;
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
