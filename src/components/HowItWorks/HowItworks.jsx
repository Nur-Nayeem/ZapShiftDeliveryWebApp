import React from "react";
import pickup from "../../assets/bookingIcon.png";
import HowItWorksCard from "./HowItWorksCard";

const HowItworks = () => {
  return (
    <div className="my-10">
      <h2 className="text-2xl font-bold my-5">How it Works</h2>
      <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 xl:grid-cols-4 justify-center gap-5">
        <HowItWorksCard imgg={pickup} />
        <HowItWorksCard imgg={pickup} />
        <HowItWorksCard imgg={pickup} />
        <HowItWorksCard imgg={pickup} />
      </div>
    </div>
  );
};

export default HowItworks;
