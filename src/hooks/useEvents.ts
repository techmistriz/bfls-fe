"use client";

import { useEffect, useState } from "react";
import { getEvents } from "../services/homePage";
import type { Event } from "@/src/types/event.type";
import { EventsResponse } from "../types/eventResponse.type";

export const useEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        setError(null);

        const response: EventsResponse = await getEvents();

        console.log(response);

        setEvents(response.data?.events ?? []);
      } catch (err: unknown) {
        console.error("Failed to fetch events:", err);
        setError("Failed to load events");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return {
    events,
    loading,
    error,
  };
};
