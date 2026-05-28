// HeroSlider.jsx

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
  },
];

export default function HeroSlider() {
  return (
    <div className="w-[450px] ">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        className="overflow-hidden"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="w-full h-[250px] md:h-[500px]">
              <img
                src={slide.image}
                alt="Food"
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}