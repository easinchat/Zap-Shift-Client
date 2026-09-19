import React from "react";
import { FaBoxOpen, FaTruckFast, FaHeadset } from "react-icons/fa6";

const features = [
  {
    icon: <FaTruckFast />,
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
  },
  {
    icon: <FaBoxOpen />,
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="rounded-2xl    bg-[#f5f5f5] p-3 md:p-5">
        {features.map((feature, index) => (
          <div
            key={index}
            className="mb-3 flex items-center rounded-xl bg-white px-5 py-5 last:mb-0 md:px-8"
          >
            {/* Icon */}
            <div className="flex w-24 shrink-0 items-center justify-center text-5xl text-[#067A87] md:w-28 md:text-6xl">
              {feature.icon}
            </div>

            {/* Dotted Divider */}
            <div className="mx-5 h-16 border-l border-dotted border-[#067A87] md:mx-8" />

            {/* Content */}
            <div>
              <h3 className="mb-2 text-sm font-bold text-[#067A87] md:text-base">
                {feature.title}
              </h3>

              <p className="max-w-3xl text-[11px] leading-relaxed text-gray-500 md:text-xs">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
