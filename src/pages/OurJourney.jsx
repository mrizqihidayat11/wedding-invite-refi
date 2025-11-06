import React from "react";
import WeddingInvitation from "../component/Event";
import Story from "../component/Story";
import Header from "../component/Header";
import Galerry from "../component/Galerry";
import GiftSection from "../component/SendGhift";
import Location from "../component/Location";
import Footer from "../component/Footer";
import Quotes from "../component/Quotes";
import WeddingPage from "../component/Rspv";
import GuestMessages from "../component/GuestMessages";

function OurJourney() {
  return (
    <div>
      <Header />
      <WeddingInvitation />
      <Story />
      <Quotes />
      <Galerry />
      <GuestMessages />
      <WeddingPage />
      <GiftSection />
      <Location />
      <Footer />
    </div>
  );
}

export default OurJourney;
