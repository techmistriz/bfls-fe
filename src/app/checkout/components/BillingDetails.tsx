"use client";

import { useCallback, useState, type FormEvent } from "react";

import { FormField } from "./FormField";
import { SelectField } from "./SelectField";

interface BillingFormData {
  firstName: string;
  lastName: string;
  designation: string;
  email: string;
  phone: string;
  gstNumber: string;
  address: string;
  country: string;
  state: string;
  city: string;
  pincode: string;
}

interface FormErrors {
  [key: string]: string;
}

const stateOptions = [
  { value: "delhi", label: "Delhi" },
  { value: "mumbai", label: "Mumbai" },
  { value: "bangalore", label: "Bangalore" },
  { value: "chennai", label: "Chennai" },
  { value: "kolkata", label: "Kolkata" },
  { value: "hyderabad", label: "Hyderabad" },
];

const cityOptions = [
  { value: "new-delhi", label: "New Delhi" },
  { value: "mumbai-city", label: "Mumbai City" },
  { value: "bangalore-city", label: "Bangalore City" },
  { value: "chennai-city", label: "Chennai City" },
  { value: "kolkata-city", label: "Kolkata City" },
  { value: "hyderabad-city", label: "Hyderabad City" },
];

const countryOptions = [{ value: "india", label: "India" }];

export function BillingDetails() {
  const [formData, setFormData] = useState<BillingFormData>({
    firstName: "",
    lastName: "",
    designation: "",
    email: "",
    phone: "",
    gstNumber: "",
    address: "",
    country: "india",
    state: "",
    city: "",
    pincode: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = useCallback((name: string, value: string): string => {
    switch (name) {
      case "firstName":
      case "lastName":
      case "designation":
      case "address":
        return value.trim() ? "" : `${name} is required`;

      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ""
          : "Invalid email address";

      case "phone":
        return value.length >= 10
          ? ""
          : "Phone number must be at least 10 digits";

      case "pincode":
        return /^\d{6}$/.test(value) ? "" : "Pincode must be 6 digits";

      case "state":
      case "city":
        return value ? "" : `${name} is required`;

      default:
        return "";
    }
  }, []);

  const handleChange = useCallback(
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      const { name, value } = e.target;

      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));

      const error = validateField(name, value);

      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    },
    [validateField],
  );

  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    const requiredFields = [
      "firstName",
      "lastName",
      "designation",
      "email",
      "phone",
      "address",
      "state",
      "city",
      "pincode",
    ];

    requiredFields.forEach((field) => {
      const value = formData[field as keyof BillingFormData];
      const error = validateField(field, value);

      if (error) {
        newErrors[field] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);

    return isValid;
  }, [formData, validateField]);

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      if (!validateForm()) {
        return;
      }

      setIsSubmitting(true);

      try {
        // TODO: Implement API call
        console.log("Form data:", formData);

        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (error) {
        console.error("Submission error:", error);
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, validateForm],
  );

  return (
    <form className="space-y-[16px]" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-[16px] sm:grid-cols-2 sm:gap-[12px]">
        <FormField
          label="First name"
          required
          placeholder="Enter first name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          error={errors.firstName}
        />

        <FormField
          label="Last name"
          required
          placeholder="Enter last name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          error={errors.lastName}
        />
      </div>

      <FormField
        label="Designation"
        required
        placeholder="Enter designation"
        name="designation"
        value={formData.designation}
        onChange={handleChange}
        error={errors.designation}
      />

      <FormField
        label="Email address"
        required
        placeholder="Enter email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />

      <FormField
        label="Phone"
        required
        placeholder="Enter phone number"
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        error={errors.phone}
      />

      <FormField
        label="GST Number"
        placeholder="Enter GST number"
        name="gstNumber"
        value={formData.gstNumber}
        onChange={handleChange}
        error={errors.gstNumber}
      />

      <div>
        <label
          className="mb-[7px] block text-[15px] font-medium leading-[14px] text-[#002b5c]"
          htmlFor="address"
        >
          Address <span className="text-[#d9232e]">*</span>
        </label>

        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter address"
          rows={2}
          className={`
            block h-[75px] w-full resize-none rounded-[4px] border border-[#ccd2d9]
            px-[10px] py-[9px] text-[10px] text-[#333] outline-none
            placeholder:text-[15px] placeholder:text-[#9da5ae]
            focus:border-[#999]
            ${errors.address ? "border-[#d9232e]" : ""}
          `}
        />

        {errors.address && (
          <p className="mt-1 text-[12px] text-[#d9232e]">{errors.address}</p>
        )}
      </div>

      <SelectField
        label="Country / Region"
        required
        name="country"
        value={formData.country}
        onChange={handleChange}
        options={countryOptions}
        error={errors.country}
      />

      <div className="grid grid-cols-1 gap-[16px] sm:grid-cols-3 sm:gap-[12px]">
        <SelectField
          label="State"
          required
          placeholder="Select State"
          name="state"
          value={formData.state}
          onChange={handleChange}
          options={stateOptions}
          error={errors.state}
        />

        <SelectField
          label="City"
          required
          placeholder="Select City"
          name="city"
          value={formData.city}
          onChange={handleChange}
          options={cityOptions}
          error={errors.city}
        />

        <FormField
          label="Pincode"
          required
          placeholder="Enter pincode"
          name="pincode"
          value={formData.pincode}
          onChange={handleChange}
          error={errors.pincode}
        />
      </div>

      <button type="submit" className="hidden" disabled={isSubmitting} />
    </form>
  );
}
