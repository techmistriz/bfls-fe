// app/checkout/components/SelectField.tsx
"use client";

import { forwardRef } from "react";
import type { SelectFieldProps } from "@/src/types";
import { ChevronDown } from "./ChevronDown";

export const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(
  (
    {
      label,
      required = false,
      options = [],
      error,
      placeholder,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <div className="space-y-1">
        <label
          className="block text-[15px] font-medium leading-[14px] text-[#002b5c]"
          htmlFor={props.id || props.name}
        >
          {label}
          {required && <span className="text-[#d9232e]"> *</span>}
        </label>

        <div className="relative">
          <select
            ref={ref}
            className={`
              h-[45px] w-full appearance-none rounded-[3px] border border-[#ccd2d9]
              bg-white px-[9px] text-[15px] text-[#333] outline-none
              disabled:bg-[#f3f3f3]
              ${error ? "border-[#d9232e] focus:border-[#d9232e]" : ""}
              ${className || ""}
            `}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}

            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <ChevronDown />
        </div>

        {error && <p className="mt-1 text-[12px] text-[#d9232e]">{error}</p>}
      </div>
    );
  },
);

SelectField.displayName = "SelectField";
