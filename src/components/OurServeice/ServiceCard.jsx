import React from "react";
import service from "../../assets/service.png";
const ServiceCard = () => {
  return (
    <div className="px-3.5 py-5 bg-white rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:bg-primary">
      <figure className="bg-linear-to-b from-[#EEEDFC] to-[#EEEDFC] w-max rounded-full flex items-center justify-center p-5">
        <img src={service} alt="Service" />
      </figure>
      <h3 className="my-5 text-xl font-medium">Express & Standard Delivery</h3>
      <p className="text-secondary">
        We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet,
        Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6
        hours from pick-up to drop-off.
      </p>
    </div>
  );
};

export default ServiceCard;
