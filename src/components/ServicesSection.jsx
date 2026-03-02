import { useEffect, useRef, useState } from "react";

export default function ServicesSection() {
  const services = [
    // HAIR SERVICES
    {
      src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=80",
      title: "Hair Cutting (Ladies, Gents & Kids)",
    },
    {
      src: "https://images.unsplash.com/photo-1621607512022-6aecc4fed814?w=800&q=80",
      title: "Beard Trimming",
    },
    {
      src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&q=80",
      title: "Clean Shave",
    },
    {
      src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
      title: "Hair Styling",
    },
    {
      src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
      title: "Hair Spa",
    },
    {
      src: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=800&q=80",
      title: "Hair Treatments",
    },
    {
      src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80",
      title: "Keratin",
    },
    {
      src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&q=80",
      title: "Botox Treatment",
    },
    {
      src: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?w=800&q=80",
      title: "Smoothening",
    },
    {
      src: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?w=800&q=80",
      title: "Nanoplastia",
    },

    // SKIN SERVICES
    {
      src: "https://images.unsplash.com/photo-1552693673-1bf958298935?w=800&q=80",
      title: "Clean Up",
    },
    {
      src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
      title: "Facial",
    },
    {
      src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80",
      title: "Hydra Facial",
    },
    {
      src: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?w=800&q=80",
      title: "Waxing",
    },
    {
      src: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?w=800&q=80",
      title: "Lipo Waxing",
    },
    {
      src: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=800&q=80",
      title: "Detan",
    },
    {
      src: "https://images.unsplash.com/photo-1596704017254-9c9f09c3a9f7?w=800&q=80",
      title: "Threading",
    },

    // MAKEUP SERVICES
    {
      src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80",
      title: "Bridal Makeup",
    },
    {
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
      title: "Party Makeup",
    },
    {
      src: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=800&q=80",
      title: "Groom Makeup",
    },

    // HAND & FOOT CARE
    {
      src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80",
      title: "Manicure",
    },
    {
      src: "https://images.unsplash.com/photo-1588776814546-ec7eaa3b4b88?w=800&q=80",
      title: "Pedicure",
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
      {/* Decorative Background */}
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
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Welcome */}
        <div className="text-center mb-1">
          <span
            className="text-red-700 text-3xl"
            style={{
              fontFamily: "'Brush Script MT', cursive",
            }}
          >
            Welcome
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-serif font-semibold tracking-widest text-gray-900 mb-4 uppercase">
          Our Unisex Salon Services
        </h2>

        {/* Subtext */}
        <p className="text-center text-gray-600 text-sm max-w-xl mx-auto mb-12 leading-relaxed">
          Premium Hair, Skin & Makeup services for Ladies, Gents & Kids.
          Experience professional care tailored to enhance your natural beauty.
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
                  <img
                    src={service.src}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

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
