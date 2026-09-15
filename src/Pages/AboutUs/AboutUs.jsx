import React from "react";
const AboutUs = () => {
  return (
    <section className="py-16 px-5 bg-base-200">
      {" "}
      <div className="max-w-6xl mx-auto">
        {" "}
        {/* Header */}{" "}
        <div className="text-center max-w-2xl mx-auto mb-12">
          {" "}
          <p className="text-primary font-semibold uppercase tracking-wider">
            {" "}
            About Us{" "}
          </p>{" "}
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            {" "}
            We Move More Than Parcels{" "}
          </h2>{" "}
          <p className="mt-5 text-gray-600 leading-7">
            {" "}
            At ZapShift, we believe parcel delivery should be simple, fast, and
            reliable. From personal packages to business shipments, we make
            every delivery smooth from pickup to destination.{" "}
          </p>{" "}
        </div>{" "}
        {/* Cards */}{" "}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {" "}
          {/* Story */}{" "}
          <div className="bg-base-100 p-7 rounded-2xl shadow-sm">
            {" "}
            <h3 className="text-2xl font-bold mb-4">Our Story</h3>{" "}
            <p className="text-gray-600 leading-7">
              {" "}
              ZapShift started with a simple idea — to make parcel delivery
              fast, reliable, and stress-free. Today, we continue to improve our
              service with smart logistics and modern technology.{" "}
            </p>{" "}
          </div>{" "}
          {/* Mission */}{" "}
          <div className="bg-base-100 p-7 rounded-2xl shadow-sm">
            {" "}
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>{" "}
            <p className="text-gray-600 leading-7">
              {" "}
              Our mission is to make delivery faster, safer, and easier for
              everyone. We focus on reliable service, real-time tracking, and
              customer satisfaction.{" "}
            </p>{" "}
          </div>{" "}
          {/* Success */}{" "}
          <div className="bg-base-100 p-7 rounded-2xl shadow-sm">
            {" "}
            <h3 className="text-2xl font-bold mb-4">Our Success</h3>{" "}
            <p className="text-gray-600 leading-7">
              {" "}
              Our success is measured by the trust of our customers. Every
              parcel we deliver is another opportunity to provide a better,
              faster, and more dependable delivery experience.{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
        {/* Team Section */}{" "}
        <div className="mt-8 bg-base-100 rounded-2xl p-8 md:p-10 shadow-sm">
          {" "}
          <h3 className="text-3xl font-bold mb-4">Our Team</h3>{" "}
          <p className="text-gray-600 leading-7 max-w-4xl">
            {" "}
            Behind every successful delivery is a dedicated team. From riders
            and logistics professionals to customer support and technology
            experts, our team works together to make every ZapShift delivery
            successful.{" "}
          </p>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};
export default AboutUs;
