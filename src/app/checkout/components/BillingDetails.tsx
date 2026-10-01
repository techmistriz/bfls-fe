"use client";

import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";

import {
  getCities,
  getCountries,
  getStates,
} from "@/src/services/location.service";
import type { RegisterOrderPayload } from "@/src/types/order";

import { FormField } from "./FormField";
import { SelectField } from "./SelectField";
import type { LocationItem } from "@/src/types/location";

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

interface BillingDetailsProps {
  onSubmit: (data: RegisterOrderPayload) => Promise<void>;
  loading?: boolean;
  formId?: string;
}

export function BillingDetails({
  onSubmit,
  loading = false,
  formId = "billing-form",
}: BillingDetailsProps) {
  const [countries, setCountries] = useState<LocationItem[]>([]);
  const [states, setStates] = useState<LocationItem[]>([]);
  const [cities, setCities] = useState<LocationItem[]>([]);

  const [loadingCountries, setLoadingCountries] = useState(false);
  const [loadingStates, setLoadingStates] = useState(false);
  const [loadingCities, setLoadingCities] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<BillingFormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      designation: "",
      email: "",
      phone: "",
      gstNumber: "",
      address: "",
      country: "",
      state: "",
      city: "",
      pincode: "",
    },
  });

  const selectedCountry = useWatch({
    control,
    name: "country",
  });

  const selectedState = useWatch({
    control,
    name: "state",
  });

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoadingCountries(true);

        const response = await getCountries();
        setCountries(response.data);
      } catch (error) {
        console.error("Failed to fetch countries:", error);
        setCountries([]);
      } finally {
        setLoadingCountries(false);
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    if (!selectedCountry) {
      return;
    }

    const fetchStates = async () => {
      try {
        setLoadingStates(true);

        const response = await getStates(Number(selectedCountry));
        setStates(response.data);
      } catch (error) {
        console.error("Failed to fetch states:", error);
        setStates([]);
      } finally {
        setLoadingStates(false);
      }
    };

    fetchStates();
  }, [selectedCountry]);

  useEffect(() => {
    if (!selectedState) {
      return;
    }

    const fetchCities = async () => {
      try {
        setLoadingCities(true);

        const response = await getCities(Number(selectedState));
        setCities(response.data);
      } catch (error) {
        console.error("Failed to fetch cities:", error);
        setCities([]);
      } finally {
        setLoadingCities(false);
      }
    };

    fetchCities();
  }, [selectedState]);

  const submitForm = async (data: BillingFormData) => {
    const payload: RegisterOrderPayload = {
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      phone: data.phone,
      designation: data.designation,
      company_name: "",
      address: data.address,
      country_id: Number(data.country),
      state_id: Number(data.state),
      city_id: Number(data.city),
      pincode: data.pincode,
      gst_number: data.gstNumber,
    };

    await onSubmit(payload);
  };

  const countryOptions = countries.map(({ id, name }) => ({
    value: String(id),
    label: name,
  }));

  const stateOptions = states.map(({ id, name }) => ({
    value: String(id),
    label: name,
  }));

  const cityOptions = cities.map(({ id, name }) => ({
    value: String(id),
    label: name,
  }));

  return (
    <form
      id={formId}
      className="space-y-[16px]"
      onSubmit={handleSubmit(submitForm)}
    >
      <div className="grid grid-cols-1 gap-[16px] sm:grid-cols-2 sm:gap-[12px]">
        <FormField
          label="First name"
          required
          placeholder="Enter first name"
          {...register("firstName", {
            required: "First name is required",
          })}
          error={errors.firstName?.message}
        />

        <FormField
          label="Last name"
          required
          placeholder="Enter last name"
          {...register("lastName", {
            required: "Last name is required",
          })}
          error={errors.lastName?.message}
        />
      </div>

      <FormField
        label="Designation"
        required
        placeholder="Enter designation"
        {...register("designation", {
          required: "Designation is required",
        })}
        error={errors.designation?.message}
      />

      <FormField
        label="Email address"
        required
        placeholder="Enter email"
        type="email"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Invalid email address",
          },
        })}
        error={errors.email?.message}
      />

      <FormField
        label="Phone"
        required
        placeholder="Enter phone number"
        type="tel"
        {...register("phone", {
          required: "Phone number is required",
          pattern: {
            value: /^\d{10}$/,
            message: "Phone number must be 10 digits",
          },
        })}
        error={errors.phone?.message}
      />

      <FormField
        label="GST Number"
        placeholder="Enter GST number"
        {...register("gstNumber")}
        error={errors.gstNumber?.message}
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
          placeholder="Enter address"
          rows={2}
          {...register("address", {
            required: "Address is required",
          })}
          className={`block h-[75px] w-full resize-none rounded-[4px] border border-[#ccd2d9] px-[10px] py-[9px] text-[14px] text-[#333] outline-none placeholder:text-[15px] placeholder:text-[#9da5ae] focus:border-[#999] ${
            errors.address ? "border-[#d9232e]" : ""
          }`}
        />

        {errors.address && (
          <p className="mt-1 text-[12px] text-[#d9232e]">
            {errors.address.message}
          </p>
        )}
      </div>

      <SelectField
        label="Country / Region"
        required
        {...register("country", {
          required: "Country is required",
          onChange: () => {
            setValue("state", "");
            setValue("city", "");
            setStates([]);
            setCities([]);
          },
        })}
        options={countryOptions}
        error={errors.country?.message}
        disabled={loadingCountries || loading}
      />

      <div className="grid grid-cols-1 gap-[16px] sm:grid-cols-3 sm:gap-[12px]">
        <SelectField
          label="State"
          required
          placeholder={loadingStates ? "Loading states..." : "Select State"}
          {...register("state", {
            required: "State is required",
            onChange: () => {
              setValue("city", "");
              setCities([]);
            },
          })}
          options={stateOptions}
          error={errors.state?.message}
          disabled={!selectedCountry || loadingStates || loading}
        />

        <SelectField
          label="City"
          required
          placeholder={loadingCities ? "Loading cities..." : "Select City"}
          {...register("city", {
            required: "City is required",
          })}
          options={cityOptions}
          error={errors.city?.message}
          disabled={!selectedState || loadingCities || loading}
        />

        <FormField
          label="Pincode"
          required
          placeholder="Enter pincode"
          {...register("pincode", {
            required: "Pincode is required",
            pattern: {
              value: /^\d{6}$/,
              message: "Pincode must be 6 digits",
            },
          })}
          error={errors.pincode?.message}
        />
      </div>
    </form>
  );
}
