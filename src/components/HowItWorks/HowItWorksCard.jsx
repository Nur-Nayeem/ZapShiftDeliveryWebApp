import React from "react";

const HowItWorksCard = ({ imgg }) => {
  return (
    <div className="bg-white p-5 rounded-2xl">
      <img src={imgg} alt="Pickup" />
      <h3 className="text-xl font-semibold my-2">Booking Pick & Drop</h3>
      <p className="text-secondary">
        From personal packages to business shipments — we deliver on time, every
        time.
      </p>
    </div>
  );
};

export default HowItWorksCard;
