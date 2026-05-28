import React from 'react'

export default function Footer() {
  return (
    // <!-- QuickEat Footer -->
<footer className="bg-[#0f172a] text-white pt-16 pb-8 px-6 md:px-12">
  <div className="max-w-7xl mx-auto">

    {/* <!-- Top Section --> */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 border-b border-white/10 pb-12">

       {/* Brand  */}
      <div className="lg:col-span-2">
        <div className="flex items-center gap-3 mb-5">
          {/* <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center text-2xl font-bold shadow-lg">
            Q
          </div> */}

          <div>
            <h2 className="text-2xl text-red-600 font-bold">QuickEat</h2>
            <p className="text-gray-400 text-sm">
              Fast delivery, fresh meals, anytime.
            </p>
          </div>
        </div>

        <p className="text-gray-400 leading-relaxed max-w-md mb-6">
          QuickEat helps you order delicious meals from your favorite restaurants with lightning-fast delivery and a seamless experience.
        </p>

        {/* <!-- App Buttons --> */}
        <div className="flex flex-wrap gap-4">
          <button className="bg-white text-black px-5 py-3 rounded-xl flex items-center gap-3 hover:scale-105 transition duration-300">
            <i className="fa-brands fa-apple text-2xl"></i>
            <div className="text-left">
              <p className="text-xs">Download on the</p>
              <h4 className="font-semibold text-sm">App Store</h4>
            </div>
          </button>

          <button className="bg-white text-black px-5 py-3 rounded-xl flex items-center gap-3 hover:scale-105 transition duration-300">
            <i className="fa-brands fa-google-play text-xl text-green-600"></i>
            <div className="text-left">
              <p className="text-xs">Get it on</p>
              <h4 className="font-semibold text-sm">Google Play</h4>
            </div>
          </button>
        </div>
      </div>

      {/* <!-- Company --> */}
      <div>
        <h3 className="text-lg font-semibold mb-5">Company</h3>

        <ul className="space-y-3 text-gray-400">
          <li><a href="#" className="hover:text-orange-400 transition">About Us</a></li>
          <li><a href="#" className="hover:text-orange-400 transition">Careers</a></li>
          <li><a href="#" className="hover:text-orange-400 transition">Blog</a></li>
          <li><a href="#" className="hover:text-orange-400 transition">Press</a></li>
        </ul>
      </div>

      {/* <!-- Support --> */}
      <div>
        <h3 className="text-lg font-semibold mb-5">Support</h3>

        <ul className="space-y-3 text-gray-400">
          <li><a href="#" className="hover:text-orange-400 transition">Help Center</a></li>
          <li><a href="#" className="hover:text-orange-400 transition">Safety</a></li>
          <li><a href="#" className="hover:text-orange-400 transition">Terms of Service</a></li>
          <li><a href="#" className="hover:text-orange-400 transition">Privacy Policy</a></li>
        </ul>
      </div>

      {/* <!-- Newsletter --> */}
      <div>
        <h3 className="text-lg font-semibold mb-5">
          Subscribe
        </h3>

        <p className="text-gray-400 text-sm mb-4">
          Get special offers and food updates directly in your inbox.
        </p>

        <form className="space-y-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 outline-none focus:border-orange-500 text-white placeholder:text-gray-400"
          />

          <button
            classNameName="w-full bg-orange-500 hover:bg-orange-600 py-3 rounded-xl font-semibold transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>

    {/* <!-- Bottom --> */}
    <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8">

      {/* <!-- Copyright --> */}
      <p className="text-gray-500 text-sm text-center md:text-left">
        © 2026 QuickEat. All rights reserved.
      </p>

      {/* <!-- Social Icons --> */}
      <div className="flex items-center gap-4">
        <a href="#" className="w-11 h-11 rounded-full bg-white/10 hover:bg-orange-500 flex items-center justify-center transition duration-300">
          <i className="fa-brands fa-facebook-f"></i>
        </a>

        <a href="#" className="w-11 h-11 rounded-full bg-white/10 hover:bg-orange-500 flex items-center justify-center transition duration-300">
          <i className="fa-brands fa-instagram"></i>
        </a>

        <a href="#" className="w-11 h-11 rounded-full bg-white/10 hover:bg-orange-500 flex items-center justify-center transition duration-300">
          <i className="fa-brands fa-x-twitter"></i>
        </a>

        <a href="#" className="w-11 h-11 rounded-full bg-white/10 hover:bg-orange-500 flex items-center justify-center transition duration-300">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
      </div>
    </div>

  </div>
</footer>
  )
}
