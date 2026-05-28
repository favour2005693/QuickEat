import HeroSlider from "./HeroSlider";

function HeroSection() {
  return (
    <section className="flex flex-wrap justify-between mt-10 mb-10">
      <div className="px-4">
        <h1 className="font-bold text-6xl">
          Delicious Foods, <br />
          Deliverd Fast
        </h1>
        <p className="text-1xl">
          Order your favourite meal top resturant near you.
        </p>
        <div className="mt-2">
          <input
            type="text"
            placeholder="Search..."
            className="w-[250px] border rounded-tl-lg rounded-bl-lg px-2 py-1.5 outline-none  transition"
          />
          <button
            className="bg-red-500 hover:bg-red-600 border border-gray-300 text-white cursor-pointer px-5 py-1.5 rounded-tr-lg 
            rounded-br-lg 
             font-medium transition duration-300"
          >
            Search
          </button>
        </div>
      </div>
      <div>
        <HeroSlider />
      </div>
      <div></div>
    </section>
  );
}

export default HeroSection;
