import React from "react";
import Banner from "../../Components/MultipleComponents/Banner";
import AboutUs from "../../Components/MultipleComponents/AboutUs";
import WhyChoose from "../../Components/MultipleComponents/WhyChoose";
import OurProducts from "../../Components/MultipleComponents/OurProducts";
import Achivement from "../../Components/MultipleComponents/Achivement";
import Review from "../../Components/MultipleComponents/Review";
import ShopNow from "../../Components/MultipleComponents/ShopNow";
import OurTeam from "../../Components/MultipleComponents/OurTeam";
import ContactUs from "../../Components/MultipleComponents/ContactUs";

const Home = () => {
  return (
    <>
      <div>
        <Banner />
        <AboutUs />
        <WhyChoose />
        <OurProducts />
        <Achivement />
        <Review />
        <ShopNow />
        <OurTeam />
        <ContactUs />
      </div>
    </>
  );
};

export default Home;
