const SPEAKERS_BASE_URL = process.env.NEXT_PUBLIC_SPEAKERS_BASE_URL ?? "";

export const getSpeakerImageUrl = (image?: string | null) => {
  if (!image) {
    return "/images/speaker-placeholder.jpg";
  }

  return `${SPEAKERS_BASE_URL.replace(/\/+$/, "")}/${image.replace(/^\/+/, "")}`;
};
