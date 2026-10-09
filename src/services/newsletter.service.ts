import type { NewsletterPayload } from "@/src/types/newsletter.type";
import api from "../network/axios";

export async function subscribeToNewsletter(payload: NewsletterPayload) {
  const response = await api.post("/newsletter-subscriber", payload);
  return response.data;
}
