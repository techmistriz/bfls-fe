"use client";

import { useEffect, useState } from "react";
import { getRegistrationPlans } from "@/src/services/registration.service";
import type { RegistrationPlan } from "@/src/types/registration.type";

export const useRegistrationPlans = () => {
  const [plans, setPlans] = useState<RegistrationPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await getRegistrationPlans();

        if (response.status) {
          setPlans(
            [...response.data].sort((a, b) => a.sort_order - b.sort_order),
          );
        } else {
          setPlans([]);
        }
      } catch (error) {
        console.error("Failed to fetch registration plans:", error);
        setError("Failed to load registration plans.");
        setPlans([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  return {
    plans,
    loading,
    error,
  };
};
