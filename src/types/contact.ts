export interface ContactPayload {
  event_type_id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  captcha: string;
}

export interface ContactResponse {
  status: boolean;
  message?: string;
  data?: unknown;
}
