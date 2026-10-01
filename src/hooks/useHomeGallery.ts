"use client";

import { useEffect, useState } from "react";

import type { GalleryItem } from "@/src/types/gallery.type";
import { getHomeGallery } from "../services/gallery.service";

export const useHomeGallery = (eventId?: number) => {
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!eventId) return;

    const fetchGallery = async () => {
      try {
        setLoading(true);

        const response = await getHomeGallery(eventId);

        setGallery(response.status ? (response.data ?? []) : []);
      } catch (error) {
        console.error("Failed to fetch home gallery:", error);
        setGallery([]);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, [eventId]);

  return { gallery, loading };
};
