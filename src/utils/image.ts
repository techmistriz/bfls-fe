const SPEAKERS_BASE_URL = process.env.NEXT_PUBLIC_SPEAKERS_BASE_URL ?? "";
const SPONSORS_BASE_URL = process.env.NEXT_PUBLIC_SPONSORS_BASE_URL ?? "";
const GALLERY_BASE_URL = process.env.NEXT_PUBLIC_GALLERY_BASE_URL ?? "";
const PASTEDITIONS_BASE_URL =
  process.env.NEXT_PUBLIC_PASTEDITIONS_BASE_URL ?? "";

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

export const getGalleryImageUrl = (image?: string | null) => {
  if (!image) {
    return "/images/gallery-placeholder.jpg";
  }

  return `${GALLERY_BASE_URL.replace(/\/+$/, "")}/${image.replace(/^\/+/, "")}`;
};

export const getPastEditionImageUrl = (image?: string | null) => {
  if (!image) {
    return "/images/10-scaled.jpg";
  }

  return `${PASTEDITIONS_BASE_URL.replace(/\/+$/, "")}/${image.replace(/^\/+/, "")}`;
};
