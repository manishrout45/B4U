import { useState } from "react";

const navLinks = ["Home", "About Us", "Services", "Gallery", "Pricing"];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Google Fonts + custom micro-styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=DM+Sans:wght@300;400;500&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-dm { font-family: 'DM Sans', sans-serif; }

        .nav-link {
          position: relative;
          padding-bottom: 2px;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 1.5px;
          background: #8B6914;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.25s ease;
        }
        .nav-link:hover::after { 
          transform: scaleX(1); 
        }
      `}</style>

      {/* ── Navbar ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-[12px] bg-[#faf6f0cc] backdrop-blur-md border-b border-[#b4966420] font-dm">

        {/* Logo */}
        <a
          href="#"
          className="flex items-center no-underline hover:opacity-80 transition-opacity duration-200"
        >
          <img
            src="/assets/images/Logo.png"
            alt="B4U Unisex Salon Logo"
            className="h-14 w-auto object-contain"
          />
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-9 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActive(link);
                }}
                className={`nav-link text-sm tracking-wide no-underline transition-colors duration-200 ${
                  active === link
                    ? "text-[#3a3228] font-medium border-b border-[#3a3228]"
                    : "text-[#3a3228] font-normal hover:text-[#8B6914]"
                }`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Contact CTA */}
        <button className="hidden md:block bg-[#8B6914] text-white text-sm font-medium tracking-wide px-5 py-[10px] rounded-md transition-all duration-200 hover:bg-[#7a5c10] active:scale-95">
          Contact
        </button>

        {/* Hamburger (mobile) */}
        <button
          className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-6 h-[1.5px] bg-[#3a3228] transition-all duration-300"
            style={{
              transform: menuOpen
                ? "rotate(45deg) translate(4px, 4px)"
                : "none",
            }}
          />
          <span
            className="block w-6 h-[1.5px] bg-[#3a3228] transition-all duration-300"
            style={{ opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block w-6 h-[1.5px] bg-[#3a3228] transition-all duration-300"
            style={{
              transform: menuOpen
                ? "rotate(-45deg) translate(4px, -4px)"
                : "none",
            }}
          />
        </button>
      </nav>

      {/* ── Mobile Menu (Smooth Scale Animation) ── */}
      <div
        className={`md:hidden fixed top-[65px] left-0 right-0 z-40 
        origin-top transform transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
        ${
          menuOpen
            ? "scale-y-100 opacity-100"
            : "scale-y-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-1 px-6 py-5 bg-[#faf6f0f7] backdrop-blur-lg border-b border-[#b4966426] font-dm shadow-lg">
          
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActive(link);
                setMenuOpen(false);
              }}
              className="text-base text-[#3a3228] font-normal py-3 border-b border-[#b4966420] no-underline hover:text-[#8B6914] transition-colors duration-200"
            >
              {link}
            </a>
          ))}

          <button className="mt-3 bg-[#8B6914] text-white text-sm font-medium py-3 rounded-md hover:bg-[#7a5c10] transition-all duration-200 active:scale-95">
            Contact
          </button>
        </div>
      </div>
    </>
  );
}