import type { ApiError } from "@/src/types/api";

export const getErrorMessage = (
  error: unknown,
  fallback = "Something went wrong. Please try again.",
): string => {
  const apiError = error as ApiError;

  return apiError.response?.data?.message || apiError.message || fallback;
};
