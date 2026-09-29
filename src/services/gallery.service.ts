import api from "@/src/network/axios";
import type { GalleryResponse } from "@/src/types/gallery";
import { APP_EVENT_TYPE } from "../config/eventType.config";

export const getGallery = async (): Promise<GalleryResponse> => {
  const { data } = await api.get<GalleryResponse>(
    `/homepage-gallery/${APP_EVENT_TYPE}`,
  );

  return data;
};
