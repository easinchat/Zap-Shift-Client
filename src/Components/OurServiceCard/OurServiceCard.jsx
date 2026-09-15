import React from "react";

const OurServiceCard = ({ img, title, description }) => {
  return (
    <div className="flex flex-col gap-3 rounded-3xl  p-5 bg-white shadow-xl mx-auto text-center text-secondary hover:bg-[#CAEB66]">
      <div className="mx-auto ">
        <img
          className="rounded-full p-3 bg-linear-to-b from-[#EEEDFC] "
          src={img}
          alt=""
        />
      </div>
      <h3 className="font-bold text-xl">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default OurServiceCard;
