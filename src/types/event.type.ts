import { Agenda } from "./agenda.type";
import { City } from "./city.type";
import { EventType } from "./eventType.type";
import type { Speaker } from "./speaker.type";

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
