import Banner from "./sections/Banner";
import AboutSummit from "./sections/AboutSummit";
import Agenda from "./sections/Agenda";
import AudienceStats from "./sections/AudienceStats";
import Speakers from "./sections/Speakers";
import ContactCTA from "./sections/ContactCTA";
import Sponsors from "./sections/Sponsors";
import SponsorshipForm from "./sections/SponsorshipForm";
import AudienceProfile from "./sections/AudienceProfile";
import GallerySection from "./sections/GallerySection";
import VenueSection from "./sections/VenueSection";
import VenueGallery from "./sections/VenueGallery";
import SubscribeSection from "./sections/SubscribeSection";


export default function Home() {
  return (
    <>
      <Banner />

      <AboutSummit />

       <Agenda />

       <AudienceStats />

       <Speakers />

       <ContactCTA />

       <Sponsors />

       <SponsorshipForm />

       <AudienceProfile />

       <GallerySection />

       <VenueSection />

       <VenueGallery />

       <SubscribeSection />

      {/* Baaki homepage sections yahan aayenge */}
    </>
  );
}