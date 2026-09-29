"use client";

import { useEffect, useState } from "react";
import type { GalleryItem } from "@/src/types/gallery.type";
import { getGallery } from "../services/gallery.service";

export const useGallery = () => {
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        setLoading(true);

        const response = await getGallery();

        if (response.status) {
          setGallery(response.data ?? []);
        } else {
          setGallery([]);
        }
      } catch (error) {
        console.error("Failed to fetch gallery:", error);
        setGallery([]);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  return {
    gallery,
    loading,
  };
};
