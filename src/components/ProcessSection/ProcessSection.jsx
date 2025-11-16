import React from "react";
import safeDelivery from "../../assets/safe-delivery.png";
const ProcessSection = () => {
  return (
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row  items-center gap-10 p-10 rounded-2xl bg-white">
        <figure className="border-r border-dashed sm:w-1/4">
          <img src={safeDelivery} alt="safeDelivery" className="" />
        </figure>
        <div className=" sm:w-3/4 ">
          <h4>Live Parcel Tracking</h4>
          <p>
            Stay updated in real-time with our live parcel tracking feature.
            From pick-up to delivery, monitor your shipment's journey and get
            instant status updates for complete peace of mind.
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-10 p-10 rounded-2xl bg-white">
        <figure className="border-r border-dashed sm:w-1/4">
          <img src={safeDelivery} alt="safeDelivery" className="" />
        </figure>
        <div className="sm:w-3/4">
          <h4>Live Parcel Tracking</h4>
          <p>
            Stay updated in real-time with our live parcel tracking feature.
            From pick-up to delivery, monitor your shipment's journey and get
            instant status updates for complete peace of mind.
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-10 p-10 rounded-2xl bg-white">
        <figure className="border-r border-dashed sm:w-1/4">
          <img src={safeDelivery} alt="safeDelivery" className="" />
        </figure>
        <div className="sm:w-3/4">
          <h4>Live Parcel Tracking</h4>
          <p>
            Stay updated in real-time with our live parcel tracking feature.
            From pick-up to delivery, monitor your shipment's journey and get
            instant status updates for complete peace of mind.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
