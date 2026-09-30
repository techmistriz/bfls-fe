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
      className = "",
      ...props
    },
    ref,
  ) => {
    return (
      <div className="space-y-1">
        <label
          htmlFor={props.id || props.name}
          className="block text-[15px] font-medium leading-[14px] text-[#002b5c]"
        >
          {label}
          {required && <span className="text-[#d9232e]"> *</span>}
        </label>

        <div className="relative">
          <select
            ref={ref}
            {...props}
            className={`h-[45px] w-full appearance-none rounded-[3px] border border-[#ccd2d9] bg-white px-[9px] text-[15px] text-[#333] outline-none focus:border-[#999] disabled:bg-[#f3f3f3] ${
              error ? "border-[#d9232e] focus:border-[#d9232e]" : ""
            } ${className}`}
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
