import React from "react";
import ServiceCards from "../../../Components/ServiceCards/ServiceCards";
import { FaMapLocationDot } from "react-icons/fa6";

const Work = () => {
  return (
    <div className="text-secondary">
      <h2 className="font-extrabold mt-10 text-4xl ">How it Works</h2>
      <div className="flex gap-4">
        <ServiceCards
          icon={<FaMapLocationDot className="text-3xl " />}
          title="Booking Pick & Drop"
          description="From personal packages to business shipments — we deliver on time, every time."
        ></ServiceCards>
        <ServiceCards
          icon={<FaMapLocationDot className="text-3xl " />}
          title="Cash On Delivery"
          description="From personal packages to business shipments — we deliver on time, every time."
        ></ServiceCards>
        <ServiceCards
          icon={<FaMapLocationDot className="text-3xl " />}
          title="Delivery Hub"
          description="From personal packages to business shipments — we deliver on time, every time."
        ></ServiceCards>
        <ServiceCards
          icon={<FaMapLocationDot className="text-3xl " />}
          title="Booking SME & Corporate"
          description="From personal packages to business shipments — we deliver on time, every time."
        ></ServiceCards>
      </div>
    </div>
  );
};

export default Work;
