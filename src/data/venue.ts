import type { VenueImage, VenueInfo } from "@/src/types";

export const venueImages: VenueImage[] = [
  { src: "/images/Taj-Santacruz-2.jpg", alt: "Taj Santacruz Venue" },
  { src: "/images/Taj-Santacruz-scaled.jpg", alt: "Taj-Santacruz-scaled" },
];

export const venueInfo: VenueInfo = {
  name: "Taj Santacruz, Mumbai",
  address: "Santacruz East, Mumbai, Maharashtra 400099",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Taj+Santacruz,+Mumbai&output=embed",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Taj+Santacruz,+Mumbai",
};
