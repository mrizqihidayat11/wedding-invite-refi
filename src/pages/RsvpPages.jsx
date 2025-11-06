import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import GiftSection from "../component/SendGhift";
import GuestMessages from "../component/GuestMessages";
import WeddingPage from "../component/Rspv";

function RsvpPages() {
  return (
    <div>
      <Header />
      <GuestMessages/>
      <WeddingPage/>
      <GiftSection />
      <Footer />
    </div>
  );
}

export default RsvpPages;
