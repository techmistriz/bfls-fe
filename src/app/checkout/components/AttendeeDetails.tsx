"use client";

import { useFieldArray, useFormContext } from "react-hook-form";
import { FormField } from "./FormField";
import { useEffect } from "react";

export interface Attendee {
  name: string;
  email: string;
  phone: string;
  company: string;
  designation: string;
}

export interface CheckoutFormData {
  attendees: Attendee[];
}

interface AttendeeDetailsProps {
  attendeeCount: number;
}

export function AttendeeDetails({ attendeeCount }: AttendeeDetailsProps) {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext<CheckoutFormData>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "attendees",
  });

  useEffect(() => {
    if (fields.length < attendeeCount) {
      const missingCount = attendeeCount - fields.length;

      append(
        Array.from({ length: missingCount }, () => ({
          name: "",
          email: "",
          phone: "",
          company: "",
          designation: "",
        })),
      );
    } else if (fields.length > attendeeCount) {
      const excessIndexes = Array.from(
        { length: fields.length - attendeeCount },
        (_, index) => fields.length - 1 - index,
      );

      remove(excessIndexes);
    }
  }, [attendeeCount, fields.length, append, remove]);

  return (
    <section className="mb-8">
      <h2 className="mb-[23px] text-[20px] font-bold uppercase text-[#d9232e]">
        ATTENDEE DETAILS
      </h2>

      <div className="space-y-6">
        {fields.slice(0, attendeeCount).map((field, index) => (
          <div
            key={field.id}
            className="space-y-4 rounded-[5px] border border-[#e0e3e7] p-4 sm:p-5"
          >
            <h3 className="font-semibold text-[#002b5c]">
              Attendee {index + 1}
            </h3>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <FormField
                label="Name"
                required
                placeholder="Enter name"
                {...register(`attendees.${index}.name`, {
                  required: "Name is required",
                })}
                error={errors.attendees?.[index]?.name?.message}
              />

              <FormField
                label="Email"
                required
                type="email"
                placeholder="Enter email"
                {...register(`attendees.${index}.email`, {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email",
                  },
                })}
                error={errors.attendees?.[index]?.email?.message}
              />

              <FormField
                label="Phone"
                required
                type="tel"
                placeholder="Enter phone number"
                {...register(`attendees.${index}.phone`, {
                  required: "Phone is required",
                  pattern: {
                    value: /^\d{10}$/,
                    message: "Phone must be 10 digits",
                  },
                })}
                error={errors.attendees?.[index]?.phone?.message}
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FormField
                label="Company"
                required
                placeholder="Enter company"
                {...register(`attendees.${index}.company`, {
                  required: "Company is required",
                })}
                error={errors.attendees?.[index]?.company?.message}
              />

              <FormField
                label="Designation"
                required
                placeholder="Enter designation"
                {...register(`attendees.${index}.designation`, {
                  required: "Designation is required",
                })}
                error={errors.attendees?.[index]?.designation?.message}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
