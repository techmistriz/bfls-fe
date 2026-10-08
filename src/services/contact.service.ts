import api from "@/src/network/axios";

export interface ContactUsPayload {
  event_type_id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  captcha: string;
}

export const submitContactUs = async (payload: ContactUsPayload) => {
  const { data } = await api.post("/contact-us", payload);
  console.log(data);
  return data;
};
