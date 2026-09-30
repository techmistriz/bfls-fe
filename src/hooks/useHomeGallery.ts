"use client";

import { useEffect, useState } from "react";

import type { GalleryItem } from "@/src/types/gallery.type";
import { getHomeGallery } from "../services/gallery.service";

export const useHomeGallery = () => {
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        setLoading(true);

        const response = await getHomeGallery();

        setGallery(response.status ? (response.data ?? []) : []);
      } catch (error) {
        console.error("Failed to fetch home gallery:", error);
        setGallery([]);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  return { gallery, loading };
};
