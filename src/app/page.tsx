import Banner from "./home/Banner";
import AboutSummit from "./home/AboutSummit";
import Agenda from "./home/Agenda";
import AudienceStats from "./home/AudienceStats";
import Speakers from "./home/Speakers";
import ContactCTA from "./home/ContactCTA";
import Sponsors from "./home/Sponsors";
import SponsorshipForm from "./home/SponsorshipForm";
import AudienceProfile from "./home/AudienceProfile";
import GallerySection from "./home/GallerySection";
import VenueSection from "./home/VenueSection";
import VenueGallery from "./home/VenueGallery";
import SubscribeSection from "../components/ReuseSection/SubscribeSection";
import Registration from "./home/Registration";

export default function Home() {
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

       <GallerySection />

       <VenueSection />

       <VenueGallery />

       <SubscribeSection />

      {/* Baaki homepage sections yahan aayenge */}
    </>
  );
}