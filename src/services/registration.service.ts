import api from "@/src/network/axios";
import type { PlansResponse } from "@/src/types/registration.type";

export const getRegistrationPlans = async (): Promise<PlansResponse> => {
  const { data } = await api.get<PlansResponse>("/plans");

  return data;
};
