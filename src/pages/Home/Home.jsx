import React from "react";
import HeroSlider from "../../components/banner/carosal";
import HowItworks from "../../components/HowItWorks/HowItworks";
import OurServices from "../../components/OurServeice/OurServices";
import PartnerBrands from "../../components/PerterBrands/PartnerBrands";
import ProcessSection from "../../components/ProcessSection/ProcessSection";

const HomePage = () => {
  return (
    <div>
      <HeroSlider />
      <HowItworks />
      <OurServices />
      <PartnerBrands />
      <ProcessSection />
    </div>
  );
};

export default HomePage;
