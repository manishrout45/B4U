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
              alt="Professional hair styling service at B4U Unisex Salon"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Front Image */}
          <div className="relative w-72 md:w-80 h-80 bg-white shadow-xl border-4 border-white">
            <img
              src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=600&q=80"
              alt="Hair cutting and hair treatment services"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Content Section */}
        <div>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900 leading-tight mb-6">
            Best Unisex Salon for Hair, Skin & Makeup Services
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            <span className="font-semibold text-gray-900">
              B4U Unisex Salon
            </span>{" "}
            is a professional unisex salon offering premium 
            <strong> hair, skin, and makeup services </strong>
            for Ladies, Gents, and Kids. Our expert stylists and beauty 
            professionals are dedicated to delivering modern styles, 
            advanced treatments, and personalized grooming solutions.
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            We specialize in <strong>hair cutting, beard trimming, clean shave, hair styling, 
            hair spa, keratin treatment, botox treatment, smoothening, and nanoplastia</strong>. 
            Our skin care services include <strong>facials, hydra facials, clean-ups, detan, 
            waxing, lipo waxing, and threading</strong> to give you healthy, glowing skin.
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            For special occasions, we provide professional 
            <strong> bridal makeup, party makeup, and groom makeup services </strong>
            to ensure you look flawless and confident. We also offer 
            manicure and pedicure services for complete hand and foot care.
          </p>

          <p className="text-gray-600 mb-8 leading-relaxed">
            At B4U Unisex Salon, we focus on hygiene, premium products, 
            and the latest beauty trends to provide the best salon 
            experience. Book your appointment today and transform 
            your look with trusted beauty experts.
          </p>

          <button className="bg-[#0b0f2a] text-white px-6 py-3 text-sm font-medium hover:bg-black transition duration-300">
            Book Your Appointment
          </button>
        </div>

      </div>
    </section>
  );
}