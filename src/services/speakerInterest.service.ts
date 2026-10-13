import api from "@/src/network/axios";

export interface SpeakerInterestPayload {
  event_type_id: string;
  name: string;
  email: string;
  phone: string;
  captcha: string;
}

// TODO: placeholder endpoint until the backend route is confirmed.
export const registerSpeakerInterest = async (
  payload: SpeakerInterestPayload,
) => {
  const { data } = await api.post("/speaker-interest", payload);
  return data;
};
