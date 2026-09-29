"use client";

import { useEffect, useState } from "react";
import type { PastEditionYear } from "@/src/types/pastEditionResponse";
import { getPastEditions } from "../services/past-edition.service";

export const usePastEditions = () => {
  const [editions, setEditions] = useState<PastEditionYear[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPastEditions = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await getPastEditions();

        setEditions(response.data?.events ?? []);
      } catch (err) {
        console.error("Failed to fetch past editions:", err);
        setError("Failed to load past editions");
      } finally {
        setLoading(false);
      }
    };

    fetchPastEditions();
  }, []);

  return {
    editions,
    loading,
    error,
  };
};
