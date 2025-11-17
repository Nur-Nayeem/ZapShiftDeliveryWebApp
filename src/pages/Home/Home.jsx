import React from "react";
import HeroSlider from "../../components/banner/carosal";
import HowItworks from "../../components/HowItWorks/HowItworks";
import OurServices from "../../components/OurServeice/OurServices";
import PartnerBrands from "../../components/PerterBrands/PartnerBrands";
import ProcessSection from "../../components/ProcessSection/ProcessSection";
import ReviewsOfClients from "../../components/ReviewsOfClients/ReviewsOfClients";
import FrequentlyAskedqn from "../../components/frequentlyAskedQna/FrequentlyAskedqn";

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
