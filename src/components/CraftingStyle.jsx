import React from "react";

export default function CraftingStyle() {
  return (
    <section className="w-full bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gray-800 mb-12">
          Premium Unisex Salon for Hair, Skin & Makeup Services
        </h2>

        {/* Top Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          
          {/* Left Dark Card */}
          <div className="md:col-span-2 bg-[#2c2c2c] text-white p-8 rounded-lg flex flex-col justify-between">
            <p className="text-gray-300 leading-relaxed mb-6">
              At <span className="font-semibold text-white">B4U Unisex Salon</span>, 
              we provide professional <strong>hair cutting, beard styling, hair spa, 
              keratin treatment, smoothening, botox treatment, and nanoplastia</strong> 
              services for men and women. Our expert stylists focus on modern trends, 
              premium products, and personalized grooming to give you a confident, 
              stylish look.
              <br /><br />
              From <strong>hydra facials, clean-ups, waxing, detan, threading</strong> 
              to <strong>bridal makeup and party makeup services</strong>, we ensure 
              complete beauty and skin care solutions under one roof.
            </p>

            <button className="bg-[#c89b5e] text-white px-6 py-2 rounded-md w-fit hover:bg-[#b5894f] transition duration-300">
              Explore Our Services
            </button>
          </div>

          {/* Right Image */}
          <div className="rounded-lg overflow-hidden">
            <img
              src="https://img.freepik.com/premium-photo/female-hairdresser-making-hairstyle-redhead-woman-beauty-salon_776674-1132004.jpg?uid=R162123361&ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80"
              alt="Professional hair styling service at B4U Unisex Salon"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Bottom Left Image */}
          <div className="rounded-lg overflow-hidden">
            <img
              src="https://img.freepik.com/premium-photo/hairdresser-with-scissors-cuts-woman-s-hair-hairdressing-salon-stylist-client-hairsalon-beauty-business-professional-service_266732-18626.jpg?uid=R162123361&ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80"
              alt="Beard trimming and men's grooming service"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Green Feature Card */}
          <div className="bg-[#8fa27a] text-white p-8 rounded-lg flex flex-col justify-center">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-3 h-3 mt-2 bg-white rounded-full"></span>
                <span>
                  Certified hair stylists & beauty therapists with professional expertise
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="w-3 h-3 mt-2 bg-white rounded-full"></span>
                <span>
                  Advanced hair treatments, skin care solutions & bridal makeup services
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="w-3 h-3 mt-2 bg-white rounded-full"></span>
                <span>
                  Hygienic, comfortable, and modern unisex salon environment
                </span>
              </li>
            </ul>
          </div>

          {/* Bottom Right Image */}
          <div className="rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f"
              alt="Hair spa and keratin treatment service"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}