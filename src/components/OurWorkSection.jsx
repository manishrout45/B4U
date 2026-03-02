import React from "react";

export default function OurWorkSection() {
  const images = [
    "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1",
    "https://images.unsplash.com/photo-1600948836101-f9ffda59d250",
    "https://images.unsplash.com/photo-1580618672591-eb180b1a973f",
    "https://images.unsplash.com/photo-1605497788044-5a32c7078486",
  ];

  return (
    <section className="bg-[#f5f3ef] py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Heading Section */}
        <div className="grid md:grid-cols-2 gap-10 items-start mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900 leading-tight">
            Our Work Speaks <br /> For Itself
          </h2>

          <p className="text-gray-600 text-sm md:text-base max-w-md">
            Our team of skilled professionals brings years of experience and
            creativity to every project, ensuring exceptional results that
            exceed expectations.
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
                src={`${img}?auto=format&fit=crop&w=500&q=80`}
                alt="Work"
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}