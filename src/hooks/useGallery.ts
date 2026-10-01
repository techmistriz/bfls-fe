"use client";

import { useEffect, useState } from "react";

import { getGallery } from "../services/gallery.service";

export const useGallery = (eventIdOrSlug?: number | string) => {
  const [gallery, setGallery] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!eventIdOrSlug) return;

    const fetchGallery = async () => {
      try {
        setLoading(true);

        const response = await getGallery(eventIdOrSlug);
        const images = response.data?.data?.gallery?.images ?? [];

        setGallery(images);
      } catch (error) {
        console.error("Failed to fetch gallery:", error);
        setGallery([]);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, [eventIdOrSlug]);

  return { gallery, loading };
};
