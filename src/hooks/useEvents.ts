"use client";

import { useEffect, useState } from "react";
import { getEvents } from "../services/homePage";

interface Speaker {
  id: number;
  event_id: number;
  speaker_id: number;
  ordering: number;
  status: number;
  speaker: {
    id: number;
    name: string;
    designation: string;
    image: string;
    linkedin_url: string;
  };
}

interface Event {
  id: number;
  title: string;
  speakers: Speaker[];
}

interface EventsResponse {
  status: boolean;
  data: {
    events: Event[];
  };
  message: string;
}

export const useEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);

        const response: EventsResponse = await getEvents();

        console.log(response);

        setEvents(response.data?.events ?? []);
      } catch (err) {
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
