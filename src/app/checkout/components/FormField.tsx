"use client";

import { forwardRef } from "react";

import type { FormFieldProps } from "@/src/types";

export const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, required = false, error, className = "", ...props }, ref) => {
    return (
      <div className="space-y-1">
        <label
          htmlFor={props.id || props.name}
          className="block text-[15px] font-medium leading-[14px] text-[#002b5c]"
        >
          {label}
          {required && <span className="text-[#d9232e]"> *</span>}
        </label>

        <input
          ref={ref}
          {...props}
          className={`h-[45px] w-full rounded-[4px] border border-[#ccd2d9] px-[10px] text-[14px] leading-[14px] text-[#333] outline-none placeholder:text-[15px] placeholder:text-[#9da5ae] focus:border-[#999] disabled:bg-[#f3f3f3] ${
            error ? "border-[#d9232e] focus:border-[#d9232e]" : ""
          } ${className}`}
        />

        {error && <p className="mt-1 text-[12px] text-[#d9232e]">{error}</p>}
      </div>
    );
  },
);

FormField.displayName = "FormField";
