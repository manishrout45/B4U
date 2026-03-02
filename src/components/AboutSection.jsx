import React from "react";

export default function AboutSection() {
  return (
    <section className="bg-[#f4f4f4] py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Image Section */}
        <div className="relative flex justify-center md:justify-start">
          
          {/* Back Image */}
          <div className="absolute -bottom-12 left-28 w-72 md:w-80 h-80 bg-white shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=600&q=80"
              alt="Salon Work"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Front Image */}
          <div className="relative w-72 md:w-80 h-80 bg-white shadow-xl border-4 border-white">
            <img
              src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=600&q=80"
              alt="Hair Styling"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Content Section */}
        <div>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900 leading-tight mb-6">
            We are more than a <br /> Hair salon
          </h2>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation.
            <br /><br />
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>

          <button className="bg-[#0b0f2a] text-white px-6 py-3 text-sm font-medium hover:bg-black transition duration-300">
            Book Services
          </button>
        </div>

      </div>
    </section>
  );
}