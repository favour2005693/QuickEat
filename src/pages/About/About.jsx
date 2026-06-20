import {
  FaUtensils,
  FaShippingFast,
  FaSmile,
  FaUsers,
} from "react-icons/fa";

import img from "../../assets/images/ChatGPT Image May 11, 2026, 04_06_17 PM.png"
import JohnDoe from "../../assets/images/John Doe.jpg"
import SarahSmith from "../../assets/images/Sarah Smith.jpg"
import MichaelJohnson from "../../assets/images/Michael Johnson.jpg"

import AboutBackgroundImage from "../../assets/images/AboutBackgroundImage.png"
const About = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        className="relative h-100 bg-center bg-cover text-white py-20 px-6"
        style={{ backgroundImage: `url(${AboutBackgroundImage})`, }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            About QuickEat
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl">
            Delivering your favorite meals quickly and fresh right to your
            doorstep.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src={img}
              alt="Food"
              className="h-180 object-cover rounded-2xl shadow-lg w-full"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>

            <p className="text-gray-600 leading-8">
              QuickEat was created to make food ordering simple, fast, and
              enjoyable. We connect customers with top restaurants, allowing
              them to discover delicious meals and get them delivered in
              minutes.
            </p>

            <p className="text-gray-600 leading-8 mt-4">
              Whether you're craving burgers, pizza, local dishes, or desserts,
              QuickEat helps you satisfy your hunger without stress.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl font-bold mb-12">
            Why Choose QuickEat?
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow">
              <FaShippingFast className="text-black-500 text-4xl mb-4" />
              <h3 className="font-semibold text-xl mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Get your meals delivered quickly and safely.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <FaUtensils className="text-black-500 text-4xl mb-4" />
              <h3 className="font-semibold text-xl mb-2">Quality Food</h3>
              <p className="text-gray-600">
                Fresh and delicious meals from trusted restaurants.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <FaSmile className="text-black-500 text-4xl mb-4" />
              <h3 className="font-semibold text-xl mb-2">Happy Customers</h3>
              <p className="text-gray-600">
                Thousands of satisfied customers trust QuickEat.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <FaUsers className="text-black-500 text-4xl mb-4" />
              <h3 className="font-semibold text-xl mb-2">Great Support</h3>
              <p className="text-gray-600">
                Our support team is available whenever you need help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <h3 className="text-4xl font-bold text-black-500">50K+</h3>
              <p className="text-gray-600 mt-2">Orders Delivered</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-black-500">100+</h3>
              <p className="text-gray-600 mt-2">Restaurant Partners</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-black-500">25K+</h3>
              <p className="text-gray-600 mt-2">Happy Customers</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-black-500">24/7</h3>
              <p className="text-gray-600 mt-2">Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl font-bold mb-12">
            Meet Our Team
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow overflow-hidden">
              <img
                src={JohnDoe}
                alt="Team"
                className="h-72 w-full object-cover"
              />

              <div className="p-5 text-center">
                <h3 className="font-bold text-xl">John Doe</h3>
                <p className="text-gray-500">Founder & CEO</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow overflow-hidden">
              <img
                src={SarahSmith}
                alt="Team"
                className="h-72 w-full object-cover"
              />

              <div className="p-5 text-center">
                <h3 className="font-bold text-xl">Sarah Smith</h3>
                <p className="text-gray-500">Operations Manager</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow overflow-hidden">
              <img
                src={MichaelJohnson}
                alt="Team"
                className="h-72 w-full object-cover"
              />

              <div className="p-5 text-center">
                <h3 className="font-bold text-xl">Michael Johnson</h3>
                <p className="text-gray-500">Marketing Lead</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;