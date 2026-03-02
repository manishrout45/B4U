import { useEffect, useRef, useState } from "react";

export default function ServicesSection() {
  const services = [
    // HAIR SERVICES
    {
      src: "https://img.freepik.com/premium-photo/hairdresser-with-scissors-cuts-woman-s-hair-hairdressing-salon-stylist-client-hairsalon-beauty-business-professional-service_266732-18626.jpg?uid=R162123361&ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
      title: "Hair Cutting (Ladies, Gents & Kids)",
    },
    {
      src: "https://img.freepik.com/free-photo/handsome-man-cutting-beard-barber-salon_1303-20966.jpg?uid=R162123361&ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
      title: "Beard Trimming",
    },
    {
      src: "https://img.freepik.com/free-photo/mid-section-barber-applying-cream-clients-beard_107420-94760.jpg?uid=R162123361&ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
      title: "Clean Shave",
    },
    {
      src: "https://img.freepik.com/premium-photo/female-hairdresser-making-hairstyle-brunette-woman-beauty-salon_776674-1123234.jpg?uid=R162123361&ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
      title: "Hair Styling",
    },
    {
      src: "https://img.freepik.com/free-photo/woman-getting-treatment-hairdresser-shop_23-2149229759.jpg?uid=R162123361&ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
      title: "Hair Spa",
    },
    {
      src: "https://img.freepik.com/free-photo/beautician-protective-mask-doing-procedure-hair_7502-7509.jpg?uid=R162123361&ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
      title: "Hair Treatments",
    },
    {
      src: "https://img.freepik.com/premium-photo/portrait-beautiful-young-woman-with-healthy-strong-hair-white-background_1339860-3083.jpg?uid=R162123361&ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
      title: "Keratin",
    },
    {
      src: "https://img.freepik.com/premium-photo/cosmetician-hands-with-working-tools-female-patient-face-rejuvenation-procedure-beautician-salon-doctor-woman-cosmetic-surgery-against-wrinkles-aging_266732-22165.jpg?uid=R162123361&ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
      title: "Botox Treatment",
    },
    {
      src: "https://img.freepik.com/free-photo/bride-make-hair-with-dress_1150-11369.jpg?uid=R162123361&ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
      title: "Smoothening",
    },
    {
      src: "https://img.freepik.com/free-photo/woman-getting-her-hair-done-beauty-salon_23-2149167405.jpg?uid=R162123361&ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
      title: "Nanoplastia",
    },

    // SKIN SERVICES
    {
      src: "https://img.freepik.com/free-photo/close-up-face-young-woman-relaxing-gentle_158595-4582.jpg?uid=R162123361&ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
      title: "Clean Up",
    },
    {
      src: "https://img.freepik.com/free-photo/cosmetologist-applying-mask-face-client-beauty-salon_1303-16770.jpg?uid=R162123361&ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
      title: "Facial",
    },
    {
      src: "https://img.freepik.com/free-photo/young-woman-lying-cosmetologist-s-table-rejuvenation-procedure_343596-85.jpg?uid=R162123361&ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
      title: "Hydra Facial",
    },
    {
      src: "https://img.freepik.com/free-photo/beautiful-young-girl-beauty-salon_1157-21117.jpg?uid=R162123361&ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
      title: "Waxing",
    },
    {
      src: "https://img.freepik.com/free-photo/professional-woman-making-wax-another-woman-arm_1208-323.jpg?uid=R162123361&ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
      title: "Lipo Waxing",
    },
    {
      src: "https://img.freepik.com/free-photo/woman-relaxing-spa_329181-13167.jpg?uid=R162123361&ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
      title: "Detan",
    },
    {
      src: "https://img.freepik.com/free-photo/young-woman-beauty-salon_23-2148895550.jpg?uid=R162123361&ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
      title: "Threading",
    },

    // MAKEUP SERVICES
    {
      src: "https://img.freepik.com/premium-photo/woman-is-putting-make-up-front-model_981168-5098.jpg?uid=R162123361&ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
      title: "Bridal Makeup",
    },
    {
      src: "https://img.freepik.com/free-photo/two-girls-are-doing-make-up-front-big-mirror_231208-3556.jpg?uid=R162123361&ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
      title: "Party Makeup",
    },
    {
      src: "https://img.freepik.com/free-photo/front-view-hairstylist-cutting-client-s-hair_23-2148242834.jpg?uid=R162123361&ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
      title: "Groom Makeup",
    },

    // HAND & FOOT CARE
    {
      src: "https://img.freepik.com/free-photo/healthy-beautiful-manicure-manicurist_23-2148766558.jpg?uid=R162123361&ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
      title: "Manicure",
    },
    {
      src: "https://img.freepik.com/free-photo/foot-washing-spa-before-treatment-spa-treatment-product-female-feet-hand-spa_1150-37704.jpg?uid=R162123361&ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80",
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
