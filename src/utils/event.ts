import type { Event } from "@/src/types/event.type";

export const getEventLocation = (event: Event): string => {
  return [event.venue, event.city?.name]
    .filter(Boolean)
    .join(", ")
    .toUpperCase();
};

export const getEventTitle = (event: Event): string => {
  return event.title || "Banking & Finance Legal Summit";
};

export const getEventDate = (event: Event): string => {
  return event.date || "";
};
