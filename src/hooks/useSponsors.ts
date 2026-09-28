"use client";

import { useEffect, useState } from "react";
import { getSponsors } from "../services/APIs/homePage";

export interface Sponsor {
  id: number;
  event_id: number;
  sponsor_id: number;
  ordering: number;
  status: number;
  sponsor: {
    id: number;
    title: string;
    sponsor_type: string;
    website_url: string;
    image: string | null;
  };
}

export function useSponsors() {
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSponsors = async () => {
      try {
        setLoading(true);

        const response = await getSponsors();

        const eventSponsors = response?.data?.events?.[0]?.sponsors ?? [];

        setSponsors(
          [...eventSponsors].sort(
            (a: Sponsor, b: Sponsor) => a.ordering - b.ordering,
          ),
        );
      } catch (err) {
        console.error("Failed to fetch sponsors:", err);
        setError("Failed to load sponsors");
      } finally {
        setLoading(false);
      }
    };

    fetchSponsors();
  }, []);

  return {
    sponsors,
    loading,
    error,
  };
}
