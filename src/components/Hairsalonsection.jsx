import { useState, useEffect } from "react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&q=80",
    alt: "Stylist blow drying hair",
    className: "col-span-2 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&q=80",
    alt: "Hair coloring treatment",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=300&q=80",
    alt: "Beautiful hair result",
    className: "col-span-1 row-span-1",
  },
];

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
        background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)",
        fontFamily: "'Georgia', serif",
      }}
    >
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      {/* Background blur effect from left image (simulated) */}
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
        
        {/* Left: Text */}
        <div className="flex-1 text-white max-w-md">
          {/* Decorative line */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-amber-400" />
            <span
              className="text-amber-400 uppercase tracking-widest text-xs"
              style={{ fontFamily: "'Trebuchet MS', sans-serif", letterSpacing: "0.2em" }}
            >
              Premium Salon
            </span>
          </div>

          <h2
            className="text-5xl font-bold leading-tight mb-6"
            style={{
              fontFamily: "'Georgia', serif",
              textShadow: "0 2px 20px rgba(0,0,0,0.5)",
            }}
          >
            We will change your{" "}
            <span
              className="italic"
              style={{
                color: "#f0c040",
                textShadow: "0 0 30px rgba(240,192,64,0.3)",
              }}
            >
              out looks
            </span>
          </h2>

          <p
            className="text-gray-300 text-base leading-relaxed mb-10"
            style={{ fontFamily: "'Trebuchet MS', sans-serif", fontWeight: 300 }}
          >
            Our talented specialists are ready to share their secrets.
            <br />
            Don't lose this opportunity.
          </p>

          {/* Stats */}
          <div className="flex gap-12">
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1">
                <span
                  className="text-5xl font-bold text-white"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  <CountUp target={7} />
                </span>
                <span className="text-amber-400 text-3xl font-bold">+</span>
              </div>
              <span
                className="text-gray-400 text-xs uppercase tracking-widest mt-1"
                style={{ fontFamily: "'Trebuchet MS', sans-serif", letterSpacing: "0.15em" }}
              >
                Years Experience
              </span>
            </div>

            {/* Divider */}
            <div className="w-px bg-gray-600 self-stretch" />

            <div className="flex flex-col">
              <div className="flex items-baseline gap-1">
                <span
                  className="text-5xl font-bold text-white"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  <CountUp target={12} duration={1800} />
                </span>
                <span className="text-amber-400 text-3xl font-bold">+</span>
              </div>
              <span
                className="text-gray-400 text-xs uppercase tracking-widest mt-1"
                style={{ fontFamily: "'Trebuchet MS', sans-serif", letterSpacing: "0.15em" }}
              >
                Awesome Experts
              </span>
            </div>
          </div>
        </div>

        {/* Right: Image Grid */}
        <div className="flex-1 max-w-lg w-full">
          <div
            className="grid gap-3"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "200px 200px",
            }}
          >
            {/* Large top image */}
            <div
              className="overflow-hidden rounded-2xl"
              style={{
                gridColumn: "1 / 3",
                gridRow: "1 / 2",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=700&q=80"
                alt="Stylist working"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Bottom left */}
            <div
              className="overflow-hidden rounded-2xl"
              style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.5)" }}
            >
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80"
                alt="Hair treatment"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Bottom right */}
            <div
              className="overflow-hidden rounded-2xl"
              style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.5)" }}
            >
              <img
                src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=400&q=80"
                alt="Beautiful result"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}