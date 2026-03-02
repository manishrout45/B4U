import { useState, useEffect } from "react";

function CountUp({ target, duration = 1500 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count}</span>;
}

export default function HairSalonSection() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)",
        fontFamily: "'Georgia', serif",
      }}
    >
      {/* Texture Overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      {/* Background Blur */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&q=40)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(8px)",
        }}
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 py-16 flex flex-col lg:flex-row items-center gap-16">
        
        {/* LEFT CONTENT */}
        <div className="flex-1 text-white max-w-md">
          
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-amber-400" />
            <span
              className="text-amber-400 uppercase tracking-widest text-xs"
              style={{ letterSpacing: "0.2em" }}
            >
              B4U Unisex Salon
            </span>
          </div>

          <h2
            className="text-5xl font-bold leading-tight mb-6"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
          >
            Best Unisex Salon for{" "}
            <span className="italic text-amber-400">
              Hair, Skin & Makeup
            </span>
          </h2>

          <p className="text-gray-300 text-base leading-relaxed mb-10">
            B4U Unisex Salon offers professional hair cutting, beard trimming, 
            clean shave, hair styling, keratin treatment, botox, smoothening, 
            and nanoplastia services for Ladies, Gents, and Kids. 
            We also specialize in advanced skin care including facial, hydra facial, 
            clean-up, detan, waxing, threading, and complete grooming solutions.
            <br /><br />
            Looking for bridal makeup, party makeup, or groom makeup? 
            Our expert artists ensure you look flawless for every occasion.
          </p>

          {/* Stats */}
          <div className="flex gap-12">
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-bold text-white">
                  <CountUp target={7} />
                </span>
                <span className="text-amber-400 text-3xl font-bold">+</span>
              </div>
              <span className="text-gray-400 text-xs uppercase tracking-widest mt-1">
                Years of Professional Experience
              </span>
            </div>

            <div className="w-px bg-gray-600 self-stretch" />

            <div className="flex flex-col">
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-bold text-white">
                  <CountUp target={12} duration={1800} />
                </span>
                <span className="text-amber-400 text-3xl font-bold">+</span>
              </div>
              <span className="text-gray-400 text-xs uppercase tracking-widest mt-1">
                Certified Beauty Experts
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE GRID */}
        <div className="flex-1 max-w-lg w-full">
          <div
            className="grid gap-3"
            style={{
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "200px 200px",
            }}
          >
            <div
              className="overflow-hidden rounded-2xl"
              style={{ gridColumn: "1 / 3", boxShadow: "0 20px 60px rgba(0,0,0,0.5)" }}
            >
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=700&q=80"
                alt="Hair styling and treatment services at B4U Unisex Salon"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            <div
              className="overflow-hidden rounded-2xl"
              style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.5)" }}
            >
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80"
                alt="Professional hair coloring and spa treatment"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            <div
              className="overflow-hidden rounded-2xl"
              style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.5)" }}
            >
              <img
                src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=400&q=80"
                alt="Bridal and party makeup services"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}