import api from "@/src/network/axios";
import type { GalleryResponse } from "@/src/types/gallery.type";

export const getHomeGallery = async (
  eventId: number,
): Promise<GalleryResponse> => {
  const { data } = await api.get<GalleryResponse>(
    `/homepage-gallery/${eventId}`,
  );

  return data;
};

export const getGallery = async (idOrSlug: number | string) => {
  const res = await api.get(`/event/${idOrSlug}`);
  return res;
};
