const SPEAKERS_BASE_URL = process.env.NEXT_PUBLIC_SPEAKERS_BASE_URL ?? "";
const SPONSORS_BASE_URL = process.env.NEXT_PUBLIC_SPONSORS_BASE_URL ?? "";

export const getSpeakerImageUrl = (image?: string | null) => {
  if (!image) {
    return "/images/speaker-placeholder.jpg";
  }

  return `${SPEAKERS_BASE_URL.replace(/\/+$/, "")}/${image.replace(/^\/+/, "")}`;
};

export const getSponsorImageUrl = (image?: string | null) => {
  if (!image) {
    return "/images/sponsor-placeholder.jpg";
  }

  return `${SPONSORS_BASE_URL.replace(/\/+$/, "")}/${image.replace(/^\/+/, "")}`;
};
