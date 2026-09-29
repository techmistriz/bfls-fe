import type { Event } from "./event.type";

export interface PastEditionYear {
  year: number;
  events: Event[];
}

export interface PastEditionResponse {
  status: boolean;
  data: {
    events: PastEditionYear[];
    margedSponsors: string;
  };
  meta: unknown[];
  message: string;
}
