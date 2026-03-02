export default function WhyChooseUs() {
  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6M12 9v6" />
        </svg>
      ),
      title: "Personalized Hair, Skin & Grooming Services for Men & Women",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1 1 .03 2.688-1.379 2.688H4.178c-1.408 0-2.38-1.688-1.379-2.688L4.2 15.3" />
        </svg>
      ),
      title: "Premium Products for Hair Treatments, Facials & Makeup",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
        </svg>
      ),
      title: "Advanced Hair Technology – Keratin, Botox & Smoothening",
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-6" style={{ fontFamily: "'Trebuchet MS', sans-serif" }}>
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h2
          className="text-center text-3xl font-bold text-gray-900 mb-10"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          Why Choose B4U Unisex Salon?
        </h2>

        {/* Feature Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex items-start gap-4 border border-gray-200 rounded-xl px-5 py-5 hover:shadow-md transition-shadow duration-300 bg-white"
            >
              <div className="text-gray-700 mt-0.5 flex-shrink-0">{f.icon}</div>
              <p className="text-gray-800 text-sm font-semibold leading-snug">{f.title}</p>
            </div>
          ))}
        </div>

        {/* Bottom Split Section */}
        <div className="flex flex-col lg:flex-row gap-0 rounded-2xl overflow-hidden shadow-lg">

          {/* Left: Image */}
          <div className="lg:w-1/2 min-h-64 relative">
            <img
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=700&q=80"
              alt="Professional hair stylist providing keratin and hair treatment service"
              className="w-full h-full object-cover"
              style={{ minHeight: "320px" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Right: Text */}
          <div className="lg:w-1/2 bg-white flex flex-col justify-center px-10 py-10">
            <h3
              className="text-2xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Trusted Experts in Hair, Skin & Bridal Makeup
            </h3>

            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              At <strong>B4U Unisex Salon</strong>, our certified hair stylists, 
              beauty therapists, and makeup artists deliver exceptional results 
              with precision and creativity. We specialize in trendy haircuts, 
              beard grooming, keratin treatment, hair botox, smoothening, 
              hydra facials, waxing, threading, and professional bridal makeup services.
            </p>

            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Our focus on hygiene, premium-quality products, and the latest 
              beauty techniques ensures a safe, relaxing, and luxurious salon 
              experience for every client. Whether you need a complete makeover 
              or regular grooming, we guarantee satisfaction and style.
            </p>

            <div>
              <button
                className="bg-gray-900 text-white text-sm font-semibold px-7 py-3 rounded hover:bg-gray-700 transition-colors duration-300 tracking-wide"
                style={{ letterSpacing: "0.05em" }}
              >
                Book Your Appointment
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}