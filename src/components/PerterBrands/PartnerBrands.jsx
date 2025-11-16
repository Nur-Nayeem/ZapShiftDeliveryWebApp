import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import amazon from "../../assets/brands/amazon.png";
import amazon_vector from "../../assets/brands/amazon_vector.png";
import casio from "../../assets/brands/casio.png";
import moonstar from "../../assets/brands/moonstar.png";
import randstad from "../../assets/brands/randstad.png";
import star from "../../assets/brands/star.png";
import start_people from "../../assets/brands/start_people.png";
import { Autoplay } from "swiper/modules";
const brandLogos = [
  amazon,
  amazon_vector,
  casio,
  moonstar,
  randstad,
  star,
  start_people,
];
const PartnerBrands = () => {
  return (
    <div className="my-20">
      <h2 className="text-center text-3xl font-bold mb-10">
        We've helped thousands of sales teams
      </h2>
      <div>
        <Swiper
          loop={true}
          slidesPerView={4}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
        >
          {brandLogos.map((logo, index) => (
            <SwiperSlide key={index}>
              <img src={logo} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PartnerBrands;
