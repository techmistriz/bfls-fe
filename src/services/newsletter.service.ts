import type { NewsletterSubscription } from "@/src/types";

/**
 * Subscribes an email to the newsletter.
 *
 * TODO: Wire this up to your actual backend/API route or email marketing
 * service (e.g. Mailchimp, Brevo, a custom /api/subscribe route).
 * Currently a stub — replace the body before production.
 */
export async function subscribeToNewsletter(
  data: NewsletterSubscription,
): Promise<void> {
  // Example of what this should become:
  // const res = await fetch("/api/subscribe", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(data),
  // });
  // if (!res.ok) throw new Error("Failed to subscribe");

  console.log("Newsletter subscription:", data);
}
