import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa";
import { FaPizzaSlice, FaHamburger, FaDrumstickBite } from "react-icons/fa";
import { MdOutlineLocalDrink } from "react-icons/md";
import { GiCupcake, GiFruitBowl, GiNoodles } from "react-icons/gi";

const categories = [
  { name: "Pizza", icon: <FaPizzaSlice /> },
  { name: "Burger", icon: <FaHamburger /> },
  { name: "Drinks", icon: <MdOutlineLocalDrink /> },
  { name: "Dessert", icon: <GiCupcake /> },
  { name: "Chicken", icon: <FaDrumstickBite /> },
  { name: "Salads", icon: <GiFruitBowl /> },
  { name: "Pasta", icon: <GiNoodles /> },
];

function CategoriesSlider() {
  return (
    <div className="py-8 px-5">
      <div className=" flex items-center mb-4 justify-between">
        <div className="">
          <h2 className=" font-bold text-2xl">Popular Categories</h2>
        </div>
        <div className="flex items-center">
          <span>see more</span>
          {/* <FaArrowRight size={20} /> */}
        </div>
      </div>
      <Swiper
        modules={[Navigation]}
        navigation={false}
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 7,
          },
        }}
      >
        {categories.map((item) => (
          <SwiperSlide key={item.name}>
            <div className="flex flex-col items-center border border-red-500 justify-center p-4 bg-white rounded-xl shadow-md">
              <span className="text-4xl mb-2">{item.icon}</span>
              <p>{item.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CategoriesSlider;
