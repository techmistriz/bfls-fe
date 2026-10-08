"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

import SubscribeSection from "@/src/components/sections/SubscribeSection";
import { PageBanner } from "@/src/components/layout/PageBanner";
import { submitContactUs } from "@/src/services/contact.service";
import { ApiError } from "@/src/types/api.type";
import { APP_EVENT_TYPE } from "@/src/config/eventType.config";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

const DEFAULT_VALUES: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
};

const inputClass =
  "h-[50px] w-full border border-[#dedede] bg-[#f8f8f8] px-[12px] text-[16px] text-[#555] outline-none placeholder:text-[#777] focus:border-[#f58220] max-sm:h-[48px] max-sm:text-[15px]";

export default function ContactUs() {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [scrollY, setScrollY] = useState(0);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const { register, handleSubmit, reset } = useForm<ContactFormData>({
    defaultValues: DEFAULT_VALUES,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onSubmit = async (formData: ContactFormData) => {
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      if (!executeRecaptcha) {
        throw new Error("reCAPTCHA is not ready. Please try again.");
      }

      const captcha = await executeRecaptcha("contact_us");

      await submitContactUs({
        event_type_id: String(APP_EVENT_TYPE),
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        message: formData.message,
        captcha,
      });

      setSuccess("Your message has been submitted successfully.");
      reset(DEFAULT_VALUES);
    } catch (err: unknown) {
      const apiError = err as ApiError;

      setError(
        apiError.response?.data?.message ||
          apiError.message ||
          "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full overflow-hidden">
      <PageBanner
        backgroundImage="/images/bg_banner_mew.jpg"
        title="Your Witness Please!"
        subtitle="Let us know what we can help you with."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />

      <section className="relative min-h-[500px] w-full overflow-hidden max-sm:min-h-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat max-sm:bg-[center_center]"
          style={{
            backgroundImage: "url('/images/contact_page_form_bg.jpg')",
          }}
        />

        <span className="absolute left-[15%] top-[100px] z-[2] hidden h-[4px] w-[4px] rounded-full bg-[#f58220] sm:left-[28%] sm:block" />

        <span className="absolute right-[10%] top-[57%] z-[2] hidden text-[18px] font-bold text-[#f58220] sm:right-[22%] sm:block sm:text-[20px]">
          ▪
        </span>

        <span className="absolute bottom-[30px] left-[10%] z-[2] hidden text-[20px] font-bold text-[#f58220] sm:bottom-[38px] sm:left-[20%] sm:block sm:text-[22px]">
          ×
        </span>

        <div className="relative z-[5] mx-auto flex min-h-[500px] w-full max-w-[1170px] flex-col items-center px-4 pb-[115px] pt-[135px] sm:px-0 max-md:pb-[80px] max-md:pt-[80px] max-sm:min-h-0 max-sm:px-[15px] max-sm:pb-[55px] max-sm:pt-[60px]">
          <div className="relative z-[5] mb-[28px] text-center sm:mb-[32px] max-sm:mb-[25px]">
            <h2
              className="pointer-events-none absolute left-1/2 top-[85%] z-0 hidden -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[48px] font-extrabold leading-[1.15] text-[#fff] sm:block sm:text-[158px]"
              style={{
                transform: `translate(0%, calc(-50% - ${scrollY * 0.03}px))`,
                transition: "transform 0.2s ease-out",
                willChange: "transform",
              }}
            >
              contact
            </h2>

            <div className="relative z-[2]">
              <p className="mb-[5px] text-[30px] font-bold leading-none text-[#f58220] sm:text-[32px] max-sm:text-[25px]">
                # Have Questions?
              </p>

              <h2 className="text-[48px] font-bold leading-[1.15] text-[#536b98] sm:text-[56px] max-sm:text-[38px]">
                Drop us a Line
              </h2>
            </div>
          </div>

          <div className="flex w-full flex-col items-stretch justify-center gap-6 lg:flex-row lg:items-start lg:gap-6">
            {/* Left side Form Card */}
            <div className="w-full rounded-sm  bg-white px-5 py-6 shadow-[0_5px_25px_rgba(0,0,0,0.05)] sm:px-[40px] sm:py-[40px] lg:w-[65%] max-sm:px-[16px] max-sm:py-[22px]">
              <h3 className="mb-[20px] text-[28px] font-bold leading-[1.2] text-[#111] max-sm:text-[24px] max-sm:leading-[1.3]">
                Your <span className="text-[#f58220]">Witness</span> Please!
              </h3>

              <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-[15px] grid grid-cols-1 gap-[10px] sm:grid-cols-2 sm:gap-[15px]">
                  <input
                    type="text"
                    placeholder="Your Name*"
                    className={inputClass}
                    {...register("name", {
                      required: "Name is required",
                    })}
                  />

                  <input
                    type="email"
                    placeholder="Your Email*"
                    className={inputClass}
                    {...register("email", {
                      required: "Email is required",
                    })}
                  />
                </div>

                <div className="mb-[15px] grid grid-cols-1 gap-[10px] sm:grid-cols-2 sm:gap-[15px]">
                  <input
                    type="tel"
                    placeholder="Phone Number*"
                    className={inputClass}
                    {...register("phone", {
                      required: "Phone number is required",
                    })}
                  />

                  <input
                    type="text"
                    placeholder="Company Name*"
                    className={inputClass}
                    {...register("company", {
                      required: "Company name is required",
                    })}
                  />
                </div>

                <textarea
                  placeholder="Please place your query here"
                  className="mb-[20px] h-[150px] w-full resize-none border border-[#dedede] bg-[#f8f8f8] px-[12px] py-[10px] text-[16px] text-[#555] outline-none placeholder:text-[#777] focus:border-[#f58220] max-sm:h-[120px] max-sm:text-[15px]"
                  {...register("message", {
                    required: "Message is required",
                  })}
                />

                {success && (
                  <p className="mb-4 text-center text-sm font-medium text-green-600">
                    {success}
                  </p>
                )}

                {error && (
                  <p className="mb-4 text-center text-sm font-medium text-red-600">
                    {error}
                  </p>
                )}

                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={loading}
                    className="h-[50px] w-[200px] rounded-[3px] bg-[#f58220] text-[16px] font-bold text-white transition-all duration-300 hover:bg-[#d96d0d] disabled:cursor-not-allowed disabled:opacity-60 max-sm:h-[48px] max-sm:w-full max-sm:max-w-[200px] max-sm:text-[15px]"
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>

            {/* Right side Dark Contact Info Card */}
            <div className="flex w-full flex-col justify-between rounded-sm bg-[#4a5f87] px-8 text-white shadow-[0_5px_25px_rgba(0,0,0,0.05)] sm:p-2 lg:min-h-[600px] lg:w-[28%]">
              {/* Contact 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-2 text-white/90">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h4 className="text-[17px] sm:text-[18px] font-bold tracking-wide">
                  Bhupinder Kaur
                </h4>
                <p className="mt-1 text-[13px] sm:text-[15px] text-white/90">
                  E:{" "}
                  <a
                    href="mailto:bhupinder@witnesslive.in"
                    className="hover:underline"
                  >
                    bhupinder@witnesslive.in
                  </a>
                </p>
                <p className="text-[13px] text-white/90 sm:text-[15px]">
                  T: +91-9654155065
                </p>
              </div>

              <hr className="my-6 border-t border-white" />

              {/* Contact 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-2 text-white/90">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h4 className="text-[18px] font-bold tracking-wide">
                  Neelima Maheshwari
                </h4>
                <p className="mt-1 text-[13px] sm:text-[15px] text-white/90">
                  E:{" "}
                  <a
                    href="mailto:neelima.maheshwari@witnesslive.in"
                    className="hover:underline"
                  >
                    neelima.maheshwari@witnesslive.in
                  </a>
                </p>
                <p className="text-[13px] text-white/90 sm:text-[15px]">
                  T: +91-8800841600
                </p>
              </div>

              <hr className="my-6 border-t border-white" />

              {/* Secretariat Office */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-2 text-white/90">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </div>
                <h4 className="text-[18px] font-bold tracking-wide">
                  Secretariat Office
                </h4>
                <p className="mt-1 text-[13px] font-semibold text-white/90 sm:text-[15px]">
                  Lex Witness
                </p>
                <p className="mt-0.5 text-[12px] leading-snug text-white/80 sm:text-[15px]">
                  Suite 1/6, Lower Ground Floor, Block B,
                  <br />
                  Hauz Khas, New Delhi - 110016
                </p>
              </div>
              <hr className="my-6 border-t border-white" />
            </div>
          </div>
        </div>
      </section>

      <SubscribeSection />
    </div>
  );
}
