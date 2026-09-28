export interface AgendaSpeaker {
  id: number;
  event_agenda_id: number;
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

export interface Agenda {
  id: number;
  event_id: number;
  agenda_title: string;
  agenda_time: string;
  agenda_short_description: string | null;
  agenda_description: string | null;
  status: number;
  agenda_speakers: AgendaSpeaker[];
}
