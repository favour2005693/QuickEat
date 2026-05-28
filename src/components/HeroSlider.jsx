// HeroSlider.jsx
// IMPORT SLIDE IMAGES  
import slideImage1 from '../assets/images/d5e18022e63641a90ddad2d056cdf252.jpg';
import slideImage2 from '../assets/images/e4453bf0971059dc5bbeca37665bd78d.jpg';
import slideImage3 from '../assets/images/f5071c267a9ab9b95cc5e5cd0e174fc8.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    image: slideImage1,
  },
  {
    id: 2,
    image:
     slideImage2,
  },
  {
    id: 3,
    image:
     slideImage3,
  },
];

export default function HeroSlider() {
  return (
    <div className="w-[450px]  ">
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
            <div className="w-full h-[250px] md:h-[300px]">
              <img
                src={slide.image}
                alt="Food"
                className="w-full h-full object-cover "
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}