import api from "@/src/network/axios";

export interface RegisterInterestPayload {
  event_type_id: string;
  name: string;
  email: string;
  phone: string;
  captcha: string;
}

export const registerInterest = async (payload: RegisterInterestPayload) => {
  const { data } = await api.post("/register-interest", payload);
  return data;
};
