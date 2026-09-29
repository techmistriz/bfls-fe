import api from "@/src/network/axios";
import { APP_EVENT_TYPE } from "@/src/config/event";
import type { GalleryResponse } from "@/src/types/gallery";

export const getGallery = async (): Promise<GalleryResponse> => {
  const { data } = await api.get<GalleryResponse>(
    `/homepage-gallery/${APP_EVENT_TYPE}`,
  );

  return data;
};
