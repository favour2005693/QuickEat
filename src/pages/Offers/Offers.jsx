import { useState } from 'react'
import QrCodeGenerator from '../../components/QrCodeGenerator'


import {
  Search,
  Tag,
  Clock,
  Percent,
  Gift,
} from "lucide-react";

import { MdFastfood } from "react-icons/md";

import burger1 from "../../assets/images/burger1.jpg"
import pizza from "../../assets/images/pizza.jpg"
import freeDelivery from "../../assets/images/deliveryMan.jpeg"

const offers = [
  {
    id: 1,
    title: "50% Off Burgers",
    restaurant: "Burger Palace",
    discount: "50%",
    image:
     burger1,
  },
  {
    id: 2,
    title: "Buy 1 Get 1 Pizza",
    restaurant: "Pizza Hub",
    discount: "BOGO",
    image:
     pizza,
  },
  {
    id: 3,
    title: "Free Delivery",
    restaurant: "QuickEat Specials",
    discount: "FREE",
    image:
      freeDelivery,
  },
  {
    id: 4,
    title: "30% Off Chicken",
    restaurant: "Chicken Republic",
    discount: "30%",
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
  },
];
import bgImage from "../../assets/images/offerbackground.jpeg";


export default function OffersPage() {
const [openQrCodeModal, setOpenQrCodeModal] = useState(false);


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section
        className="relative
      bg-center bg-cover  text-white"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Amazing Food Deals <MdFastfood size={70} />
          </h1>

          <p className="text-lg md:text-xl max-w-2xl">
            Save more on your favorite meals with exclusive QuickEat offers and
            promo codes.
          </p>

          <div className="mt-8 bg-white rounded-xl flex items-center px-4 py-3 max-w-xl">
            <Search className="text-gray-400" />
            <input
              type="text"
              placeholder="Search offers..."
              className="w-full ml-3 outline-none text-black"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-5 text-center shadow">
            <Percent className="mx-auto text-black-500" />
            <p className="mt-2 font-semibold">Discounts</p>
          </div>

          <div className="bg-white rounded-xl p-5 text-center shadow">
            <Gift className="mx-auto text-black-500" />
            <p className="mt-2 font-semibold">Buy 1 Get 1</p>
          </div>

          <div className="bg-white rounded-xl p-5 text-center shadow">
            <Tag className="mx-auto text-black-500" />
            <p className="mt-2 font-semibold">Promo Codes</p>
          </div>

          <div className="bg-white rounded-xl p-5 text-center shadow">
            <Clock className="mx-auto text-black-500" />
            <p className="mt-2 font-semibold">Flash Deals</p>
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-red-500 rounded-3xl p-8 text-white flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold">Use Code: QUICK50</h2>
            <p className="mt-2">Get 50% OFF on your first order.</p>
          </div>

          <button className="mt-4 md:mt-0 bg-white cursor-pointer text-black px-6 py-3 rounded-xl font-semibold"
          onClick={() =>setOpenQrCodeModal(true)}>
            Claim Offer
          </button>
     
          {openQrCodeModal &&(<QrCodeGenerator />)}
        </div>
      </section>

      {/* Featured Offers */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">Featured Offers</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-5">
                <span className="bg-red-100 text-black-600 px-3 py-1 rounded-full text-sm">
                  {offer.discount}
                </span>

                <h3 className="font-bold text-xl mt-3">{offer.title}</h3>

                <p className="text-gray-500 mt-2">{offer.restaurant}</p>

                <button className="w-full mt-5 bg-red-500 text-white py-3 rounded-xl hover:bg-red-600">
                  Redeem Offer
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Limited Time */}
      <section className="bg-red-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Limited Time Deals ⏳</h2>

            <p className="text-gray-600 mt-3">
              Hurry before these offers expire.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="font-bold text-xl">Free Delivery Weekend</h3>
              <p className="mt-3 text-gray-500">
                Enjoy free delivery on all orders.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="font-bold text-xl">₦2,000 Cashback</h3>
              <p className="mt-3 text-gray-500">
                Cashback on orders above ₦10,000.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="font-bold text-xl">Student Special</h3>
              <p className="mt-3 text-gray-500">
                25% off for verified students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">Never Miss an Offer</h2>

          <p className="text-gray-500 mt-4">
            Subscribe and get notified about new deals.
          </p>

          <div className="mt-8 flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 border rounded-xl px-4 py-3"
            />

            <button className="bg-red-500 text-white px-8 py-3 rounded-xl">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}