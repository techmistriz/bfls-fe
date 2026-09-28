import api from "@/src/network/axios";

export const getPlans = async () => {
  const { data } = await api.get("/plans");
  return data;
};
