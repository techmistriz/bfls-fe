import { APP_EVENT_TYPE } from "../config/eventType.config";
import api from "../network/axios";
import { PastEditionResponse } from "../types/pastEditionResponse.type";

export const getPastEditions = async (): Promise<PastEditionResponse> => {
  const { data } = await api.get<PastEditionResponse>(
    `/events/${APP_EVENT_TYPE}`,
    {
      params: {
        is_past_edition: 1,
      },
    },
  );

  return data;
};
