import React from "react";
import HeroSlider from "../../components/HomeComponents/banner/carosal";
import HowItworks from "../../components/HomeComponents/HowItWorks/HowItworks";
import OurServices from "../../components/HomeComponents/OurServeice/OurServices";
import PartnerBrands from "../../components/HomeComponents/PerterBrands/PartnerBrands";
import ProcessSection from "../../components/HomeComponents/ProcessSection/ProcessSection";
import ReviewsOfClients from "../../components/HomeComponents/ReviewsOfClients/ReviewsOfClients";
import FrequentlyAskedqn from "../../components/HomeComponents/frequentlyAskedQna/FrequentlyAskedqn";

const HomePage = () => {
  return (
    <div>
      <HeroSlider />
      <HowItworks />
      <OurServices />
      <PartnerBrands />
      <ProcessSection />
      <ReviewsOfClients />
      <FrequentlyAskedqn />
    </div>
  );
};

export default HomePage;
