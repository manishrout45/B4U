export default function HeroSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=DM+Sans:wght@300;400;500&display=swap');

        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-dm { font-family: 'DM Sans', sans-serif; }

        .hero-bg {
          background: radial-gradient(ellipse at 60% 40%, #e8ddd0 0%, #f0e8dc 40%, #f5ede3 100%);
        }

        .hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(48px, 10vw, 150px);
          font-weight: 900;
          line-height: 0.9;
          color: #1a1a2e;
        }

        .book-btn {
          background: #8B6914;
          transition: 0.3s ease;
        }
        .book-btn:hover {
          background: #7a5c10;
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(139,105,20,0.35);
        }

        .avatar-ring {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 2px solid white;
          margin-left: -8px;
          background: #c9a96e;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          color: white;
        }
        .avatar-ring:first-child { margin-left: 0; }
      `}</style>

      <section className="hero-bg pt-24 pb-16 font-dm overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">

          {/* Title */}
          <div className="text-center">
            <h1 className="hero-title">B4U</h1>
            <p className="font-playfair italic text-lg md:text-2xl mt-2">
              Where Beauty Meets Confidence
            </p>
          </div>

          {/* Responsive Grid Layout */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">

            {/* LEFT CONTENT */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <p className="text-[#5a4f45] text-sm md:text-base leading-relaxed max-w-sm mx-auto lg:mx-0">
                From hair to skin, our expert stylists and therapists are here to
                bring out your natural glow with care, style, and luxury.
              </p>

              <button className="book-btn mt-6 text-white text-sm px-6 py-3 rounded-md">
                Book an Appointment
              </button>
            </div>

            {/* CENTER IMAGE */}
            <div className="relative flex justify-center order-1 lg:order-2">
              <div className="relative w-[260px] sm:w-[320px] md:w-[380px] lg:w-[420px]">
                <img
                  src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80"
                  alt="Professional hairstylist at B4U Unisex Salon"
                  className="w-full h-[400px] md:h-[520px] object-cover object-top rounded-t-[180px]"
                  style={{
                    maskImage:
                      "linear-gradient(to bottom, black 75%, transparent 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, black 75%, transparent 100%)",
                  }}
                />

                {/* Floating Badge */}
                <div className="absolute right-[-10px] md:right-[-40px] top-[180px]">
                  <div className="bg-[#4a6741] text-white px-4 py-2 rounded-2xl flex items-center gap-2 shadow-lg">
                    <div className="flex items-center">
                      {["B", "4", "U"].map((l, i) => (
                        <div key={i} className="avatar-ring">{l}</div>
                      ))}
                    </div>
                    <div>
                      <div className="text-sm font-semibold">7+ Years</div>
                      <div className="text-xs opacity-80">Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-col items-center lg:items-end gap-6 order-3">

              <div className="w-[160px] h-[180px] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&q=80"
                  alt="Luxury salon interior"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-[200px] bg-[#1a1a2e] text-white rounded-2xl p-5 shadow-xl">
                <div className="font-playfair text-2xl text-[#c9a96e] font-bold">
                  40% Offer
                </div>
                <p className="text-xs text-gray-300 mt-2">
                  Premium salon services crafted for your glow and confidence.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="mt-14 flex justify-center lg:justify-start">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-md border border-white/60">
              <div className="flex items-baseline gap-1">
                <span className="font-playfair text-3xl font-bold">5
                  <span className="font-playfair text-2xl font-bold text-[#8B6914]"> k + </span>
                </span>
                <span className="ml-2 text-base font-medium">
                  Happy Clients
                </span>
              </div>
              <p className="text-sm text-[#5a4f45] mt-1">
                Trusted for premium hair, skin, and grooming services.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}