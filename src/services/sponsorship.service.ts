import type { SponsorshipFormData } from "@/src/types";

/**
 * Submits the sponsorship interest form.
 *
 * TODO: Wire this up to your actual backend/API route or email service
 * (e.g. POST to /api/sponsorship, or a third-party form service).
 * Currently a stub — replace the body before production.
 */
export async function submitSponsorshipForm(
  data: SponsorshipFormData,
): Promise<void> {
  // Example of what this should become:
  // const res = await fetch("/api/sponsorship", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(data),
  // });
  // if (!res.ok) throw new Error("Failed to submit sponsorship form");

  console.log("Sponsorship form submitted:", data);
}
