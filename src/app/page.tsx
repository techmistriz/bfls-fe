"use client";

import Banner from "@/src/components/sections/Banner";
import AboutSummit from "@/src/components/sections/AboutSummit";
import Agenda from "@/src/components/sections/Agenda";
import AudienceStats from "@/src/components/sections/AudienceStats";
import Speakers from "@/src/components/sections/Speakers";
import ContactCTA from "@/src/components/sections/ContactCTA";
import Sponsors from "@/src/components/sections/Sponsors";
import SponsorshipForm from "@/src/components/sections/ShowCaseForm";
import AudienceProfile from "@/src/components/sections/AudienceProfile";
import GallerySection from "@/src/components/sections/GallerySection";
import VenueSection from "@/src/components/sections/VenueSection";
import VenueGallery from "@/src/components/sections/VenueGallery";
import SubscribeSection from "@/src/components/sections/SubscribeSection";
import Registration from "../components/sections/Registration";
import { useEvents } from "@/src/hooks/useEvents";

export default function Home() {
  const { events } = useEvents();

  const eventId = events[0]?.id;

  return (
    <>
      <Banner />
      <AboutSummit />
      <Agenda />
      <Registration />
      <AudienceStats />
      <Speakers />
      <ContactCTA />
      <Sponsors />
      <SponsorshipForm />
      <AudienceProfile />
      <GallerySection eventId={eventId} />
      <VenueSection />
      <VenueGallery />
      <SubscribeSection />
    </>
  );
}
