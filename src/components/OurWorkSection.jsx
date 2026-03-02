import React from "react";

export default function OurWorkSection() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1",
      alt: "Professional hair styling and haircut service at B4U Unisex Salon"
    },
    {
      url: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250",
      alt: "Bridal makeup and party makeup service by expert makeup artist"
    },
    {
      url: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f",
      alt: "Keratin treatment and smoothening hair service"
    },
    {
      url: "https://images.unsplash.com/photo-1605497788044-5a32c7078486",
      alt: "Hydra facial and professional skin care treatment"
    },
  ];

  return (
    <section className="bg-[#f5f3ef] py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Heading Section */}
        <div className="grid md:grid-cols-2 gap-10 items-start mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900 leading-tight">
            Our Salon Work – Hair, Makeup & Skin Care Transformations
          </h2>

          <p className="text-gray-600 text-sm md:text-base max-w-md">
            At <span className="font-semibold text-gray-900">B4U Unisex Salon</span>, 
            our work reflects creativity, precision, and professional excellence. 
            From trendy haircuts and advanced hair treatments to flawless bridal 
            makeup and rejuvenating skin care services, we deliver stunning 
            transformations tailored to every client.
            <br /><br />
            Explore our portfolio of <strong>hair styling, keratin treatment, 
            smoothening, hydra facials, beard grooming, and bridal makeup</strong> 
            services trusted by our happy clients.
          </p>
        </div>

        {/* Image Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden shadow-md transform transition duration-500 hover:rotate-0 hover:scale-105
                ${index === 0 ? "-rotate-6" : ""}
                ${index === 1 ? "rotate-3" : ""}
                ${index === 2 ? "-rotate-3" : ""}
                ${index === 3 ? "rotate-6" : ""}
              `}
            >
              <img
                src={`${img.url}?auto=format&fit=crop&w=500&q=80`}
                alt={img.alt}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}