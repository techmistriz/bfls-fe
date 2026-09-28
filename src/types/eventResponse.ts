import type { Event } from "./event";

export interface EventsResponse {
  status: boolean;
  data: {
    events: Event[];
  };
  message: string;
}
