import React from "react";

export default function CraftingStyle() {
  return (
    <section className="w-full bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gray-800 mb-12">
          Crafting Confidence & Style
        </h2>

        {/* Top Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          
          {/* Left Dark Card */}
          <div className="md:col-span-2 bg-[#2c2c2c] text-white p-8 rounded-lg flex flex-col justify-between">
            <p className="text-gray-300 leading-relaxed mb-6">
              With a team of skilled stylists and beauty experts, we offer
              personalized services that bring out your natural glow. From
              refreshing haircuts to rejuvenating spa treatments, every detail
              is designed to give you a luxurious and relaxing experience.
            </p>

            <button className="bg-[#c89b5e] text-white px-6 py-2 rounded-md w-fit hover:bg-[#b5894f] transition duration-300">
              Learn More
            </button>
          </div>

          {/* Right Image */}
          <div className="rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e"
              alt="Hair Styling"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Bottom Left Image */}
          <div className="rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
              alt="Beard Styling"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Green Feature Card */}
          <div className="bg-[#8fa27a] text-white p-8 rounded-lg flex flex-col justify-center">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-3 h-3 mt-2 bg-white rounded-full"></span>
                <span>
                  Expert stylists & therapists with years of experience
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="w-3 h-3 mt-2 bg-white rounded-full"></span>
                <span>
                  Modern techniques blended with timeless elegance
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="w-3 h-3 mt-2 bg-white rounded-full"></span>
                <span>
                  A welcoming space built for comfort and self-care
                </span>
              </li>
            </ul>
          </div>

          {/* Bottom Right Image */}
          <div className="rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f"
              alt="Hair Treatment"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}