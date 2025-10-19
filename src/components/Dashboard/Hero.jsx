import React from 'react';

const Hero = () => {
  return (
    <div className="flex justify-between items-center px-10 py-16 ">

      {/* Left Section */}
      <div className="w-1/2 space-y-6">
        <h1 className="text-xl   text-gray-500 border rounded-full w-50 text-center">Modern Furniture</h1>
        <h2 className="text-4xl text-gray-800">Discover our trendy furniture for you</h2>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, provident! 
          Accusamus aliquam iusto dolores minima ipsam ut nulla ea quod?
        </p>

        {/* Buttons and Small Images */}
        <div className="flex justify-between items-center mt-6">

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="bg-black text-white py-2 px-4 rounded-full cursor-pointer transition">
              Shop Now
            </button>
            <button className="bg-gray-200 text-black py-2 px-4 rounded-full cursor-pointer transition">
              Learn More
            </button>
          </div>

          {/* Small Thumbnail Images */}
          <div className="flex gap-4">
            <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
             
            //  src="https://images.unsplash.com/photo-1616627458373-098cb981ec26?auto=format&fit=crop&w=80&q=80"
              alt="Thumbnail 1"
              className="w-14 h-14 rounded object-cover shadow-md"
            />
            <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
             
            //  src="https://images.unsplash.com/photo-1582582494700-0401b58e2d28?auto=format&fit=crop&w=80&q=80"
              alt="Thumbnail 2"
              className="w-14 h-14 rounded object-cover shadow-md"
            />
            <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
             
            //  src="https://images.unsplash.com/photo-1600585153472-cb4f3f3e00f8?auto=format&fit=crop&w=80&q=80"
              alt="Thumbnail 3"
              className="w-14 h-14 rounded object-cover shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Right Section: Main Image */}
      <div className="w-1/2 flex justify-end">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
          alt="Main Furniture"
          className="w-[450px] h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
