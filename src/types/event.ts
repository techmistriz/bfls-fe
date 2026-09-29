import { Agenda } from "./agenda";
import { City } from "./city";
import { EventType } from "./eventType";
import type { Speaker } from "./speaker";

export interface Event {
  id: number;
  title: string;
  slug: string;
  year: string;
  image: string | null;
  city: City | null;
  venue: string | null;
  date: string;
  event_type: EventType | null;
  speakers: Speaker[];
  agendas: Agenda[];
  is_past_edition: number;
  summit_report: string | null;
}
