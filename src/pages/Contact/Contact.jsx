import {
 FaFacebookF,
 FaInstagram,
 FaTwitter,
 FaClock,
 FaMapMarkerAlt,
 FaEnvelope,
 FaPhoneAlt,
} from "react-icons/fa";

import bgImage from "../../assets/images/24ffcfb1e082b236f6898007351d7f76.jpg"

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className=" relative
      bg-center bg-cover text-white py-20"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Contact QuickEat
          </h1>

          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            We'd love to hear from you. Reach out to us for support,
            partnerships, or any questions.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
            <FaPhoneAlt size={40} className="mx-auto text-red-500 mb-4" />

            <h3 className="font-semibold text-xl mb-2">Phone</h3>

            <p className="text-gray-600">+234 800 123 4567</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
            <FaEnvelope size={40} className="mx-auto text-red-500 mb-4" />

            <h3 className="font-semibold text-xl mb-2">Email</h3>

            <p className="text-gray-600">support@quickeat.com</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
            <FaMapMarkerAlt size={40} className="mx-auto text-red-500 mb-4" />

            <h3 className="font-semibold text-xl mb-2">Address</h3>

            <p className="text-gray-600">123 QuickEat Street, Lagos, Nigeria</p>
          </div>
        </div>
      </section>

      {/* Form + Business Hours */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>

            <form className="space-y-5">
              <div>
                <label className="block mb-2 font-medium">Full Name</label>

                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full border rounded-xl p-3 outline-none focus:border-red-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Email Address</label>

                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full border rounded-xl p-3 outline-none focus:border-red-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Subject</label>

                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full border rounded-xl p-3 outline-none focus:border-red-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Message</label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full border rounded-xl p-3 outline-none focus:border-red-500"
                />
              </div>

              <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold transition">
                Send Message
              </button>
            </form>
          </div>

          {/* Business Hours */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <FaClock className="text-red-500" />

                <h2 className="text-2xl font-bold">Opening Hours</h2>
              </div>

              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>8:00 AM - 10:00 PM</span>
                </div>

                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 11:00 PM</span>
                </div>

                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>10:00 AM - 9:00 PM</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-bold mb-5">Follow Us</h2>

              <div className="flex gap-4">
                <button className="bg-red-100 p-3 rounded-full hover:bg-red-500 hover:text-white transition">
                  <FaFacebookF />
                </button>

                <button className="bg-red-100 p-3 rounded-full hover:bg-red-500 hover:text-white transition">
                  <FaInstagram />
                </button>

                <button className="bg-red-100 p-3 rounded-full hover:bg-red-500 hover:text-white transition">
                  <FaTwitter />
                </button>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white p-3 rounded-2xl shadow-sm">
              <iframe
                title="location"
                src="https://maps.google.com/maps?q=Lagos&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-72 rounded-xl"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
