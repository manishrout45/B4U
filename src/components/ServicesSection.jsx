import { useEffect, useRef, useState } from "react";

export default function ServicesSection() {
  const services = [
    {
      src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80",
      title: "Hair Coloring",
    },
    {
      src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
      title: "Hair Styling",
    },
    {
      src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
      title: "Hair Treatment",
    },
    {
      src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&q=80",
      title: "Keratin Therapy",
    },
    {
      src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&q=80",
      title: "Bridal Makeup",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);
  const sliderRef = useRef(null);

  // Responsive items count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsToShow(1);
      else if (window.innerWidth < 1024) setItemsToShow(2);
      else setItemsToShow(3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const extendedServices = [...services, ...services.slice(0, itemsToShow)];

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  // Infinite reset
  useEffect(() => {
    if (currentIndex === services.length) {
      setTimeout(() => {
        sliderRef.current.style.transition = "none";
        setCurrentIndex(0);
      }, 600);

      setTimeout(() => {
        sliderRef.current.style.transition =
          "transform 0.6s ease-in-out";
      }, 650);
    }
  }, [currentIndex, services.length]);

  return (
    <section
      className="w-full py-16 px-6 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #fdf8f2 0%, #f5ede0 40%, #fdf8f2 100%)",
        fontFamily: "'Trebuchet MS', sans-serif",
      }}
    >
      {/* Decorative Background Swirl */}
      <div
        className="absolute inset-0 flex items-start justify-center pointer-events-none select-none opacity-10"
        aria-hidden="true"
      >
        <svg viewBox="0 0 800 400" className="w-full max-w-3xl mt-4" fill="none">
          <path
            d="M400 50 C250 50, 100 150, 150 250 C200 350, 400 300, 500 200 C600 100, 700 200, 650 300"
            stroke="#b5945a"
            strokeWidth="1.5"
          />
          <path
            d="M380 30 C220 30, 80 140, 130 260 C180 370, 390 310, 510 210 C620 110, 720 210, 670 310"
            stroke="#b5945a"
            strokeWidth="0.8"
          />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Script Welcome */}
        <div className="text-center mb-1">
          <span
            className="text-amber-700 text-3xl"
            style={{
              fontFamily: "'Brush Script MT', 'Segoe Script', cursive",
              letterSpacing: "0.02em",
            }}
          >
            Welcome
          </span>
        </div>

        {/* Heading */}
        <h2
          className="text-center text-3xl md:text-4xl font-black tracking-widest text-gray-900 mb-4 uppercase"
          style={{ fontFamily: "'Georgia', serif", letterSpacing: "0.18em" }}
        >
          Explore Our Services
        </h2>

        {/* Subtext */}
        <p className="text-center text-gray-500 text-sm max-w-lg mx-auto mb-12 leading-relaxed">
          Beauties! we allow enough time in your appointment for complete
          in-depth consultation with your finished look.
        </p>

        {/* Slider */}
        <div className="overflow-hidden">
          <div
            ref={sliderRef}
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${
                (currentIndex * 100) / itemsToShow
              }%)`,
            }}
          >
            {extendedServices.map((service, index) => (
              <div
                key={index}
                className="px-3 flex-shrink-0"
                style={{ width: `${100 / itemsToShow}%` }}
              >
                <div className="relative h-[260px] rounded-xl overflow-hidden shadow-md group">
                  
                  {/* Image */}
                  <img
                    src={service.src}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Bottom Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                  {/* Title */}
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg md:text-xl font-semibold">
                      {service.title}
                    </h3>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}