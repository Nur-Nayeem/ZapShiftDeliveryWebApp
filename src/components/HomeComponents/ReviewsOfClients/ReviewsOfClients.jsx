import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import image from "../../../assets/customer-top.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const testimonials = [
  {
    name: "Awlad Hossin",
    role: "Senior Product Designer",
    text: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
  },
  {
    name: "Rasel Ahamed",
    role: "CTO",
    text: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
  },
  {
    name: "Nasir Uddin",
    role: "CEO",
    text: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
  },
  {
    name: "Nasir Uddin",
    role: "CEO",
    text: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
  },
  {
    name: "Nasir Uddin",
    role: "CEO",
    text: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
  },
  {
    name: "Nasir Uddin",
    role: "CEO",
    text: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
  },
  {
    name: "Nasir Uddin",
    role: "CEO",
    text: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
  },
];

export default function ReviewsOfClients() {
  return (
    <div className="w-full py-16">
      <div className="text-center max-w-3xl mx-auto mb-10 flex flex-col justify-center items-center w-full">
        <img src={image} alt="customer" className="w-max mb-5" />
        <h2 className="text-center text-3xl font-bold mb-4">
          What our customers are sayings
        </h2>
        <p>
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>
      <Swiper
        effect={"coverflow"}
        centeredSlides={true}
        grabCursor={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 50,
          depth: 140,
          modifier: 2.5,
          slideShadows: true,
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
        className="mySwiper pb-12"
      >
        {testimonials.map((item, i) => (
          <SwiperSlide
            key={i}
            className="
              bg-white rounded-2xl shadow-md p-8 w-[380px]
              transition-all duration-300
            "
          >
            <div className="text-gray-600 text-sm leading-relaxed mb-6">
              “{item.text}”
            </div>

            <div className="flex items-center gap-3 border-t border-dashed pt-2">
              <div className="w-10 h-10 rounded-full bg-gray-300">
                {/* profile image will be here  */}
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">{item.name}</h4>
                <p className="text-gray-500 text-sm">{item.role}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
