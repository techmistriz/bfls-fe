"use client";

import { useEffect } from "react";

import Banner from "@/src/components/sections/Banner";
import AboutSummit from "@/src/components/sections/AboutSummit";
import Agenda from "@/src/components/sections/Agenda";
import Registration from "../components/sections/Registration";
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

import { useEvents } from "@/src/hooks/useEvents";
import { scrollToSection } from "@/src/utils/sectionNavigation";

export default function Home() {
  const { events } = useEvents();
  const eventId = events[0]?.id;

  useEffect(() => {
    let observer: MutationObserver | null = null;
    let quietTimer: ReturnType<typeof setTimeout> | undefined;
    let maxTimer: ReturnType<typeof setTimeout> | undefined;
    let frame = 0;
    let lastHash = "";

    const cleanup = () => {
      observer?.disconnect();
      observer = null;

      if (quietTimer) clearTimeout(quietTimer);
      if (maxTimer) clearTimeout(maxTimer);

      cancelAnimationFrame(frame);
    };

    const correctScroll = () => {
      const hash = window.location.hash;

      if (!hash || window.location.pathname !== "/") {
        cleanup();
        return;
      }

      lastHash = hash;
      cleanup();

      const targetId = decodeURIComponent(hash.slice(1));

      const scroll = () => {
        if (window.location.hash !== lastHash) return;

        const target = document.getElementById(targetId);

        if (!target) return;

        scrollToSection(lastHash);
      };

      // Wait until the browser has rendered the target.
      frame = requestAnimationFrame(() => {
        frame = requestAnimationFrame(() => {
          scroll();

          // Reposition when asynchronously loaded sections
          // change the page layout.
          observer = new MutationObserver(() => {
            if (window.location.hash !== lastHash) {
              cleanup();
              return;
            }

            cancelAnimationFrame(frame);

            frame = requestAnimationFrame(() => {
              frame = requestAnimationFrame(scroll);
            });

            if (quietTimer) clearTimeout(quietTimer);

            quietTimer = setTimeout(cleanup, 1200);
          });

          observer.observe(document.body, {
            childList: true,
            subtree: true,
            characterData: true,
          });

          maxTimer = setTimeout(cleanup, 15000);
          quietTimer = setTimeout(cleanup, 1200);
        });
      });
    };

    correctScroll();

    window.addEventListener("hashchange", correctScroll);

    return () => {
      cleanup();
      window.removeEventListener("hashchange", correctScroll);
    };
  }, []);

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
