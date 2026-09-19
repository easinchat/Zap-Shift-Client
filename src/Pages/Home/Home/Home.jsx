import React from "react";
import Banner from "../Banner/Banner";
// import ServiceCards from "../../../Components/ServiceCards/ServiceCards";
import Work from "../WorksSection/Work";
import OurService from "../OurService/OurService";
import Brands from "../Brands/Brands";
import Reviews from "../Reviews/Reviews";
import Faq from "../FAQ/Faq";
import WhyChooseUs from "../whyChooseUs/WhyChooseUs";

const reviewsPromise = fetch("/reviews.json").then((res) => res.json());

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <section className="my-20">
        <Work></Work>
      </section>

      <OurService></OurService>

      <section className="my-15">
        <Brands></Brands>
      </section>

      <section className="my-15">
        <WhyChooseUs></WhyChooseUs>
      </section>
      <section className="my-15">
        <Reviews reviewsPromise={reviewsPromise}></Reviews>
      </section>
      <section className="my-15">
        <Faq></Faq>
      </section>
    </div>
  );
};

export default Home;
