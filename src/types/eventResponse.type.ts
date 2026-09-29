import type { Event } from "./event.type";

export interface EventsResponse {
  status: boolean;
  data: {
    events: Event[];
  };
  message: string;
}
