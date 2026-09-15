import React from "react";
import { FaMapLocationDot } from "react-icons/fa6";

const ServiceCards = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col gap-3 rounded-xl  p-5 bg-#FFFFFF shadow-xl">
      <p> {icon}</p>
      <h3 className="font-bold text-xl">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCards;
