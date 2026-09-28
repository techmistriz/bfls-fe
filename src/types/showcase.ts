export interface ShowcaseFormValues {
  name: string;
  email: string;
  contact: string;
}

export interface ShowcasePayload {
  event_type_id: string;
  name: string;
  email: string;
  phone: string;
  captcha: string;
}

export interface ShowcaseResponse {
  status: boolean;
  message?: string;
  data?: unknown;
}
