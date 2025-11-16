import React from "react";
import HeroSlider from "../../components/banner/carosal";
import HowItworks from "../../components/HowItWorks/HowItworks";
import OurServices from "../../components/OurServeice/OurServices";

const HomePage = () => {
  return (
    <div>
      <HeroSlider />
      <HowItworks />
      <OurServices />
    </div>
  );
};

export default HomePage;
