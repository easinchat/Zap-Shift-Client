import React from "react";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import amazon from "../../../assets/brands/amazon.png";
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import start_people from "../../../assets/brands/start_people.png";
import amazon_vector from "../../../assets/brands/amazon_vector.png";
import { Autoplay } from "swiper/modules";
const brandLogos = [
  amazon,
  casio,
  moonstar,
  randstad,
  star,
  start_people,
  amazon_vector,
];

const Brands = () => {
  return (
    <Swiper
      slidesPerView={3}
      centeredSlides={true}
      spaceBetween={30}
      loop={true}
      grabCursor={true}
      modules={[Autoplay]}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
    >
      {brandLogos.map((logo, index) => (
        <SwiperSlide key={index}>
          <img src={logo} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Brands;
