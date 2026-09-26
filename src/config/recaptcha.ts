export const RECAPTCHA_SITE_KEYS = {
  v2: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY_V2 || "",
  v3: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY_V3 || "",
} as const;
