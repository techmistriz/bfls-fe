export interface SpeakerDetails {
  id: number;
  name: string;
  designation: string;
  image: string;
  linkedin_url: string;
}

export interface Speaker {
  id: number;
  event_id: number;
  speaker_id: number;
  ordering: number;
  status: number;
  speaker: SpeakerDetails;
}
