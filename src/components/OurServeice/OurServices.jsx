import React from "react";
import ServiceCard from "./ServiceCard";

const OurServices = () => {
  return (
    <div className="bg-[#03373d] p-10 rounded-2xl text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-white text-3xl font-bold">Our Services</h2>
        <p className="text-white/80 my-5">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
};

export default OurServices;
