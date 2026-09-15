import React from "react";
import OurServiceCard from "../../../Components/OurServiceCard/OurServiceCard";
import serviceImg1 from "../../../assets/service.png";

const OurService = () => {
  return (
    <div className="w-full h-auto bg-secondary p-10  rounded-2xl">
      <div className="text-center ">
        <h2 className="text-white font-extrabold text-4xl mb-5">
          Our Services
        </h2>
        <p className="text-[#DADADA]">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to <br></br> business shipments — we
          deliver on time, every time.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-5 p-20   ">
        <OurServiceCard
          img={serviceImg1}
          title={"Express  & Standard  Delivery"}
          description={
            "We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi.? Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off."
          }
        ></OurServiceCard>
        <OurServiceCard
          img={serviceImg1}
          title={"Express  & Standard  Delivery"}
          description={
            "We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi.? Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off."
          }
        ></OurServiceCard>
        <OurServiceCard
          img={serviceImg1}
          title={"Express  & Standard  Delivery"}
          description={
            "We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi.? Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off."
          }
        ></OurServiceCard>
        <OurServiceCard
          img={serviceImg1}
          title={"Express  & Standard  Delivery"}
          description={
            "We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi.? Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off."
          }
        ></OurServiceCard>
        <OurServiceCard
          img={serviceImg1}
          title={"Express  & Standard  Delivery"}
          description={
            "We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi.? Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off."
          }
        ></OurServiceCard>
        <OurServiceCard
          img={serviceImg1}
          title={"Express  & Standard  Delivery"}
          description={
            "We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi.? Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off."
          }
        ></OurServiceCard>
      </div>
    </div>
  );
};

export default OurService;
