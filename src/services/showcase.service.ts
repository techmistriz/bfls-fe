import api from "@/src/network/axios";
import type { ShowcasePayload, ShowcaseResponse } from "@/src/types/showcase";

export const submitShowcaseForm = async (
  payload: ShowcasePayload,
): Promise<ShowcaseResponse> => {
  const { data } = await api.post<ShowcaseResponse>("/showcase", payload);

  return data;
};
