import React from "react";
import Banner from "../Banner/Banner";
// import ServiceCards from "../../../Components/ServiceCards/ServiceCards";
import Work from "../WorksSection/Work";
import OurService from "../OurService/OurService";
import Brands from "../Brands/Brands";
import Reviews from "../Reviews/Reviews";

const reviewsPromise = fetch("/reviews.json").then((res) => res.json());

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <section className="my-20">
        <Work></Work>
      </section>

      <OurService></OurService>

      <section className="my-10">
        <Brands></Brands>
      </section>
      <section>
        <Reviews reviewsPromise={reviewsPromise}></Reviews>
      </section>
    </div>
  );
};

export default Home;
