import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import img1 from "../../assets/banner/banner1.png";
import img2 from "../../assets/banner/banner2.png";
import img3 from "../../assets/banner/banner3.png";
import { Link } from "react-router";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
export default function HeroSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-[650px] rounded-2xl"
      >
        <SwiperSlide className="relative overflow-hidden">
          <div className="absolute bottom-32 left-2.5 sm:left-[104px] flex items-center justify-start gap-2.5">
            <Link to={"/"} className="btn rounded-full bg-primary">
              Track Your Parcel
            </Link>
            <Link className="">
              <BsArrowUpRightCircleFill className="size-8" />
            </Link>
            <Link to={"/"} className="btn rounded-lg">
              Be A Rider
            </Link>
          </div>
          <img
            className="h-full w-full object-cover object-center"
            src={img1}
            alt={`slide-1`}
          />
        </SwiperSlide>
        <SwiperSlide className="relative overflow-hidden">
          <div className="absolute bottom-32 left-2.5 sm:left-[104px] flex items-center justify-start gap-2.5">
            <Link to={"/"} className="btn rounded-full bg-primary">
              Track Your Parcel
            </Link>
            <Link className="">
              <BsArrowUpRightCircleFill className="size-8" />
            </Link>
            <Link to={"/"} className="btn rounded-lg">
              Be A Rider
            </Link>
          </div>
          <img
            className="h-full w-full object-cover object-center"
            src={img2}
            alt={`slide-1`}
          />
        </SwiperSlide>
        <SwiperSlide className="relative overflow-hidden h-full">
          <div className="absolute bottom-32 left-2.5 sm:left-[104px] flex items-center justify-start gap-2.5">
            <Link to={"/"} className="btn rounded-full bg-primary">
              Track Your Parcel
            </Link>
            <Link className="">
              <BsArrowUpRightCircleFill className="size-8" />
            </Link>
            <Link to={"/"} className="btn rounded-lg">
              Be A Rider
            </Link>
          </div>
          <img
            className="h-full w-full object-cover object-center"
            src={img3}
            alt={`slide-1`}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
