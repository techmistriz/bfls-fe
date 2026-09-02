import type { ReactNode } from "react";

export interface Speaker {
  image: string;
  name: string;
  designation: string;
}

export interface AgendaItem {
  time: string;
  title: ReactNode;
  speakers?: Speaker[];
  description?: ReactNode;
}

export interface AudienceCard {
  title: string;
  content: string[];
  icon: "people" | "legal" | "government";
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
  suffixColor: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface RegistrationPlan {
  title: string;
  price: string;
  badge?: string;
  badgePosition?: "top-center" | "top-right";
  bg: string;
  details: string[];
}

export interface Speaker {
  image: string;
  name: string;
  designation: string;
  linkedin?: string; // optional — Agenda speakers don't have this, Speakers section does
}

export interface Sponsor {
  category: string;
  image: string;
}

export interface SponsorshipFormData {
  name: string;
  email: string;
  contact: string;
}

export interface NewsletterSubscription {
  email: string;
}

export interface VenueImage {
  src: string;
  alt: string;
}

export interface VenueInfo {
  name: string;
  address: string;
  mapsEmbedUrl: string;
  directionsUrl: string;
}

export interface Breadcrumb {
  label: string;
  href?: string; // omit for the current/active page
}

export type { FormFieldProps, SelectFieldProps, SelectOption } from "./form";
