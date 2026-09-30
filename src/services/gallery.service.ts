import api from "@/src/network/axios";
import type { GalleryResponse } from "@/src/types/gallery.type";
import { APP_EVENT_TYPE } from "../config/eventType.config";

export const getHomeGallery = async (): Promise<GalleryResponse> => {
  const { data } = await api.get<GalleryResponse>(
    `/homepage-gallery/${APP_EVENT_TYPE}`,
  );

  return data;
};

export const getGalleries = async (): Promise<GalleryResponse> => {
  const { data } = await api.get<GalleryResponse>(
    `/galleries/${APP_EVENT_TYPE}`,
  );

  return data;
};
